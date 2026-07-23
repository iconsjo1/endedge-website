import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { en } from "@/lib/i18n/dictionaries/en";
import { ar } from "@/lib/i18n/dictionaries/ar";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.en;
}

export function getDictionarySync(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
