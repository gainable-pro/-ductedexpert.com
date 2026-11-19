"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, AlertTriangle, MapPin, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale, withLocalePath } from "@/lib/i18n";

export const WHY_CONTENT: Record<Locale, {
    metaTitle: string;
    metaDesc: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    joinBtn: string;
    findExpertBtn: string;
    originTitle: string;
    originP1: string;
    originP2: string;
    badRealityTitle: string;
    badRealityList: string[];
    goodRealityTitle: string;
    goodRealitySub: string;
    goodRealityList: string[];
    modelTitle: string;
    modelSub: string;
    pillars: { title: string; desc: string }[];
}> = {
    en: {
        metaTitle: "Why Join DuctedExpert.com | International Visibility & Leads for HVAC Experts",
        metaDesc: "DuctedExpert.com is the international network of verified experts in ducted air conditioning, heat pumps, and thermal engineering. Grow your visibility with 0% commission.",
        heroTitle: "Why DuctedExpert.com Exists",
        heroSub1: "The problem isn't a shortage of HVAC professionals.",
        heroSub2: "The problem is the lack of clarity, transparency, and direct connection.",
        joinBtn: "Join DuctedExpert.com Network",
        findExpertBtn: "Find an HVAC Expert",
        originTitle: "DuctedExpert.com Was Born from Field Experience",
        originP1: "DuctedExpert.com was not invented by a generic lead-brokering agency.",
        originP2: "It was built from real-world observations shared every day by ducted air conditioning contractors, heat pump installers, and HVAC thermal engineering offices.",
        badRealityTitle: "In the market, we saw:",
        badRealityList: [
            "Clients overwhelmed by incomparable quotes and technical jargon",
            "Lead platforms reselling the exact same inquiry to 10 competing contractors",
            "Installations performed without proper airflow or thermal load sizing",
            "Serious, certified HVAC companies mixed in with unverified middlemen",
        ],
        goodRealityTitle: "At the same time, we saw:",
        goodRealitySub: "Qualified HVAC contractors and engineering offices:",
        goodRealityList: [
            "Properly insured and certified in refrigerant & heat pump technologies",
            "Delivering high-precision concealed ducted installations",
            "Investing in technical training, smart zoning, and customer satisfaction",
            "Looking for direct, high-intent client inquiries without paying commissions",
        ],
        modelTitle: "The DuctedExpert.com Commitment",
        modelSub: "A transparent platform designed for both homeowners/businesses and HVAC professionals.",
        pillars: [
            { title: "0% Commission & No Lead Reselling", desc: "Clients select the experts they want to contact directly. We never take a cut on your quotes or projects." },
            { title: "International & Local SEO Power", desc: "Each member benefits from a dedicated SEO-optimized showcase page, interactive map placement, and AI SEO tools." },
            { title: "Dedicated to HVAC & Thermal Engineering", desc: "100% focused on ducted air conditioning, reversible heat pumps, VRV/VRF systems, and thermal engineering." },
        ],
    },
    de: {
        metaTitle: "Warum DuctedExpert.com | Sichtbarkeit & Aufträge für Klima- & TGA-Experten",
        metaDesc: "DuctedExpert.com ist das internationale Netzwerk geprüfter Experten für Kanal-Klimaanlagen, Wärmepumpen und TGA-Planung. 0 % Provision & Direktkontakt.",
        heroTitle: "Warum es DuctedExpert.com gibt",
        heroSub1: "Das Problem ist nicht der Mangel an Fachbetrieben.",
        heroSub2: "Das Problem ist der Mangel an Transparenz und direkter Verbindlichkeit.",
        joinBtn: "Dem DuctedExpert.com-Netzwerk beitreten",
        findExpertBtn: "Experten finden",
        originTitle: "DuctedExpert.com entstand aus der Praxis",
        originP1: "DuctedExpert.com wurde nicht am grünen Tisch einer Marketingagentur erfunden.",
        originP2: "Die Plattform entstand aus den täglichen Erfahrungen von Kälte-Klima-Fachbetrieben, Wärmepumpen-Installateuren und TGA-Ingenieurbüros.",
        badRealityTitle: "Auf dem Markt haben wir gesehen:",
        badRealityList: [
            "Bauherren, die vor schwer vergleichbaren Angeboten stehen",
            "Lead-Portale, die dieselbe Kundenanfrage an zehn Konkurrenten gleichzeitig verkaufen",
            "Anlagen, die ohne saubere Heiz- und Kühllastberechnung eingebaut werden",
            "Qualifizierte Fachbetriebe, die mit unzertifizierten Vermittlern gleichgesetzt werden",
        ],
        goodRealityTitle: "Gleichzeitig haben wir gesehen:",
        goodRealitySub: "Qualifizierte Fachbetriebe und Ingenieurbüros:",
        goodRealityList: [
            "Vollständig zertifiziert (Kälteschein / F-Gase) und haftpflichtversichert",
            "Mit höchstem Anspruch an Akustik, Effizienz und saubere Montage",
            "Die kontinuierlich in Technik und Weiterbildung investieren",
            "Die direkten Kundenkontakt ohne Provisionsabgaben suchen",
        ],
        modelTitle: "Das Versprechen von DuctedExpert.com",
        modelSub: "Eine faire und transparente Plattform für Auftraggeber und Fachbetriebe.",
        pillars: [
            { title: "0 % Provision & Kein Lead-Weiterverkauf", desc: "Kunden wählen Ihren Fachbetrieb gezielt aus und kontaktieren Sie direkt." },
            { title: "Maximale SEO-Sichtbarkeit", desc: "Profitieren Sie von einer optimierten Unternehmensseite, interaktiver Karte und integrierten KI-SEO-Tools." },
            { title: "100 % Fokus auf Klimatechnik & TGA", desc: "Spezialisiert auf Kanal-Klimaanlagen, Wärmepumpen, VRV/VRF und thermische Fachplanung." },
        ],
    },
    fi: {
        metaTitle: "Miksi DuctedExpert.com | Näkyvyyttä ja Asiakkaita LVI-Asiantuntijoille",
        metaDesc: "DuctedExpert.com on kanavailmastoinnin, lämpöpumppujen ja LVI-suunnittelun asiantuntijaverkosto. Suorat tarjouspyynnöt 0 % provisiolla.",
        heroTitle: "Miksi DuctedExpert.com on olemassa",
        heroSub1: "Ongelma ei ole ammattilaisten puute.",
        heroSub2: "Ongelma on selkeyden, läpinäkyvyyden ja suoran yhteyden puute.",
        joinBtn: "Liity DuctedExpert.com-verkostoon",
        findExpertBtn: "Etsi LVI-asiantuntija",
        originTitle: "DuctedExpert.com syntyi käytännön kokemuksesta",
        originP1: "DuctedExpert.com-palvelua ei keksitty mainostoimiston pöydällä.",
        originP2: "Se syntyi LVI-urakoitsijoiden, lämpöpumppuasentajien ja LVI-suunnittelutoimistojen arjen havainnoista.",
        badRealityTitle: "Markkinoilla olemme nähneet:",
        badRealityList: [
            "Asiakkaita, joiden on vaikea vertailla teknisesti erilaisia tarjouksia",
            "Kilpailutussivustoja, jotka myyvät saman yhteydenoton kymmenelle yritykselle",
            "Järjestelmiä, jotka asennetaan ilman kunnollista teholaskentaa ja kanavamitoitusta",
            "Kokeneita ammattilaisia rinnastettuna tarkistamattomiin välittäjiin",
        ],
        goodRealityTitle: "Samaan aikaan olemme nähneet:",
        goodRealitySub: "Päteviä LVI-yrityksiä ja suunnittelutoimistoja:",
        goodRealityList: [
            "Asianmukaisesti vakuutettuja ja kylmäaineluvilla varustettuja",
            "Korkeaa asennuslaatua ja määräyksiä noudattavia",
            "Jatkuvasti osaamiseensa panostavia",
            "Etsimässä suoria asiakaskontakteja ilman välikäsien provisioita",
        ],
        modelTitle: "DuctedExpert.com-lupaus",
        modelSub: "Läpinäkyvä alusta sekä asiakkaille että LVI-alan ammattilaisille.",
        pillars: [
            { title: "0 % Provisio & Suorat Yhteydenotot", desc: "Asiakas valitsee yrityksesi suoraan. Emme koskaan ota provisiota urakoistasi." },
            { title: "Kansainvälinen & Paikallinen SEO-voima", desc: "Jokainen jäsen saa hakukoneoptimoidun yrityssivun, karttanäkyvyyden ja tekoälypohjaiset SEO-työkalut." },
            { title: "100 % Erikoistunut LVI- ja Ilmastointialaan", desc: "Keskittynyt kanavailmastointiin, lämpöpumppuihin, VRV/VRF-järjestelmiin ja LVI-suunnitteluun." },
        ],
    },
    es: {
        metaTitle: "Por qué unirse a DuctedExpert.com | Visibilidad y Clientes para Expertos HVAC",
        metaDesc: "DuctedExpert.com es la red internacional de expertos verificados en aire acondicionado por conductos, aerotermia e ingeniería térmica. 0 % de comisión.",
        heroTitle: "Por qué existe DuctedExpert.com",
        heroSub1: "El problema no es la falta de profesionales.",
        heroSub2: "El problema es la falta de claridad, transparencia y contacto directo.",
        joinBtn: "Unirse a la red DuctedExpert.com",
        findExpertBtn: "Buscar un Experto HVAC",
        originTitle: "DuctedExpert.com nació de la realidad del terreno",
        originP1: "DuctedExpert.com no fue ideado por una agencia de compraventa de leads.",
        originP2: "Nació de la experiencia diaria compartida por instaladores de climatización, especialistas en aerotermia e ingenierías térmicas.",
        badRealityTitle: "En el sector hemos visto:",
        badRealityList: [
            "Clientes perdidos ante presupuestos incomparables",
            "Plataformas que revenden el mismo contacto a diez instaladores a la vez",
            "Instalaciones ejecutadas sin cálculo térmico ni dimensionamiento de conductos",
            "Profesionales serios mezclados con intermediarios sin cualificación",
        ],
        goodRealityTitle: "Al mismo tiempo hemos visto:",
        goodRealitySub: "Empresas instaladoras e ingenierías cualificadas:",
        goodRealityList: [
            "Correctamente aseguradas y certificadas en gases fluorados y RITE",
            "Respetando las normas técnicas y el confort acústico",
            "Invirtiendo en formación y equipamiento de calidad",
            "Buscando clientes directos sin pagar comisiones por venta",
        ],
        modelTitle: "El Compromiso de DuctedExpert.com",
        modelSub: "Una plataforma transparente diseñada para clientes exigentes y profesionales cualificados.",
        pillars: [
            { title: "0 % Comisión y Sin Reventa de Leads", desc: "El cliente elige y contacta directamente con su empresa. Sin intermediarios." },
            { title: "Potencia SEO Local e Internacional", desc: "Ficha de empresa optimizada para Google, mapa interactivo y herramientas de redacción SEO con IA." },
            { title: "100 % Especializado en Climatización e Ingeniería", desc: "Dedicado exclusivamente a aire acondicionado por conductos, bombas de calor, VRV/VRF e ingeniería térmica." },
        ],
    },
    it: {
        metaTitle: "Perché unirsi a DuctedExpert.com | Visibilità e Clienti per Esperti HVAC",
        metaDesc: "DuctedExpert.com è la rete internazionale di esperti verificati in climatizzazione canalizzata, pompe di calore e progettazione termotecnica. 0% commissioni.",
        heroTitle: "Perché esiste DuctedExpert.com",
        heroSub1: "Il problema non è la mancanza di professionisti.",
        heroSub2: "Il problema è la mancanza di chiarezza, trasparenza e contatto diretto.",
        joinBtn: "Unisciti alla rete DuctedExpert.com",
        findExpertBtn: "Trova un Esperto HVAC",
        originTitle: "DuctedExpert.com nasce dall'esperienza sul campo",
        originP1: "DuctedExpert.com non è stato pensato a tavolino da un'agenzia di vendita lead.",
        originP2: "È nato dall'esperienza quotidiana di installatori termoidraulici, frigoristi certificati e studi termotecnici.",
        badRealityTitle: "Sul mercato abbiamo visto:",
        badRealityList: [
            "Clienti disorientati di fronte a preventivi non confrontabili",
            "Portali che rivendono la stessa richiesta a dieci concorrenti contemporaneamente",
            "Impianti installati senza un corretto dimensionamento dei canali e dei carichi termici",
            "Aziende serie messe sullo stesso piano di intermediari non qualificati",
        ],
        goodRealityTitle: "Allo stesso tempo abbiamo visto:",
        goodRealitySub: "Aziende HVAC e studi termotecnici qualificati:",
        goodRealityList: [
            "Regolarmente assicurati e certificati F-Gas",
            "Attenti alla regola dell'arte, alla silenziosità e all'efficienza energetica",
            "Che investono costantemente in formazione e tecnologie moderne",
            "Alla ricerca di contatti diretti senza pagare commissioni sulle vendite",
        ],
        modelTitle: "L'Impegno di DuctedExpert.com",
        modelSub: "Una piattaforma trasparente pensata per valorizzare i veri professionisti della climatizzazione.",
        pillars: [
            { title: "0% Commissioni e Nessuna Rivendita di Lead", desc: "Il cliente sceglie e contatta direttamente la tua azienda senza costi di intermediazione." },
            { title: "Visibilità SEO Locale e Internazionale", desc: "Pagina aziendale ottimizzata per Google, mappa interattiva e strumenti SEO con Intelligenza Artificiale." },
            { title: "100% Dedicato a Climatizzazione & Termotecnica", desc: "Focalizzato su impianti canalizzati, pompe di calore, sistemi VRV/VRF e studi termotecnici." },
        ],
    },
};

