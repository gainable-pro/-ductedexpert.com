import PolitiqueConfidentialite from '../politique-confidentialite/page';

export const metadata = {
    title: "Privacy Policy - DuctedExpert.com",
    description: "Privacy and personal data protection policy on DuctedExpert.com",
    alternates: {
        canonical: "https://www.ductedexpert.com/privacy-policy",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return <PolitiqueConfidentialite />;
}
