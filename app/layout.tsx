import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Chicho Barbershop LLC | Premium Barber — Trenton, NJ",
  description:
    "Chicho Barbershop LLC — Premium haircuts, fades, beard trims & styling in Trenton, NJ. Rated 4.3★. Walk-ins welcome. Call (609) 310-8842.",
  keywords: [
    "barbershop Trenton NJ",
    "Chicho Barbershop",
    "haircut Trenton",
    "beard trim Trenton NJ",
    "fade haircut NJ",
    "barber 869 E State St",
    "braids Trenton NJ",
    "trenzas Trenton NJ",
    "manicure Trenton NJ",
    "pedicure Trenton NJ",
    "nail salon Trenton NJ",
    "nails Trenton NJ",
    "box braids Trenton",
    "knotless braids NJ",
    "nail art Trenton NJ",
    "uñas Trenton NJ",
  ],
  openGraph: {
    title: "Chicho Barbershop LLC | Premium Barber — Trenton, NJ",
    description: "Premium haircuts, fades, beard trims & styling. Rated 4.3★.",
    type: "website",
    locale: "en_US",
    siteName: "Chicho Barbershop LLC",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
              "@type": ["HairSalon", "Barbershop", "LocalBusiness"],
              "@id": "https://www.chichobarbershop.com/#business",
              name: "Chicho Barbershop LLC",
              url: "https://www.chichobarbershop.com/",
              telephone: "+1-609-310-8842",
              description:
                "Chicho Barbershop LLC is a professional barbershop located in Trenton, New Jersey offering barber haircuts, braids, custom hair designs, manicure and pedicure services. The shop is owned by Chicho, a barber with more than 15 years of experience in the barbering industry.",
              image: "https://www.chichobarbershop.com/og-image.jpg",
              founder: {
                "@type": "Person",
                name: "Chicho",
                jobTitle: "Master Barber",
                description:
                  "Professional barber with more than 15 years of experience in haircuts, fades, designs, and grooming services.",
              },
              foundingDate: "2010",
              address: {
                "@type": "PostalAddress",
                streetAddress: "869 E State St",
                addressLocality: "Trenton",
                addressRegion: "NJ",
                postalCode: "08609",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.2235967,
                longitude: -74.7452216,
              },
              hasMap:
                "https://www.google.com/maps/place/Chicho+Barbershop+LLC/@40.2236008,-74.7477965,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15905d680000f:0xf9cfbe8453285485!8m2!3d40.2235967!4d-74.7452216!16s%2Fg%2F11yfqkx5c3",
              priceRange: "$$",
              areaServed: [
                { "@type": "City", name: "Trenton" },
                { "@type": "City", name: "Hamilton" },
                { "@type": "City", name: "Ewing" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              employee: [
                {
                  "@type": "Person",
                  name: "María",
                  jobTitle: "Braiding Specialist",
                  description: "Professional braiding specialist offering box braids, knotless braids, cornrows, twists, and all types of protective styles at Chicho Barbershop LLC in Trenton, NJ.",
                  knowsAbout: ["Braids", "Box Braids", "Knotless Braids", "Cornrows", "Twists", "Trenzas", "Protective Styles", "Natural Hair"],
                  url: "https://www.chichobarbershop.com/team/maria",
                },
                {
                  "@type": "Person",
                  name: "Gaby",
                  jobTitle: "Nail Technician",
                  description: "Certified nail technician offering manicure, pedicure, gel nails, acrylic nails, and nail art at Chicho Barbershop LLC in Trenton, NJ.",
                  knowsAbout: ["Manicure", "Pedicure", "Gel Nails", "Acrylic Nails", "Nail Art", "Nail Design", "Uñas", "Spa Pedicure"],
                  url: "https://www.chichobarbershop.com/team/gabi",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Barbershop and Beauty Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Regular Haircut",
                      description: "Precision haircut tailored to your face shape and style preferences.",
                      provider: { "@type": "LocalBusiness", name: "Chicho Barbershop LLC" },
                    },
                    priceSpecification: { "@type": "PriceSpecification", price: "30", priceCurrency: "USD" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fades",
                      description: "Clean skin fade or taper — low, mid or high, perfectly blended.",
                      provider: { "@type": "LocalBusiness", name: "Chicho Barbershop LLC" },
                    },
                    priceSpecification: { "@type": "PriceSpecification", price: "30", priceCurrency: "USD" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Haircut + Beard",
                      description: "Full haircut combined with expert beard sculpting and lining.",
                      provider: { "@type": "LocalBusiness", name: "Chicho Barbershop LLC" },
                    },
                    priceSpecification: { "@type": "PriceSpecification", price: "40", priceCurrency: "USD" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Braids",
                      description: "Professional braiding styles including box braids, knotless braids, cornrows and twists by specialist María at Chicho Barbershop in Trenton NJ.",
                      provider: { "@type": "Person", name: "María" },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Manicure",
                      description: "Professional manicure and nail art services by nail technician Gaby at Chicho Barbershop in Trenton NJ.",
                      provider: { "@type": "Person", name: "Gaby" },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pedicure",
                      description: "Professional pedicure and nail care services by nail technician Gaby at Chicho Barbershop in Trenton NJ.",
                      provider: { "@type": "Person", name: "Gaby" },
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
