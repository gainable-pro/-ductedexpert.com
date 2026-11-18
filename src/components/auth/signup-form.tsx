"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Building2, Briefcase, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import {
    EXPERT_TECHNOLOGIES,
    EXPERT_INTERVENTIONS_CLIM,
    EXPERT_INTERVENTIONS_ETUDE,
    EXPERT_BRANDS,
    EXPERT_BATIMENTS,
    EXPERT_CERTIFICATIONS
} from "@/lib/constants";
import { useLanguage } from "@/components/layout/language-provider";
import { INTERNATIONAL_COUNTRIES, translateTerm, withLocalePath } from "@/lib/i18n";

export function SignUpForm() {
    const { locale, t } = useLanguage();
    const [selectedPlan, setSelectedPlan] = useState<'societe' | 'bureau_etude' | null>(null);
    const [billingInterval, setBillingInterval] = useState<'yearly' | 'monthly'>('yearly');
    const formRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        representativeName: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: "",
        website: "",
        linkedin: "",
        description: "",
        showPassword: false,
        nomEntreprise: "",
        adresse: "",
        codePostal: "",
        ville: "",
        codeApe: "",
        siret: "",
        tvaNumber: "",
        pays: "United Kingdom",
        promoCode: ""
    });

    // Multi-value States (stored using canonical DB strings for 100% compatibility with shared database)
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [interventionsClim, setInterventionsClim] = useState<string[]>([]);
    const [interventionsEtude, setInterventionsEtude] = useState<string[]>([]);
    const [batiments, setBatiments] = useState<string[]>([]);
    const [marques, setMarques] = useState<string[]>([]);
    const [certifications, setCertifications] = useState<string[]>([]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        if (selectedPlan && formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const refParam = params.get("ref") || params.get("promo");
            if (refParam) {
                setFormData(prev => ({ ...prev, promoCode: refParam.toUpperCase() }));
            }
        }
    }, [selectedPlan]);

    const toggleSelection = (list: string[], setList: (val: string[]) => void, item: string) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const handleCommonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = async () => {
        if (!selectedPlan) return;

        // No SIRET / APE verification required! Just basic contact + company name/city/description
        if (
            !formData.representativeName ||
            !formData.email ||
            !formData.telephone ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.nomEntreprise ||
            !formData.adresse ||
            !formData.codePostal ||
            !formData.ville ||
            !formData.description
        ) {
            setShowErrors(true);
            alert(t.signup.requiredFieldsAlert);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert(t.signup.passwordMismatchAlert);
            return;
        }

        setShowErrors(false);
        setIsSubmitting(true);

        const payload = {
            ...formData,
            expertType: selectedPlan,
            technologies: selectedPlan === 'societe' ? technologies : [],
            interventionsClim: selectedPlan === 'societe' ? interventionsClim : [],
            interventionsEtude: selectedPlan === 'bureau_etude' ? interventionsEtude : [],
            batiments,
            marques: selectedPlan === 'societe' ? marques : [],
            certifications: selectedPlan === 'societe' ? certifications : []
        };

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Registration error");
                setIsSubmitting(false);
                return;
            }

            const { expertId } = data;

            // Free plan -> Engineering Office
            if (selectedPlan === 'bureau_etude') {
                setIsSuccess(true);
                setIsSubmitting(false);
                return;
            }

            // Paid plan -> Stripe Checkout (same Stripe account & price IDs as Gainable.fr)
            try {
                const checkoutRes = await fetch("/api/stripe/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        planId: 'cvc',
                        interval: billingInterval,
                        expertId: expertId,
                        email: formData.email,
                        promoCode: formData.promoCode
                    })
                });

                const checkoutData = await checkoutRes.json();

                if (checkoutRes.ok && checkoutData.url) {
                    window.location.href = checkoutData.url;
                } else {
                    console.error("Stripe Error:", checkoutData);
                    alert("Error redirecting to Stripe checkout. Your account was created.");
                    setIsSubmitting(false);
                }
            } catch (stripeError) {
                console.error("Stripe Fetch Error:", stripeError);
                alert("Payment service connection error.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            alert("An unexpected error occurred.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="p-12 text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-[#1F2D3D] mb-4">{t.signup.successTitle}</h2>
                <p className="text-slate-600 mb-8 text-lg">
                    {t.signup.successText}
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" onClick={() => window.location.href = withLocalePath('/', locale)}>
                        {t.signup.backHomeBtn}
                    </Button>
                </div>
            </div>
        );
    }

    const getPlanName = (p: string) => {
        if (p === 'societe') return t.signup.hvacCardTitle;
        if (p === 'bureau_etude') return t.signup.officeCardTitle;
        return "";
    };

    const getPlanPrice = (p: string) => {
        if (p === 'societe') {
            return billingInterval === 'yearly'
                ? `1 200 €${t.signup.perYearExclTax}`
                : `120 €${t.signup.perMonthExclTax}`;
        }
        if (p === 'bureau_etude') return t.signup.freeLabel;
        return "";
    };

    const getTTCPrice = (p: string) => {
        if (p === 'societe') {
            return billingInterval === 'yearly'
                ? { ht: "1 200 €", tva: "240 €", ttc: "1 440 €" }
                : { ht: "120 €", tva: "24 €", ttc: "144 €" };
        }
        return null;
    };

    return (
        <div className="w-full bg-gradient-to-b from-slate-50/50 via-white to-slate-50/35">
            {/* --- SECTION 1: PLAN SELECTION (2 Cards: Engineering Office & HVAC Company) --- */}
            <div className="max-w-5xl mx-auto px-4 py-12 mb-12">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black mb-4 uppercase tracking-wider shadow-xs">
                        <span>{t.signup.promoBanner}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
                        {t.signup.chooseTitle1}{" "}
                        <span className="bg-gradient-to-r from-[#D59B2B] to-[#b58221] bg-clip-text text-transparent">
                            {t.signup.chooseTitleHighlight}
                        </span>{" "}
                        {t.signup.chooseTitle2}
                    </h1>
                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-6">
                        {t.signup.chooseSubtitle}
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-emerald-100/60 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {t.signup.zeroCommissionBadge}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4 max-w-4xl mx-auto">
                    {/* CARD 1: ENGINEERING OFFICE (BUREAU D'ÉTUDE) */}
                    <div
                        onClick={() => setSelectedPlan('bureau_etude')}
                        className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                            selectedPlan === 'bureau_etude'
                                ? 'border-[#D59B2B] ring-4 ring-[#D59B2B]/20 bg-gradient-to-b from-amber-50/10 to-white shadow-xl hover:-translate-y-1'
                                : 'border-slate-200/80 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 bg-white'
                        }`}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100/40">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t.signup.officeCardTitle}</h3>
                            <p className="text-slate-400 text-xs mt-1">{t.signup.officeCardSub}</p>
                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-emerald-600 font-extrabold text-4xl tracking-tight">
                                        {t.signup.freeLabel}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                        {t.signup.first100Badge}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 w-full mb-6" />

                        <ul className="space-y-3.5 mb-8 flex-1">
                            {t.signup.officeFeatures.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={`mt-auto w-full py-3 px-4 rounded-xl text-center font-bold text-sm border transition-all ${
                            selectedPlan === 'bureau_etude'
                                ? 'bg-[#D59B2B] text-white border-[#D59B2B] shadow-lg shadow-[#D59B2B]/20'
                                : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                        }`}>
                            {selectedPlan === 'bureau_etude' ? t.signup.selectedBtn : t.signup.selectOfferBtn}
                        </div>
                    </div>

                    {/* CARD 2: HVAC / CLIMATISATION EXPERT COMPANY */}
                    <div
                        onClick={() => setSelectedPlan('societe')}
                        className={`cursor-pointer rounded-3xl p-8 border-2 transition-all duration-300 relative flex flex-col h-full shadow-xl ${
                            selectedPlan === 'societe'
                                ? 'border-[#D59B2B] ring-4 ring-[#D59B2B]/20 bg-gradient-to-b from-amber-50/30 via-white to-white'
                                : 'border-[#D59B2B]/60 hover:shadow-2xl hover:border-[#D59B2B] bg-white'
                        }`}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D59B2B] to-[#b58221] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-md">
                            {t.signup.recommendedBadge}
                        </div>
                        <div className="mb-6 mt-2">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D59B2B] to-[#b58221] flex items-center justify-center text-white mb-5 shadow-md shadow-[#D59B2B]/20">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t.signup.hvacCardTitle}</h3>
                            <p className="text-slate-400 text-xs mt-1">{t.signup.hvacCardSub}</p>

                            {/* Interval Toggle */}
                            <div className="flex items-center gap-1 mt-5 mb-4 bg-slate-100 p-1 rounded-xl w-full border border-slate-200/40" onClick={(e) => e.stopPropagation()}>
                                <button
                                    type="button"
                                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${billingInterval === 'yearly' ? 'bg-white text-[#1F2D3D] shadow-sm ring-1 ring-slate-200/30' : 'text-slate-500 hover:text-slate-800'}`}
                                    onClick={() => setBillingInterval('yearly')}
                                >
                                    {t.signup.yearly}
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${billingInterval === 'monthly' ? 'bg-[#1F2D3D] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                                    onClick={() => setBillingInterval('monthly')}
                                >
                                    {t.signup.monthly}
                                </button>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[#D59B2B] font-black text-4xl tracking-tight">
                                        {billingInterval === 'yearly' ? '1 200 €' : '120 €'}
                                    </span>
                                    <span className="text-base text-slate-400 line-through font-semibold">
                                        {billingInterval === 'yearly' ? '1 550 €' : '160 €'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-slate-500 font-medium">
                                        {billingInterval === 'yearly' ? t.signup.perYearExclTax : t.signup.perMonthExclTax}
                                    </span>
                                    <span className="text-[10px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                        🔥 {t.signup.privilegeRate}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 w-full mb-6" />

                        <ul className="space-y-3.5 mb-8 flex-1">
                            {t.signup.hvacFeatures.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-800 font-semibold">
                                    <CheckCircle2 className="w-4 h-4 text-[#D59B2B] shrink-0 mt-0.5" />
                                    <span className="leading-snug">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={`mt-auto w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm transition-all duration-300 ${
                            selectedPlan === 'societe'
                                ? 'bg-gradient-to-r from-[#D59B2B] to-[#b58221] text-white shadow-lg shadow-[#D59B2B]/20'
                                : 'bg-[#1F2D3D] text-white hover:bg-slate-800 hover:shadow-lg'
                        }`}>
                            {selectedPlan === 'societe' ? t.signup.selectedBtn : t.signup.selectOfferBtn}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: REGISTRATION FORM + SUMMARY --- */}
            {selectedPlan && (
                <div ref={formRef} className="max-w-7xl mx-auto px-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* LEFT COLUMN: THE FORM */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* BLOCK 1: CONTACT DETAILS */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-[#1F2D3D] text-white flex items-center justify-center text-sm">1</span>
                                    {t.signup.step1Title}
                                </h2>
                                <div className="grid gap-5">
                                    <div className="space-y-2">
                                        <Label>{t.signup.repNameLabel} <span className="text-red-500">*</span></Label>
                                        <Input
                                            name="representativeName"
                                            value={formData.representativeName}
                                            onChange={handleCommonChange}
                                            placeholder="John Smith"
                                            className={showErrors && !formData.representativeName ? "border-red-500" : ""}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>{t.signup.emailLabel} <span className="text-red-500">*</span></Label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleCommonChange}
                                                placeholder="contact@company.com"
                                                className={showErrors && !formData.email ? "border-red-500" : ""}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{t.signup.phoneLabel} <span className="text-red-500">*</span></Label>
                                            <Input
                                                name="telephone"
                                                type="tel"
                                                value={formData.telephone}
                                                onChange={handleCommonChange}
                                                placeholder="+44 20 1234 5678"
                                                className={showErrors && !formData.telephone ? "border-red-500" : ""}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>{t.signup.passwordLabel} <span className="text-red-500">*</span></Label>
                                            <div className="relative">
                                                <Input
                                                    name="password"
                                                    type={formData.showPassword ? "text" : "password"}
                                                    value={formData.password}
                                                    onChange={handleCommonChange}
                                                    className={showErrors && !formData.password ? "border-red-500" : ""}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                >
                                                    {formData.showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{t.signup.confirmPasswordLabel} <span className="text-red-500">*</span></Label>
                                            <Input
                                                name="confirmPassword"
                                                type="password"
                                                value={formData.confirmPassword}
                                                onChange={handleCommonChange}
                                                className={showErrors && !formData.confirmPassword ? "border-red-500" : ""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BLOCK 2: COMPANY DETAILS (OPEN INTERNATIONAL INPUT - NO VERIFICATION) */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-[#1F2D3D] text-white flex items-center justify-center text-sm">2</span>
                                    {t.signup.step2Title}
                                </h2>

                                <div className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>{t.signup.countryLabel} <span className="text-red-500">*</span></Label>
                                            <Select value={formData.pays} onValueChange={(val) => setFormData(prev => ({ ...prev, pays: val }))}>
                                                <SelectTrigger><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {INTERNATIONAL_COUNTRIES.map((c) => (
                                                        <SelectItem key={c.value} value={c.value}>
                                                            {c.flag} {translateTerm(c.value, locale)}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{t.signup.companyNameLabel} <span className="text-red-500">*</span></Label>
                                            <Input
                                                name="nomEntreprise"
                                                value={formData.nomEntreprise}
                                                onChange={handleCommonChange}
                                                placeholder="Ducted HVAC Solutions Ltd."
                                                className={showErrors && !formData.nomEntreprise ? "border-red-500" : ""}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>{t.signup.companyIdLabel}</Label>
                                            <Input
                                                name="siret"
                                                value={formData.siret}
                                                onChange={handleCommonChange}
                                                placeholder={t.signup.companyIdPlaceholder}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{t.signup.taxNumberLabel}</Label>
                                            <Input
                                                name="tvaNumber"
                                                value={formData.tvaNumber}
                                                onChange={handleCommonChange}
                                                placeholder="VAT / Tax ID"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>{t.signup.addressLabel} <span className="text-red-500">*</span></Label>
                                        <Input
                                            name="adresse"
                                            value={formData.adresse}
                                            onChange={handleCommonChange}
                                            className={showErrors && !formData.adresse ? "border-red-500" : ""}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            name="codePostal"
                                            placeholder={`${t.signup.postalCodePlaceholder} *`}
                                            value={formData.codePostal}
                                            onChange={handleCommonChange}
                                            className={showErrors && !formData.codePostal ? "border-red-500" : ""}
                                        />
                                        <Input
                                            name="ville"
                                            placeholder={`${t.signup.cityPlaceholder} *`}
                                            value={formData.ville}
                                            onChange={handleCommonChange}
                                            className={showErrors && !formData.ville ? "border-red-500" : ""}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>{t.signup.descriptionLabel} <span className="text-red-500">*</span></Label>
                                        <Textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleCommonChange}
                                            placeholder={t.signup.descriptionPlaceholder}
                                            className={`h-24 ${showErrors && !formData.description ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* BLOCK 3: TECHNICAL EXPERTISE (Multilingual Labels -> Canonical DB Values) */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-[#1F2D3D] text-white flex items-center justify-center text-sm">3</span>
                                    {t.signup.step3Title}
                                </h2>
                                <div className="space-y-6">
                                    {/* Building types */}
                                    <div>
                                        <h3 className="font-semibold mb-3">{t.signup.buildingsHeading}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {EXPERT_BATIMENTS.map(canonicalId => (
                                                <div key={canonicalId} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`bat-${canonicalId}`}
                                                        checked={batiments.includes(canonicalId)}
                                                        onCheckedChange={() => toggleSelection(batiments, setBatiments, canonicalId)}
                                                    />
                                                    <label htmlFor={`bat-${canonicalId}`} className="text-sm cursor-pointer">
                                                        {translateTerm(canonicalId, locale)}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* HVAC Company fields */}
                                    {selectedPlan === 'societe' && (
                                        <div className="space-y-6 pt-4 border-t border-slate-100">
                                            <div>
                                                <h3 className="font-semibold mb-3">{t.signup.technologiesHeading}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                    {EXPERT_TECHNOLOGIES.map(canonicalId => (
                                                        <div key={canonicalId} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`tech-${canonicalId}`}
                                                                checked={technologies.includes(canonicalId)}
                                                                onCheckedChange={() => toggleSelection(technologies, setTechnologies, canonicalId)}
                                                            />
                                                            <label htmlFor={`tech-${canonicalId}`} className="text-sm cursor-pointer">
                                                                {translateTerm(canonicalId, locale)}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-3">{t.signup.interventionsHeading}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {EXPERT_INTERVENTIONS_CLIM.map(canonicalId => (
                                                        <div key={canonicalId} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`iclim-${canonicalId}`}
                                                                checked={interventionsClim.includes(canonicalId)}
                                                                onCheckedChange={() => toggleSelection(interventionsClim, setInterventionsClim, canonicalId)}
                                                            />
                                                            <label htmlFor={`iclim-${canonicalId}`} className="text-sm cursor-pointer">
                                                                {translateTerm(canonicalId, locale)}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-3">{t.signup.brandsHeading}</h3>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {EXPERT_BRANDS.map(canonicalId => (
                                                        <div key={canonicalId} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`brand-${canonicalId}`}
                                                                checked={marques.includes(canonicalId)}
                                                                onCheckedChange={() => toggleSelection(marques, setMarques, canonicalId)}
                                                            />
                                                            <label htmlFor={`brand-${canonicalId}`} className="text-sm cursor-pointer">
                                                                {translateTerm(canonicalId, locale)}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-3">{t.signup.certificationsHeading}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {EXPERT_CERTIFICATIONS.map(canonicalId => (
                                                        <div key={canonicalId} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`cert-${canonicalId}`}
                                                                checked={certifications.includes(canonicalId)}
                                                                onCheckedChange={() => toggleSelection(certifications, setCertifications, canonicalId)}
                                                            />
                                                            <label htmlFor={`cert-${canonicalId}`} className="text-sm cursor-pointer">
                                                                {translateTerm(canonicalId, locale)}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Engineering Office fields */}
                                    {selectedPlan === 'bureau_etude' && (
                                        <div className="space-y-6 pt-4 border-t border-slate-100">
                                            <div>
                                                <h3 className="font-semibold mb-3">{t.signup.interventionsHeading}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {EXPERT_INTERVENTIONS_ETUDE.map(canonicalId => (
                                                        <div key={canonicalId} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`ietude-${canonicalId}`}
                                                                checked={interventionsEtude.includes(canonicalId)}
                                                                onCheckedChange={() => toggleSelection(interventionsEtude, setInterventionsEtude, canonicalId)}
                                                            />
                                                            <label htmlFor={`ietude-${canonicalId}`} className="text-sm cursor-pointer">
                                                                {translateTerm(canonicalId, locale)}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: STICKY SIDEBAR */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-24">
                                <div className="bg-[#1F2D3D] text-white rounded-2xl shadow-xl overflow-hidden">
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <Lock className="w-5 h-5 text-[#D59B2B]" />
                                            {t.signup.summaryTitle}
                                        </h3>

                                        <div className="space-y-6">
                                            <div className="pb-6 border-b border-slate-700">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <div className="text-slate-400 text-sm mb-1">{t.signup.selectedPlanLabel}</div>
                                                        <div className="font-bold text-lg text-[#D59B2B]">{getPlanName(selectedPlan)}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-bold text-xl">{getPlanPrice(selectedPlan)}</div>
                                                    </div>
                                                </div>

                                                {getTTCPrice(selectedPlan) && (() => {
                                                    const prices = getTTCPrice(selectedPlan)!;
                                                    return (
                                                        <div className="bg-slate-800/60 rounded-xl p-4 text-sm space-y-2">
                                                            <div className="flex justify-between text-slate-400">
                                                                <span>{t.signup.subtotalExclTax}</span>
                                                                <span>{prices.ht}</span>
                                                            </div>
                                                            <div className="flex justify-between text-slate-400">
                                                                <span>{t.signup.vatLabel}</span>
                                                                <span>+ {prices.tva}</span>
                                                            </div>
                                                            <div className="flex justify-between font-bold text-white border-t border-slate-600 pt-2">
                                                                <span>{t.signup.totalInclTax}</span>
                                                                <span className="text-[#D59B2B]">{prices.ttc}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })()}
                                            </div>

                                            <ul className="space-y-3">
                                                <li className="flex gap-3 text-sm text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 text-[#D59B2B] shrink-0" />
                                                    <span>{t.signup.noHiddenRenewal}</span>
                                                </li>
                                                <li className="flex gap-3 text-sm text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 text-[#D59B2B] shrink-0" />
                                                    <span>{t.signup.instantVisibility}</span>
                                                </li>
                                                <li className="flex gap-3 text-sm text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 text-[#D59B2B] shrink-0" />
                                                    <span>{t.signup.techSupportIncluded}</span>
                                                </li>
                                            </ul>

                                            <div className="pt-4 border-t border-slate-700 space-y-2">
                                                <label className="text-xs text-slate-400 font-semibold block">{t.signup.promoCodeLabel}</label>
                                                <div className="flex gap-2">
                                                    <Input
                                                        name="promoCode"
                                                        placeholder="PROMO"
                                                        value={formData.promoCode}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, promoCode: e.target.value.toUpperCase() }))}
                                                        className="bg-slate-800 border-slate-600 text-white font-mono text-sm uppercase tracking-wider"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pt-6">
                                                <Button
                                                    onClick={handleRegister}
                                                    disabled={isSubmitting}
                                                    className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white py-6 text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                                                >
                                                    {isSubmitting ? "..." : (
                                                        <span className="flex items-center gap-2">
                                                            {selectedPlan === 'bureau_etude' ? t.signup.submitFreeBtn : t.signup.submitPayBtn}
                                                            <ArrowRight className="w-5 h-5" />
                                                        </span>
                                                    )}
                                                </Button>
                                                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                                                    <Lock className="w-3 h-3" /> {t.signup.secureStripeNote}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 p-4 text-center text-xs text-slate-400">
                                        {t.signup.termsAcceptNote}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
