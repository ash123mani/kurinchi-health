import type { Metadata, Viewport } from "next";
import { Fraunces, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StructuredData } from "@/components/structured-data";
import {
  htmlLang,
  isLocale,
  locales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProducts } from "@/i18n/products";
import { formatMessage } from "@/lib/format";
import {
  localizedUrl,
  openGraphLocale,
  pageAlternates,
} from "@/lib/seo";
import { SITE, fullAddress } from "@/lib/site";
import "../globals.css";

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

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const og = openGraphLocale(lang);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dictionary.meta.siteTitle,
      template: `%s | ${dictionary.brand.name}`,
    },
    description: dictionary.meta.siteDescription,
    applicationName: dictionary.brand.name,
    authors: [{ name: dictionary.brand.name, url: SITE.url }],
    creator: dictionary.brand.name,
    publisher: dictionary.brand.name,
    category: dictionary.meta.category,
    keywords: [...dictionary.meta.keywords],
    alternates: pageAlternates(lang, "/"),
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
      url: localizedUrl(lang),
      siteName: dictionary.brand.name,
      title: dictionary.meta.siteTitle,
      description: dictionary.meta.siteDescription,
      locale: og.locale,
      alternateLocale: og.alternateLocale,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${dictionary.brand.name} — ${dictionary.brand.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.siteTitle,
      description: dictionary.meta.siteDescription,
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
}

export const viewport: Viewport = {
  themeColor: "#1F3D2B",
  width: "device-width",
  initialScale: 1,
};

function structuredData(locale: Locale) {
  const dictionary = getDictionary(locale);
  const { structured } = dictionary;
  const products = getProducts(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": `${SITE.url}/#store`,
        name: dictionary.brand.name,
        alternateName: dictionary.brand.secondaryName,
        url: localizedUrl(locale),
        image: `${SITE.url}/og-image.jpg`,
        logo: `${SITE.url}/icon.svg`,
        description: structured.storeDescription,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "₹",
        currenciesAccepted: "INR",
        paymentAccepted: structured.paymentAccepted,
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
          name: structured.areaServed,
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
          name: structured.offerCatalog,
          itemListElement: products.map((product) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: product.name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: dictionary.brand.name,
        description: structured.websiteDescription,
        inLanguage: ["en-IN", "ta-IN"],
        publisher: { "@id": `${SITE.url}/#store` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: dictionary.brand.name,
        url: SITE.url,
        logo: `${SITE.url}/icon.svg`,
        description: structured.organizationDescription,
        address: fullAddress(),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: structured.contactType,
          areaServed: "IN",
          availableLanguage: structured.availableLanguages,
        },
      },
    ],
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const orderMessage = formatMessage(dictionary.whatsapp.order, {
    site: dictionary.brand.name,
  });

  return (
    <html
      lang={htmlLang[lang]}
      dir="ltr"
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
          {dictionary.common.a11y.skipToContent}
        </a>
        <Header
          locale={lang}
          brand={dictionary.brand}
          nav={dictionary.nav}
          common={dictionary.common}
          orderMessage={orderMessage}
        />
        {children}
        <Footer locale={lang} />
        <StructuredData data={structuredData(lang)} />
      </body>
    </html>
  );
}
