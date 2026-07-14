import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your appointment at Thousand Oaks Barbers. Call (805) 909-4450 to schedule your haircut, fade, or beard trim.',
};

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Book Now</h1>
          <p className="text-2xl text-amber-500 font-semibold mb-8">Call Us (805) 909-4450</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Book with Thousand Oaks Barbers</h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready for your next fresh cut? Give us a call to schedule your appointment.
            </p>
            
            <a
              href="tel:+18059094450"
              className="inline-block bg-amber-500 text-zinc-900 px-12 py-5 rounded-lg font-bold text-xl hover:bg-amber-400 transition-colors mb-8"
            >
              Call (805) 909-4450
            </a>

            <div className="border-t border-zinc-800 pt-8 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
              <p className="text-gray-400 text-lg">658 Thousand Oaks Blvd.</p>
              <p className="text-gray-400 text-lg mb-6">Thousand Oaks, CA 91360</p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Hours</h3>
              <p className="text-gray-400">Monday – Sunday: 10am – 10pm</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Have questions before booking?</p>
            <Link
              href="/contact"
              className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
