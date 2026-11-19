"use client";

import Link from "next/link";
import { Globe, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import { LoginDropdown } from "@/components/layout/login-dropdown";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { LOCALE_LABELS, Locale, SUPPORTED_LOCALES, stripLocalePrefix, withLocalePath } from "@/lib/i18n";

function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
    const { locale, setLocale } = useLanguage();
    const pathname = usePathname() || "/";
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleSwitch = (newLocale: Locale) => {
        setLocale(newLocale);
        setOpen(false);
        const stripped = stripLocalePrefix(pathname);
        // For dashboard/admin/commercial routes, stay on same route and just update cookie/state
        if (
            stripped.startsWith('/dashboard') ||
            stripped.startsWith('/admin') ||
            stripped.startsWith('/commercial')
        ) {
            router.refresh();
            return;
        }
        const target = withLocalePath(stripped, newLocale);
        const search = typeof window !== 'undefined' ? window.location.search : '';
        router.push(target + search);
    };

    const handleFrRedirect = () => {
        setOpen(false);
        window.location.href = "https://www.gainable.fr";
    };

    if (mobile) {
        return (
            <div className="flex flex-wrap items-center gap-2 py-2">
                {SUPPORTED_LOCALES.map((loc) => (
                    <button
                        key={loc}
                        type="button"
                        onClick={() => handleSwitch(loc)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                            locale === loc
                                ? "bg-[#1F2D3D] text-white border-[#1F2D3D]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#D59B2B]"
                        }`}
                    >
                        <span>{LOCALE_LABELS[loc].flag}</span>
                        <span className="uppercase">{loc}</span>
                    </button>
                ))}
                {/* French option redirects to gainable.fr */}
                <button
                    type="button"
                    onClick={handleFrRedirect}
                    title="Aller sur Gainable.fr (France)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100 transition-all shadow-sm"
                >
                    <span>🇫🇷</span>
                    <span className="uppercase">FR</span>
                    <span className="text-[10px] text-amber-700">↗</span>
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#D59B2B] text-xs font-bold text-[#1F2D3D] transition-all"
                aria-label="Select Language"
            >
                <Globe className="w-3.5 h-3.5 text-[#D59B2B]" />
                <span>{LOCALE_LABELS[locale].flag}</span>
                <span className="uppercase">{locale}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                        <div className="px-3.5 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            Language
                        </div>
                        {SUPPORTED_LOCALES.map((loc) => (
                            <button
                                key={loc}
                                type="button"
                                onClick={() => handleSwitch(loc)}
                                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors ${
                                    locale === loc
                                        ? "bg-amber-50 text-[#D59B2B] font-bold"
                                        : "text-slate-700 hover:bg-slate-50"
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span>{LOCALE_LABELS[loc].flag}</span>
                                    <span>{LOCALE_LABELS[loc].name}</span>
                                </span>
                                <span className="uppercase text-[10px] text-slate-400">{loc}</span>
                            </button>
                        ))}

                        <div className="my-1 border-t border-slate-100" />

                        {/* French: redirects directly to gainable.fr */}
                        <button
                            type="button"
                            onClick={handleFrRedirect}
                            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50/70 hover:text-[#D59B2B] transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <span>🇫🇷</span>
                                <span>Français</span>
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-amber-700 font-bold uppercase">
                                gainable.fr ↗
                            </span>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export function Header() {
    const pathname = usePathname() || "/";
    const stripped = stripLocalePrefix(pathname);
    const isLandingPage = stripped === '/demo' || stripped.startsWith('/demo');
    const { locale, t } = useLanguage();

    const logoSrc = "/ductedexpert-logo.png";

    if (isLandingPage) {
        return (
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-100 shadow-sm">
                <div className="container mx-auto flex py-2 items-center justify-between px-4">
                    <Link href={withLocalePath("/", locale)} className="relative h-20 w-52 md:h-24 md:w-60 block">
                        <Image
                            src={logoSrc}
                            alt="DuctedExpert.com"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <LanguageSelector />
                </div>
            </header>
        );
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
            <div className="container mx-auto flex py-0 items-center justify-between px-4">
                {/* Logo */}
                <Link
                    href={withLocalePath("/", locale)}
                    className="relative h-20 w-52 md:h-24 md:w-60 block transition-all"
                    aria-label="DuctedExpert.com - Home"
                >
                    <Image
                        src={logoSrc}
                        alt="DuctedExpert.com"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav: Experts, Climatisation, Bureau d'étude (NO Diagnostic Immobilier, NO Marques) */}
                <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-slate-700">
                    <Link
                        href={withLocalePath("/", locale)}
                        className="text-sm font-semibold text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.experts}
                    </Link>
                    <Link
                        href={withLocalePath("/climatisation", locale)}
                        className="text-sm font-semibold text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.climatisation}
                    </Link>
                    <Link
                        href={withLocalePath("/bureau-etude", locale)}
                        className="text-sm font-semibold text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.bureauEtude}
                    </Link>
                    <Link
                        href={withLocalePath("/labels", locale)}
                        className="text-sm font-medium text-slate-600 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.verifiedExpert}
                    </Link>
                    <Link
                        href={withLocalePath("/pourquoi-gainable", locale)}
                        className="text-sm font-medium text-slate-600 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.whyUs}
                    </Link>
                    <Link
                        href={withLocalePath("/contact", locale)}
                        className="text-sm font-medium text-slate-600 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.contact}
                    </Link>
                </nav>

                {/* Right Side: Language Switcher & Pro Portal */}
                <div className="flex items-center gap-3">
                    <LanguageSelector />
                    <div className="hidden md:block">
                        <LoginDropdown />
                    </div>
                    <div className="lg:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

function MobileMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { locale, t } = useLanguage();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="p-2 text-slate-700" aria-label="Menu">
                    <Menu className="h-6 w-6" />
                </button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription className="sr-only">Main mobile menu</SheetDescription>
                <nav className="flex flex-col space-y-4 mt-8">
                    <div className="mb-2">
                        <LoginDropdown />
                    </div>
                    <LanguageSelector mobile />
                    <hr className="border-slate-100" />

                    <Link
                        href={withLocalePath("/", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-slate-800 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.experts}
                    </Link>
                    <Link
                        href={withLocalePath("/climatisation", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-slate-800 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.climatisation}
                    </Link>
                    <Link
                        href={withLocalePath("/bureau-etude", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-slate-800 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.bureauEtude}
                    </Link>
                    <Link
                        href={withLocalePath("/labels", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.verifiedExpert}
                    </Link>
                    <Link
                        href={withLocalePath("/pourquoi-gainable", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.whyUs}
                    </Link>
                    <Link
                        href={withLocalePath("/contact", locale)}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-slate-700 hover:text-[#D59B2B] transition-colors"
                    >
                        {t.nav.contact}
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
