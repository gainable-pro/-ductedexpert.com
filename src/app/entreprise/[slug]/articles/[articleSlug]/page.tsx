import { notFound } from "next/navigation";
import Image from "next/image";
import { ShareButtons } from "@/components/features/articles/share-buttons";
import Link from "next/link";
import { prisma, withDbRetry } from "@/lib/prisma";
import { Metadata } from "next";
import { format } from "date-fns";
import { enUS, de, fi, es, it, arSA } from "date-fns/locale";
import { MapPin, ArrowRight, User, HelpCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InternationalLeadForm } from "@/components/features/contact/forms/international-form";
import { getLocalSEOContext } from "@/lib/local-seo-engine";
import { ThermalCalculator } from "@/components/features/articles/thermal-calculator";
import { InternalLinking } from "@/components/features/seo/internal-linking";
import { getServerLocale } from "@/lib/server-locale";
import { Locale, DEFAULT_LOCALE, withLocalePath, getAlternatesUrls } from "@/lib/i18n";
import { translateText } from "@/lib/translator";

const SYSTEM_EXPERT_SLUGS = new Set(["gainable-fr", "redaction-gainable", "bureau-etude-gainable"]);

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

const DATE_LOCALES: Record<Locale, any> = {
    en: enUS,
    de,
    fi,
    es,
    it,
    ar: arSA,
};

