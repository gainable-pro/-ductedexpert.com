"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle, Inbox, ImageIcon, FileText, PlusCircle } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";

export function MobileBottomNav() {
    const pathname = usePathname();
    const { locale } = useLanguage();
    const d = getDashboardDictionary(locale);

    const navItems = [
        { label: d.sidebar.myProfile, icon: UserCircle, href: "/dashboard" },
        { label: d.sidebar.leads, icon: Inbox, href: "/dashboard/leads" },
        { label: d.sidebar.newPost, icon: PlusCircle, href: "/dashboard/articles/new", isMain: true },
        { label: d.sidebar.seoArticles, icon: FileText, href: "/dashboard/articles" },
        { label: d.sidebar.media, icon: ImageIcon, href: "/dashboard/media" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 pb-safe">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item, idx) => {
                    if (item.isMain) {
                        return (
                            <Link key={idx} href={item.href} className="flex flex-col items-center justify-center -mt-6">
                                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-slate-50">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="text-[10px] font-bold text-blue-600 mt-1">{item.label}</span>
                            </Link>
                        );
                    }

                    const isActive = pathname === item.href;
                    return (
                        <Link key={idx} href={item.href} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? "text-[#D59B2B]" : "text-slate-500"}`}>
                            <item.icon className={`w-6 h-6 ${isActive ? "fill-[#D59B2B]/20" : ""}`} />
                            <span className="text-[10px] font-medium truncate max-w-[64px]">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
