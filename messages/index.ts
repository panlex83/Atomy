import { ru } from "./ru";
import { en } from "./en";
import { kk } from "./kk";
import { uz } from "./uz";
import { ky } from "./ky";
import { Locale } from "@/lib/i18n";

export const messages = {
  ru,
  en,
  kk,
  uz,
  ky,
};

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.ru;
}
