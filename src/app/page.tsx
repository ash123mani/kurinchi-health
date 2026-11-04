import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Kurinchi Health Products — Cold Pressed Oils & Natural Sweeteners in Tirunelveli",
  description:
    "Buy traditional cold pressed coconut oil, gingelly oil, groundnut oil, organic country sugar, Himalayan rock salt, palm jaggery, palm candy, handmade soap and herbal hair oil. 100% natural, chemical free. Order on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    title:
      "Kurinchi Health Products — Cold Pressed Oils & Natural Sweeteners",
    description:
      "Traditional wood pressed oils, natural sweeteners and handmade care products from Tirunelveli, Tamil Nadu.",
    url: "/",
    images: ["/og-image.jpg"],
  },
};

const featured = PRODUCTS.filter((product) => product.featured).slice(0, 6);

const faqs = [
  {
    question: "What is cold pressed or wood pressed oil?",
    answer:
      "Cold pressed oil is extracted slowly using a traditional wooden press (chekku) instead of high heat or chemicals. This keeps the natural aroma, flavour and nutrients of the seed or nut intact. Our coconut, gingelly and groundnut oils are all wood pressed and unrefined.",
  },
  {
    question: "Do your products contain chemicals or preservatives?",
    answer:
      "No. Our oils, country sugar, rock salt, palm jaggery, palm candy and herbal hair oil are made without added chemicals or preservatives. We keep the process simple and traditional.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Tap any product and use the Order on WhatsApp button, or call us directly. We will confirm the available sizes, price and delivery options. There is no online payment needed.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We are based in Tisaiyanvilai, Tirunelveli district, Tamil Nadu. We deliver locally and can arrange courier delivery across India. Message us on WhatsApp with your pincode to confirm.",
  },
  {
    question: "Are these products suitable for daily use?",
    answer:
      "Yes. Our cold pressed oils, country sugar, rock salt and palm products are everyday kitchen staples. Use them as you would any traditional ingredient. Product benefit descriptions are traditional, not medical advice.",
  },
];

