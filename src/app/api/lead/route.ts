import { NextRequest, NextResponse } from 'next/server';

// Forwards leads to the Yes Crew CRM form endpoint for this business.
// The provider is resolved there from the opaque form_key — never spoofable.
// The key stays server-side via CRM_FORM_KEY (never shipped to the browser).
const CRM_FORM_URL = `https://yescrew-dashboard.vercel.app/api/forms/${process.env.CRM_FORM_KEY}/submit`;

// "Looking for Work" applicants are emailed directly to Mike in addition to
// landing in the CRM. Uses the shared Resend account (verified sender: yesidoinc.com).
const NOTIFY_TO = 'yescrewnetwork@gmail.com';
const FROM = 'Thousand Oaks Barbers <info@yesidoinc.com>';
const DOMAIN = 'thousandoaksbarbers.com';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function notifyWorkApplicant(opts: {
  name: string;
  phone: string;
  email: string | null;
  serviceNeeded: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: 'RESEND_API_KEY not set' };

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;">
      <h2 style="margin:0 0 12px;">New work applicant — ${DOMAIN}</h2>
      <p><strong>Name:</strong> ${escapeHtml(opts.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(opts.phone)}</p>
      ${opts.email ? `<p><strong>Email:</strong> ${escapeHtml(opts.email)}</p>` : ''}
      ${opts.serviceNeeded ? `<p><strong>Details:</strong> ${escapeHtml(opts.serviceNeeded)}</p>` : ''}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="font-size:13px;color:#888;">Reply directly to this email to respond to the applicant.</p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: NOTIFY_TO,
        replyTo: opts.email || undefined,
        subject: `New work applicant — ${opts.name} (${DOMAIN})`,
        html,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend send failed:', res.status, errText);
      return { ok: false, error: `Resend ${res.status}: ${errText}` };
    }
    return { ok: true };
  } catch (err) {
    console.error('Resend send error:', err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      submission_id,
      elapsed_ms,
      company_website,
    } = body;

    const isWorkApplicant = service === 'Looking for Work';

    let leadName: string;
    let serviceNeeded: string | null;

    if (isWorkApplicant) {
      // Work-applicant contract (WorkForm): single name field, email optional.
      if (!name || !phone) {
        return NextResponse.json(
          { error: 'Name and phone are required' },
          { status: 400 }
        );
      }
      leadName = name;
      serviceNeeded = [
        'Service: Looking for Work',
        message ? `Details: ${message}` : null,
        `Source: ${DOMAIN}`,
      ]
        .filter(Boolean)
        .join(' | ');
    } else {
      // Existing contact-form contract (LeadForm): firstName/lastName/email/phone.
      if (!firstName || !lastName || !email || !phone) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        );
      }
      leadName = `${firstName} ${lastName}`.trim();
      serviceNeeded = message || null;
    }

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: leadName,
        email: email || null,
        phone,
        service_needed: serviceNeeded,
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    // Work applicants always get emailed to Mike — even if the CRM hiccups,
    // no job seeker is lost.
    let emailResult: { ok: boolean; error?: string } | null = null;
    if (isWorkApplicant) {
      emailResult = await notifyWorkApplicant({
        name: leadName,
        phone,
        email: email || null,
        serviceNeeded,
      });
    }
    const emailed = emailResult?.ok ?? false;

    if (!crmResponse.ok) {
      console.error('CRM form submit failed:', crmResponse.status);
      if (isWorkApplicant && emailed) {
        return NextResponse.json(
          { success: true, workApplicantEmailed: true },
          { status: 201 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to submit lead' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      workApplicantEmailed: isWorkApplicant ? emailed : undefined,
      workApplicantEmailError: emailResult?.error,
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
