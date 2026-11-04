import Image from "next/image";
import Link from "next/link";
import { getCategory, type Product } from "@/lib/products";
import { productEnquiryLink } from "@/lib/site";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const category = getCategory(product.category);

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-cream-2"
        aria-label={`View ${product.name} details`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge ? (
            <span className="badge bg-cream/95 text-forest shadow-sm backdrop-blur">
              {product.badge}
            </span>
          ) : null}
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest backdrop-blur">
          {category?.name ?? "Natural Product"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-forest">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p lang="ta" className="tamil mt-1 text-sm text-ink-3">{product.tamilName}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink-2">
          {product.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-[13px] font-bold text-forest underline decoration-turmeric/50 decoration-2 underline-offset-4 transition-colors hover:text-terracotta"
          >
            View details
          </Link>
          <a
            href={productEnquiryLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1f8a4c] transition-colors hover:text-[#18753f]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
            </svg>
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