const faqStructured = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div className="animate-fade-up">
            <span className="eyebrow">Tirunelveli • Traditional methods</span>
            <h1 className="display mt-5 text-[40px] leading-[1.02] text-forest sm:text-5xl lg:text-[62px]">
              Traditional goodness,
              <br />
              <span className="text-terracotta">pressed slowly.</span>
              <br />
              Poured purely.
            </h1>
            <p lang="ta" className="tamil mt-4 text-lg text-ink-2">
              பாரம்பரிய முறையில் தயாரிக்கப்பட்ட தூய இயற்கை பொருட்கள்
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-ink-2 sm:text-base">
              Cold pressed coconut, gingelly and groundnut oils, natural
              sweeteners, Himalayan rock salt and handmade care products — made
              the way our families have always made them. No chemicals. No
              shortcuts. Just honest food.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-primary">
                Explore products
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <WhatsAppButton
                message={`Hi ${SITE.name}, I would like to know more about your products.`}
                label="Order on WhatsApp"
                className="btn-secondary"
              />
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                { value: "9", label: "Natural products" },
                { value: "100%", label: "Chemical free" },
                { value: "FSSAI", label: SITE.fssai },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-3">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-forest sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -right-16 -top-10 hidden h-56 w-56 rounded-full bg-turmeric/15 blur-2xl lg:block" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/11] overflow-hidden rounded-[28px] border border-line bg-cream-2 shadow-[0_40px_70px_-45px_rgba(35,33,28,0.6)]">
                <Image
                  src="/products/brand-hero.jpeg"
                  alt="Kurinchi Health Products natural cold pressed oils and traditional products"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-forest backdrop-blur">
                  Quality • Purity • Health
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[24px] border border-line bg-cream-2">
                <Image
                  src="/products/coconut-oil-1.jpeg"
                  alt="Cold pressed coconut oil — செக்கு தேங்காய் எண்ணெய்"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[24px] border border-line bg-cream-2">
                <Image
                  src="/products/palm-jaggery-1.jpeg"
                  alt="Pure palm jaggery — சுத்தமான கருப்பட்டி"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="animate-float absolute -left-4 bottom-8 hidden rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-3">
                Wood pressed
              </p>
              <p className="font-display text-lg font-semibold text-forest">
                No chemicals
              </p>
            </div>
          </div>
        </div>

        <div className="border-y border-line bg-forest text-cream">
          <div className="overflow-hidden py-3.5">
            <div className="marquee">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center gap-8 pr-8 text-[11px] font-bold uppercase tracking-[0.18em]"
                  aria-hidden={copy === 1}
                >
                  {[
                    "100% Natural",
                    "Wood Pressed",
                    "No Chemicals",
                    "No Preservatives",
                    "Handmade",
                    "FSSAI " + SITE.fssai,
                    "Quality • Purity • Health",
                  ].map((item) => (
                    <span key={`${copy}-${item}`} className="flex items-center gap-8">
                      {item}
                      <span className="text-turmeric-2">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we make"
            title="A pantry built on tradition"
            tamilTitle="எங்கள் தயாரிப்புகள்"
            description="From everyday cooking oils to natural sweeteners and handmade care, everything is prepared in small batches with simple ingredients."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.filter((category) => category.id !== "all").map(
              (category, index) => (
                <Reveal key={category.id} delay={index * 60}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-turmeric/50 hover:bg-white"
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {category.id === "oils"
                        ? "🫙"
                        : category.id === "sweeteners"
                          ? "🍯"
                          : category.id === "salt-soap"
                            ? "🧂"
                            : "🌿"}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-forest">
                      {category.name}
                    </h3>
                    <p lang="ta" className="tamil mt-0.5 text-sm text-ink-3">
                      {category.tamilName}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-ink-2">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-forest">
                      Browse
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-tight">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our products"
              title="Pure by nature. Honest by choice."
              tamilTitle="தரம் • தூய்மை • ஆரோக்கியம்"
              description="Tap a product to see benefits, sizes and how to order."
            />
            <Link
              href="/products"
              className="btn-secondary min-h-0! px-5! py-2.5! text-[13px]"
            >
              View all products
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <ProductCard product={product} priority={index < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-tight">
        <div className="container-site grid items-center gap-10 rounded-[32px] border border-line bg-white/50 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] border border-line bg-cream-2">
              <Image
                src="/products/gingelly-oil-2.jpeg"
                alt="Traditional wood pressed gingelly oil — செக்கு நல்லெண்ணை"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our promise</span>
            <h2 className="display mt-4 text-3xl text-forest sm:text-4xl">
              Made by people who still believe in doing it slowly.
            </h2>
            <p lang="ta" className="tamil mt-3 text-lg text-ink-2">
              பாரம்பரிய முறையில் தயாரிக்கப்பட்ட தூய இயற்கை பொருட்கள்
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2">
              Kurinchi Health Products began with a simple idea: keep the food
              our grandparents ate, made the way they made it. We source
              carefully, press in small batches and refuse to add chemicals or
              preservatives. What reaches your kitchen is simply real food.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                {
                  title: "Quality",
                  text: "Carefully selected ingredients and small-batch production.",
                },
                {
                  title: "Purity",
                  text: "No chemicals, no preservatives, no artificial colours.",
                },
                {
                  title: "Health",
                  text: "Traditional products that support a natural everyday diet.",
                },
              ].map((value) => (
                <li key={value.title} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-forest">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-6 text-ink-2">
                    <span className="font-bold text-forest">{value.title}.</span>{" "}
                    {value.text}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-secondary mt-7">
              Read our story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we make it"
            title="Four slow steps, zero shortcuts"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Select",
                text: "We choose quality coconuts, sesame, groundnuts and palm sap from trusted local sources.",
              },
              {
                step: "02",
                title: "Press",
                text: "Oils are extracted slowly in a traditional wood press, keeping natural aroma and nutrients.",
              },
              {
                step: "03",
                title: "Prepare",
                text: "Sweeteners, salt and soap are prepared in small batches with simple, honest methods.",
              },
              {
                step: "04",
                title: "Deliver",
                text: "Products are packed carefully and sent to your door, fresh from our unit in Tirunelveli.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="h-full rounded-2xl border border-line bg-white/50 p-6">
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

      {/* FAQ */}
      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions, answered simply"
            description="Still unsure about something? Send us a WhatsApp message and we will help you choose."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-line bg-white/60 p-5 transition-colors open:border-turmeric/40 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-forest">
                  {faq.question}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-ink-3 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-ink-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container-site">
          <div className="grain relative overflow-hidden rounded-[32px] bg-forest px-6 py-12 text-center text-cream sm:px-12 sm:py-16">
            <span className="eyebrow text-turmeric-2!">Ready to order?</span>
            <h2 className="display mx-auto mt-4 max-w-2xl text-3xl text-cream sm:text-4xl">
              Bring home the taste of tradition.
            </h2>
            <p lang="ta" className="tamil mx-auto mt-3 max-w-xl text-cream/70">
              {SITE.tamilTagline}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-cream/70">
              Message us on WhatsApp with the products you need. We will share
              the available sizes, price and delivery details.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                message={`Hi ${SITE.name}, I would like to place an order.`}
                label="Order on WhatsApp"
              />
              <a
                href={`tel:${SITE.phone}`}
                className="btn-secondary border-cream/30! text-cream! hover:bg-cream/10!"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={faqStructured} />
    </main>
  );
}
