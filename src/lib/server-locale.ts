import { headers, cookies } from "next/headers";
import { DEFAULT_LOCALE, isValidLocale, Locale } from "./i18n";

export async function getServerLocale(): Promise<Locale> {
    try {
        const h = await headers();
        const headerLocale = h.get("x-locale");
        if (isValidLocale(headerLocale)) {
            return headerLocale;
        }
        const c = await cookies();
        const cookieLocale = c.get("NEXT_LOCALE")?.value;
        if (isValidLocale(cookieLocale)) {
            return cookieLocale;
        }
    } catch {
        // Fallback during static generation
    }
    return DEFAULT_LOCALE;
}
