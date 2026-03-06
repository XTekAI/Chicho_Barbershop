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
    "hot towel shave NJ",
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
              "@type": "BarberShop",
              name: "Chicho Barbershop LLC",
              image: "/hero.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "869 E State St",
                addressLocality: "Trenton",
                addressRegion: "NJ",
                postalCode: "08609",
                addressCountry: "US",
              },
              telephone: "+1-609-310-8842",
              url: "https://chichobarbershop.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "120",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              priceRange: "$18-$65",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Barbershop Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Classic Haircut" }, price: "25", priceCurrency: "USD" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Trim & Shape" }, price: "20", priceCurrency: "USD" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fade & Taper" }, price: "30", priceCurrency: "USD" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Towel Shave" }, price: "35", priceCurrency: "USD" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Haircut" }, price: "18", priceCurrency: "USD" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Package" }, price: "65", priceCurrency: "USD" },
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
