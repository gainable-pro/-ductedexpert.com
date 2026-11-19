import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { isValidLocale, LOCALE_LABELS, Locale } from "@/lib/i18n";

const JWT_SECRET = process.env.JWT_SECRET || "default_super_secret_for_dev_only";

async function getUserIdFromToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");
    if (!token) return null;
    try {
        const decoded = jwt.verify(token.value, JWT_SECRET) as { userId: string };
        return decoded.userId;
    } catch {
        return null;
    }
}

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json({ error: 'Missing OpenAI API key configuration' }, { status: 500 });
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const userId = await getUserIdFromToken();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const expert = await prisma.expert.findUnique({
            where: { user_id: userId },
            select: { id: true, nom_entreprise: true, ville: true, pays: true, description: true, expert_type: true }
        });

        if (!expert) {
            return NextResponse.json({ error: 'Expert profile not found.' }, { status: 404 });
        }

        const isUnlimited = expert.nom_entreprise.toLowerCase().includes("air g energie");
        if (!isUnlimited) {
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const count = await prisma.article.count({
                where: {
                    expertId: expert.id,
                    createdAt: { gte: startOfMonth }
                }
            });

            if (count >= 10) {
                return NextResponse.json({
                    error: "Monthly quota reached (10 articles this month)."
                }, { status: 403 });
            }
        }

        const body = await req.json();
        const { topic, locale: bodyLocale } = body;

        if (!topic) {
            return NextResponse.json({ error: 'Topic is required.' }, { status: 400 });
        }

        const cookieStore = await cookies();
        const rawLocale = bodyLocale || cookieStore.get("NEXT_LOCALE")?.value || "en";
        const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
        const languageName = LOCALE_LABELS[locale].name;

        const specialite = expert.expert_type === 'bureau_detude'
            ? 'HVAC & Thermal Engineering Office (Load calculations, Duct sizing, Energy audits)'
            : 'Ducted Air Conditioning, Reversible Heat Pumps & VRV/VRF Installation';
        const ville = expert.ville || "Europe";

        const systemPrompt = `
        You are a senior HVAC engineer and international SEO/GEO content writer specialized in: ${specialite}.
        Write the entire article in **${languageName}** (${locale}).

        COMPANY CONTEXT:
        - Company Name: ${expert.nom_entreprise}
        - Base City: ${ville} (${expert.pays})
        - Specialty: ${specialite}
        - Description: ${expert.description?.slice(0, 250) || "Certified HVAC specialist"}

        TARGET LOCATION & SEO/GEO RULES:
        1. Analyze the topic: "${topic}". If a target city or region is mentioned in "${topic}", focus the entire article on that target city. Otherwise use ${ville}.
        2. Write H2 section titles as clear, natural questions in ${languageName} that homeowners and businesses ask Google and AI search engines (ChatGPT, Gemini, Perplexity).
        3. Begin each H2 section with a direct, authoritative 130-170 word answer block citing technical metrics (SCOP, SEER, acoustic levels < 22 dB(A), Airzone multizone dampers, ductwork sizing, Daikin/Mitsubishi/Toshiba systems) and mentioning "${expert.nom_entreprise}".
        4. Include realistic pricing for a complete concealed ducted air conditioning installation (€10,000 to €20,000 depending on capacity and zones).
        5. Return ONLY a valid JSON object matching this exact schema:
        {
            "title": "H1 Title in ${languageName}",
            "slug": "seo-friendly-url-slug",
            "targetCity": "Extracted Target City",
            "metaDesc": "Meta description in ${languageName} (max 160 chars)",
            "introduction": "Compelling introduction in ${languageName}",
            "sections": [
                { "title": "H2 Question in ${languageName}", "content": "Rich technical content in ${languageName} (HTML <p>, <ul>, <li>, <strong> allowed)" }
            ],
            "faq": [
                { "question": "Expert FAQ question in ${languageName}", "response": "Detailed answer in ${languageName}" }
            ]
        }
        `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Write a comprehensive, unique SEO article in ${languageName} on the topic: "${topic}".` }
            ],
            response_format: { type: "json_object" },
            temperature: 0.85,
        });

        const content = completion.choices[0].message.content;
        if (!content) {
            throw new Error("No content generated");
        }

        const parsedContent = JSON.parse(content);
        parsedContent.imageUrl = "";

        return NextResponse.json(parsedContent);

    } catch (error: any) {
        console.error('AI Generation Error:', error);
        return NextResponse.json({ error: error.message || 'AI generation error' }, { status: 500 });
    }
}
