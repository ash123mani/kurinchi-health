import Link from "next/link";
import { SITE } from "@/lib/site";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${SITE.name} home`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-3 ${
          onDark ? "bg-cream/10" : "bg-forest"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
        >
          <path
            d="M16 4c5 4 8 8 8 12a8 8 0 0 1-16 0c0-4 3-8 8-12Z"
            fill={onDark ? "#E3B45B" : "#E3B45B"}
          />
          <path
            d="M16 9v14M16 16c-2.5-2.4-5-3-7-3 .6 2.6 2.4 4.5 5 5.2M16 19c2.5-2.4 5-3 7-3-.6 2.6-2.4 4.5-5 5.2"
            stroke={onDark ? "#1F3D2B" : "#FAF6EC"}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[17px] font-semibold tracking-tight ${
            onDark ? "text-cream" : "text-forest"
          }`}
        >
          Kurinchi
        </span>
        <span
          className={`block text-[9px] font-bold uppercase tracking-[0.22em] ${
            onDark ? "text-cream/60" : "text-ink-3"
          }`}
        >
          Health Products
        </span>
      </span>
    </Link>
  );
}
