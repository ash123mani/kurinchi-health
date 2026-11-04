import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${SITE.url}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: product.images.map((image) => `${SITE.url}${image}`),
  }));

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE.url}/og-image.jpg`],
    },
    {
      url: `${SITE.url}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: PRODUCTS.map((product) => `${SITE.url}${product.image}`),
    },
    ...productPages,
    {
      url: `${SITE.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
