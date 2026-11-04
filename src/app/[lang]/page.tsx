import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getCategories, getFeaturedProducts } from "@/i18n/products";
import { formatMessage } from "@/lib/format";
import {
  localizedUrl,
  openGraphLocale,
  pageAlternates,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const og = openGraphLocale(lang);

  return {
    title: { absolute: dictionary.meta.home.title },
    description: dictionary.meta.home.description,
    alternates: pageAlternates(lang, "/"),
    openGraph: {
      type: "website",
      siteName: dictionary.brand.name,
      locale: og.locale,
      alternateLocale: og.alternateLocale,
      title: dictionary.meta.home.ogTitle,
      description: dictionary.meta.home.ogDescription,
      url: localizedUrl(lang),
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.home.ogTitle,
      description: dictionary.meta.home.ogDescription,
      images: ["/og-image.jpg"],
    },
  };
}

const categoryEmoji = {
  oils: "🫙",
  sweeteners: "🍯",
  "salt-soap": "🧂",
  "hair-care": "🌿",
} as const;

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const { home, catalog, whatsapp, common, brand } = dictionary;
  const featured = getFeaturedProducts(lang).slice(0, 6);
  const categories = getCategories(lang).filter(
    (category) => category.id !== "all",
  );
  const secondaryLang = lang === "en" ? "ta" : "en";
  const secondaryClass =
    secondaryLang === "ta"
      ? "tamil mt-4 text-lg text-ink-2"
      : "mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink-3";

  const categoryNames = Object.fromEntries(
    categories.map((category) => [category.id, category.name]),
  );

  const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main">
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div className="animate-fade-up">
            <span className="eyebrow">{home.hero.eyebrow}</span>
            <h1 className="display mt-5 text-[40px] leading-[1.02] text-forest sm:text-5xl lg:text-[62px]">
              {home.hero.titleLine1}
              <br />
              <span className="text-terracotta">{home.hero.titleLine2}</span>
              <br />
              {home.hero.titleLine3}
            </h1>
            <p lang={secondaryLang} className={secondaryClass}>
              {home.hero.secondaryTitle}
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-ink-2 sm:text-base">
              {home.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(lang, "/products")}
                className="btn-primary"
              >
                {common.actions.exploreProducts}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <WhatsAppButton
                message={formatMessage(whatsapp.general, {
                  site: brand.name,
                })}
                label={common.actions.orderWhatsApp}
                className="btn-secondary"
              />
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {home.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-3">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-forest sm:text-2xl">
                    {formatMessage(stat.value, { fssai: SITE.fssai })}
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
                  alt={home.hero.imageAlts.brand}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-forest backdrop-blur">
                  {home.hero.badge}
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[24px] border border-line bg-cream-2">
                <Image
                  src="/products/coconut-oil-1.jpeg"
                  alt={home.hero.imageAlts.coconut}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[24px] border border-line bg-cream-2">
                <Image
                  src="/products/palm-jaggery-1.jpeg"
                  alt={home.hero.imageAlts.jaggery}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="animate-float absolute -left-4 bottom-8 hidden rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-3">
                {home.hero.floatingLabel}
              </p>
              <p className="font-display text-lg font-semibold text-forest">
                {home.hero.floatingValue}
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
                  {home.marquee.map((item) => (
                    <span
                      key={`${copy}-${item}`}
                      className="flex items-center gap-8"
                    >
                      {formatMessage(item, { fssai: SITE.fssai })}
                      <span className="text-turmeric-2">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow={home.categories.eyebrow}
            title={home.categories.title}
            secondaryTitle={home.categories.secondaryTitle}
            secondaryLang={secondaryLang}
            description={home.categories.description}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.id} delay={index * 60}>
                <Link
                  href={`${localePath(lang, "/products")}?category=${category.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-turmeric/50 hover:bg-white"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {categoryEmoji[category.id as keyof typeof categoryEmoji]}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest">
                    {category.name}
                  </h3>
                  <p
                    lang={secondaryLang}
                    className={
                      secondaryLang === "ta"
                        ? "tamil mt-0.5 text-sm text-ink-3"
                        : "mt-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink-3"
                    }
                  >
                    {category.secondaryName}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-2">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-forest">
                    {common.actions.browse}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={home.featured.eyebrow}
              title={home.featured.title}
              secondaryTitle={home.featured.secondaryTitle}
              secondaryLang={secondaryLang}
              description={home.featured.description}
            />
            <Link
              href={localePath(lang, "/products")}
              className="btn-secondary min-h-0! px-5! py-2.5! text-[13px]"
            >
              {common.actions.viewAllProducts}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <ProductCard
                  product={item}
                  locale={lang}
                  categoryName={categoryNames[item.category]}
                  labels={catalog.labels}
                  whatsappMessage={formatMessage(whatsapp.productEnquiry, {
                    site: brand.name,
                    product: item.name,
                  })}
                  priority={index < 3}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site grid items-center gap-10 rounded-[32px] border border-line bg-white/50 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] border border-line bg-cream-2">
              <Image
                src="/products/gingelly-oil-2.jpeg"
                alt={home.about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">{home.about.eyebrow}</span>
            <h2 className="display mt-4 text-3xl text-forest sm:text-4xl">
              {home.about.title}
            </h2>
            <p lang={secondaryLang} className={secondaryClass}>
              {home.about.secondaryTitle}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2">
              {home.about.description}
            </p>
            <ul className="mt-6 space-y-3">
              {home.about.values.map((value) => (
                <li key={value.title} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-forest">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm leading-6 text-ink-2">
                    <span className="font-bold text-forest">
                      {value.title}.
                    </span>{" "}
                    {value.text}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href={localePath(lang, "/about")}
              className="btn-secondary mt-7"
            >
              {common.actions.readStory}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.process.steps.map((item, index) => (
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

      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow={home.faq.eyebrow}
            title={home.faq.title}
            description={home.faq.description}
          />
          <div className="space-y-3">
            {dictionary.faq.map((faq) => (
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
                <p className="mt-3 text-sm leading-7 text-ink-2">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="grain relative overflow-hidden rounded-[32px] bg-forest px-6 py-12 text-center text-cream sm:px-12 sm:py-16">
            <span className="eyebrow text-turmeric-2!">
              {home.cta.eyebrow}
            </span>
            <h2 className="display mx-auto mt-4 max-w-2xl text-3xl text-cream sm:text-4xl">
              {home.cta.title}
            </h2>
            <p
              lang={secondaryLang}
              className={
                secondaryLang === "ta"
                  ? "tamil mx-auto mt-3 max-w-xl text-cream/70"
                  : "mx-auto mt-3 max-w-xl text-sm font-semibold uppercase tracking-[0.12em] text-cream/60"
              }
            >
              {home.cta.secondaryTitle}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-cream/70">
              {home.cta.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                message={formatMessage(whatsapp.order, {
                  site: brand.name,
                })}
                label={common.actions.orderWhatsApp}
              />
              <a
                href={`tel:${SITE.phone}`}
                className="btn-secondary border-cream/30! text-cream! hover:bg-cream/10!"
              >
                {common.actions.call.replace("{phone}", SITE.phoneDisplay)}
              </a>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={faqStructured} />
    </main>
  );
}
