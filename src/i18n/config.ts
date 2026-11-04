export const locales = ["en", "ta"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ta: "தமிழ்",
};

export const htmlLang: Record<Locale, string> = {
  en: "en-IN",
  ta: "ta-IN",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_IN",
  ta: "ta_IN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ta" : "en";
}

export function localePath(locale: Locale, path = "/") {
  const suffix =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${suffix}`;
}
