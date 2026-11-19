import { Locale } from "./i18n";

export const LABELS_CONTENT: Record<Locale, {
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
            "Canalizzazioni sottodimensionate o rumorose chiuse nei controsoffitti",
            "Assenza di polizza assicurativa o patentino F-Gas obbligatorio",
            "Subappalti non dichiarati e nessun servizio di assistenza post-vendita",
            "Preventivi opachi rivenduti da piattaforme di lead generation",
        ],
        goodPointsTitle: "Garanzie di un Esperto Verificato DuctedExpert®:",
        goodPoints: [
            "Azienda verificata per registrazione, polizza RC e patentino F-Gas",
            "Contatto diretto e prezzi trasparenti con 0% commissioni",
            "Competenza dimostrata su impianti canalizzati, sistemi a zone e pompe di calore",
            "Impegno per avviamento, collaudo, garanzia e manutenzione",
        ],
        criteriaTitle: "I Nostri 4 Pilastri di Qualità e Verifica",
        criteriaSub: "Ogni professionista con il marchio Esperto Verificato DuctedExpert® rispetta rigidi standard di eccellenza.",
        criteria: [
            { title: "1. Regolarità Giuridica e Societaria", desc: "Controllo iscrizione CCIAA e reale attività aziendale sul mercato." },
            { title: "2. Assicurazione & Patentino F-Gas", desc: "Convalida della polizza assicurativa professionale e certificati F-Gas." },
            { title: "3. Competenza Tecnica Specialistica", desc: "Comprovata esperienza in climatizzazione canalizzata, pompe di calore e VRV/VRF." },
            { title: "4. Carta di Impegno Verso il Cliente", desc: "Preventivi chiari, rispetto dei tempi di consegna e assistenza post-vendita." },
        ],
        ctaTitle: "Pronto a realizzare il tuo impianto con un Esperto Verificato?",
        ctaSub: "Consulta l'elenco degli installatori verificati o iscrivi la tua azienda a DuctedExpert.com.",
    },
};

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
