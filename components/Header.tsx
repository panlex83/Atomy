"use client";

import { useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n";

export default function Header({ t, currentLocale }: any) {
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    router.push(`/${nextLocale}`);
  }

  const navItems = [
    ["#about", "О продукте"],
    ["#ingredients", "Состав"],
    ["#benefits", "Преимущества"],
    ["#atomy", "Atomy"],
    ["#order", "Заказать"],
    ["#faq", "FAQ"],
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#15110b] text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href={`/${currentLocale}`} className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d7b56d] text-sm font-black text-[#1f1a12]">
            HH
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black">HemoHIM</span>
            <span className="hidden text-xs text-white/55 sm:block">Atomy product</span>
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-white/70 hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <select
            aria-label="Language"
            value={currentLocale}
            onChange={(event) => changeLocale(event.target.value as Locale)}
            className="h-10 rounded-full border border-white/15 bg-[#211a10] px-3 text-sm text-white outline-none"
          >
            {locales.map((locale) => (
              <option key={locale} value={locale} className="bg-white text-neutral-950">
                {localeNames[locale]}
              </option>
            ))}
          </select>

          <a
            href={t.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#d7b56d] px-5 py-2.5 text-sm font-black text-[#1f1a12] hover:bg-[#e6c77d] sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-sm lg:hidden">
        {navItems.map(([href, label]) => (
          <a key={href} href={href} className="shrink-0 text-white/70 hover:text-white">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
