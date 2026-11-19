import { Metadata } from 'next';
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls } from "@/lib/i18n";
import { LabelsPageContent, LABELS_CONTENT } from "@/components/pages/labels-page-content";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;

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
            canonical: `https://www.ductedexpert.com/${locale}/labels`,
            languages: getAlternatesUrls('/labels'),
        }
    };
}

export default function LabelsPage() {
    return <LabelsPageContent />;
}
