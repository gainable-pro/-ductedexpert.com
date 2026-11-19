"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Globe2, Building2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { withLocalePath } from "@/lib/i18n";
import { CGU_CONTENT } from "@/lib/cgu-content";

export function CguPageContent() {
    const { locale } = useLanguage();
    const c = CGU_CONTENT[locale] || CGU_CONTENT.en;

    return (
        <main className="min-h-screen bg-slate-50/50 py-16 font-sans text-[#1F2D3D]">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Navigation & Breadcrumb */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link
                        href={withLocalePath("/", locale)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#D59B2B] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {c.breadcrumbHome}
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                        <Link href={withLocalePath("/mentions-legales", locale)} className="hover:underline">
                            Mentions Légales
                        </Link>
                        <span>•</span>
                        <Link href={withLocalePath("/cgv", locale)} className="hover:underline font-semibold text-amber-700">
                            CGV Pro
                        </Link>
                        <span>•</span>
                        <Link href={withLocalePath("/politique-confidentialite", locale)} className="hover:underline">
                            Confidentialité
                        </Link>
                    </div>
                </div>

                {/* Header Principal */}
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-900 border border-blue-500/20 text-xs font-black uppercase tracking-wider mb-4">
                        <Scale className="w-4 h-4 text-blue-600" /> {c.badge}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black font-montserrat text-[#1F2D3D] mb-3 leading-tight">
                        {c.title}
                    </h1>
                    <p className="text-[#D59B2B] font-bold uppercase tracking-wider text-sm md:text-base mb-4">
                        {c.subtitle}
                    </p>

                    {/* Official Website Banner */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-xs md:text-sm text-slate-700 font-semibold mb-6">
                        <Globe2 className="w-4 h-4 text-[#D59B2B]" />
                        <span>{c.officialSiteLabel} </span>
                        <a
                            href={c.officialSiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D59B2B] hover:underline font-bold"
                        >
                            {c.officialSiteText}
                        </a>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400">
                        <span>{c.lastUpdate}</span>
                        <span>EXCEED DIGITAL SAS • SIREN 929 458 522</span>
                    </div>
                </div>

                {/* Editor Box */}
                <div className="bg-gradient-to-br from-slate-900 to-[#1F2D3D] text-white rounded-3xl p-8 md:p-10 shadow-xl mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D59B2B]/20 text-[#D59B2B] text-xs font-bold uppercase tracking-wider">
                        <Building2 className="w-4 h-4" /> {c.editorBox.title}
                    </div>
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                        {c.editorBox.p1}
                    </p>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {c.editorBox.p2}
                    </p>
                    <div className="pt-2 text-xs text-[#D59B2B] font-mono">
                        <a href="https://www.ductedexpert.com" className="hover:underline">
                            https://www.ductedexpert.com
                        </a>
                    </div>
                </div>

                {/* Articles List */}
                <div className="space-y-6">
                    {c.articles.map((art, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-amber-50 text-[#D59B2B] text-xs font-black uppercase rounded-lg border border-amber-200/50">
                                    {art.num}
                                </span>
                                <h2 className="text-lg md:text-xl font-bold text-[#1F2D3D]">
                                    {art.title}
                                </h2>
                            </div>
                            <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line pt-2 border-t border-slate-100">
                                {art.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Back Button */}
                <div className="mt-12 text-center">
                    <Link
                        href={withLocalePath("/", locale)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F2D3D] text-white font-bold text-sm hover:bg-[#2c3e50] transition-colors shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {c.breadcrumbHome}
                    </Link>
                </div>
            </div>
        </main>
    );
}
