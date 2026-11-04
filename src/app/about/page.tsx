import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Traditional Cold Pressed Products from Tirunelveli",
  description:
    "Learn about Kurinchi Health Products: our story, traditional wood pressing methods, quality standards and commitment to pure, chemical-free natural products from Tirunelveli, Tamil Nadu.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    title: "About Kurinchi Health Products",
    description:
      "Traditional cold pressed oils, natural sweeteners and handmade care from Tirunelveli, Tamil Nadu.",
    url: "/about",
    images: ["/og-image.jpg"],
  },
};

const values = [
  {
    emoji: "🌿",
    title: "Quality",
    tamil: "தரம்",
    text: "We choose ingredients carefully and make every product in small batches, so nothing is rushed and nothing is compromised.",
  },
  {
    emoji: "💚",
    title: "Purity",
    tamil: "தூய்மை",
    text: "No chemicals, no preservatives and no artificial colours. Our oils are unrefined and our sweeteners are unbleached.",
  },
  {
    emoji: "🌱",
    title: "Health",
    tamil: "ஆரோக்கியம்",
    text: "We believe everyday food should support everyday health. Simple, traditional ingredients are often the best ones.",
  },
];

const process = [
  {
    step: "01",
    title: "Sourcing",
    text: "Coconuts, sesame, groundnuts and palm sap are selected from trusted local sources in and around Tirunelveli.",
  },
  {
    step: "02",
    title: "Wood pressing",
    text: "Oils are extracted slowly in a traditional wooden press. No high heat, no chemical solvents, no bleaching.",
  },
  {
    step: "03",
    title: "Small-batch preparation",
    text: "Sweeteners, rock salt and handmade soap are prepared in small batches using simple, time-tested methods.",
  },
  {
    step: "04",
    title: "Careful packing",
    text: "Every order is packed carefully and sent fresh, with clear labelling and honest quantities.",
  },
];

const aboutStructured = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE.name}`,
  url: `${SITE.url}/about`,
  description:
    "The story, values and traditional production methods behind Kurinchi Health Products.",
  mainEntity: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    address: fullAddress(),
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/50">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Our story</span>
            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              Food the way it used to be.
            </h1>
            <p lang="ta" className="tamil mt-3 text-lg text-ink-2">
              பாரம்பரிய முறையில் தயாரிக்கப்பட்ட தூய இயற்கை பொருட்கள்
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
              Kurinchi Health Products is a small family-run unit in
              Tisaiyanvilai, Tirunelveli district. We make cold pressed oils,
              natural sweeteners and handmade care products using the same slow,
              careful methods our grandparents used.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-line bg-cream-2 shadow-[0_30px_60px_-40px_rgba(35,33,28,0.5)]">
              <Image
                src="/products/brand-hero.jpeg"
                alt="Kurinchi Health Products traditional natural products"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Why we started</span>
            <h2 className="display mt-4 text-3xl text-forest sm:text-4xl">
              A simple promise: real food, made honestly.
            </h2>
            <div className="prose-natural mt-5">
              <p>
                Somewhere along the way, everyday food became complicated.
                Oils were refined, bleached and deodorised. Sugar was stripped
                of everything except sweetness. Labels grew longer than the
                ingredient lists.
              </p>
              <p>
                We wanted something simpler. So we went back to the wood press,
                the traditional pot and the small batch. Our coconut, gingelly
                and groundnut oils are pressed slowly so the natural aroma and
                nutrients stay in the bottle. Our country sugar, palm jaggery
                and palm candy are unrefined. Our rock salt is handpicked and
                additive-free.
              </p>
              <p>
                We are not a large factory. We are a small team that still
                believes in doing things the long way, because the long way is
                usually the right way.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-primary">
                Explore our products
              </Link>
              <WhatsAppButton
                message={`Hi ${SITE.name}, I would like to know more about your products and process.`}
                label="Talk to us"
                className="btn-secondary"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we stand for"
            title="Quality. Purity. Health."
            tamilTitle="தரம் • தூய்மை • ஆரோக்கியம்"
            align="center"
            className="mx-auto"
            description="Three words that guide every decision we make, from sourcing to packing."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-line bg-white/60 p-7 text-center">
                  <span className="text-4xl" aria-hidden="true">
                    {value.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-forest">
                    {value.title}
                  </h3>
                  <p lang="ta" className="tamil mt-1 text-sm text-ink-3">{value.tamil}</p>
                  <p className="mt-3 text-sm leading-6 text-ink-2">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we work"
            title="From source to your kitchen"
            description="Every step is deliberate. Nothing is outsourced to a process we would not use at home."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="relative h-full rounded-2xl border border-line bg-white/50 p-6">
                  <span className="font-display text-3xl font-semibold text-turmeric">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-2">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="grid gap-6 rounded-[32px] border border-line bg-white/60 p-7 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="eyebrow">Trust & transparency</span>
              <h2 className="display mt-4 text-3xl text-forest">
                Registered, labelled and accountable.
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-2">
                We are FSSAI registered and every pack carries clear
                information. If you ever have a question about an ingredient,
                a batch or a delivery, you can reach us directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="badge badge-forest">
                  FSSAI {SITE.fssai}
                </span>
                <span className="badge badge-turmeric">100% Natural</span>
                <span className="badge badge-forest">Chemical Free</span>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                Our unit
              </h3>
              <address className="mt-3 space-y-1 text-sm not-italic leading-7 text-ink-2">
                <p className="font-bold text-forest">{SITE.marketBy}</p>
                <p>{fullAddress()}</p>
                <p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="font-semibold text-forest hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-forest hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
              </address>
              <Link
                href="/contact"
                className="btn-secondary mt-5 min-h-0! px-5! py-2.5! text-[13px]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={aboutStructured} />
    </main>
  );
}
