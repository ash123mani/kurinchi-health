import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Products — Cold Pressed Oils, Sweeteners, Salt & Handmade Care",
  description:
    "Browse all Kurinchi Health Products: cold pressed coconut oil, gingelly oil, groundnut oil, organic country sugar, Himalayan rock salt, palm jaggery, palm candy, handmade coconut oil soap and herbal hair oil.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    title: "All Products | Kurinchi Health Products",
    description:
      "Traditional cold pressed oils, natural sweeteners, rock salt, soap and herbal hair oil.",
    url: "/products",
    images: ["/og-image.jpg"],
  },
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

const validCategories = new Set(CATEGORIES.map((category) => category.id));

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const requested = params.category;
  const initialCategory =
    requested && validCategories.has(requested as "all" | ProductCategory)
      ? (requested as "all" | ProductCategory)
      : "all";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kurinchi Health Products",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${SITE.url}/products/${product.slug}`,
    })),
  };

  return (
    <main id="main">
      <section className="border-b border-line bg-cream-2/50">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Products" }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Our products</span>
            <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
              Everything we make, in one place.
            </h1>
            <p lang="ta" className="tamil mt-3 text-lg text-ink-2">
              எங்கள் தயாரிப்புகள் — பாரம்பரிய முறையில் தயாரிக்கப்பட்ட தூய இயற்கை
              பொருட்கள்
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
              Cold pressed oils, natural sweeteners, Himalayan rock salt,
              handmade soap and herbal hair oil. Every product is made in small
              batches with simple ingredients and no chemicals.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={`Hi ${SITE.name}, I would like help choosing the right products.`}
              label="Ask us on WhatsApp"
            />
            <a href={`tel:${SITE.phone}`} className="btn-secondary">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <ProductGrid
            products={PRODUCTS}
            initialCategory={initialCategory}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container-site">
          <div className="rounded-[28px] border border-line bg-white/60 p-7 sm:p-10">
            <SectionHeading
              eyebrow="Buying in bulk?"
              title="We supply families, shops and events"
              description="Need larger quantities for a function, shop or restaurant? Message us for bulk pricing and delivery across Tamil Nadu and India."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={`Hi ${SITE.name}, I would like a bulk order quote.`}
                label="Get a bulk quote"
              />
              <a href={`mailto:${SITE.email}`} className="btn-secondary">
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <StructuredData data={itemList} />
    </main>
  );
}
