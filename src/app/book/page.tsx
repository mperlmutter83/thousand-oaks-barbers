import { Metadata } from 'next';
import Link from 'next/link';
import BookingEmbed from '@/components/BookingEmbed';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your appointment at Thousand Oaks Barbers. Call (805) 909-4450 to schedule your haircut, fade, or beard trim.',
};

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Book Now</h1>
          <p className="text-gray-400">Schedule your appointment online or call us</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Embed */}
          <BookingEmbed />

          {/* Alternative Contact */}
          <div className="mt-12 bg-zinc-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Prefer to Call?</h2>
            <p className="text-gray-400 mb-6">
              Give us a call to schedule your appointment directly.
            </p>
            <a
              href="tel:+18059094450"
              className="inline-block bg-amber-500 text-zinc-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-amber-400 transition-colors"
            >
              Call (805) 909-4450
            </a>
          </div>

          {/* Location Info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
            <p className="text-gray-400 text-lg">658 Thousand Oaks Blvd.</p>
            <p className="text-gray-400 text-lg mb-6">Thousand Oaks, CA 91360</p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Hours</h3>
            <p className="text-gray-400">Mon – Fri: 10:30am – 6pm</p>
            <p className="text-gray-400">Sat: 10:30am – 4:30pm · Sun: Closed</p>
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
