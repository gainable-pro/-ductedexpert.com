"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    UserCircle,
    Image as ImageIcon,
    CreditCard,
    Search,
    LogOut,
    FileText,
    Inbox,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MobileBottomNav } from "@/components/dashboard/mobile-bottom-nav";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";
import { withLocalePath } from "@/lib/i18n";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { locale } = useLanguage();
    const d = getDashboardDictionary(locale);
    const [isAdmin, setIsAdmin] = useState(false);

    const sidebarItems = [
        { label: d.sidebar.myProfile, icon: UserCircle, href: "/dashboard" },
        { label: d.sidebar.leads, icon: Inbox, href: "/dashboard/leads" },
        { label: d.sidebar.media, icon: ImageIcon, href: "/dashboard/media" },
        { label: d.sidebar.seoArticles, icon: FileText, href: "/dashboard/articles" },
        { label: d.sidebar.seoVisibility, icon: Search, href: "/dashboard/seo" },
        { label: d.sidebar.invoices, icon: CreditCard, href: "/dashboard/factures" },
    ];

    useEffect(() => {
        fetch('/api/dashboard/profile')
            .then(res => res.json())
            .then(data => {
                if (data?.user?.role === 'admin' || data?.user?.role === 'ADMIN') {
                    setIsAdmin(true);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const NavigationContent = () => (
        <div className="flex flex-col h-full">
            <div className="p-6 border-b border-slate-100">
                <h1 className="text-xl font-bold text-[#1F2D3D]">{d.sidebar.proPortal}</h1>
                <p className="text-xs text-slate-500 mt-1">{d.sidebar.manageVisibility}</p>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {isAdmin && (
                    <Link href="/admin">
                        <span className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors mb-4">
                            <Shield className="w-4 h-4" />
                            {d.sidebar.administration}
                        </span>
                    </Link>
                )}
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <span className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${isActive
                                ? "bg-[#1F2D3D]/5 text-[#1F2D3D] font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#1F2D3D]"
                                }`}>
                                <item.icon className={`w-4 h-4 ${isActive ? "text-[#D59B2B]" : "text-slate-400"}`} />
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <Button
                    variant="ghost"
                    onClick={() => router.push(withLocalePath("/", locale))}
                    className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                    <LogOut className="w-4 h-4" />
                    {d.sidebar.logout}
                </Button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
            {/* Mobile Header */}
            <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-center sticky top-0 z-40">
                <h1 className="text-lg font-bold text-[#1F2D3D]">{d.sidebar.proPortal}</h1>
            </div>

            <div className="flex flex-1 w-full min-w-0">
                {/* Desktop Sidebar */}
                <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-full sticky top-0">
                    <NavigationContent />
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 overflow-x-hidden p-4 md:p-8 pb-24 md:pb-8">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <MobileBottomNav />
        </div>
    );
}
