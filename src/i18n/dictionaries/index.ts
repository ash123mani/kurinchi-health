import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./en";
import { ta } from "./ta";

const dictionaries: Record<Locale, Dictionary> = { en, ta };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
