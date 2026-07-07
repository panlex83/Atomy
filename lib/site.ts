import type { Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Atomy HemoHIM",
  defaultUrl: "https://hemohim.kz",
  whatsapp: "+7 708 271 7008",
  whatsappLink: "https://wa.me/77082717008",
  email: "hemohim.atomy.ru@gmail.com",
  instagram: "https://www.instagram.com/hemohim.atomy.ru",
  tiktok: "https://www.tiktok.com/@hemohim.atomy.ru",
  facebook: "mailto:hemohim.atomy.ru@gmail.com",
  domains: {
    ru: "https://hemohim.kz/ru",
    en: "https://hemohim.be/en",
    kk: "https://hemohim.kz/kk",
    uz: "https://hemohim.uz/uz",
    ky: "https://hemohim.kg/ky",
  } satisfies Record<Locale, string>,
};

export const localeTitles: Record<Locale, string> = {
  ru: "Atomy HemoHIM — заказать через WhatsApp",
  en: "Atomy HemoHIM — order via WhatsApp",
  kk: "Atomy HemoHIM — WhatsApp арқылы тапсырыс беру",
  uz: "Atomy HemoHIM — WhatsApp orqali buyurtma berish",
  ky: "Atomy HemoHIM — WhatsApp аркылуу заказ берүү",
};

export const localeDescriptions: Record<Locale, string> = {
  ru: "Информационный сайт о корейском продукте Atomy HemoHIM. Состав, описание, частые вопросы и заказ через WhatsApp.",
  en: "Information website about Atomy HemoHIM. Ingredients, product overview, FAQ, and ordering via WhatsApp.",
  kk: "Atomy HemoHIM туралы ақпараттық сайт. Құрамы, сипаттамасы, сұрақ-жауап және WhatsApp арқылы тапсырыс.",
  uz: "Atomy HemoHIM haqida maʼlumot sayti. Tarkibi, tavsifi, savol-javob va WhatsApp orqali buyurtma.",
  ky: "Atomy HemoHIM жөнүндө маалыматтык сайт. Курамы, сүрөттөмөсү, суроо-жооп жана WhatsApp аркылуу заказ.",
};
