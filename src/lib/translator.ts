import OpenAI from "openai";
import { Locale } from "./i18n";

// In-memory global cache across server requests
const globalCache = (global as unknown as { __translationCache?: Map<string, string> });
if (!globalCache.__translationCache) {
    globalCache.__translationCache = new Map<string, string>();
}
const translationCache = globalCache.__translationCache;

const LOCALE_NAMES: Record<Locale, string> = {
    en: "English",
    de: "German",
    fi: "Finnish",
    es: "Spanish",
    it: "Italian",
    ar: "Modern Standard Arabic (العربية الفصحى)",
};

/**
 * Translate arbitrary dynamic text (expert descriptions, article content)
 * into the visitor's active locale with in-memory caching.
 */
export async function translateText(
    text: string | null | undefined,
    targetLocale: Locale,
    context: "expert_description" | "article_content" | "title" = "expert_description"
): Promise<string> {
    if (!text || !text.trim()) return "";

    // Cache key based on locale + text length + text preview
    const cacheKey = `${targetLocale}:${context}:${text.length}:${text.slice(0, 80)}`;
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey)!;
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return text;
    }

    try {
        const openai = new OpenAI({ apiKey });
        const targetLanguage = LOCALE_NAMES[targetLocale] || "English";

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.1,
            messages: [
                {
                    role: "system",
                    content: `You are an elite multilingual translator specializing in HVAC (heating, ventilation, ducted air conditioning, heat pumps) and engineering.
Translate the text into natural, professional ${targetLanguage}.
Keep all company names (like "Air G Énergie", "Daikin", "Mitsubishi", etc.), cities (like "Miramas"), phone numbers, and numbers intact.
Maintain paragraph breaks and bullet points.
Output ONLY the translated text, without commentary, markdown code blocks, or greetings.`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            max_tokens: 1600,
        });

        const translated = response.choices[0]?.message?.content?.trim() || text;
        translationCache.set(cacheKey, translated);
        return translated;
    } catch (error) {
        console.error("translateText error:", error);
        return text;
    }
}
