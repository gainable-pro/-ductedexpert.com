// src/lib/climatisation-content.ts
import { Locale } from "./i18n";

export interface ClimatisationPageData {
    metaTitle: string;
    metaDesc: string;
    hero: {
        title1: string;
        title2: string;
        subtitleHighlight: string;
        subtitleRest: string;
        findExpertBtn: string;
        joinProBtn: string;
        freeQuotesNote: string;
    };
    sectors: {
        title: string;
        items: { name: string; img: string; href: string }[];
    };
    blockVillas: {
        titlePrefix: string;
        titleHighlight: string;
        titleSuffix: string;
        paragraphs: string[];
        btnText: string;
    };
    blockCommercial: {
        titlePrefix: string;
        titleHighlight: string;
        paragraphs: string[];
        btnText: string;
    };
    blockEngineering: {
        titlePrefix: string;
        titleHighlight: string;
        paragraphs: string[];
        btnText: string;
    };
    blockVrv: {
        titlePrefix: string;
        titleHighlight: string;
        titleSuffix: string;
        paragraphs: string[];
        btnText: string;
    };
    blockAhu: {
        titleHighlight: string;
        titleSuffix: string;
        paragraphs: string[];
        btnText: string;
    };
    zones: {
        title: string;
        cities: { name: string; country?: string }[];
        allCitiesBtn: string;
    };
}

