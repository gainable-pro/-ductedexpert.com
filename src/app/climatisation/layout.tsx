import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Climatisation gainable : installateur pour particuliers & professionnels | DuctedExpert.com",
    description: "Climatisation gainable pour villas, maisons, commerces et hôtels. Trouvez un installateur certifié ou un bureau d’étude CVC avec DuctedExpert.com.",
    openGraph: {
        title: "Climatisation gainable : installateur pour particuliers & professionnels | DuctedExpert.com",
        description: "Climatisation gainable pour villas, maisons, commerces et hôtels. Trouvez un installateur certifié ou un bureau d’étude CVC avec DuctedExpert.com.",
        url: "https://www.ductedexpert.com/climatisation",
        siteName: "DuctedExpert.com",
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Climatisation gainable : installateur pour particuliers & professionnels | DuctedExpert.com",
        description: "Climatisation gainable pour villas, maisons, commerces et hôtels. Trouvez un installateur certifié ou un bureau d’étude CVC avec DuctedExpert.com.",
    },
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
