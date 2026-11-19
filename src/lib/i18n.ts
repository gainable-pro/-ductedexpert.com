export type Locale = 'en' | 'de' | 'fi' | 'es' | 'it' | 'ar';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'de', 'fi', 'es', 'it', 'ar'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { name: string; flag: string; htmlLang: string; ogLocale: string; dir?: 'ltr' | 'rtl' }> = {
    en: { name: 'English', flag: '🇬🇧', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
    de: { name: 'Deutsch', flag: '🇩🇪', htmlLang: 'de', ogLocale: 'de_DE', dir: 'ltr' },
    fi: { name: 'Suomi', flag: '🇫🇮', htmlLang: 'fi', ogLocale: 'fi_FI', dir: 'ltr' },
    es: { name: 'Español', flag: '🇪🇸', htmlLang: 'es', ogLocale: 'es_ES', dir: 'ltr' },
    it: { name: 'Italiano', flag: '🇮🇹', htmlLang: 'it', ogLocale: 'it_IT', dir: 'ltr' },
    ar: { name: 'العربية', flag: '🇸🇦', htmlLang: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
};

export function isValidLocale(val?: string | null): val is Locale {
    return !!val && SUPPORTED_LOCALES.includes(val as Locale);
}

export function withLocalePath(path: string, locale: Locale): string {
    const clean = path.startsWith('/') ? path : `/${path}`;
    // Strip existing locale prefix if present
    const stripped = stripLocalePrefix(clean);
    if (stripped === '/') return `/${locale}`;
    return `/${locale}${stripped}`;
}

export function stripLocalePrefix(pathname: string): string {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0 && isValidLocale(parts[0])) {
        const rest = parts.slice(1).join('/');
        return rest ? `/${rest}` : '/';
    }
    return pathname || '/';
}

export type RouteKey = 
  | 'home'
  | 'airConditioning'
  | 'engineeringOffice'
  | 'verifiedExpert'
  | 'whyDuctedExpert'
  | 'findInstaller'
  | 'termsOfUse'
  | 'termsOfSale'
  | 'legalNotice'
  | 'privacyPolicy'
  | 'cookiesPolicy'
  | 'contact';

/**
 * Direct localized URL slugs per language (English, German, Finnish, Spanish, Italian, Arabic)
 * Direct 200 OK responses, no redirect hops, perfect for Google Search Console & national SEO.
 */
export const LOCALIZED_ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: '',
    de: '',
    fi: '',
    es: '',
    it: '',
    ar: '',
  },
  airConditioning: {
    en: '/air-conditioning',
    de: '/klimaanlage',
    fi: '/ilmastointi',
    es: '/aire-acondicionado',
    it: '/aria-condizionata',
    ar: '/air-conditioning',
  },
  engineeringOffice: {
    en: '/engineering-office',
    de: '/ingenieurbuero',
    fi: '/insinooritoimisto',
    es: '/estudio-de-ingenieria',
    it: '/studio-di-ingegneria',
    ar: '/engineering-office',
  },
  verifiedExpert: {
    en: '/verified-expert',
    de: '/gepruefter-experte',
    fi: '/varmennettu-asiantuntija',
    es: '/experto-verificado',
    it: '/esperto-verificato',
    ar: '/verified-expert',
  },
  whyDuctedExpert: {
    en: '/why-ducted-expert',
    de: '/warum-ducted-expert',
    fi: '/miksi-ducted-expert',
    es: '/por-que-ducted-expert',
    it: '/perche-ducted-expert',
    ar: '/why-ducted-expert',
  },
  findInstaller: {
    en: '/find-installer',
    de: '/installateur-finden',
    fi: '/etsi-asentaja',
    es: '/buscar-instalador',
    it: '/trova-installatore',
    ar: '/find-installer',
  },
  termsOfUse: {
    en: '/terms-of-use',
    de: '/nutzungsbedingungen',
    fi: '/kayttoehdot',
    es: '/condiciones-de-uso',
    it: '/condizioni-d-uso',
    ar: '/terms-of-use',
  },
  termsOfSale: {
    en: '/terms-of-sale',
    de: '/agb',
    fi: '/sopimusehdot',
    es: '/condiciones-de-venta',
    it: '/condizioni-di-vendita',
    ar: '/terms-of-sale',
  },
  legalNotice: {
    en: '/legal-notice',
    de: '/impressum',
    fi: '/oikeudellinen-ilmoitus',
    es: '/aviso-legal',
    it: '/note-legali',
    ar: '/legal-notice',
  },
  privacyPolicy: {
    en: '/privacy-policy',
    de: '/datenschutz',
    fi: '/tietosuoja',
    es: '/politica-de-privacidad',
    it: '/politica-sulla-privacy',
    ar: '/privacy-policy',
  },
  cookiesPolicy: {
    en: '/cookies-policy',
    de: '/cookie-richtlinie',
    fi: '/evastekaytanto',
    es: '/politica-de-cookies',
    it: '/politica-sui-cookie',
    ar: '/cookies-policy',
  },
  contact: {
    en: '/contact',
    de: '/kontakt',
    fi: '/yhteystiedot',
    es: '/contacto',
    it: '/contatti',
    ar: '/contact',
  },
};

export const INTERNAL_ROUTE_PATHS: Record<RouteKey, string> = {
  home: '/',
  airConditioning: '/air-conditioning',
  engineeringOffice: '/engineering-office',
  verifiedExpert: '/verified-expert',
  whyDuctedExpert: '/why-ducted-expert',
  findInstaller: '/find-installer',
  termsOfUse: '/terms-of-use',
  termsOfSale: '/terms-of-sale',
  legalNotice: '/legal-notice',
  privacyPolicy: '/privacy-policy',
  cookiesPolicy: '/cookies-policy',
  contact: '/contact',
};

export function getLocalizedUrl(routeKey: RouteKey, locale: Locale): string {
    const slug = LOCALIZED_ROUTES[routeKey]?.[locale] ?? LOCALIZED_ROUTES[routeKey]?.en ?? '';
    if (!slug) return `/${locale}`;
    return `/${locale}${slug}`;
}

export function findRouteByPath(rawPath: string): { routeKey: RouteKey; internalPath: string; locale?: Locale } | null {
    if (!rawPath) return null;
    const clean = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
    const segments = clean.split('/').filter(Boolean);
    let checkLocale: Locale | undefined = undefined;
    let pathToCheck = clean;

    if (segments.length > 0 && isValidLocale(segments[0])) {
        checkLocale = segments[0] as Locale;
        pathToCheck = '/' + segments.slice(1).join('/');
    }

    if (pathToCheck === '' || pathToCheck === '/') {
        return { routeKey: 'home', internalPath: '/', locale: checkLocale };
    }

    // Check localized routes
    for (const [key, mapping] of Object.entries(LOCALIZED_ROUTES) as [RouteKey, Record<Locale, string>][]) {
        for (const [loc, slug] of Object.entries(mapping) as [Locale, string][]) {
            if (slug && slug.toLowerCase() === pathToCheck.toLowerCase()) {
                return { routeKey: key, internalPath: INTERNAL_ROUTE_PATHS[key], locale: checkLocale || loc };
            }
        }
    }

    // Check internal Next.js paths directly
    for (const [key, intPath] of Object.entries(INTERNAL_ROUTE_PATHS) as [RouteKey, string][]) {
        if (intPath && intPath.toLowerCase() === pathToCheck.toLowerCase()) {
            return { routeKey: key, internalPath: intPath, locale: checkLocale };
        }
    }

    // Check legacy aliases
    const legacyAliases: Record<string, RouteKey> = {
        '/climatisation': 'airConditioning',
        '/bureau-etude': 'engineeringOffice',
        '/pourquoi-gainable': 'whyDuctedExpert',
        '/labels': 'verifiedExpert',
        '/trouver-installateur': 'findInstaller',
        '/cgu': 'termsOfUse',
        '/cgv': 'termsOfSale',
        '/mentions-legales': 'legalNotice',
        '/politique-confidentialite': 'privacyPolicy',
        '/politique-cookies': 'cookiesPolicy',
    };

    if (legacyAliases[pathToCheck.toLowerCase()]) {
        const key = legacyAliases[pathToCheck.toLowerCase()];
        return { routeKey: key, internalPath: INTERNAL_ROUTE_PATHS[key], locale: checkLocale };
    }

    return null;
}

export function getLocalizedAlternates(routeKey: RouteKey) {
    const base = 'https://www.ductedexpert.com';
    const m = LOCALIZED_ROUTES[routeKey];
    return {
        'en': `${base}/en${m.en}`,
        'de': `${base}/de${m.de}`,
        'fi': `${base}/fi${m.fi}`,
        'es': `${base}/es${m.es}`,
        'it': `${base}/it${m.it}`,
        'ar': `${base}/ar${m.ar}`,
        'ar-SA': `${base}/ar${m.ar}`,
        'ar-AE': `${base}/ar${m.ar}`,
        'ar-QA': `${base}/ar${m.ar}`,
        'x-default': `${base}/en${m.en}`,
    };
}

export function getAlternatesUrls(pathname: string) {
    const route = findRouteByPath(pathname);
    if (route) {
        return getLocalizedAlternates(route.routeKey);
    }
    const base = 'https://www.ductedexpert.com';
    const clean = stripLocalePrefix(pathname);
    const suffix = clean === '/' ? '' : clean;
    return {
        'en': `${base}/en${suffix}`,
        'de': `${base}/de${suffix}`,
        'fi': `${base}/fi${suffix}`,
        'es': `${base}/es${suffix}`,
        'it': `${base}/it${suffix}`,
        'ar': `${base}/ar${suffix}`,
        'ar-SA': `${base}/ar${suffix}`,
        'ar-AE': `${base}/ar${suffix}`,
        'ar-QA': `${base}/ar${suffix}`,
        'x-default': `${base}/en${suffix}`,
    };
}

/**
 * Canonical DB value translations so existing DB records from Gainable.fr
 * and new international records match seamlessly across all 5 languages.
 */
