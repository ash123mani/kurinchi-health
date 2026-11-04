import type { Metadata, Viewport } from "next";
import { Fraunces, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { SITE, fullAddress } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Natural Food & Health Products",
  keywords: [...SITE.keywords],
  alternates: {
    canonical: "/",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3D2B",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": `${SITE.url}/#store`,
      name: SITE.name,
      alternateName: SITE.tamilName,
      url: SITE.url,
      image: `${SITE.url}/og-image.jpg`,
      logo: `${SITE.url}/icon.svg`,
      description: SITE.description,
      telephone: SITE.phone,
      email: SITE.email,
      priceRange: "₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      areaServed: {
        "@type": "State",
        name: "Tamil Nadu",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      sameAs: Object.values(SITE.social).filter(Boolean),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kurinchi Health Products",
        itemListElement: [
          "Cold Pressed Coconut Oil",
          "Cold Pressed Gingelly Oil",
          "Cold Pressed Groundnut Oil",
          "Organic Country Sugar",
          "Himalayan Rock Salt",
          "Handmade Coconut Oil Soap",
          "Herbal Hair Oil",
          "Pure Palm Jaggery",
          "Palm Candy",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: ["en-IN", "ta-IN"],
      publisher: { "@id": `${SITE.url}/#store` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      description: SITE.description,
      address: fullAddress(),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${notoTamil.variable}`}
    >
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <StructuredData data={structuredData} />
      </body>
    </html>
  );
}