const ARTICLE_I18N: Record<Locale, {
    expertAdvice: string;
    by: string;
    faqTitle: string;
    climateNormsTitle: string;
    thermalSpecificities: string;
    keyRecommendations: string;
    climateAndZone: string;
    inverterEfficiency: string;
    financialGrants: string;
    freeStudyBadge: string;
    startProjectIn: string;
    startProjectGeneric: string;
    describeNeed: string;
    otherArticlesTitle: string;
    viewFullProfile: string;
    readArticle: string;
    officialWebsite: string;
    needAdviceTitle: string;
    needAdviceDesc: string;
    contactExpertBtn: string;
    articleNotFound: string;
    homeBreadcrumb: string;
    articlesBreadcrumb: string;
    developActivityTitle: string;
    developActivityDesc: string;
    becomeMemberBtn: string;
}> = {
    en: {
        expertAdvice: "Expert Advice",
        by: "By",
        faqTitle: "Frequently Asked Questions",
        climateNormsTitle: "Climate & Technical Standards",
        thermalSpecificities: "Thermal specificities and opportunities in",
        keyRecommendations: "Key recommendations for",
        climateAndZone: "Zone & Climate",
        inverterEfficiency: "Inverter Efficiency",
        financialGrants: "Energy Grants & Incentives",
        freeStudyBadge: "Free Thermal Study & Quote",
        startProjectIn: "Start your project in",
        startProjectGeneric: "Looking for a certified installer? Submit your request",
        describeNeed: "Describe your project to receive a tailored thermal study and free quotes from local certified HVAC experts.",
        otherArticlesTitle: "Other projects & advice from",
        viewFullProfile: "View full profile",
        readArticle: "Read article",
        officialWebsite: "Official installer website",
        needAdviceTitle: "Need advice or a quote?",
        needAdviceDesc: "Contact {name} for your ducted air conditioning or heat pump project.",
        contactExpertBtn: "Contact this expert",
        articleNotFound: "Article not found | DuctedExpert.com",
        homeBreadcrumb: "Home",
        articlesBreadcrumb: "Articles",
        developActivityTitle: "Grow your HVAC Business",
        developActivityDesc: "Join the dedicated platform for HVAC professionals and generate qualified leads without commission.",
        becomeMemberBtn: "Become a member",
    },
    de: {
        expertAdvice: "Expertenrat",
        by: "Von",
        faqTitle: "Häufige Fragen",
        climateNormsTitle: "Klima- & technische Richtlinien",
        thermalSpecificities: "Thermische Besonderheiten & Einsparpotenziale in",
        keyRecommendations: "Wichtige Empfehlungen für",
        climateAndZone: "Klimazone",
        inverterEfficiency: "Inverter-Wirkungsgrad",
        financialGrants: "Förderungen & Zuschüsse",
        freeStudyBadge: "Kostenlose Planung & Angebot",
        startProjectIn: "Starten Sie Ihr Projekt in",
        startProjectGeneric: "Zertifizierten Installateur gesucht? Anfrage stellen",
        describeNeed: "Beschreiben Sie Ihren Bedarf, um eine maßgeschneiderte Planung und Angebote von zertifizierten Installateuren zu erhalten.",
        otherArticlesTitle: "Weitere Projekte & Fachbeiträge von",
        viewFullProfile: "Vollständiges Profil ansehen",
        readArticle: "Artikel lesen",
        officialWebsite: "Offizielle Website des Fachbetriebs",
        needAdviceTitle: "Beratung oder Angebot gewünscht?",
        needAdviceDesc: "Kontaktieren Sie {name} für Ihr Klimaanlagen- oder Wärmepumpenprojekt.",
        contactExpertBtn: "Diesen Experten kontaktieren",
        articleNotFound: "Artikel nicht gefunden | DuctedExpert.com",
        homeBreadcrumb: "Startseite",
        articlesBreadcrumb: "Artikel",
        developActivityTitle: "Bauen Sie Ihr HVAC-Geschäft aus",
        developActivityDesc: "Treten Sie der Plattform für HVAC-Fachbetriebe bei und generieren Sie qualifizierte Kundenaufträge ohne Provision.",
        becomeMemberBtn: "Mitglied werden",
    },
    fi: {
        expertAdvice: "Asiantuntijan neuvot",
        by: "Kirjoittanut",
        faqTitle: "Usein kysytyt kysymykset",
        climateNormsTitle: "Ilmasto- ja tekniset standardit",
        thermalSpecificities: "Lämpötekniset ominaisuudet ja mahdollisuudet kohteessa",
        keyRecommendations: "Keskeiset suositukset kohteelle",
        climateAndZone: "Ilmastovyöhyke",
        inverterEfficiency: "Invertterin hyötysuhde",
        financialGrants: "Energiatuet ja avustukset",
        freeStudyBadge: "Ilmainen lämpöselvitys ja tarjous",
        startProjectIn: "Aloita projektisi kohteessa",
        startProjectGeneric: "Etsitkö sertifioitua asentajaa? Jätä yhteydenottopyyntö",
        describeNeed: "Kuvaile tarpeesi saadaksesi räätälöidyn mitoituksen ja tarjouksia paikallisilta sertifioiduilta asiantuntijoilta.",
        otherArticlesTitle: "Muut kohteet ja neuvot yritykseltä",
        viewFullProfile: "Katso koko profiili",
        readArticle: "Lue artikkeli",
        officialWebsite: "Urakoitsijan viralliset kotisivut",
        needAdviceTitle: "Tarvitsetko neuvoa tai tarjouksen?",
        needAdviceDesc: "Ota yhteyttä asiantuntijaan {name} kanavoitavan ilmastoinnin tai lämpöpumpun tiimoilta.",
        contactExpertBtn: "Ota yhteyttä asiantuntijaan",
        articleNotFound: "Artikkelia ei löytynyt | DuctedExpert.com",
        homeBreadcrumb: "Etusivu",
        articlesBreadcrumb: "Artikkelit",
        developActivityTitle: "Kasvata LVI-liiketoimintaasi",
        developActivityDesc: "Liity LVI-alan ammattilaisverkostoon ja vastaanota laadukkaita toimeksiantoja ilman välikäsiä.",
        becomeMemberBtn: "Liity jäseneksi",
    },
    es: {
        expertAdvice: "Consejo Experto",
        by: "Por",
        faqTitle: "Preguntas Frecuentes",
        climateNormsTitle: "Normativa Climática y Técnica",
        thermalSpecificities: "Especificidades térmicas y oportunidades en",
        keyRecommendations: "Recomendaciones clave para",
        climateAndZone: "Zona y Clima",
        inverterEfficiency: "Rendimiento Inverter",
        financialGrants: "Ayudas y Subvenciones",
        freeStudyBadge: "Estudio Térmico y Presupuesto Gratis",
        startProjectIn: "Comienza tu proyecto en",
        startProjectGeneric: "¿Buscas un instalador certificado? Haz tu solicitud",
        describeNeed: "Describe tu necesidad para recibir un estudio personalizado y presupuestos de instaladores certificados locales.",
        otherArticlesTitle: "Otros proyectos y consejos de",
        viewFullProfile: "Ver perfil completo",
        readArticle: "Leer artículo",
        officialWebsite: "Sitio web oficial del instalador",
        needAdviceTitle: "¿Necesitas asesoramiento o presupuesto?",
        needAdviceDesc: "Contacta con {name} para tu proyecto de climatización por conductos o aerotermia.",
        contactExpertBtn: "Contactar a este experto",
        articleNotFound: "Artículo no encontrado | DuctedExpert.com",
        homeBreadcrumb: "Inicio",
        articlesBreadcrumb: "Artículos",
        developActivityTitle: "Haz crecer tu actividad de climatización",
        developActivityDesc: "Únete a la plataforma para profesionales y genera solicitudes de clientes rentables sin comisiones.",
        becomeMemberBtn: "Hacerse miembro",
    },
    it: {
        expertAdvice: "Consiglio dell'Esperto",
        by: "Da",
        faqTitle: "Domande Frequenti",
        climateNormsTitle: "Scheda Climatica e Normative",
        thermalSpecificities: "Specificità termiche e opportunità a",
        keyRecommendations: "Raccomandazioni chiave per",
        climateAndZone: "Zona e Clima",
        inverterEfficiency: "Efficienza Inverter",
        financialGrants: "Incentivi e Detrazioni Fiscali",
        freeStudyBadge: "Studio Termico & Preventivo Gratuito",
        startProjectIn: "Avvia il tuo progetto a",
        startProjectGeneric: "Cerchi un installatore certificato? Invia la tua richiesta",
        describeNeed: "Descrivi il tuo progetto per ricevere uno studio su misura e preventivi da installatori locali accreditati.",
        otherArticlesTitle: "Altri interventi e consigli di",
        viewFullProfile: "Visualizza profilo completo",
        readArticle: "Leggi l'articolo",
        officialWebsite: "Sito ufficiale dell'esperto",
        needAdviceTitle: "Hai bisogno di una consulenza o di un preventivo?",
        needAdviceDesc: "Contatta {name} per il tuo impianto canalizzato o pompa di calore.",
        contactExpertBtn: "Contatta questo esperto",
        articleNotFound: "Articolo non trovato | DuctedExpert.com",
        homeBreadcrumb: "Home",
        articlesBreadcrumb: "Articoli",
        developActivityTitle: "Sviluppa la tua attività HVAC",
        developActivityDesc: "Entra nella piattaforma dedicata ai professionisti e ricevi richieste qualificate senza commissioni.",
        becomeMemberBtn: "Diventa membro",
    },
    ar: {
        expertAdvice: "نصيحة الخبير المعتمد",
        by: "بواسطة",
        faqTitle: "الأسئلة الشائعة",
        climateNormsTitle: "المعايير المناخية والفنية",
        thermalSpecificities: "الخصائص الحرارية وفرص الترشيد في",
        keyRecommendations: "أبرز التوصيات الهندسية لمدينة",
        climateAndZone: "المناخ والمنطقة",
        inverterEfficiency: "كفاءة تقنية الإنفرتر",
        financialGrants: "حوافز وترشيد الطاقة",
        freeStudyBadge: "دراسة هندسية وعرض سعر مجاني",
        startProjectIn: "ابدأ مشروعك في",
        startProjectGeneric: "تبحث عن فني معتمد؟ أرسل طلبك الآن",
        describeNeed: "صف تفاصيل مشروعك للحصول على دراسة فنية دقيقة وعروض أسعار تنافسية من مهندسين وفنيين معتمدين.",
        otherArticlesTitle: "أعمال ونصائح أخرى من المهندس",
        viewFullProfile: "عرض الملف المهني الكامل",
        readArticle: "قراءة المقال",
        officialWebsite: "الموقع الرسمي للمهندس / الشركة",
        needAdviceTitle: "هل تحتاج إلى استشارة فنية أو عرض سعر؟",
        needAdviceDesc: "تواصل مع {name} لتنفيذ مشروع التكييف المخفي أو المضخات الحرارية.",
        contactExpertBtn: "تواصل مع هذا الخبير الآن",
        articleNotFound: "المقال غير موجود | DuctedExpert.com",
        homeBreadcrumb: "الرئيسية",
        articlesBreadcrumb: "المقالات",
        developActivityTitle: "نمّي أعمالك في قطاع التكييف",
        developActivityDesc: "انضم إلى شبكة DuctedExpert الدولية للمهندسين والفنيين المعتمدين واستقبل مشاريع مميزة بدون عمولات.",
        becomeMemberBtn: "انضمام كخبير معتمد",
    },
};

