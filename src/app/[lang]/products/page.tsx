import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getCategories, getProducts } from "@/i18n/products";
import { formatMessage } from "@/lib/format";
import {
  localizedUrl,
  openGraphLocale,
  pageAlternates,
} from "@/lib/seo";
import { SITE } from "@/lib/site";
import type { CategoryId } from "@/lib/products";

type ProductsPageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const og = openGraphLocale(lang);

  return {
    title: dictionary.meta.catalog.title,
    description: dictionary.meta.catalog.description,
    alternates: pageAlternates(lang, "/products"),
    openGraph: {
      type: "website",
      siteName: dictionary.brand.name,
      locale: og.locale,
      alternateLocale: og.alternateLocale,
      title: dictionary.meta.catalog.ogTitle,
      description: dictionary.meta.catalog.ogDescription,
      url: localizedUrl(lang, "/products"),
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.catalog.ogTitle,
      description: dictionary.meta.catalog.ogDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: ProductsPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const { catalog, common, brand, whatsapp } = dictionary;
  const products = getProducts(lang);
  const categories = getCategories(lang);
  const query = await searchParams;
  const requested = query.category;
  const initialCategory: CategoryId =
    requested && categories.some((category) => category.id === requested)
      ? (requested as CategoryId)
      : "all";
  const secondaryLang = lang === "en" ? "ta" : "en";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: brand.name,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: localizedUrl(lang, `/products/${product.slug}`),
    })),
  };

  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/50">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs
            ariaLabel={common.a11y.breadcrumb}
            items={[
              {
                label: common.a11y.home,
                href: localePath(lang),
              },
              { label: catalog.breadcrumb },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">{catalog.eyebrow}</span>
            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              {catalog.title}
            </h1>
            <p
              lang={secondaryLang}
              className={
                secondaryLang === "ta"
                  ? "tamil mt-3 text-lg text-ink-2"
                  : "mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink-3"
              }
            >
              {catalog.secondaryTitle}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
              {catalog.description}
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={formatMessage(whatsapp.helpChoosing, {
                site: brand.name,
              })}
              label={common.actions.askWhatsApp}
            />
            <a href={`tel:${SITE.phone}`} className="btn-secondary">
              {common.actions.call.replace("{phone}", SITE.phoneDisplay)}
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <ProductGrid
            locale={lang}
            products={products}
            categories={categories}
            labels={catalog.labels}
            whatsappTemplate={whatsapp.productEnquiry}
            siteName={brand.name}
            initialCategory={initialCategory}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="rounded-[28px] border border-line bg-white/60 p-7 sm:p-10">
            <SectionHeading
              eyebrow={catalog.bulk.eyebrow}
              title={catalog.bulk.title}
              description={catalog.bulk.description}
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={formatMessage(whatsapp.bulkQuote, {
                  site: brand.name,
                })}
                label={common.actions.getBulkQuote}
              />
              <a href={`mailto:${SITE.email}`} className="btn-secondary">
                {common.actions.emailUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={itemList} />
    </main>
  );
}