export const DB_VALUE_TRANSLATIONS: Record<string, Record<Locale, string>> = {
    // Technologies
    "Climatisation gainable": {
        en: "Ducted Air Conditioning",
        de: "Kanal-Klimaanlage",
        fi: "Kanavailmastointi",
        es: "Aire Acondicionado por Conductos",
        it: "Climatizzazione Canalizzata",
        ar: "تكييف مركزي مخفي (دكت)"
    },
    "PAC Air-Air": {
        en: "Air-to-Air Heat Pump",
        de: "Luft-Luft-Wärmepumpe",
        fi: "Ilma-ilmalämpöpumppu",
        es: "Bomba de Calor Aire-Aire",
        it: "Pompa di Calore Aria-Aria",
        ar: "مضخة حرارية هواء-هواء"
    },
    "PAC Air-Eau": {
        en: "Air-to-Water Heat Pump",
        de: "Luft-Wasser-Wärmepumpe",
        fi: "Ilma-vesilämpöpumppu",
        es: "Bomba de Calor Aire-Agua (Aerotermia)",
        it: "Pompa di Calore Aria-Acqua",
        ar: "مضخة حرارية هواء-ماء"
    },
    "VRV": {
        en: "VRV System",
        de: "VRV-System",
        fi: "VRV-järjestelmä",
        es: "Sistema VRV",
        it: "Sistema VRV",
        ar: "نظام VRV"
    },
    "DRV": {
        en: "VRF System",
        de: "VRF-System",
        fi: "VRF-järjestelmä",
        es: "Sistema VRF",
        it: "Sistema VRF",
        ar: "نظام VRF / تدفق متغير"
    },
    "CTA": {
        en: "Air Handling Unit (AHU)",
        de: "Raumlufttechnische Anlage (RLT)",
        fi: "Ilmanvaihtokone (IV-kone)",
        es: "Unidad de Tratamiento de Aire (UTA)",
        it: "Unità di Trattamento Aria (UTA)",
        ar: "وحدة مناولة الهواء (AHU)"
    },
    "Console": {
        en: "Floor Console Unit",
        de: "Truhengerät",
        fi: "Lattiamalli",
        es: "Consola de Suelo",
        it: "Console a Pavimento",
        ar: "وحدة كونسول أرضية"
    },
    "Cassette": {
        en: "Ceiling Cassette",
        de: "Deckenkassette",
        fi: "Kattokasetti",
        es: "Cassette de Techo",
        it: "Cassetta a Soffitto",
        ar: "كاسيت سقفي"
    },
    "PAC CO2": {
        en: "CO2 Heat Pump",
        de: "CO2-Wärmepumpe",
        fi: "CO2-lämpöpumppu",
        es: "Bomba de Calor CO2",
        it: "Pompa di Calore CO2",
        ar: "مضخة حرارية CO2"
    },
    "PAC Eau Glacée": {
        en: "Chilled Water System (Chiller)",
        de: "Kaltwassersatz (Chiller)",
        fi: "Vedenjäähdytin (Chiller)",
        es: "Enfriadora de Agua (Chiller)",
        it: "Gruppo Frigorifero (Chiller)",
        ar: "نظام مياه مثلجة (تشيلر)"
    },
    "Split": {
        en: "Single Split System",
        de: "Single-Split-Klimaanlage",
        fi: "Split-ilmalämpöpumppu",
        es: "Split Mural",
        it: "Climatizzatore Split",
        ar: "مكيف سبليت جداري"
    },
    "Multi-Split": {
        en: "Multi-Split System",
        de: "Multi-Split-Klimaanlage",
        fi: "Multi-Split-järjestelmä",
        es: "Sistema Multi-Split",
        it: "Sistema Multi-Split",
        ar: "نظام متعدد السبليت"
    },

    // Building types (Batiments)
    "Maison Individuelle": {
        en: "Single-Family Home / Villa",
        de: "Einfamilienhaus / Villa",
        fi: "Omakotitalo / Huvila",
        es: "Vivienda Unifamiliar / Chalet",
        it: "Casa Indipendente / Villa",
        ar: "فيلا سكنية / منزل مستقل"
    },
    "Appartement": {
        en: "Apartment / Flat",
        de: "Wohnung / Apartment",
        fi: "Kerrostaloasunto",
        es: "Apartamento / Piso",
        it: "Appartamento",
        ar: "شقة سكنية"
    },
    "Immeuble Collectif": {
        en: "Residential Building",
        de: "Mehrfamilienhaus / Wohngebäude",
        fi: "Asuinkerrostalo",
        es: "Edificio Residencial",
        it: "Condominio / Edificio Residenziale",
        ar: "مبنى سكني / عمارة"
    },
    "Locaux Professionnels": {
        en: "Commercial Offices",
        de: "Büro- & Gewerberäume",
        fi: "Toimitilat & Toimistot",
        es: "Oficinas y Locales Profesionales",
        it: "Uffici e Locali Professionali",
        ar: "مكاتب ومقرات إدارية"
    },
    "Commerces": {
        en: "Retail & Shops",
        de: "Einzelhandel & Geschäfte",
        fi: "Liiketilat & Myymälät",
        es: "Comercios y Tiendas",
        it: "Negozi e Attività Commerciali",
        ar: "محلات ومراكز تجارية"
    },
    "Industrie": {
        en: "Industrial Facilities",
        de: "Industrieanlagen",
        fi: "Teollisuustilat",
        es: "Naves Industriales",
        it: "Impianti Industriali",
        ar: "منشآت ومستودعات صناعية"
    },
    "Hôtellerie / Restauration": {
        en: "Hotels & Restaurants",
        de: "Hotellerie & Gastronomie",
        fi: "Hotellit & Ravintolat",
        es: "Hotelería y Restauración",
        it: "Hotel e Ristorazione",
        ar: "فنادق ومطاعم"
    },
    "Santé (Hôpitaux, Cliniques)": {
        en: "Healthcare (Hospitals, Clinics)",
        de: "Gesundheitswesen (Kliniken, Praxen)",
        fi: "Terveydenhuolto (Sairaalat, Klinikat)",
        es: "Salud (Hospitales, Clínicas)",
        it: "Sanità (Ospedali, Cliniche)",
        ar: "مستشفيات ومراكز صحية"
    },

    // Interventions Climatisation
    "Installation": {
        en: "Installation & Commissioning",
        de: "Installation & Inbetriebnahme",
        fi: "Asennus & Käyttöönotto",
        es: "Instalación y Puesta en Marcha",
        it: "Installazione e Messa in Servizio",
        ar: "توريد وتركيب وتشغيل"
    },
    "Dimensionnement": {
        en: "System Sizing & Load Calculation",
        de: "Dimensionierung & Heiz-/Kühllast",
        fi: "Mitoitus & Teholaskenta",
        es: "Dimensionamiento y Cálculo de Cargas",
        it: "Dimensionamento Impianto",
        ar: "حساب الأحمال وتصميم المنظومة"
    },
    "Dépannage": {
        en: "Repair & Troubleshooting",
        de: "Reparatur & Störungsdienst",
        fi: "Huolto & Vikakorjaus",
        es: "Reparación y Averías",
        it: "Riparazione e Assistenza",
        ar: "إصلاح وصيانة طارئة"
    },
    "Nettoyage & Entretien": {
        en: "Maintenance & Servicing",
        de: "Wartung & Reinigung",
        fi: "Puhdistus & Vuosihuolto",
        es: "Mantenimiento y Limpieza",
        it: "Manutenzione e Sanificazione",
        ar: "تنظيف وصيانة دورية"
    },
    "Étude de faisabilité": {
        en: "Feasibility Study",
        de: "Machbarkeitsstudie",
        fi: "Toteutettavuustutkimus",
        es: "Estudio de Viabilidad",
        it: "Studio di Fattibilità",
        ar: "دراسة الجدوى الفنية"
    },
    "Audit Énergétique": {
        en: "Energy Audit",
        de: "Energieaudit",
        fi: "Energiakatselmus",
        es: "Auditoría Energética",
        it: "Diagnosi Energetica",
        ar: "تدقيق فني وكفاءة الطاقة"
    },
    "Audits Énergétiques": {
        en: "Energy Audits",
        de: "Energieaudits",
        fi: "Energiakatselmukset",
        es: "Auditorías Energéticas",
        it: "Diagnosi Energetiche",
        ar: "تدقيق كفاءة الطاقة"
    },
    "Autre": {
        en: "Other",
        de: "Sonstiges",
        fi: "Muu",
        es: "Otro",
        it: "Altro",
        ar: "أخرى"
    },

    // Interventions Bureau d'étude
    "Études Thermiques": {
        en: "Thermal Engineering Studies",
        de: "Thermische Berechnungen & Studien",
        fi: "Lämpötekniset Laskelmat",
        es: "Estudios Térmicos",
        it: "Studi Termotecnici",
        ar: "دراسات واستشارات هندسية حرارية"
    },
    "RE2020": {
        en: "Energy Efficiency & Building Compliance",
        de: "GEG / Energieeffizienz-Nachweis",
        fi: "Energiatehokkuusmääräykset",
        es: "Certificación y Normativa Energética",
        it: "Conformità Energetica Edilizia",
        ar: "كفاءة الطاقة والامتثال للمواصفات"
    },
    "Dimensionnement CVC": {
        en: "HVAC Duct & Load Sizing",
        de: "HLK- & Kanalnetz-Dimensionierung",
        fi: "LVI- ja Kanavistomitoitus",
        es: "Dimensionamiento HVAC y Conductos",
        it: "Dimensionamento HVAC e Canali",
        ar: "حساب الأحمال وتصميم شبكات الدكت"
    },
    "Calculs & Plans": {
        en: "CAD / BIM Drawings & Calculations",
        de: "CAD / BIM-Planung & Berechnungen",
        fi: "CAD / BIM-suunnitelmat & Laskelmat",
        es: "Cálculos y Planos CAD / BIM",
        it: "Calcoli e Progetti CAD / BIM",
        ar: "مخططات تنفيذية CAD / BIM وحسابات"
    },
    "Simulations Techniques": {
        en: "Dynamic Thermal Simulations",
        de: "Thermische Gebäudesimulation",
        fi: "Dynaamiset Lämpösimuloinnit",
        es: "Simulaciones Térmicas Dinámicas",
        it: "Simulazioni Termiche Dinamiche",
        ar: "محاكاة حرارية ديناميكية"
    },
    "Maîtrise d'Œuvre (MOE)": {
        en: "Project Management & Supervision",
        de: "Bauleitung & Fachbauüberwachung",
        fi: "Projektinjohto & Valvonta",
        es: "Dirección de Obra y Proyectos",
        it: "Direzione Lavori e Progettazione",
        ar: "إشراف هندسي وإدارة مشاريع"
    },

    // Certifications
    "RGE QualiPAC": {
        en: "Certified Heat Pump Installer",
        de: "Zertifizierter Wärmepumpen-Fachbetrieb",
        fi: "Sertifioitu Lämpöpumppuasentaja",
        es: "Instalador Certificado de Bombas de Calor",
        it: "Installatore Certificato Pompe di Calore",
        ar: "مقاول معتمد للمضخات الحرارية"
    },
    "Capacité Fluides Frigorigènes": {
        en: "F-Gas / Refrigerant Handling Certified",
        de: "Kälteschein / F-Gase-Zertifizierung",
        fi: "Kylmäainelupa (Tukes / F-kaasu)",
        es: "Certificado de Gases Fluorados",
        it: "Patentino Frigoristi (F-Gas)",
        ar: "شهادة التعامل مع وسائط التبريد (F-Gas)"
    },

    // Expert types
    "cvc_climatisation": {
        en: "Ducted HVAC & Air Conditioning Contractor",
        de: "Fachbetrieb für Klima- & Wärmepumpentechnik",
        fi: "LVI- ja Ilmastointiurakoitsija",
        es: "Empresa Instaladora de Climatización",
        it: "Azienda Installatrice Climatizzazione & HVAC",
        ar: "مقاول تكييف مركزي ومضخات حرارية"
    },
    "bureau_detude": {
        en: "HVAC & Thermal Engineering Office",
        de: "Ingenieurbüro für TGA & Klimatechnik",
        fi: "LVI- ja Lämpösuunnittelutoimisto",
        es: "Ingeniería Térmica y Oficina Técnica HVAC",
        it: "Studio Termotecnico e Progettazione HVAC",
        ar: "مكتب دراسات واستشارات هندسية حرارية"
    },

    // Countries
    "France": { en: "France", de: "Frankreich", fi: "Ranska", es: "Francia", it: "Francia",
        ar: "فرنسا" },
    "Suisse": { en: "Switzerland", de: "Schweiz", fi: "Sveitsi", es: "Suiza", it: "Svizzera",
        ar: "سويسرا" },
    "Belgique": { en: "Belgium", de: "Belgien", fi: "Belgia", es: "Bélgica", it: "Belgio",
        ar: "بلجيكا" },
    "Maroc": { en: "Morocco", de: "Marokko", fi: "Marokko", es: "Marruecos", it: "Marocco",
        ar: "المغرب" },
    "United Kingdom": { en: "United Kingdom", de: "Vereinigtes Königreich", fi: "Yhdistynyt kuningaskunta", es: "Reino Unido", it: "Regno Unito",
        ar: "المملكة المتحدة" },
    "United States": { en: "United States", de: "USA", fi: "Yhdysvallat", es: "Estados Unidos", it: "Stati Uniti",
        ar: "الولايات المتحدة" },
    "Germany": { en: "Germany", de: "Deutschland", fi: "Saksa", es: "Alemania", it: "Germania",
        ar: "ألمانيا" },
    "Finland": { en: "Finland", de: "Finnland", fi: "Suomi", es: "Finlandia", it: "Finlandia",
        ar: "فنلندا" },
    "Spain": { en: "Spain", de: "Spanien", fi: "Espanja", es: "España", it: "Spagna",
        ar: "إسبانيا" },
    "Italy": { en: "Italy", de: "Italien", fi: "Italia", es: "Italia", it: "Italia",
        ar: "إيطاليا" },
    "Canada": { en: "Canada", de: "Kanada", fi: "Kanada", es: "Canadá", it: "Canada",
        ar: "كندا" },
    "Saudi Arabia": { en: "Saudi Arabia", de: "Saudi-Arabien", fi: "Saudi-Arabia", es: "Arabia Saudita", it: "Arabia Saudita", ar: "المملكة العربية السعودية" },
    "United Arab Emirates": { en: "United Arab Emirates", de: "Vereinigte Arabische Emirate", fi: "Arabiemiirikunnat", es: "Emiratos Árabes Unidos", it: "Emirati Arabi Uniti", ar: "الإمارات العربية المتحدة" },
    "Qatar": { en: "Qatar", de: "Katar", fi: "Qatar", es: "Catar", it: "Qatar", ar: "قطر" },
    "Australia": { en: "Australia", de: "Australien", fi: "Australia", es: "Australia", it: "Australia",
        ar: "أستراليا" },
};

export function translateTerm(term: string, locale: Locale): string {
    const entry = DB_VALUE_TRANSLATIONS[term];
    if (entry && entry[locale]) return entry[locale];
    return term;
}

export const INTERNATIONAL_COUNTRIES = [
    { value: "United Kingdom", flag: "🇬🇧" },
    { value: "United States", flag: "🇺🇸" },
    { value: "Germany", flag: "🇩🇪" },
    { value: "Finland", flag: "🇫🇮" },
    { value: "Spain", flag: "🇪🇸" },
    { value: "Italy", flag: "🇮🇹" },
    { value: "France", flag: "🇫🇷" },
    { value: "Suisse", flag: "🇨🇭" },
    { value: "Belgique", flag: "🇧🇪" },
    { value: "Canada", flag: "🇨🇦" },
    { value: "Australia", flag: "🇦🇺" },
    { value: "Maroc", flag: "🇲🇦" },
    { value: "Saudi Arabia", flag: "🇸🇦" },
    { value: "United Arab Emirates", flag: "🇦🇪" },
    { value: "Qatar", flag: "🇶🇦" },

];