interface PageProps {
    params: Promise<{
        slug: string; // Expert slug
        articleSlug: string; // Article slug
    }>;
}

async function getArticleData(slug: string, articleSlug: string) {
    if (!slug || !articleSlug) return null;

    return await withDbRetry(async () => {
        const expert = await prisma.expert.findUnique({
            where: { slug },
            select: {
                id: true,
                nom_entreprise: true,
                slug: true,
                ville: true,
                pays: true,
                code_postal: true,
                lat: true,
                lng: true,
                logo_url: true,
                site_web: true,
                telephone: true,
                user: { select: { email: true } },
                expert_type: true
            }
        });

        if (!expert) return null;

        const article = await prisma.article.findUnique({
            where: {
                expertId_slug: {
                    expertId: expert.id,
                    slug: articleSlug
                }
            },
        });

        if (!article || article.status !== 'PUBLISHED') return null;

        const isSystemAccount = SYSTEM_EXPERT_SLUGS.has(expert.slug) || expert.slug.includes('redaction');
        const otherArticles = !isSystemAccount
            ? await prisma.article.findMany({
                  where: {
                      expertId: expert.id,
                      status: 'PUBLISHED',
                      slug: { not: articleSlug }
                  },
                  orderBy: { createdAt: 'desc' },
                  take: 6,
                  select: {
                      slug: true,
                      title: true,
                      targetCity: true,
                      mainImage: true,
                      publishedAt: true,
                      createdAt: true
                  }
              })
            : [];

        return { expert, article, otherArticles };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, articleSlug } = await params;
    const locale = await getServerLocale();
    const t = ARTICLE_I18N[locale] || ARTICLE_I18N.en;
    const canonical = `https://www.ductedexpert.com/${locale}/entreprise/${slug}/articles/${articleSlug}`;
    const data = await getArticleData(slug, articleSlug);
    if (!data) {
        return {
            title: t.articleNotFound,
            alternates: {
                canonical,
                languages: getAlternatesUrls(`/entreprise/${slug}/articles/${articleSlug}`),
            }
        };
    }

    const { article, expert } = data;
    const city = article.targetCity || expert.ville || "";
    const translatedTitle = await translateText(article.title, locale, "title");
    const translatedIntro = article.introduction ? await translateText(article.introduction, locale, "expert_description") : "";
    const metaTitle = `${translatedTitle} - ${expert.nom_entreprise} | DuctedExpert.com`;
    const metaDesc = article.metaDesc || translatedIntro?.slice(0, 160) || `${translatedTitle} by ${expert.nom_entreprise}. Expert ducted air conditioning and heat pumps.`;

    return {
        title: metaTitle,
        description: metaDesc,
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical,
            languages: getAlternatesUrls(`/entreprise/${slug}/articles/${articleSlug}`),
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            images: article.mainImage 
                ? [{ 
                    url: article.mainImage.startsWith('http') 
                        ? article.mainImage 
                        : `https://www.ductedexpert.com${article.mainImage.startsWith('/') ? '' : '/'}${article.mainImage}`, 
                    alt: article.altText || article.title 
                  }] 
                : [{ url: 'https://www.ductedexpert.com/assets/logo-share.png' }],
            type: 'article',
            authors: [expert.nom_entreprise],
            publishedTime: article.publishedAt?.toISOString(),
        },
        other: {
            ...(expert.lat && expert.lng ? {
                "geo.position": `${expert.lat};${expert.lng}`,
                "ICBM": `${expert.lat}, ${expert.lng}`
            } : {}),
            "geo.placename": city,
            "geo.region": expert.pays ? `${expert.pays}` : "US",
        }
    };
}

