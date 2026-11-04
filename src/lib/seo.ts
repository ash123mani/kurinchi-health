import {
  defaultLocale,
  htmlLang,
  localePath,
  openGraphLocales,
  type Locale,
} from "@/i18n/config";
import { SITE } from "./site";

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}

export function localizedUrl(locale: Locale, path = "/") {
  return `${SITE.url}${localePath(locale, path)}`;
}

export function pageAlternates(locale: Locale, path = "/") {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      "en-IN": localizedUrl("en", path),
      "ta-IN": localizedUrl("ta", path),
      "x-default": localizedUrl(defaultLocale, path),
    },
  };
}

export function openGraphLocale(locale: Locale) {
  return {
    locale: openGraphLocales[locale],
    alternateLocale: Object.values(openGraphLocales).filter(
      (value) => value !== openGraphLocales[locale],
    ),
  };
}

export function languageTag(locale: Locale) {
  return htmlLang[locale];
}
