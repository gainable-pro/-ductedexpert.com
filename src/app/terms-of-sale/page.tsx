import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getLocalizedAlternates, getLocalizedUrl } from '@/lib/i18n';
import { CgvPageContent } from '@/components/pages/cgv-page-content';
import { CGV_CONTENT } from '@/lib/cgv-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = CGV_CONTENT[locale] || CGV_CONTENT.en;
    const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('termsOfSale', locale)}`;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: canonicalUrl,
            languages: getLocalizedAlternates('termsOfSale'),
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function TermsOfSalePage() {
    return <CgvPageContent />;
}
