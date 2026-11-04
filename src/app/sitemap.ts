import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { PRODUCT_BASE, PRODUCT_SLUGS } from "@/lib/products";
import { localizedUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";

type SitemapPath = {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  images?: string[];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths: SitemapPath[] = [
    {
      path: "/",
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE.url}/og-image.jpg`],
    },
    {
      path: "/products",
      changeFrequency: "weekly",
      priority: 0.9,
      images: PRODUCT_SLUGS.map(
        (slug) => `${SITE.url}${PRODUCT_BASE[slug].image}`,
      ),
    },
    ...PRODUCT_SLUGS.map((slug) => ({
      path: `/products/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: PRODUCT_BASE[slug].images.map(
        (image) => `${SITE.url}${image}`,
      ),
    })),
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const languages = (path: string) => ({
    "en-IN": localizedUrl("en", path),
    "ta-IN": localizedUrl("ta", path),
    "x-default": localizedUrl("en", path),
  });

  return locales.flatMap((locale) =>
    paths.map((item) => ({
      url: localizedUrl(locale, item.path),
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
      ...(item.images ? { images: item.images } : {}),
      alternates: {
        languages: languages(item.path),
      },
    })),
  );
}
