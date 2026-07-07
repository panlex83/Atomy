import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductIntro from "@/components/ProductIntro";
import Ingredients from "@/components/Ingredients";
import Benefits from "@/components/Benefits";
import VideoBlock from "@/components/VideoBlock";
import AboutAtomy from "@/components/AboutAtomy";
import OrderSteps from "@/components/OrderSteps";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getMessages } from "@/messages";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const t = getMessages(safeLocale);

  return (
    <main>
      <Header t={t} currentLocale={safeLocale} />
      <Hero t={t} />
      <ProductIntro t={t} />
      <Ingredients t={t} />
      <Benefits t={t} />
      <VideoBlock t={t} />
      <AboutAtomy t={t} />
      <OrderSteps t={t} />
      <FAQ t={t} />
      <Contacts t={t} />
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </main>
  );
}

export function generateStaticParams() {
  return [
    { locale: "ru" },
    { locale: "en" },
    { locale: "kk" },
    { locale: "uz" },
    { locale: "ky" },
  ];
}
