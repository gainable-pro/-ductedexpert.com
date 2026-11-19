import { Metadata } from "next";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls } from "@/lib/i18n";
import { BUREAU_CONTENT } from "@/lib/bureau-content";
import { BureauPageView } from "@/components/pages/bureau-page-view";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = BUREAU_CONTENT[locale] || BUREAU_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/engineering-office`,
            languages: getAlternatesUrls('/engineering-office'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: `https://www.ductedexpert.com/${locale}/engineering-office`,
            type: "website",
            images: ["/gainable-fr-bureau-etude-thermique-hero.png"],
        }
    };
}

export default async function EngineeringOfficePage() {
    const locale = await getServerLocale();
    return <BureauPageView locale={locale} />;
}
