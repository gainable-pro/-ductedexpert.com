"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CvcRequestForm } from "./cvc-form";
import { useLanguage } from "@/components/layout/language-provider";
import { getFormsDictionary } from "@/lib/forms-i18n";

interface InternationalLeadFormProps {
    city: string;
    onSuccess?: () => void;
    expertId?: string;
    expertName?: string;
    hideHeader?: boolean;
    defaultSurface?: number | string;
}

export function InternationalLeadForm({
    city,
    onSuccess,
    expertId,
    expertName,
    hideHeader = false,
    defaultSurface
}: InternationalLeadFormProps) {
    const { locale } = useLanguage();
    const il = getFormsDictionary(locale).internationalLead;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmitCVC = async (data: any) => {
        setIsSubmitting(true);
        try {
            const address = data.address || "";
            const zipMatch = address.match(/\b\d{4,6}\b/);
            const extractedZip = zipMatch ? zipMatch[0] : "00000";

            const payload = {
                type: 'cvc',
                nom: data.lastName,
                prenom: data.firstName,
                email: data.email,
                telephone: data.phone,
                code_postal: extractedZip,
                ville: address.replace(extractedZip, "").replace(/,/g, "").trim() || city,
                adresse: address,
                message: data.description || "",
                projet: data.propertyType || "Not specified",
                surface: data.surface ? String(data.surface) : (defaultSurface ? String(defaultSurface) : undefined),
                source: expertName ? `Article ${expertName} (${city})` : `Landing Page ${city}`,
                expert_id: expertId,
                details: {
                    technologies: data.technologies,
                    files: data.files,
                    expertName: expertName
                }
            };

            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || "An error occurred");
            }

            setIsSuccess(true);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Submission error", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#1F2D3D]">{il.thankYouTitle}</h3>
                    <p className="text-slate-600 mt-2">
                        {expertName
                            ? il.transmittedToExpert(city, expertName)
                            : il.transmittedToLocal(city)
                        }
                        <br />{il.contact24h}
                    </p>
                </div>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    {il.newRequestBtn}
                </Button>
            </div>
        );
    }

    return (
        <div className={hideHeader ? "" : "bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100"}>
            {!hideHeader && (
                <div className="mb-8 text-center border-b pb-6 border-slate-100">
                    <h3 className="text-2xl font-extrabold text-[#1F2D3D] flex items-center justify-center gap-2 mb-2">
                        {il.getQuoteInCity(city)}
                    </h3>
                    <p className="text-slate-500">{il.subtitle}</p>
                </div>
            )}

            <CvcRequestForm
                onSubmit={handleSubmitCVC}
                isSubmitting={isSubmitting}
                defaultCity={city}
                defaultSurface={defaultSurface}
            />
        </div>
    );
}
