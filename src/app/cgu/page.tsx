import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getAlternatesUrls } from '@/lib/i18n';
import { CguPageContent } from '@/components/pages/cgu-page-content';
import { CGU_CONTENT } from '@/lib/cgu-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = CGU_CONTENT[locale] || CGU_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/cgu`,
            languages: getAlternatesUrls('/cgu'),
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function ConditionsGeneralesUtilisation() {
    return <CguPageContent />;
}
