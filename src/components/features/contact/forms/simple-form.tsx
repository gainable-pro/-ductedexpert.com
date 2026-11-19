"use client";

import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    User,
    Phone,
    Mail,
    FileText,
    MapPin
} from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/components/layout/language-provider";
import { getFormsDictionary } from "@/lib/forms-i18n";
import { withLocalePath } from "@/lib/i18n";

interface SimpleRequestFormProps {
    onSubmit: (data: any) => void;
    isSubmitting?: boolean;
}

export const SimpleRequestForm = ({ onSubmit, isSubmitting = false }: SimpleRequestFormProps) => {
    const { locale } = useLanguage();
    const f = getFormsDictionary(locale).cvcForm;

    const simpleFormSchema = useMemo(() => z.object({
        lastName: z.string().min(2, f.errLastName),
        firstName: z.string().min(2, f.errFirstName),
        phone: z.string().min(6, f.errPhone),
        email: z.string().email(f.errEmail),
        address: z.string().optional(),
        description: z.string().min(5, f.projectDescHint),
        acceptTerms: z.boolean().refine(v => v === true, {
            message: f.errGdpr,
        }),
    }), [f]);

    type SimpleFormValues = z.infer<typeof simpleFormSchema>;

    const form = useForm<SimpleFormValues>({
        resolver: zodResolver(simpleFormSchema),
        defaultValues: {
            description: ""
        }
    });

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                            <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                            <Input
                                id="phone"
                                {...register("phone")}
                                placeholder={f.phonePlaceholder}
                                className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{f.emailLabel}</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
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

                <div className="space-y-2">
                    <Label>{f.cityZipOptionalLabel}</Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <Input {...register("address")} placeholder={f.cityZipOptionalPlaceholder} className="pl-10" />
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#1F2D3D] flex items-center gap-2 border-b pb-2">
                    <FileText className="w-5 h-5 text-[#D59B2B]" /> {f.yourRequestTitle}
                </h3>

                <div className="space-y-2">
                    <Label htmlFor="description">{f.messageLabel}</Label>
                    <Textarea
                        id="description"
                        {...register("description")}
                        placeholder={f.messagePlaceholder}
                        className="h-32 resize-none"
                    />
                    {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
                </div>
            </section>

            <section className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <Controller
                        name="acceptTerms"
                        control={form.control}
                        render={({ field }) => (
                            <Checkbox
                                id="acceptTerms"
                                checked={field.value || false}
                                onCheckedChange={field.onChange}
                                className="mt-1"
                            />
                        )}
                    />
                    <div className="space-y-1">
                        <Label
                            htmlFor="acceptTerms"
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
            </section>

            <div className="pt-4">
                <Button
                    type="submit"
                    className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-14 text-lg shadow-md"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? f.sending : f.submitSimpleBtn}
                </Button>
            </div>
        </form>
    );
};
