import PolitiqueCookies from '../politique-cookies/page';

export const metadata = {
    title: "Cookies Policy - DuctedExpert.com",
    description: "Cookie management and tracker policy on DuctedExpert.com",
    alternates: {
        canonical: "https://www.ductedexpert.com/cookies-policy",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function CookiesPolicyPage() {
    return <PolitiqueCookies />;
}
