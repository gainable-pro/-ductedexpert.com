import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, getDictionary, withLocalePath } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const dict = getDictionary(locale);

    return {
        title: dict.bureauPage.metaTitle,
        description: dict.bureauPage.metaDesc,
        openGraph: {
            title: dict.bureauPage.metaTitle,
            description: dict.bureauPage.metaDesc,
            images: ['/gainable-fr-bureau-etude-thermique-hero.png'],
            type: 'website',
        },
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/bureau-etude`,
            languages: getAlternatesUrls('/bureau-etude'),
        }
    };
}

export default async function BureauEtudePage() {
    const locale = await getServerLocale();
    const dict = getDictionary(locale);
    const b = dict.bureauPage;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EngineeringService",
        "name": "DuctedExpert.com - HVAC & Thermal Engineering",
        "description": b.metaDesc,
        "url": `https://www.ductedexpert.com/${locale}/bureau-etude`,
        "logo": "https://www.ductedexpert.com/gainable-fr-logo-officiel-climatisation.png",
    };

    return (
        <div className="flex min-h-screen flex-col font-sans text-[#1F2D3D]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* BLOCK 1: HERO SECTION */}
            <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4 bg-[#1F2D3D] text-white">
                <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-wide leading-tight uppercase font-montserrat">
                            <span className="text-white">{b.heroTitle1}</span> <br />
                            <span className="text-[#D59B2B]">{b.heroTitle2}</span>
                        </h1>
                        <p className="text-xl text-slate-200 mb-6 font-medium">
                            {b.heroLead}
                        </p>
                        <p className="text-base text-slate-400 mb-10 leading-relaxed max-w-lg">
                            {b.heroDesc}
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link href={`${withLocalePath("/", locale)}?filter=bureau_etude`}>
                                <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                    {b.findOfficeBtn}
                                </Button>
                            </Link>
                            <Link href={withLocalePath("/inscription", locale)}>
                                <Button size="lg" className="bg-white hover:bg-slate-100 text-[#1F2D3D] font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                    {b.joinOfficeBtn}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#D59B2B]/20 blur-3xl rounded-full"></div>
                        <img
                            src="/gainable-fr-bureau-etude-thermique-hero.png"
                            alt={b.metaTitle}
                            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-[#D59B2B]/20 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* BLOCK 2: ROLE DU BUREAU D'ETUDE */}
            <section className="py-24 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-introduction.png"
                                alt={b.roleTitle}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {b.roleTitle}
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {b.roleText}
                            </p>
                            <div className="p-6 bg-slate-50 border-l-4 border-[#D59B2B] rounded-r-xl">
                                <p className="text-[#1F2D3D] font-bold text-lg">
                                    {b.roleQuote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: STUDIES LIST */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {b.studiesTitle}
                            </h2>
                            <ul className="space-y-4">
                                {b.studiesList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-lg">
                                        <span className="w-6 h-6 rounded-full bg-[#D59B2B] text-white flex items-center justify-center shrink-0 mt-1">
                                            <Check className="w-4 h-4" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-missions.png"
                                alt={b.studiesTitle}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
