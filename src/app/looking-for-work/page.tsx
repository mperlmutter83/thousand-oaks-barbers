import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(805) 909-4450';
const PHONE_HREF = 'tel:+18059094450';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for barber work in Thousand Oaks? Local barbershops are hiring. Fill out the quick form and we'll connect you — or call (805) 909-4450.",
  alternates: { canonical: 'https://thousandoaksbarbers.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local barbershops that are actively hiring barbers.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested shops contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Haircuts',
  'Fades',
  'Beard Trims',
  'Line-Ups',
  'Hot Towel Shaves',
  'Kids Cuts',
];

export default function LookingForWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">
            Looking for Work?
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
            Barber Work in Thousand Oaks
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-400">
            Local barbershops are growing and looking for dependable barbers. Tell us about
            yourself and we&apos;ll connect you with shops that are hiring — free, fast, and no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block bg-amber-500 text-zinc-900 px-7 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block border-2 border-amber-500 px-7 py-3 rounded-lg font-semibold text-amber-500 hover:bg-amber-500/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-zinc-900 rounded-xl p-8 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-zinc-900">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-gray-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Kind of Work Available */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            Barbershops in Thousand Oaks and the surrounding Conejo Valley hire for a range of
            barber work, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-gray-300 font-medium"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="work-form" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white text-center">Apply in 60 Seconds</h2>
            <p className="mt-2 text-center text-gray-400">
              Free and confidential — we&apos;ll only share your details with shops that are
              hiring.
            </p>
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
          <p className="mt-8 text-center text-gray-400">
            Own a barbershop and need reliable barbers?{' '}
            <a href={PHONE_HREF} className="font-bold text-amber-500 underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
