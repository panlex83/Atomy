import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { localeDescriptions, localeTitles, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const title = localeTitles[currentLocale];
  const description = localeDescriptions[currentLocale];
  const url = siteConfig.domains[currentLocale];

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.defaultUrl),
    alternates: {
      canonical: url,
      languages: {
        ru: siteConfig.domains.ru,
        en: siteConfig.domains.en,
        kk: siteConfig.domains.kk,
        uz: siteConfig.domains.uz,
        ky: siteConfig.domains.ky,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: currentLocale,
      type: "website",
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: "Atomy HemoHIM",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return children;
}
