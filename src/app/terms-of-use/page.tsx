import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getLocalizedAlternates, getLocalizedUrl } from '@/lib/i18n';
import { CguPageContent } from '@/components/pages/cgu-page-content';
import { CGU_CONTENT } from '@/lib/cgu-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = CGU_CONTENT[locale] || CGU_CONTENT.en;
    const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('termsOfUse', locale)}`;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: canonicalUrl,
            languages: getLocalizedAlternates('termsOfUse'),
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function TermsOfUsePage() {
    return <CguPageContent />;
}
