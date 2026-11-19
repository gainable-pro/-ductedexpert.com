import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Building2,
    Wrench,
    Award,
    Lock,
} from "lucide-react";
import Link from "next/link";
import { VerifiedExpertBadge } from "@/components/ui/verified-expert-badge";
import { Metadata } from 'next';
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, Locale, withLocalePath } from "@/lib/i18n";

const LABELS_CONTENT: Record<Locale, {
    metaTitle: string;
    metaDesc: string;
    topBadge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDesc: string;
    badges: { title: string; desc: string }[];
    findExpertBtn: string;
    applyLabelBtn: string;
    sectionRiskTitle: string;
    sectionRiskSub: string;
    badPointsTitle: string;
    badPoints: string[];
    goodPointsTitle: string;
    goodPoints: string[];
    criteriaTitle: string;
    criteriaSub: string;
    criteria: { title: string; desc: string }[];
    ctaTitle: string;
    ctaSub: string;
}> = {
    en: {
        metaTitle: "Verified Expert Label DuctedExpert.com: The Quality Standard in Ducted Air Conditioning & HVAC",
        metaDesc: "Discover the DuctedExpert® Verified Expert label: official client protection and quality distinction for certified ducted air conditioning installers and HVAC engineering offices.",
        topBadge: "Official Seal of Trust • Client Protection • Contractor Distinction",
        heroTitle1: "Installing ducted air conditioning should never be",
        heroTitle2: "a gamble with your property",
        heroDesc: "A concealed ducted HVAC system is integrated into your ceilings and attics for the next 15 to 20 years. It represents a major investment between €8,000 and €25,000. The Verified Expert DuctedExpert® label identifies established, insured, and qualified contractors while protecting clients from poor workmanship.",
        badges: [
            { title: "Verified Liability Insurance", desc: "Professional HVAC & construction insurance checked" },
            { title: "Established & Active Company", desc: "Active business registration & verified track record" },
            { title: "100% Free Direct Connection", desc: "Direct contact with the contractor • 0% commission on your quote" },
        ],
        findExpertBtn: "Find a Verified Expert",
        applyLabelBtn: "Apply for the Verified Expert Label",
        sectionRiskTitle: "Why the Verified Expert Label Makes All the Difference",
        sectionRiskSub: "Because a concealed ducted system requires precise airflow sizing, acoustic insulation, and certified refrigerant handling.",
        badPointsTitle: "Risks with unverified contractors:",
        badPoints: [
            "Undersized or noisy ductwork embedded behind closed ceilings",
            "Missing or expired professional liability insurance",
            "Unannounced subcontracting and no after-sales service",
            "Opaque quotes resold by lead brokers with hidden markups",
        ],
        goodPointsTitle: "Guarantees of a Verified Expert DuctedExpert®:",
        goodPoints: [
            "Audited company registration, insurance, and F-Gas / HVAC qualifications",
            "Direct contact and transparent pricing with 0% platform commission",
            "Proven expertise in concealed ducted systems, multizone dampers, and heat pumps",
            "Long-term commitment to commissioning, maintenance, and after-sales support",
        ],
        criteriaTitle: "Our 4 Verification & Quality Pillars",
        criteriaSub: "Every professional carrying the Verified Expert DuctedExpert® badge commits to strict technical and ethical standards.",
        criteria: [
            { title: "1. Legal & Corporate Solvency", desc: "Verification of official company registration and active business standing." },
            { title: "2. HVAC Insurance & Certifications", desc: "Validation of professional liability coverage and refrigerant handling licenses." },
            { title: "3. Technical Mastery", desc: "Proven track record in ducted air conditioning, heat pumps, VRV/VRF, or thermal engineering." },
            { title: "4. Customer Satisfaction Charter", desc: "Transparent quotes, respect for deadlines, and responsive after-sales service." },
        ],
        ctaTitle: "Ready to work with a Verified HVAC Expert?",
        ctaSub: "Browse our directory of certified professionals or register your company to earn the Verified Expert badge.",
    },
    de: {
        metaTitle: "Geprüfter Experte Siegel DuctedExpert.com: Der Qualitätsstandard für Klimatechnik & Wärmepumpen",
        metaDesc: "Entdecken Sie das Siegel Geprüfter Experte DuctedExpert®: Offizieller Kundenschutz und Qualitätsauszeichnung für Kälte-Klima-Fachbetriebe und TGA-Ingenieurbüros.",
        topBadge: "Offizielles Vertrauenssiegel • Kundenschutz • Fachbetriebs-Auszeichnung",
        heroTitle1: "Die Installation einer Kanal-Klimaanlage sollte niemals",
        heroTitle2: "ein Glücksspiel für Ihre Immobilie sein",
        heroDesc: "Eine Kanal-Klimaanlage wird für die nächsten 15 bis 20 Jahre unsichtbar in Ihre Zwischendecken integriert – eine Investition zwischen 8.000 € und 25.000 €. Das Siegel Geprüfter Experte DuctedExpert® zeichnet seriöse, qualifizierte Fachbetriebe aus und schützt Bauherren vor Planungs- und Montagefehlern.",
        badges: [
            { title: "Geprüfte Betriebshaftpflicht", desc: "Nachweis über gültigen Versicherungsschutz für Klimatechnik" },
            { title: "Etabliertes Fachunternehmen", desc: "Aktiver Handelsregistereintrag & geprüfte Unternehmensdaten" },
            { title: "100 % Kostenloser Direktkontakt", desc: "Direkter Kontakt zum Fachbetrieb • 0 % Provision auf Ihr Angebot" },
        ],
        findExpertBtn: "Geprüften Experten finden",
        applyLabelBtn: "Siegel Geprüfter Experte beantragen",
        sectionRiskTitle: "Warum das Siegel Geprüfter Experte den Unterschied macht",
        sectionRiskSub: "Weil eine verdeckte Kanal-Klimaanlage exakte Heiz-/Kühllastberechnung, Schallschutz und zertifizierte Kältetechnik erfordert.",
        badPointsTitle: "Risiken bei ungeprüften Anbietern:",
        badPoints: [
            "Falsch dimensionierte oder laute Luftkanäle hinter geschlossenen Decken",
            "Fehlende F-Gase-Zertifizierung oder unzureichende Haftpflichtversicherung",
            "Verdeckte Subunternehmer und fehlender Kundendienst nach der Montage",
            "Überteuerte Angebote durch Lead-Verkaufsplattformen",
        ],
        goodPointsTitle: "Garantien eines Geprüften Experten DuctedExpert®:",
        goodPoints: [
            "Geprüfte Unternehmensdaten, Versicherungen und Kälte-Klima-Qualifikationen",
            "Direkter Kontakt und transparente Angebote mit 0 % Vermittlungsprovision",
            "Nachgewiesene Fachkompetenz bei Kanal-Klimaanlagen, Wärmepumpen & VRV/VRF",
            "Zuverlässige Inbetriebnahme, Wartung und langfristiger Kundendienst",
        ],
        criteriaTitle: "Unsere 4 Prüf- & Qualitätssäulen",
        criteriaSub: "Jeder Fachbetrieb mit dem Abzeichen Geprüfter Experte DuctedExpert® erfüllt strenge technische und qualitative Kriterien.",
        criteria: [
            { title: "1. Rechtliche Unternehmensprüfung", desc: "Prüfung der offiziellen Unternehmensregistrierung und Geschäftstätigkeit." },
            { title: "2. Versicherung & Kälteschein", desc: "Nachweis der Betriebshaftpflicht und F-Gase-/Wärmepumpen-Zertifikate." },
            { title: "3. Technische Fachkompetenz", desc: "Spezialisierung auf Kanal-Klimaanlagen, Wärmepumpen, VRV/VRF oder TGA-Planung." },
            { title: "4. Qualitäts- & Service-Charta", desc: "Transparente Angebote, Termintreue und verlässlicher Kundendienst." },
        ],
        ctaTitle: "Bereit für Ihr Projekt mit einem Geprüften Experten?",
        ctaSub: "Finden Sie zertifizierte Fachbetriebe in Ihrer Nähe oder registrieren Sie Ihr Unternehmen auf DuctedExpert.com.",
    },
    fi: {
        metaTitle: "Varmennettu Asiantuntija -merkki DuctedExpert.com: Kanavailmastoinnin & LVI-alan Laatustandardi",
        metaDesc: "Tutustu Varmennettu Asiantuntija DuctedExpert® -laatumerkkiin: asiakkaan turva ja ammattilaisten laatutunnus kanavailmastoinnissa ja lämpöpumpuissa.",
        topBadge: "Virallinen Luottamusmerkki • Asiakkaan Turva • Ammattilaisen Tunnustus",
        heroTitle1: "Ilmastointi- ja lämpöpumppujärjestelmän hankinnan ei tulisi koskaan olla",
        heroTitle2: "uhkapeliä kiinteistölläsi",
        heroDesc: "Kanavailmastointi integroidaan rakennuksen alakattoon seuraavaksi 15–20 vuodeksi. Se on merkittävä 8 000–25 000 € investointi. Varmennettu Asiantuntija DuctedExpert® -merkki nostaa esiin luotettavat, vakuutetut ja pätevät LVI-ammattilaiset.",
        badges: [
            { title: "Tarkistettu Vastuuvakuutus", desc: "Voimassa oleva toiminnan vastuuvakuutus" },
            { title: "Luotettava & Aktiivinen Yritys", desc: "Tarkistetut yritystiedot ja vakiintunut toiminta" },
            { title: "100 % Ilmainen Suora Yhteys", desc: "Suora yhteys urakoitsijaan • 0 % provisio tarjouksestasi" },
        ],
        findExpertBtn: "Etsi Varmennettu Asiantuntija",
        applyLabelBtn: "Hae Varmennettu Asiantuntija -merkkiä",
        sectionRiskTitle: "Miksi Varmennettu Asiantuntija -merkki on tärkeä?",
        sectionRiskSub: "Koska kanavailmastointi vaatii tarkan ilmavirtojen mitoituksen, äänenvaimennuksen ja kylmäainepätevyyden.",
        badPointsTitle: "Riskit tarkistamattomien toimijoiden kanssa:",
        badPoints: [
            "Väärin mitoitetut tai äänekkäät kanavistot alakaton sisällä",
            "Puuttuvat kylmäaineluvat (Tukes) tai puutteellinen vakuutusturva",
            "Ketjutettu aliurakointi ja puuttuva huoltotuki",
            "Piilokulut liidien jälleenmyyntialustoilla",
        ],
        goodPointsTitle: "Varmennettu Asiantuntija DuctedExpert® -takuut:",
        goodPoints: [
            "Tarkistetut yritystiedot, vakuutukset ja LVI-/kylmäainepätevyydet",
            "Suora yhteydenotto ja selkeä hinnoittelu 0 % provisiolla",
            "Todistettu osaaminen kanavailmastoinnissa, lämpöpumpuissa ja LVI-suunnittelussa",
            "Sitoutuminen laadukkaaseen käyttöönottoon ja huoltoon",
        ],
        criteriaTitle: "4 Laatu- ja Tarkistuskriteeriämme",
        criteriaSub: "Jokainen Varmennettu Asiantuntija DuctedExpert® -merkin saanut yritys sitoutuu korkeisiin laatukriteereihin.",
        criteria: [
            { title: "1. Yrityksen Taustat & Rekisteröinti", desc: "Virallisten yritystietojen ja toiminnan aktiivisuuden varmistus." },
            { title: "2. Vakuutukset & Kylmäaineluvat", desc: "Vastuuvakuutuksen ja F-kaasu-/lämpöpumppupätevyyksien tarkistus." },
            { title: "3. Tekninen Erikoisosaaminen", desc: "Kokemus kanavailmastoinnista, lämpöpumpuista, VRV/VRF-järjestelmistä tai LVI-suunnittelusta." },
            { title: "4. Asiakastyytyväisyyslupaus", desc: "Läpinäkyvät tarjoukset, sovitut aikataulut ja toimiva jälkipalvelu." },
        ],
        ctaTitle: "Valmis aloittamaan projektisi Varmennetun Asiantuntijan kanssa?",
        ctaSub: "Selaa asiantuntijahakemistoa tai rekisteröi yrityksesi DuctedExpert.com-verkostoon.",
    },
    es: {
        metaTitle: "Sello Experto Verificado DuctedExpert.com: Referencia de Calidad en Climatización por Conductos",
        metaDesc: "Descubra el sello Experto Verificado DuctedExpert®: protección oficial para clientes y distinción de calidad para instaladores de climatización e ingenierías térmicas.",
        topBadge: "Garantía Oficial de Confianza • Protección al Cliente • Distinción Profesional",
        heroTitle1: "Instalar aire acondicionado por conductos nunca debería ser",
        heroTitle2: "una lotería con su vivienda o local",
        heroDesc: "Un sistema por conductos se integra en el corazón de sus falsos techos para los próximos 15 a 20 años. Representa una inversión importante entre 8.000 € y 25.000 €. El Sello Experto Verificado DuctedExpert® selecciona a los instaladores serios, protege a los clientes frente a malas ejecuciones y pone en valor a los profesionales de excelencia.",
        badges: [
            { title: "Seguro de Responsabilidad Verificado", desc: "Cobertura profesional de climatización comprobada" },
            { title: "Empresa Sólida y Activa", desc: "Registro empresarial activo y trayectoria verificada" },
            { title: "Contacto Directo 100 % Gratuito", desc: "Trato directo con el instalador • 0 % de comisión en su presupuesto" },
        ],
        findExpertBtn: "Buscar un Experto Verificado",
        applyLabelBtn: "Solicitar el Sello Experto Verificado",
        sectionRiskTitle: "Por qué el Sello Experto Verificado marca la diferencia",
        sectionRiskSub: "Porque una instalación por conductos requiere un cálculo preciso de caudales, aislamiento acústico y manipulación certificada de gases fluorados.",
        badPointsTitle: "Riesgos con instaladores no verificados:",
        badPoints: [
            "Conductos mal dimensionados o ruidosos ocultos tras el falso techo",
            "Ausencia de seguro de responsabilidad civil o certificaciones oficiales",
            "Subcontratación oculta y abandono del servicio postventa",
            "Presupuestos inflados por plataformas que revenden contactos",
        ],
        goodPointsTitle: "Garantías de un Experto Verificado DuctedExpert®:",
        goodPoints: [
            "Empresa registrada, asegurada y con habilitaciones HVAC / gases fluorados",
            "Contacto directo y presupuesto transparente con 0 % de comisión",
            "Especialización demostrada en conductos, zonificación (Airzone) y aerotermia",
            "Compromiso de puesta en marcha, garantía y mantenimiento postventa",
        ],
        criteriaTitle: "Nuestros 4 Pilares de Verificación y Calidad",
        criteriaSub: "Cada empresa con el distintivo Experto Verificado DuctedExpert® cumple con estándares técnicos y éticos rigurosos.",
        criteria: [
            { title: "1. Solvencia y Registro Legal", desc: "Comprobación de la existencia legal y actividad real de la empresa." },
            { title: "2. Seguros y Certificaciones HVAC", desc: "Validación del seguro de responsabilidad civil y certificados técnicos." },
            { title: "3. Dominio Técnico", desc: "Experiencia probada en aire acondicionado por conductos, aerotermia, VRV/VRF o ingeniería térmica." },
            { title: "4. Carta de Compromiso con el Cliente", desc: "Presupuestos detallados, cumplimiento de plazos y servicio postventa fiable." },
        ],
        ctaTitle: "¿Listo para confiar su proyecto a un Experto Verificado?",
        ctaSub: "Consulte nuestro directorio de profesionales certificados o registre su empresa en DuctedExpert.com.",
    },
    it: {
        metaTitle: "Marchio Esperto Verificato DuctedExpert.com: Il Riferimento Qualità nella Climatizzazione Canalizzata",
        metaDesc: "Scopri il marchio Esperto Verificato DuctedExpert®: tutela ufficiale per i clienti e riconoscimento di qualità per installatori HVAC e studi termotecnici.",
        topBadge: "Sigillo Ufficiale di Fiducia • Tutela Cliente • Eccellenza Professionale",
        heroTitle1: "Installare un impianto di climatizzazione canalizzata non dovrebbe mai essere",
        heroTitle2: "una scommessa sulla tua casa o azienda",
        heroDesc: "Un impianto canalizzato viene incassato nei controsoffitti per i prossimi 15–20 anni ed è un investimento importante tra 8.000 € e 25.000 €. Il Marchio Esperto Verificato DuctedExpert® seleziona gli installatori qualificati, tutela i clienti da errori progettuali e valorizza le aziende d'eccellenza.",
        badges: [
            { title: "Polizza RC Professionale Verificata", desc: "Copertura assicurativa per impianti HVAC controllata" },
            { title: "Azienda Solida e Attiva", desc: "Iscrizione aziendale attiva e referenze verificate" },
            { title: "Contatto Diretto 100% Gratuito", desc: "Contatto diretto con l'installatore • Zero commissioni sul preventivo" },
        ],
        findExpertBtn: "Trova un Esperto Verificato",
        applyLabelBtn: "Richiedi il Marchio Esperto Verificato",
        sectionRiskTitle: "Perché il Marchio Esperto Verificato fa la differenza",
        sectionRiskSub: "Perché un impianto canalizzato richiede un dimensionamento aeraulico preciso, isolamento acustico e certificazione F-Gas.",
        badPointsTitle: "Rischi con installatori improvvisati:",
        badPoints: [
            "Canalizzazioni sottodimensionate o rumorose chiuse nel controsoffitto",
            "Mancanza di patentino F-Gas o assicurazione professionale",
            "Subappalti non dichiarati e assenza di assistenza post-vendita",
            "Preventivi gonfiati da intermediari e rivenditori di lead",
        ],
        goodPointsTitle: "Garanzie di un Esperto Verificato DuctedExpert®:",
        goodPoints: [
            "Azienda verificata, assicurata e abilitata per impianti HVAC e F-Gas",
            "Contatto diretto e preventivo trasparente con 0% di commissioni",
            "Competenza specifica in impianti canalizzati, multi-zona e pompe di calore",
            "Assistenza tecnica, collaudo e manutenzione programmata nel tempo",
        ],
        criteriaTitle: "I Nostri 4 Pilastri di Verifica e Qualità",
        criteriaSub: "Ogni azienda con il badge Esperto Verificato DuctedExpert® rispetta rigorosi standard tecnici e professionali.",
        criteria: [
            { title: "1. Solidità e Regolarità Aziendale", desc: "Verifica dell'iscrizione aziendale e dell'operatività sul mercato." },
            { title: "2. Assicurazione e Certificazioni F-Gas", desc: "Controllo della polizza RC e delle abilitazioni tecniche termoidrauliche." },
            { title: "3. Competenza Tecnica HVAC", desc: "Esperienza comprovata in climatizzazione canalizzata, pompe di calore, VRV/VRF o progettazione termotecnica." },
            { title: "4. Carta Qualità e Assistenza", desc: "Preventivi chiari, rispetto delle tempistiche e servizio post-vendita garantito." },
        ],
        ctaTitle: "Pronto a collaborare con un Esperto Verificato?",
        ctaSub: "Trova un professionista certificato nella tua zona o registra la tua azienda su DuctedExpert.com.",
    },
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;

    return {
        title: c.metaTitle,
        description: c.metaDesc,
        openGraph: {
            title: c.metaTitle,
            description: c.metaDesc,
            images: ['/gainable-fr-label-qualite-climatisation-rge.png'],
            type: 'website',
        },
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}/labels`,
            languages: getAlternatesUrls('/labels'),
        }
    };
}

export default async function LabelsPage() {
    const locale = await getServerLocale();
    const c = LABELS_CONTENT[locale] || LABELS_CONTENT.en;

    return (
        <div className="flex min-h-screen flex-col font-sans text-[#1F2D3D] bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[520px] flex items-center justify-center py-20 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/gainable-fr-label-qualite-climatisation-rge.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-[#1F2D3D]/95"></div>
                </div>

                <div className="container relative z-10 mx-auto text-center px-4 max-w-5xl">
                    <div className="inline-flex items-center gap-2 p-2.5 px-6 rounded-full bg-[#D59B2B] text-white font-black text-xs md:text-sm tracking-wider mb-6 uppercase shadow-xl">
                        <ShieldCheck className="w-4 h-4 text-white" />
                        {c.topBadge}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight uppercase font-montserrat text-white">
                        {c.heroTitle1} <br />
                        <span className="text-[#D59B2B] normal-case block mt-3 font-extrabold text-2xl md:text-4xl">
                            {c.heroTitle2}
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
                        {c.heroDesc}
                    </p>

                    {/* 3 Reassurance Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left mb-10">
                        {c.badges.map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl text-white shadow-sm flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-[#D59B2B] text-white flex items-center justify-center font-bold shrink-0 shadow-sm mt-0.5">
                                    ✓
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{item.title}</p>
                                    <p className="text-xs text-slate-300 font-medium mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-xl text-base shadow-xl">
                                {c.findExpertBtn}
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold px-8 py-6 rounded-xl text-base">
                                {c.applyLabelBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BADGE SHOWCASE & COMPARISON */}
            <section className="py-20 px-4 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-6xl mx-auto">
                    <div className="flex justify-center mb-10">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                            <VerifiedExpertBadge size="lg" />
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">
                            {c.sectionRiskTitle}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {c.sectionRiskSub}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Risks */}
                        <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6 text-red-500" />
                                {c.badPointsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.badPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Guarantees */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-[#D59B2B] shadow-md">
                            <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-[#D59B2B]" />
                                {c.goodPointsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {c.goodPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 PILLARS */}
            <section className="py-20 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">
                            {c.criteriaTitle}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {c.criteriaSub}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {c.criteria.map((item, idx) => {
                            const icons = [Building2, Lock, Wrench, Award];
                            const IconComp = icons[idx % icons.length];
                            return (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#D59B2B] transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#1F2D3D] text-[#D59B2B] flex items-center justify-center mb-4">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-[#1F2D3D] mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 px-4 bg-[#1F2D3D] text-white text-center">
                <div className="container max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold">{c.ctaTitle}</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">{c.ctaSub}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link href={withLocalePath("/", locale)}>
                            <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-xl">
                                {c.findExpertBtn} <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href={withLocalePath("/inscription", locale)}>
                            <Button size="lg" variant="outline" className="bg-white text-[#1F2D3D] hover:bg-slate-100 font-bold px-8 py-6 rounded-xl">
                                {c.applyLabelBtn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
