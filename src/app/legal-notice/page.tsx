import MentionsLegales from '../mentions-legales/page';

export const metadata = {
    title: "Legal Notice - DuctedExpert.com",
    description: "Official legal notice of the platform DuctedExpert.com",
    alternates: {
        canonical: "https://www.ductedexpert.com/legal-notice",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function LegalNoticePage() {
    return <MentionsLegales />;
}
