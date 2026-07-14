import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Thousand Oaks Barbers. Call (805) 909-4450 or visit us at 658 Thousand Oaks Blvd, Thousand Oaks, CA 91360.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-2xl text-amber-500 font-semibold">(805) 909-4450</p>
          <p className="text-gray-400 mt-2">info@thousandoaksbarbers.com</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Appointments Only</h2>
              
              <div className="space-y-8">
                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Visit</h3>
                  <p className="text-white text-xl">658 Thousand Oaks Boulevard</p>
                  <p className="text-gray-400">Thousand Oaks, CA 91360</p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Contact</h3>
                  <p className="text-white text-xl mb-2">
                    <a href="tel:+18059094450" className="hover:text-amber-500 transition-colors">
                      (805) 909-4450
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <a href="mailto:info@thousandoaksbarbers.com" className="hover:text-amber-500 transition-colors">
                      info@thousandoaksbarbers.com
                    </a>
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Hours</h3>
                  <p className="text-gray-400">Monday – Friday: 10am – 10pm</p>
                  <p className="text-gray-400">Saturday: 10am – 10pm</p>
                  <p className="text-gray-400">Sunday: 10am – 10pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-zinc-900 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
