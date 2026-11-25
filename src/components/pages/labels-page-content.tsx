"use client";

import { useState } from "react";
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
    Sparkles,
    AlertTriangle,
    PhoneOff,
    Building,
    Droplets,
    AlertOctagon,
    Home,
    Shield,
    HelpCircle,
    ChevronDown,
    UserCheck,
    FileCheck2,
    Scale,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { VerifiedExpertBadge } from "@/components/ui/verified-expert-badge";
import { ShortVerificationVideo } from "@/components/features/video/short-verification-video";
import { useLanguage } from "@/components/layout/language-provider";
import { withLocalePath } from "@/lib/i18n";
import { LABELS_CONTENT } from "@/lib/labels-content";

export function LabelsPageContent() {
    const { locale } = useLanguage();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="flex min-h-screen flex-col font-sans text-[#1F2D3D] bg-white">
            {/* SECTION 1: HERO */}
            <section className="relative min-h-[500px] flex items-center justify-center py-20 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/gainable-fr-label-qualite-climatisation-rge.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-[#1F2D3D]/95"></div>
                </div>

                <div className="container relative z-10 mx-auto text-center px-4 max-w-5xl">
                    <div className="inline-flex items-center gap-2 p-2.5 px-6 rounded-full bg-[#D59B2B] text-white font-black text-xs md:text-sm tracking-wider mb-6 uppercase shadow-xl">
                        <ShieldCheck className="w-4 h-4 text-white" />
                        {c.hero.topBadge}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight uppercase font-montserrat text-white">
                        {c.hero.title1} <br />
                        <span className="text-[#D59B2B] normal-case block mt-3 font-extrabold text-2xl md:text-4xl">
                            {c.hero.title2}
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
                        {c.hero.desc}
                    </p>

                    {/* 3 Reassurance Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
                        {c.hero.reassurance.map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl text-white shadow-sm flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-[#D59B2B] text-white flex items-center justify-center font-bold shrink-0 shadow-sm mt-0.5">
                                    ✓
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{item.title}</p>
                                    <p className="text-xs text-slate-300 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white px-8 py-6 rounded-2xl font-black text-base shadow-xl transition-all hover:scale-105">
                                {c.hero.findProBtn}
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 py-6 rounded-2xl font-bold text-base transition-all">
                                {c.hero.joinProBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION: 30s CERTIFICATION SHORT VIDEO (Multilingual EN/DE/ES/IT/FI/AR) */}
            <ShortVerificationVideo forceLocale={locale} />

            {/* SECTION 2: OFFICIAL BADGE */}
            <section className="py-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                        <Sparkles className="w-4 h-4 text-[#D59B2B]" /> {c.officialBadge.tag}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black font-montserrat text-[#1F2D3D] mb-4">
                        {c.officialBadge.title}
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        {c.officialBadge.desc}
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200/90 shadow-2xl max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6">
                        <VerifiedExpertBadge size="lg" />
                        <div className="pt-5 border-t border-slate-100 text-xs md:text-sm text-slate-500 max-w-md leading-relaxed">
                            {c.officialBadge.legalNotice}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE 4 TRAPS */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                            <AlertTriangle className="w-4 h-4 text-rose-600" /> {c.traps.tag}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-montserrat text-[#1F2D3D] mb-6 leading-tight">
                            {c.traps.title} <br />
                            <span className="text-[#D59B2B]">{c.traps.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                            {c.traps.desc}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-14">
                        {c.traps.items.map((trap, idx) => (
                            <div key={idx} className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 space-y-4 hover:border-[#D59B2B]/60 transition-all shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                                        {idx === 0 && <PhoneOff className="w-6 h-6 text-rose-600" />}
                                        {idx === 1 && <Building className="w-6 h-6 text-rose-600" />}
                                        {idx === 2 && <Droplets className="w-6 h-6 text-rose-600" />}
                                        {idx === 3 && <AlertOctagon className="w-6 h-6 text-rose-600" />}
                                    </div>
                                    <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-rose-100 text-rose-800">
                                        #{trap.num}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[#1F2D3D]">
                                    {trap.title}
                                </h3>
                                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                                    <p>
                                        <strong className="text-rose-700">{trap.badTitle} </strong>
                                        {trap.badText}
                                    </p>
                                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium flex items-start gap-2 text-xs">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span><strong>{trap.goodTitle} </strong>{trap.goodText}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ENCADRÉ VISUEL DESIGN */}
                    <div className="bg-gradient-to-r from-slate-900 to-[#1F2D3D] text-white p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-5/12 shrink-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                            <Image
                                src="/gainable-fr-climatisation-maison-design.png"
                                alt={c.traps.vision.title}
                                width={550}
                                height={360}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D59B2B]/20 text-[#D59B2B] border border-[#D59B2B]/30 text-xs font-bold">
                                <Home className="w-4 h-4" /> {c.traps.vision.tag}
                            </div>
                            <h4 className="text-xl md:text-3xl font-black font-montserrat text-white leading-snug">
                                {c.traps.vision.title} <br />
                                <span className="text-[#D59B2B]">{c.traps.vision.titleHighlight}</span>
                            </h4>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                                {c.traps.vision.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE 4 VERIFICATION STEPS */}
            <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" /> {c.verification.tag}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-montserrat text-[#1F2D3D] mb-5 tracking-tight">
                            {c.verification.title}
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            {c.verification.desc}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {c.verification.steps.map((step, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500/60 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                                    <div className="flex items-start sm:items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black text-xl shadow-lg shrink-0">
                                            {step.num}
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase mb-1">
                                                <Shield className="w-3.5 h-3.5" /> {step.stepTag}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-black text-[#1F2D3D]">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-700 font-bold text-xs uppercase tracking-wider shrink-0 self-start lg:self-auto border border-emerald-500/20">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {step.badge}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-6">
                                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                                        <p className="text-xs font-black uppercase text-emerald-800 tracking-wider flex items-center gap-1.5">
                                            <ShieldCheck className="w-4 h-4 text-emerald-600" /> {step.roleTitle}
                                        </p>
                                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                                            {step.roleDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: ARTISAN TRUST */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                <UserCheck className="w-4 h-4" /> {c.artisanTrust.tag}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black font-montserrat text-[#1F2D3D] leading-tight">
                                {c.artisanTrust.title} <br />
                                <span className="text-[#D59B2B]">{c.artisanTrust.titleHighlight}</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                                {c.artisanTrust.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                                <Image
                                    src="/blog/gainable-fr-climatisation-artisan-client-partenaire.png"
                                    alt={c.artisanTrust.title}
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: WHY CHOOSE A VERIFIED EXPERT */}
            <section className="py-20 bg-slate-50/60 border-b border-slate-200">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/relation-pro-client.png"
                                    alt={c.whyChoose.title}
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black font-montserrat text-[#1F2D3D] leading-tight">
                                {c.whyChoose.title} <br />
                                <span className="text-[#D59B2B]">{c.whyChoose.titleHighlight}</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {c.whyChoose.benefits.map((benefit, i) => (
                                    <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                                            ✓
                                        </div>
                                        <h4 className="font-bold text-[#1F2D3D] text-base">{benefit.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: PRO SECTION */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                <Award className="w-4 h-4" /> {c.proSection.tag}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black font-montserrat text-[#1F2D3D] leading-tight">
                                {c.proSection.title} <br />
                                <span className="text-[#D59B2B]">{c.proSection.titleHighlight}</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                                {c.proSection.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            <div className="pt-2">
                                <Link href={withLocalePath("/inscription", locale)}>
                                    <Button size="lg" className="bg-[#1F2D3D] hover:bg-[#2c3e50] text-white px-8 py-6 rounded-2xl font-bold text-base shadow-xl">
                                        {c.proSection.joinBtn}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                                <Image
                                    src="/blog/b2b-handshake.png"
                                    alt={c.proSection.title}
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: REQUIREMENTS & ETHICS */}
            <section className="py-20 bg-[#1F2D3D] text-white">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D59B2B]/20 text-[#D59B2B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D59B2B]/30">
                        <ShieldCheck className="w-4 h-4 text-[#D59B2B]" /> {c.requirements.tag}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black font-montserrat mb-4">
                        {c.requirements.title} <span className="text-[#D59B2B]">{c.requirements.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
                        {c.requirements.desc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                        {/* Docs */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                            <h3 className="text-xl font-bold text-[#D59B2B] flex items-center gap-2 border-b border-white/10 pb-4">
                                <FileCheck2 className="w-5 h-5" /> {c.requirements.docsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.requirements.docs.map((d, i) => (
                                    <li key={i} className="flex gap-3 items-start text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#D59B2B] shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-white block">{d.title}</strong>
                                            <span className="text-slate-300 text-xs">{d.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ethics */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                            <h3 className="text-xl font-bold text-[#D59B2B] flex items-center gap-2 border-b border-white/10 pb-4">
                                <Scale className="w-5 h-5" /> {c.requirements.ethicsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.requirements.ethics.map((e, i) => (
                                    <li key={i} className="flex gap-3 items-start text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#D59B2B] shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-white block">{e.title}</strong>
                                            <span className="text-slate-300 text-xs">{e.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Link href={withLocalePath("/", locale)}>
                        <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white px-8 py-6 rounded-2xl font-black text-base shadow-xl">
                            {c.requirements.consultBtn}
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SECTION 9: ACCORDION FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <HelpCircle className="w-4 h-4" /> {c.faq.tag}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black font-montserrat text-[#1F2D3D]">
                            {c.faq.title}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {c.faq.items.map((item, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#1F2D3D] transition-colors"
                                >
                                    <span>{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-[#D59B2B]" : ""}`} />
                                </button>
                                {openFaq === idx && (
                                    <div className="p-6 bg-white text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
