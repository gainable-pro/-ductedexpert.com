"use client";

import { Button } from "@/components/ui/button";
import {
    MapPin,
    AlertTriangle,
    Users,
    CheckCircle2,
    Check,
    XCircle,
    ArrowRight,
    ShieldCheck,
    Compass,
    Sparkles,
    Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale, withLocalePath } from "@/lib/i18n";
import { WHY_CONTENT } from "@/lib/why-content";

export function WhyPageContent({ initialLocale }: { initialLocale?: Locale }) {
    const { locale: contextLocale } = useLanguage();
    const locale = initialLocale || contextLocale;
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;
    const showVideo = locale === "en" || locale === "de";

    return (
        <div className="min-h-screen bg-white font-sans text-[#1F2D3D]">
            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-20 px-6 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2D3D] mb-6 font-montserrat">
                        {c.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light leading-relaxed">
                        {c.hero.sub1}
                    </p>
                    <p className="text-xl md:text-2xl text-[#D59B2B] font-semibold mb-10 leading-relaxed">
                        {c.hero.sub2}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                                {c.hero.joinBtn}
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 font-bold px-8 py-6 rounded-full text-lg">
                                {c.hero.findBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Presentation Video Section - Placed Below Hero Banner (English, German & Swiss versions only) */}
            {showVideo && (
                <section className="bg-slate-950 py-12 md:py-16 px-4 border-b border-slate-800">
                    <div className="container max-w-5xl mx-auto">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-800">
                            <video
                                className="w-full h-full object-contain mx-auto block"
                                controls
                                playsInline
                                preload="metadata"
                                poster="/videos/ductedexpert-presentation-poster.jpg"
                            >
                                <source src="/videos/ductedexpert-presentation.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>
            )}

            {/* 2. CONSTAT TERRAIN */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2D3D] mb-6 font-montserrat">
                                {c.origin.title}
                            </h2>
                            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                                {c.origin.p1}
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {c.origin.p2}
                            </p>
                        </div>

                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/constat-terrain.png"
                                alt={c.origin.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* The Two Realities */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Bad Reality */}
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <MapPin className="text-orange-500" /> {c.origin.badRealityTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.origin.badRealityList.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Good Reality */}
                        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <Users className="text-blue-500" /> {c.origin.goodRealityTitle}
                            </h3>
                            <div className="mb-4 font-medium text-slate-700">{c.origin.goodRealityLead}</div>
                            <ul className="space-y-4">
                                {c.origin.goodRealityList.map((item, i) => (
                                    <li key={i} className={`flex gap-3 text-slate-700 ${i === c.origin.goodRealityList.length - 1 ? "font-semibold bg-white p-2 rounded-lg border border-blue-100 shadow-sm mt-2" : ""}`}>
                                        {i === c.origin.goodRealityList.length - 1 ? (
                                            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        ) : (
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        )}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mb-20">
                        <div className="inline-block bg-[#1F2D3D] text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg">
                            {c.origin.gapBadge}
                        </div>
                    </div>

                    {/* The Solution with Image */}
                    <div className="grid md:grid-cols-2 gap-12 items-start bg-slate-50 p-8 md:p-12 rounded-3xl">
                        <div>
                            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-6">
                                {c.origin.solutionTitle}
                            </h3>
                            <p className="text-slate-600 mb-6 text-lg">
                                {c.origin.solutionLead}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {c.origin.solutionPoints.map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-[#D59B2B] rounded-full shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-slate-600 mb-6 text-lg font-bold">
                                {c.origin.whyDiffTitle}
                            </p>
                            <p className="text-slate-600 mb-4">{c.origin.whyDiffLead}</p>
                            <ul className="space-y-3">
                                {c.origin.whyDiffPoints.map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-700">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="relative h-[360px] rounded-xl overflow-hidden shadow-lg mb-8">
                                <Image
                                    src="/images/relation-pro-client.png"
                                    alt="DuctedExpert trusted relationship"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 bg-white rounded-xl border-l-4 border-[#D59B2B] shadow-sm">
                                <p className="text-slate-700 italic text-base md:text-lg leading-relaxed">
                                    {c.origin.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. INTERMEDIATE CTA */}
            <section className="py-12 px-6 bg-slate-50 border-t border-slate-200">
                <div className="max-w-6xl mx-auto text-center">
                    <Link href={withLocalePath("/inscription", locale)}>
                        <Button variant="outline" className="border-[#D59B2B] text-[#D59B2B] hover:bg-orange-50 font-bold px-8 py-6 rounded-xl text-lg">
                            {c.hero.joinBtn}
                        </Button>
                    </Link>
                </div>
            </section>

            {/* 4. COMPARATIF: CE QUE NOUS NE SOMMES PAS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1F2D3D] mb-16">
                        {c.clarity.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                        {/* LEFT: NOT */}
                        <div className="bg-slate-50 p-10 border-b md:border-b-0 md:border-r border-slate-200">
                            <h3 className="text-xl font-bold text-red-600 mb-8 flex items-center gap-3">
                                <XCircle className="w-6 h-6" /> {c.clarity.notTitle}
                            </h3>
                            <ul className="space-y-6">
                                {c.clarity.notItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-slate-800">{item.title}</div>
                                            <div className="text-sm text-slate-500">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: IS */}
                        <div className="bg-[#1F2D3D] p-10 text-white relative overflow-hidden">
                            <h3 className="text-xl font-bold text-[#D59B2B] mb-8 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-[#D59B2B]" /> {c.clarity.isTitle}
                            </h3>
                            <ul className="space-y-6">
                                {c.clarity.isItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#D59B2B] shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-white">{item.title}</div>
                                            <div className="text-sm text-slate-300">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. POUR QUI ? (PROS & PARTICULIERS) */}
            <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-[#D59B2B] rounded-full text-xs font-bold uppercase">
                            <Briefcase className="w-4 h-4" /> B2B
                        </div>
                        <h3 className="text-2xl font-bold text-[#1F2D3D]">{c.audience.proTitle}</h3>
                        <p className="text-slate-600 leading-relaxed">{c.audience.proDesc}</p>
                    </div>

                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase">
                            <Users className="w-4 h-4" /> B2C / Residential
                        </div>
                        <h3 className="text-2xl font-bold text-[#1F2D3D]">{c.audience.clientTitle}</h3>
                        <p className="text-slate-600 leading-relaxed">{c.audience.clientDesc}</p>
                    </div>
                </div>
            </section>

            {/* 6. LA SÉLECTION DUCTEDEXPERT */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#1F2D3D] mb-4 font-montserrat">
                        {c.selection.title}
                    </h2>
                    <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        {c.selection.subtitle}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {c.selection.criteria.map((crit, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-[#D59B2B] text-white flex items-center justify-center font-bold">
                                    0{i + 1}
                                </div>
                                <h4 className="font-bold text-[#1F2D3D] text-lg">{crit.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{crit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. NOTRE AMBITION & CTA FINAL */}
            <section className="py-24 px-6 bg-[#1F2D3D] text-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black font-montserrat">
                        {c.ambition.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                        {c.ambition.text}
                    </p>
                    <div className="pt-6">
                        <h3 className="text-2xl font-bold text-[#D59B2B] mb-8">
                            {c.ambition.joinMovementTitle}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href={withLocalePath("/inscription", locale)}>
                                <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-10 py-6 rounded-full text-lg shadow-xl">
                                    {c.ambition.proBtn}
                                </Button>
                            </Link>
                            <Link href={withLocalePath("/", locale)}>
                                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-10 py-6 rounded-full text-lg">
                                    {c.ambition.clientBtn}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