export const CLIMATISATION_CONTENT: Record<Locale, ClimatisationPageData> = {
    en: {
        metaTitle: "Certified Ducted Air Conditioning & Heat Pump Installers | DuctedExpert.com",
        metaDesc: "Find certified ducted air conditioning, VRV/VRF and heat pump contractors. Direct quotes with 0% commission from verified HVAC specialists.",
        hero: {
            title1: "FIND YOUR CERTIFIED DUCTED AIR CONDITIONING",
            title2: "& HEAT PUMP INSTALLER",
            subtitleHighlight: "The international reference platform",
            subtitleRest: "connecting you directly with verified HVAC contractors and thermal engineering offices.",
            findExpertBtn: "Find an Expert",
            joinProBtn: "Join DuctedExpert.com Network",
            freeQuotesNote: "Free quotes • Direct contact with zero commission",
        },
        sectors: {
            title: "Sectors of Activity",
            items: [
                { name: "Villas & Homes", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "Commercial Offices", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "Retail & Shops", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "Hotels & Hospitality", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "Industrial Facilities", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "Healthcare & Clinics", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "Ducted Air Conditioning:",
            titleHighlight: "invisible comfort",
            titleSuffix: "for luxury residences & villas",
            paragraphs: [
                "In modern villas and high-end homes, occupants demand silent, discrete, and high-efficiency air conditioning. Ducted systems are the ultimate solution: the indoor units are fully concealed in suspended ceilings, with air distributed gently through minimalist architectural grilles.",
                "It delivers uniform year-round comfort across the entire property without visible wall units cluttering interior decor. For large living spaces, precise thermal load calculations and duct sizing are paramount to avoid temperature discrepancies between rooms.",
                "DuctedExpert.com connects you with top-tier contractors specialized in premium residential ducted and zoning solutions (Airzone, Daikin, Mitsubishi, Toshiba)."
            ],
            btnText: "Find a Residential Expert",
        },
        blockCommercial: {
            titlePrefix: "HVAC & Climate Control for",
            titleHighlight: "hotels, commercial retail & large buildings",
            paragraphs: [
                "In hotels, retail stores, office buildings, and shopping centers, reliable climate control is critical to customer satisfaction and workplace productivity. The indoor temperature must remain consistently balanced all day, even during peak foot traffic and intense solar exposure.",
                "For commercial projects, multi-zone systems (VRV/VRF, chilled water, centralized air handling) are engineered from day one to prevent common pitfalls: excessive electricity bills, uneven hot and cold zones, intrusive acoustics, or frequent system breakdowns.",
                "Partnering with a certified HVAC contractor—and engaging a thermal engineering office for airflow balancing and capacity sizing—ensures a reliable, energy-efficient commercial installation built to last."
            ],
            btnText: "Find a Commercial Specialist",
        },
        blockEngineering: {
            titlePrefix: "Why Work with a Specialized",
            titleHighlight: "HVAC Engineering Office?",
            paragraphs: [
                "An HVAC thermal engineering consultancy analyzes the building's thermal envelope before installation begins. Their mission is to verify that equipment capacities, duct networks, and zoning are mathematically sized for maximum comfort, lowest energy bills, and full building code compliance.",
                "They produce CAD/BIM duct schematics, airflow balancing plans, and precise thermal loss calculations. In luxury villas, commercial spaces, or complex multi-floor renovations, an engineering study is the ultimate safeguard against costly installation mistakes."
            ],
            btnText: "Connect with an Engineering Office",
        },
        blockVrv: {
            titlePrefix: "VRV / VRF Systems:",
            titleHighlight: "the ideal multi-zone solution",
            titleSuffix: "for modern buildings",
            paragraphs: [
                "Variable Refrigerant Flow (VRV / VRF) systems are engineered for hotels, corporate office buildings, and multi-room luxury villas. They allow individual climate control room by room: adjust one hotel suite or boardroom to 21°C while an adjacent space enjoys 23°C.",
                "Equipped with advanced inverter compressors, they deliver outstanding seasonal efficiency (SCOP / SEER) and low operating costs. Achieving these benefits requires precise refrigerant piping calculations and expertly balanced air distribution.",
                "DuctedExpert.com brings together certified VRV/VRF contractors with proven multi-zone project portfolios."
            ],
            btnText: "Find a VRV/VRF Specialist",
        },
        blockAhu: {
            titleHighlight: "Air Handling Units (AHU)",
            titleSuffix: "& indoor air quality in schools, retail & hospitals",
            paragraphs: [
                "In high-occupancy commercial facilities (educational institutions, retail centers, clinics, restaurants), indoor air quality is vital. Air Handling Units (AHUs) continuously exchange stale indoor air with fresh, HEPA-filtered air while regulating humidity and recovering thermal energy.",
                "An improperly balanced AHU causes uncomfortable drafts, condensation, acoustic noise, and energy waste. Installation, commissioning, and airflow balancing must be entrusted to seasoned ventilation professionals."
            ],
            btnText: "Find a Ventilation Specialist",
        },
        zones: {
            title: "Ducted Air Conditioning & Heat Pump Network: Worldwide Coverage",
            cities: [
                { name: "Riyadh", country: "SA" },
                { name: "Dubai", country: "AE" },
                { name: "Doha", country: "QA" },
                { name: "Jeddah", country: "SA" },
                { name: "Abu Dhabi", country: "AE" },
                { name: "London", country: "UK" },
                { name: "Paris", country: "FR" },
                { name: "Berlin", country: "DE" },
                { name: "Madrid", country: "ES" },
                { name: "Milan", country: "IT" },
                { name: "Helsinki", country: "FI" },
                { name: "Geneva", country: "CH" },
            ],
            allCitiesBtn: "Explore All Covered Cities & Regions",
        }
    },
    de: {
        metaTitle: "Zertifizierte Fachbetriebe für Kanal-Klimaanlagen & Wärmepumpen | DuctedExpert.com",
        metaDesc: "Finden Sie zertifizierte Fachbetriebe für Kanal-Klimaanlagen, VRV/VRF-Systeme und Wärmepumpen. Direkte Angebote mit 0% Provision.",
        hero: {
            title1: "FINDEN SIE IHREN ZERTIFIZIERTEN FACHBETRIEB FÜR",
            title2: "KANAL-KLIMAANLAGEN & WÄRMEPUMPEN",
            subtitleHighlight: "Die internationale Referenzplattform",
            subtitleRest: "die Sie direkt mit geprüften Klimatechnikern und TGA-Ingenieurbüros verbindet.",
            findExpertBtn: "Experten finden",
            joinProBtn: "Fachbetrieb registrieren",
            freeQuotesNote: "Kostenlose Angebote • Direkter Kontakt ohne Provision",
        },
        sectors: {
            title: "Tätigkeitsbereiche",
            items: [
                { name: "Villen & Wohnhäuser", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "Büro- & Gewerbebau", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "Einzelhandel & Geschäfte", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "Hotellerie & Gastronomie", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "Industrieanlagen", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "Kliniken & Praxen", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "Kanal-Klimaanlage:",
            titleHighlight: "unsichtbarer Komfort",
            titleSuffix: "für anspruchsvolle Villen & Wohnhäuser",
            paragraphs: [
                "In modernen Villen und hochwertigen Wohnhäusern steht leiser, unauffälliger und energieeffizienter Komfort an erster Stelle. Kanal-Klimasysteme sind die perfekte Lösung: Innengeräte werden unsichtbar in Zwischendecken integriert, und die Luft strömt sanft über diskrete Designgitter.",
                "So genießen Sie das ganze Jahr über ein perfektes Raumklima ohne störende Wandgeräte an Ihren Wänden. Eine exakte Heiz- und Kühllastberechnung sowie passende Kanaldimensionierung verhindern Temperaturunterschiede zwischen den Räumen.",
                "DuctedExpert.com vermittelt erstklassige Fachbetriebe mit Spezialisierung auf hochwertige Zonenregelungen (Airzone, Daikin, Mitsubishi, Panasonic)."
            ],
            btnText: "Fachbetrieb für Villen finden",
        },
        blockCommercial: {
            titlePrefix: "Klima- und Heiztechnik für",
            titleHighlight: "Hotels, Einkaufszentren & Großgebäude",
            paragraphs: [
                "In Hotels, Verkaufsflächen, Bürogebäuden und Praxen ist eine zuverlässige Klimatisierung entscheidend für Gästezufriedenheit und Arbeitsleistung. Die Temperatur muss den ganzen Tag über stabil bleiben – selbst bei voller Auslastung und starker Sonneneinstrahlung.",
                "Kommerzielle Projekte setzen auf fortschrittliche VRF/VRV- und Kaltwassersysteme. Diese müssen von Anfang an sorgfältig geplant werden, um hohe Betriebskosten, Geräuschentwicklung oder ungleichmäßige Temperaturzonen zu vermeiden.",
                "Mit einem zertifizierten Fachbetrieb und begleitenden TGA-Ingenieurbüros stellen Sie eine zuverlässige und langlebige Gesamtlösung sicher."
            ],
            btnText: "Gewerbespezialisten anfragen",
        },
        blockEngineering: {
            titlePrefix: "Warum ein spezialisiertes",
            titleHighlight: "TGA-Ingenieurbüro hinzuziehen?",
            paragraphs: [
                "Ein TGA-Planungsbüro analysiert die thermische Gebäudehülle vor Installationsbeginn. Seine Aufgabe ist es, Leistungsbedarfe exakt zu berechnen, das Kanalnetz abzustimmen und die Einhaltung energetischer Vorgaben sicherzustellen.",
                "Mit CAD/BIM-Planung, Druckverlustberechnungen und detaillierten Rohrnetzplänen schützt Sie ein Ingenieurbüro vor kostspieligen Auslegungsfehlern."
            ],
            btnText: "Ingenieurbüro finden",
        },
        blockVrv: {
            titlePrefix: "VRV / VRF-Systeme:",
            titleHighlight: "die ideale Mehrzonenlösung",
            titleSuffix: "für moderne Gebäude",
            paragraphs: [
                "VRV/VRF-Anlagen bieten präzise Einzelraumregelung für Hotels, Bürokomplexe und großzügige Villen. Jeder Raum kann unabhängig geregelt werden.",
                "Moderne Inverter-Verdichter garantieren höchste Energieeffizienz und minimieren die Stromkosten im Dauerbetrieb.",
                "Auf DuctedExpert.com finden Sie qualifizierte Partner mit langjähriger Erfahrung in der Realisierung von VRF-Großprojekten."
            ],
            btnText: "VRF-Fachbetrieb finden",
        },
        blockAhu: {
            titleHighlight: "RLT-Anlagen & Luftqualität",
            titleSuffix: "in Schulen, Einkaufszentren und Kliniken",
            paragraphs: [
                "In stark frequentierten Gebäuden ist eine kontrollierte Be- und Entlüftung unverzichtbar. RLT-Zentralgeräte filtern Schwebstoffe, regulieren Feuchtigkeit und sorgen für hygienisch einwandfreie Raumluft.",
                "Eine fachmännische Einregulierung verhindert Zugluft, Lärm und unnötigen Energieverbrauch."
            ],
            btnText: "Lüftungsexperten kontaktieren",
        },
        zones: {
            title: "Unser Netzwerk für Klimatechnik: Internationale Abdeckung",
            cities: [
                { name: "Berlin", country: "DE" },
                { name: "München", country: "DE" },
                { name: "Wien", country: "AT" },
                { name: "Zürich", country: "CH" },
                { name: "Frankfurt", country: "DE" },
                { name: "Hamburg", country: "DE" },
                { name: "Riad", country: "SA" },
                { name: "Dubai", country: "AE" },
                { name: "Doha", country: "QA" },
                { name: "London", country: "UK" },
                { name: "Paris", country: "FR" },
                { name: "Mailand", country: "IT" },
            ],
            allCitiesBtn: "Alle Städte & Regionen entdecken",
        }
    },
    fi: {
        metaTitle: "Sertifioidut kanavailmastoinnin ja lämpöpumppujen asennusliikkeet | DuctedExpert.com",
        metaDesc: "Löydä sertifioidut kanavailmastoinnin, VRF-järjestelmien ja lämpöpumppujen asiantuntijat. Suorat tarjoukset 0% välityspalkkiolla.",
        hero: {
            title1: "LÖYDÄ SERTIFIOITU KANAVAILMASTOINNIN",
            title2: "JA LÄMPÖPUMPPUJEN URAKOITSIJA",
            subtitleHighlight: "Kansainvälinen huippuverkosto",
            subtitleRest: "joka yhdistää sinut suoraan tarkastettuihin LVI- ja kylmäalan asiantuntijoihin.",
            findExpertBtn: "Etsi asiantuntija",
            joinProBtn: "Liity asiantuntijaverkostoon",
            freeQuotesNote: "Ilmaiset tarjoukset • Suora yhteys ilman välityspalkkiota",
        },
        sectors: {
            title: "Toimialat",
            items: [
                { name: "Villas & Omakotitalot", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "Toimistot & Liiketilat", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "Myymälät & Kaupat", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "Hotellit & Ravintolat", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "Teollisuus & Varastot", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "Terveydenhuolto & Klinikat", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "Kanavailmastointi:",
            titleHighlight: "näkymätöntä asumismukavuutta",
            titleSuffix: "huippuluokan koteihin ja huviloihin",
            paragraphs: [
                "Nykyaikaisissa asunnoissa ja edustustason huviloissa arvostetaan hiljaista ja huomaamatonta jäähdytystä. Kanavoitu ilmastointi on täydellinen ratkaisu: laitteet piilotetaan alaslaskettuun kattoon ja huoneisiin näkyvät vain linjakkaat tuloilmasäleiköt.",
                "Ratkaisu pitää sisälämpötilan miellyttävänä ympäri vuoden ilman seinille sijoitettavia sisäyksiköitä. Tarkat lämpökuormitus- ja kanavamitoituslaskelmat takaavat tasaisen lämpötilan ilman vedontunnetta.",
                "DuctedExpert.com kokoaa yhteen vaativiin kanavointiratkaisuihin erikoistuneet huippuammattilaiset."
            ],
            btnText: "Löydä huvila-asiantuntija",
        },
        blockCommercial: {
            titlePrefix: "Ilmastointi ja lämmitys",
            titleHighlight: "hotelleihin, liiketiloihin ja kiinteistöihin",
            paragraphs: [
                "Hotelleissa, liiketiloissa ja toimistoissa laadukas sisäilmasto on ratkaiseva viihtyvyyden ja tehokkuuden tekijä.",
                "VRF- ja kanavailmastointijärjestelmät tarjoavat joustavan monivyöhykeohjauksen ja alhaisen energiankulutuksen.",
                "Ammattitaitoinen suunnittelu ja kokenut urakoitsija varmistavat järjestelmän luotettavan ja pitkäikäisen toiminnan."
            ],
            btnText: "Pyydä liiketilatarjous",
        },
        blockEngineering: {
            titlePrefix: "Miksi hyödyntää",
            titleHighlight: "LVI- ja lämpösuunnittelutoimistoa?",
            paragraphs: [
                "LVI-suunnittelija mallintaa rakennuksen lämpökäyttäytymisen ennen asennusta, mitoittaa kanaviston ja optimoi energiatehokkuuden.",
                "CAD/BIM-suunnitelmat takaavat tasapainoisen ilmavirran ja säästävät kalliilta asennusvirheiltä."
            ],
            btnText: "Etsi suunnittelutoimisto",
        },
        blockVrv: {
            titlePrefix: "VRV / VRF -järjestelmät:",
            titleHighlight: "optimaalinen monivyöhykeratkaisu",
            titleSuffix: "suuriin kiinteistöihin",
            paragraphs: [
                "VRV/VRF-järjestelmät mahdollistavat huonekohtaisen lämpötilansäädön hotelleissa ja toimitiloissa.",
                "Invertteriteknologia pienentää sähkönkulutusta ja takaa tasaisen toiminnan."
            ],
            btnText: "Etsi VRF-asiantuntija",
        },
        blockAhu: {
            titleHighlight: "Ilmanvaihtokoneet (IV)",
            titleSuffix: "& terveellinen sisäilma julkisissa tiloissa",
            paragraphs: [
                "Kouluissa, myymälöissä ja sairaaloissa tehokas ilmanvaihto poistaa epäpuhtaudet ja tuo tilalle suodatettua raitista ilmaa.",
                "Oikeat säädöt ehkäisevät kosteutta, vetoa ja turhaa energiankulutusta."
            ],
            btnText: "Ota yhteys IV-ammattilaiseen",
        },
        zones: {
            title: "Kanavailmastoinnin kattava verkosto",
            cities: [
                { name: "Helsinki", country: "FI" },
                { name: "Espoo", country: "FI" },
                { name: "Tampere", country: "FI" },
                { name: "Turku", country: "FI" },
                { name: "Oulu", country: "FI" },
                { name: "Tukholma", country: "SE" },
                { name: "Riad", country: "SA" },
                { name: "Dubai", country: "AE" },
                { name: "Doha", country: "QA" },
                { name: "Lontoo", country: "UK" },
                { name: "Pariisi", country: "FR" },
                { name: "Berliini", country: "DE" },
            ],
            allCitiesBtn: "Katso kaikki katetut alueet",
        }
    },
    es: {
        metaTitle: "Instaladores Certificados de Aire Acondicionado por Conductos | DuctedExpert.com",
        metaDesc: "Encuentre empresas instaladoras certificadas en climatización por conductos, sistemas VRV/VRF y aerotermia. Presupuestos directos con 0% comisión.",
        hero: {
            title1: "ENCUENTRE SU INSTALADOR CERTIFICADO DE",
            title2: "CLIMATIZACIÓN POR CONDUCTOS Y AEROTERMIA",
            subtitleHighlight: "La plataforma internacional de referencia",
            subtitleRest: "que le conecta directamente con los mejores profesionales y consultorías térmicas de climatización.",
            findExpertBtn: "Buscar un Experto",
            joinProBtn: "Unirse a la Red DuctedExpert",
            freeQuotesNote: "Presupuestos gratuitos • Contacto directo con 0% comisión",
        },
        sectors: {
            title: "Sectores de Actividad",
            items: [
                { name: "Villas & Chalets", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "Oficinas y Terciario", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "Comercios y Locales", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "Hoteles y Restauración", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "Naves Industriales", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "Clínicas y Hospitales", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "Climatización por conductos:",
            titleHighlight: "confort invisible y silencioso",
            titleSuffix: "para chalets y viviendas de lujo",
            paragraphs: [
                "En chalets modernos y viviendas premium, se busca una climatización silenciosa, discreta y altamente eficiente. La climatización por conductos es la opción ideal: las máquinas se integran en falsos techos y el aire fluye mediante elegantes rejillas difusoras.",
                "Permite disfrutar de una temperatura homogénea durante todo el año sin aparatos visibles en las paredes. Es fundamental un cálculo térmico preciso y dimensionar la red de conductos para garantizar un confort térmico impecable.",
                "DuctedExpert.com le conecta con instaladores especializados en zonificación inteligente (Airzone, Daikin, Mitsubishi Electric)."
            ],
            btnText: "Buscar Experto en Chalets",
        },
        blockCommercial: {
            titlePrefix: "Climatización y calefacción para",
            titleHighlight: "hoteles, comercios y grandes edificios",
            paragraphs: [
                "En hoteles, comercios y sedes corporativas, un clima agradable es indispensable para la comodidad de clientes y empleados durante todo el año.",
                "La integración de sistemas VRV/VRF y conductos comerciales previene el exceso de consumo eléctrico y asegura la estabilidad térmica.",
                "Contar con empresas homologadas y consultorías técnicas garantiza instalaciones rentables, silenciosas y duraderas."
            ],
            btnText: "Solicitar Especialista Terciario",
        },
        blockEngineering: {
            titlePrefix: "¿Por qué acudir a una",
            titleHighlight: "oficina técnica de ingeniería HVAC?",
            paragraphs: [
                "Una ingeniería térmica analiza la envolvente de su edificio antes de instalar los equipos. Su función es calcular con precisión las cargas térmicas, el equilibrio de caudales y el cumplimiento de las normativas de eficiencia.",
                "Los planos de conductos y simulaciones energéticas previenen sobrecostes y aseguran una climatización perfecta."
            ],
            btnText: "Contactar una Oficina Técnica",
        },
        blockVrv: {
            titlePrefix: "Sistemas VRV / VRF:",
            titleHighlight: "la solución idónea multizona",
            titleSuffix: "para grandes inmuebles",
            paragraphs: [
                "Los sistemas VRV/VRF ofrecen control individual habitación por habitación con máxima eficiencia inverter.",
                "Ideales para hoteles, oficinas y viviendas con amplias estancias independientes."
            ],
            btnText: "Buscar Instalador VRF",
        },
        blockAhu: {
            titleHighlight: "Unidades de Tratamiento de Aire (UTA)",
            titleSuffix: "y calidad ambiental en espacios públicos",
            paragraphs: [
                "En escuelas, comercios y clínicas, las UTAs renuevan el aire, filtran contaminantes y controlan la humedad para proteger la salud de los usuarios."
            ],
            btnText: "Contactar Experto en Ventilación",
        },
        zones: {
            title: "Red Internacional de Instaladores de Climatización",
            cities: [
                { name: "Madrid", country: "ES" },
                { name: "Barcelona", country: "ES" },
                { name: "Valencia", country: "ES" },
                { name: "Sevilla", country: "ES" },
                { name: "Málaga", country: "ES" },
                { name: "Bilbao", country: "ES" },
                { name: "Riad", country: "SA" },
                { name: "Dubái", country: "AE" },
                { name: "Doha", country: "QA" },
                { name: "Londres", country: "UK" },
                { name: "París", country: "FR" },
                { name: "Milán", country: "IT" },
            ],
            allCitiesBtn: "Ver todas las ciudades cubiertas",
        }
    },
    it: {
        metaTitle: "Installatori Certificati Climatizzazione Canalizzata & Pompe di Calore | DuctedExpert.com",
        metaDesc: "Trova aziende qualificate in climatizzazione canalizzata invisibile, sistemi VRV/VRF e pompe di calore. Preventivi diretti allo 0% di commissione.",
        hero: {
            title1: "TROVA IL TUO INSTALLATORE CERTIFICATO DI",
            title2: "CLIMATIZZAZIONE CANALIZZATA & POMPE DI CALORE",
            subtitleHighlight: "La piattaforma di riferimento internazionale",
            subtitleRest: "che ti mette in contatto diretto con i migliori installatori CVC e studi termotecnici.",
            findExpertBtn: "Trova un Esperto",
            joinProBtn: "Registra la tua Azienda",
            freeQuotesNote: "Preventivi gratuiti • Contatto diretto con 0% commissioni",
        },
        sectors: {
            title: "Settori di Intervento",
            items: [
                { name: "Ville & Case Indipendenti", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "Uffici & Terziario", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "Negozi & Attività", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "Hotel & Ristorazione", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "Impianti Industriali", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "Ospedali & Cliniche", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "Climatizzazione canalizzata:",
            titleHighlight: "il comfort invisibile",
            titleSuffix: "per ville ed immobili di prestigio",
            paragraphs: [
                "Nelle ville moderne e nelle case di alta gamma si cerca una climatizzazione silenziosa, discreta ed efficiente. Il sistema canalizzato è la soluzione perfetta: le unità interne sono nascoste nei controsoffitti e l'aria è diffusa dolcemente tramite bocchette dal design minimale.",
                "Garantisce una temperatura uniforme in ogni stanza senza ingombranti split a vista sui muri. Il corretto dimensionamento delle portate d'aria e dei canali evita dispersioni e sbalzi termici.",
                "DuctedExpert.com seleziona le migliori imprese specializzate in climatizzazione canalizzata e termoregolazione a zone (Airzone, Daikin, Mitsubishi Electric)."
            ],
            btnText: "Trova Esperto Residenziale",
        },
        blockCommercial: {
            titlePrefix: "Climatizzazione e riscaldamento per",
            titleHighlight: "hotel, negozi e grandi strutture",
            paragraphs: [
                "Negli hotel, negozi e uffici, il benessere termoigrometrico è fondamentale per l'accoglienza dei clienti e la produttività dello staff durante tutto il giorno.",
                "L'adozione di impianti ad espansione diretta VRV/VRF o idronici previene sprechi energetici ed assicura una gestione ottimale della temperatura.",
                "Affidarsi a professionisti qualificati garantisce affidabilità, bassi consumi e assenza di rumori molesti."
            ],
            btnText: "Richiedi Specialista Terziario",
        },
        blockEngineering: {
            titlePrefix: "Perché rivolgersi a uno",
            titleHighlight: "studio termotecnico qualificato?",
            paragraphs: [
                "Lo studio di ingegneria termotecnica esamina l'involucro edilizio prima della posa dell'impianto. Il suo ruolo è calcolare con precisione i carichi termici estivi ed invernali, dimensionare le canalizzazioni e verificare la conformità energetica.",
                "Una corretta progettazione tutela l'investimento ed evita rumori d'aria e sprechi in bolletta."
            ],
            btnText: "Contatta uno Studio Tecnico",
        },
        blockVrv: {
            titlePrefix: "Sistemi VRV / VRF:",
            titleHighlight: "la soluzione multizona ideale",
            titleSuffix: "per grandi edifici",
            paragraphs: [
                "I sistemi VRV/VRF consentono la regolazione indipendente della temperatura stanza per stanza con altissima efficienza stagionale.",
                "Perfetti per alberghi, uffici ed ampie residenze a più piani."
            ],
            btnText: "Trova Installatore VRF",
        },
        blockAhu: {
            titleHighlight: "Unità di Trattamento Aria (UTA)",
            titleSuffix: "e qualità dell'aria nelle scuole, negozi e cliniche",
            paragraphs: [
                "Negli ambienti aperti al pubblico, il ricambio e la filtrazione costante dell'aria sono essenziali per la salute e il comfort dei presenti."
            ],
            btnText: "Contatta Esperto Trattamento Aria",
        },
        zones: {
            title: "Rete Internazionale Installatori Climatizzazione",
            cities: [
                { name: "Milano", country: "IT" },
                { name: "Roma", country: "IT" },
                { name: "Torino", country: "IT" },
                { name: "Firenze", country: "IT" },
                { name: "Bologna", country: "IT" },
                { name: "Napoli", country: "IT" },
                { name: "Riyadh", country: "SA" },
                { name: "Dubai", country: "AE" },
                { name: "Doha", country: "QA" },
                { name: "Londra", country: "UK" },
                { name: "Parigi", country: "FR" },
                { name: "Madrid", country: "ES" },
            ],
            allCitiesBtn: "Visualizza tutte le città coperte",
        }
    },
    ar: {
        metaTitle: "مقاول تكييف مركزي مخفي ومضخات حرارية معتمد | DuctedExpert.com",
        metaDesc: "ابحث عن نخبة مقاولي التكييف المركزي المخفي (الدكت)، أنظمة VRV/VRF، والمضخات الحرارية. عروض أسعار مباشرة بنسبة 0% عمولة.",
        hero: {
            title1: "ابحث عن مقاولك المعتمد لتنفيذ",
            title2: "التكييف المركزي المخفي (الدكت) والمضخات الحرارية",
            subtitleHighlight: "المنصة العالمية الأولى المرجعية",
            subtitleRest: "التي تربطك مباشرة بنخبة شركات التكييف ومكاتب الاستشارات الهندسية المعتمدة.",
            findExpertBtn: "البحث عن خبير معتمد",
            joinProBtn: "تسجيل شركتي في شبكة DuctedExpert",
            freeQuotesNote: "طلب عروض أسعار مجاني 100% • تواصل مباشر وبنسبة 0% عمولة",
        },
        sectors: {
            title: "مجالات العمل والقطاعات المنفذة",
            items: [
                { name: "الفلل والقصور السكنية", img: "/gainable-fr-climatisation-secteur-maison.png", href: "/trouver-installateur" },
                { name: "المكاتب والأبراج الإدارية", img: "/gainable-fr-climatisation-secteur-tertiaire.jpg", href: "/trouver-installateur" },
                { name: "المراكز والمحلات التجارية", img: "/gainable-fr-climatisation-secteur-commerce.jpg", href: "/trouver-installateur" },
                { name: "الفنادق والضيافة والمطاعم", img: "/gainable-fr-climatisation-secteur-hotellerie.jpg", href: "/trouver-installateur" },
                { name: "المصانع والمستودعات", img: "/gainable-fr-climatisation-secteur-industrie.png", href: "/trouver-installateur" },
                { name: "المستشفيات والقطاع الصحي", img: "/gainable-fr-climatisation-secteur-sante.jpg", href: "/trouver-installateur" },
            ]
        },
        blockVillas: {
            titlePrefix: "التكييف المركزي المخفي (الدكت):",
            titleHighlight: "قمة الراحة والهدوء غير المرئي",
            titleSuffix: "للفلل الفاخرة والمساكن الراقية",
            paragraphs: [
                "في الفلل العصرية والقصور الراقية، يبحث الملاك والمهندسون عن تكييف فائق الهدوء، مخفي تماماً وعالي الكفاءة في استهلاك الطاقة. التكييف المخفي (Concealed Ducted) هو الحل المثالي: فالماكينات مخفية بالكامل داخل الأسقف المستعارة، وتوزيع الهواء يتم عبر فتحات ديكورية أنيقة وعصرية.",
                "يمنحك النظام درجات حرارة متوازنة ومريحة على مدار السنة في كل ركن، دون تشويه الجدران أو الديكورات الداخلية بمكيفات جدارية ظاهرة. وللمساحات الواسعة، تعتبر حسابات الأحمال الحرارية الدقيقة ومقاسات مجاري الهواء (Duct Sizing) أمراً جوهرياً لتفادي تفاوت درجات الحرارة.",
                "تربطك شبكة DuctedExpert.com بأفضل المقاولين المتخصصين في أنظمة الدكت والتحكم الذكي بكل غرفة (Airzone, Daikin, Mitsubishi, Gree)."
            ],
            btnText: "البحث عن مقاول للفلل الفاخرة",
        },
        blockCommercial: {
            titlePrefix: "تكييف وتهوية المشاريع التجارية:",
            titleHighlight: "الفنادق، المجمعات والمباني الكبرى",
            paragraphs: [
                "في الفنادق، المعارض، المكاتب الإدارية والمراكز التجارية، يعد التكييف المستقر عنصراً حاسماً لراحة العملاء وإنتاجية الموظفين طوال ساعات العمل، حتى في ذروة درجات الحرارة والازدحام.",
                "تعتمد هذه المشاريع على أنظمة تدفق متغير متطورة (VRV / VRF)، تشيلرات مياه مثلجة، ووحدات مناولة هواء مركزية (AHU). ويجب دراستها هندسياً بدقة لتجنب هدر الطاقة، تفاوت التبريد، أو الأعطال المتكررة.",
                "الاستعانة بمقاول تكييف معتمد ومكتب استشارات هندسية يضمن لك منظومة موثوقة وموفرة تدوم لسنوات طويلة."
            ],
            btnText: "طلب متخصص للمشاريع التجارية",
        },
        blockEngineering: {
            titlePrefix: "لماذا يجب الاستعانة",
            titleHighlight: "بمكتب استشارات ودراسات هندسية CVC؟",
            paragraphs: [
                "يقوم مكتب الدراسات الهندسية بتحليل الغلاف الحراري للمبنى قبل الشروع في شراء المعدات وتركيبها. وتتمثل مهمته في حساب السعات المطلوبة بدقة (Thermal Loads)، تصميم مسارات مجاري الهواء لتقليل الضوضاء، وضمان الامتثال لكود البناء وكفاءة الطاقة.",
                "المخططات التنفيذية CAD/BIM وحسابات هبوط الضغط هي صمام الأمان الحقيقي لمنع أخطاء التركيب المكلفة وتوفير استهلاك الكهرباء بنسبة تصل إلى 30%."
            ],
            btnText: "التواصل مع مكتب استشاري معتمد",
        },
        blockVrv: {
            titlePrefix: "أنظمة VRV / VRF المتطورة:",
            titleHighlight: "الحل الذكي متعدد المناطق",
            titleSuffix: "للمباني والفلل الكبيرة",
            paragraphs: [
                "صممت أنظمة التدفق المتغير VRV / VRF لتوفير تحكم مستقل لكل غرفة أو جناح في الفلل والفنادق والأبراج الإدارية، حيث يمكن ضبط درجة حرارة مستقلة لكل وحدة داخلية.",
                "توفر ضواغط الإنفرتر الذكية توفيراً هائلاً في فاتورة الكهرباء مع عمر تشغيلي طويل وأقل نسبة أعطال ممكنة.",
                "تضم شبكة DuctedExpert.com نخبة الشركات المعتمدة دولياً في تركيب وبرمجة أنظمة VRV/VRF."
            ],
            btnText: "البحث عن خبير أنظمة VRF",
        },
        blockAhu: {
            titleHighlight: "وحدات مناولة الهواء (AHU) وجودة الهواء",
            titleSuffix: "في المدارس، المراكز التجارية والمستشفيات",
            paragraphs: [
                "في المنشآت والمباني العامة، تعتبر جودة الهواء الداخلي (IAQ) مسألة صحية وأساسية. تعمل وحدات مناولة الهواء المركزية (AHU) على تجديد الهواء، فلترة الأتربة والملوثات عبر فلاتر متطورة، وضبط الرطوبة النسبية.",
                "ضبط وموازنة تدفقات الهواء يتطلب كفاءة هندسية عالية لضمان عدم حدوث تيارات مزعجة أو تكثف غير مرغوب فيه."
            ],
            btnText: "التواصل مع خبير تهوية مركزية",
        },
        zones: {
            title: "شبكة مقاولي التكييف المركزي والمضخات الحرارية: تغطية شاملة",
            cities: [
                { name: "الرياض", country: "SA" },
                { name: "دبي", country: "AE" },
                { name: "الدوحة", country: "QA" },
                { name: "جدة", country: "SA" },
                { name: "أبوظبي", country: "AE" },
                { name: "الدمام", country: "SA" },
                { name: "لندن", country: "UK" },
                { name: "باريس", country: "FR" },
                { name: "برلين", country: "DE" },
                { name: "مدريد", country: "ES" },
                { name: "ميلانو", country: "IT" },
                { name: "هلسنكي", country: "FI" },
            ],
            allCitiesBtn: "استعراض كافة المدن والمناطق المغطاة",
        }
    }
};
