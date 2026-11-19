import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getLocalizedAlternates, getLocalizedUrl } from '@/lib/i18n';
import { LabelsPageContent } from '@/components/pages/labels-page-content';
import { LABELS_CONTENT } from '@/lib/labels-content';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;
    const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('verifiedExpert', locale)}`;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: canonicalUrl,
            languages: getLocalizedAlternates('verifiedExpert'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: canonicalUrl,
            type: 'website',
            images: ['/gainable-fr-label-qualite-climatisation-rge.png'],
        }
    };
}

export default function VerifiedExpertPage() {
    return <LabelsPageContent />;
}
