import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getLocalizedAlternates, getLocalizedUrl } from '@/lib/i18n';
import { WhyPageContent } from '@/components/pages/why-page-content';
import { WHY_CONTENT } from '@/lib/why-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;
    const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('whyDuctedExpert', locale)}`;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: canonicalUrl,
            languages: getLocalizedAlternates('whyDuctedExpert'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: canonicalUrl,
            type: 'website',
            images: ['/images/constat-terrain.png'],
        }
    };
}

export default async function WhyDuctedExpertPage() {
    const locale = await getServerLocale();
    return <WhyPageContent initialLocale={locale} />;
}
