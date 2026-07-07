export const locales = ["ru", "en", "kk", "uz", "ky"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  kk: "Қазақша",
  uz: "O‘zbekcha",
  ky: "Кыргызча",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
