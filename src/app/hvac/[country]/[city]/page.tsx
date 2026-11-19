import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServerLocale } from '@/lib/server-locale';
import { Locale, SUPPORTED_LOCALES, withLocalePath } from '@/lib/i18n';
import { getMarketCity, INTERNATIONAL_MARKETS } from '@/data/international-markets';
import { prisma, withDbRetry } from '@/lib/prisma';
import {
    MapPin,
    Shield,
    Zap,
    Thermometer,
    CheckCircle,
    ArrowRight,
    HelpCircle,
    Sparkles,
    Building2,
    DollarSign,
    Award
} from 'lucide-react';
import { ContactWizard } from '@/components/features/contact/contact-wizard';
import { Button } from '@/components/ui/button';
import { VerifiedExpertBadge } from '@/components/ui/verified-expert-badge';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
    params: Promise<{
        country: string;
        city: string;
    }>;
}

const UI_TEXT: Record<Locale, {
    home: string;
    hvacHub: string;
    grantBadgePrefix: string;
    estCostTitle: string;
    freeQuoteBtn: string;
    freeQuoteDesc: string;
    zeroCommissionTitle: string;
    zeroCommissionDesc: string;
    zeroSpamTitle: string;
    zeroSpamDesc: string;
    certifiedProsTitle: string;
    certifiedProsDesc: string;
    costMatrixTitle: string;
    aptType: string;
    houseType: string;
    villaType: string;
    climateTitle: string;
    summerPeak: string;
    winterLow: string;
    faqTitle: string;
    nearbyCities: string;
    viewAllPros: string;
}> = {
    en: {
        home: "Home",
        hvacHub: "HVAC & Ducted Systems",
        grantBadgePrefix: "Official Grant Available",
        estCostTitle: "Estimated Turnkey Installation",
        freeQuoteBtn: "Request Free Direct Quote",
        freeQuoteDesc: "0% commission • No lead resale • Direct vetted installer",
        zeroCommissionTitle: "0% Commission Platform",
        zeroCommissionDesc: "Installers keep 100% of their earnings. You never pay middleman markups or inflated broker fees.",
        zeroSpamTitle: "No Lead Resale / No Spam",
        zeroSpamDesc: "Your project details are never resold to 5 competing contractors. You connect directly with one vetted specialist.",
        certifiedProsTitle: "Verified & Insured Specialists",
        certifiedProsDesc: "Every registered installer is vetted for official trade licenses, F-Gas/EPA certifications, and liability insurance.",
        costMatrixTitle: "Turnkey Installation Cost Estimator",
        aptType: "2-3 Rooms (60-80 m² / 700-900 sq ft)",
        houseType: "Family Home (100-140 m² / 1,100-1,500 sq ft)",
        villaType: "Prestige Villa / Residence (180+ m² / 2,000+ sq ft)",
        climateTitle: "Local Climate & Energy Performance",
        summerPeak: "Summer Peak Temp",
        winterLow: "Winter Design Temp",
        faqTitle: "Frequently Asked Questions",
        nearbyCities: "Explore Other Cities in",
        viewAllPros: "View All Verified Installers",
    },
    de: {
        home: "Startseite",
        hvacHub: "Klimatechnik & Kanal-Wärmepumpen",
        grantBadgePrefix: "Offizielle Förderung",
        estCostTitle: "Geschätzte schlüsselfertige Installation",
        freeQuoteBtn: "Kostenloses Direktangebot anfordern",
        freeQuoteDesc: "0% Provision • Kein Lead-Verkauf • Geprüfter Fachbetrieb",
        zeroCommissionTitle: "0% Provisionsfreie Plattform",
        zeroCommissionDesc: "Fachbetriebe behalten 100% ihres Honorars. Sie zahlen keinerlei Vermittler- oder Makleraufschläge.",
        zeroSpamTitle: "Kein Weiterverkauf Ihrer Daten",
        zeroSpamDesc: "Ihre Anfrage wird nicht an 5 Konkurrenten weiterverkauft. Direkter, diskreter Kontakt.",
        zeroCommissionDesc: "Fachbetriebe behalten 100% ihres Honorars. Sie zahlen keinerlei Vermittler- oder Makleraufschläge.",
        certifiedProsTitle: "Geprüfte & Zertifizierte Meisterbetriebe",
        certifiedProsDesc: "Jeder Partnerbetrieb verfügt über Sachkundenachweis nach ChemKlimaschutzV und Betriebshaftpflicht.",
        costMatrixTitle: "Kostenübersicht für Kanalklimaanlagen",
        aptType: "2-3 Zimmer (60-80 m²)",
        houseType: "Einfamilienhaus (100-140 m²)",
        villaType: "Großes Wohnhaus / Stadtvilla (180+ m²)",
        climateTitle: "Lokales Klima & Energieeffizienz",
        summerPeak: "Sommer-Spitzentemperatur",
        winterLow: "Winter-Auslegungstemperatur",
        faqTitle: "Häufig gestellte Fragen (FAQ)",
        nearbyCities: "Weitere Städte in",
        viewAllPros: "Alle zertifizierten Experten anzeigen",
    },
    es: {
        home: "Inicio",
        hvacHub: "Climatización y Conductos",
        grantBadgePrefix: "Subvención Oficial Disponible",
        estCostTitle: "Coste estimado instalación llave en mano",
        freeQuoteBtn: "Solicitar Presupuesto Directo Gratis",
        freeQuoteDesc: "0% comisión • Sin reventa de datos • Instalador certificado",
        zeroCommissionTitle: "Plataforma 0% Comisiones",
        zeroCommissionDesc: "Los instaladores mantienen el 100% de su tarifa. Sin sobrecostes de intermediarios.",
        zeroSpamTitle: "Tus datos nunca se revenden",
        zeroSpamDesc: "No serás acosado por 5 empresas distintas. Conexión directa y transparente.",
        certifiedProsTitle: "Instaladores Homologados y Asegurados",
        certifiedProsDesc: "Empresas verificadas con carné de instalador RITE, manipulación de gases y seguro RC.",
        costMatrixTitle: "Tabla de Precios por Conductos",
        aptType: "Piso 2-3 Habitaciones (60-80 m²)",
        houseType: "Vivienda Unifamiliar (100-140 m²)",
        villaType: "Chalet / Residencia Premium (180+ m²)",
        climateTitle: "Clima Local y Rendimiento Inverter",
        summerPeak: "Máxima en Verano",
        winterLow: "Mínima en Invierno",
        faqTitle: "Preguntas Frecuentes",
        nearbyCities: "Otras Ciudades en",
        viewAllPros: "Ver Todos los Instaladores",
    },
    it: {
        home: "Home",
        hvacHub: "Climatizzazione Canalizzata",
        grantBadgePrefix: "Incentivo Statale Disponibile",
        estCostTitle: "Costo stimato installazione chiavi in mano",
        freeQuoteBtn: "Richiedi Preventivo Diretto Gratuito",
        freeQuoteDesc: "0% commissioni • Nessuna rivendita dati • Tecnico certificato",
        zeroCommissionTitle: "Piattaforma Senza Commissioni",
        zeroCommissionDesc: "Gli installatori incassano il 100% del loro lavoro. Nessun ricarico di intermediazione.",
        zeroSpamTitle: "Nessun Invio a Call Center",
        zeroSpamDesc: "I tuoi dati non vengono ceduti a 5 aziende rivali. Contatto diretto e qualificato.",
        certifiedProsTitle: "Installatori Certificati con Patentino F-Gas",
        certifiedProsDesc: "Tecnici qualificati abilitati alla lettera C del DM 37/08 con assicurazione RCT attiva.",
        costMatrixTitle: "Guida ai Prezzi Impianti Canalizzati",
        aptType: "Appartamento 2-3 Locali (60-80 m²)",
        houseType: "Casa Indipendente (100-140 m²)",
        villaType: "Villa di Pregio (180+ m²)",
        climateTitle: "Clima Locale ed Efficienza Energetica",
        summerPeak: "Picco Estivo",
        winterLow: "Minima Invernale",
        faqTitle: "Domande Frequenti",
        nearbyCities: "Altre Città in",
        viewAllPros: "Vedi Tutti gli Installatori Certificati",
    },
    fi: {
        home: "Etusivu",
        hvacHub: "Kanavailmastointi & Lämpöpumput",
        grantBadgePrefix: "Virallinen Kotitalousvähennys",
        estCostTitle: "Arvioitu avaimet käteen -asennushinta",
        freeQuoteBtn: "Pyydä Ilmainen Suora Tarjous",
        freeQuoteDesc: "0% välityspalkkio • Ei tietojen myyntiä • Varmennettu asentaja",
        zeroCommissionTitle: "0% Välityspalkkioton Alusta",
        zeroCommissionDesc: "Asentajat pitävät 100% palkkiostaan. Ei välikäsien hintalisää.",
        zeroSpamTitle: "Tietojasi ei myydä eteenpäin",
        zeroSpamDesc: "Emme jaa tietojasi 5 kilpailevalle myyjälle. Suora ja luottamuksellinen yhteys.",
        certifiedProsTitle: "Tukes-Pätevöidyt Ammattilaiset",
        certifiedProsDesc: "Kaikilla asentajillamme on virallinen Tukes-kylmäalan pätevyys ja vastuuvakuutus.",
        costMatrixTitle: "Kanavalämpöpumpun Hinta-arvio",
        aptType: "2-3 Huoneen Asunto (60-80 m²)",
        houseType: "Omakotitalo (100-140 m²)",
        villaType: "Suuri Omakotitalo / Huvila (180+ m²)",
        climateTitle: "Paikallinen Ilmasto ja Pakkastoimivuus",
        summerPeak: "Kesän Huippulämpötila",
        winterLow: "Talven Mitoituslämpötila",
        faqTitle: "Usein Kysytyt Kysymykset",
        nearbyCities: "Muut Kaupungit kohteessa",
        viewAllPros: "Katso Kaikki Varmennetut Asentajat",
    },
    ar: {
        home: "الرئيسية",
        hvacHub: "أنظمة التكييف المركزي المخفي (دكت)",
        grantBadgePrefix: "دعم وكفاءة الطاقة معتمد",
        estCostTitle: "التكلفة التقديرية للتركيب الشامل",
        freeQuoteBtn: "طلب عرض سعر مجاني ومباشر",
        freeQuoteDesc: "0% عمولة • لا نبيع بياناتك لشركات متعددة • تواصل مباشر مع فني معتمد",
        zeroCommissionTitle: "منصة بدون أي عمولات (0%)",
        zeroCommissionDesc: "يحصل مهندس التكييف على 100% من أتعابه دون أي زيادة وسيطة أو رسوم سمسرة ترهق ميزانيتك.",
        zeroSpamTitle: "خصوصية تامة بدون إزعاج أو تسويق عشوائي",
        zeroSpamDesc: "بياناتك وموقع مشروعك لا يتم بيعها لـ 5 شركات متنافسة. تواصل مهني مباشر وسريع.",
        certifiedProsTitle: "مهندسون وشركات تكييف معتمدة رسمياً",
        certifiedProsDesc: "جميع الشركات مسجلة وموثقة مع سجل تجاري وفنيين متخصصين في تكييف الدكت والـ VRV.",
        costMatrixTitle: "دليل تقدير أسعار تركيب تكييف الكونسيلد",
        aptType: "شقة 2 إلى 3 غرف نوم (60 - 80 م²)",
        houseType: "فيلا سكنية متوسطة (100 - 150 م²)",
        villaType: "فيلا فاخرة أو قصر (180+ م²)",
        climateTitle: "المناخ المحلي وكفاءة التبريد في الصيف",
        summerPeak: "درجة الحرارة القصوى صيفاً",
        winterLow: "درجة الحرارة شتاءً",
        faqTitle: "الأسئلة الشائعة حول التكييف المخفي",
        nearbyCities: "مدن أخرى في",
        viewAllPros: "عرض جميع الشركات المعتمدة",
    },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country: countrySlug, city: citySlug } = await params;
    const locale = await getServerLocale();
    const market = getMarketCity(countrySlug, citySlug);

    if (!market) {
        return { title: "HVAC & Ducted Systems | DuctedExpert.com" };
    }

    const { country, city } = market;
    const countryName = country.name[locale] || country.name.en;
    const term = country.primaryTerm[locale] || country.primaryTerm.en;

    let title = `${city.name} ${term} | DuctedExpert™`;
    let description = `Top certified ducted HVAC and heat pump specialists in ${city.name}, ${countryName}. ${country.grantName[locale] || country.grantName.en} (${country.grantAmount}). Estimated: ${country.currency.symbol}${city.priceLow.toLocaleString()} - ${country.currency.symbol}${city.priceHigh.toLocaleString()}. 0% commission.`;

    if (locale === 'ar') {
        title = `تركيب تكييف كونسيلد مخفي في ${city.name} (${countryName}) | عروض أسعار وشركات معتمدة | DuctedExpert™`;
        description = `أفضل شركات وفنيي التكييف المركزي المخفي والدكت في ${city.name}. وفر حتى 40% في فاتورة الكهرباء. أسعار تبدأ من ${city.priceLow.toLocaleString()} ${country.currency.symbol}. بدون أي عمولة وبدون بيع لبياناتك.`;
    } else if (locale === 'de') {
        title = `Kanalklimaanlage & Wärmepumpe in ${city.name} | Kosten & Geprüfte Experten | DuctedExpert™`;
        description = `Zertifizierte Fachbetriebe für Kanalklimaanlagen in ${city.name} (${countryName}). ${country.grantName.de} (${country.grantAmount}). Richtpreis: ${country.currency.symbol}${city.priceLow.toLocaleString()} - ${country.currency.symbol}${city.priceHigh.toLocaleString()}. 0% Provision.`;
    } else if (locale === 'es') {
        title = `Aire Acondicionado por Conductos en ${city.name} | Precios y Empresas | DuctedExpert™`;
        description = `Instaladores autorizados de aire acondicionado por conductos y aerotermia en ${city.name}. Presupuestos llave en mano desde ${city.priceLow.toLocaleString()} ${country.currency.symbol}. Sin comisiones.`;
    } else if (locale === 'it') {
        title = `Climatizzatore Canalizzato a ${city.name} | Costi e Installatori | DuctedExpert™`;
        description = `Migliori installatori di impianti canalizzati a ${city.name}. Detrazione ${country.grantName.it}. Preventivi chiavi in mano da ${city.priceLow.toLocaleString()} ${country.currency.symbol}. 0% commissioni.`;
    } else if (locale === 'fi') {
        title = `Kanavailmalämpöpumppu ${city.name} | Hinnat ja Asentajat | DuctedExpert™`;
        description = `Varmennetut kanavalämpöpumppujen asiantuntijat kohteessa ${city.name}. Kotitalousvähennys hyödynnettävissä. Hinnat alkaen ${city.priceLow.toLocaleString()} ${country.currency.symbol}. 0% välityspalkkio.`;
    }

    const canonicalUrl = `https://www.ductedexpert.com/${locale}/hvac/${country.slug}/${city.slug}`;

    const languages: Record<string, string> = {};
    for (const l of SUPPORTED_LOCALES) {
        languages[l] = `https://www.ductedexpert.com/${l}/hvac/${country.slug}/${city.slug}`;
    }
    languages['x-default'] = `https://www.ductedexpert.com/en/hvac/${country.slug}/${city.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "DuctedExpert.com",
            type: "website",
        },
    };
}

export default async function CityHvacPage({ params }: PageProps) {
    const { country: countrySlug, city: citySlug } = await params;
    const locale = await getServerLocale();
    const market = getMarketCity(countrySlug, citySlug);

    if (!market) {
        notFound();
    }

    const { country, city } = market;
    const t = UI_TEXT[locale] || UI_TEXT.en;
    const countryName = country.name[locale] || country.name.en;
    const primaryTerm = country.primaryTerm[locale] || country.primaryTerm.en;
    const grantTitle = country.grantName[locale] || country.grantName.en;
    const buildingTip = city.buildingTypeTip[locale] || city.buildingTypeTip.en || city.buildingTypeTip[country.defaultLocale] || "";

    // Fetch active local or regional experts
    const localPros = await withDbRetry(() =>
        prisma.expert.findMany({
            where: {
                status: 'active',
                OR: [
                    { ville: { contains: city.name, mode: 'insensitive' } },
                    { pays: { contains: country.name.en, mode: 'insensitive' } },
                    { pays: { contains: country.code, mode: 'insensitive' } },
                ]
            },
            take: 4,
            select: {
                id: true,
                slug: true,
                nom_entreprise: true,
                ville: true,
                telephone: true,
                logo_url: true,
                is_labeled: true,
                expert_type: true
            }
        })
    );

    const isRtl = locale === 'ar';
    const currentUrl = `https://www.ductedexpert.com/${locale}/hvac/${country.slug}/${city.slug}`;

    // Schema.org Data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t.home, "item": `https://www.ductedexpert.com/${locale}` },
            { "@type": "ListItem", "position": 2, "name": countryName, "item": `https://www.ductedexpert.com/${locale}/hvac/${country.slug}/${city.slug}` },
            { "@type": "ListItem", "position": 3, "name": city.name, "item": currentUrl }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${primaryTerm} in ${city.name}`,
        "serviceType": "HVAC & Ducted Heat Pump Installation",
        "provider": {
            "@type": "Organization",
            "name": "DuctedExpert.com",
            "url": "https://www.ductedexpert.com"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedInPlace": {
                "@type": "Country",
                "name": countryName
            }
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": country.currency.code,
            "lowPrice": city.priceLow,
            "highPrice": city.priceHigh,
            "offerCount": "12"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `How much does a ducted system cost in ${city.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `In ${city.name}, complete turnkey installation of a concealed ducted heat pump or air conditioning system typically ranges from ${country.currency.symbol}${city.priceLow.toLocaleString()} to ${country.currency.symbol}${city.priceHigh.toLocaleString()}, depending on capacity, number of zones, and ductwork architecture.`
                }
            },
            {
                "@type": "Question",
                "name": `Are there grants or subsidies in ${city.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, eligible installations qualify under ${grantTitle} with financial support or tax incentives worth up to ${country.grantAmount}.`
                }
            },
            {
                "@type": "Question",
                "name": "Why choose DuctedExpert.com?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DuctedExpert is a 0% commission platform. We do not sell leads to 5 competing contractors and do not charge transaction markups. You connect directly with verified, insured local HVAC specialists."
                }
            }
        ]
    };

    return (
        <div className={`min-h-screen bg-slate-50 ${isRtl ? 'font-tajawal text-right' : 'text-left'}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema, faqSchema]) }}
            />

            {/* HERO SECTION */}
            <header className="relative bg-gradient-to-br from-[#1F2D3D] via-[#1a2533] to-[#0f1722] text-white pt-14 pb-20 px-6 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D59B2B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <div className="max-w-6xl mx-auto relative z-10 space-y-6">
                    {/* Breadcrumbs */}
                    <nav className={`flex items-center gap-2 text-xs text-slate-400 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
                        <Link href={withLocalePath('/', locale)} className="hover:text-white transition-colors">{t.home}</Link>
                        <span>/</span>
                        <span className="text-slate-300">{countryName}</span>
                        <span>/</span>
                        <span className="text-[#D59B2B] font-bold">{city.name}</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs font-bold text-amber-300 uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-[#D59B2B]" />
                        <span>{city.name} • {countryName}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-4xl">
                        {locale === 'ar' ? (
                            <>تركيب تكييف كونسيلد مخفي في <span className="text-[#D59B2B]">{city.name}</span>: التكلفة والشركات المعتمدة</>
                        ) : locale === 'de' ? (
                            <>Kanalklimaanlagen & Wärmepumpen in <span className="text-[#D59B2B]">{city.name}</span></>
                        ) : locale === 'es' ? (
                            <>Climatización por Conductos en <span className="text-[#D59B2B]">{city.name}</span></>
                        ) : locale === 'it' ? (
                            <>Climatizzatori Canalizzati a <span className="text-[#D59B2B]">{city.name}</span></>
                        ) : locale === 'fi' ? (
                            <>Kanavailmalämpöpumput kohteessa <span className="text-[#D59B2B]">{city.name}</span></>
                        ) : (
                            <>{primaryTerm} in <span className="text-[#D59B2B]">{city.name}</span></>
                        )}
                    </h1>

                    <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
                        {buildingTip}
                    </p>

                    {/* Key Metric Badges */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>{t.grantBadgePrefix}: {country.grantAmount}</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 bg-[#D59B2B]/10 border border-[#D59B2B]/30 rounded-xl text-[#D59B2B] font-bold text-sm">
                            <DollarSign className="w-4 h-4" />
                            <span>{t.estCostTitle}: {country.currency.symbol}{city.priceLow.toLocaleString()} – {country.currency.symbol}{city.priceHigh.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Hero CTA Button */}
                    <div className="pt-4">
                        <ContactWizard
                            triggerButton={
                                <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-14 px-8 text-base shadow-xl">
                                    {t.freeQuoteBtn}
                                    <ArrowRight className={`ml-2 w-5 h-5 ${isRtl ? 'rotate-180 mr-2 ml-0' : ''}`} />
                                </Button>
                            }
                        />
                        <p className="text-xs text-slate-400 mt-2">{t.freeQuoteDesc}</p>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-14 space-y-16">
                {/* 3 PILLARS: WHY DUCTEDEXPERT WINS */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                        <div className="w-12 h-12 bg-amber-50 text-[#D59B2B] rounded-xl flex items-center justify-center font-bold text-lg">
                            0%
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{t.zeroCommissionTitle}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{t.zeroCommissionDesc}</p>
                    </div>

                    <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{t.zeroSpamTitle}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{t.zeroSpamDesc}</p>
                    </div>

                    <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{t.certifiedProsTitle}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{t.certifiedProsDesc}</p>
                    </div>
                </section>

                {/* PRICING MATRIX TABLE */}
                <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <span className="text-xs font-bold text-[#D59B2B] uppercase tracking-wider">{city.name}</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">{t.costMatrixTitle}</h2>
                        </div>
                        <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">
                            {country.currency.code} ({country.currency.symbol})
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                            <div className="text-xs text-slate-500 font-semibold uppercase">{t.aptType}</div>
                            <div className="text-2xl font-extrabold text-slate-800">
                                {country.currency.symbol}{Math.round(city.priceLow * 0.75).toLocaleString()} – {country.currency.symbol}{Math.round(city.priceLow * 1.05).toLocaleString()}
                            </div>
                            <p className="text-xs text-slate-600">3-4 indoor plenums, inverter condensing unit, linear architectural grilles.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-amber-50/60 border border-[#D59B2B]/40 space-y-3 relative overflow-hidden">
                            <span className="absolute top-2 right-2 bg-[#D59B2B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Most Popular</span>
                            <div className="text-xs text-[#D59B2B] font-bold uppercase">{t.houseType}</div>
                            <div className="text-2xl font-extrabold text-slate-800">
                                {country.currency.symbol}{city.priceLow.toLocaleString()} – {country.currency.symbol}{Math.round(city.priceHigh * 0.85).toLocaleString()}
                            </div>
                            <p className="text-xs text-slate-600">Full multi-zone control, bedroom acoustic baffling &lt; 21 dB(A), smart thermostat.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                            <div className="text-xs text-slate-500 font-semibold uppercase">{t.villaType}</div>
                            <div className="text-2xl font-extrabold text-slate-800">
                                {country.currency.symbol}{Math.round(city.priceHigh * 0.85).toLocaleString()} – {country.currency.symbol}{city.priceHigh.toLocaleString()}+
                            </div>
                            <p className="text-xs text-slate-600">Multi-split or VRV dual compressors, motorized motorized dampers per room, home automation.</p>
                        </div>
                    </div>
                </section>

                {/* CLIMATE SPECIFICATIONS */}
                <section className="bg-gradient-to-br from-slate-900 to-[#1F2D3D] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
                    <div className="flex items-center gap-3">
                        <Thermometer className="w-6 h-6 text-[#D59B2B]" />
                        <h2 className="text-2xl font-bold text-white">{t.climateTitle} — {city.name}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-2">
                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-1">
                            <div className="text-xs text-slate-400 font-semibold uppercase">{t.summerPeak}</div>
                            <div className="text-2xl font-extrabold text-amber-400">{city.summerHighC}°C / {Math.round(city.summerHighC * 9/5 + 32)}°F</div>
                            <p className="text-xs text-slate-300">Requires high-ambient heat dissipation coils & precision subcooling.</p>
                        </div>

                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-1">
                            <div className="text-xs text-slate-400 font-semibold uppercase">{t.winterLow}</div>
                            <div className="text-2xl font-extrabold text-blue-400">{city.winterLowC}°C / {Math.round(city.winterLowC * 9/5 + 32)}°F</div>
                            <p className="text-xs text-slate-300">Inverter defrost algorithms maintain high COP even at sub-zero levels.</p>
                        </div>

                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-1">
                            <div className="text-xs text-slate-400 font-semibold uppercase">Official Grant Program</div>
                            <div className="text-xl font-bold text-emerald-400">{country.grantAmount}</div>
                            <p className="text-xs text-slate-300">{grantTitle}</p>
                        </div>
                    </div>
                </section>

                {/* LOCAL VETTED PROS */}
                {localPros.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                                    Verified HVAC Specialists in {city.name}
                                </h2>
                                <p className="text-sm text-slate-500 mt-1">Direct contact • Checked trade licenses & insurance</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {localPros.map(pro => (
                                <Link
                                    key={pro.id}
                                    href={withLocalePath(`/pro/${pro.slug}`, locale)}
                                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 group-hover:bg-[#FFF8ED] group-hover:text-[#D59B2B] transition-colors">
                                            {pro.logo_url ? (
                                                <img src={pro.logo_url} alt={pro.nom_entreprise} className="w-full h-full object-contain p-1" />
                                            ) : (
                                                pro.nom_entreprise.charAt(0)
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 group-hover:text-[#D59B2B] transition-colors line-clamp-1">{pro.nom_entreprise}</h3>
                                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3 text-[#D59B2B]" /> {pro.ville || city.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-[#D59B2B]">
                                        <span>View Profile</span>
                                        <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* FAQ ACCORDION */}
                <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                    <div className="flex items-center gap-3">
                        <HelpCircle className="w-6 h-6 text-[#D59B2B]" />
                        <h2 className="text-2xl font-bold text-slate-800">{t.faqTitle}</h2>
                    </div>

                    <div className="space-y-6 pt-2">
                        <div className="border-b border-slate-100 pb-5">
                            <h3 className="font-bold text-base text-slate-800 mb-2">
                                How much does a ducted heat pump installation cost in {city.name}?
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                A complete concealed ducted installation typically ranges from {country.currency.symbol}{city.priceLow.toLocaleString()} for a multi-room apartment up to {country.currency.symbol}{city.priceHigh.toLocaleString()} for a large residence, including indoor units, duct distribution, architectural linear grilles, and outdoor inverter condensing units.
                            </p>
                        </div>

                        <div className="border-b border-slate-100 pb-5">
                            <h3 className="font-bold text-base text-slate-800 mb-2">
                                How do I receive the {country.grantAmount} grant under {grantTitle}?
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                You must work with an accredited and certified installer. When submitting a request on DuctedExpert, all matched pros hold the necessary certifications to file and deduct the subsidy directly on your quote.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-base text-slate-800 mb-2">
                                Why is DuctedExpert a 0% commission platform?
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We believe HVAC specialists should own their hard-earned revenue. By eliminating broker fees and lead resale auctions, customers get better prices and contractors deliver top-tier craftsmanship.
                            </p>
                        </div>
                    </div>
                </section>

                {/* NEARBY CITIES IN THIS COUNTRY */}
                {country.cities.length > 1 && (
                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                            {t.nearbyCities} {countryName}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {country.cities.map(c => (
                                <Link
                                    key={c.slug}
                                    href={withLocalePath(`/hvac/${country.slug}/${c.slug}`, locale)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                        c.slug === city.slug
                                            ? 'bg-[#1F2D3D] text-white shadow-sm'
                                            : 'bg-white border border-slate-200 text-slate-700 hover:border-[#D59B2B] hover:text-[#D59B2B]'
                                    }`}
                                >
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
