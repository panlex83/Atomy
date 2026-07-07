import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: siteConfig.domains[locale as Locale],
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "ru" ? 1 : 0.8,
  }));
}
