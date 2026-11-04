import Link from "next/link";
import { SITE } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const structured = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ink-3">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-forest">
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData data={structured} />
    </>
  );
}
