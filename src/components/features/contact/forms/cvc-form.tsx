"use client";

import { useState, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Building2,
    MapPin,
    Phone,
    Mail,
    User,
    ThermometerSnowflake,
    FileText,
    Paperclip,
    Check
} from "lucide-react";
import { EXPERT_BATIMENTS, EXPERT_TECHNOLOGIES } from "@/lib/constants";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getFormsDictionary } from "@/lib/forms-i18n";
import { translateTerm, withLocalePath } from "@/lib/i18n";

interface CvcRequestFormProps {
    onSubmit: (data: any) => void;
    isSubmitting?: boolean;
    defaultCity?: string;
    defaultSurface?: number | string;
}

export const CvcRequestForm = ({ onSubmit, isSubmitting = false, defaultCity, defaultSurface }: CvcRequestFormProps) => {
    const { locale } = useLanguage();
    const f = getFormsDictionary(locale).cvcForm;

    const [selectedTechs, setSelectedTechs] = useState<string[]>(["Climatisation gainable"]);
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState<{ url: string, name: string }[]>([]);

    const cvcFormSchema = useMemo(() => z.object({
        lastName: z.string().min(2, f.errLastName),
        firstName: z.string().min(2, f.errFirstName),
        phone: z.string().min(6, f.errPhone),
        email: z.string().email(f.errEmail),
        propertyType: z.string().min(1, f.errPropertyType),
        surface: z.string().min(1, f.errSurface),
        address: z.string().min(3, f.errAddress),
        technologies: z.array(z.string()).min(1, f.errTech),
        description: z.string().optional(),
        files: z.any().optional(),
        acceptTerms: z.boolean().refine(v => v === true, {
            message: f.errGdpr,
        }),
    }), [f]);

    type CvcFormValues = z.infer<typeof cvcFormSchema>;

    const form = useForm<CvcFormValues>({
        resolver: zodResolver(cvcFormSchema),
        defaultValues: {
            technologies: ["Climatisation gainable"],
            propertyType: "Maison Individuelle",
            surface: defaultSurface ? String(defaultSurface) : "",
            description: "",
            address: defaultCity || "",
            acceptTerms: false,
        }
    });

    const { register, handleSubmit, setValue, formState: { errors } } = form;

    const handleTechToggle = (tech: string) => {
        const current = selectedTechs;
        const updated = current.includes(tech)
            ? current.filter(t => t !== tech)
            : [...current, tech];

        setSelectedTechs(updated);
        setValue("technologies", updated, { shouldValidate: true });
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            const newFile = { url: data.url, name: file.name };
            const updatedFiles = [...files, newFile];
            setFiles(updatedFiles);
            setValue("files", updatedFiles);
        } catch (error) {
            console.error(error);
            alert("File upload error.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 1. Contact Details */}
            <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#1F2D3D] flex items-center gap-2 border-b pb-2">
                    <User className="w-5 h-5 text-[#D59B2B]" /> {f.yourDetails}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="lastName">{f.lastNameLabel}</Label>
                        <Input
                            id="lastName"
                            {...register("lastName")}
                            placeholder={f.lastNamePlaceholder}
                            className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="firstName">{f.firstNameLabel}</Label>
                        <Input
                            id="firstName"
                            {...register("firstName")}
                            placeholder={f.firstNamePlaceholder}
                            className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">{f.phoneLabel}</Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" aria-hidden="true" />
                            <Input
                                id="phone"
                                {...register("phone")}
                                placeholder={f.phonePlaceholder}
                                className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                        <p className="text-xs text-slate-500">{f.phoneHint}</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{f.emailLabel}</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" aria-hidden="true" />
                            <Input
                                id="email"
                                {...register("email")}
                                placeholder={f.emailPlaceholder}
                                className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                </div>
            </section>

            {/* 2. Property Information */}
            <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#1F2D3D] flex items-center gap-2 border-b pb-2">
                    <Building2 className="w-5 h-5 text-[#D59B2B]" /> {f.propertyInfo}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="propertyType">{f.propertyTypeLabel}</Label>
                        <Select onValueChange={(val) => setValue("propertyType", val, { shouldValidate: true })}>
                            <SelectTrigger id="propertyType" className={errors.propertyType ? "border-red-500" : ""}>
                                <SelectValue placeholder={f.selectPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {EXPERT_BATIMENTS.map((canonicalType) => (
                                    <SelectItem key={canonicalType} value={canonicalType}>
                                        {translateTerm(canonicalType, locale)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.propertyType && <p className="text-xs text-red-500">{errors.propertyType.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="surface">{f.surfaceLabel}</Label>
                        <Input
                            id="surface"
                            type="number"
                            {...register("surface")}
                            placeholder={f.surfacePlaceholder}
                            className={errors.surface ? "border-red-500" : ""}
                        />
                        {errors.surface && <p className="text-xs text-red-500">{errors.surface.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="address">{f.addressLabel}</Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" aria-hidden="true" />
                        <Input
                            id="address"
                            {...register("address")}
                            placeholder={f.addressPlaceholder}
                            className={`pl-10 ${errors.address ? "border-red-500" : ""}`}
                        />
                    </div>
                    {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
                </div>
            </section>

            {/* 3. Installation Type & Technologies (Translated labels, canonical DB values) */}
            <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#1F2D3D] flex items-center gap-2 border-b pb-2">
                    <ThermometerSnowflake className="w-5 h-5 text-[#D59B2B]" /> {f.installationType}
                </h3>

                <div className="space-y-2">
                    <Label className="mb-2 block">{f.technologiesLabel}</Label>
                    <div className="flex flex-wrap gap-2" role="group" aria-label={f.technologiesLabel}>
                        {EXPERT_TECHNOLOGIES.map((canonicalTech) => {
                            const isSelected = selectedTechs.includes(canonicalTech);
                            return (
                                <button
                                    key={canonicalTech}
                                    type="button"
                                    onClick={() => handleTechToggle(canonicalTech)}
                                    role="checkbox"
                                    aria-checked={isSelected}
                                    className={`cursor-pointer px-3 py-2 rounded-md border text-sm flex items-center gap-2 transition-all ${
                                        isSelected
                                            ? "bg-[#FFF8ED] border-[#D59B2B] text-[#D59B2B] font-bold"
                                            : "bg-white border-slate-200 text-slate-600 hover:border-[#D59B2B]"
                                    }`}
                                >
                                    {isSelected ? <Check className="w-4 h-4" /> : <div className="w-4 h-4 rounded-sm border border-slate-300" aria-hidden="true" />}
                                    {translateTerm(canonicalTech, locale)}
                                </button>
                            );
                        })}
                    </div>
                    {errors.technologies && <p className="text-xs text-red-500">{errors.technologies.message}</p>}
                </div>
            </section>

            {/* 4. Details & Files */}
            <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#1F2D3D] flex items-center gap-2 border-b pb-2">
                    <FileText className="w-5 h-5 text-[#D59B2B]" /> {f.detailsAndFiles}
                </h3>

                <div className="space-y-2">
                    <Label htmlFor="description">{f.projectDescLabel}</Label>
                    <Textarea
                        id="description"
                        {...register("description")}
                        placeholder={f.projectDescPlaceholder}
                        className="h-24 resize-none"
                    />
                    <p className="text-xs text-slate-500">{f.projectDescHint}</p>
                </div>

                <div className="space-y-2">
                    <Label>{f.plansPhotosLabel}</Label>
                    <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300">
                        {files.length > 0 && (
                            <div className="mb-4 space-y-2">
                                {files.map((fileItem, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded">
                                        <Paperclip className="w-4 h-4" />
                                        <span className="truncate max-w-[200px]">{fileItem.name}</span>
                                        <Check className="w-4 h-4 ml-auto" />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="relative">
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                onChange={handleFileUpload}
                                accept="image/*,application/pdf"
                                disabled={uploading}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                                    uploading ? "bg-slate-100 border-slate-300" : "border-slate-300 hover:bg-slate-100"
                                }`}
                            >
                                <Paperclip className={`w-8 h-8 mb-2 ${uploading ? "text-slate-300" : "text-slate-400"}`} />
                                <span className="text-sm text-slate-600">
                                    {uploading ? f.uploading : f.clickToAddFiles}
                                </span>
                                <span className="text-xs text-slate-400 mt-1">(JPG, PNG, PDF)</span>
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            {/* GDPR Consent */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Controller
                    name="acceptTerms"
                    control={form.control}
                    render={({ field }) => (
                        <Checkbox
                            id="acceptTerms_cvc"
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                        />
                    )}
                />
                <div className="space-y-1">
                    <Label
                        htmlFor="acceptTerms_cvc"
                        className="text-sm font-medium leading-relaxed text-slate-600 cursor-pointer"
                    >
                        {f.gdprPrefix}{" "}
                        <Link href={withLocalePath("/politique-confidentialite", locale)} className="text-[#D59B2B] hover:underline font-semibold">
                            {f.privacyPolicyLink}
                        </Link>.
                    </Label>
                    {errors.acceptTerms && (
                        <p className="text-xs text-red-500 font-medium">
                            {errors.acceptTerms.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
                <Button
                    type="submit"
                    className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-14 text-lg shadow-md"
                    disabled={isSubmitting || uploading}
                >
                    {isSubmitting || uploading ? f.sending : f.submitQuoteBtn}
                </Button>
                <p className="text-xs text-center text-slate-400 mt-4">
                    {f.submitDisclaimer}
                </p>
            </div>
        </form>
    );
};
