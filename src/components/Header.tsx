'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-zinc-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-amber-500">Thousand Oaks Barbers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+18059094450"
              className="bg-amber-500 text-zinc-900 px-5 py-2.5 rounded-lg hover:bg-amber-400 transition-colors font-semibold"
            >
              (805) 909-4450
            </a>
            <Link
              href="/book"
              className="border-2 border-amber-500 text-amber-500 px-5 py-2 rounded-lg hover:bg-amber-500 hover:text-zinc-900 transition-colors font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-amber-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+18059094450"
              className="block mt-4 bg-amber-500 text-zinc-900 px-4 py-3 rounded-lg text-center font-semibold"
            >
              Call (805) 909-4450
            </a>
            <Link
              href="/book"
              className="block mt-2 border-2 border-amber-500 text-amber-500 px-4 py-3 rounded-lg text-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
