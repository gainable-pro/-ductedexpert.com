import { Metadata } from "next";
import { getServerLocale } from "@/lib/server-locale";
import { getLocalizedAlternates, getLocalizedUrl } from "@/lib/i18n";
import { CLIMATISATION_CONTENT } from "@/lib/climatisation-content";
import { AirConditioningPageView } from "@/components/pages/air-conditioning-page-view";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = CLIMATISATION_CONTENT[locale] || CLIMATISATION_CONTENT.en;
  const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('airConditioning', locale)}`;

  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: getLocalizedAlternates('airConditioning'),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDesc,
      url: canonicalUrl,
      type: "website",
      images: ["/ductedexpert-logo.png"],
    }
  };
}

export default async function AirConditioningPage() {
  const locale = await getServerLocale();
  return <AirConditioningPageView locale={locale} />;
}
