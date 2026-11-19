"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CvcRequestForm } from "./forms/cvc-form";
import { SimpleRequestForm } from "./forms/simple-form";
import { X, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { getFormsDictionary } from "@/lib/forms-i18n";
import { withLocalePath } from "@/lib/i18n";

interface ExpertSummary {
    id: string;
    nom_entreprise: string;
    expert_type: string;
    ville: string;
}

interface ContactWizardProps {
    preSelectedExperts?: ExpertSummary[];
    triggerButton?: React.ReactNode;
}

type WizardStep = "select-type" | "form" | "success";

export const ContactWizard = ({ preSelectedExperts = [], triggerButton }: ContactWizardProps) => {
    const { locale, t } = useLanguage();
    const w = getFormsDictionary(locale).wizard;

    const [isOpen, setIsOpen] = useState(false);
    const initialExperts = preSelectedExperts;
    const [step, setStep] = useState<WizardStep>(initialExperts.length > 0 ? "form" : "select-type");
    const [selectedExperts, setSelectedExperts] = useState<ExpertSummary[]>(initialExperts);

    useEffect(() => {
        if (preSelectedExperts.length > 0) {
            setSelectedExperts(preSelectedExperts);
            setStep("form");
        }
    }, [preSelectedExperts]);

    const expertType = selectedExperts.length > 0 ? selectedExperts[0].expert_type : "cvc_climatisation";

    const handleSubmitCVC = async (data: any) => {
        const address = data.address || "";
        const zipMatch = address.match(/\b\d{4,6}\b/);
        const extractedZip = zipMatch ? zipMatch[0] : "00000";

        const payload = {
            type: expertType === 'cvc_climatisation' ? 'cvc' : 'simple',
            nom: data.lastName || data.nom,
            prenom: data.firstName || data.prenom,
            email: data.email,
            telephone: data.phone || data.telephone,
            code_postal: extractedZip,
            ville: data.ville || address.replace(extractedZip, "").replace(/,/g, "").trim() || "International",
            adresse: address,
            message: data.description || data.message || "",
            projet: data.propertyType || data.projet || "",
            surface: data.surface ? String(data.surface) : undefined,
            details: data,
            expertIds: selectedExperts.map(e => e.id),
            expert_id: selectedExperts.length > 0 ? selectedExperts[0].id : undefined
        };

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const err = await res.json();
                console.error("Error submitting lead:", err);
                alert(err.error || "Error submitting request.");
                return;
            }

            setIsOpen(false);
            const expertIds = selectedExperts.map(e => e.id).join(',');
            window.location.href = `${withLocalePath('/confirmation-devis', locale)}?experts=${expertIds}`;
        } catch (e) {
            console.error("Network error:", e);
            alert("Connection error.");
        }
    };

    const handleRemoveExpert = (id: string) => {
        if (selectedExperts.length > 1) {
            setSelectedExperts(prev => prev.filter(e => e.id !== id));
        }
    };

    const resetWizard = () => {
        setIsOpen(false);
        setTimeout(() => {
            setStep(preSelectedExperts.length > 0 ? "form" : "select-type");
        }, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {triggerButton || (
                    <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-12 px-8 shadow-md">
                        {t.home.requestQuote}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:p-0 bg-slate-50">
                {/* HEADER WIZARD */}
                <div className="bg-[#1F2D3D] text-white p-6 sticky top-0 z-50 shadow-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <DialogTitle className="text-xl font-bold">
                                {step === 'success'
                                    ? w.requestSentTitle
                                    : expertType === 'cvc_climatisation'
                                        ? w.hvacQuoteTitle
                                        : w.contactProTitle}
                            </DialogTitle>
                            {step !== 'success' && (
                                <p className="text-slate-300 text-sm mt-1">
                                    {selectedExperts.length > 0
                                        ? w.sentToCount(selectedExperts.length)
                                        : w.selectProSubtitle}
                                </p>
                            )}
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {step === 'form' && selectedExperts.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedExperts.map(expert => (
                                <div key={expert.id} className="bg-white/10 text-white text-xs px-2 py-1 rounded flex items-center gap-2">
                                    <span>{expert.nom_entreprise}</span>
                                    {selectedExperts.length > 1 && (
                                        <button
                                            onClick={() => handleRemoveExpert(expert.id)}
                                            className="hover:text-red-300"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>
                            ))}
                            {selectedExperts.length < 5 && (
                                <div className="text-xs text-slate-400 italic flex items-center px-2">
                                    {w.maxRecipients}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                    {step === 'form' && expertType === 'cvc_climatisation' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <CvcRequestForm
                                onSubmit={handleSubmitCVC}
                                isSubmitting={false}
                                defaultCity={preSelectedExperts.length === 0 ? (triggerButton as any)?.props?.['data-city'] : undefined}
                            />
                        </div>
                    )}

                    {step === 'form' && expertType !== 'cvc_climatisation' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <SimpleRequestForm onSubmit={handleSubmitCVC} isSubmitting={false} />
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="text-center py-12 space-y-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1F2D3D]">{w.thankYouTitle}</h3>
                                <p className="text-slate-600 mt-2">{w.thankYouText}</p>
                            </div>

                            <div className="bg-blue-50 text-blue-800 text-left p-6 rounded-xl text-sm space-y-2 mt-8 max-w-lg mx-auto">
                                <p className="font-bold flex items-center gap-2">
                                    {w.safetyTipsTitle}
                                </p>
                                <ul className="list-disc pl-5 space-y-1 opacity-90">
                                    {w.safetyTips.map((tip, idx) => (
                                        <li key={idx}>{tip}</li>
                                    ))}
                                </ul>
                            </div>

                            <Button onClick={resetWizard} className="bg-slate-900 text-white font-bold px-8 mt-4">
                                {w.closeBtn}
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
