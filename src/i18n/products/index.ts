import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  CATEGORY_IDS,
  PRODUCT_BASE,
  PRODUCT_SLUGS,
  type CategoryId,
  type ProductBase,
  type ProductSlug,
} from "@/lib/products";
import { productContentEn, type ProductContent } from "./en";
import { productContentTa } from "./ta";

export type LocalizedProduct = ProductBase &
  ProductContent & { slug: ProductSlug };

export type LocalizedCategory = {
  id: CategoryId;
  name: string;
  secondaryName: string;
  description: string;
  count: number;
};

const productContent: Record<Locale, Record<ProductSlug, ProductContent>> = {
  en: productContentEn,
  ta: productContentTa,
};

export function getProducts(locale: Locale): LocalizedProduct[] {
  return PRODUCT_SLUGS.map((slug) => ({
    ...PRODUCT_BASE[slug],
    ...productContent[locale][slug],
    slug,
  }));
}

export function getFeaturedProducts(locale: Locale): LocalizedProduct[] {
  return getProducts(locale).filter((product) => product.featured);
}

export function getProduct(
  locale: Locale,
  slug: ProductSlug,
): LocalizedProduct | undefined {
  return getProducts(locale).find((product) => product.slug === slug);
}

export function getCategories(locale: Locale): LocalizedCategory[] {
  const dictionary = getDictionary(locale);
  const products = getProducts(locale);

  return CATEGORY_IDS.map((id) => ({
    id,
    ...dictionary.catalog.categories[id],
    count:
      id === "all"
        ? products.length
        : products.filter((product) => product.category === id).length,
  }));
}

export function getRelatedProducts(
  locale: Locale,
  product: LocalizedProduct,
  limit = 3,
): LocalizedProduct[] {
  const others = getProducts(locale).filter(
    (item) => item.slug !== product.slug,
  );

  return [
    ...others.filter((item) => item.category === product.category),
    ...others.filter((item) => item.category !== product.category),
  ].slice(0, limit);
}

export function isProductSlug(value: string): value is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(value);
}
