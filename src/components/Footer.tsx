import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-amber-500 mb-4">Thousand Oaks Barbers</h3>
            <p className="text-gray-400 mb-4">
              A traditional barbershop where craftsmanship, community, and confidence come together. Serving Thousand Oaks since 2015.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:+18059094450" className="hover:text-amber-500 transition-colors">
                  (805) 909-4450
                </a>
              </p>
              <p>
                <a href="mailto:info@thousandoaksbarbers.com" className="hover:text-amber-500 transition-colors">
                  info@thousandoaksbarbers.com
                </a>
              </p>
              <p>658 Thousand Oaks Blvd.<br />Thousand Oaks, CA 91360</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-amber-500 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Open Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday – Friday: 10am – 10pm</li>
              <li>Saturday: 10am – 10pm</li>
              <li>Sunday: 10am – 10pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Thousand Oaks Barbers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
