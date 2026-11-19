import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Search, Phone, Building2, MapPin } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/server-locale";
import { getFormsDictionary } from "@/lib/forms-i18n";
import { withLocalePath } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ConfirmationDevisPage({ searchParams }: Props) {
    const resolvedSearchParams = await searchParams;
    const expertsParam = resolvedSearchParams.experts;
    const locale = await getServerLocale();
    const cp = getFormsDictionary(locale).confirmationPage;

    let experts: any[] = [];

    if (typeof expertsParam === 'string') {
        const expertIds = expertsParam.split(',').filter(Boolean);
        if (expertIds.length > 0) {
            try {
                experts = await prisma.expert.findMany({
                    where: {
                        id: { in: expertIds }
                    },
                    select: {
                        id: true,
                        nom_entreprise: true,
                        telephone: true,
                        ville: true,
                        code_postal: true
                    }
                });
            } catch (e) {
                console.error("Error fetching experts for confirmation:", e);
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center space-y-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <div className="max-w-xl space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D3D]">
                    {cp.title}
                </h1>
                <p className="text-lg text-slate-600">
                    {cp.subtitle}
                </p>
            </div>

            {/* Experts Contact List */}
            {experts.length > 0 && (
                <div className="grid gap-4 w-full max-w-lg">
                    {experts.map((expert) => (
                        <div key={expert.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                            <div>
                                <div className="font-bold text-[#1F2D3D] flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-[#D59B2B]" />
                                    {expert.nom_entreprise}
                                </div>
                                <div className="text-sm text-slate-500 flex items-center gap-2">
                                    <MapPin className="w-3 h-3" /> {expert.ville} ({expert.code_postal})
                                </div>
                            </div>

                            {expert.telephone ? (
                                <a href={`tel:${expert.telephone}`} className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold hover:bg-green-100 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    {expert.telephone}
                                </a>
                            ) : (
                                <span className="text-slate-400 text-sm italic">{cp.noPublicPhone}</span>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Advice Section */}
            <div className="bg-blue-50 text-blue-800 text-left p-6 rounded-xl text-sm space-y-3 max-w-lg w-full mx-auto border border-blue-100">
                <p className="font-bold flex items-center gap-2 text-lg">
                    {cp.adviceTitle}
                </p>
                <ul className="list-disc pl-5 space-y-2 opacity-90">
                    {cp.adviceList.map((advice, idx) => (
                        <li key={idx}>{advice}</li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={withLocalePath("/", locale)}>
                    <Button variant="outline" className="gap-2">
                        <Home className="w-4 h-4" /> {cp.backHomeBtn}
                    </Button>
                </Link>
                <Link href={withLocalePath("/", locale)}>
                    <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white gap-2">
                        <Search className="w-4 h-4" /> {cp.findAnotherExpertBtn}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
