import TrouverInstallateurPage from '../trouver-installateur/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Find a Certified HVAC & Ducted Air Conditioning Installer | DuctedExpert.com",
    description: "Search and connect with vetted and certified ducted heat pump & air conditioning contractors near you.",
    alternates: {
        canonical: "https://www.ductedexpert.com/find-installer",
    },
};

export default function FindInstallerPage() {
    return <TrouverInstallateurPage />;
}
