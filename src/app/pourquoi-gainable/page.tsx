import { Metadata } from 'next';
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls } from "@/lib/i18n";
import { WHY_CONTENT } from "@/lib/page-content";
import { WhyPageContent } from "@/components/pages/why-page-content";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            images: ['/images/relation-pro-client.png'],
            type: 'website',
        },
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/pourquoi-gainable`,
            languages: getAlternatesUrls('/pourquoi-gainable'),
        }
    };
}

export default function PourquoiGainablePage() {
    return <WhyPageContent />;
}
