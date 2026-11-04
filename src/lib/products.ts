export const CATEGORY_IDS = [
  "all",
  "oils",
  "sweeteners",
  "salt-soap",
  "hair-care",
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];
export type ProductCategory = Exclude<CategoryId, "all">;

export const PRODUCT_SLUGS = [
  "cold-pressed-coconut-oil",
  "cold-pressed-gingelly-oil",
  "cold-pressed-groundnut-oil",
  "organic-country-sugar",
  "himalayan-rock-salt",
  "handmade-coconut-oil-soap",
  "herbal-hair-oil",
  "pure-palm-jaggery",
  "palm-candy",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export type ProductBase = {
  category: ProductCategory;
  emoji: string;
  sizes: string[];
  image: string;
  images: string[];
  featured?: boolean;
};

export const PRODUCT_BASE: Record<ProductSlug, ProductBase> = {
  "cold-pressed-coconut-oil": {
    category: "oils",
    emoji: "🥥",
    sizes: ["500 ml", "1 L"],
    image: "/products/coconut-oil-1.jpeg",
    images: ["/products/coconut-oil-1.jpeg", "/products/brand-hero.jpeg"],
    featured: true,
  },
  "cold-pressed-gingelly-oil": {
    category: "oils",
    emoji: "🌾",
    sizes: ["250 ml", "500 ml", "1 L"],
    image: "/products/gingelly-oil-1.jpeg",
    images: ["/products/gingelly-oil-1.jpeg", "/products/gingelly-oil-2.jpeg"],
    featured: true,
  },
  "cold-pressed-groundnut-oil": {
    category: "oils",
    emoji: "🥜",
    sizes: ["250 ml", "500 ml", "1 L"],
    image: "/products/groundnut-oil-1.jpeg",
    images: [
      "/products/groundnut-oil-1.jpeg",
      "/products/groundnut-oil-2.jpeg",
    ],
    featured: true,
  },
  "organic-country-sugar": {
    category: "sweeteners",
    emoji: "🍯",
    sizes: ["500 g", "1 kg"],
    image: "/products/country-sugar-1.jpeg",
    images: ["/products/country-sugar-1.jpeg"],
    featured: true,
  },
  "himalayan-rock-salt": {
    category: "salt-soap",
    emoji: "🧂",
    sizes: ["500 g", "1 kg"],
    image: "/products/rock-salt-1.jpeg",
    images: ["/products/rock-salt-1.jpeg"],
    featured: true,
  },
  "handmade-coconut-oil-soap": {
    category: "salt-soap",
    emoji: "🧼",
    sizes: ["100 g"],
    image: "/products/coconut-soap-1.jpeg",
    images: ["/products/coconut-soap-1.jpeg"],
  },
  "herbal-hair-oil": {
    category: "hair-care",
    emoji: "🌿",
    sizes: ["100 ml", "200 ml", "500 ml", "1 L"],
    image: "/products/herbal-hair-oil-1.jpeg",
    images: [
      "/products/herbal-hair-oil-1.jpeg",
      "/products/herbal-hair-oil-2.jpeg",
    ],
    featured: true,
  },
  "pure-palm-jaggery": {
    category: "sweeteners",
    emoji: "🌴",
    sizes: ["500 g", "1 kg"],
    image: "/products/palm-jaggery-1.jpeg",
    images: ["/products/palm-jaggery-1.jpeg"],
    featured: true,
  },
  "palm-candy": {
    category: "sweeteners",
    emoji: "🍬",
    sizes: ["250 g", "500 g"],
    image: "/products/palm-candy-1.jpeg",
    images: ["/products/palm-candy-1.jpeg"],
    featured: true,
  },
};