export default async function PublicArticlePage({ params }: PageProps) {
    const { slug, articleSlug } = await params;
    const locale = await getServerLocale();
    const t = ARTICLE_I18N[locale] || ARTICLE_I18N.en;
    const dateLoc = DATE_LOCALES[locale] || enUS;
    const data = await getArticleData(slug, articleSlug);

    if (!data) {
        notFound();
    }

    const { expert, article, otherArticles } = data;

    const translatedTitle = await translateText(article.title, locale, "title");
    const translatedIntro = article.introduction ? await translateText(article.introduction, locale, "expert_description") : null;

    let articleContent = article.content || "";
    if (article.targetCity) {
        articleContent = articleContent.replace(/<div class="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all">[\s\S]*?<\/div>/, '');
    }

    // Resolve Content Blocks
    let rawBlocks: any[] = [];
    try {
        const jsonContent = typeof article.jsonContent === 'string'
            ? JSON.parse(article.jsonContent)
            : article.jsonContent;
        rawBlocks = (jsonContent as any)?.blocks || [];
    } catch (e) {
        console.error("Error parsing jsonContent", e);
    }

    // Translate blocks asynchronously for a 100% single-language reading experience
    const blocks = await Promise.all(
        rawBlocks.map(async (block: any) => {
            if (block.type === 'h2' || block.type === 'h3' || block.type === 'text') {
                return {
                    ...block,
                    value: await translateText(block.value, locale, block.type === 'text' ? 'article_content' : 'title'),
                };
            }
            return block;
        })
    );

    const localizedOtherArticles = await Promise.all(
        (otherArticles || []).map(async (oa) => ({
            ...oa,
            title: await translateText(oa.title, locale, "title"),
        }))
    );

    const hasBlocks = Array.isArray(blocks) && blocks.length > 0;
    const groupedSections: any[] = [];

    const extractImageFromHtml = (html: string) => {
        let image = null;
        let alt = null;
        let cleanHtml = html;
        const imgMatch = html.match(/<img[^>]+src="([^">]+)"[^>]*>/i);
        if (imgMatch) {
            image = imgMatch[1];
            const altMatch = imgMatch[0].match(/alt="([^">]+)"/i);
            if (altMatch) alt = altMatch[1];
            cleanHtml = html.replace(/<figure[^>]*>[\s\S]*?<img[^>]*>[\s\S]*?<\/figure>/i, "");
            if (cleanHtml.length === html.length) {
                cleanHtml = html.replace(/<img[^>]*>/i, "");
            }
        }
        return { image, alt, cleanHtml };
    };

    if (hasBlocks) {
        let currentSection: any = null;
        blocks.forEach((block: any) => {
            if (block.type === 'h2') {
                currentSection = { type: 'section', title: block.value, content: [], image: null, alt: null };
                groupedSections.push(currentSection);
            } else if (block.type === 'image') {
                if (currentSection) {
                    currentSection.image = block.value;
                    currentSection.alt = block.alt;
                } else {
                    currentSection = { type: 'section', content: [], image: block.value, alt: block.alt };
                    groupedSections.push(currentSection);
                }
            } else if (block.type === 'video') {
                groupedSections.push({ type: 'video', value: block.value });
                currentSection = null;
            } else if (block.type === 'text' || block.type === 'h3') {
                if (!currentSection) {
                    currentSection = { type: 'section', content: [] };
                    groupedSections.push(currentSection);
                }
                currentSection.content.push(block);
            }
        });
    } else if (articleContent) {
        const parts = articleContent.split(/<h2.*?>/i);
        for (let index = 0; index < parts.length; index++) {
            const part = parts[index];
            if (index === 0) {
                if (part.trim()) {
                    const { image, alt, cleanHtml } = extractImageFromHtml(part);
                    const translatedHtml = await translateText(cleanHtml, locale, 'article_content');
                    groupedSections.push({
                        type: 'section',
                        content: [{ type: 'html', value: translatedHtml }],
                        image,
                        alt
                    });
                }
            } else {
                const closeIdx = part.indexOf('</h2>');
                if (closeIdx !== -1) {
                    const rawSectionTitle = part.substring(0, closeIdx).replace(/<\/?[^>]+(>|$)/g, "");
                    const body = part.substring(closeIdx + 5);
                    const { image, alt, cleanHtml } = extractImageFromHtml(body);
                    const translatedSectionTitle = await translateText(rawSectionTitle, locale, 'title');
                    const translatedHtml = await translateText(cleanHtml, locale, 'article_content');
                    groupedSections.push({
                        type: 'section',
                        title: translatedSectionTitle,
                        content: [{ type: 'html', value: translatedHtml }],
                        image,
                        alt
                    });
                }
            }
        }
    }

    const targetCity = article.targetCity || expert.ville;
    const rawFaqs = (article.faq as any[]) || [];
    const defaultFaqs = targetCity ? [
        {
            question: `${t.faqTitle} — ${targetCity}`,
            response: `In ${targetCity}, modern ducted heat pumps and air conditioning systems are engineered for high energy efficiency and all-season thermal comfort.`
        }
    ] : [];

    const effectiveFaqs = await Promise.all(
        (rawFaqs.length > 0 ? rawFaqs : defaultFaqs).map(async (f: any) => ({
            question: await translateText(f.question || f.q, locale, "title"),
            response: await translateText(f.response || f.r, locale, "article_content")
        }))
    );

    const faqSchema = effectiveFaqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": effectiveFaqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.response
            }
        }))
    } : null;

    const jsonLd: any = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": translatedTitle || article.title,
        "image": article.mainImage ? {
            "@type": "ImageObject",
            "url": article.mainImage.startsWith('http') ? article.mainImage : `https://www.ductedexpert.com${article.mainImage.startsWith('/') ? '' : '/'}${article.mainImage}`,
            "caption": article.altText || `${translatedTitle || article.title} - DuctedExpert.com`
        } : {
            "@type": "ImageObject",
            "url": "https://www.ductedexpert.com/assets/logo-share.png",
            "caption": "DuctedExpert.com - The Platform for HVAC Experts"
        },
        "datePublished": article.publishedAt?.toISOString(),
        "dateModified": article.updatedAt.toISOString(),
        "author": [{
            "@type": "Organization",
            "name": expert.nom_entreprise,
            "url": `https://www.ductedexpert.com/${locale}/pro/${expert.slug}`
        }],
        "publisher": {
            "@type": "Organization",
            "name": "DuctedExpert.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ductedexpert.com/ductedexpert-logo.png"
            }
        },
        "description": article.metaDesc || translatedIntro || article.introduction,
        "articleBody": hasBlocks ? blocks.map(b => b.value).join(' ') : articleContent
    };

    if (targetCity) {
        jsonLd.contentLocation = {
            "@type": "Place",
            "name": targetCity,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": targetCity,
                "addressCountry": expert.pays || "US"
            }
        };
    }

    const currentUrl = `https://www.ductedexpert.com/${locale}/entreprise/${slug}/articles/${articleSlug}`;
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t.homeBreadcrumb, "item": `https://www.ductedexpert.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": expert.nom_entreprise, "item": `https://www.ductedexpert.com/${locale}/pro/${expert.slug}` },
            { "@type": "ListItem", "position": 3, "name": t.articlesBreadcrumb, "item": `https://www.ductedexpert.com/${locale}/pro/${expert.slug}#articles` },
            { "@type": "ListItem", "position": 4, "name": article.title, "item": currentUrl }
        ]
    };

    const schemaList = [jsonLd, breadcrumbJsonLd];
    if (faqSchema) schemaList.push(faqSchema);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
            />

            {/* Article Image */}
            {article.mainImage && (
                <div className="max-w-4xl mx-auto w-full px-6 mt-8">
                    <div className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
                        <Image
                            src={article.mainImage.startsWith('http') || article.mainImage.startsWith('/') ? article.mainImage : `/${article.mainImage}`}
                            alt={article.altText || article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* HEADER CONTENT */}
            <div className={`max-w-4xl mx-auto w-full px-6 relative z-10 ${article.mainImage ? 'mt-8' : 'mt-8'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                            <span className="bg-[#D59B2B] text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                                {t.expertAdvice}
                            </span>
                            {article.publishedAt && (
                                <time dateTime={article.publishedAt.toISOString()} className="text-slate-500 font-medium">
                                    {format(article.publishedAt, "d MMMM yyyy", { locale: dateLoc })}
                                </time>
                            )}
                        </div>

                        {/* Social Share Buttons */}
                        <ShareButtons
                            url={currentUrl}
                            title={translatedTitle || article.title}
                        />
                    </div>

                    <h1 className={`text-3xl md:text-5xl font-bold leading-tight text-slate-800 ${locale === 'ar' ? 'text-right font-tajawal' : 'text-left'}`}>
                        {translatedTitle || article.title}
                    </h1>

                    {/* Author mini-block */}
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100 mt-4">
                        {expert.logo_url ? (
                            <div className="relative w-24 h-10">
                                <Image
                                    src={expert.logo_url}
                                    alt={expert.nom_entreprise}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                                <User className="w-5 h-5 text-slate-500" />
                            </div>
                        )}
                        <div className="font-medium text-slate-600">
                            {t.by}{' '}
                            {expert.slug === 'gainable-fr' || expert.slug.includes('redaction') || expert.slug === 'bureau-etude-gainable' ? (
                                <span className="text-[#D59B2B] font-bold">
                                    {expert.nom_entreprise}
                                </span>
                            ) : (
                                <Link href={withLocalePath(`/pro/${expert.slug}`, locale)} className="text-[#D59B2B] hover:underline underline-offset-4">
                                    {expert.nom_entreprise}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
                {/* ARTICLE CONTENT */}
                <article className={`max-w-none ${locale === 'ar' ? 'text-right font-tajawal' : 'text-left'}`}>
                    {/* Introduction */}
                    {(translatedIntro || article.introduction) && (
                        <div className={`lead text-xl md:text-2xl text-slate-700 font-serif mb-12 italic leading-relaxed py-6 ${
                            locale === 'ar'
                                ? 'border-r-[6px] border-[#D59B2B] pr-8 pl-4 rounded-l-lg text-right font-tajawal bg-[#D59B2B]/5'
                                : 'border-l-[6px] border-[#D59B2B] pl-8 pr-4 rounded-r-lg text-left bg-[#D59B2B]/5'
                        }`}>
                            {translatedIntro || article.introduction}
                        </div>
                    )}

                    {/* Dynamic Zig-Zag Rendering */}
                    {groupedSections.length > 0 ? (
                        <div className="space-y-24">
                            {groupedSections.map((section, idx) => {
                                if (section.type === 'video') {
                                    return (
                                        <figure key={idx} className="my-12">
                                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-slate-800">
                                                <video controls src={section.value} className="w-full h-full" />
                                            </div>
                                        </figure>
                                    );
                                }

                                const isReversed = idx % 2 !== 0;
                                const hasImage = !!section.image;

                                return (
                                    <section key={idx} className={`grid gap-12 items-center ${hasImage ? 'md:grid-cols-2' : ''}`}>
                                        <div className={`space-y-6 ${hasImage ? (isReversed ? 'md:order-2' : 'md:order-1') : ''}`}>
                                            {section.title && (
                                                <h2 className={`text-3xl font-bold text-[#1F2D3D] mb-6 relative inline-block ${locale === 'ar' ? 'text-right font-tajawal' : 'text-left'}`}>
                                                    {section.title}
                                                    <span className={`absolute -bottom-2 ${locale === 'ar' ? 'right-0' : 'left-0'} w-12 h-1 bg-[#D59B2B] rounded-full`}></span>
                                                </h2>
                                            )}

                                            <div className="text-lg text-slate-700 leading-relaxed font-sans space-y-6">
                                                {section.content.map((b: any, bIdx: number) => (
                                                    <div key={bIdx}>
                                                        {b.type === 'h3' && <h3 className="text-xl font-bold text-[#1F2D3D] mt-4 mb-2">{b.value}</h3>}
                                                        {b.type === 'text' && b.value.split('\n').map((line: string, i: number) => (
                                                            line.trim() ? <p key={i} className="mb-4">{line}</p> : null
                                                        ))}
                                                        {b.type === 'html' && (
                                                            <div dangerouslySetInnerHTML={{ __html: b.value }} />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {hasImage && (
                                            <div className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                                                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-shadow duration-500">
                                                    <Image
                                                        src={section.image}
                                                        alt={section.alt || "Illustration"}
                                                        fill
                                                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </section>
                                );
                            })}
                        </div>
                    ) : (
                        <div
                            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1F2D3D] prose-a:text-[#D59B2B] prose-img:rounded-xl prose-p:leading-relaxed prose-p:mb-6"
                            dangerouslySetInnerHTML={{ __html: articleContent }}
                        />
                    )}

                    {/* DYNAMIC LOCAL CLIMATE & NORMS BLOCK */}
                    {targetCity && (() => {
                        const localSEO = getLocalSEOContext(targetCity);
                        if (!localSEO) return null;
                        return (
                            <>
                                <section className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1F2D3D] text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/60">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#D59B2B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                                    
                                    <div className="relative z-10 space-y-6">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D59B2B]/20 border border-[#D59B2B]/30 rounded-full text-[#D59B2B] text-xs font-bold uppercase tracking-wider">
                                                <MapPin className="w-3.5 h-3.5" /> {t.climateNormsTitle} • {localSEO.cityName} ({localSEO.department})
                                            </div>
                                            <span className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                                Zone : <strong className="text-white">{localSEO.re2020Zone}</strong>
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold leading-snug text-white">
                                            {t.thermalSpecificities} <span className="text-[#D59B2B]">{localSEO.cityName}</span>
                                        </h3>

                                        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-[#D59B2B] pl-4 italic">
                                            "{localSEO.catchphrase}" — {localSEO.housingTip}
                                        </p>

                                        <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-slate-700/60">
                                            <div className="bg-white/5 backdrop-blur p-5 rounded-2xl border border-white/10 space-y-2">
                                                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.climateAndZone}</div>
                                                <div className="text-lg font-bold text-white">{localSEO.climateZone}</div>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    Max : {localSEO.summerPeakTemp} | Min : {localSEO.winterMinTemp}.
                                                </p>
                                            </div>

                                            <div className="bg-white/5 backdrop-blur p-5 rounded-2xl border border-white/10 space-y-2">
                                                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.inverterEfficiency}</div>
                                                <div className="text-lg font-bold text-[#D59B2B]">SCOP {localSEO.copEst} • SEER {localSEO.seerEst}</div>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    ~{localSEO.estimatedSavingsPct} energy savings in {localSEO.cityName}.
                                                </p>
                                            </div>

                                            <div className="bg-white/5 backdrop-blur p-5 rounded-2xl border border-white/10 space-y-2">
                                                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.financialGrants}</div>
                                                <div className="text-lg font-bold text-emerald-400">Heat Pump Subsidies</div>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    Available for energy-efficient certified installations in {localSEO.cityName}.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-700/60">
                                            <div className="text-xs font-bold text-[#D59B2B] uppercase tracking-wider mb-3">{t.keyRecommendations} {localSEO.cityName} :</div>
                                            <ul className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                                                {localSEO.keyPoints.map((pt, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                                                        <span className="text-[#D59B2B] font-bold">✓</span> {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <ThermalCalculator cityName={localSEO.cityName} climateZone={localSEO.climateZone} />
                            </>
                        );
                    })()}

                    {/* FAQ SECTION */}
                    {effectiveFaqs.length > 0 && (
                        <section className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                <div className="bg-[#D59B2B]/10 p-2 rounded-lg">
                                    <HelpCircle className="text-[#D59B2B] w-6 h-6" />
                                </div>
                                {t.faqTitle}
                            </h2>
                            <div className="space-y-8">
                                {effectiveFaqs.map((f: any, i: number) => (
                                    <div key={i} className="border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-start gap-3">
                                            <span className="text-[#D59B2B] shrink-0 mt-0.5">Q.</span>
                                            {f.question || f.q}
                                        </h3>
                                        <div className="text-slate-600 pl-8 leading-relaxed whitespace-pre-line">
                                            {f.response || f.r}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* DYNAMIC LEAD FORM */}
                    <div id="devis" className="mt-16 w-full max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden scroll-mt-28">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D59B2B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        
                        <div className="text-center mb-8 relative z-10">
                            <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-[#D59B2B] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                {t.freeStudyBadge}
                            </span>
                            <h3 className="text-3xl font-bold text-slate-800">
                                {targetCity ? (
                                    <>{t.startProjectIn} <span className="text-[#D59B2B]">{targetCity}</span></>
                                ) : (
                                    <>{t.startProjectGeneric}</>
                                )}
                            </h3>
                            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
                                {t.describeNeed}
                            </p>
                        </div>
                        
                        <div className="relative z-10">
                            <InternationalLeadForm 
                                city={targetCity || "your area"}
                                expertId={expert.slug !== 'bureau-etude-gainable' && expert.slug !== 'gainable-fr' && !expert.slug.includes('redaction') ? expert.id : undefined}
                                expertName={expert.nom_entreprise}
                                hideHeader={true}
                            />
                        </div>
                    </div>

                    {/* OTHER REALISATIONS BY THIS ARTISAN */}
                    {localizedOtherArticles && localizedOtherArticles.length > 0 && (
                        <section className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                                <h2 className="text-2xl font-bold text-[#1F2D3D]">
                                    {t.otherArticlesTitle} {expert.nom_entreprise}
                                </h2>
                                <Link
                                    href={withLocalePath(`/pro/${expert.slug}`, locale)}
                                    className="text-sm font-bold text-[#D59B2B] hover:underline flex items-center gap-1"
                                >
                                    {t.viewFullProfile} <ArrowRight className={`w-4 h-4 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {localizedOtherArticles.map((oa) => (
                                    <Link
                                        key={oa.slug}
                                        href={withLocalePath(`/entreprise/${expert.slug}/articles/${oa.slug}`, locale)}
                                        className={`group p-4 rounded-2xl border border-slate-100 hover:border-[#D59B2B] hover:shadow-md transition-all bg-slate-50/60 flex flex-col justify-between ${locale === 'ar' ? 'text-right font-tajawal' : 'text-left'}`}
                                    >
                                        <div>
                                            {oa.targetCity && (
                                                <span className="text-xs font-bold text-[#D59B2B] uppercase tracking-wider block mb-1">
                                                    {oa.targetCity}
                                                </span>
                                            )}
                                            <h3 className="font-bold text-slate-800 group-hover:text-[#D59B2B] transition-colors line-clamp-2 text-base">
                                                {oa.title}
                                            </h3>
                                        </div>
                                        <span className={`text-xs font-semibold text-[#D59B2B] mt-3 inline-flex items-center gap-1 ${locale === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>

                                            {t.readArticle} <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </article>

                {/* SIDEBAR : AUTHOR & CTA */}
                <aside className="space-y-8 sticky top-24 h-fit">
                    {/* Author Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
                        {expert.logo_url ? (
                            <div className="relative w-48 h-24">
                                <Image
                                    src={expert.logo_url}
                                    alt={expert.nom_entreprise}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2">
                                <User className="w-10 h-10" />
                            </div>
                        )}

                        <div>
                            <h3 className="font-bold text-lg text-[#1F2D3D]">{expert.nom_entreprise}</h3>
                            <p className="text-sm text-slate-500 flex items-center justify-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" /> {expert.ville}
                            </p>
                        </div>

                        {expert.slug !== 'gainable-fr' && !expert.slug.includes('redaction') && expert.slug !== 'bureau-etude-gainable' && (
                            <div className="w-full space-y-2">
                                <Link href={withLocalePath(`/pro/${expert.slug}`, locale)} className="w-full block">
                                    <Button variant="outline" className="w-full">
                                        {t.viewFullProfile}
                                    </Button>
                                </Link>
                                {expert.site_web && (
                                    <a
                                        href={expert.site_web.startsWith('http') ? expert.site_web : `https://${expert.site_web}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#D59B2B] py-1.5"
                                    >
                                        <Globe className="w-3.5 h-3.5" /> {t.officialWebsite}
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CTA Contact */}
                    <div className="bg-[#1F2D3D] p-8 rounded-2xl shadow-lg text-white text-center space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D59B2B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        {(expert.slug === 'gainable-fr' || expert.slug.includes('redaction') || expert.slug === 'bureau-etude-gainable') ? (
                            <>
                                <h3 className="text-xl font-bold relative z-10">
                                    {t.developActivityTitle}
                                </h3>
                                <p className="text-slate-300 text-sm relative z-10">
                                    {t.developActivityDesc}
                                </p>
                                <Link href={withLocalePath("/why-ducted-expert", locale)} className="block relative z-10">
                                    <Button size="lg" className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-12 text-base">
                                        {t.becomeMemberBtn}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold relative z-10">
                                    {t.needAdviceTitle}
                                </h3>
                                <p className="text-slate-300 text-sm relative z-10">
                                    {t.needAdviceDesc.replace('{name}', expert.nom_entreprise)}
                                </p>
                                <Link href={withLocalePath(`/pro/${expert.slug}#contact`, locale)} className="block relative z-10">
                                    <Button size="lg" className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-12 text-base">
                                        {t.contactExpertBtn}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </aside>
            </div>
            <InternalLinking
                zipCode={expert.code_postal}
                city={targetCity}
                currentExpertSlug={expert.slug}
                currentArticleSlug={article.slug}
            />
        </div>
    );
}
