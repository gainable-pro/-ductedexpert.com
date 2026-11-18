"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { LOCALE_LABELS, SUPPORTED_LOCALES, withLocalePath } from "@/lib/i18n";

export function Footer() {
    const { locale, t } = useLanguage();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center space-x-2 mb-6">
                    <span className="text-2xl font-bold text-white">DuctedExpert.com</span>
                </div>

                {/* International SEO Language Links */}
                <div className="flex justify-center flex-wrap gap-4 mb-8 text-xs font-semibold">
                    {SUPPORTED_LOCALES.map((loc) => (
                        <Link
                            key={loc}
                            href={`/${loc}`}
                            className={`px-3 py-1 rounded-full border transition-colors ${
                                locale === loc
                                    ? "border-[#D59B2B] text-[#D59B2B] bg-[#D59B2B]/10"
                                    : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
                            }`}
                        >
                            {LOCALE_LABELS[loc].flag} {LOCALE_LABELS[loc].name}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center flex-wrap gap-8 mb-8 text-sm font-medium">
                    <Link href={withLocalePath("/", locale)} className="hover:text-amber-500 transition-colors text-white/95 font-semibold">
                        {t.footer.findInstaller}
                    </Link>
                    <Link href={withLocalePath("/climatisation", locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.climatisation}
                    </Link>
                    <Link href={withLocalePath("/bureau-etude", locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.bureauEtude}
                    </Link>
                    <Link href={withLocalePath("/labels", locale)} className="hover:text-amber-500 transition-colors">
                        {t.nav.verifiedExpert}
                    </Link>
                    <Link href={withLocalePath("/pourquoi-gainable", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.whyDuctedExpert}
                    </Link>
                    <Link href={withLocalePath("/contact", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.contact}
                    </Link>
                    <Link href={withLocalePath("/inscription", locale)} className="hover:text-amber-500 transition-colors text-amber-500/90 font-semibold">
                        {t.footer.proSpace}
                    </Link>
                    <Link href={withLocalePath("/mentions-legales", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.legalNotice}
                    </Link>
                    <Link href={withLocalePath("/politique-confidentialite", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.privacyPolicy}
                    </Link>
                    <Link href={withLocalePath("/politique-cookies", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.cookiesPolicy}
                    </Link>
                    <Link href={withLocalePath("/cgu", locale)} className="hover:text-amber-500 transition-colors">
                        {t.footer.termsOfUse}
                    </Link>
                    <Link href={withLocalePath("/cgv", locale)} className="hover:text-amber-500 transition-colors">
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
