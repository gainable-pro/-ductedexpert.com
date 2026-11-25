import { Metadata } from 'next';
import { getServerLocale } from '@/lib/server-locale';
import { getLocalizedAlternates, getLocalizedUrl, Locale } from '@/lib/i18n';
import { LabelsPageContent } from '@/components/pages/labels-page-content';
import { LABELS_CONTENT } from '@/lib/labels-content';

const SHORT_VIDEO_DURATIONS: Record<Locale, string> = {
    en: 'PT34S',
    de: 'PT40S',
    es: 'PT36S',
    it: 'PT36S',
    fi: 'PT40S',
    ar: 'PT42S',
};

const SHORT_VIDEO_TITLES: Record<Locale, { name: string; desc: string }> = {
    en: {
        name: 'DuctedExpert - Verified HVAC Expert Certification in 30 Seconds',
        desc: 'Learn how certified HVAC specialists are vetted and approved on the global DuctedExpert network.'
    },
    de: {
        name: 'DuctedExpert - Geprüfter HVAC-Experte in 30 Sekunden',
        desc: 'Erfahren Sie, wie zertifizierte Kanalklimaanlagen-Experten im globalen Netzwerk geprüft werden.'
    },
    es: {
        name: 'DuctedExpert - Certificación de experto en climatización en 30 segundos',
        desc: 'Descubra cómo se seleccionan y certifican los instaladores en la red global DuctedExpert.'
    },
    it: {
        name: 'DuctedExpert - Certificazione esperto HVAC in 30 secondi',
        desc: 'Scoprite come gli specialisti in climatizzazione canalizzata vengono verificati e certificati.'
    },
    fi: {
        name: 'DuctedExpert - Sertifioitu LVI-asiantuntija 30 sekunnissa',
        desc: 'Katso, miten LVI- ja kanavailmalämpöpumppuasiantuntijat tarkastetaan ja hyväksytään.'
    },
    ar: {
        name: 'DuctedExpert - شهادة خبير التكييف المعتمد في 30 ثانية',
        desc: 'تعرف على معايير فحص واعتماد مقاولي ومكاتب دراسات التكييف المركزي في شبكة DuctedExpert العالمية.'
    },
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;
    const canonicalUrl = `https://www.ductedexpert.com${getLocalizedUrl('verifiedExpert', locale)}`;
    const videoUrl = `https://www.ductedexpert.com/videos/ductedexpert-short-${locale}.mp4`;

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
            videos: [
                {
                    url: videoUrl,
                    secureUrl: videoUrl,
                    type: 'video/mp4',
                    width: 1920,
                    height: 1080,
                }
            ],
        }
    };
}

export default async function VerifiedExpertPage() {
    const locale = await getServerLocale();
    const videoMeta = SHORT_VIDEO_TITLES[locale] || SHORT_VIDEO_TITLES.en;
    const duration = SHORT_VIDEO_DURATIONS[locale] || 'PT34S';
    const videoUrl = `https://www.ductedexpert.com/videos/ductedexpert-short-${locale}.mp4`;

    const serverVideoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': videoMeta.name,
        'description': videoMeta.desc,
        'thumbnailUrl': [
            'https://www.ductedexpert.com/videos/ductedexpert-presentation-poster.jpg'
        ],
        'uploadDate': '2026-11-25T12:00:00+01:00',
        'duration': duration,
        'contentUrl': videoUrl,
        'embedUrl': videoUrl,
        'inLanguage': locale,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serverVideoSchema) }}
            />
            <LabelsPageContent />
        </>
    );
}
