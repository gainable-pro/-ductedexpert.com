"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Clock, AlertCircle, Trash2, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";
import { withLocalePath } from "@/lib/i18n";

interface Article {
    id: string;
    title: string;
    slug: string;
    status: "DRAFT" | "PENDING" | "PUBLISHED" | "REJECTED";
    createdAt: string;
    publishedAt?: string;
    rejectionReason?: string;
}

interface Quota {
    used: number;
    limit: number;
    remaining: number;
}

export default function ArticlesPage() {
    const { locale } = useLanguage();
    const d = getDashboardDictionary(locale);

    const [articles, setArticles] = useState<Article[]>([]);
    const [quota, setQuota] = useState<Quota | null>(null);
    const [expertSlug, setExpertSlug] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await fetch("/api/dashboard/articles");
            if (res.ok) {
                const data = await res.json();
                setArticles(data.articles);
                setQuota(data.quota);
                setExpertSlug(data.expertSlug);
            }
        } catch (error) {
            console.error("Failed to fetch articles", error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "PUBLISHED":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{d.articles.statusPublished}</Badge>;
            case "PENDING":
                return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{d.articles.statusPending}</Badge>;
            case "REJECTED":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-200">{d.articles.statusRejected}</Badge>;
            default:
                return <Badge variant="secondary">{d.articles.statusDraft}</Badge>;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">{d.articles.title}</h1>
                    <p className="text-slate-500">{d.articles.subtitle}</p>
                </div>
                {quota && (
                    <div className={`flex items-center gap-4 p-4 rounded-xl border ${quota.remaining === 0 ? 'bg-orange-50 border-orange-100' : 'bg-white border-slate-100 shadow-sm'}`}>
                        <div className="text-right">
                            <div className="text-sm font-medium text-slate-500">{d.articles.monthlyQuota}</div>
                            <div className={`text-xl font-bold ${quota.remaining === 0 ? 'text-orange-600' : 'text-slate-800'}`}>
                                {quota.limit >= 999 ? <span className="text-green-600">{d.articles.unlimited}</span> : `${quota.used} / ${quota.limit}`}
                            </div>
                        </div>
                        <Button asChild disabled={quota.remaining === 0} className={`bg-blue-600 hover:bg-blue-700 text-white ${quota.remaining === 0 ? "opacity-50" : ""}`}>
                            <Link href="/dashboard/articles/new">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                {d.articles.writeBtn}
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-400">{d.articles.loading}</div>
            ) : articles.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-700">{d.articles.noArticlesTitle}</h3>
                    <p className="text-slate-500 mb-6">{d.articles.noArticlesSubtitle}</p>
                    <Button asChild>
                        <Link href="/dashboard/articles/new">{d.articles.createFirstBtn}</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid gap-4">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2 flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="font-bold text-slate-800 text-lg leading-tight">{article.title}</div>
                                    <div className="shrink-0 flex flex-col items-end gap-2">
                                        {getStatusBadge(article.status)}
                                        {article.status === 'PUBLISHED' && expertSlug && (
                                            <button
                                                onClick={() => {
                                                    const url = `https://www.ductedexpert.com/${locale}/entreprise/${expertSlug}/articles/${article.slug}`;
                                                    if (navigator.share) {
                                                        navigator.share({ title: article.title, url });
                                                    } else {
                                                        navigator.clipboard.writeText(url);
                                                        alert(d.articles.linkCopied);
                                                    }
                                                }}
                                                className="flex items-center gap-1.5 px-2.5 py-1 mt-1 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors text-xs font-medium border border-slate-200 shadow-sm"
                                            >
                                                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                                                {d.articles.shareBtn}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="text-xs text-slate-400 font-mono break-all">/{article.slug}</div>

                                {article.status === 'REJECTED' && article.rejectionReason && (
                                    <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                        <span>{d.articles.rejectionReason}: {article.rejectionReason}</span>
                                    </div>
                                )}

                                <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {format(new Date(article.createdAt), "dd MMM yyyy")}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-3 border-t border-slate-50 md:border-t-0 md:pt-0 shrink-0 self-end md:self-center">
                                {article.status === 'PUBLISHED' && expertSlug && (
                                    <Button asChild variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                                        <a href={withLocalePath(`/entreprise/${expertSlug}/articles/${article.slug}`, locale)} target="_blank" rel="noopener noreferrer">
                                            {d.articles.viewBtn}
                                        </a>
                                    </Button>
                                )}
                                <Button asChild variant="secondary" size="sm">
                                    <Link href={`/dashboard/articles/${article.id}`}>
                                        {d.articles.editBtn}
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        if (confirm(d.articles.deleteConfirm)) {
                                            fetch(`/api/dashboard/articles/${article.id}`, { method: "DELETE" })
                                                .then(res => {
                                                    if (res.ok) fetchArticles();
                                                });
                                        }
                                    }}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
