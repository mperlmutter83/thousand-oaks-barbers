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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCFW9B6D');`,
          }}
        />
        {/* End Google Tag Manager */}
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
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:30",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "10:30",
                  "closes": "16:30"
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCFW9B6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
