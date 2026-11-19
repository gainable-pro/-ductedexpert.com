"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, AlertTriangle, MapPin, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";
import { withLocalePath } from "@/lib/i18n";
import { WHY_CONTENT } from "@/lib/page-content";

export function WhyPageContent() {
    const { locale } = useLanguage();
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;

    return (
        <div className="min-h-screen bg-white font-sans text-[#1F2D3D]">
            {/* 1. HERO SECTION */}
            <section className="relative pt-16 md:pt-20 pb-16 px-6 overflow-hidden bg-slate-50">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2D3D] mb-4 leading-tight">
                        {c.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium">
                        {c.heroSub1}<br />
                        <span className="text-[#D59B2B] font-bold">{c.heroSub2}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="bg-[#D59B2B] hover:bg-[#b88622] text-white text-lg px-8 py-6 rounded-xl font-bold shadow-lg transition-transform hover:scale-105">
                            <Link href={withLocalePath("/inscription", locale)}>{c.joinBtn}</Link>
                        </Button>
                        <Button asChild className="bg-[#1F2D3D] hover:bg-slate-800 text-white text-lg px-8 py-6 rounded-xl font-bold shadow-lg transition-transform hover:scale-105">
                            <Link href={withLocalePath("/", locale)}>{c.findExpertBtn}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. ORIGIN / FIELD REALITY */}
            <section className="py-24 px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-8 leading-tight">
                                {c.originTitle}
                            </h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-4 font-medium">
                                <p>{c.originP1}</p>
                                <p>{c.originP2}</p>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/constat-terrain.png"
                                alt={c.originTitle}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <MapPin className="text-orange-500" /> {c.badRealityTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.badRealityList.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <Users className="text-blue-500" /> {c.goodRealityTitle}
                            </h3>
                            <div className="mb-4 font-medium text-slate-700">{c.goodRealitySub}</div>
                            <ul className="space-y-4">
                                {c.goodRealityList.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PILLARS */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">{c.modelTitle}</h2>
                        <p className="text-lg text-slate-600">{c.modelSub}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {c.pillars.map((p, idx) => {
                            const icons = [ShieldCheck, TrendingUp, CheckCircle2];
                            const IconComp = icons[idx % icons.length];
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 rounded-xl bg-[#D59B2B]/15 text-[#D59B2B] flex items-center justify-center mb-5">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1F2D3D] mb-3">{p.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
