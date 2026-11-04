"use client";

import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import {
  LOCALE_COOKIE,
  otherLocale,
  type Locale,
} from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  ariaLabel: string;
  className?: string;
  compact?: boolean;
};

function switchPath(pathname: string, locale: Locale) {
  return pathname.replace(/^\/(en|ta)(?=\/|$)/, `/${locale}`) || `/${locale}`;
}

export function LanguageSwitcher({
  locale,
  label,
  ariaLabel,
  className = "",
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const targetLocale = otherLocale(locale);
  const href = switchPath(pathname, targetLocale);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    document.cookie = `${LOCALE_COOKIE}=${targetLocale};path=/;max-age=31536000;samesite=lax`;

    if (typeof window !== "undefined") {
      event.preventDefault();
      router.push(`${href}${window.location.search}${window.location.hash}`);
    }
  }

  return (
    <a
      href={href}
      hrefLang={targetLocale}
      lang={targetLocale}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        className={compact ? "h-4 w-4" : "h-4 w-4 shrink-0"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
      </svg>
      {compact ? null : <span>{label}</span>}
    </a>
  );
}
