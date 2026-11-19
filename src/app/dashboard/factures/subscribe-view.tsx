"use client";

import { useState } from "react";
import {
    CreditCard,
    CheckCircle2,
    ShieldCheck,
    Loader2,
    ArrowRight,
    Building2,
    Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";

interface SubscribeViewProps {
    expertId: string;
    email: string;
    defaultPlanType?: string;
    isSuccess?: boolean;
}

export function SubscribeView({ expertId, email, isSuccess }: SubscribeViewProps) {
    const { locale, t } = useLanguage();
    const d = getDashboardDictionary(locale);

    const [interval, setInterval] = useState<'yearly' | 'monthly'>('yearly');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubscribe = async () => {
        setIsLoading(true);
        setErrorMsg(null);

        try {
            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    planId: 'cvc',
                    interval,
                    email,
                    expertId,
                    returnUrl: "/dashboard/factures"
                }),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || "Unable to start payment session.");
            }

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("Missing Stripe checkout URL.");
            }
        } catch (err: any) {
            console.error("Payment initiation error:", err);
            setErrorMsg(err.message || "Payment initialization error.");
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
            <header className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D59B2B] mb-1">
                    <ShieldCheck className="w-4 h-4" /> {d.billing.billingPortalBadge}
                </div>
                <h1 className="text-2xl font-bold text-[#1F2D3D]">{d.billing.subscribeTitle}</h1>
                <p className="text-slate-500 text-sm mt-1">
                    {d.billing.subscribeSubtitle}
                </p>
            </header>

            {isSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                        <strong className="font-semibold">{d.billing.paymentSuccessTitle}</strong>
                        <p className="text-xs text-emerald-700 mt-0.5">{d.billing.paymentSuccessText}</p>
                    </div>
                </div>
            )}

            {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errorMsg}
                </div>
            )}

            {/* FREQUENCY TOGGLE */}
            <div className="flex justify-center my-6">
                <div className="bg-slate-100 p-1.5 rounded-full inline-flex items-center border border-slate-200 shadow-inner">
                    <button
                        type="button"
                        onClick={() => setInterval('yearly')}
                        className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                            interval === 'yearly'
                                ? 'bg-white text-[#1F2D3D] shadow-sm font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        {d.billing.annualToggle}
                        <Badge className="ml-2 bg-[#D59B2B] text-white border-0 text-[10px] px-1.5 py-0">{d.billing.twoMonthsFree}</Badge>
                    </button>
                    <button
                        type="button"
                        onClick={() => setInterval('monthly')}
                        className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                            interval === 'monthly'
                                ? 'bg-white text-[#1F2D3D] shadow-sm font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        {d.billing.monthlyToggle}
                    </button>
                </div>
            </div>

            {/* PLAN CARD: CVC / CLIMATISATION (No Diagnostic Immobilier) */}
            <div className="max-w-xl mx-auto">
                <Card className="relative border-2 border-[#D59B2B] shadow-md bg-amber-50/10">
                    <div className="absolute -top-3 right-4 bg-[#D59B2B] text-white text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Check className="w-3 h-3" /> {d.billing.selectedBadge}
                    </div>

                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2 text-[#D59B2B]">
                            <Building2 className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wide">{d.billing.hvacFormulaBadge}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-[#1F2D3D]">{d.billing.hvacPlanTitle}</CardTitle>
                        <CardDescription className="text-xs text-slate-500">
                            {d.billing.hvacPlanDesc}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="border-y border-slate-100 py-3 my-2">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-extrabold text-[#1F2D3D]">
                                    {interval === 'yearly' ? '1 200 €' : '120 €'}
                                </span>
                                <span className="text-slate-500 text-xs font-medium">
                                    {interval === 'yearly' ? t.signup.perYearExclTax : t.signup.perMonthExclTax}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-2 text-xs text-slate-700">
                            {d.billing.hvacFeatures.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* ACTION FOOTER */}
            <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                    <h3 className="font-bold text-base flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-[#D59B2B]" />
                        {d.billing.selectedFormulaLabel}: {d.billing.hvacPlanTitle} ({interval === 'yearly' ? t.signup.yearly : t.signup.monthly})
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                        {d.billing.stripeSecureDesc}
                    </p>
                </div>
                <Button
                    size="lg"
                    onClick={handleSubscribe}
                    disabled={isLoading}
                    className="bg-[#D59B2B] hover:bg-[#b88322] text-white font-bold px-8 py-3 rounded-lg text-sm shrink-0 w-full md:w-auto flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {d.billing.redirectingStripe}
                        </>
                    ) : (
                        <>
                            {d.billing.payAndSubscribeBtn}
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
