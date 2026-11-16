import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";

type LogoProps = {
  locale: Locale;
  primary: string;
  secondary: string;
  homeLabel: string;
  onDark?: boolean;
};

export function Logo({
  locale,
  primary,
  secondary,
  homeLabel,
  onDark = false,
}: LogoProps) {
  return (
    <Link
      href={localePath(locale)}
      className="group flex items-center gap-3"
      aria-label={homeLabel}
      hrefLang={locale}
    >
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 transition-transform duration-300 group-hover:scale-105 ${
          onDark ? "bg-cream/10 ring-cream/20" : "bg-cream ring-line"
        }`}
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[17px] font-semibold tracking-tight ${
            onDark ? "text-cream" : "text-forest"
          }`}
        >
          {primary}
        </span>
        <span
          className={`block text-[9px] font-bold uppercase tracking-[0.22em] ${
            onDark ? "text-cream/60" : "text-ink-3"
          }`}
        >
          {secondary}
        </span>
      </span>
    </Link>
  );
}
