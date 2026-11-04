import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ImageGallery } from "@/components/image-gallery";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  getCategories,
  getProduct,
  getRelatedProducts,
  isProductSlug,
} from "@/i18n/products";
import { formatMessage } from "@/lib/format";
import {
  localizedUrl,
  openGraphLocale,
  pageAlternates,
} from "@/lib/seo";
import { PRODUCT_SLUGS } from "@/lib/products";
import { SITE } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  if (!isProductSlug(slug)) {
    return { title: dictionary.meta.productNotFound };
  }

  const product = getProduct(lang, slug);
  if (!product) {
    return { title: dictionary.meta.productNotFound };
  }

  const og = openGraphLocale(lang);
  const category = getCategories(lang).find(
    (item) => item.id === product.category,
  );

  return {
    title: `${product.name} (${product.secondaryName})`,
    description: `${product.summary} ${dictionary.product.metaSizes} ${product.sizes.join(", ")}. ${dictionary.product.metaOrder}`,
    keywords: [
      product.name,
      product.secondaryName,
      category?.name ?? dictionary.product.naturalBadge,
      dictionary.brand.name,
      ...dictionary.meta.productKeywords,
    ],
    alternates: pageAlternates(lang, `/products/${product.slug}`),
    openGraph: {
      type: "website",
      siteName: dictionary.brand.name,
      locale: og.locale,
      alternateLocale: og.alternateLocale,
      title: `${product.name} — ${product.secondaryName}`,
      description: product.summary,
      url: localizedUrl(lang, `/products/${product.slug}`),
      images: [
        {
          url: product.image,
          width: 1024,
          height: 1280,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${product.secondaryName}`,
      description: product.summary,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProductSlug(slug)) notFound();

  const dictionary = getDictionary(lang);
  const { product: productLabels, common, brand, whatsapp, structured } =
    dictionary;
  const product = getProduct(lang, slug);
  if (!product) notFound();

  const categories = getCategories(lang);
  const category = categories.find((item) => item.id === product.category);
  const related = getRelatedProducts(lang, product);
  const secondaryLang = lang === "en" ? "ta" : "en";
  const categoryNames = Object.fromEntries(
    categories.map((item) => [item.id, item.name]),
  );

  const productStructured = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${localizedUrl(lang, `/products/${product.slug}`)}#product`,
    name: product.name,
    alternateName: product.secondaryName,
    description: product.description,
    image: product.images.map((image) => `${SITE.url}${image}`),
    sku: product.slug,
    category: category?.name,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.marketBy,
    },
    offers: {
      "@type": "Offer",
      url: localizedUrl(lang, `/products/${product.slug}`),
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: brand.name,
      },
    },
    additionalProperty: product.sizes.map((size) => ({
      "@type": "PropertyValue",
      name: structured.productSizeProperty,
      value: size,
    })),
    isRelatedTo: related.map((item) => ({
      "@type": "Product",
      name: item.name,
      url: localizedUrl(lang, `/products/${item.slug}`),
    })),
  };

  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/40">
        <div className="container-site py-8 sm:py-10">
          <Breadcrumbs
            ariaLabel={common.a11y.breadcrumb}
            items={[
              {
                label: common.a11y.home,
                href: localePath(lang),
              },
              {
                label: productLabels.breadcrumb,
                href: localePath(lang, "/products"),
              },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <ImageGallery
            images={product.images}
            alt={product.imageAlt}
            productName={product.name}
            labels={productLabels.gallery}
          />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-forest">
                {category?.name ?? productLabels.naturalBadge}
              </span>
              {product.badge ? (
                <span className="badge badge-turmeric">{product.badge}</span>
              ) : null}
              <span className="badge badge-forest">
                {productLabels.naturalBadge}
              </span>
            </div>

            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              {product.name}
            </h1>
            <p
              lang={secondaryLang}
              className={
                secondaryLang === "ta"
                  ? "tamil mt-2 text-xl text-ink-2"
                  : "mt-2 text-lg font-semibold text-ink-3"
              }
            >
              {product.secondaryName}
            </p>
            <p className="mt-4 text-lg font-medium text-terracotta">
              {product.tagline}
            </p>
            <p
              lang={secondaryLang}
              className={
                secondaryLang === "ta"
                  ? "tamil mt-1 text-sm text-ink-3"
                  : "mt-1 text-sm text-ink-3"
              }
            >
              {product.secondaryTagline}
            </p>

            <p className="mt-5 text-[15px] leading-7 text-ink-2 sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-white/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                {productLabels.availableSizes}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-sm font-semibold text-forest"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-3">
                {productLabels.confirmPrice}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={formatMessage(whatsapp.productEnquiry, {
                  site: brand.name,
                  product: product.name,
                })}
                label={common.actions.orderWhatsApp}
              />
              <a href={`tel:${SITE.phone}`} className="btn-secondary">
                {common.actions.call.replace("{phone}", SITE.phoneDisplay)}
              </a>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-ink-2 sm:grid-cols-2">
              {productLabels.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-leaf"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="display text-2xl text-forest sm:text-3xl">
              {productLabels.whyLove}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 50}>
                  <div className="h-full rounded-2xl border border-line bg-white/60 p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf-soft text-forest">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
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
                    <h3 className="mt-3 font-display text-lg font-semibold text-forest">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-ink-2">
                      {benefit.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-white/60 p-6">
              <h2 className="font-display text-xl font-semibold text-forest">
                {productLabels.ingredients}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-2">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white/60 p-6">
              <h2 className="font-display text-xl font-semibold text-forest">
                {productLabels.howToUse}
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-ink-2">
                {product.usage.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] font-bold text-cream">
                      {index + 1}
                    </span>
                    <span className="leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-turmeric/30 bg-turmeric/10 p-5 text-sm leading-6 text-ink-2">
              <p className="font-bold text-forest">
                {productLabels.traditionalTitle}
              </p>
              <p className="mt-1">{productLabels.traditionalText}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-tight">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-2xl text-forest sm:text-3xl">
                {productLabels.related}
              </h2>
              <Link
                href={localePath(lang, "/products")}
                className="text-sm font-bold text-forest underline decoration-turmeric/50 decoration-2 underline-offset-4"
              >
                {common.actions.viewAllProducts}
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard
                  key={item.slug}
                  product={item}
                  locale={lang}
                  categoryName={categoryNames[item.category]}
                  labels={dictionary.catalog.labels}
                  whatsappMessage={formatMessage(whatsapp.productEnquiry, {
                    site: brand.name,
                    product: item.name,
                  })}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <StructuredData data={productStructured} />
    </main>
  );
}
