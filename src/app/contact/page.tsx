import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { SITE, fullAddress, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Order Cold Pressed Oils & Natural Products",
  description:
    "Contact Kurinchi Health Products in Tisaiyanvilai, Tirunelveli. Call, WhatsApp or email us to order cold pressed oils, natural sweeteners, rock salt, soap and herbal hair oil.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    title: "Contact Kurinchi Health Products",
    description:
      "Call, WhatsApp or visit us in Tisaiyanvilai, Tirunelveli, Tamil Nadu.",
    url: "/contact",
    images: ["/og-image.jpg"],
  },
};

const contactStructured = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE.name}`,
  url: `${SITE.url}/contact`,
  description:
    "Contact details and enquiry form for Kurinchi Health Products, Tirunelveli.",
  mainEntity: {
    "@type": "Store",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  },
};

const mapQuery = encodeURIComponent(
  `${SITE.marketBy}, ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}`,
);

export default function ContactPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/50">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Get in touch</span>
            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              We are happy to help you order.
            </h1>
            <p lang="ta" className="tamil mt-3 text-lg text-ink-2">
              ஆர்டர் செய்ய அல்லது விவரங்களுக்கு எங்களை தொடர்பு கொள்ளுங்கள்
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
              Tell us what you need and we will confirm sizes, price and
              delivery. WhatsApp is usually the fastest way to reach us.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="display text-2xl text-forest sm:text-3xl">
              Contact details
            </h2>
            <div className="mt-6 space-y-3">
              <a
                href={whatsappLink(
                  `Hi ${SITE.name}, I would like to place an order.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-[#1f8a4c]/40 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f8a4c]/10 text-[#1f8a4c]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-forest">
                    {SITE.phoneDisplay}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-2">
                    Fastest way to order
                  </span>
                </span>
              </a>

              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-forest/30 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M6.6 3.5h2.6l1.3 4.1-2 1.3a12 12 0 0 0 6.6 6.6l1.3-2 4.1 1.3v2.6a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                    Call
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-forest">
                    {SITE.phoneDisplay}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-2">
                    {SITE.hours}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-forest/30 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-display text-lg font-semibold text-forest">
                    {SITE.email}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-2">
                    For bulk and business enquiries
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-line bg-white/60 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                    Visit
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-ink-2">
                    {fullAddress()}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-line bg-white/60 p-6 sm:p-8">
            <h2 className="display text-2xl text-forest sm:text-3xl">
              Send an enquiry
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-2">
              Fill in your details and we will open WhatsApp with a ready-to-send
              message.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="overflow-hidden rounded-[28px] border border-line bg-cream-2">
            <iframe
              title="Kurinchi Health Products location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-3">
            Find us near {SITE.address.line2}, {SITE.address.city}. Please call
            ahead before visiting.
          </p>
        </div>
      </section>

      <StructuredData data={contactStructured} />
    </main>
  );
}
