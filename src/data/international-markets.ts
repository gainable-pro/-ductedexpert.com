export interface MarketCity {
    slug: string;
    name: string;
    region?: string;
    population?: number;
    summerHighC: number;
    winterLowC: number;
    priceLow: number;
    priceHigh: number;
    buildingTypeTip: Record<string, string>;
}

export interface MarketCountry {
    slug: string;
    code: string;
    name: Record<string, string>;
    defaultLocale: string;
    currency: {
        code: string;
        symbol: string;
        rateToEur?: number;
    };
    primaryTerm: Record<string, string>;
    grantName: Record<string, string>;
    grantAmount: string;
    cities: MarketCity[];
}

export const INTERNATIONAL_MARKETS: MarketCountry[] = [
    // ==========================================
    // 🇬🇧 UNITED KINGDOM (High Priority Market)
    // ==========================================
    {
        slug: "united-kingdom",
        code: "GB",
        name: {
            en: "United Kingdom",
            de: "Vereinigtes Königreich",
            es: "Reino Unido",
            it: "Regno Unito",
            fi: "Yhdistynyt kuningaskunta",
            ar: "المملكة المتحدة",
        },
        defaultLocale: "en",
        currency: { code: "GBP", symbol: "£" },
        primaryTerm: {
            en: "Ducted Heat Pumps & Concealed Air Conditioning",
            de: "Kanal-Wärmepumpen & Kanalklimaanlagen",
            es: "Bombas de calor por conductos",
            it: "Pompe di calore canalizzate",
            fi: "Kanavailmalämpöpumput",
            ar: "مضخات حرارية وتكييف كونسيلد مخفي",
        },
        grantName: {
            en: "Boiler Upgrade Scheme (BUS)",
            de: "Boiler Upgrade Scheme Förderprogramm",
            es: "Subvención Boiler Upgrade Scheme",
            it: "Incentivo Boiler Upgrade Scheme",
            fi: "Boiler Upgrade Scheme -avustus",
            ar: "دعم برنامج Boiler Upgrade Scheme الحكومي",
        },
        grantAmount: "£7,500",
        cities: [
            { slug: "london", name: "London", region: "Greater London", population: 8982000, summerHighC: 25, winterLowC: 2, priceLow: 9500, priceHigh: 18000, buildingTypeTip: { en: "Victorian and Edwardian townhouses & luxury modern apartments with false ceiling voids." } },
            { slug: "birmingham", name: "Birmingham", region: "West Midlands", population: 1149000, summerHighC: 23, winterLowC: 1, priceLow: 8500, priceHigh: 15500, buildingTypeTip: { en: "Semi-detached properties and detached suburban residences." } },
            { slug: "manchester", name: "Manchester", region: "Greater Manchester", population: 553000, summerHighC: 22, winterLowC: 1, priceLow: 8500, priceHigh: 15000, buildingTypeTip: { en: "Converted industrial lofts, terraces, and modern urban eco-homes." } },
            { slug: "leeds", name: "Leeds", region: "West Yorkshire", population: 789000, summerHighC: 22, winterLowC: 0, priceLow: 8000, priceHigh: 14500, buildingTypeTip: { en: "Stone-built Victorian homes and newly built residential estates." } },
            { slug: "glasgow", name: "Glasgow", region: "Scotland", population: 635000, summerHighC: 20, winterLowC: -1, priceLow: 9000, priceHigh: 16000, buildingTypeTip: { en: "High-ceiling tenement flats and detached Scottish villas." } },
            { slug: "liverpool", name: "Liverpool", region: "Merseyside", population: 498000, summerHighC: 21, winterLowC: 2, priceLow: 8000, priceHigh: 14500, buildingTypeTip: { en: "Georgian terraces and modern waterfront apartment complexes." } },
            { slug: "bristol", name: "Bristol", region: "South West", population: 467000, summerHighC: 24, winterLowC: 2, priceLow: 8500, priceHigh: 16000, buildingTypeTip: { en: "Eco-friendly low-carbon renovations and period Clifton townhouses." } },
            { slug: "edinburgh", name: "Edinburgh", region: "Scotland", population: 524000, summerHighC: 20, winterLowC: -1, priceLow: 9200, priceHigh: 16500, buildingTypeTip: { en: "Historic stone New Town apartments and modern suburban homes." } },
            { slug: "newcastle", name: "Newcastle upon Tyne", region: "North East", population: 300000, summerHighC: 21, winterLowC: 0, priceLow: 7800, priceHigh: 14000, buildingTypeTip: { en: "Tyneside flats and modern high-efficiency residential builds." } },
            { slug: "sheffield", name: "Sheffield", region: "South Yorkshire", population: 584000, summerHighC: 22, winterLowC: 1, priceLow: 8000, priceHigh: 14500, buildingTypeTip: { en: "Hilly topography residences requiring precision zone climate balancing." } },
            { slug: "belfast", name: "Belfast", region: "Northern Ireland", population: 343000, summerHighC: 20, winterLowC: 1, priceLow: 8000, priceHigh: 14500, buildingTypeTip: { en: "Modern detached homes and coastal residential developments." } },
            { slug: "nottingham", name: "Nottingham", region: "East Midlands", population: 331000, summerHighC: 23, winterLowC: 1, priceLow: 8000, priceHigh: 14500, buildingTypeTip: { en: "Suburban detached houses and Victorian family properties." } },
            { slug: "southampton", name: "Southampton", region: "Hampshire", population: 269000, summerHighC: 24, winterLowC: 3, priceLow: 8500, priceHigh: 15500, buildingTypeTip: { en: "South Coast properties with elevated summer cooling demand." } },
            { slug: "cambridge", name: "Cambridge", region: "Cambridgeshire", population: 145000, summerHighC: 24, winterLowC: 1, priceLow: 9500, priceHigh: 17500, buildingTypeTip: { en: "High-spec tech worker residences and sustainable eco-renovations." } },
            { slug: "oxford", name: "Oxford", region: "Oxfordshire", population: 162000, summerHighC: 24, winterLowC: 1, priceLow: 9500, priceHigh: 17500, buildingTypeTip: { en: "Character properties with discrete concealed duct requirements." } },
        ]
    },

    // ==========================================
    // 🇺🇸 UNITED STATES (World's #1 HVAC Market)
    // ==========================================
    {
        slug: "united-states",
        code: "US",
        name: {
            en: "United States",
            de: "Vereinigte Staaten",
            es: "Estados Unidos",
            it: "Stati Uniti",
            fi: "Yhdysvallat",
            ar: "الولايات المتحدة",
        },
        defaultLocale: "en",
        currency: { code: "USD", symbol: "$" },
        primaryTerm: {
            en: "Concealed Ducted Mini Split & Central Inverter Heat Pumps",
            de: "Verdeckte Kanalklimaanlagen & Inverter-Wärmepumpen",
            es: "Sistemas centrales por conductos y bombas de calor Inverter",
            it: "Pompe di calore canalizzate Inverter",
            fi: "Kanavoidut Invertteri-lämpöpumput",
            ar: "تكييف مركزي مخفي كونسيلد وإنفرتر موفر للطاقة",
        },
        grantName: {
            en: "Inflation Reduction Act (IRA) 25C Energy Efficient Home Improvement Credit",
            de: "Inflation Reduction Act (IRA) 25C Steuergutschrift",
            es: "Crédito Fiscal Federal IRA 25C",
            it: "Credito d'Imposta Federale IRA 25C",
            fi: "Liittovaltion IRA 25C -verovähennys",
            ar: "الائتمان الضريبي الفيدرالي الأمريكي قانون خفض التضخم IRA 25C",
        },
        grantAmount: "$2,000",
        cities: [
            { slug: "new-york", name: "New York", region: "NY", population: 8336817, summerHighC: 30, winterLowC: -2, priceLow: 13000, priceHigh: 28000, buildingTypeTip: { en: "Brownstones, co-op apartments, and luxury high-rises with soffit ceiling runs." } },
            { slug: "los-angeles", name: "Los Angeles", region: "CA", population: 3822238, summerHighC: 31, winterLowC: 9, priceLow: 12500, priceHigh: 25000, buildingTypeTip: { en: "Mid-century modern homes, Spanish villas, and strict California Title 24 compliance." } },
            { slug: "houston", name: "Houston", region: "TX", population: 2304580, summerHighC: 35, winterLowC: 7, priceLow: 11000, priceHigh: 22000, buildingTypeTip: { en: "Subtropical climate requiring heavy dehumidification and high-tonnage multi-zone airflow." } },
            { slug: "chicago", name: "Chicago", region: "IL", population: 2665039, summerHighC: 29, winterLowC: -7, priceLow: 12000, priceHigh: 24000, buildingTypeTip: { en: "Extreme cold climate inverter heat pumps capable of heating down to -15°F (-26°C)." } },
            { slug: "phoenix", name: "Phoenix", region: "AZ", population: 1644409, summerHighC: 42, winterLowC: 8, priceLow: 12000, priceHigh: 23000, buildingTypeTip: { en: "Ultra-high ambient cooling systems engineered for 115°F+ desert peak conditions." } },
            { slug: "dallas", name: "Dallas", region: "TX", population: 1304379, summerHighC: 36, winterLowC: 3, priceLow: 11500, priceHigh: 22500, buildingTypeTip: { en: "Expansive suburban single-family homes with attic duct installations." } },
            { slug: "miami", name: "Miami", region: "FL", population: 449514, summerHighC: 33, winterLowC: 16, priceLow: 11500, priceHigh: 23000, buildingTypeTip: { en: "Year-round cooling demand, marine-grade corrosion protection, and whole-home dehumidification." } },
            { slug: "austin", name: "Austin", region: "TX", population: 974447, summerHighC: 36, winterLowC: 5, priceLow: 12000, priceHigh: 24000, buildingTypeTip: { en: "Tech corridor eco-conscious renovations with smart Airzone multizone zoning." } },
            { slug: "atlanta", name: "Atlanta", region: "GA", population: 499127, summerHighC: 32, winterLowC: 2, priceLow: 11000, priceHigh: 22000, buildingTypeTip: { en: "Historic Craftsman homes and spacious split-level suburban residences." } },
            { slug: "san-diego", name: "San Diego", region: "CA", population: 1386932, summerHighC: 26, winterLowC: 10, priceLow: 13000, priceHigh: 26000, buildingTypeTip: { en: "Coastal microclimates favoring ultra-efficient inverter heating and cooling." } },
            { slug: "san-francisco", name: "San Francisco", region: "CA", population: 808437, summerHighC: 22, winterLowC: 8, priceLow: 14500, priceHigh: 29000, buildingTypeTip: { en: "Victorian homes converting from gas radiators to discrete hidden ducted mini splits." } },
            { slug: "seattle", name: "Seattle", region: "WA", population: 749256, summerHighC: 26, winterLowC: 2, priceLow: 13000, priceHigh: 26000, buildingTypeTip: { en: "Electrification mandates converting oil/gas heating to high-efficiency ducted heat pumps." } },
            { slug: "las-vegas", name: "Las Vegas", region: "NV", population: 656274, summerHighC: 41, winterLowC: 4, priceLow: 11500, priceHigh: 22500, buildingTypeTip: { en: "High SEER2 multi-zone ducted systems with programmable smart thermostats." } },
            { slug: "denver", name: "Denver", region: "CO", population: 713252, summerHighC: 31, winterLowC: -8, priceLow: 13000, priceHigh: 25000, buildingTypeTip: { en: "Mile-high altitude load calculations and extreme cold climate heat pump technology." } },
            { slug: "tampa", name: "Tampa", region: "FL", population: 398173, summerHighC: 33, winterLowC: 11, priceLow: 11000, priceHigh: 21500, buildingTypeTip: { en: "High-humidity coastal homes with variable-speed inverter dehumidification." } },
        ]
    },

    // ==========================================
    // 🇨🇦 CANADA (Quebec: Thermopompe / ROC: Heat Pump)
    // ==========================================
    {
        slug: "canada",
        code: "CA",
        name: {
            en: "Canada",
            de: "Kanada",
            es: "Canadá",
            it: "Canada",
            fi: "Kanada",
            ar: "كندا",
        },
        defaultLocale: "en",
        currency: { code: "CAD", symbol: "$" },
        primaryTerm: {
            en: "Central Ducted Heat Pumps & Cold-Climate Inverters",
            de: "Zentrale Kanal-Wärmepumpen für Kaltklima",
            es: "Bombas de calor centrales por conductos para climas fríos",
            it: "Pompe di calore canalizzate per climi freddi",
            fi: "Keskuslämpöpumput ankariin talviolosuhteisiin",
            ar: "مضخات حرارية مركزية وتكييف دكت للمناخ البارد",
        },
        grantName: {
            en: "Canada Greener Homes Affordability & Hydro-Québec LogisVert Subsidies",
            de: "Kanadische Bundesförderung & Hydro-Québec LogisVert",
            es: "Subsidios Federales de Canadá y LogisVert Hydro-Québec",
            it: "Incentivi Federali Canadesi e LogisVert Hydro-Québec",
            fi: "Kanadan valtion lämpöpumpputuet",
            ar: "برنامج دعم كندا الفيدرالي ودعم هيدرو-كيبيك لوجي-فير",
        },
        grantAmount: "$5,000+",
        cities: [
            { slug: "montreal", name: "Montréal", region: "QC", population: 1762949, summerHighC: 27, winterLowC: -14, priceLow: 12500, priceHigh: 22000, buildingTypeTip: { en: "Plex montréalais, maisons unifamiliales et condos nécessitant une thermopompe centrale certifiée basse température jusqu'à -30°C éligible à la subvention Hydro-Québec LogisVert." } },
            { slug: "quebec-city", name: "Québec", region: "QC", population: 549459, summerHighC: 25, winterLowC: -17, priceLow: 12000, priceHigh: 21500, buildingTypeTip: { en: "Résidences unifamiliales avec thermopompe gainable homologuée ÉnerGuide grand froid québécois." } },
            { slug: "toronto", name: "Toronto", region: "ON", population: 2794356, summerHighC: 27, winterLowC: -7, priceLow: 13000, priceHigh: 24000, buildingTypeTip: { en: "Detached and semi-detached homes replacing gas furnaces with central ducted heat pumps." } },
            { slug: "vancouver", name: "Vancouver", region: "BC", population: 662248, summerHighC: 23, winterLowC: 2, priceLow: 14000, priceHigh: 26000, buildingTypeTip: { en: "Mild coastal climate ideal for ultra-high seasonal efficiency heat pumps with CleanBC rebates." } },
            { slug: "calgary", name: "Calgary", region: "AB", population: 1306784, summerHighC: 24, winterLowC: -15, priceLow: 12500, priceHigh: 23000, buildingTypeTip: { en: "Cold-climate dual-fuel hybrid heat pump configurations with auxiliary electric/gas heat." } },
            { slug: "ottawa", name: "Ottawa", region: "ON", population: 1017449, summerHighC: 27, winterLowC: -14, priceLow: 12500, priceHigh: 23000, buildingTypeTip: { en: "Bilingual capital region homes maximizing both summer cooling and harsh winter heating." } },
            { slug: "edmonton", name: "Edmonton", region: "AB", population: 1010899, summerHighC: 24, winterLowC: -16, priceLow: 12000, priceHigh: 22500, buildingTypeTip: { en: "Extreme winter durability systems engineered for prolonged sub-zero performance." } },
            { slug: "laval", name: "Laval", region: "QC", population: 438366, summerHighC: 27, winterLowC: -14, priceLow: 12000, priceHigh: 21000, buildingTypeTip: { en: "Banlieue résidentielle avec grands espaces de combles facilitant l'intégration de gaines thermopompe." } },
        ]
    },

    // ==========================================
    // 🇩🇪 GERMANY (DACH Leader)
    // ==========================================
    {
        slug: "germany",
        code: "DE",
        name: {
            en: "Germany",
            de: "Deutschland",
            es: "Alemania",
            it: "Germania",
            fi: "Saksa",
            ar: "ألمانيا",
        },
        defaultLocale: "de",
        currency: { code: "EUR", symbol: "€" },
        primaryTerm: {
            en: "Ducted Air Conditioning & Central Inverter Heat Pumps",
            de: "Kanalklimaanlagen & Kanal-Wärmepumpen",
            es: "Climatización por conductos y bombas de calor",
            it: "Climatizzatori canalizzati e pompe di calore",
            fi: "Kanavailmalämpöpumput",
            ar: "أنظمة التكييف المركزي المخفي والمضخات الحرارية",
        },
        grantName: {
            en: "BAFA & KfW Energy-Efficient Building Grants (GEG)",
            de: "BAFA Bundesförderung für effiziente Gebäude (BEG) & KfW-Zuschuss (bis zu 70%)",
            es: "Subvenciones Federales BAFA y KfW",
            it: "Incentivi Federali Tedeschi BAFA e KfW",
            fi: "Saksan BAFA ja KfW -energiatuet",
            ar: "منح وكالة الطاقة الفيدرالية الألمانية BAFA وبنك KfW",
        },
        grantAmount: "bis zu 70%",
        cities: [
            { slug: "berlin", name: "Berlin", region: "Berlin", population: 3677472, summerHighC: 25, winterLowC: -1, priceLow: 11000, priceHigh: 21000, buildingTypeTip: { de: "Altbau-Wohnungen mit abgehängten Decken und moderne KfW-Effizienzhäuser." } },
            { slug: "munich", name: "München", region: "Bayern", population: 1488202, summerHighC: 24, winterLowC: -3, priceLow: 12500, priceHigh: 24000, buildingTypeTip: { de: "Gehobene Villen und Stadtwohnungen mit höchsten Ansprüchen an Flüsterbetrieb (< 21 dB(A))." } },
            { slug: "hamburg", name: "Hamburg", region: "Hamburg", population: 1852478, summerHighC: 23, winterLowC: 0, priceLow: 11500, priceHigh: 22000, buildingTypeTip: { de: "Norddeutsches Maritimes Klima mit Fokus auf Entfeuchtung und hocheffiziente Winterwärme." } },
            { slug: "cologne", name: "Köln", region: "Nordrhein-Westfalen", population: 1083498, summerHighC: 25, winterLowC: 2, priceLow: 10500, priceHigh: 20500, buildingTypeTip: { de: "Rheinland-Klima mit heißen Sommern und GEG-konformen Inverter-Kanaleinbaugeräten." } },
            { slug: "frankfurt", name: "Frankfurt am Main", region: "Hessen", population: 764104, summerHighC: 26, winterLowC: 1, priceLow: 12000, priceHigh: 23000, buildingTypeTip: { de: "Moderne Penthouses und energieeffiziente Büroumbauten mit unsichtbarer Klimatisierung." } },
            { slug: "stuttgart", name: "Stuttgart", region: "Baden-Württemberg", population: 630305, summerHighC: 25, winterLowC: 0, priceLow: 11800, priceHigh: 22500, buildingTypeTip: { de: "Kessellage mit hohen Sommertemperaturen und anspruchsvoller Gebäudeleittechnik." } },
            { slug: "dusseldorf", name: "Düsseldorf", region: "Nordrhein-Westfalen", population: 619294, summerHighC: 25, winterLowC: 2, priceLow: 11500, priceHigh: 22000, buildingTypeTip: { de: "Elegante Stadtvillen mit diskreter Mehrzonen-Temperaturregelung." } },
        ]
    },

    // ==========================================
    // 🇨🇭 SWITZERLAND (DACH Premium)
    // ==========================================
    {
        slug: "switzerland",
        code: "CH",
        name: {
            en: "Switzerland",
            de: "Schweiz",
            es: "Suiza",
            it: "Svizzera",
            fi: "Sveitsi",
            ar: "سويسرا",
        },
        defaultLocale: "de",
        currency: { code: "CHF", symbol: "CHF" },
        primaryTerm: {
            en: "Concealed Ducted Air Conditioning & Minergie Heat Pumps",
            de: "Kanalklimaanlagen & Minergie-Wärmepumpen",
            es: "Climatización por conductos Minergie",
            it: "Climatizzatori canalizzati Minergie",
            fi: "Kanavoidut Minergie-lämpöpumput",
            ar: "أنظمة التكييف المخفي ومضخات مينيرجي في سويسرا",
        },
        grantName: {
            en: "Das Gebäudeprogramm & Cantonal Energy Grants",
            de: "Das Gebäudeprogramm & Kantonale Förderbeiträge",
            es: "Programa Suizo de Edificación y Subvenciones Cantonales",
            it: "Il Programma Edifici e Incentivi Cantonali",
            fi: "Sveitsin kantonien energiatuet",
            ar: "برنامج المباني السويسري والدعم الكانتوني للطاقة",
        },
        grantAmount: "bis CHF 10,000",
        cities: [
            { slug: "zurich", name: "Zürich", region: "ZH", population: 421878, summerHighC: 25, winterLowC: -2, priceLow: 15000, priceHigh: 30000, buildingTypeTip: { de: "Hochexklusive Wohnresidenzen mit Minergie-A/P Zertifizierung und flüsterleisem Luftverteilsystem." } },
            { slug: "geneva", name: "Genève", region: "GE", population: 203856, summerHighC: 26, winterLowC: 0, priceLow: 16000, priceHigh: 32000, buildingTypeTip: { de: "Propriétés lémaniques de prestige avec climatisation invisible encastrée en faux plafond." } },
            { slug: "basel", name: "Basel", region: "BS", population: 173863, summerHighC: 26, winterLowC: 1, priceLow: 14500, priceHigh: 28000, buildingTypeTip: { de: "Klimatisierung von Stadtwohnungen im Dreiländereck mit strengen Lärmschutznormen." } },
            { slug: "lausanne", name: "Lausanne", region: "VD", population: 140202, summerHighC: 25, winterLowC: 1, priceLow: 15000, priceHigh: 29000, buildingTypeTip: { de: "Villas vaudoises avec pompes à chaleur réversibles gainées haute performance." } },
            { slug: "bern", name: "Bern", region: "BE", population: 134506, summerHighC: 24, winterLowC: -2, priceLow: 14000, priceHigh: 27000, buildingTypeTip: { de: "Bundesstadt-Wohnimmobilien mit umweltfreundlicher R32-Invertertechnik." } },
        ]
    },

    // ==========================================
    // 🇪🇸 SPAIN (Zoning & Airzone Leader)
    // ==========================================
    {
        slug: "spain",
        code: "ES",
        name: {
            en: "Spain",
            de: "Spanien",
            es: "España",
            it: "Spagna",
            fi: "Espanja",
            ar: "إسبانيا",
        },
        defaultLocale: "es",
        currency: { code: "EUR", symbol: "€" },
        primaryTerm: {
            en: "Ducted Air Conditioning & Airzone Zoning Systems",
            de: "Kanalklimaanlagen & Airzone-Zonensysteme",
            es: "Aire Acondicionado por Conductos y Aerotermia con Zonificación Airzone",
            it: "Climatizzazione canalizzata con zonificazione Airzone",
            fi: "Kanavoidut ilmastointijärjestelmät Airzone-vyöhykesäädöllä",
            ar: "تكييف مركزي دكت بنظام التحكم الذكي إيرزون Airzone",
        },
        grantName: {
            en: "NextGenerationEU Plan de Recuperación & CAEs",
            de: "NextGenerationEU & Spanische Energieeffizienz-Förderung",
            es: "Fondos Europeos NextGenerationEU y Certificados de Ahorro Energético (CAE)",
            it: "Fondi NextGenerationEU e Certificati di Risparmio Energetico",
            fi: "NextGenerationEU -energiatuet",
            ar: "حوافز الاتحاد الأوروبي للطاقة النظيفة NextGenerationEU",
        },
        grantAmount: "hasta 3.000 €",
        cities: [
            { slug: "madrid", name: "Madrid", region: "Comunidad de Madrid", population: 3305408, summerHighC: 34, winterLowC: 2, priceLow: 8500, priceHigh: 16500, buildingTypeTip: { es: "Pisos urbanos y chalets unifamiliares con sistema Airzone para regular la temperatura independiente de cada estancia." } },
            { slug: "barcelona", name: "Barcelona", region: "Cataluña", population: 1636762, summerHighC: 30, winterLowC: 8, priceLow: 9000, priceHigh: 17500, buildingTypeTip: { es: "Fincas modernistas en el Eixample con techos altos idóneos para falsos techos y rejillas lineales." } },
            { slug: "valencia", name: "Valencia", region: "Comunidad Valenciana", population: 792492, summerHighC: 31, winterLowC: 7, priceLow: 8000, priceHigh: 15500, buildingTypeTip: { es: "Clima mediterráneo húmedo donde la deshumidificación de los conductos inverter es imprescindible." } },
            { slug: "seville", name: "Sevilla", region: "Andalucía", population: 688711, summerHighC: 38, winterLowC: 6, priceLow: 8500, priceHigh: 16000, buildingTypeTip: { es: "Veranos extremos (+40°C) que demandan máquinas potentes clase A+++ de marcas líderes (Daikin, Mitsubishi)." } },
            { slug: "malaga", name: "Málaga", region: "Andalucía", population: 579076, summerHighC: 32, winterLowC: 9, priceLow: 8500, priceHigh: 16500, buildingTypeTip: { es: "Cuna de la multinacional Airzone: máxima integración domótica en villas de la Costa del Sol." } },
        ]
    },

    // ==========================================
    // 🇮🇹 ITALY
    // ==========================================
    {
        slug: "italy",
        code: "IT",
        name: {
            en: "Italy",
            de: "Italien",
            es: "Italia",
            it: "Italia",
            fi: "Italia",
            ar: "إيطاليا",
        },
        defaultLocale: "it",
        currency: { code: "EUR", symbol: "€" },
        primaryTerm: {
            en: "Concealed Ducted Air Conditioning & Heat Pumps",
            de: "Kanal-Klimaanlagen & Inverter-Wärmepumpen",
            es: "Climatizadores canalizados y aerotermia",
            it: "Climatizzatori Canalizzati e Pompe di Calore Invisibili",
            fi: "Kanavoidut ilmastointilaitteet ja lämpöpumput",
            ar: "أنظمة التكييف المخفي والمضخات الحرارية في إيطاليا",
        },
        grantName: {
            en: "Conto Termico 2.0 & Ecobonus 65%",
            de: "Italienischer Ecobonus 65% & Conto Termico",
            es: "Incentivos Italianos Ecobonus 65% y Conto Termico",
            it: "Detrazione Fiscale Ecobonus 65% e Incentivo Conto Termico 2.0",
            fi: "Italian Ecobonus 65% -verovähennys",
            ar: "برنامج الدعم الحكومي الإيطالي إيكوبونوس 65% وكونتو تيرميكو",
        },
        grantAmount: "fino al 65%",
        cities: [
            { slug: "rome", name: "Roma", region: "Lazio", population: 2873000, summerHighC: 32, winterLowC: 4, priceLow: 9000, priceHigh: 17500, buildingTypeTip: { it: "Appartamenti storici e attici con controsoffitti in cartongesso e bocchette di diffusione invisibili." } },
            { slug: "milan", name: "Milano", region: "Lombardia", population: 1396000, summerHighC: 30, winterLowC: 1, priceLow: 9800, priceHigh: 19000, buildingTypeTip: { it: "Ristrutturazioni di pregio e case di classe A con pompe di calore canalizzate a bassissimo impatto acustico." } },
            { slug: "naples", name: "Napoli", region: "Campania", population: 966000, summerHighC: 31, winterLowC: 6, priceLow: 8500, priceHigh: 16000, buildingTypeTip: { it: "Immobili residenziali con esigenza di raffrescamento continuo nei mesi estivi." } },
            { slug: "turin", name: "Torino", region: "Piemonte", population: 870000, summerHighC: 28, winterLowC: 0, priceLow: 9200, priceHigh: 18000, buildingTypeTip: { it: "Clima continentale piemontese ideale per la sostituzione delle vecchie caldaie con pompa di calore canalizzata." } },
        ]
    },

    // ==========================================
    // 🇫🇮 FINLAND (Nordic Extreme Cold Climate)
    // ==========================================
    {
        slug: "finland",
        code: "FI",
        name: {
            en: "Finland",
            de: "Finnland",
            es: "Finlandia",
            it: "Finlandia",
            fi: "Suomi",
            ar: "فنلندا",
        },
        defaultLocale: "fi",
        currency: { code: "EUR", symbol: "€" },
        primaryTerm: {
            en: "Ducted Heat Pumps for Cold Climate Heating & Cooling",
            de: "Kanavailmalämpöpumput arktiseen ilmastoon",
            es: "Bombas de calor por conductos para climas nórdicos",
            it: "Pompe di calore canalizzate per climi nordici",
            fi: "Kanavailmalämpöpumput ja Kanavoidut Ilmalämpöpumput",
            ar: "مضخات حرارية وتكييف كونسيلد مخفي للمناخ الاسكندنافي البارد",
        },
        grantName: {
            en: "Kotitalousvähennys (Household Tax Credit)",
            de: "Finnischer Kotitalousvähennys Steuervorteil",
            es: "Crédito Fiscal Kotitalousvähennys",
            it: "Detrazione Fiscale Finlandese Kotitalousvähennys",
            fi: "Kotitalousvähennys ja ELY-keskuksen energia-avustus",
            ar: "الخصم الضريبي المنزلي الفنلندي كوتيتالوس فاهينوس",
        },
        grantAmount: "jopa 2 250 €",
        cities: [
            { slug: "helsinki", name: "Helsinki", region: "Uusimaa", population: 658864, summerHighC: 22, winterLowC: -8, priceLow: 10500, priceHigh: 20000, buildingTypeTip: { fi: "Modernit kerrostalot ja omakotitalot, joissa tarvitaan energiatehokasta lämmitystä aina -30°C pakkasiin asti." } },
            { slug: "espoo", name: "Espoo", region: "Uusimaa", population: 297132, summerHighC: 22, winterLowC: -8, priceLow: 10500, priceHigh: 20500, buildingTypeTip: { fi: "Pientaloalueet ja modernit energiatehokkaat puutalot." } },
            { slug: "tampere", name: "Tampere", region: "Pirkanmaa", population: 244223, summerHighC: 22, winterLowC: -10, priceLow: 10000, priceHigh: 19500, buildingTypeTip: { fi: "Sisämaan ankarampi talvi-ilmasto ja kesän viilennystarpeet." } },
            { slug: "oulu", name: "Oulu", region: "Pohjois-Pohjanmaa", population: 209551, summerHighC: 20, winterLowC: -13, priceLow: 10000, priceHigh: 19000, buildingTypeTip: { fi: "Pohjoisen Suomen johtava kaupunki: huippuluokan pakkastoiminto ja hiljainen ilmanjako." } },
        ]
    },

    // ==========================================
    // 🇸🇦 SAUDI ARABIA & 🇦🇪 UAE & 🇶🇦 QATAR & 🇲🇦 MOROCCO (Arab World)
    // ==========================================
    {
        slug: "saudi-arabia",
        code: "SA",
        name: {
            en: "Saudi Arabia",
            de: "Saudi-Arabien",
            es: "Arabia Saudita",
            it: "Arabia Saudita",
            fi: "Saudi-Arabia",
            ar: "المملكة العربية السعودية",
        },
        defaultLocale: "ar",
        currency: { code: "SAR", symbol: "ر.س" },
        primaryTerm: {
            en: "Concealed Ducted Air Conditioning Systems",
            de: "Verdeckte Kanal-Klimaanlagen (T3 Tropenkompressor)",
            es: "Climatización central por conductos ocultos",
            it: "Sistemi di climatizzazione canalizzati ad alta resa",
            fi: "Trooppisen ilmaston kanavailmastointi",
            ar: "تكييف كونسيلد مخفي وتكييف مركزي دكت للمنازل والفلل",
        },
        grantName: {
            en: "Saudi Energy Efficiency Program (SEEC) / Tarshid",
            de: "SEEC Saudi Energieeffizienzprogramm",
            es: "Programa Saudí de Eficiencia Energética (SEEC)",
            it: "Programma di Efficienza Energetica Saudita (SEEC)",
            fi: "Saudi-Arabian energiatehokkuusohjelma SEEC",
            ar: "برنامج كفاءة الطاقة السعودي (ترشيد / مواصفات ساسو SASO)",
        },
        grantAmount: "توفير حتى 40% في فاتورة الكهرباء",
        cities: [
            { slug: "riyadh", name: "Riyadh", region: "Ar Riyad", population: 7676654, summerHighC: 45, winterLowC: 10, priceLow: 18000, priceHigh: 45000, buildingTypeTip: { ar: "فلل وقصور الرياض بتصاميم جبس بورد ديكورية تخفي دكت التكييف الكونسيلد مع فتحات جريلات خطية فائقة الأناقة." } },
            { slug: "jeddah", name: "Jeddah", region: "Makkah", population: 4697000, summerHighC: 39, winterLowC: 19, priceLow: 17000, priceHigh: 42000, buildingTypeTip: { ar: "رطوبة ساحلية عالية تتطلب تكييف كونسيلد بقدرة سحب رطوبة استثنائية وعزل نحاس وجريلات ضد التكثيف." } },
            { slug: "dammam", name: "Dammam", region: "Eastern Province", population: 1253000, summerHighC: 44, winterLowC: 11, priceLow: 16500, priceHigh: 40000, buildingTypeTip: { ar: "المنطقة الشرقية: كومبريسورات استوائية T3 معتمدة تتحمل العمل الشاق ودرجات حرارة تتجاوز 50 درجة مئوية." } },
            { slug: "khobar", name: "Al Khobar", region: "Eastern Province", population: 658000, summerHighC: 44, winterLowC: 12, priceLow: 17000, priceHigh: 42000, buildingTypeTip: { ar: "مجمعات سكنية وأبراج راقية على الخليج العربي تعتمد التكييف المخفي الصامت." } },
            { slug: "mecca", name: "Mecca", region: "Makkah", population: 2042000, summerHighC: 43, winterLowC: 20, priceLow: 17000, priceHigh: 42000, buildingTypeTip: { ar: "مشاريع سكنية وفندقية تعتمد على تكييف كونسيلد دكت فائق الهدوء وموفر للطاقة." } },
            { slug: "medina", name: "Medina", region: "Al Madinah", population: 1411000, summerHighC: 42, winterLowC: 12, priceLow: 16000, priceHigh: 38000, buildingTypeTip: { ar: "فلل ومجمعات سكنية مزودة بأنظمة تحكم ذكية في كل غرفة لخفض استهلاك الكهرباء." } },
            { slug: "tabuk", name: "Tabuk", region: "Tabuk", population: 657000, summerHighC: 38, winterLowC: 4, priceLow: 15500, priceHigh: 37000, buildingTypeTip: { ar: "منطقة شمالية تشهد برودة شتوية وحرارة صيفية، وتناسبها أنظمة التكييف الحار والبارد الموفرة." } },
            { slug: "buraidah", name: "Buraidah", region: "Al Qassim", population: 671000, summerHighC: 44, winterLowC: 7, priceLow: 15500, priceHigh: 36000, buildingTypeTip: { ar: "فلل منطقة القصيم مع عزل حراري فائق ومجاري هواء دكت معزولة بالصوف الزجاجي." } },
            { slug: "abha", name: "Abha", region: "Asir", population: 420000, summerHighC: 30, winterLowC: 6, priceLow: 15000, priceHigh: 35000, buildingTypeTip: { ar: "طبيعة جبلية تتطلب كفاءة تسخين وتبريد متوازنة مع تدفق هواء هادئ." } },
            { slug: "taif", name: "Taif", region: "Makkah", population: 688000, summerHighC: 35, winterLowC: 8, priceLow: 15500, priceHigh: 36000, buildingTypeTip: { ar: "فلل واستراحات الطائف مع تحكم حراري رقمي في الغرف." } },
            { slug: "jubail", name: "Jubail", region: "Eastern Province", population: 492000, summerHighC: 43, winterLowC: 10, priceLow: 16500, priceHigh: 39000, buildingTypeTip: { ar: "مدينة صناعية ساحلية تتطلب أجهزة معالجة هواء مقاومة للتآكل والأملاح." } },
            { slug: "yanbu", name: "Yanbu", region: "Al Madinah", population: 331000, summerHighC: 41, winterLowC: 14, priceLow: 16000, priceHigh: 38000, buildingTypeTip: { ar: "مشاريع الهيئة الملكية بينبع السكنية بمواصفات عالية لكفاءة استهلاك الكهرباء." } },
        ]
    },
    {
        slug: "united-arab-emirates",
        code: "AE",
        name: {
            en: "United Arab Emirates",
            de: "Vereinigte Arabische Emirate",
            es: "Emiratos Árabes Unidos",
            it: "Emirati Arabi Uniti",
            fi: "Yhdistyneet arabiemiirikunnat",
            ar: "الإمارات العربية المتحدة",
        },
        defaultLocale: "ar",
        currency: { code: "AED", symbol: "د.إ" },
        primaryTerm: {
            en: "Concealed Ducted Air Conditioning & VRV Systems",
            de: "Verdeckte Kanalklimatisierung & VRV-Systeme",
            es: "Climatización por conductos VRV para villas",
            it: "Sistemi VRV canalizzati per ville di lusso",
            fi: "Kanavoidut VRV-ilmastointijärjestelmät",
            ar: "تكييف كونسيلد مخفي وأنظمة VRV الذكية للفلل والشقق الفاخرة",
        },
        grantName: {
            en: "DEWA Shams & Estidama Green Building Regulations",
            de: "Estidama & DEWA Green Building Standards",
            es: "Normativas de Edificación Verde Estidama y DEWA",
            it: "Regolamenti per l'Edilizia Sostenibile Estidama e DEWA",
            fi: "Estidama-vihreän rakentamisen standardit",
            ar: "معايير الاستدامة وكفاءة الطاقة لهيئة كهرباء ومياه دبي (ديوا)",
        },
        grantAmount: "توفير حتى 45% في فاتورة التبريد",
        cities: [
            { slug: "dubai", name: "Dubai", region: "Dubai", population: 3549900, summerHighC: 42, winterLowC: 15, priceLow: 20000, priceHigh: 55000, buildingTypeTip: { ar: "فلل نخلة جميرا ودبي هيلز والبراري: تكييف كونسيلد عالي الفخامة مدمج مع الديكور المعماري وأنظمة سمارت هوم." } },
            { slug: "abu-dhabi", name: "Abu Dhabi", region: "Abu Dhabi", population: 1540000, summerHighC: 42, winterLowC: 14, priceLow: 19000, priceHigh: 50000, buildingTypeTip: { ar: "فلل جزيرة السعديات وياس بمواصفات استدامة ومعايير لؤلؤة الصارمة لكفاءة التبريد." } },
            { slug: "sharjah", name: "Sharjah", region: "Sharjah", population: 1786000, summerHighC: 41, winterLowC: 13, priceLow: 16000, priceHigh: 38000, buildingTypeTip: { ar: "مشاريع سكنية عائلية مع عزل هوائي مزدوج يمنع تسرب البرودة ويقلل الضوضاء." } },
            { slug: "al-ain", name: "Al Ain", region: "Abu Dhabi", population: 766000, summerHighC: 44, winterLowC: 12, priceLow: 17500, priceHigh: 42000, buildingTypeTip: { ar: "طبيعة صحراوية تتطلب تدفق هواء قوي وفلاتر مضادة للغبار." } },
            { slug: "ajman", name: "Ajman", region: "Ajman", population: 504000, summerHighC: 41, winterLowC: 14, priceLow: 15500, priceHigh: 36000, buildingTypeTip: { ar: "فلل ومجمعات سكنية حديثة بتكلفة تركيب اقتصادية وعائد ترشيد عالي." } },
            { slug: "ras-al-khaimah", name: "Ras Al Khaimah", region: "RAK", population: 400000, summerHighC: 41, winterLowC: 13, priceLow: 16000, priceHigh: 38000, buildingTypeTip: { ar: "مشاريع فلل الجولف والواجهات البحرية بنظام تكييف مركزي متكامل." } },
        ]
    },
    {
        slug: "qatar",
        code: "QA",
        name: {
            en: "Qatar",
            de: "Katar",
            es: "Catar",
            it: "Qatar",
            fi: "Qatar",
            ar: "دولة قطر",
        },
        defaultLocale: "ar",
        currency: { code: "QAR", symbol: "ر.ق" },
        primaryTerm: {
            en: "Concealed Ducted Air Conditioning & District Cooling Compatibility",
            de: "Verdeckte Kanal-Klimaanlagen in Katar",
            es: "Climatización por conductos en Catar",
            it: "Climatizzatori canalizzati in Qatar",
            fi: "Kanavoidut ilmastointilaitteet Qatarissa",
            ar: "تكييف كونسيلد مخفي دكت للفلل والقصور في قطر",
        },
        grantName: {
            en: "Tarsheed Kahramaa National Energy Efficiency Program",
            de: "Tarsheed Kahramaa Energieprogramm",
            es: "Programa Nacional de Eficiencia Energética Tarsheed",
            it: "Programma Tarsheed Kahramaa",
            fi: "Tarsheed Kahramaa -energiatehokkuus",
            ar: "البرنامج الوطني للترشيد وكفاءة الطاقة (ترشيد / كهرماء قطر)",
        },
        grantAmount: "وفر حتى 35% من استهلاك الكهرباء",
        cities: [
            { slug: "doha", name: "Doha", region: "Ad Dawhah", population: 2382000, summerHighC: 43, winterLowC: 14, priceLow: 19000, priceHigh: 48000, buildingTypeTip: { ar: "فلل الدوحة واللؤلؤة بمواصفات تكييف كونسيلد استثنائية مع شبكات دكت صامتة وفتحات جريلات عصرية." } },
            { slug: "lusail", name: "Lusail", region: "Al Daayen", population: 200000, summerHighC: 43, winterLowC: 14, priceLow: 21000, priceHigh: 52000, buildingTypeTip: { ar: "مدينة لوسيل المستقبلية الذكية: تكامل التكييف المخفي مع أنظمة المباني الخضراء GSAS." } },
            { slug: "al-rayyan", name: "Al Rayyan", region: "Al Rayyan", population: 605000, summerHighC: 43, winterLowC: 13, priceLow: 18500, priceHigh: 46000, buildingTypeTip: { ar: "فلل سكنية عائلية فسيحة مع توزيع هواء متوازن عبر مجاري هواء معزولة بالكامل." } },
            { slug: "al-wakrah", name: "Al Wakrah", region: "Al Wakrah", population: 300000, summerHighC: 42, winterLowC: 14, priceLow: 18000, priceHigh: 44000, buildingTypeTip: { ar: "مشاريع سكنية ساحلية جنوب الدوحة مع أجهزة تكييف كونسيلد مقاومة للرطوبة." } },
            { slug: "al-khor", name: "Al Khor", region: "Al Khor", population: 202000, summerHighC: 42, winterLowC: 13, priceLow: 17500, priceHigh: 42000, buildingTypeTip: { ar: "فلل ساحلية شمالية بتصاميم تجمع بين العزل القوي وخفض الضوضاء داخل غرف النوم." } },
        ]
    },
    {
        slug: "morocco",
        code: "MA",
        name: {
            en: "Morocco",
            de: "Marokko",
            es: "Marruecos",
            it: "Marocco",
            fi: "Marokko",
            ar: "المملكة المغربية",
        },
        defaultLocale: "ar",
        currency: { code: "MAD", symbol: "درهم" },
        primaryTerm: {
            en: "Ducted Air Conditioning & Reversible Heat Pumps",
            de: "Kanalklimaanlagen in Marokko",
            es: "Climatización por conductos en Marruecos",
            it: "Impianti canalizzati in Marocco",
            fi: "Kanavailmastointi Marokossa",
            ar: "تركيب تكييف كونسيلد gainable ومضخات حرارية في المغرب",
        },
        grantName: {
            en: "AMEE Moroccan Energy Efficiency Agency",
            de: "AMEE Marokkanische Energieeffizienz-Standards",
            es: "Agencia Marroquí de Eficiencia Energética AMEE",
            it: "Agenzia Marocchina per l'Efficienza Energetica AMEE",
            fi: "Marokon energiatehokkuusvirasto AMEE",
            ar: "الوكالة المغربية للنجاعة الطاقية (AMEE)",
        },
        grantAmount: "توفير يصل إلى 35% في الطاقة",
        cities: [
            { slug: "casablanca", name: "Casablanca", region: "Casablanca-Settat", population: 3711161, summerHighC: 28, winterLowC: 9, priceLow: 35000, priceHigh: 85000, buildingTypeTip: { ar: "فيلات أنفا وكاليفورنيا وشقق غوتيي: تكييف gainable عصري غير مرئي مدمج في الأسقف المعلقة." } },
            { slug: "rabat", name: "Rabat", region: "Rabat-Salé-Kénitra", population: 1932000, summerHighC: 28, winterLowC: 8, priceLow: 35000, priceHigh: 80000, buildingTypeTip: { ar: "فيلات السويسي وحي الرياض مع أنظمة إنفرتر صامتة وموفرة للطاقة." } },
            { slug: "marrakech", name: "Marrakech", region: "Marrakech-Safi", population: 1027000, summerHighC: 39, winterLowC: 6, priceLow: 38000, priceHigh: 90000, buildingTypeTip: { ar: "حرارة صيفية شديدة في مراكش تتطلب تكييف دكت قوي مع تحكم مستقل في كل غرفة." } },
            { slug: "tangier", name: "Tanger", region: "Tanger-Tétouan-Al Hoceïma", population: 1065000, summerHighC: 29, winterLowC: 9, priceLow: 33000, priceHigh: 78000, buildingTypeTip: { ar: "مشاريع سكنية ساحلية حديثة تطل على المضيق مع حلول تكييف وتدفئة مدمجة." } },
            { slug: "fes", name: "Fès", region: "Fès-Meknès", population: 1150000, summerHighC: 36, winterLowC: 5, priceLow: 32000, priceHigh: 75000, buildingTypeTip: { ar: "صيف حار وشتاء بارد في فاس: أنظمة تكييف gainable إنفرتر للتدفئة والتبريد معاً." } },
            { slug: "agadir", name: "Agadir", region: "Souss-Massa", population: 924000, summerHighC: 30, winterLowC: 10, priceLow: 32000, priceHigh: 76000, buildingTypeTip: { ar: "مناخ ساحلي سوسي معتدل يناسبه تكييف الهواء المخفي عالي التوفير في استهلاك الكهرباء." } },
            { slug: "meknes", name: "Meknès", region: "Fès-Meknès", population: 632000, summerHighC: 36, winterLowC: 5, priceLow: 31000, priceHigh: 72000, buildingTypeTip: { ar: "فيلات ومنازل عائلية مع عزل هوائي وتوزيع دكت عبر فتحات ديكورية راقية." } },
        ]
    }
];

export function getMarketCountry(slugOrCode: string): MarketCountry | undefined {
    const s = slugOrCode.toLowerCase();
    return INTERNATIONAL_MARKETS.find(c => c.slug === s || c.code.toLowerCase() === s);
}

export function getMarketCity(countrySlug: string, citySlug: string): { country: MarketCountry; city: MarketCity } | undefined {
    const country = getMarketCountry(countrySlug);
    if (!country) return undefined;
    const city = country.cities.find(c => c.slug === citySlug.toLowerCase());
    if (!city) return undefined;
    return { country, city };
}
