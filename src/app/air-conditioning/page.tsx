import { Metadata } from "next";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls } from "@/lib/i18n";
import { CLIMATISATION_CONTENT } from "@/lib/climatisation-content";
import { AirConditioningPageView } from "@/components/pages/air-conditioning-page-view";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = CLIMATISATION_CONTENT[locale] || CLIMATISATION_CONTENT.en;

  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: `https://www.ductedexpert.com/${locale}/air-conditioning`,
      languages: getAlternatesUrls('/air-conditioning'),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDesc,
      url: `https://www.ductedexpert.com/${locale}/air-conditioning`,
      type: "website",
      images: ["/gainable-fr-climatisation-pompe-a-chaleur-hero.png"],
    }
  };
}

export default async function AirConditioningPage() {
  const locale = await getServerLocale();
  return <AirConditioningPageView locale={locale} />;
}
