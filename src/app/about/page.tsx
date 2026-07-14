import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Thousand Oaks Barbers - serving the Conejo Valley since 2015. Traditional barbershop where craftsmanship meets modern style.',
};

export default function AboutPage() {
  const reviews = [
    { name: 'Greg Greshler', text: "There is a reason you keep going back to the same barber. Devin is the best! I've never had as many compliments on my hair and beard line up when Devin cuts it! Highly recommend!!" },
    { name: 'Oscar Figueroa', text: "Devin is great! I spent a while trying to find a good barber. He definitely has the skill, but also has the knowledge of how it works and gives advice of how to achieve the look you're going for. Almost like a scientist." },
    { name: 'Orlando Miranda', text: "I have been a client of Devin for 2 years, and in that time have never once been disappointed by a haircut. Devin is professional, and highly knowledgeable in his craft." },
    { name: 'Matthew Mccowan', text: "I won't go anywhere else to have my beard or hair maintenance done. Always flexible on times to squeeze you in and does a precise and fast job. Also incredibly knowledgeable about hair, a true artist." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Thousand Oaks Barbers<br />Est. 2015
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-lg mb-6">
            Welcome to <strong className="text-white">Thousand Oaks Barber</strong>, where tradition meets modern style. Located in the heart of Thousand Oaks, we are more than just a barbershop—we&apos;re a place where craftsmanship, community, and confidence come together.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            At Thousand Oaks Barber, we take immense pride in our craft. Each haircut, shave, and style is tailored specifically to you, ensuring you leave the chair looking sharp and feeling your best. Whether you&apos;re after a classic cut, a modern fade, or a traditional straight razor shave, our team of experienced barbers delivers precision and quality every time.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            We believe a great barbershop is about more than just the cut—it&apos;s about connection. From the moment you walk through our doors, you&apos;ll feel right at home. Grab a seat, enjoy the banter, and experience the timeless atmosphere of a true neighborhood barbershop.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Barbers</h3>
              <p className="text-gray-400">Our skilled team brings years of experience and passion for their work.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personalized Service</h3>
              <p className="text-gray-400">We take the time to understand your style and grooming needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Vibes</h3>
              <p className="text-gray-400">We&apos;re proud to be a part of Thousand Oaks, serving locals with care and pride.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Timeless Techniques</h3>
              <p className="text-gray-400">Whether it&apos;s a clean fade or a classic shave, we combine traditional methods with modern trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider">Our Story</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Established in Los Angeles in 2015</h2>
          <p className="text-gray-300 text-lg mb-6">
            Our exceptional barbers bring over 15 years of experience and a deep passion for the art of grooming. With talent and dedication, we have become a trusted name among our loyal clientele.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            At Thousand Oaks Barbers, you can expect an extensive range of haircut options, from stylish fades to timeless classic cuts. Our meticulous approach ensures that each haircut is executed with precision and care, leaving you with a look that perfectly complements your style and personality.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Hear from our happy customers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-zinc-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">Posted on Google</p>
                  </div>
                </div>
                <p className="text-gray-400">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Ready for a Fresh Cut?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            Book your appointment today and experience the difference.
          </p>
          <Link
            href="/book"
            className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