export function WhyPageContent() {
    const { locale } = useLanguage();
    const c = WHY_CONTENT[locale] || WHY_CONTENT.en;

    return (
        <div className="min-h-screen bg-white font-sans text-[#1F2D3D]">
            {/* 1. HERO SECTION */}
            <section className="relative pt-16 md:pt-20 pb-16 px-6 overflow-hidden bg-slate-50">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2D3D] mb-4 leading-tight">
                        {c.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium">
                        {c.heroSub1}<br />
                        <span className="text-[#D59B2B] font-bold">{c.heroSub2}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="bg-[#D59B2B] hover:bg-[#b88622] text-white text-lg px-8 py-6 rounded-xl font-bold shadow-lg transition-transform hover:scale-105">
                            <Link href={withLocalePath("/inscription", locale)}>{c.joinBtn}</Link>
                        </Button>
                        <Button asChild className="bg-[#1F2D3D] hover:bg-slate-800 text-white text-lg px-8 py-6 rounded-xl font-bold shadow-lg transition-transform hover:scale-105">
                            <Link href={withLocalePath("/", locale)}>{c.findExpertBtn}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. ORIGIN / FIELD REALITY */}
            <section className="py-24 px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-8 leading-tight">
                                {c.originTitle}
                            </h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-4 font-medium">
                                <p>{c.originP1}</p>
                                <p>{c.originP2}</p>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/constat-terrain.png"
                                alt={c.originTitle}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <MapPin className="text-orange-500" /> {c.badRealityTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.badRealityList.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <Users className="text-blue-500" /> {c.goodRealityTitle}
                            </h3>
                            <div className="mb-4 font-medium text-slate-700">{c.goodRealitySub}</div>
                            <ul className="space-y-4">
                                {c.goodRealityList.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PILLARS */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">{c.modelTitle}</h2>
                        <p className="text-lg text-slate-600">{c.modelSub}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {c.pillars.map((p, idx) => {
                            const icons = [ShieldCheck, TrendingUp, CheckCircle2];
                            const IconComp = icons[idx % icons.length];
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 rounded-xl bg-[#D59B2B]/15 text-[#D59B2B] flex items-center justify-center mb-5">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1F2D3D] mb-3">{p.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
