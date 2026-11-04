import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ImageGallery } from "@/components/image-gallery";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  PRODUCTS,
  getCategory,
  getProduct,
  getRelatedProducts,
} from "@/lib/products";
import { SITE } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  const category = getCategory(product.category);

  return {
    title: `${product.name} (${product.tamilName})`,
    description: `${product.summary} Available sizes: ${product.sizes.join(", ")}. Order from Kurinchi Health Products, Tirunelveli.`,
    keywords: [
      product.name,
      product.tamilName,
      category?.name ?? "natural products",
      "Kurinchi Health Products",
      "cold pressed oil Tamil Nadu",
      "buy online",
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      alternateLocale: ["ta_IN"],
      title: `${product.name} — ${product.tamilName}`,
      description: product.summary,
      url: `/products/${product.slug}`,
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
      title: `${product.name} — ${product.tamilName}`,
      description: product.summary,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  const productStructured = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/products/${product.slug}#product`,
    name: product.name,
    alternateName: product.tamilName,
    description: product.description,
    image: product.images.map((image) => `${SITE.url}${image}`),
    sku: product.slug,
    category: category?.name,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.marketBy,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/products/${product.slug}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
    },
    additionalProperty: product.sizes.map((size) => ({
      "@type": "PropertyValue",
      name: "Available size",
      value: size,
    })),
    isRelatedTo: related.map((item) => ({
      "@type": "Product",
      name: item.name,
      url: `${SITE.url}/products/${item.slug}`,
    })),
  };

  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/40">
        <div className="container-site py-8 sm:py-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
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
          />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-forest">
                {category?.name ?? "Natural Product"}
              </span>
              {product.badge ? (
                <span className="badge badge-turmeric">{product.badge}</span>
              ) : null}
              <span className="badge badge-forest">100% Natural</span>
            </div>

            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              {product.name}
            </h1>
            <p lang="ta" className="tamil mt-2 text-xl text-ink-2">{product.tamilName}</p>
            <p className="mt-4 text-lg font-medium text-terracotta">
              {product.tagline}
            </p>
            <p lang="ta" className="tamil mt-1 text-sm text-ink-3">
              {product.tamilTagline}
            </p>

            <p className="mt-5 text-[15px] leading-7 text-ink-2 sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-white/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-3">
                Available sizes
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
                Message us on WhatsApp to confirm current price and stock.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={`Hi ${SITE.name}, I would like to know more about ${product.name}. Please share the available sizes and price.`}
                label="Order on WhatsApp"
              />
              <a href={`tel:${SITE.phone}`} className="btn-secondary">
                Call {SITE.phoneDisplay}
              </a>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-ink-2 sm:grid-cols-2">
              {[
                "No chemicals or preservatives",
                "Made in small batches",
                "Traditional preparation",
                "FSSAI registered",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
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
              Why you will love it
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 50}>
                  <div className="h-full rounded-2xl border border-line bg-white/60 p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf-soft text-forest">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
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
                Ingredients
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
                How to use
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
              <p className="font-bold text-forest">Traditional description</p>
              <p className="mt-1">
                Product benefits are based on traditional use and general
                knowledge. They are not medical advice. Please consult a
                qualified professional for health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-tight">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-2xl text-forest sm:text-3xl">
                You may also like
              </h2>
              <Link
                href="/products"
                className="text-sm font-bold text-forest underline decoration-turmeric/50 decoration-2 underline-offset-4"
              >
                View all products
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <StructuredData data={productStructured} />
    </main>
  );
}
