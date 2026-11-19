"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/layout/language-provider";
import { LOCALE_LABELS, SUPPORTED_LOCALES, getLocalizedUrl, findRouteByPath, withLocalePath } from "@/lib/i18n";
import { CountryFlag } from "@/components/ui/country-flag";

export function Footer() {
    const { locale, t } = useLanguage();
    const pathname = usePathname() || "/";
    const routeMatch = findRouteByPath(pathname);

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center space-x-2 mb-6">
                    <span className="text-2xl font-bold text-white">DuctedExpert.com</span>
                </div>

                {/* International SEO Language Links */}
                <div className="flex justify-center items-center flex-wrap gap-4 mb-8 text-xs font-semibold">
                    {SUPPORTED_LOCALES.map((loc) => {
                        const targetUrl = routeMatch?.routeKey
                            ? getLocalizedUrl(routeMatch.routeKey, loc)
                            : `/${loc}`;
                        return (
                            <Link
                                key={loc}
                                href={targetUrl}
                                className={`px-3 py-1 rounded-full border transition-colors ${
                                    locale === loc
                                        ? "border-[#D59B2B] text-[#D59B2B] bg-[#D59B2B]/10"
                                        : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                                }`}
                            >
                                <span className="hidden sm:inline-flex items-center mr-1.5">
                                    <CountryFlag code={LOCALE_LABELS[loc].flagCode} alt={LOCALE_LABELS[loc].name} className="w-3.5 h-2.5" />
                                </span>
                                <span>{LOCALE_LABELS[loc].name}</span>
                            </Link>
                        );
                    })}
                    <a
                        href="https://www.gainable.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full border border-amber-900/60 text-amber-400 hover:text-white hover:border-amber-400 transition-colors inline-flex items-center"
                        title="Gainable.fr - Réseau officiel France"
                    >
                        <span className="hidden sm:inline-flex items-center mr-1.5">
                            <CountryFlag code="fr" alt="France" className="w-3.5 h-2.5" />
                        </span>
                        <span>France (Gainable.fr) ↗</span>
                    </a>
                </div>

                <div className="flex justify-center flex-wrap gap-8 mb-8 text-sm font-medium">
                    <Link href={getLocalizedUrl('findInstaller', locale)} className="hover:text-amber-500 transition-colors text-white/95 font-semibold">
                        {t.footer.findInstaller}
                    </Link>
                    <Link href={getLocalizedUrl('airConditioning', locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.climatisation}
                    </Link>
                    <Link href={getLocalizedUrl('engineeringOffice', locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.bureauEtude}
                    </Link>
                    <Link href={getLocalizedUrl('verifiedExpert', locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.verifiedExpert}
                    </Link>
                    <Link href={getLocalizedUrl('whyDuctedExpert', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.whyDuctedExpert}
                    </Link>
                    <Link href={getLocalizedUrl('contact', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.contact}
                    </Link>
                    <Link href={withLocalePath("/inscription", locale)} className="hover:text-amber-500 transition-colors text-amber-500/90 font-semibold">
                        {t.footer.proSpace}
                    </Link>
                    <Link href={getLocalizedUrl('legalNotice', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.legalNotice}
                    </Link>
                    <Link href={getLocalizedUrl('privacyPolicy', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.privacyPolicy}
                    </Link>
                    <Link href={getLocalizedUrl('cookiesPolicy', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.cookiesPolicy}
                    </Link>
                    <Link href={getLocalizedUrl('termsOfUse', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.termsOfUse}
                    </Link>
                    <Link href={getLocalizedUrl('termsOfSale', locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.termsOfSale}
                    </Link>
                </div>

                <p className="text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} DuctedExpert.com. {t.footer.rightsReserved}
                </p>
            </div>
        </footer>
    );
}
