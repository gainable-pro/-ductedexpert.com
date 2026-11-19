import type { Metadata } from "next";
import { Montserrat, Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { PWAInstall } from "@/components/pwa/PWAInstall";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { VercelAnalytics } from "@/components/analytics/VercelAnalytics";
import { LanguageProvider } from "@/components/layout/language-provider";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, getDictionary, LOCALE_LABELS } from "@/lib/i18n";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: '#1F2D3D',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const locInfo = LOCALE_LABELS[locale];

  return {
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "DuctedExpert.com",
    },
    metadataBase: new URL('https://www.ductedexpert.com'),
    title: {
      default: dict.home.metaTitle,
      template: "%s"
    },
    description: dict.home.metaDesc,
    alternates: {
      canonical: `https://www.ductedexpert.com/${locale}`,
      languages: getAlternatesUrls('/'),
    },
    openGraph: {
      type: 'website',
      locale: locInfo.ogLocale,
      url: `https://www.ductedexpert.com/${locale}`,
      siteName: 'DuctedExpert.com',
      images: [{ url: '/assets/logo-share.png', width: 1200, height: 630, alt: 'DuctedExpert.com - International Ducted Air Conditioning & Heat Pump Experts' }],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/icon-512.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  const locInfo = LOCALE_LABELS[locale];

  return (
    <html lang={locInfo.htmlLang} dir={locInfo.dir || 'ltr'}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={`${montserrat.variable} ${cairo.variable} ${tajawal.variable} font-sans`}>
        <LanguageProvider initialLocale={locale}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <PWAInstall />
          <VercelAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
