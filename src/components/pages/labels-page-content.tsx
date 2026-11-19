"use client";

import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Building2,
    Wrench,
    Award,
    Lock,
} from "lucide-react";
import Link from "next/link";
import { VerifiedExpertBadge } from "@/components/ui/verified-expert-badge";
import { useLanguage } from "@/components/layout/language-provider";
import { withLocalePath } from "@/lib/i18n";
import { LABELS_CONTENT } from "@/lib/page-content";

export function LabelsPageContent() {
    const { locale } = useLanguage();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-[#1F2D3D]">
            {/* HERO SECTION */}
            <section className="relative pt-16 md:pt-20 pb-20 px-4 overflow-hidden bg-white border-b border-slate-100">
                <div className="container max-w-5xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs md:text-sm font-semibold tracking-wide">
                        <ShieldCheck className="w-4 h-4 text-[#D59B2B]" />
                        <span>{c.topBadge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1F2D3D] leading-tight">
                        {c.heroTitle1}{" "}
                        <span className="text-[#D59B2B] underline decoration-amber-300 decoration-wavy underline-offset-8">
                            {c.heroTitle2}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {c.heroDesc}
                    </p>

                    {/* OFFICIAL BADGE PREVIEW WITH D EMBLEM */}
                    <div className="pt-6 pb-2 flex flex-col items-center justify-center">
                        <VerifiedExpertBadge size="lg" />
                    </div>

                    {/* Quick Guarantee Pills */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-4xl mx-auto text-left">
                        {c.badges.map((b, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-bold text-sm text-[#1F2D3D]">{b.title}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{b.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                {c.findExpertBtn} <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" variant="outline" className="border-slate-300 text-[#1F2D3D] hover:bg-slate-50 font-semibold px-8 py-6 rounded-xl">
                                {c.applyLabelBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY THE BADGE MAKES THE DIFFERENCE */}
            <section className="py-20 px-4 bg-slate-50 border-b border-slate-200/60">
                <div className="container max-w-5xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">
                            {c.sectionRiskTitle}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {c.sectionRiskSub}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* Risks */}
                        <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6 text-red-500" />
                                {c.badPointsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.badPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Guarantees */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-[#D59B2B] shadow-md">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-[#D59B2B]" />
                                {c.goodPointsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.goodPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 PILLARS */}
            <section className="py-20 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">
                            {c.criteriaTitle}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {c.criteriaSub}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {c.criteria.map((item, idx) => {
                            const icons = [Building2, Lock, Wrench, Award];
                            const IconComp = icons[idx % icons.length];
                            return (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#D59B2B] transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#1F2D3D] text-[#D59B2B] flex items-center justify-center mb-4">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-[#1F2D3D] mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 px-4 bg-[#1F2D3D] text-white text-center">
                <div className="container max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold">{c.ctaTitle}</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">{c.ctaSub}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-xl">
                                {c.findExpertBtn} <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" variant="outline" className="bg-white text-[#1F2D3D] hover:bg-slate-100 font-bold px-8 py-6 rounded-xl">
                                {c.applyLabelBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