export const DICTIONARY: Record<Locale, {
    siteName: string;
    nav: {
        experts: string;
        climatisation: string;
        bureauEtude: string;
        verifiedExpert: string;
        whyUs: string;
        contact: string;
        proSpace: string;
        myAccount: string;
        dashboard: string;
        publicProfile: string;
        logout: string;
        loginTitle: string;
        email: string;
        password: string;
        rememberMe: string;
        signIn: string;
        signingIn: string;
        forgotPassword: string;
        noAccount: string;
        createAccount: string;
    };
    home: {
        metaTitle: string;
        metaDesc: string;
        filterLabel: string;
        showFilters: string;
        hideFilters: string;
        expertTypeFilter: string;
        hvacCompany: string;
        engineeringOffice: string;
        technologiesFilter: string;
        buildingTypeFilter: string;
        countryFilter: string;
        cityPlaceholder: string;
        searchBtn: string;
        nearbyExperts: string;
        loadingExperts: string;
        viewProfile: string;
        freeQuote: string;
        selectedPros: string;
        freeNoCommitment: string;
        requestQuote: string;
        maxSelectionAlert: string;
        geoBadge: string;
        geoTitle: string;
        geoText: string;
        geoCheck1: string;
        geoCheck2: string;
        geoCheck3: string;
        seoMainTitle: string;
        seoBlock1Title: string;
        seoBlock1Text: string;
        seoBlock2Title: string;
        seoBlock2Text: string;
        seoBlock3Title: string;
        seoBlock3Text: string;
        seoBlock4Title: string;
        seoBlock4Text: string;
        faqTitle: string;
        faq: { question: string; answer: string }[];
    };
    climatisationPage: {
        metaTitle: string;
        metaDesc: string;
        heroTitle1: string;
        heroTitle2: string;
        heroSubtitleHighlight: string;
        heroSubtitleRest: string;
        findExpertBtn: string;
        becomeMemberBtn: string;
        freeQuotesNote: string;
        sectionWhyTitle: string;
        sectionWhyText: string;
        benefits: { title: string; desc: string }[];
    };
    bureauPage: {
        metaTitle: string;
        metaDesc: string;
        heroTitle1: string;
        heroTitle2: string;
        heroLead: string;
        heroDesc: string;
        findOfficeBtn: string;
        joinOfficeBtn: string;
        roleTitle: string;
        roleText: string;
        roleQuote: string;
        studiesTitle: string;
        studiesList: string[];
    };
    signup: {
        metaTitle: string;
        metaDesc: string;
        visionTitle: string;
        visionP1: string;
        visionP2: string;
        visionBoxTitle: string;
        visionBullets: string[];
        promoBanner: string;
        chooseTitle1: string;
        chooseTitleHighlight: string;
        chooseTitle2: string;
        chooseSubtitle: string;
        zeroCommissionBadge: string;
        recommendedBadge: string;
        freeLabel: string;
        first100Badge: string;
        yearly: string;
        monthly: string;
        perYearExclTax: string;
        perMonthExclTax: string;
        privilegeRate: string;
        selectOfferBtn: string;
        selectedBtn: string;
        officeCardTitle: string;
        officeCardSub: string;
        officeFeatures: string[];
        hvacCardTitle: string;
        hvacCardSub: string;
        hvacFeatures: string[];
        step1Title: string;
        repNameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        passwordLabel: string;
        confirmPasswordLabel: string;
        step2Title: string;
        countryLabel: string;
        companyIdLabel: string;
        companyIdPlaceholder: string;
        companyNameLabel: string;
        taxNumberLabel: string;
        addressLabel: string;
        postalCodePlaceholder: string;
        cityPlaceholder: string;
        descriptionLabel: string;
        descriptionPlaceholder: string;
        step3Title: string;
        buildingsHeading: string;
        technologiesHeading: string;
        interventionsHeading: string;
        brandsHeading: string;
        certificationsHeading: string;
        summaryTitle: string;
        selectedPlanLabel: string;
        subtotalExclTax: string;
        vatLabel: string;
        totalInclTax: string;
        noHiddenRenewal: string;
        instantVisibility: string;
        techSupportIncluded: string;
        promoCodeLabel: string;
        submitFreeBtn: string;
        submitPayBtn: string;
        secureStripeNote: string;
        termsAcceptNote: string;
        requiredFieldsAlert: string;
        passwordMismatchAlert: string;
        successTitle: string;
        successText: string;
        backHomeBtn: string;
    };
    footer: {
        legalNotice: string;
        privacyPolicy: string;
        cookiesPolicy: string;
        termsOfUse: string;
        termsOfSale: string;
        findInstaller: string;
        whyDuctedExpert: string;
        contact: string;
        proSpace: string;
        rightsReserved: string;
    };
}> = {
    en: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "Our Experts",
            climatisation: "Air Conditioning & Heating",
            bureauEtude: "Engineering Office",
            verifiedExpert: "Verified Expert",
            whyUs: "Why DuctedExpert",
            contact: "Contact",
            proSpace: "Pro Portal",
            myAccount: "My Account",
            dashboard: "Go to Dashboard",
            publicProfile: "View Public Profile",
            logout: "Sign Out",
            loginTitle: "Professional Login",
            email: "Email",
            password: "Password",
            rememberMe: "Remember me",
            signIn: "Sign In",
            signingIn: "Signing in...",
            forgotPassword: "Forgot password?",
            noAccount: "Don't have an account?",
            createAccount: "Register Now",
        },
        home: {
            metaTitle: "Ducted Air Conditioning & Heat Pump Installers | DuctedExpert.com",
            metaDesc: "Find certified ducted air conditioning, reversible heat pump, VRV/VRF installers and HVAC thermal engineering offices near you. Free quotes & direct contact.",
            filterLabel: "Filters:",
            showFilters: "Show",
            hideFilters: "Hide",
            expertTypeFilter: "Expert Type",
            hvacCompany: "Ducted HVAC & Air Conditioning Contractor",
            engineeringOffice: "Thermal & HVAC Engineering Office",
            technologiesFilter: "Technologies",
            buildingTypeFilter: "Building Type",
            countryFilter: "Country",
            cityPlaceholder: "City, region, postal code...",
            searchBtn: "Search",
            nearbyExperts: "Certified HVAC & Ducted Air Conditioning Experts",
            loadingExperts: "Loading experts...",
            viewProfile: "View Profile",
            freeQuote: "Free Quote",
            selectedPros: "Selected Professionals",
            freeNoCommitment: "100% Free & No Obligation",
            requestQuote: "Request a Quote",
            maxSelectionAlert: "You can select up to 5 professionals maximum.",
            geoBadge: "Official Network & Certified HVAC Directory",
            geoTitle: "Where to find a certified ducted air conditioning installer or HVAC engineering office?",
            geoText: "DuctedExpert.com is the international platform connecting homeowners and businesses with vetted ducted air conditioning contractors, heat pump specialists, VRV/VRF installers, and HVAC thermal engineering offices across Europe and worldwide.",
            geoCheck1: "Verified HVAC Contractors",
            geoCheck2: "0% Commission • Direct Contact",
            geoCheck3: "Residential, Commercial & Industrial",
            seoMainTitle: "Ducted Air Conditioning & Heat Pump Specialists: The International Expert Network",
            seoBlock1Title: "Ducted air conditioning and concealed reversible systems",
            seoBlock1Text: "DuctedExpert.com connects you directly with specialized installers in concealed ceiling ducted air conditioning, multizone dampers (Airzone, Koolnova), and quiet climate control.",
            seoBlock2Title: "Heat pump and high-efficiency heating specialists",
            seoBlock2Text: "Compare qualified professionals specializing in air-to-air and air-to-water heat pumps, VRV/VRF systems, chillers, and commercial air handling units (AHU).",
            seoBlock3Title: "HVAC & thermal engineering offices",
            seoBlock3Text: "Partner with independent HVAC engineering consultancies for thermal load calculations, ductwork sizing, CAD/BIM design, and energy efficiency compliance.",
            seoBlock4Title: "Direct connection with zero middleman fees",
            seoBlock4Text: "Select up to 5 certified professionals in your area and request tailored quotes directly without lead resellers or commission markups.",
            faqTitle: "Frequently Asked Questions: Ducted Air Conditioning & Heat Pumps",
            faq: [
                {
                    question: "What is ducted air conditioning and what are its advantages?",
                    answer: "Ducted air conditioning is a concealed reversible heating and cooling system. The indoor unit is hidden in a false ceiling or attic and distributes conditioned air through discreet grilles, offering whisper-quiet acoustics and seamless interior aesthetics."
                },
                {
                    question: "How do I find a qualified HVAC installer or engineering office on DuctedExpert.com?",
                    answer: "Use our interactive map and search filters to sort specialists by technology (ducted AC, heat pump, VRV/VRF), building type (villa, apartment, commercial office, hotel), and city."
                },
                {
                    question: "How much does a ducted air conditioning installation cost?",
                    answer: "Installation costs typically range between €80 and €150 per m² depending on zoning controls, heat pump capacity, ductwork complexity, and equipment brand (Daikin, Mitsubishi, Toshiba, Panasonic, LG)."
                },
                {
                    question: "Is requesting a quote on DuctedExpert.com completely free?",
                    answer: "Yes. Requesting quotes and contacting HVAC contractors or engineering offices through DuctedExpert.com is 100% free with zero commission added to your quote."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "Ducted Air Conditioning & Reversible Heat Pump Installers | DuctedExpert.com",
            metaDesc: "Find a specialized installer for concealed ducted air conditioning, air-to-air & air-to-water heat pumps, and VRV/VRF climate systems. Free quotes.",
            heroTitle1: "FIND YOUR CERTIFIED",
            heroTitle2: "DUCTED AIR CONDITIONING & HEAT PUMP INSTALLER",
            heroSubtitleHighlight: "The international reference platform",
            heroSubtitleRest: "connecting you with top HVAC contractors and climate control specialists.",
            findExpertBtn: "Find an Expert",
            becomeMemberBtn: "Join DuctedExpert.com Network",
            freeQuotesNote: "Free quotes • Direct contact with zero commission",
            sectionWhyTitle: "Why choose concealed ducted air conditioning & heat pumps?",
            sectionWhyText: "Ducted air conditioning combines year-round thermal comfort (heating in winter, cooling in summer) with invisible architectural integration and room-by-room smart zoning.",
            benefits: [
                { title: "Invisible Aesthetics", desc: "Only slim linear diffusers or discreet grilles are visible in your ceilings or walls." },
                { title: "Acoustic Comfort", desc: "The fan coil unit is installed away from living spaces for whisper-quiet operation." },
                { title: "Room-by-Room Zoning", desc: "Independent smart thermostats in every room optimize comfort and cut energy consumption." }
            ]
        },
        bureauPage: {
            metaTitle: "HVAC & Thermal Engineering Offices: Duct Sizing & Load Calculations | DuctedExpert.com",
            metaDesc: "Find an HVAC and thermal engineering office for ducted air conditioning design, heat load calculations, CAD/BIM plans, and energy audits.",
            heroTitle1: "HVAC & THERMAL",
            heroTitle2: "ENGINEERING OFFICES",
            heroLead: "Optimize thermal comfort, reduce energy consumption, and secure your HVAC installations from new builds to major renovations.",
            heroDesc: "Thermal load calculations, duct network sizing, VRV/VRF schematics, ventilation, and energy audits: connect with specialized HVAC engineering firms.",
            findOfficeBtn: "Find an Engineering Office",
            joinOfficeBtn: "Register as an Engineering Office",
            roleTitle: "What does an HVAC & thermal engineering office do?",
            roleText: "An HVAC engineering office analyzes your building envelope, accurately sizes heating, cooling, and ventilation equipment, designs balanced ductwork with low acoustic pressure, and ensures regulatory compliance.",
            roleQuote: "\"The goal: maximum indoor comfort with minimum energy consumption and reliable, long-lasting installations.\"",
            studiesTitle: "Which engineering studies can our experts perform?",
            studiesList: [
                "Heating & cooling thermal load calculations",
                "Ducted air conditioning & airflow network sizing",
                "VRV / VRF, heat pump & hydronic system design",
                "2D/3D CAD & BIM execution drawings",
                "Energy audits & building efficiency compliance",
                "Project supervision & commissioning support"
            ]
        },
        signup: {
            metaTitle: "Pro Registration - Join DuctedExpert.com | HVAC & Engineering Network",
            metaDesc: "Join DuctedExpert.com as a ducted air conditioning contractor or HVAC engineering office. Receive direct qualified leads with 0% commission.",
            visionTitle: "OUR VISION",
            visionP1: "The HVAC market has evolved rapidly. Between expensive ad campaigns and lead-reselling platforms that send the same request to ten competitors, high-quality contractors need a transparent platform built on expertise.",
            visionP2: "DuctedExpert.com connects clients directly with qualified HVAC contractors and thermal engineering offices—without middlemen or commissions.",
            visionBoxTitle: "DuctedExpert.com was built to deliver:",
            visionBullets: [
                "Direct visibility for specialized HVAC & ducted AC professionals,",
                "Qualified project requests sent directly to your company,",
                "0% commission on your quotes and installations,",
                "Powerful SEO & AI tools to showcase your projects internationally."
            ],
            promoBanner: "⚡ HVAC EXPERT PRIVILEGE OFFER: €1,200 EXCL. TAX / YEAR INSTEAD OF €1,550 • €350 INSTANT DISCOUNT",
            chooseTitle1: "Choose the plan that will",
            chooseTitleHighlight: "accelerate",
            chooseTitle2: "your business",
            chooseSubtitle: "Grow your international & local visibility with our dedicated directory profile, interactive map, and integrated SEO tools.",
            zeroCommissionBadge: "Verified & Secure Platform • 0% commission on your leads",
            recommendedBadge: "Recommended",
            freeLabel: "Free",
            first100Badge: "For the first 100 offices",
            yearly: "Annual",
            monthly: "Monthly",
            perYearExclTax: " / year excl. tax",
            perMonthExclTax: " / month excl. tax",
            privilegeRate: "Privilege Rate",
            selectOfferBtn: "Select this plan",
            selectedBtn: "Selected",
            officeCardTitle: "Engineering Office",
            officeCardSub: "For HVAC & thermal engineering firms",
            officeFeatures: [
                "0% commission on client contacts",
                "Direct client inquiries (no lead reselling)",
                "International visibility on DuctedExpert.com",
                "Dedicated company showcase page",
                "Interactive map placement",
                "Unlimited direct leads & contacts"
            ],
            hvacCardTitle: "HVAC & Air Conditioning Company",
            hvacCardSub: "For ducted AC & heat pump installers",
            hvacFeatures: [
                "0% commission on client contacts",
                "Direct client inquiries (no lead reselling)",
                "Premium placement (Directory + Map)",
                "Verified Expert badge & profile",
                "Direct installation & quote requests",
                "Full access to dashboard & SEO tools",
                "Clients choose and contact you directly"
            ],
            step1Title: "Your Contact Details",
            repNameLabel: "Representative Full Name",
            emailLabel: "Professional Email",
            phoneLabel: "Phone Number",
            passwordLabel: "Password",
            confirmPasswordLabel: "Confirm Password",
            step2Title: "Your Company (Instant Registration - No Verification Required)",
            countryLabel: "Country",
            companyIdLabel: "Company Registration / Business ID (Optional)",
            companyIdPlaceholder: "Registration number, VAT or Tax ID",
            companyNameLabel: "Company Name",
            taxNumberLabel: "VAT / Tax Number (Optional)",
            addressLabel: "Street Address",
            postalCodePlaceholder: "Postal / ZIP Code",
            cityPlaceholder: "City",
            descriptionLabel: "Company Description",
            descriptionPlaceholder: "Describe your HVAC expertise, services, and service area...",
            step3Title: "Technical Expertise & Filters",
            buildingsHeading: "Building Types Served",
            technologiesHeading: "HVAC Technologies Installed",
            interventionsHeading: "Services & Interventions",
            brandsHeading: "Brands Installed",
            certificationsHeading: "Certifications & Qualifications",
            summaryTitle: "Order Summary",
            selectedPlanLabel: "Selected Plan",
            subtotalExclTax: "Subtotal (Excl. Tax)",
            vatLabel: "VAT (20%)",
            totalInclTax: "Total (Incl. Tax)",
            noHiddenRenewal: "Transparent subscription terms",
            instantVisibility: "Immediate account creation",
            techSupportIncluded: "Dedicated technical support included",
            promoCodeLabel: "Partner / Promo Code (Optional)",
            submitFreeBtn: "Complete Registration",
            submitPayBtn: "Pay & Complete Registration",
            secureStripeNote: "Secure payment powered by Stripe",
            termsAcceptNote: "By validating, you accept our Terms of Service and Privacy Policy.",
            requiredFieldsAlert: "Please fill in all required fields (*).",
            passwordMismatchAlert: "Passwords do not match.",
            successTitle: "Registration Completed!",
            successText: "Your professional account has been registered on DuctedExpert.com. You can now access your dashboard.",
            backHomeBtn: "Back to Home"
        },
        footer: {
            legalNotice: "Legal Notice",
            privacyPolicy: "Privacy Policy",
            cookiesPolicy: "Cookie Policy",
            termsOfUse: "Terms of Use",
            termsOfSale: "Pro Terms of Sale",
            findInstaller: "Find an HVAC Installer",
            whyDuctedExpert: "Why DuctedExpert.com",
            contact: "Contact",
            proSpace: "Pro Portal",
            rightsReserved: "All rights reserved."
        }
    },
    de: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "Unsere Experten",
            climatisation: "Klimaanlagen & Wärmepumpen",
            bureauEtude: "Ingenieurbüro (TGA)",
            verifiedExpert: "Geprüfter Experte",
            whyUs: "Warum DuctedExpert",
            contact: "Kontakt",
            proSpace: "Profi-Bereich",
            myAccount: "Mein Konto",
            dashboard: "Zum Dashboard",
            publicProfile: "Öffentliches Profil",
            logout: "Abmelden",
            loginTitle: "Profi-Login",
            email: "E-Mail",
            password: "Passwort",
            rememberMe: "Angemeldet bleiben",
            signIn: "Anmelden",
            signingIn: "Anmeldung...",
            forgotPassword: "Passwort vergessen?",
            noAccount: "Noch kein Konto?",
            createAccount: "Konto erstellen",
        },
        home: {
            metaTitle: "Kanal-Klimaanlage & Wärmepumpe Fachbetriebe | DuctedExpert.com",
            metaDesc: "Finden Sie zertifizierte Fachbetriebe für Kanal-Klimaanlagen, Wärmepumpen, VRV/VRF-Systeme und TGA-Ingenieurbüros. Kostenlose Angebote & Direktkontakt.",
            filterLabel: "Filter:",
            showFilters: "Anzeigen",
            hideFilters: "Ausblenden",
            expertTypeFilter: "Experten-Typ",
            hvacCompany: "Fachbetrieb für Klimatechnik & Wärmepumpen",
            engineeringOffice: "TGA- & Klimatechnik-Ingenieurbüro",
            technologiesFilter: "Technologien",
            buildingTypeFilter: "Gebäudetyp",
            countryFilter: "Land",
            cityPlaceholder: "Stadt, Postleitzahl, Region...",
            searchBtn: "Suchen",
            nearbyExperts: "Zertifizierte Klima- & Wärmepumpen-Experten",
            loadingExperts: "Experten werden geladen...",
            viewProfile: "Profil ansehen",
            freeQuote: "Kostenloses Angebot",
            selectedPros: "Ausgewählte Fachbetriebe",
            freeNoCommitment: "Kostenlos & Unverbindlich",
            requestQuote: "Angebot anfordern",
            maxSelectionAlert: "Sie können maximal 5 Fachbetriebe auswählen.",
            geoBadge: "Offizielles Fachnetzwerk • Klimatechnik & TGA",
            geoTitle: "Wo findet man einen zertifizierten Fachbetrieb für Kanal-Klimaanlagen oder ein TGA-Ingenieurbüro?",
            geoText: "DuctedExpert.com ist die internationale Plattform für Kanal-Klimaanlagen, Luft-Luft- und Luft-Wasser-Wärmepumpen, VRV/VRF-Systeme sowie TGA-Ingenieurbüros für Wohn-, Gewerbe- und Industrieprojekte.",
            geoCheck1: "Qualifizierte Klima-Fachbetriebe",
            geoCheck2: "0% Provision • Direktkontakt",
            geoCheck3: "Wohnbau, Gewerbe & Industrie",
            seoMainTitle: "Kanal-Klimaanlagen & Wärmepumpen: Die Plattform für zertifizierte Experten",
            seoBlock1Title: "Experten für Kanal-Klimaanlagen und unsichtbare Klimasysteme",
            seoBlock1Text: "DuctedExpert.com vernetzt Sie direkt mit Fachbetrieben für verdeckte Decken-Klimaanlagen, Einzelraumregelung und energieeffiziente Raumklimatisierung.",
            seoBlock2Title: "Spezialisten für Wärmepumpen und moderne Heizsysteme",
            seoBlock2Text: "Finden Sie qualifizierte Installateure für Luft-Luft- und Luft-Wasser-Wärmepumpen, Multi-Split, VRV/VRF-Anlagen und RLT-Lüftungsgeräte.",
            seoBlock3Title: "TGA-Ingenieurbüros für Klimatechnik und Wärmeschutz",
            seoBlock3Text: "Beauftragen Sie spezialisierte Ingenieurbüros für Heiz- und Kühllastberechnungen, Kanalnetzdimensionierung und energetische Fachplanung.",
            seoBlock4Title: "Direkte Anfrage ohne Vermittlungsgebühren",
            seoBlock4Text: "Wählen Sie bis zu 5 Fachbetriebe aus und fordern Sie direkt kostenlose Angebote für Ihr Projekt an.",
            faqTitle: "Häufig gestellte Fragen (FAQ): Kanal-Klimaanlagen & Wärmepumpen",
            faq: [
                {
                    question: "Was ist eine Kanal-Klimaanlage und welche Vorteile bietet sie?",
                    answer: "Eine Kanal-Klimaanlage ist ein unsichtbares Heiz- und Kühlsystem. Das Innengerät wird in der Zwischendecke verborgen und verteilt die temperierte Luft geräuscharm über dezente Luftauslässe in jedem Raum."
                },
                {
                    question: "Wie finde ich einen Kälte-Klima-Fachbetrieb oder ein TGA-Ingenieurbüro auf DuctedExpert.com?",
                    answer: "Nutzen Sie unsere Karte und Suchfilter nach Technologie (Kanal-Klimaanlage, Wärmepumpe, VRV/VRF), Gebäudetyp und Standort."
                },
                {
                    question: "Was kostet die Installation einer Kanal-Klimaanlage?",
                    answer: "Die Kosten liegen meist zwischen 80 € und 150 € pro m², abhängig von Zonenregelung, Leistung und Hersteller (Daikin, Mitsubishi, Toshiba, Panasonic)."
                },
                {
                    question: "Ist die Angebotsanfrage auf DuctedExpert.com kostenlos?",
                    answer: "Ja, die Kontaktaufnahme und Angebotsanfrage bei unseren Fachbetrieben und Ingenieurbüros ist zu 100 % kostenlos und unverbindlich."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "Kanal-Klimaanlage & Wärmepumpe Installation | DuctedExpert.com",
            metaDesc: "Finden Sie Ihren Fachbetrieb für Kanal-Klimaanlagen, reversible Wärmepumpen und VRV/VRF-Systeme. Kostenlose Angebote von Kälte-Klima-Experten.",
            heroTitle1: "FINDEN SIE IHREN FACHBETRIEB FÜR",
            heroTitle2: "KANAL-KLIMAANLAGEN & WÄRMEPUMPEN",
            heroSubtitleHighlight: "Die internationale Referenzplattform",
            heroSubtitleRest: "für zertifizierte Kälte-Klima-Fachbetriebe und Wärmepumpen-Spezialisten.",
            findExpertBtn: "Experten finden",
            becomeMemberBtn: "Mitglied bei DuctedExpert.com werden",
            freeQuotesNote: "Kostenlose & unverbindliche Angebote",
            sectionWhyTitle: "Warum eine Kanal-Klimaanlage oder reversible Wärmepumpe wählen?",
            sectionWhyText: "Kanal-Klimaanlagen vereinen ganzjährigen Komfort (Heizen im Winter, Kühlen im Sommer) mit unsichtbarer Integration in der Zwischendecke.",
            benefits: [
                { title: "Unsichtbares Design", desc: "Nur dezente Lüftungsgitter oder Schlitzdurchlässe sind in Decke oder Wand sichtbar." },
                { title: "Flüsterleiser Betrieb", desc: "Das Gebläse sitzt außerhalb der Wohnräume für höchsten akustischen Komfort." },
                { title: "Einzelraumregelung", desc: "Smarte Thermostate regeln die Temperatur in jedem Raum individuell und sparen Energie." }
            ]
        },
        bureauPage: {
            metaTitle: "TGA-Ingenieurbüro für Klimatechnik & Wärmepumpen | DuctedExpert.com",
            metaDesc: "Finden Sie ein TGA-Ingenieurbüro für Heiz- und Kühllastberechnung, Kanalnetz-Dimensionierung, CAD/BIM-Planung und Energieaudits.",
            heroTitle1: "INGENIEURBÜRO FÜR",
            heroTitle2: "TGA, KLIMA- & WÄRMETECHNIK",
            heroLead: "Komfort optimieren, Energieverbrauch senken, Anlagen sicher planen: Unsere Ingenieurbüros begleiten Neubau- und Sanierungsprojekte.",
            heroDesc: "Thermische Berechnungen, Dimensionierung von Heizungs-, Klima- und Lüftungssystemen sowie CAD/BIM-Fachplanung nach Maß.",
            findOfficeBtn: "Ingenieurbüro finden",
            joinOfficeBtn: "Als Ingenieurbüro registrieren",
            roleTitle: "Welche Aufgaben übernimmt ein TGA-Ingenieurbüro?",
            roleText: "Das Ingenieurbüro analysiert Ihr Gebäude, berechnet Heiz- und Kühllasten exakt, dimensioniert Klimageräte und Kanalnetze und prüft die Einhaltung aller Energieeffizienz-Vorgaben.",
            roleQuote: "„Das Ziel: Maximaler Komfort bei minimalem Energieverbrauch und dauerhaft zuverlässige Anlagen.“",
            studiesTitle: "Welche Fachplanungen bieten unsere Ingenieurbüros an?",
            studiesList: [
                "Heiz- und Kühllastberechnungen",
                "Dimensionierung von Kanal-Klimaanlagen & Lüftungsnetzen",
                "Auslegung von Wärmepumpen & VRV/VRF-Systemen",
                "CAD- & BIM-Ausführungspläne",
                "Energieaudits & Effizienznachweise",
                "Fachbauleitung & Projektbegleitung"
            ]
        },
        signup: {
            metaTitle: "Profi-Registrierung - DuctedExpert.com | Klima- & TGA-Netzwerk",
            metaDesc: "Registrieren Sie Ihren Kälte-Klima-Fachbetrieb oder Ihr TGA-Ingenieurbüro auf DuctedExpert.com. Direkte Kundenanfragen ohne Provision.",
            visionTitle: "UNSERE VISION",
            visionP1: "Der HLK- und Klimamarkt verändert sich rasant. Zwischen teurer Online-Werbung und Lead-Portalen, die dieselbe Anfrage mehrfach verkaufen, brauchen qualifizierte Fachbetriebe eine faire Plattform.",
            visionP2: "DuctedExpert.com bringt Bauherren und Unternehmen direkt mit spezialisierten Klima-Fachbetrieben und Ingenieurbüros zusammen.",
            visionBoxTitle: "DuctedExpert.com steht für:",
            visionBullets: [
                "Gezielte Sichtbarkeit für Kälte-Klima-Fachbetriebe & TGA-Planer,",
                "Qualifizierte Kundenanfragen direkt an Ihr Unternehmen,",
                "0 % Provision auf Ihre Aufträge,",
                "Leistungsstarke SEO- & Dashboard-Tools für Ihre Reichweite."
            ],
            promoBanner: "⚡ VORTEILSANGEBOT KLIMA-EXPERTE: 1.200 € NETTO / JAHR STATT 1.550 € • 350 € SOFORTRABATT",
            chooseTitle1: "Wählen Sie das Paket für Ihr",
            chooseTitleHighlight: "Wachstum",
            chooseTitle2: "",
            chooseSubtitle: "Steigern Sie Ihre Sichtbarkeit mit einem optimierten Unternehmensprofil, interaktiver Karte und integrierten SEO-Tools.",
            zeroCommissionBadge: "Geprüfte & sichere Plattform • 0 % Provision auf Kundenkontakte",
            recommendedBadge: "Empfohlen",
            freeLabel: "Kostenlos",
            first100Badge: "Für die ersten 100 Büros",
            yearly: "Jährlich",
            monthly: "Monatlich",
            perYearExclTax: " / Jahr zzgl. MwSt.",
            perMonthExclTax: " / Monat zzgl. MwSt.",
            privilegeRate: "Vorzugspreis",
            selectOfferBtn: "Angebot wählen",
            selectedBtn: "Ausgewählt",
            officeCardTitle: "Ingenieurbüro (TGA)",
            officeCardSub: "Für TGA- & Thermik-Planungsbüros",
            officeFeatures: [
                "0 % Provision auf Kontakte",
                "Kein Weiterverkauf von Leads",
                "Internationale Sichtbarkeit auf DuctedExpert.com",
                "Eigenes Unternehmensprofil",
                "Platzierung auf der interaktiven Karte",
                "Unbegrenzte Kundenanfragen"
            ],
            hvacCardTitle: "Klima- & Wärmepumpen-Fachbetrieb",
            hvacCardSub: "Für Installateure von Klimaanlagen & Wärmepumpen",
            hvacFeatures: [
                "0 % Provision auf Kontakte",
                "Kein Weiterverkauf von Leads",
                "Premium-Platzierung (Verzeichnis + Karte)",
                "Experten-Abzeichen für maximales Vertrauen",
                "Qualifizierte Installationsanfragen",
                "Voller Zugriff auf Dashboard & SEO-Tools",
                "Direktkontakt durch den Endkunden"
            ],
            step1Title: "Ihre Kontaktdaten",
            repNameLabel: "Vor- und Nachname des Ansprechpartners",
            emailLabel: "Geschäftliche E-Mail",
            phoneLabel: "Telefonnummer",
            passwordLabel: "Passwort",
            confirmPasswordLabel: "Passwort bestätigen",
            step2Title: "Ihr Unternehmen (Sofort-Registrierung ohne Dokumentenprüfung)",
            countryLabel: "Land",
            companyIdLabel: "Handelsregister- / Unternehmensnummer (Optional)",
            companyIdPlaceholder: "z. B. HRB-Nummer oder Steuernummer",
            companyNameLabel: "Firmenname",
            taxNumberLabel: "USt-IdNr. (Optional)",
            addressLabel: "Straße und Hausnummer",
            postalCodePlaceholder: "Postleitzahl",
            cityPlaceholder: "Stadt",
            descriptionLabel: "Unternehmensbeschreibung",
            descriptionPlaceholder: "Beschreiben Sie Ihre Leistungen, Schwerpunkte und Ihr Einsatzgebiet...",
            step3Title: "Technische Fachgebiete & Filter",
            buildingsHeading: "Gebäudetypen",
            technologiesHeading: "Installierte Technologien",
            interventionsHeading: "Leistungen & Services",
            brandsHeading: "Installierte Marken",
            certificationsHeading: "Zertifizierungen",
            summaryTitle: "Zusammenfassung",
            selectedPlanLabel: "Gewähltes Paket",
            subtotalExclTax: "Zwischensumme (Netto)",
            vatLabel: "MwSt. (20%)",
            totalInclTax: "Gesamtbetrag (Brutto)",
            noHiddenRenewal: "Transparente Vertragslaufzeit",
            instantVisibility: "Sofortige Kontoerstellung",
            techSupportIncluded: "Technischer Support inklusive",
            promoCodeLabel: "Partner- / Aktionscode (Optional)",
            submitFreeBtn: "Registrierung abschließen",
            submitPayBtn: "Bezahlen & Registrieren",
            secureStripeNote: "Sichere Zahlung über Stripe",
            termsAcceptNote: "Mit dem Absenden akzeptieren Sie unsere AGB und Datenschutzbestimmungen.",
            requiredFieldsAlert: "Bitte füllen Sie alle Pflichtfelder (*) aus.",
            passwordMismatchAlert: "Die Passwörter stimmen nicht überein.",
            successTitle: "Registrierung erfolgreich!",
            successText: "Ihr Unternehmenskonto auf DuctedExpert.com wurde erstellt.",
            backHomeBtn: "Zur Startseite"
        },
        footer: {
            legalNotice: "Impressum",
            privacyPolicy: "Datenschutz",
            cookiesPolicy: "Cookie-Richtlinie",
            termsOfUse: "Nutzungsbedingungen",
            termsOfSale: "AGB für Profis",
            findInstaller: "Fachbetrieb finden",
            whyDuctedExpert: "Warum DuctedExpert.com",
            contact: "Kontakt",
            proSpace: "Profi-Bereich",
            rightsReserved: "Alle Rechte vorbehalten."
        }
    },
    fi: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "Asiantuntijat",
            climatisation: "Ilmastointi & Lämpöpumput",
            bureauEtude: "LVI-Suunnittelutoimisto",
            verifiedExpert: "Varmennettu Asiantuntija",
            whyUs: "Miksi DuctedExpert",
            contact: "Ota yhteyttä",
            proSpace: "Ammattilaisille",
            myAccount: "Oma tili",
            dashboard: "Hallintapaneeli",
            publicProfile: "Julkinen profiili",
            logout: "Kirjaudu ulos",
            loginTitle: "Ammattilaisen kirjautuminen",
            email: "Sähköposti",
            password: "Salasana",
            rememberMe: "Muista minut",
            signIn: "Kirjaudu sisään",
            signingIn: "Kirjaudutaan...",
            forgotPassword: "Unohtuiko salasana?",
            noAccount: "Eikö sinulla ole tiliä?",
            createAccount: "Luo tili",
        },
        home: {
            metaTitle: "Kanavailmastointi & Lämpöpumppu Asentajat | DuctedExpert.com",
            metaDesc: "Löydä sertifioidut kanavailmastoinnin, ilmalämpöpumppujen, ilma-vesilämpöpumppujen ja VRV/VRF-järjestelmien asentajat sekä LVI-suunnittelutoimistot.",
            filterLabel: "Suodattimet:",
            showFilters: "Näytä",
            hideFilters: "Piilota",
            expertTypeFilter: "Asiantuntijatyyppi",
            hvacCompany: "LVI-, Ilmastointi- ja Lämpöpumppuyritys",
            engineeringOffice: "LVI- ja Lämpösuunnittelutoimisto",
            technologiesFilter: "Teknologiat",
            buildingTypeFilter: "Rakennustyyppi",
            countryFilter: "Maa",
            cityPlaceholder: "Kaupunki, postinumero, alue...",
            searchBtn: "Hae",
            nearbyExperts: "Kanavailmastoinnin ja lämpöpumppujen asiantuntijat",
            loadingExperts: "Ladataan asiantuntijoita...",
            viewProfile: "Katso profiili",
            freeQuote: "Pyydä tarjous",
            selectedPros: "Valitut ammattilaiset",
            freeNoCommitment: "Ilmainen & Sitoumukseton",
            requestQuote: "Pyydä ilmainen tarjous",
            maxSelectionAlert: "Voit valita enintään 5 ammattilaista.",
            geoBadge: "Virallinen LVI- ja Ilmastointiverkosto",
            geoTitle: "Mistä löytää pätevä kanavailmastoinnin asentaja tai LVI-suunnittelutoimisto?",
            geoText: "DuctedExpert.com yhdistää kotitaloudet ja yritykset suoraan kanavailmastoinnin, lämpöpumppujen, VRV/VRF-järjestelmien urakoitsijoihin sekä LVI-suunnittelutoimistoihin.",
            geoCheck1: "Ammattitaitoiset LVI-yritykset",
            geoCheck2: "0 % provisio • Suora yhteys",
            geoCheck3: "Kotitaloudet, Toimitilat & Teollisuus",
            seoMainTitle: "Kanavailmastointi ja Lämpöpumput: Asiantuntijoiden Verkosto",
            seoBlock1Title: "Kanavailmastoinnin ja piilotettujen järjestelmien asiantuntijat",
            seoBlock1Text: "DuctedExpert.com auttaa löytämään ammattilaiset alakattoon piilotettaviin kanavailmastointeihin ja huonekohtaiseen lämpötilansäätöön.",
            seoBlock2Title: "Ilmalämpöpumput ja ilma-vesilämpöpumput",
            seoBlock2Text: "Vertaile asennusliikkeitä, jotka ovat erikoistuneet ilma-ilma- ja ilma-vesilämpöpumppuihin, VRV/VRF-järjestelmiin sekä ilmanvaihtokoneisiin.",
            seoBlock3Title: "LVI-suunnittelutoimistot ja energiatehokkuus",
            seoBlock3Text: "Ota yhteyttä LVI-insinööritoimistoihin teholaskentaa, kanavistomitoitusta, CAD/BIM-suunnittelua ja energiakatselmuksia varten.",
            seoBlock4Title: "Suora tarjouspyyntö ilman välikäsiä",
            seoBlock4Text: "Valitse enintään 5 yritystä ja pyydä maksuton tarjous suoraan ilman piilokuluja.",
            faqTitle: "Usein Kysytyt Kysymykset: Kanavailmastointi & Lämpöpumput",
            faq: [
                {
                    question: "Mikä on kanavailmastointi ja mitkä ovat sen edut?",
                    answer: "Kanavailmastointi on alakattoon tai ullakolle piilotettu lämmitys- ja jäähdytysjärjestelmä, joka jakaa ilman huomaamattomien säleikköjen kautta hiljaisesti ja tasaisesti."
                },
                {
                    question: "Miten löydän LVI-asentajan tai suunnittelutoimiston DuctedExpert.com-sivustolta?",
                    answer: "Käytä karttaa ja suodattimia valitaksesi teknologian (kanavailmastointi, lämpöpumppu, VRV/VRF), rakennustyypin ja paikkakunnan."
                },
                {
                    question: "Paljonko kanavailmastoinnin asennus maksaa?",
                    answer: "Hinta on tyypillisesti 80–150 € / m² riippuen vyöhykesäädöstä, laitetehosta ja merkistä (Daikin, Mitsubishi, Toshiba, Panasonic)."
                },
                {
                    question: "Onko tarjouksen pyytäminen ilmaista?",
                    answer: "Kyllä, tarjouspyynnön lähettäminen yrityksille on täysin ilmaista eikä sido sinua mihinkään."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "Kanavailmastointi & Lämpöpumppu Asennus | DuctedExpert.com",
            metaDesc: "Löydä ammattitaitoinen asentaja kanavailmastoinnille, ilmalämpöpumpulle ja VRV/VRF-järjestelmille. Pyydä ilmainen tarjous.",
            heroTitle1: "LÖYDÄ ASIANTUNTEVA",
            heroTitle2: "KANAVAILMASTOINNIN & LÄMPÖPUMPPUJEN ASENTAJA",
            heroSubtitleHighlight: "Kansainvälinen asiantuntija-alusta",
            heroSubtitleRest: "joka yhdistää sinut parhaisiin LVI- ja jäähdytysalan ammattilaisiin.",
            findExpertBtn: "Etsi asiantuntija",
            becomeMemberBtn: "Liity DuctedExpert.com-verkostoon",
            freeQuotesNote: "Ilmaiset tarjoukset ilman sitoutumista",
            sectionWhyTitle: "Miksi valita kanavailmastointi ja lämpöpumppu?",
            sectionWhyText: "Kanavailmastointi tarjoaa ympärivuotisen mukavuuden (lämmitys talvella, viilennys kesällä) täysin huomaamattomasti ja hiljaisesti.",
            benefits: [
                { title: "Huomaamaton ulkonäkö", desc: "Vain tyylikkäät tulo- ja poistoilmasäleiköt näkyvät katossa tai seinässä." },
                { title: "Hiljainen käyntiääni", desc: "Sisäyksikkö sijoitetaan asuintilojen ulkopuolelle alakattoon tai tekniseen tilaan." },
                { title: "Huonekohtainen säätö", desc: "Älykkäät termostaatit säätävät jokaisen huoneen lämpötilan erikseen ja säästävät energiaa." }
            ]
        },
        bureauPage: {
            metaTitle: "LVI-Suunnittelutoimisto & Lämpötekniikka | DuctedExpert.com",
            metaDesc: "Löydä LVI-suunnittelutoimisto kanavailmastoinnin mitoitukseen, lämpöhäviölaskentaan, CAD/BIM-suunnitteluun ja energiakatselmuksiin.",
            heroTitle1: "LVI- JA LÄMPÖTEKNINEN",
            heroTitle2: "SUUNNITTELUTOIMISTO",
            heroLead: "Optimoi sisäilmasto, pienennä energiankulutusta ja varmista toimiva LVI-järjestelmä uudiskohteissa ja saneerauksissa.",
            heroDesc: "Lämpötekniset laskelmat, lämmitys-, jäähdytys- ja ilmanvaihtojärjestelmien mitoitus sekä CAD/BIM-suunnittelu räätälöidysti.",
            findOfficeBtn: "Etsi LVI-suunnittelutoimisto",
            joinOfficeBtn: "Rekisteröidy suunnittelutoimistoksi",
            roleTitle: "Mitä LVI- ja lämpösuunnittelutoimisto tekee?",
            roleText: "LVI-suunnittelutoimisto analysoi rakennuksen, mitoittaa lämmitys-, jäähdytys- ja ilmanvaihtolaitteet oikein ja varmistaa energiatehokkuusmääräysten täyttymisen.",
            roleQuote: "\"Tavoite: maksimaalinen asumismukavuus mahdollisimman pienellä energiankulutuksella.\"",
            studiesTitle: "Mitä suunnittelupalveluita asiantuntijamme tarjoavat?",
            studiesList: [
                "Lämmitys- ja jäähdytysteholaskelmat",
                "Kanavailmastoinnin ja ilmanvaihdon mitoitus",
                "Lämpöpumppu- ja VRV/VRF-järjestelmäsuunnittelu",
                "CAD- ja BIM-toteutuspiirustukset",
                "Energiakatselmukset ja energiasimuloinnit",
                "Projektinjohto ja tekninen valvonta"
            ]
        },
        signup: {
            metaTitle: "Ammattilaisen Rekisteröityminen - DuctedExpert.com | LVI-Verkosto",
            metaDesc: "Liity DuctedExpert.com-verkostoon LVI-urakoitsijana tai suunnittelutoimistona. Vastaanota suoria tarjouspyyntöjä 0 % provisiolla.",
            visionTitle: "MEIDÄN VISIOMME",
            visionP1: "Talotekniikka- ja LVI-markkina on muuttunut. Kalliiden mainoskampanjoiden ja liidejä kymmenelle kilpailijalle myyvien palveluiden sijaan ammattilaiset ansaitsevat reilun alustan.",
            visionP2: "DuctedExpert.com yhdistää asiakkaat suoraan LVI-asennusliikkeisiin ja suunnittelutoimistoihin ilman välikäsiä.",
            visionBoxTitle: "DuctedExpert.com tarjoaa ammattilaisille:",
            visionBullets: [
                "Kansainvälinen ja paikallinen näkyvyys LVI-ammattilaisille,",
                "Laadukkaat tarjouspyynnöt suoraan yrityksellesi,",
                "0 % provisio tarjouksista ja urakoista,",
                "Tehokkaat SEO- ja hallintatyökalut."
            ],
            promoBanner: "⚡ LVI-ASIANTUNTIJAN ETUTARJOUS: 1 200 € ALV 0% / VUOSI (NORM. 1 550 €) • 350 € ALENNUS",
            chooseTitle1: "Valitse yrityksesi",
            chooseTitleHighlight: "kasvua",
            chooseTitle2: "vauhdittava paketti",
            chooseSubtitle: "Kasvata näkyvyyttäsi omalla yritysprofiililla, interaktiivisella kartalla ja SEO-työkaluilla.",
            zeroCommissionBadge: "Turvallinen alusta • 0 % provisio asiakaskontakteista",
            recommendedBadge: "Suositeltu",
            freeLabel: "Ilmainen",
            first100Badge: "100 ensimmäiselle toimistolle",
            yearly: "Vuosi",
            monthly: "Kuukausi",
            perYearExclTax: " / vuosi (alv 0%)",
            perMonthExclTax: " / kk (alv 0%)",
            privilegeRate: "Etuhinta",
            selectOfferBtn: "Valitse tämä paketti",
            selectedBtn: "Valittu",
            officeCardTitle: "LVI-Suunnittelutoimisto",
            officeCardSub: "LVI- ja lämpösuunnittelijoille",
            officeFeatures: [
                "0 % provisio kontakteista",
                "Suorat yhteydenotot asiakkailta",
                "Näkyvyys DuctedExpert.com-sivustolla",
                "Oma yrityssivu",
                "Näkyvyys interaktiivisella kartalla",
                "Rajattomat tarjouspyynnöt"
            ],
            hvacCardTitle: "LVI- & Ilmastointiyritys",
            hvacCardSub: "Ilmastointi- ja lämpöpumppuasentajille",
            hvacFeatures: [
                "0 % provisio kontakteista",
                "Suorat yhteydenotot asiakkailta",
                "Premium-näkyvyys (Hakemisto + Kartta)",
                "Varmennettu Asiantuntija -merkki",
                "Suorat asennus- ja tarjouspyynnöt",
                "Täysi pääsy hallintapaneeliin ja SEO-työkaluihin",
                "Asiakas valitsee ja ottaa suoraan yhteyttä"
            ],
            step1Title: "Yhteyshenkilön tiedot",
            repNameLabel: "Yhteyshenkilön koko nimi",
            emailLabel: "Työsähköposti",
            phoneLabel: "Puhelinnumero",
            passwordLabel: "Salasana",
            confirmPasswordLabel: "Vahvista salasana",
            step2Title: "Yrityksen tiedot (Suora rekisteröityminen ilman ennakkotarkistusta)",
            countryLabel: "Maa",
            companyIdLabel: "Y-tunnus / Yritystunnus (Valinnainen)",
            companyIdPlaceholder: "Esim. Y-tunnus tai rekisterinumero",
            companyNameLabel: "Yrityksen nimi",
            taxNumberLabel: "ALV-numero (Valinnainen)",
            addressLabel: "Katuosoite",
            postalCodePlaceholder: "Postinumero",
            cityPlaceholder: "Kaupunki",
            descriptionLabel: "Yrityksen kuvaus",
            descriptionPlaceholder: "Kerro yrityksesi palveluista, erikoisosaamisesta ja toiminta-alueesta...",
            step3Title: "Tekninen osaaminen & Hakusuodattimet",
            buildingsHeading: "Rakennustyypit",
            technologiesHeading: "Asennettavat teknologiat",
            interventionsHeading: "Palvelut",
            brandsHeading: "Edustetut merkit",
            certificationsHeading: "Sertifikaatit ja pätevyydet",
            summaryTitle: "Yhteenveto",
            selectedPlanLabel: "Valittu paketti",
            subtotalExclTax: "Välisumma (ALV 0%)",
            vatLabel: "ALV (20%)",
            totalInclTax: "Yhteensä (sis. ALV)",
            noHiddenRenewal: "Läpinäkyvät tilausehdot",
            instantVisibility: "Välitön tilin luonti",
            techSupportIncluded: "Tekninen tuki sisältyy",
            promoCodeLabel: "Kumppani- / Alennuskoodi (Valinnainen)",
            submitFreeBtn: "Viimeistele rekisteröityminen",
            submitPayBtn: "Maksa ja rekisteröidy",
            secureStripeNote: "Turvallinen Stripe-maksu",
            termsAcceptNote: "Vahvistamalla hyväksyt käyttöehdot ja tietosuojaselosteen.",
            requiredFieldsAlert: "Täytä kaikki pakolliset kentät (*).",
            passwordMismatchAlert: "Salasanat eivät täsmää.",
            successTitle: "Rekisteröityminen vastaanotettu!",
            successText: "Yritystilisi on luotu DuctedExpert.com-palveluun.",
            backHomeBtn: "Takaisin etusivulle"
        },
        footer: {
            legalNotice: "Oikeudelliset tiedot",
            privacyPolicy: "Tietosuojaseloste",
            cookiesPolicy: "Evästekäytäntö",
            termsOfUse: "Käyttöehdot",
            termsOfSale: "Myyntiehdot ammattilaisille",
            findInstaller: "Etsi LVI-asentaja",
            whyDuctedExpert: "Miksi DuctedExpert.com",
            contact: "Yhteystiedot",
            proSpace: "Ammattilaisille",
            rightsReserved: "Kaikki oikeudet pidätetään."
        }
    },
    es: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "Nuestros Expertos",
            climatisation: "Climatización y Aerotermia",
            bureauEtude: "Ingeniería Térmica",
            verifiedExpert: "Experto Verificado",
            whyUs: "Por qué DuctedExpert",
            contact: "Contacto",
            proSpace: "Área Pro",
            myAccount: "Mi Cuenta",
            dashboard: "Ir a mi Dashboard",
            publicProfile: "Ver Perfil Público",
            logout: "Cerrar sesión",
            loginTitle: "Acceso Profesionales",
            email: "Email",
            password: "Contraseña",
            rememberMe: "Recordarme",
            signIn: "Iniciar sesión",
            signingIn: "Conectando...",
            forgotPassword: "¿Olvidaste tu contraseña?",
            noAccount: "¿Aún no tienes cuenta?",
            createAccount: "Crear una cuenta",
        },
        home: {
            metaTitle: "Instaladores de Aire Acondicionado por Conductos y Aerotermia | DuctedExpert.com",
            metaDesc: "Encuentre instaladores certificados de aire acondicionado por conductos, bomba de calor, aerotermia, VRV/VRF e ingenierías térmicas HVAC. Presupuesto gratis.",
            filterLabel: "Filtros:",
            showFilters: "Mostrar",
            hideFilters: "Ocultar",
            expertTypeFilter: "Tipo de Experto",
            hvacCompany: "Empresa Instaladora de Climatización / HVAC",
            engineeringOffice: "Ingeniería Térmica y Oficina Técnica",
            technologiesFilter: "Tecnologías",
            buildingTypeFilter: "Tipo de Edificio",
            countryFilter: "País",
            cityPlaceholder: "Ciudad, provincia, código postal...",
            searchBtn: "Buscar",
            nearbyExperts: "Expertos en Climatización por Conductos y Aerotermia",
            loadingExperts: "Cargando expertos...",
            viewProfile: "Ver ficha",
            freeQuote: "Presupuesto gratis",
            selectedPros: "Profesionales seleccionados",
            freeNoCommitment: "Gratis y sin compromiso",
            requestQuote: "Solicitar presupuesto",
            maxSelectionAlert: "Puede seleccionar hasta un máximo de 5 profesionales.",
            geoBadge: "Red Oficial de Expertos en Climatización",
            geoTitle: "¿Dónde encontrar un instalador de aire acondicionado por conductos o una ingeniería térmica?",
            geoText: "DuctedExpert.com es la plataforma internacional de referencia que conecta particulares y empresas con instaladores de aire acondicionado por conductos, bombas de calor, sistemas VRV/VRF e ingenierías térmicas HVAC.",
            geoCheck1: "Instaladores HVAC Especializados",
            geoCheck2: "0% Comisión • Contacto Directo",
            geoCheck3: "Residencial, Terciario e Industrial",
            seoMainTitle: "Instaladores de Aire Acondicionado por Conductos y Bombas de Calor",
            seoBlock1Title: "Expertos en aire acondicionado por conductos y zonificación",
            seoBlock1Text: "DuctedExpert.com conecta con profesionales especializados en climatización invisible en falso techo, rejillas motorizadas (Airzone, Koolnova) y confort silencioso.",
            seoBlock2Title: "Especialistas en aerotermia y bombas de calor",
            seoBlock2Text: "Encuentre instaladores cualificados en bombas de calor aire-aire y aire-agua, sistemas VRV/VRF, enfriadoras y unidades de tratamiento de aire (UTA).",
            seoBlock3Title: "Oficinas técnicas e ingenierías térmicas HVAC",
            seoBlock3Text: "Contacte con ingenierías térmicas para dimensionamiento de conductos, cálculo de cargas térmicas, planos CAD/BIM y auditorías energéticas.",
            seoBlock4Title: "Contacto directo sin intermediarios",
            seoBlock4Text: "Seleccione hasta 5 profesionales y solicite presupuestos gratuitos directamente.",
            faqTitle: "Preguntas Frecuentes: Aire Acondicionado por Conductos y Aerotermia",
            faq: [
                {
                    question: "¿Qué es el aire acondicionado por conductos y cuáles son sus ventajas?",
                    answer: "Es un sistema de climatización invisible oculto en el falso techo que distribuye el aire frío o caliente mediante rejillas discretas, ofreciendo máximo confort acústico y estético."
                },
                {
                    question: "¿Cómo encontrar un instalador o ingeniería térmica en DuctedExpert.com?",
                    answer: "Utilice nuestro mapa interactivo y filtros por tecnología (conductos, aerotermia, VRV/VRF), tipo de inmueble y ciudad."
                },
                {
                    question: "¿Cuál es el precio medio de una instalación por conductos?",
                    answer: "Suele oscilar entre 80 € y 150 € por m² según la zonificación, potencia y marca (Daikin, Mitsubishi, Toshiba, Panasonic, LG)."
                },
                {
                    question: "¿Es gratuito solicitar presupuesto en DuctedExpert.com?",
                    answer: "Sí, el contacto y la solicitud de presupuesto son 100 % gratuitos y sin comisiones."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "Instalador de Aire Acondicionado por Conductos y Aerotermia | DuctedExpert.com",
            metaDesc: "Encuentre un instalador especializado en aire acondicionado por conductos, bomba de calor reversible y sistemas VRV/VRF. Compare presupuestos gratis.",
            heroTitle1: "ENCUENTRE SU INSTALADOR DE",
            heroTitle2: "AIRE ACONDICIONADO POR CONDUCTOS Y AEROTERMIA",
            heroSubtitleHighlight: "La plataforma internacional de referencia",
            heroSubtitleRest: "que selecciona a los mejores instaladores y expertos en climatización.",
            findExpertBtn: "Encontrar un experto",
            becomeMemberBtn: "Unirse como Experto a DuctedExpert.com",
            freeQuotesNote: "Presupuestos gratuitos y sin compromiso",
            sectionWhyTitle: "¿Por qué elegir aire acondicionado por conductos y bomba de calor?",
            sectionWhyText: "La climatización por conductos ofrece confort térmico todo el año con integración totalmente invisible en techo y control inteligente por estancia.",
            benefits: [
                { title: "Estética Invisible", desc: "Solo se ven discretas rejillas o difusores lineales integrados en la arquitectura." },
                { title: "Máximo Silencio", desc: "La unidad interior se instala fuera de las zonas de descanso para un silencio absoluto." },
                { title: "Zonificación Inteligente", desc: "Termostatos independientes en cada habitación para ahorrar hasta un 30 % de energía." }
            ]
        },
        bureauPage: {
            metaTitle: "Ingeniería Térmica y Oficina Técnica HVAC | DuctedExpert.com",
            metaDesc: "Encuentre una ingeniería térmica y oficina técnica HVAC para proyectos de climatización por conductos, cálculo de cargas térmicas y auditorías energéticas.",
            heroTitle1: "INGENIERÍA TÉRMICA",
            heroTitle2: "Y OFICINA TÉCNICA HVAC",
            heroLead: "Optimizar el confort, reducir el consumo energético y garantizar instalaciones fiables en obra nueva y rehabilitación.",
            heroDesc: "Estudios térmicos, dimensionamiento de climatización, ventilación, redes de conductos y planos CAD/BIM a medida.",
            findOfficeBtn: "Encontrar una ingeniería térmica",
            joinOfficeBtn: "Registrarse como Ingeniería Térmica",
            roleTitle: "¿Para qué sirve una ingeniería térmica y de fluidos?",
            roleText: "La oficina técnica analiza su edificio, dimensiona con precisión los equipos de calefacción, climatización y ventilación, y verifica el cumplimiento normativo y energético.",
            roleQuote: "\"El objetivo: máximo confort con el mínimo consumo energético e instalaciones duraderas.\"",
            studiesTitle: "¿Qué estudios técnicos realizamos?",
            studiesList: [
                "Cálculo de cargas térmicas de calefacción y refrigeración",
                "Dimensionamiento de redes de conductos y difusión de aire",
                "Diseño de sistemas de aerotermia y VRV/VRF",
                "Planos de ejecución CAD y modelado BIM",
                "Auditorías energéticas y simulaciones dinámicas",
                "Dirección de obra e ingeniería de detalle"
            ]
        },
        signup: {
            metaTitle: "Registro Profesional - Únase a DuctedExpert.com | Red HVAC",
            metaDesc: "Regístrese como empresa instaladora de climatización o ingeniería térmica en DuctedExpert.com. Reciba clientes directos con 0 % de comisión.",
            visionTitle: "NUESTRA VISIÓN",
            visionP1: "El mercado de la climatización ha cambiado. Frente a la publicidad costosa y las plataformas que revenden el mismo contacto a múltiples competidores, los profesionales necesitan una red transparente.",
            visionP2: "DuctedExpert.com conecta directamente a los clientes con instaladores de climatización e ingenierías térmicas sin comisiones.",
            visionBoxTitle: "DuctedExpert.com nace para:",
            visionBullets: [
                "Valorar a los verdaderos profesionales de la climatización,",
                "Aportar solicitudes de presupuesto directas y cualificadas,",
                "Garantizar un 0 % de comisión sobre sus ventas,",
                "Impulsar su visibilidad SEO local e internacional."
            ],
            promoBanner: "⚡ OFERTA PRIVILEGIO EXPERTO HVAC: 1.200 € + IVA / AÑO EN LUGAR DE 1.550 € • -350 € DE DESCUENTO",
            chooseTitle1: "Elija el plan que",
            chooseTitleHighlight: "impulsará",
            chooseTitle2: "su actividad",
            chooseSubtitle: "Destaque en su zona con nuestra ficha profesional optimizada, mapa interactivo y herramientas SEO integradas.",
            zeroCommissionBadge: "Plataforma verificada y segura • 0 % de comisión sobre sus contactos",
            recommendedBadge: "Recomendado",
            freeLabel: "Gratis",
            first100Badge: "Para las 100 primeras",
            yearly: "Anual",
            monthly: "Mensual",
            perYearExclTax: " / año (sin IVA)",
            perMonthExclTax: " / mes (sin IVA)",
            privilegeRate: "Tarifa Privilegio",
            selectOfferBtn: "Elegir este plan",
            selectedBtn: "Seleccionado",
            officeCardTitle: "Ingeniería Térmica",
            officeCardSub: "Para oficinas técnicas e ingenierías HVAC",
            officeFeatures: [
                "0 % comisión por contacto",
                "Sin reventa de leads",
                "Visibilidad internacional en DuctedExpert.com",
                "Página profesional dedicada",
                "Presencia en el mapa interactivo",
                "Solicitudes de clientes ilimitadas"
            ],
            hvacCardTitle: "Empresa Instaladora HVAC",
            hvacCardSub: "Para instaladores de climatización y aerotermia",
            hvacFeatures: [
                "0 % comisión por contacto",
                "Sin reventa de leads",
                "Posicionamiento Premium (Directorio + Mapa)",
                "Distintivo Experto visible",
                "Solicitudes cualificadas de instalación",
                "Acceso completo al Dashboard y herramientas SEO",
                "El cliente contacta directamente con usted"
            ],
            step1Title: "Sus Datos de Contacto",
            repNameLabel: "Nombre y Apellidos del representante",
            emailLabel: "Email profesional",
            phoneLabel: "Teléfono",
            passwordLabel: "Contraseña",
            confirmPasswordLabel: "Confirmar contraseña",
            step2Title: "Su Empresa (Registro directo sin verificación bloqueante)",
            countryLabel: "País",
            companyIdLabel: "CIF / NIF / ID de Empresa (Opcional)",
            companyIdPlaceholder: "Ej: B12345678",
            companyNameLabel: "Nombre de la empresa",
            taxNumberLabel: "Número de IVA intracomunitario (Opcional)",
            addressLabel: "Dirección",
            postalCodePlaceholder: "Código Postal",
            cityPlaceholder: "Ciudad",
            descriptionLabel: "Descripción de la actividad",
            descriptionPlaceholder: "Presente su empresa, especialidades en climatización y zona de cobertura...",
            step3Title: "Especialidades Técnicas y Filtros",
            buildingsHeading: "Tipos de edificios",
            technologiesHeading: "Tecnologías instaladas",
            interventionsHeading: "Servicios e intervenciones",
            brandsHeading: "Marcas instaladas",
            certificationsHeading: "Certificaciones",
            summaryTitle: "Resumen",
            selectedPlanLabel: "Plan seleccionado",
            subtotalExclTax: "Subtotal (sin IVA)",
            vatLabel: "IVA (20%)",
            totalInclTax: "Total (IVA incl.)",
            noHiddenRenewal: "Suscripción clara y transparente",
            instantVisibility: "Creación inmediata de su cuenta",
            techSupportIncluded: "Soporte técnico incluido",
            promoCodeLabel: "Código Promocional / Partner (Opcional)",
            submitFreeBtn: "Validar inscripción",
            submitPayBtn: "Pagar y Validar",
            secureStripeNote: "Pago seguro mediante Stripe",
            termsAcceptNote: "Al validar, acepta nuestras Condiciones Generales y Política de Privacidad.",
            requiredFieldsAlert: "Por favor, complete todos los campos obligatorios (*).",
            passwordMismatchAlert: "Las contraseñas no coinciden.",
            successTitle: "¡Inscripción recibida!",
            successText: "Su cuenta profesional ha sido registrada en DuctedExpert.com.",
            backHomeBtn: "Volver al inicio"
        },
        footer: {
            legalNotice: "Aviso Legal",
            privacyPolicy: "Política de Privacidad",
            cookiesPolicy: "Política de Cookies",
            termsOfUse: "Condiciones de Uso",
            termsOfSale: "Condiciones de Venta Pro",
            findInstaller: "Buscar Instalador",
            whyDuctedExpert: "Por qué DuctedExpert.com",
            contact: "Contacto",
            proSpace: "Área Pro",
            rightsReserved: "Todos los derechos reservados."
        }
    },
    it: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "I Nostri Esperti",
            climatisation: "Climatizzazione & Pompe di Calore",
            bureauEtude: "Studio Termotecnico",
            verifiedExpert: "Esperto Verificato",
            whyUs: "Perché DuctedExpert",
            contact: "Contatti",
            proSpace: "Area Pro",
            myAccount: "Il Mio Account",
            dashboard: "Vai alla Dashboard",
            publicProfile: "Profilo Pubblico",
            logout: "Disconnetti",
            loginTitle: "Accesso Professionisti",
            email: "Email",
            password: "Password",
            rememberMe: "Ricordami",
            signIn: "Accedi",
            signingIn: "Accesso in corso...",
            forgotPassword: "Password dimenticata?",
            noAccount: "Non hai ancora un account?",
            createAccount: "Crea un account",
        },
        home: {
            metaTitle: "Installatori Climatizzazione Canalizzata e Pompe di Calore | DuctedExpert.com",
            metaDesc: "Trova installatori certificati di aria condizionata canalizzata, pompe di calore, sistemi VRV/VRF e studi termotecnici HVAC. Preventivi gratuiti.",
            filterLabel: "Filtri:",
            showFilters: "Mostra",
            hideFilters: "Nascondi",
            expertTypeFilter: "Tipo di Esperto",
            hvacCompany: "Azienda Installatrice Climatizzazione / HVAC",
            engineeringOffice: "Studio Termotecnico e Progettazione HVAC",
            technologiesFilter: "Tecnologie",
            buildingTypeFilter: "Tipo di Edificio",
            countryFilter: "Paese",
            cityPlaceholder: "Città, provincia, CAP...",
            searchBtn: "Cerca",
            nearbyExperts: "Esperti in Climatizzazione Canalizzata e Pompe di Calore",
            loadingExperts: "Caricamento esperti...",
            viewProfile: "Vedi scheda",
            freeQuote: "Preventivo gratuito",
            selectedPros: "Professionisti selezionati",
            freeNoCommitment: "Gratuito e senza impegno",
            requestQuote: "Richiedi preventivo",
            maxSelectionAlert: "Puoi selezionare fino a un massimo di 5 professionisti.",
            geoBadge: "Rete Ufficiale Esperti Climatizzazione & HVAC",
            geoTitle: "Dove trovare un installatore di climatizzazione canalizzata o uno studio termotecnico?",
            geoText: "DuctedExpert.com è la piattaforma internazionale che mette in contatto privati e aziende con installatori specializzati in climatizzazione canalizzata, pompe di calore, sistemi VRV/VRF e studi termotecnici.",
            geoCheck1: "Installatori HVAC Qualificati",
            geoCheck2: "0% Commissione • Contatto Diretto",
            geoCheck3: "Residenziale, Commerciale e Industriale",
            seoMainTitle: "Installatori di Climatizzazione Canalizzata e Pompe di Calore: La Rete di Esperti",
            seoBlock1Title: "Esperti in climatizzazione canalizzata e sistemi invisibili",
            seoBlock1Text: "DuctedExpert.com ti mette in contatto con specialisti in impianti canalizzati a controsoffitto, zonizzazione intelligente (Airzone, Koolnova) e comfort acustico.",
            seoBlock2Title: "Specialisti in pompe di calore ed efficienza energetica",
            seoBlock2Text: "Trova installatori qualificati per pompe di calore aria-aria e aria-acqua, impianti VRV/VRF, chiller e unità di trattamento aria (UTA).",
            seoBlock3Title: "Studi termotecnici e progettazione impianti HVAC",
            seoBlock3Text: "Affidati a studi termotecnici per il calcolo dei carichi termici, il dimensionamento delle canalizzazioni, progetti CAD/BIM e diagnosi energetiche.",
            seoBlock4Title: "Contatto diretto senza costi di intermediazione",
            seoBlock4Text: "Seleziona fino a 5 professionisti e richiedi preventivi gratuiti direttamente.",
            faqTitle: "Domande Frequenti (FAQ): Climatizzazione Canalizzata e Pompe di Calore",
            faq: [
                {
                    question: "Cos'è la climatizzazione canalizzata e quali vantaggi offre?",
                    answer: "La climatizzazione canalizzata è un impianto invisibile installato nel controsoffitto che distribuisce aria fresca o calda tramite bocchette discrete, garantendo silenziosità e design pulito."
                },
                {
                    question: "Come trovare un installatore o uno studio termotecnico su DuctedExpert.com?",
                    answer: "Usa la mappa interattiva e i filtri di ricerca per tecnologia (canalizzato, pompa di calore, VRV/VRF), tipologia di edificio e città."
                },
                {
                    question: "Quanto costa un impianto di climatizzazione canalizzata?",
                    answer: "Il costo medio varia tra 80 € e 150 € al m² in base alla regolazione a zone, alla potenza e al marchio (Daikin, Mitsubishi, Toshiba, Panasonic)."
                },
                {
                    question: "La richiesta di preventivo su DuctedExpert.com è gratuita?",
                    answer: "Sì, contattare i professionisti e richiedere preventivi è gratuito al 100% e senza alcuna commissione."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "Installatore Climatizzazione Canalizzata e Pompe di Calore | DuctedExpert.com",
            metaDesc: "Trova un installatore qualificato per climatizzazione canalizzata a scomparsa, pompe di calore reversibili e impianti VRV/VRF. Preventivi gratuiti.",
            heroTitle1: "TROVA IL TUO INSTALLATORE DI",
            heroTitle2: "CLIMATIZZAZIONE CANALIZZATA E POMPE DI CALORE",
            heroSubtitleHighlight: "La piattaforma internazionale di riferimento",
            heroSubtitleRest: "che seleziona i migliori installatori ed esperti HVAC per i tuoi preventivi.",
            findExpertBtn: "Trova un esperto",
            becomeMemberBtn: "Diventa Membro Esperto DuctedExpert.com",
            freeQuotesNote: "Preventivi gratuiti e senza impegno",
            sectionWhyTitle: "Perché scegliere la climatizzazione canalizzata e la pompa di calore?",
            sectionWhyText: "Gli impianti canalizzati uniscono comfort termico tutto l'anno (riscaldamento e raffrescamento) con un'integrazione architettonica invisibile.",
            benefits: [
                { title: "Design Invisibile", desc: "Solo eleganti diffusori lineari o griglie discrete sono visibili a soffitto o parete." },
                { title: "Massima Silenziosità", desc: "L'unità interna è collocata fuori dagli ambienti principali per un comfort acustico superiore." },
                { title: "Controllo Multi-Zona", desc: "Termostati smart in ogni stanza per regolare la temperatura ideale e ridurre i consumi." }
            ]
        },
        bureauPage: {
            metaTitle: "Studio Termotecnico e Progettazione HVAC | DuctedExpert.com",
            metaDesc: "Trova uno studio termotecnico per progetti di climatizzazione canalizzata, dimensionamento impianti HVAC, progettazione CAD/BIM e diagnosi energetiche.",
            heroTitle1: "STUDIO TERMOTECNICO",
            heroTitle2: "E PROGETTAZIONE HVAC",
            heroLead: "Ottimizzare il comfort, ridurre i consumi e progettare impianti sicuri per nuove costruzioni e riqualificazioni energetiche.",
            heroDesc: "Calcoli termotecnici, dimensionamento impianti di climatizzazione, riscaldamento, ventilazione e progettazione esecutiva CAD/BIM su misura.",
            findOfficeBtn: "Trova uno studio termotecnico",
            joinOfficeBtn: "Registrati come Studio Termotecnico",
            roleTitle: "A cosa serve uno studio termotecnico HVAC?",
            roleText: "Lo studio termotecnico analizza l'involucro edilizio, dimensiona correttamente gli impianti di climatizzazione, riscaldamento e ventilazione e verifica la conformità alle normative energetiche.",
            roleQuote: "\"L'obiettivo: massimo comfort abitativo con il minimo consumo energetico e impianti affidabili nel tempo.\"",
            studiesTitle: "Quali progettazioni realizzano i nostri studi termotecnici?",
            studiesList: [
                "Calcolo dei carichi termici estivi e invernali",
                "Dimensionamento reti aerauliche e climatizzazione canalizzata",
                "Progettazione impianti a pompa di calore e VRV/VRF",
                "Elaborati grafici esecutivi CAD e modellazione BIM",
                "Diagnosi energetiche e simulazioni dinamiche",
                "Direzione lavori e collaudo impianti"
            ]
        },
        signup: {
            metaTitle: "Registrazione Professionisti - Unisciti a DuctedExpert.com | Rete HVAC",
            metaDesc: "Registra la tua azienda di climatizzazione o il tuo studio termotecnico su DuctedExpert.com. Ricevi contatti diretti con 0% di commissione.",
            visionTitle: "LA NOSTRA VISIONE",
            visionP1: "Il settore termoidraulico e HVAC si è evoluto. Tra pubblicità costose e portali che rivendono lo stesso contatto a decine di concorrenti, i veri professionisti meritano una piattaforma trasparente.",
            visionP2: "DuctedExpert.com mette in contatto diretto i clienti con installatori specializzati e studi termotecnici senza intermediari.",
            visionBoxTitle: "DuctedExpert.com nasce per:",
            visionBullets: [
                "Valorizzare gli installatori e progettisti HVAC qualificati,",
                "Portare richieste di preventivo dirette e mirate,",
                "Garantire 0% di commissioni sui tuoi lavori,",
                "Offrire strumenti SEO e IA per dominare la visibilità locale e internazionale."
            ],
            promoBanner: "⚡ OFFERTA PRIVILEGIO ESPERTO HVAC: 1.200 € + IVA / ANNO INVECE DI 1.550 € • -350 € DI SCONTO IMMEDIATO",
            chooseTitle1: "Scegli il piano che",
            chooseTitleHighlight: "farà crescere",
            chooseTitle2: "la tua attività",
            chooseSubtitle: "Aumenta la tua visibilità grazie alla scheda professionale ottimizzata, alla mappa interattiva e agli strumenti SEO integrati.",
            zeroCommissionBadge: "Piattaforma verificata e sicura • 0% di commissione sui contatti",
            recommendedBadge: "Consigliato",
            freeLabel: "Gratuito",
            first100Badge: "Per i primi 100 studi",
            yearly: "Annuale",
            monthly: "Mensile",
            perYearExclTax: " / anno + IVA",
            perMonthExclTax: " / mese + IVA",
            privilegeRate: "Tariffa Privilegio",
            selectOfferBtn: "Scegli questo piano",
            selectedBtn: "Selezionato",
            officeCardTitle: "Studio Termotecnico",
            officeCardSub: "Per ingegneri e progettisti termotecnici",
            officeFeatures: [
                "0% commissione sui contatti",
                "Nessuna rivendita di lead",
                "Visibilità internazionale su DuctedExpert.com",
                "Pagina professionale dedicata",
                "Posizionamento sulla mappa interattiva",
                "Contatti e richieste illimitate"
            ],
            hvacCardTitle: "Azienda Esperto HVAC",
            hvacCardSub: "Per installatori di climatizzazione e pompe di calore",
            hvacFeatures: [
                "0% commissione sui contatti",
                "Nessuna rivendita di lead",
                "Visibilità Premium (Directory + Mappa)",
                "Badge Esperto Verificato visibile",
                "Richieste qualificate di installazione",
                "Accesso completo a Dashboard e strumenti SEO",
                "Il cliente ti sceglie e ti contatta direttamente"
            ],
            step1Title: "I Tuoi Dati di Contatto",
            repNameLabel: "Nome e Cognome del referente",
            emailLabel: "Email aziendale",
            phoneLabel: "Telefono",
            passwordLabel: "Password",
            confirmPasswordLabel: "Conferma password",
            step2Title: "La Tua Azienda (Registrazione immediata senza verifica bloccante)",
            countryLabel: "Paese",
            companyIdLabel: "Partita IVA / Codice Fiscale / ID Azienda (Opzionale)",
            companyIdPlaceholder: "Es: IT12345678901",
            companyNameLabel: "Ragione Sociale / Nome Azienda",
            taxNumberLabel: "Numero Partita IVA UE (Opzionale)",
            addressLabel: "Indirizzo",
            postalCodePlaceholder: "CAP",
            cityPlaceholder: "Città",
            descriptionLabel: "Descrizione dell'attività",
            descriptionPlaceholder: "Descrivi la tua azienda, le specializzazioni in climatizzazione canalizzata e la zona operativa...",
            step3Title: "Competenze Tecniche e Filtri",
            buildingsHeading: "Tipologie di edifici",
            technologiesHeading: "Tecnologie installate",
            interventionsHeading: "Servizi e interventi",
            brandsHeading: "Marchi installati",
            certificationsHeading: "Certificazioni",
            summaryTitle: "Riepilogo",
            selectedPlanLabel: "Piano selezionato",
            subtotalExclTax: "Subtotale (IVA escl.)",
            vatLabel: "IVA (20%)",
            totalInclTax: "Totale (IVA incl.)",
            noHiddenRenewal: "Condizioni di abbonamento trasparenti",
            instantVisibility: "Attivazione immediata dell'account",
            techSupportIncluded: "Supporto tecnico incluso",
            promoCodeLabel: "Codice Partner / Promo (Opzionale)",
            submitFreeBtn: "Completa registrazione",
            submitPayBtn: "Paga e Completa",
            secureStripeNote: "Pagamento sicuro tramite Stripe",
            termsAcceptNote: "Confermando accetti i Termini di Servizio e la Privacy Policy.",
            requiredFieldsAlert: "Compila tutti i campi obbligatori (*).",
            passwordMismatchAlert: "Le password non coincidono.",
            successTitle: "Registrazione completata!",
            successText: "Il tuo account professionale è stato registrato su DuctedExpert.com.",
            backHomeBtn: "Torna alla Home"
        },
        footer: {
            legalNotice: "Note Legali",
            privacyPolicy: "Privacy Policy",
            cookiesPolicy: "Cookie Policy",
            termsOfUse: "Termini d'Uso",
            termsOfSale: "Condizioni di Vendita Pro",
            findInstaller: "Trova Installatore",
            whyDuctedExpert: "Perché DuctedExpert.com",
            contact: "Contatti",
            proSpace: "Area Pro",
            rightsReserved: "Tutti i diritti riservati."
        }
    },
    ar: {
        siteName: "DuctedExpert.com",
        nav: {
            experts: "خبراؤنا المعتمدون",
            climatisation: "مقاول تكييف",
            bureauEtude: "مكتب دراسات هندسية",
            verifiedExpert: "خبير معتمد",
            whyUs: "لماذا DuctedExpert",
            contact: "اتصل بنا",
            proSpace: "مساحة المحترفين",
            myAccount: "حسابي",
            dashboard: "لوحة التحكم",
            publicProfile: "صفحتي العامة",
            logout: "تسجيل الخروج",
            loginTitle: "تسجيل الدخول للمحترفين",
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
            rememberMe: "تذكرني",
            signIn: "تسجيل الدخول",
            signingIn: "جاري تسجيل الدخول...",
            forgotPassword: "نسيت كلمة المرور؟",
            noAccount: "ليس لديك حساب بعد؟",
            createAccount: "تسجيل شركة جديدة",
        },
        home: {
            metaTitle: "DuctedExpert.com | المنصة العالمية الأولى لخبراء التكييف المركزي والمكاتب الهندسية",
            metaDesc: "ابحث عن نخبة مقاولي التكييف المركزي المخفي والمكاتب الهندسية المعتمدة في المملكة العربية السعودية، الإمارات، قطر، وحول العالم. 0% عمولة.",
            filterLabel: "فلترة وتصفية الخبراء",
            showFilters: "عرض الفلاتر المتقدمة",
            hideFilters: "إخفاء الفلاتر المتقدمة",
            expertTypeFilter: "نوع التخصص المهني",
            hvacCompany: "شركة مقاولات تكييف (CVC)",
            engineeringOffice: "مكتب دراسات واستشارات هندسية",
            technologiesFilter: "الأنظمة والتقنيات",
            buildingTypeFilter: "نوع المبنى أو المشروع",
            countryFilter: "الدولة",
            cityPlaceholder: "أدخل اسم المدينة (مثال: الرياض، دبي، الدوحة)...",
            searchBtn: "بحث عن الخبراء",
            nearbyExperts: "الخبراء المعتمدون المتاحون",
            loadingExperts: "جاري تحميل قائمة الخبراء المعتمدين...",
            viewProfile: "عرض الملف المهني الكامل",
            freeQuote: "طلب عرض سعر مجاني",
            selectedPros: "الخبراء المختارون",
            freeNoCommitment: "طلب مجاني 100% وبدون أي التزام",
            requestQuote: "إرسال طلب عرض السعر",
            maxSelectionAlert: "يمكنك اختيار حتى 3 خبراء كحد أقصى للمقارنة.",
            geoBadge: "تغطية محلية ودولية",
            geoTitle: "خبراء معتمدون بالقرب من مشروعك",
            geoText: "سواء كنت تبني فيلا سكنية فاخرة أو تنفذ برجاً تجارياً، شبكتنا تضم نخبة المقاولين والمهندسين المعتمدين لتنفيذ أنظمة التكييف المركزي المخفي وأنظمة VRF بأعلى معايير الجودة.",
            geoCheck1: "حسابات دقيقة للأحمال وتصاميم هندسية معتمدة",
            geoCheck2: "تنفيذ متقن لمجاري الهواء وعزل صوتي فائق الهدوء",
            geoCheck3: "تواصل مباشر وبنسبة 0% عمولة",
            seoMainTitle: "لماذا تختار شبكة DuctedExpert.com لمشروع التكييف المركزي؟",
            seoBlock1Title: "1. تخصص دقيق في التكييف المركزي المخفي (الدكت)",
            seoBlock1Text: "التكييف المخفي يتطلب دقة هندسية عالية في تصنيع الدكت وتوزيع مخارج الهواء. نربطك مباشرة مع أفضل الخبراء المتخصصين في هذا المجال لضمان راحة وهدوء تام.",
            seoBlock2Title: "2. فحص وتدقيق التراخيص وسابقة الأعمال",
            seoBlock2Text: "كل مقاول أو مكتب استشاري مسجل في شبكتنا يخضع لتدقيق التراخيص المهنية وسابقة المشاريع المنجزة لضمان أعلى معايير الأمان والجودة.",
            seoBlock3Title: "3. دراسات أحمال حرارية وتوفير الطاقة",
            seoBlock3Text: "احصل على دراسات هندسية تضمن اختيار السعة المثالية للتكييف دون زيادة في استهلاك الكهرباء، مع تطبيق أحدث معايير كفاءة الطاقة للمباني الحديثة.",
            seoBlock4Title: "4. تواصل مباشر بدون أي عمولات خفية",
            seoBlock4Text: "لا توجد أي رسوم أو عمولات وسيطة. تواصل مباشرة مع المهندسين والمقاولين، وقارن بين عروض الأسعار بكل شفافية وحرية.",
            faqTitle: "الأسئلة الشائعة حول التكييف المركزي وشبكة الخبراء",
            faq: [
                {
                    question: "ما هي مزايا نظام التكييف المركزي المخفي (Gainable / Concealed)؟",
                    answer: "يتميز التكييف المخفي بجمالية فائقة حيث تُخفى الماكينات ومجاري الهواء داخل الأسقف المستعارة ولا يظهر سوى فتحات التوزيع (Grilles / Diffusers)، بالإضافة إلى التوزيع المتساوي لدرجة الحرارة والتشغيل الهادئ جداً."
                },
                {
                    question: "كيف أختار بين التكييف المركزي بنظام VRF ومكيفات الدكت المنفصلة؟",
                    answer: "نظام VRF / VRV مثالي للمباني الكبيرة والفلل المتعددة الغرف حيث يسمح بتوصيل عدة وحدات داخلية بوحدة خارجية واحدة مع توفير هائل في الطاقة وتحكم مستقل لكل غرفة، بينما التكييف المنفصل مناسب للمساحات المحدودة والميزانيات المتوسطة."
                },
                {
                    question: "هل الخدمة مجانية لأصحاب المشاريع والمنازل؟",
                    answer: "نعم! البحث وطلب عروض الأسعار والتواصل مع الشركات والمكاتب الهندسية مجاني 100% وبدون أي عمولات أو التزامات."
                },
                {
                    question: "كيف يمكنني تسجيل شركتي كخبير معتمد في DuctedExpert.com؟",
                    answer: "يمكنك الضغط على 'مساحة المحترفين' أو 'تسجيل شركة جديدة'، وملء بيانات مؤسستك والتراخيص الرسمية للبدء في استقبال طلبات المشاريع المباشرة."
                }
            ]
        },
        climatisationPage: {
            metaTitle: "مقاول تكييف مركزي مخفي ومضخات حرارية معتمد | DuctedExpert.com",
            metaDesc: "ابحث عن مقاول تكييف مركزي معتمد لتوريد وتركيب وصيانة أنظمة التكييف المخفي (الدكت) وأنظمة VRV/VRF في فيلتك أو مشروعك التجاري.",
            heroTitle1: "مقاول تكييف مركزي",
            heroTitle2: "ومضخات حرارية معتمد CVC",
            heroSubtitleHighlight: "نخبة مقاولي التكييف المركزي المخفي المعتمدين.",
            heroSubtitleRest: "تركيب متقن، صيانة دورية، وتحكم ذكي بالحرارة لكل غرفة بأعلى درجات الهدوء والراحة.",
            findExpertBtn: "البحث عن مقاول في منطقتي",
            becomeMemberBtn: "تسجيل شركتي كمقاول معتمد",
            freeQuotesNote: "طلب عروض أسعار مجاني 100% وبدون أي التزام",
            sectionWhyTitle: "لماذا تختار مقاول تكييف معتمد من شبكتنا؟",
            sectionWhyText: "تركيب التكييف المخفي يتطلب خبرة خاصة في عزل الدكت، ضبط ضغط الهواء، والتشغيل الهادئ. خبراؤنا المعتمدون يضمنون لك أداءً مثالياً وضماناً شاملاً.",
            benefits: [
                {
                    title: "توزيع هواء متوازن وعزل صوتي فائق",
                    desc: "تصميم وتنفيذ شبكات مجاري هواء معزولة صوتياً وحرارياً لضمان أعلى مستويات الهدوء والراحة في كل غرفة."
                },
                {
                    title: "أنظمة تدفق متغير VRV / VRF موفرة للطاقة",
                    desc: "أحدث تقنيات الإنفرتر الذكية التي تخفض استهلاك الكهرباء بنسبة تصل إلى 40% مقارنة بالأنظمة التقليدية."
                },
                {
                    title: "ضمانات رسمية وخدمة ما بعد البيع",
                    desc: "عقود صيانة دورية وضمانات معتمدة من كبرى الشركات العالمية المصنعة لأجهزة التكييف."
                }
            ]
        },
        bureauPage: {
            metaTitle: "مكاتب الاستشارات والدراسات الهندسية للتكييف وحساب الأحمال | DuctedExpert.com",
            metaDesc: "ابحث عن مكتب استشارات هندسية معتمد لحساب الأحمال الحرارية، تصميم شبكات مجاري الهواء وتدقيق كفاءة الطاقة للمباني.",
            heroTitle1: "المكاتب الهندسية",
            heroTitle2: "والاستشارات الحرارية CVC",
            heroLead: "تحسين الراحة الحرارية، تقليل استهلاك الطاقة، وضمان كفاءة أنظمة التكييف في المباني الجديدة والمشاريع المجددة.",
            heroDesc: "حسابات دقيقة للأحمال الحرارية، تصميم شبكات مجاري الهواء (الدكت)، مخططات VRV/VRF، وتدقيق كفاءة الطاقة مع نخبة المكاتب المعتمدة.",
            findOfficeBtn: "البحث عن مكتب استشاري",
            joinOfficeBtn: "تسجيل مكتبي الهندسي",
            roleTitle: "ما هو دور مكتب الاستشارات الهندسية الحرارية؟",
            roleText: "يقوم المكتب الهندسي بدراسة الغلاف الحراري للمبنى، وحساب سعات أجهزة التكييف والتهوية بدقة، وتصميم مسارات الهواء ومقاسات الدكت لضمان أقصى درجات الهدوء وتوافق المنظومة مع الكود الهندسي.",
            roleQuote: "\"الهدف: أقصى درجات الراحة الحرارية بأقل استهلاك كهربائي مع منظومة تكييف موثوقة تدوم لسنوات طويلة.\"",
            studiesTitle: "ما هي الدراسات الهندسية التي يقدمها خبراؤنا؟",
            studiesList: [
                "حساب الأحمال الحرارية للتبريد والتدفئة للمباني",
                "تصميم وحساب مقاسات شبكات مجاري الهواء (Duct Sizing)",
                "تصميم أنظمة التدفق المتغير VRV / VRF والمضخات الحرارية",
                "مخططات تنفيذية هندسية ثنائية وثلاثية الأبعاد (CAD / BIM)",
                "دراسات كفاءة الطاقة والامتثال للمواصفات القياسية",
                "الإشراف الميداني على التركيب واختبارات التشغيل (Commissioning)"
            ]
        },
        signup: {
            metaTitle: "تسجيل المحترفين - انضم إلى شبكة DuctedExpert.com | مقاولي التكييف والمكاتب الهندسية",
            metaDesc: "انضم إلى شبكة DuctedExpert.com العالمية كمقاول تكييف مركزي أو مكتب استشارات هندسية واستقبل عملاء مباشرين بنسبة 0% عمولة.",
            visionTitle: "رؤيتنا",
            visionP1: "سوق التكييف والهندسة الحرارية تطور بسرعة. بين الحملات الإعلانية المكلفة ومنصات بيع العملاء التي تعيد بيع نفس الطلب لعشر شركات متنافسة، تستحق الشركات المتميزة نموذجاً عادلاً ومباشراً.",
            visionP2: "في DuctedExpert.com، نوفر للمقاولين والمكاتب الهندسية منصة شفافة بـ 0% عمولة، مع قوة ظهور حقيقية على جوجل للوصول إلى عملاء مباشرين.",
            visionBoxTitle: "نموذجنا الشفاف في نقاط:",
            visionBullets: [
                "0% عمولة على المبيعات وعقود المشاريع",
                "تواصل مباشر بينك وبين العميل دون أي وسيط",
                "صفحة متقدمة مهيأة للظهور في محركات البحث (SEO)",
                "أدوات كتابة المقالات والتحليل بالذكاء الاصطناعي"
            ],
            promoBanner: "عرض التدشين: باقة التميز لأول 100 عضو مسجل",
            chooseTitle1: "اختر الباقة المناسبة",
            chooseTitleHighlight: "لنشاط شركتك",
            chooseTitle2: "وابدأ الآن",
            chooseSubtitle: "تسجيل فوري وشفاف بدون أي التزامات مخفية",
            zeroCommissionBadge: "0% عمولة على عقودك",
            recommendedBadge: "الأكثر طلباً",
            freeLabel: "مجاناً",
            first100Badge: "أول 100 عضو",
            yearly: "سنوي",
            monthly: "شهري",
            perYearExclTax: "€ / سنوياً (غير شامل الضريبة)",
            perMonthExclTax: "€ / شهرياً (غير شامل الضريبة)",
            privilegeRate: "سعر خاص للتدشين",
            selectOfferBtn: "اختيار هذه الباقة",
            selectedBtn: "تم الاختيار ✓",
            officeCardTitle: "مكتب استشارات هندسية",
            officeCardSub: "لدراسات وتصاميم التكييف والأحمال الحرارية",
            officeFeatures: [
                "صفحة مهنية مخصصة لشركتك على جوجل",
                "استقبال طلبات دراسات وأحمال حرارية مباشرة",
                "نشر المشاريع وسابقة الأعمال الميدانية",
                "شارة مكتب هندسي معتمد",
                "0% عمولة على أتعاب الاستشارات"
            ],
            hvacCardTitle: "مقاول تكييف مركزي ومضخات حرارية",
            hvacCardSub: "لشركات التركيب والصيانة المعتمدة",
            hvacFeatures: [
                "ظهور مباشر في دليل الخبراء وعلى الخريطة",
                "استقبال طلبات عروض أسعار مباشرة من العملاء",
                "شارة خبير معتمد لتعزيز ثقة العملاء",
                "أدوات مقالات بالذكاء الاصطناعي وتدقيق SEO",
                "0% عمولة على كافة مبيعاتك وعقودك"
            ],
            step1Title: "1. بيانات الحساب والمسؤول",
            repNameLabel: "اسم المفوض / المسؤول *",
            emailLabel: "البريد الإلكتروني للعمل *",
            phoneLabel: "رقم الجوال *",
            passwordLabel: "كلمة المرور *",
            confirmPasswordLabel: "تأكيد كلمة المرور *",
            step2Title: "2. بيانات الشركة أو المؤسسة",
            countryLabel: "الدولة *",
            companyIdLabel: "رقم السجل التجاري / الترخيص *",
            companyIdPlaceholder: "رقم السجل التجاري أو الرخصة المهنية",
            companyNameLabel: "اسم الشركة *",
            taxNumberLabel: "الرقم الضريبي (إن وجد)",
            addressLabel: "عنوان المقر الرئيسي *",
            postalCodePlaceholder: "الرمز البريدي",
            cityPlaceholder: "المدينة",
            descriptionLabel: "نبذة عن الشركة وسابقة الأعمال *",
            descriptionPlaceholder: "صف نشاطكم، سنوات الخبرة، وأبرز المشاريع المنفذة...",
            step3Title: "3. الأنظمة والتخصصات المعتمدة",
            buildingsHeading: "أنواع المباني والمشاريع المنفذة",
            technologiesHeading: "أنظمة التكييف والتهوية المعتمدة",
            interventionsHeading: "مجالات العمل والخدمات",
            brandsHeading: "الماركات العالمية المعتمدة",
            certificationsHeading: "التراخيص والشهادات المهنية",
            summaryTitle: "ملخص الطلب",
            selectedPlanLabel: "الباقة المختارة",
            subtotalExclTax: "المبلغ قبل الضريبة:",
            vatLabel: "ضريبة القيمة المضافة:",
            totalInclTax: "الإجمالي شامل الضريبة:",
            noHiddenRenewal: "تجديد سنوي اختياري وبدون أي التزامات خفية",
            instantVisibility: "تفعيل فوري لصفحتك وظهور مباشر على محركات البحث",
            techSupportIncluded: "دعم فني مخصص للمحترفين باللغات العربية والإنجليزية والفرنسية",
            promoCodeLabel: "رمز الخصم الترويجي",
            submitFreeBtn: "إتمام التسجيل المجاني",
            submitPayBtn: "الانتقال للدفع الآمن عبر Stripe",
            secureStripeNote: "دفع مشفر وآمن 100% عبر بوابة Stripe العالمية",
            termsAcceptNote: "بالتسجيل، فإنك توافق على الشروط العامة للاستخدام وسياسة الخصوصية.",
            requiredFieldsAlert: "يرجى استكمال كافة الحقول الإلزامية المطلوبة.",
            passwordMismatchAlert: "كلمتا المرور غير متطابقتين.",
            successTitle: "تم تسجيل حسابك بنجاح!",
            successText: "أهلاً بك في شبكة DuctedExpert.com العالمية. تم تفعيل حسابك وإرسال تفاصيل الدخول إلى بريدك الإلكتروني.",
            backHomeBtn: "العودة إلى الصفحة الرئيسية",
        },
        footer: {
            legalNotice: "الإشعار القانوني",
            privacyPolicy: "سياسة الخصوصية",
            cookiesPolicy: "سياسة ملفات تعريف الارتباط",
            termsOfUse: "شروط الاستخدام العامة",
            termsOfSale: "الشروط العامة للبيع",
            findInstaller: "دليل مقاولي التكييف",
            whyDuctedExpert: "لماذا DuctedExpert.com",
            contact: "اتصل بنا",
            proSpace: "مساحة المحترفين",
            rightsReserved: "جميع الحقوق محفوظة."
        }
    }
};

export function getDictionary(locale?: string | null) {
    if (isValidLocale(locale)) {
        return DICTIONARY[locale];
    }
    return DICTIONARY[DEFAULT_LOCALE];
}
