import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getAlternatesUrls } from '@/lib/i18n';
import { LabelsPageContent } from '@/components/pages/labels-page-content';
import { LABELS_CONTENT } from '@/lib/labels-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/verified-expert`,
            languages: getAlternatesUrls('/verified-expert'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: `https://www.ductedexpert.com/${locale}/verified-expert`,
            type: 'website',
            images: ['/gainable-fr-label-qualite-climatisation-rge.png'],
        }
    };
}

export default function VerifiedExpertPage() {
    return <LabelsPageContent />;
}
