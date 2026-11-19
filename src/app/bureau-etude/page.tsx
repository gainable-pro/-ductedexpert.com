import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Users, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, withLocalePath } from "@/lib/i18n";
import { BUREAU_CONTENT } from "@/lib/bureau-content";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = BUREAU_CONTENT[locale] || BUREAU_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/bureau-etude`,
            languages: getAlternatesUrls('/bureau-etude'),
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            url: `https://www.ductedexpert.com/${locale}/bureau-etude`,
            type: "website",
            images: ["/gainable-fr-bureau-etude-thermique-hero.png"],
        }
    };
}

export default async function BureauEtudePage() {
    const locale = await getServerLocale();
    const c = BUREAU_CONTENT[locale] || BUREAU_CONTENT.en;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EngineeringService",
        "name": "DuctedExpert.com - HVAC & Thermal Engineering Offices",
        "description": c.metaDesc,
        "url": `https://www.ductedexpert.com/${locale}/bureau-etude`,
        "knowsAbout": ["HVAC Load Calculation", "Duct Sizing", "Thermal Simulation", "Energy Audit", "VRV/VRF Engineering"]
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
                            <span className="text-white">{c.hero.title1}</span> <br />
                            <span className="text-[#D59B2B]">{c.hero.title2}</span>
                        </h1>
                        <p className="text-xl text-slate-200 mb-6 font-medium">
                            {c.hero.subtitle}
                        </p>
                        <p className="text-base text-slate-400 mb-10 leading-relaxed max-w-lg">
                            {c.hero.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={withLocalePath("/", locale)}>
                                <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                    {c.hero.findOfficeBtn}
                                </Button>
                            </Link>
                            <Link href={withLocalePath("/inscription", locale)}>
                                <Button size="lg" className="bg-white hover:bg-slate-100 text-[#1F2D3D] font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                    {c.hero.joinOfficeBtn}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#D59B2B]/20 blur-3xl rounded-full"></div>
                        <img
                            src="/gainable-fr-bureau-etude-thermique-hero.png"
                            alt={c.hero.title2}
                            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-[#D59B2B]/20 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* BLOCK 2: ROLE DU BUREAU D'ETUDE (Image Left, Text Right) */}
            <section className="py-24 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-introduction.png"
                                alt={c.role.titleHighlight}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {c.role.titlePrefix} <span className="text-[#D59B2B]">{c.role.titleHighlight}</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {c.role.p1}
                            </p>
                            <div className="p-6 bg-slate-50 border-l-4 border-[#D59B2B] rounded-r-xl">
                                <p className="text-[#1F2D3D] font-bold text-lg">
                                    {c.role.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: QUELLES ETUDES ? (Text Left, Image Right) */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {c.studies.titlePrefix} <span className="text-[#D59B2B]">{c.studies.titleHighlight}</span>
                            </h2>
                            <div className="grid gap-6">
                                {c.studies.items.map((service, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 items-start">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-[#D59B2B] shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-[#1F2D3D]">{service.title}</h4>
                                            <p className="text-sm text-slate-500">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-services.png"
                                alt={c.studies.titleHighlight}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: POUR QUI ? (Image Left, Text Right) */}
            <section className="py-24 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-audience.png"
                                alt={c.audiences.titleHighlight}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {c.audiences.titlePrefix} <span className="text-[#D59B2B]">{c.audiences.titleHighlight}</span>
                            </h2>
                            <ul className="space-y-6">
                                {c.audiences.items.map((audience, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="p-2 bg-[#D59B2B]/10 rounded-lg text-[#D59B2B] shrink-0">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1F2D3D] text-lg">{audience.target}</h4>
                                            <p className="text-slate-600 leading-relaxed">{audience.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 5: PROCESS (Text Left, Image Right) */}
            <section className="py-24 bg-[#1F2D3D] text-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-montserrat mb-8">
                                {c.process.titlePrefix} <span className="text-[#D59B2B]">{c.process.titleHighlight}</span>
                            </h2>
                            <div className="space-y-6">
                                {c.process.steps.map((step, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 items-start">
                                        <div className="px-3 py-1 bg-[#D59B2B] text-white font-bold rounded-lg text-sm shrink-0">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-etapes.png"
                                alt={c.process.titleHighlight}
                                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 6: EXEMPLES (Image Left, Text Right) */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-exemples.png"
                                alt={c.examples.titleHighlight}
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-8">
                                {c.examples.titlePrefix} <span className="text-[#D59B2B]">{c.examples.titleHighlight}</span>
                            </h2>
                            <div className="space-y-6">
                                {c.examples.items.map((ex, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                        <h4 className="font-bold text-[#1F2D3D] mb-2">{ex.title}</h4>
                                        <p className="text-slate-600 text-sm">{ex.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 7: CTA FINAL (Text Left, Image Right) */}
            <section className="py-24 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                                {c.cta.titlePrefix} <span className="text-[#D59B2B]">{c.cta.titleHighlight}</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                {c.cta.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={withLocalePath("/", locale)}>
                                    <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                        {c.cta.findOfficeBtn}
                                    </Button>
                                </Link>
                                <Link href={withLocalePath("/inscription", locale)}>
                                    <Button size="lg" className="bg-[#1F2D3D] hover:bg-[#2c3e50] text-white font-bold px-10 py-6 rounded-full text-lg shadow-lg w-full sm:w-auto">
                                        {c.cta.joinOfficeBtn}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/gainable-fr-bureau-etude-thermique-devis.png"
                                alt={c.cta.titleHighlight}
                                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
