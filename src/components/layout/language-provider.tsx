"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, DICTIONARY, isValidLocale, Locale } from "@/lib/i18n";

interface LanguageContextType {
    locale: Locale;
    setLocale: (loc: Locale) => void;
    t: typeof DICTIONARY['en'];
}

const LanguageContext = createContext<LanguageContextType>({
    locale: DEFAULT_LOCALE,
    setLocale: () => {},
    t: DICTIONARY[DEFAULT_LOCALE],
});

export function LanguageProvider({
    initialLocale = DEFAULT_LOCALE,
    children,
}: {
    initialLocale?: Locale;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [locale, setLocaleState] = useState<Locale>(initialLocale);

    useEffect(() => {
        if (!pathname) return;
        const firstSeg = pathname.split("/").filter(Boolean)[0];
        if (isValidLocale(firstSeg) && firstSeg !== locale) {
            setLocaleState(firstSeg);
            document.cookie = `NEXT_LOCALE=${firstSeg}; path=/; max-age=31536000; SameSite=Lax`;
        }
    }, [pathname, locale]);

    const setLocale = (loc: Locale) => {
        setLocaleState(loc);
        if (typeof document !== "undefined") {
            document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000; SameSite=Lax`;
        }
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t: DICTIONARY[locale] || DICTIONARY[DEFAULT_LOCALE] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
