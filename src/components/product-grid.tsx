"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { LocalizedCategory, LocalizedProduct } from "@/i18n/products";
import type { CategoryId } from "@/lib/products";
import { formatMessage } from "@/lib/format";

type ProductGridProps = {
  locale: Locale;
  products: LocalizedProduct[];
  categories: LocalizedCategory[];
  labels: Dictionary["catalog"]["labels"];
  whatsappTemplate: string;
  siteName: string;
  initialCategory?: CategoryId;
};

export function ProductGrid({
  locale,
  products,
  categories,
  labels,
  whatsappTemplate,
  siteName,
  initialCategory = "all",
}: ProductGridProps) {
  const [active, setActive] = useState<CategoryId>(initialCategory);

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((product) => product.category === active),
    [active, products],
  );

  const categoryNames = useMemo(
    () =>
      Object.fromEntries(
        categories.map((category) => [category.id, category.name]),
      ) as Record<CategoryId, string>,
    [categories],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={labels.filter}
      >
        {categories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category.id)}
              className={`rounded-full border px-4 py-2.5 text-[13px] font-bold transition-all ${
                selected
                  ? "border-forest bg-forest text-cream shadow-sm"
                  : "border-line bg-white/60 text-ink-2 hover:border-forest/40 hover:text-forest"
              }`}
            >
              {category.name}
              <span
                lang={locale === "en" ? "ta" : "en"}
                className={
                  locale === "en"
                    ? "tamil ml-2 text-[11px] opacity-70"
                    : "ml-2 text-[11px] opacity-70"
                }
              >
                {category.secondaryName}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-ink-3">
        {labels.showing}{" "}
        <span className="font-bold text-forest">{filtered.length}</span>{" "}
        {filtered.length === 1 ? labels.product : labels.products}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            locale={locale}
            categoryName={categoryNames[product.category]}
            labels={labels}
            whatsappMessage={formatMessage(whatsappTemplate, {
              site: siteName,
              product: product.name,
            })}
            priority={index < 3}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-line bg-white/60 p-8 text-center text-ink-2">
          {labels.empty}
        </p>
      ) : null}
    </div>
  );
}
