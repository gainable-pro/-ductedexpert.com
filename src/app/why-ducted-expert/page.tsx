import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getAlternatesUrls } from '@/lib/i18n';
import { WhyPageContent } from '@/components/pages/why-page-content';
import { WHY_CONTENT } from '@/lib/why-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/why-ducted-expert`,
            languages: getAlternatesUrls('/why-ducted-expert'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: `https://www.ductedexpert.com/${locale}/why-ducted-expert`,
            type: 'website',
            images: ['/images/constat-terrain.png'],
        }
    };
}

export default function WhyDuctedExpertPage() {
    return <WhyPageContent />;
}
