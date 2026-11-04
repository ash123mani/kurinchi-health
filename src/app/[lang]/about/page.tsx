import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/lib/format";
import {
  localizedUrl,
  openGraphLocale,
  pageAlternates,
} from "@/lib/seo";
import { SITE, fullAddress } from "@/lib/site";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const og = openGraphLocale(lang);

  return {
    title: dictionary.meta.about.title,
    description: dictionary.meta.about.description,
    alternates: pageAlternates(lang, "/about"),
    openGraph: {
      type: "website",
      siteName: dictionary.brand.name,
      locale: og.locale,
      alternateLocale: og.alternateLocale,
      title: dictionary.meta.about.ogTitle,
      description: dictionary.meta.about.ogDescription,
      url: localizedUrl(lang, "/about"),
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.about.ogTitle,
      description: dictionary.meta.about.ogDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const { about, common, brand, whatsapp, structured } = dictionary;
  const secondaryLang = lang === "en" ? "ta" : "en";
  const secondaryClass =
    secondaryLang === "ta"
      ? "tamil mt-3 text-lg text-ink-2"
      : "mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink-3";

  const aboutStructured = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${about.breadcrumb} ${brand.name}`,
    url: localizedUrl(lang, "/about"),
    description: structured.aboutDescription,
    mainEntity: {
      "@type": "Organization",
      name: brand.name,
      url: SITE.url,
      address: fullAddress(),
    },
  };

  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/50">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs
            ariaLabel={common.a11y.breadcrumb}
            items={[
              { label: common.a11y.home, href: localePath(lang) },
              { label: about.breadcrumb },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">{about.eyebrow}</span>
            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              {about.title}
            </h1>
            <p lang={secondaryLang} className={secondaryClass}>
              {about.secondaryTitle}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
              {about.description}
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
                alt={about.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">{about.why.eyebrow}</span>
            <h2 className="display mt-4 text-3xl text-forest sm:text-4xl">
              {about.why.title}
            </h2>
            <div className="prose-natural mt-5">
              {about.why.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(lang, "/products")}
                className="btn-primary"
              >
                {common.actions.exploreProducts}
              </Link>
              <WhatsAppButton
                message={formatMessage(whatsapp.aboutProcess, {
                  site: brand.name,
                })}
                label={common.actions.talkToUs}
                className="btn-secondary"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <SectionHeading
            eyebrow={about.values.eyebrow}
            title={about.values.title}
            secondaryTitle={about.values.secondaryTitle}
            secondaryLang={secondaryLang}
            align="center"
            className="mx-auto"
            description={about.values.description}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {about.values.items.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-line bg-white/60 p-7 text-center">
                  <span className="text-4xl" aria-hidden="true">
                    {value.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-forest">
                    {value.title}
                  </h3>
                  <p
                    lang={secondaryLang}
                    className={
                      secondaryLang === "ta"
                        ? "tamil mt-1 text-sm text-ink-3"
                        : "mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-3"
                    }
                  >
                    {value.secondaryTitle}
                  </p>
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
            eyebrow={about.process.eyebrow}
            title={about.process.title}
            description={about.process.description}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.process.steps.map((item, index) => (
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
              <span className="eyebrow">{about.trust.eyebrow}</span>
              <h2 className="display mt-4 text-3xl text-forest">
                {about.trust.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-2">
                {about.trust.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="badge badge-forest">
                  {formatMessage(common.badges.fssai, { fssai: SITE.fssai })}
                </span>
                <span className="badge badge-turmeric">
                  {common.badges.natural}
                </span>
                <span className="badge badge-forest">
                  {common.badges.chemicalFree}
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                {about.trust.unit}
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
                href={localePath(lang, "/contact")}
                className="btn-secondary mt-5 min-h-0! px-5! py-2.5! text-[13px]"
              >
                {common.actions.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={aboutStructured} />
    </main>
  );
}
