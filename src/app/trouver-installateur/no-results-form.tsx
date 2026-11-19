"use client";

import { useState } from "react";
import { SimpleRequestForm } from "@/components/features/contact/forms/simple-form";
import { CvcRequestForm } from "@/components/features/contact/forms/cvc-form";
import { CheckCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/layout/language-provider";
import { getFormsDictionary } from "@/lib/forms-i18n";
import { withLocalePath } from "@/lib/i18n";

interface NoResultsFormProps {
    location?: string;
}

type FormType = 'cvc' | 'bureau';

export function NoResultsForm({ location = "" }: NoResultsFormProps) {
    const { locale } = useLanguage();
    const nr = getFormsDictionary(locale).noResults;

    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formType, setFormType] = useState<FormType>('cvc');

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);
        const address = data.address || "";
        const zipMatch = address.match(/\b\d{4,6}\b/) || location.match(/\b\d{4,6}\b/);
        const extractedZip = zipMatch ? zipMatch[0] : "00000";

        const payload = {
            type: formType,
            nom: data.lastName,
            prenom: data.firstName,
            email: data.email,
            telephone: data.phone,
            code_postal: extractedZip,
            ville: data.ville || location || "International",
            adresse: address,
            projet: data.propertyType || data.projet || "",
            surface: data.surface ? String(data.surface) : undefined,
            message: data.description,
            details: {
                ...data,
                origin: "no-results-search",
                search_location: location,
                form_type: formType
            }
        };

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setIsSuccess(true);
                window.location.href = `${withLocalePath('/confirmation-devis', locale)}?source=fallback_${formType}`;
            } else {
                const err = await res.json();
                alert(err.error || "An error occurred.");
            }
        } catch (e) {
            console.error(e);
            alert("Connection error.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{nr.successTitle}</h3>
                <p className="text-slate-600 mt-2">{nr.successText}</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#1F2D3D] mb-4">
                    {nr.dontWorryTitle}
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-4">
                    <span className="font-bold text-[#D59B2B]">{nr.bestExpertsHighlight}</span> {nr.bestExpertsRest}
                </p>
                <p className="text-sm text-slate-500 italic">
                    {nr.fillFormNote}
                </p>
            </div>

            <div className="max-w-xl mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="mb-8">
                    <Label className="block mb-2 font-bold text-[#1F2D3D]">{nr.requestTypeLabel}</Label>
                    <Select value={formType} onValueChange={(val) => setFormType(val as FormType)}>
                        <SelectTrigger className="w-full bg-white h-12">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cvc">{nr.hvacOption}</SelectItem>
                            <SelectItem value="bureau">{nr.engineeringOption}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {formType === 'cvc' && <CvcRequestForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />}
                {formType === 'bureau' && <SimpleRequestForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />}
            </div>
        </div>
    );
}
