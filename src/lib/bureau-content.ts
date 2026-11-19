// src/lib/bureau-content.ts
import { Locale } from "./i18n";

export interface BureauPageData {
    metaTitle: string;
    metaDesc: string;
    hero: {
        title1: string;
        title2: string;
        subtitle: string;
        desc: string;
        findOfficeBtn: string;
        joinOfficeBtn: string;
    };
    role: {
        titlePrefix: string;
        titleHighlight: string;
        p1: string;
        quote: string;
    };
    studies: {
        titlePrefix: string;
        titleHighlight: string;
        items: { title: string; desc: string }[];
    };
    audiences: {
        titlePrefix: string;
        titleHighlight: string;
        items: { target: string; desc: string }[];
    };
    process: {
        titlePrefix: string;
        titleHighlight: string;
        steps: { step: string; title: string; desc: string }[];
    };
    examples: {
        titlePrefix: string;
        titleHighlight: string;
        items: { title: string; desc: string }[];
    };
    cta: {
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        findOfficeBtn: string;
        joinOfficeBtn: string;
    };
}

export const BUREAU_CONTENT: Record<Locale, BureauPageData> = {
    en: {
        metaTitle: "HVAC & Thermal Engineering Offices | Load Calculations & Sizing | DuctedExpert.com",
        metaDesc: "Connect with certified HVAC thermal engineering offices for precise thermal load calculations, duct network sizing, and energy compliance studies.",
        hero: {
            title1: "HVAC & THERMAL",
            title2: "ENGINEERING OFFICES",
            subtitle: "Optimize comfort, reduce operating costs, and secure your HVAC installations from new builds to complex renovations.",
            desc: "Thermal load calculations, ducted network sizing, ventilation balancing, hydronic schematics, and energy audits: our partner engineering firms design tailored solutions built around your architectural plans and budget.",
            findOfficeBtn: "Find an Engineering Office",
            joinOfficeBtn: "Register as an Engineering Office",
        },
        role: {
            titlePrefix: "What is the role of an",
            titleHighlight: "HVAC & thermal engineering office?",
            p1: "The HVAC thermal engineering consultancy analyzes your building's envelope, mathematically calculates cooling and heating capacities, sizes ductwork networks (air velocity, static pressure, acoustic attenuators), and validates compliance with international energy standards.",
            quote: "\"The objective: maximum thermal comfort with minimum electricity consumption, through reliable, silent, and durable installations.\"",
        },
        studies: {
            titlePrefix: "Which specialized engineering studies",
            titleHighlight: "do our experts provide?",
            items: [
                { title: "Building Thermal & Cooling Load Calculations", desc: "Room-by-room solar heat gain, transmission losses, and peak summer/winter design loads." },
                { title: "Ducted Airflow & Network Sizing (CAD / BIM)", desc: "Duct dimensions, pressure drop balancing, grille placement, and low-noise acoustic design." },
                { title: "Ventilation & Indoor Air Quality (IAQ)", desc: "Fresh air exchange rates, single/double flux mechanical ventilation, and filtration." },
                { title: "Hydronics & Heat Pump Engineering", desc: "Chilled water / heating pipe networks, buffer tanks, circulation pumps, and flow balancing." },
                { title: "Dynamic Thermal Simulations (DTS)", desc: "Year-round temperature simulations, summer comfort optimization, and shading analysis." },
                { title: "Energy Audits & Decarbonization", desc: "Existing system diagnostic, renovation scenarios, and high-ROI efficiency upgrades." }
            ]
        },
        audiences: {
            titlePrefix: "Who are our",
            titleHighlight: "engineering studies designed for?",
            items: [
                { target: "Property Owners & High-End Homeowners", desc: "New villa constructions, luxury renovations, and ducted heat pump installations." },
                { target: "Architects & Interior Designers", desc: "Seamless technical integration of air conditioning without compromising architectural aesthetics." },
                { target: "HVAC Contractors & Installers", desc: "Accurate plans, equipment schedules, and duct sizing to guarantee flawless on-site execution." },
                { target: "Real Estate Developers & General Contractors", desc: "Comprehensive MEP design, cost optimization, and compliance with statutory energy standards." },
                { target: "Building Managers & Commercial Operators", desc: "System diagnostics, energy conservation measures, and centralized plant refurbishment." }
            ]
        },
        process: {
            titlePrefix: "How does a specialized",
            titleHighlight: "engineering study proceed?",
            steps: [
                { step: "Step 01", title: "Review of Architectural Plans & Brief", desc: "Gathering floor plans, building orientation, wall insulation specifications, window glazing values, and client comfort targets." },
                { step: "Step 02", title: "Site Inspection or 3D Digital Modeling", desc: "Precise survey of ceiling voids, structural constraints, solar exposures, and external condenser locations." },
                { step: "Step 03", title: "Thermal Simulations & Duct Sizing", desc: "Running certified thermal calculation software to determine kilowatt capacities, CFM airflows, and balanced duct layouts." },
                { step: "Step 04", title: "Comprehensive Engineering Report Delivery", desc: "Delivering detailed CAD/BIM schematics, technical equipment schedules, and ongoing support during contractor bidding and commissioning." }
            ]
        },
        examples: {
            titlePrefix: "Recent examples of",
            titleHighlight: "completed engineering studies",
            items: [
                { title: "Luxury Villa – 450 m² – New Build", desc: "Full dynamic thermal simulation, multi-zone ducted VRV sizing, linear architectural slot diffusers, and smart zoning control." },
                { title: "High-Rise Apartment Renovation", desc: "Acoustic attenuation study, compact ducted ceiling unit integration, and condensate drainage design." },
                { title: "Commercial Office & Retail Space – 1,200 m²", desc: "Fresh air AHU sizing, heat recovery ventilation, VRF multi-split layout, and energy compliance certification." }
            ]
        },
        cta: {
            titlePrefix: "Have a project? Need a certified",
            titleHighlight: "thermal engineering study?",
            subtitle: "Tell us about your upcoming project (new build or renovation) to connect directly with specialized engineering offices ready to optimize your comfort and energy performance.",
            findOfficeBtn: "Find an Engineering Office",
            joinOfficeBtn: "Register as an Engineering Office",
        }
    },
    de: {
        metaTitle: "TGA- & Klimatechnik-Ingenieurbüros | Heiz-/Kühllastberechnung | DuctedExpert.com",
        metaDesc: "Finden Sie qualifizierte Ingenieurbüros für TGA, Kühllastberechnung, Kanalnetz-Dimensionierung und Energieaudits. Direkter Kontakt ohne Vermittlungsprovision.",
        hero: {
            title1: "INGENIEURBÜROS FÜR",
            title2: "TGA & THERMISCHE GEBÄUDESTUDIEN",
            subtitle: "Komfort optimieren, Betriebskosten senken und HLK-Installationen von Neubau bis Sanierung absichern.",
            desc: "Heiz- und Kühllastberechnungen, Kanalnetz-Dimensionierung, Lüftungskonzepte und Energieaudits: Unsere Partner-Ingenieurbüros entwickeln maßgeschneiderte Lösungen.",
            findOfficeBtn: "Ingenieurbüro finden",
            joinOfficeBtn: "Ingenieurbüro registrieren",
        },
        role: {
            titlePrefix: "Welche Aufgaben übernimmt ein",
            titleHighlight: "TGA-Ingenieurbüro?",
            p1: "Das Planungsbüro analysiert die thermische Gebäudehülle, dimensioniert die Kühl- und Heizleistungen präzise, berechnet Kanalquerschnitte und prüft die Einhaltung sämtlicher energetischer Vorgaben.",
            quote: "\"Das Ziel: Maximaler Raumkomfort bei minimalem Stromverbrauch mit langlebigen, leisen und betriebssicheren Anlagen.\"",
        },
        studies: {
            titlePrefix: "Welche Fachstudien",
            titleHighlight: "erstellen unsere Experten?",
            items: [
                { title: "Heiz- und Kühllastberechnungen nach Norm", desc: "Raumweise Ermittlung von Transmissions- und Kühllasten für verlässliche Auslegung." },
                { title: "Kanalnetz-Dimensionierung (CAD / BIM)", desc: "Strömungsberechnung, Druckverlustoptimierung und geräuscharme Luftauslässe." },
                { title: "Lüftungs- und RLT-Konzepte", desc: "Zu-/Abluftkonzepte, Wärmerückgewinnung und hygienische Raumluftqualität." },
                { title: "Hydraulik & Wärmepumpenauslegung", desc: "Rohrleitungsnetze, Pufferspeicher und hydraulischer Abgleich." },
                { title: "Thermische Gebäudesimulation", desc: "Sommerlicher Wärmeschutz und dynamische Temperaturanalysen." },
                { title: "Energieaudits & Sanierungskonzepte", desc: "Bestandsaufnahme, Einsparpotenziale und Sanierungsfahrpläne." }
            ]
        },
        audiences: {
            titlePrefix: "An wen richten sich",
            titleHighlight: "unsere Fachstudien?",
            items: [
                { target: "Bauherren & Eigentümer", desc: "Neubau von Villen, hochwertige Sanierungen und Wärmepumpenumstellung." },
                { target: "Architekten & Generalplaner", desc: "Technische Fachplanung und diskrete Integration ohne Beeinträchtigung der Architektur." },
                { target: "Fachbetriebe & Installateure", desc: "Ausführungspläne und Stücklisten für reibungslose Baustellenabläufe." },
                { target: "Bauträger & Investoren", desc: "Kostensicherheit und energetische Konformität bei Großprojekten." },
                { target: "Hausverwaltungen & Gewerbetreibende", desc: "Optimierung bestehender Anlagen und Fehlerdiagnose." }
            ]
        },
        process: {
            titlePrefix: "Wie läuft eine",
            titleHighlight: "Ingenieurstudie ab?",
            steps: [
                { step: "Schritt 01", title: "Erfassung der Baupläne & Anforderungen", desc: "Grundrisse, Schnittzeichnungen, Baustoffe und Dämmwerte werden gesichtet." },
                { step: "Schritt 02", title: "Vor-Ort-Aufnahme oder 3D-Modellierung", desc: "Erfassung von Zwischendeckenhöhen, Leitungsführungen und Montageorten." },
                { step: "Schritt 03", title: "Berechnung & Trassenplanung", desc: "Normgerechte Auslegung mit spezialisierter TGA-Software." },
                { step: "Schritt 04", title: "Übergabe des Planungsberichts", desc: "Detaillierte CAD-Pläne, Ausschreibungstexte und Begleitung bei der Inbetriebnahme." }
            ]
        },
        examples: {
            titlePrefix: "Ausgewählte Beispiele",
            titleHighlight: "erfolgreich geplanter Projekte",
            items: [
                { title: "Einfamilien-Villa – 380 m² – Neubau", desc: "Dynamische Kühllastberechnung, Kanalklimatisierung mit Zonenregelung und Wärmepumpe." },
                { title: "Penthouse-Wohnung in Sanierung", desc: "Schalloptimierte Zwischendeckenintegration und Kaltwasser-Kanalsystem." },
                { title: "Gewerbebau / Büroetage – 950 m²", desc: "VRF-Mehrzonensystem, RLT-Anlage mit Wärmerückgewinnung und Gebäudeleittechnik." }
            ]
        },
        cta: {
            titlePrefix: "Ein konkretes Vorhaben? Benötigen Sie eine",
            titleHighlight: "TGA-Fachstudie?",
            subtitle: "Beschreiben Sie Ihr Bau- oder Sanierungsprojekt und erhalten Sie qualifizierte Angebote von spezialisierten Ingenieurbüros.",
            findOfficeBtn: "Ingenieurbüro finden",
            joinOfficeBtn: "Ingenieurbüro registrieren",
        }
    },
    fi: {
        metaTitle: "LVI- ja lämpösuunnittelutoimistot | Lämpökuormitus- ja kanavamitoitus | DuctedExpert.com",
        metaDesc: "Löydä sertifioidut LVI- ja lämpötekniset suunnittelutoimistot. Tarkat teholaskelmat, kanavamitoitus ja energiaselvitykset suoraan asiantuntijoilta.",
        hero: {
            title1: "LVI- JA",
            title2: "LÄMPÖSUUNNITTELUTOIMISTOT",
            subtitle: "Optimoi asumismukavuus, pienennä energiakuluja ja varmista laitteistojen virheetön toiminta uudis- ja korjaushankkeissa.",
            desc: "Lämpökuormalaskelmat, kanavistomitoitus, ilmanvaihdon tasapainotus ja energiakatselmukset räätälöidysti rakennuksesi tarpeisiin.",
            findOfficeBtn: "Etsi suunnittelutoimisto",
            joinOfficeBtn: "Liity suunnittelijana",
        },
        role: {
            titlePrefix: "Mikä on",
            titleHighlight: "LVI- ja lämpösuunnittelutoimiston rooli?",
            p1: "Suunnittelutoimisto analysoi rakennuksen vaipan eristyksen, laskee jäähdytys- ja lämmitystehot, mitoittaa kanavakoot sekä äänitasot ja varmistaa energiamääräysten täyttymisen.",
            quote: "\"Tavoite: Paras mahdollinen sisäilmasto pienimmällä mahdollisella energiankulutuksella ja pitkäikäisillä ratkaisuilla.\"",
        },
        studies: {
            titlePrefix: "Mitä erikoissuunnitelmia",
            titleHighlight: "asiantuntijamme laativat?",
            items: [
                { title: "Lämpö- ja jäähdytyskuormituslaskelmat", desc: "Huonekohtaiset lämpökuormat oikeaan laitevalintaan." },
                { title: "Kanavistomitoitus ja virtauslaskenta (CAD / BIM)", desc: "Painehäviöiden tasapainotus ja hiljainen ilmanjako." },
                { title: "Ilmanvaihto- ja sisäilmaselvitykset", desc: "LVI-suunnitelmat ja lämmöntalteenoton mitoitus." },
                { title: "Putkisto- ja lämpöpumppusuunnittelu", desc: "Vesikiertoiset järjestelmät ja mitoituslaskelmat." },
                { title: "Dynaamiset lämpösimuloinnit", desc: "Kesäaikainen lämpeneminen ja auringonsuojauksen optimointi." },
                { title: "Energiatodistukset ja -katselmukset", desc: "Korjaustoimenpiteiden kannattavuuslaskelmat." }
            ]
        },
        audiences: {
            titlePrefix: "Kenelle",
            titleHighlight: "suunnitelmamme on suunnattu?",
            items: [
                { target: "Omakotitalo- ja huvilarakentajat", desc: "Uudiskohteet ja kokonaisvaltaiset LVI-saneeraukset." },
                { target: "Arkkitehdit ja pääsuunnittelijat", desc: "Tekninen tuki ja huomaamaton kanavaintointi." },
                { target: "LVI-urakoitsijat ja asentajat", desc: "Selkeät työpiirustukset virheettömään asennukseen." },
                { target: "Rakennuttajat ja kiinteistösijoittajat", desc: "Kustannustehokkaat ja määräystenmukaiset LVI-ratkaisut." },
                { target: "Taloyhtiöt ja isännöitsijät", desc: "Kiinteistön lämmitys- ja ilmanvaihtojärjestelmien uudistus." }
            ]
        },
        process: {
            titlePrefix: "Miten",
            titleHighlight: "suunnitteluprosessi etenee?",
            steps: [
                { step: "Vaihe 01", title: "Pohjakuvien ja lähtötietojen läpikäynti", desc: "Arkkitehtikuvat, rakenteiden U-arvot ja tilojen käyttötarkoitukset." },
                { step: "Vaihe 02", title: "Kohteen kartoitus tai 3D-mallinnus", desc: "Alaslaskujen ja reittien tilavarausten tarkistus." },
                { step: "Vaihe 03", title: "Laskennat ja virtaussuunnittelu", desc: "Tarkat mitoitusohjelmistot ja kanavareititykset." },
                { step: "Vaihe 04", title: "Valmiiden LVI-suunnitelmien toimitus", desc: "Toteutuspiirustukset, laiteluettelot ja tuki urakkakilpailutukseen." }
            ]
        },
        examples: {
            titlePrefix: "Esimerkkejä",
            titleHighlight: "toteutuneista suunnitteluhankkeista",
            items: [
                { title: "Edustustason huvila – 320 m² – Uudiskohde", desc: "Dynaaminen jäähdytyssimulointi ja huomaamaton kanavailmastointi." },
                { title: "Kerrostaloasunnon saneeraus", desc: "Akustisesti vaimennettu kanavaratkaisu alaslaskettuun kattoon." },
                { title: "Liiketila ja toimisto – 800 m²", desc: "VRF-monivyöhykejärjestelmä ja tarpeenmukainen ilmanvaihto." }
            ]
        },
        cta: {
            titlePrefix: "Onko sinulla projekti? Tarvitsetko",
            titleHighlight: "LVI- ja lämpösuunnitelman?",
            subtitle: "Kerro kohteestasi ja saat asiantuntevan tarjouksen luotettavalta suunnittelutoimistolta.",
            findOfficeBtn: "Etsi suunnittelutoimisto",
            joinOfficeBtn: "Liity suunnittelutoimistona",
        }
    },
    es: {
        metaTitle: "Oficinas Técnicas de Ingeniería Térmica y CVC | Cálculo de Cargas | DuctedExpert.com",
        metaDesc: "Contacte con ingenierías térmicas especializadas en cálculo de cargas, dimensionamiento de conductos CVC y proyectos de eficiencia energética.",
        hero: {
            title1: "INGENIERÍA TÉRMICA",
            title2: "Y ESTUDIOS DE CLIMATIZACIÓN CVC",
            subtitle: "Optimizar el confort, reducir la factura eléctrica y asegurar sus instalaciones de climatización en obra nueva y reformas.",
            desc: "Cálculo de cargas térmicas, dimensionamiento de conductos, ventilación mecánica y auditorías energéticas: soluciones a medida para viviendas y edificios.",
            findOfficeBtn: "Buscar una Oficina Técnica",
            joinOfficeBtn: "Registrar mi Ingeniería",
        },
        role: {
            titlePrefix: "¿Cuál es la función de una",
            titleHighlight: "oficina técnica de ingeniería térmica?",
            p1: "La consultoría técnica analiza la envolvente térmica, calcula las potencias frigoríficas y caloríficas requeridas, dimensiona los conductos y rejillas para minimizar el ruido y asegura la conformidad normativa.",
            quote: "\"El objetivo: máximo confort con el mínimo consumo eléctrico mediante instalaciones fiables, silenciosas y duraderas.\"",
        },
        studies: {
            titlePrefix: "¿Qué estudios especializados",
            titleHighlight: "realizan nuestras ingenierías?",
            items: [
                { title: "Cálculo de Cargas Térmicas y Necesidades", desc: "Determinación rigurosa de vatios necesarios estancia por estancia." },
                { title: "Dimensionamiento de Redes de Conductos (CAD / BIM)", desc: "Cálculo de secciones, equilibrio de presiones y difusión de aire sin turbulencias." },
                { title: "Estudios de Ventilación y Calidad del Aire (VMC)", desc: "Caudales de renovación, filtración y recuperación de calor." },
                { title: "Sistemas Hidrónicos y Aerotermia", desc: "Redes de agua fría/caliente, suelo radiante y colectores." },
                { title: "Simulaciones Térmicas Dinámicas", desc: "Comportamiento del edificio frente a olas de calor y radiación solar." },
                { title: "Auditorías Energéticas y Certificación", desc: "Diagnóstico de consumos y propuestas de mejora con alta rentabilidad." }
            ]
        },
        audiences: {
            titlePrefix: "¿A quién van dirigidos",
            titleHighlight: "nuestros proyectos técnicos?",
            items: [
                { target: "Particulares y Propietarios de Chalets", desc: "Obra nueva, reformas integrales e instalaciones de aerotermia." },
                { target: "Arquitectos y Proyectistas", desc: "Integración estética y técnica desde la fase de anteproyecto." },
                { target: "Empresas Instaladoras y Climatizadores", desc: "Planos y memorias técnicas para ejecutar obras sin imprevistos." },
                { target: "Promotoras y Constructoras", desc: "Optimización de costes y justificación de normativas energéticas." },
                { target: "Comunidades y Terciario", desc: "Modernización de salas de calderas y climatización centralizada." }
            ]
        },
        process: {
            titlePrefix: "¿Cómo se desarrolla un",
            titleHighlight: "estudio de ingeniería térmica?",
            steps: [
                { step: "Paso 01", title: "Recogida de Planos y Necesidades", desc: "Estudio de memorias de calidades, orientación y objetivos de climatización." },
                { step: "Paso 02", title: "Inspección Técnica o Modelado Digital", desc: "Comprobación de falsos techos, pasos de forjados y ubicaciones exteriores." },
                { step: "Paso 03", title: "Cálculos y Trazado de Conductos", desc: "Modelado con software especializado para seleccionar equipos exactos." },
                { step: "Paso 04", title: "Entrega del Proyecto y Planos de Ejecución", desc: "Documentación técnica completa para licitar con los instaladores." }
            ]
        },
        examples: {
            titlePrefix: "Ejemplos de",
            titleHighlight: "estudios técnicos realizados",
            items: [
                { title: "Vivienda Unifamiliar – 350 m² – Obra Nueva", desc: "Simulación térmica, conductos zonificados Airzone y aerotermia suelo radiante/refrescante." },
                { title: "Reforma de Piso de Alto Standing", desc: "Conductos extraplanos de bajo nivel sonoro en falso techo perimetral." },
                { title: "Edificio de Oficinas – 1.000 m²", desc: "Sistema VRV de recuperación de calor y unidades de tratamiento de aire con recuperador." }
            ]
        },
        cta: {
            titlePrefix: "¿Tiene un proyecto? ¿Necesita un",
            titleHighlight: "estudio de ingeniería térmica?",
            subtitle: "Explíquenos los detalles de su proyecto y le pondremos en contacto directo con consultorías técnicas de primer nivel.",
            findOfficeBtn: "Buscar una Oficina Técnica",
            joinOfficeBtn: "Registrar mi Ingeniería",
        }
    },
    it: {
        metaTitle: "Studi Termotecnici e Progettazione HVAC | Calcolo Carichi Termici | DuctedExpert.com",
        metaDesc: "Trova studi termotecnici accreditati per calcoli carichi termici, dimensionamento canali d'aria e diagnosi energetica degli edifici.",
        hero: {
            title1: "STUDI TERMOTECNICI",
            title2: "E PROGETTAZIONE IMPIANTI CVC",
            subtitle: "Ottimizzare il comfort, abbattere i consumi energetici e garantire la perfetta riuscita degli impianti.",
            desc: "Calcolo dei carichi termici, dimensionamento delle reti aerauliche, schemi idronici e diagnosi energetiche per nuove costruzioni e riqualificazioni.",
            findOfficeBtn: "Trova uno Studio Termotecnico",
            joinOfficeBtn: "Registra il tuo Studio Tecnico",
        },
        role: {
            titlePrefix: "A cosa serve uno",
            titleHighlight: "studio di ingegneria termotecnica?",
            p1: "Lo studio termotecnico analizza l'involucro dell'edificio, calcola con precisione la potenza dei macchinari e progetta il tracciato delle canalizzazioni per eliminare ogni fruscio e spreco di energia.",
            quote: "\"L'obiettivo: massimo benessere con il minor consumo di elettricità, attraverso impianti affidabili e silenziosi.\"",
        },
        studies: {
            titlePrefix: "Quali studi specialistici",
            titleHighlight: "realizzano i nostri esperti?",
            items: [
                { title: "Calcolo dei Carichi Termici e Fabbisogni", desc: "Dimensionamento corretto per riscaldamento e raffrescamento estivo." },
                { title: "Dimensionamento Reti Aerauliche (CAD / BIM)", desc: "Calcolo sezioni canali, portate e griglie di diffusione a bassa rumorosità." },
                { title: "Ventilazione Meccanica Controllata (VMC)", desc: "Ricambio e purificazione dell'aria con recupero termico ad alta efficienza." },
                { title: "Reti Idroniche e Pompe di Calore", desc: "Progettazione impianti radianti a pavimento e distribuzione fluido." },
                { title: "Simulazioni Termiche Dinamiche", desc: "Analisi del comportamento estivo e valutazione del surriscaldamento." },
                { title: "Diagnosi Energetica e Relazioni Tecniche", desc: "Audit degli impianti esistenti e piani di efficientamento economico." }
            ]
        },
        audiences: {
            titlePrefix: "A chi si rivolgono",
            titleHighlight: "le nostre consulenze tecniche?",
            items: [
                { target: "Privati e Proprietari di Ville", desc: "Nuove realizzazioni e ristrutturazioni con climatizzazione canalizzata." },
                { target: "Architetti e Designer d'Interni", desc: "Integrazione discreta dell'impiantistica senza rovinare l'estetica." },
                { target: "Imprese e Installatori Termoidraulici", desc: "Elaborati tecnici e schemi esecutivi per cantieri precisi e veloci." },
                { target: "Imprese di Costruzione e General Contractor", desc: "Conformità alle normative e ottimizzazione dei costi di installazione." },
                { target: "Amministratori di Condominio e Terziario", desc: "Riqualificazione centrali termiche e gestione impianti centralizzati." }
            ]
        },
        process: {
            titlePrefix: "Come si svolge una",
            titleHighlight: "consulenza termotecnica?",
            steps: [
                { step: "Fase 01", title: "Raccolta delle Piante e Dati di Progetto", desc: "Esame delle stratigrafie murarie, superfici vetrate ed esigenze di comfort." },
                { step: "Fase 02", title: "Rilievo in Cantiere o Modellazione 3D", desc: "Verifica degli ingombri nei controsoffitti e passaggi tecnici." },
                { step: "Fase 03", title: "Calcoli Termici e Tracciamento Canali", desc: "Dimensionamento con software certificati per la scelta delle macchine." },
                { step: "Fase 04", title: "Consegna della Relazione e Tavole Esecutive", desc: "Consegna di disegni esecutivi e supporto durante la posa in opera." }
            ]
        },
        examples: {
            titlePrefix: "Alcuni esempi di",
            titleHighlight: "progetti termotecnici realizzati",
            items: [
                { title: "Villa Singola – 400 m² – Nuova Costruzione", desc: "Simulazione termica, impianto canalizzato con serrande motorizzate Airzone e pompa di calore." },
                { title: "Ristrutturazione Appartamento Signorile", desc: "Canali microforati e bocchette a scomparsa a filo cartongesso." },
                { title: "Spazio Commerciale e Uffici – 900 m²", desc: "Sistema VRF con recupero di calore e unità di trattamento aria ad alta portata." }
            ]
        },
        cta: {
            titlePrefix: "Hai un progetto? Richiedi uno",
            titleHighlight: "studio termotecnico professionale",
            subtitle: "Parlaci del tuo progetto per metterti in contatto diretto con i migliori studi termotecnici della tua zona.",
            findOfficeBtn: "Trova uno Studio Termotecnico",
            joinOfficeBtn: "Registra il tuo Studio Tecnico",
        }
    },
    ar: {
        metaTitle: "مكاتب الاستشارات الهندسية الحرارية ودراسات التكييف | حساب الأحمال | DuctedExpert.com",
        metaDesc: "تواصل مع نخبة مكاتب الاستشارات الهندسية المعتمدة لحساب الأحمال الحرارية، تصميم شبكات مجاري الهواء (الدكت)، وتدقيق كفاءة الطاقة للمباني.",
        hero: {
            title1: "مكاتب الاستشارات",
            title2: "والدراسات الهندسية الحرارية CVC",
            subtitle: "تحسين الراحة الحرارية، تقليل استهلاك الطاقة، وضمان كفاءة أنظمة التكييف في الفلل والمشاريع الكبرى من البداية وحتى التشغيل.",
            desc: "حسابات دقيقة للأحمال الحرارية، تصميم شبكات مجاري الهواء (الدكت)، مخططات VRV/VRF، وتدقيق كفاءة الطاقة مع نخبة المكاتب الهندسية المعتمدة.",
            findOfficeBtn: "البحث عن مكتب استشاري معتمد",
            joinOfficeBtn: "تسجيل مكتبي الهندسي في الشبكة",
        },
        role: {
            titlePrefix: "ما هو دور مكتب",
            titleHighlight: "الاستشارات والدراسات الهندسية الحرارية؟",
            p1: "يقوم المكتب الهندسي بدراسة الغلاف الحراري للمبنى، وحساب سعات أجهزة التكييف والتهوية بدقة، وتصميم مسارات ومقاسات الدكت لضمان أقصى درجات الهدوء وتوافق المنظومة مع كود البناء ومعايير كفاءة الطاقة.",
            quote: "\"الهدف: أقصى درجات الراحة والهدوء بأقل استهلاك كهربائي مع منظومة تكييف موثوقة تدوم لسنوات طويلة.\"",
        },
        studies: {
            titlePrefix: "ما هي الدراسات التخصصية",
            titleHighlight: "التي يقدمها خبراؤنا؟",
            items: [
                { title: "حساب الأحمال الحرارية للتبريد والتدفئة", desc: "حسابات دقيقة لكل غرفة وفراغ لاختيار سعات المكائن المثالية دون زيادة أو نقصان." },
                { title: "تصميم وحساب مقاسات مجاري الهواء (CAD / BIM)", desc: "تحديد أبعاد الدكت، هبوط الضغط، ومواقع فتحات توزيع الهواء لضمان الهدوء التام." },
                { title: "دراسات أنظمة التهوية وجودة الهواء الداخلي", desc: "تحديد معدلات تجديد الهواء، وحدات معالجة الهواء، والفلترة الصحية." },
                { title: "تصميم شبكات الأنابيب والمضخات الحرارية", desc: "مخططات التوزيع الهيدروليكي، التشيلرات، وشبكات المياه المثلجة." },
                { title: "محاكاة حرارية ديناميكية متقدمة للمبنى", desc: "دراسة حركة الشمس والظلال والتأثير الحراري على الفلل والأبراج." },
                { title: "تدقيق كفاءة الطاقة وخفض تكاليف التشغيل", desc: "تقييم الأنظمة القائمة وتقديم حلول لخفض استهلاك الكهرباء بنسبة تصل إلى 30%." }
            ]
        },
        audiences: {
            titlePrefix: "لمن تتوجه",
            titleHighlight: "دراساتنا واستشاراتنا الهندسية؟",
            items: [
                { target: "ملاك الفلل والقصور والمشاريع السكنية", desc: "للبناء الجديد، التوسعات، والترميم لضمان تكييف فاخر وهادئ تماماً." },
                { target: "المكاتب المعمارية ومصممو الديكور", desc: "دمج مسارات التكييف في الأسقف المستعارة دون المساس بجمال التصميم الداخلي." },
                { target: "مقاولو وشركات تركيب التكييف", desc: "مخططات تنفيذية دقيقة وجداول كميات تضمن التنفيذ الميداني دون أخطاء." },
                { target: "شركات التطوير العقاري والمقاولات العامة", desc: "دراسات الامتثال للمواصفات وكود البناء وضبط الميزانيات التقديرية." },
                { target: "إدارات المنشآت والمرافق التجارية", desc: "فحص وتشخيص كفاءة المنظومات القائمة وتحسين أدائها." }
            ]
        },
        process: {
            titlePrefix: "كيف تجري مرحلة",
            titleHighlight: "الدراسة والاستشارة الهندسية؟",
            steps: [
                { step: "المرحلة 01", title: "مراجعة المخططات المعمارية والبيانات", desc: "دراسة المساحات، أنواع العزل، زجاج النوافذ، وتوجيه المبنى بالنسبة للشمس." },
                { step: "المرحلة 02", title: "المعاينة الميدانية أو النمذجة ثلاثية الأبعاد", desc: "تحديد الفراغات المتاحة داخل الأسقف المستعارة ومسارات التمديدات." },
                { step: "المرحلة 03", title: "الحسابات الهندسية وتصميم شبكة الدكت", desc: "استخدام البرمجيات الهندسية المعتمدة لحساب الأحمال ومقاسات مجاري الهواء." },
                { step: "المرحلة 04", title: "تسليم المخططات التنفيذية والتقرير النهائي", desc: "تسليم المخططات التنفيذية، مواصفات المعدات، والدعم الفني أثناء التركيب." }
            ]
        },
        examples: {
            titlePrefix: "نماذج من مشاريع",
            titleHighlight: "ودراسات هندسية منجزة",
            items: [
                { title: "فيلا سكنية فاخرة – 550 م² – بناء جديد", desc: "حساب الأحمال الحرارية، تصميم شبكة تكييف مخفي مع تحكم ذكي بكل غرفة ومضخة حرارية موفرة." },
                { title: "تجديد شقة بنتهاوس راقية", desc: "تصميم مجاري هواء مدمجة بالغة النحافة داخل الأسقف المستعارة مع عزل صوتي فائق." },
                { title: "مبنى تجاري ومكاتب إدارية – 1,500 م²", desc: "نظام تدفق متغير VRV/VRF، وحدات معالجة هواء نقي، وتحقيق معايير كفاءة الطاقة." }
            ]
        },
        cta: {
            titlePrefix: "لديك مشروع؟ تحتاج إلى",
            titleHighlight: "دراسة هندسية حرارية معتمدة؟",
            subtitle: "شاركنا تفاصيل مشروعك وسنوصلك مباشرة بنخبة المكاتب الهندسية المتخصصة لضمان أقصى درجات الراحة والكفاءة لمشروعك.",
            findOfficeBtn: "البحث عن مكتب استشاري",
            joinOfficeBtn: "تسجيل مكتبي الهندسي",
        }
    }
};
