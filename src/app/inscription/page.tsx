import { Suspense } from "react";
import { SignUpForm } from "@/components/auth/signup-form";
import { Metadata } from 'next';
import { VisionSection } from "@/components/features/inscription/vision-section";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const dict = getDictionary(locale);

    return {
        title: dict.signup.metaTitle,
        description: dict.signup.metaDesc,
        openGraph: {
            title: dict.signup.metaTitle,
            description: dict.signup.metaDesc,
            type: 'website',
        },
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/inscription`,
            languages: getAlternatesUrls('/inscription'),
        },
    };
}

export default function InscriptionPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <VisionSection />
            <main className="flex-1 container mx-auto px-4 py-8" id="offres">
                <Suspense fallback={<div className="p-8 text-center text-slate-500 font-medium">Loading...</div>}>
                    <SignUpForm />
                </Suspense>
            </main>
        </div>
    );
}
