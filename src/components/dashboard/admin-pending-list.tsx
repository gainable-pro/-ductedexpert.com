"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";
import { translateTerm } from "@/lib/i18n";

export default function AdminPendingList() {
    const { locale } = useLanguage();
    const d = getDashboardDictionary(locale);
    const [experts, setExperts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/admin/pending')
            .then(res => {
                if (res.ok) return res.json();
                throw new Error("Not admin or error");
            })
            .then(data => setExperts(data))
            .catch(() => setExperts([]))
            .finally(() => setLoading(false));
    }, []);

    const handleApprove = async (id: string) => {
        setActionLoading(id);
        try {
            const res = await fetch('/api/admin/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ expertId: id })
            });
            if (res.ok) {
                setExperts(prev => prev.filter(e => e.id !== id));
            }
        } catch {
            alert("Error");
        }
        setActionLoading(null);
    };

    if (!loading && experts.length === 0) return null;

    return (
        <Card className="border-orange-200 bg-orange-50 mb-8">
            <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-orange-800 mb-4 flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-pulse" />
                    {d.pendingAdmin.title} ({experts.length})
                </h3>
                <div className="space-y-3">
                    {experts.map(expert => (
                        <div key={expert.id} className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="font-bold text-[#1F2D3D]">{expert.nom_entreprise}</div>
                                <div className="text-sm text-slate-500">
                                    {expert.representant_prenom} {expert.representant_nom} • {expert.ville} ({expert.code_postal}) – {translateTerm(expert.pays, locale)}
                                </div>
                                <div className="text-xs text-slate-400 mt-1">
                                    {translateTerm(expert.expert_type, locale)} • {d.pendingAdmin.registeredOn} {format(new Date(expert.created_at), 'dd MMM yyyy')}
                                </div>
                            </div>
                            <Button
                                onClick={() => handleApprove(expert.id)}
                                disabled={actionLoading === expert.id}
                                className="bg-green-600 hover:bg-green-700 text-white shrink-0"
                            >
                                {actionLoading === expert.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                                {d.pendingAdmin.approveBtn}
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
