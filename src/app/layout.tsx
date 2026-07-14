import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thousand Oaks Barbers | Traditional Barbershop",
    template: "%s | Thousand Oaks Barbers",
  },
  description: "Traditional barbershop in Thousand Oaks, CA. Expert haircuts, fades, beard trims, and straight razor shaves. Serving the Conejo Valley since 2015.",
  keywords: ["barber", "barbershop", "haircut", "Thousand Oaks", "fade", "beard trim", "straight razor shave", "Conejo Valley"],
  openGraph: {
    title: "Thousand Oaks Barbers | Traditional Barbershop",
    description: "Traditional barbershop in Thousand Oaks, CA. Expert haircuts, fades, beard trims, and straight razor shaves.",
    url: "https://thousandoaksbarbers.com",
    siteName: "Thousand Oaks Barbers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              "name": "Thousand Oaks Barbers",
              "description": "Traditional barbershop offering expert haircuts, fades, beard trims, and straight razor shaves in Thousand Oaks, CA.",
              "url": "https://thousandoaksbarbers.com",
              "telephone": "+1-805-909-4450",
              "email": "info@thousandoaksbarbers.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "658 Thousand Oaks Blvd",
                "addressLocality": "Thousand Oaks",
                "addressRegion": "CA",
                "postalCode": "91360",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.1706,
                "longitude": -118.8376
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "22:00"
                }
              ],
              "priceRange": "$$",
              "image": "https://thousandoaksbarbers.com/og-image.jpg"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
