"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, type Product, type ProductCategory } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
  initialCategory?: "all" | ProductCategory;
};

export function ProductGrid({
  products,
  initialCategory = "all",
}: ProductGridProps) {
  const [active, setActive] = useState<"all" | ProductCategory>(initialCategory);

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((product) => product.category === active),
    [active, products],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter products by category"
      >
        {CATEGORIES.map((category) => {
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
              <span lang="ta" className="tamil ml-2 text-[11px] opacity-70">
                {category.tamilName}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-ink-3">
        Showing <span className="font-bold text-forest">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            priority={index < 3}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-line bg-white/60 p-8 text-center text-ink-2">
          No products in this category yet. Please check back soon.
        </p>
      ) : null}
    </div>
  );
}
