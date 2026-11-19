import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";
import { LOCALE_LABELS, isValidLocale, Locale } from "@/lib/i18n";

const JWT_SECRET = process.env.JWT_SECRET || "default_super_secret_for_dev_only";

async function getUserIdFromToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        return decoded.userId;
    } catch {
        return null;
    }
}

export async function POST(req: Request) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userId = await getUserIdFromToken();
    if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    try {
        const body = await req.json().catch(() => ({}));
        const cookieStore = await cookies();
        const rawLocale = body.locale || cookieStore.get("NEXT_LOCALE")?.value || "en";
        const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
        const languageName = LOCALE_LABELS[locale].name;

        const expert = await prisma.expert.findUnique({
            where: { user_id: userId },
            include: {
                technologies: true,
                interventions_clim: true,
            }
        });

        if (!expert) return NextResponse.json({ message: "Expert not found" }, { status: 404 });

        const systemPrompt = `You are an international SEO expert specialized in HVAC (Ducted Air Conditioning, Heat Pumps, VRV/VRF, Thermal Engineering).
Your goal is to write a highly optimized Meta Title and Meta Description for an HVAC company listed on 'DuctedExpert.com'.
Constraints:
- Language: ${languageName} (${locale})
- Tone: Professional, reassuring, expert.
- Highlighting: "Verified Expert", "DuctedExpert.com", Local Presence in ${expert.ville}.
- Meta Title Max Length: 60 characters (strict).
- Meta Description Max Length: 160 characters (strict).
- Format: Return JSON only { "metaTitle": "...", "metaDesc": "..." }`;

        const userPrompt = `Company Name: ${expert.nom_entreprise}
City: ${expert.ville} (${expert.code_postal}), ${expert.pays}
Description provided: ${expert.description || "N/A"}
Technologies: ${expert.technologies.map(t => t.value).join(', ')}
Interventions: ${expert.interventions_clim.map(t => t.value).join(', ')}

Please generate an optimized Meta Title and Meta Description in ${languageName}.
Focus on Ducted Air Conditioning / Heat Pumps in the target language and the city (${expert.ville}).
Mention "DuctedExpert.com" in the description if possible within limits.`;

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            model: "gpt-4o",
            response_format: { type: "json_object" },
        });

        const result = JSON.parse(completion.choices[0].message.content || "{}");

        if (!result.metaTitle || !result.metaDesc) {
            throw new Error("Invalid AI response format");
        }

        return NextResponse.json({
            message: "SEO Generated",
            data: result
        });

    } catch (error: any) {
        console.error("AI SEO Gen Error:", error);
        return NextResponse.json(
            { message: `Error generating SEO: ${error?.message}` },
            { status: 500 }
        );
    }
}
