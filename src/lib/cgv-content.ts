// src/lib/cgv-content.ts
import { Locale } from "./i18n";
import { LegalArticle } from "./cgu-content";

export interface CgvPageData {
    metaTitle: string;
    metaDesc: string;
    breadcrumbHome: string;
    badge: string;
    title: string;
    subtitle: string;
    lastUpdate: string;
    officialSiteLabel: string;
    officialSiteUrl: string;
    officialSiteText: string;
    providerBox: {
        title: string;
        p1: string;
        p2: string;
        websiteLine: string;
    };
    articles: LegalArticle[];
}

export const CGV_CONTENT: Record<string, CgvPageData> = {
    "en": {
        "metaTitle": "Professional Terms of Sale (CGV) | DuctedExpert.com",
        "metaDesc": "Professional Terms of Sale governing subscriptions, Verified Expert accreditations, and digital tools on DuctedExpert.com.",
        "breadcrumbHome": "Back to Home",
        "badge": "B2B Contractual Framework • Terms of Sale",
        "title": "PROFESSIONAL TERMS OF SALE",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Service Provider & Corporate Identity",
            "p1": "The professional subscription and visibility services available via www.ductedexpert.com are marketed and provided by EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Headquarters: 60 Rue François 1er, 75008 Paris, France. Dedicated contractor support: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Provider & Scope",
                "content": "These Professional Terms of Sale govern all contractual relationships between EXCEED DIGITAL SAS ('the Provider'), publisher of the website https://www.ductedexpert.com, and any HVAC contractor, installer, or engineering consultancy ('the Professional') subscribing to an active membership on the Platform."
            },
            {
                "num": "ARTICLE 2",
                "title": "Purpose of the Services",
                "content": "The subscription granted by DuctedExpert.com provides the Professional with: (i) an optimized public showcase page on www.ductedexpert.com, (ii) accreditation and display of the 'Verified Expert' seal upon document validation, (iii) AI-powered SEO technical article creation tools, and (iv) direct receipt of qualified project inquiries from property owners."
            },
            {
                "num": "ARTICLE 3",
                "title": "The 0% Commission Principle on Contracting",
                "content": "DuctedExpert operates on a pure SaaS membership model. DuctedExpert takes ZERO commission (0%) on quotes signed, equipment sold, or contracts finalized between the Professional and end clients. All revenues generated through inquiries remain 100% the property of the Professional."
            },
            {
                "num": "ARTICLE 4",
                "title": "Accreditation & Mandatory Document Verification",
                "content": "To maintain the high reputation of the network, activation of the Verified Expert badge requires submission of: (i) official commercial registration certificate, (ii) active professional liability and decennial insurance covering HVAC/thermal engineering, (iii) certified F-Gas refrigerant handling license, and (iv) official corporate banking identification (RIB). DuctedExpert reserves the right to refuse or suspend any application failing compliance."
            },
            {
                "num": "ARTICLE 5",
                "title": "Subscription Plans, Pricing & Payment",
                "content": "Services are available under annual or monthly plans at the rates published on www.ductedexpert.com. All prices are stated exclusive of taxes (HT). Payments are processed securely via Stripe. In the case of annual subscriptions, the full annual fee is billed at activation."
            },
            {
                "num": "ARTICLE 6",
                "title": "14-Day Professional Money-Back Guarantee",
                "content": "Although statutory consumer withdrawal rights do not apply between commercial entities, DuctedExpert grants a voluntary 14-day commercial satisfaction guarantee starting from contract activation, allowing the Professional to request full cancellation if unsatisfied."
            },
            {
                "num": "ARTICLE 7",
                "title": "Term, Renewal & Cancellation",
                "content": "Annual plans are contracted for a firm period of twelve (12) months. Unless notice of non-renewal is submitted through the Pro Portal billing settings prior to the annual anniversary date, the subscription renews automatically for successive periods of 12 months."
            },
            {
                "num": "ARTICLE 8",
                "title": "Independent Contractor Status",
                "content": "The Professional operates with total technical, commercial, and operational independence. The Professional determines their own quote prices, selects brands and materials, and remains exclusively liable for works performed on customer job sites."
            },
            {
                "num": "ARTICLE 9",
                "title": "AI SEO Tools & Publication Quotas",
                "content": "The Professional is granted access to specialized AI content generation tools to publish localized HVAC articles on their showcase page. The Professional retains full editorial control and responsibility for reviewing published text for technical accuracy."
            },
            {
                "num": "ARTICLE 10",
                "title": "Intellectual Property & Platform Rights",
                "content": "The Professional grants DuctedExpert a non-exclusive license to display their company logo, business name, and project photos on www.ductedexpert.com during the subscription term for self-promotion and directory indexing."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Competent Jurisdiction",
                "content": "These Terms of Sale and all commercial relations between the parties are governed by French law. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Commercial Court of Paris (Tribunal de Commerce de Paris), France."
            }
        ]
    },
    "fr": {
        "metaTitle": "Conditions Générales de Vente Professionnelles (CGV) | DuctedExpert.com",
        "metaDesc": "Conditions Générales de Vente professionnelles régissant les abonnements et prestations de visibilité sur DuctedExpert.com.",
        "breadcrumbHome": "Retour à l'accueil",
        "badge": "Cadre Contractuel B2B • Conditions de Vente Pro",
        "title": "CONDITIONS GÉNÉRALES DE VENTE PROFESSIONNELLES",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Dernière mise à jour : Novembre 2026",
        "officialSiteLabel": "Site officiel de la plateforme :",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Identification du Prestataire & Informations Légales",
            "p1": "Les prestations de référencement professionnel, d'accréditation et de visibilité sur www.ductedexpert.com sont fournies par EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Siège social : 60 Rue François 1er, 75008 Paris, France. Support pro dédié : contact@ductedexpert.com.",
            "websiteLine": "Site officiel : www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification du Prestataire et Champ d'Application",
                "content": "Les présentes Conditions Générales de Vente professionnelles régissent l'ensemble des relations contractuelles entre EXCEED DIGITAL SAS (« le Prestataire »), éditrice du site https://www.ductedexpert.com, et tout professionnel de la climatisation, frigoriste ou bureau d'études (« le Professionnel ») souscrivant un abonnement sur la Plateforme."
            },
            {
                "num": "ARTICLE 2",
                "title": "Objet des Prestations",
                "content": "L'abonnement confère au Professionnel : (i) une page vitrine personnalisée sur www.ductedexpert.com, (ii) l'attribution du badge officiel « Expert Vérifié » après validation des pièces justificatives, (iii) l'accès aux outils IA de rédaction SEO pour valoriser son expertise, et (iv) la réception directe de demandes de projets sans intermédiaire."
            },
            {
                "num": "ARTICLE 3",
                "title": "Principe Fondamental du 0 % de Commission",
                "content": "DuctedExpert fonctionne selon un modèle d'abonnement logiciel pur (SaaS). DuctedExpert ne prélève AUCUNE commission (0 %) sur les devis, matériels vendus ou contrats signés entre le Professionnel et ses clients. 100 % du chiffre d'affaires reste acquis au Professionnel."
            },
            {
                "num": "ARTICLE 4",
                "title": "Conditions d'Accréditation et Vérification Documentaire",
                "content": "L'activation du badge Expert Vérifié nécessite la fourniture : (i) d'un extrait d'immatriculation officiel, (ii) d'une attestation d'assurance décennale et RC Pro couvrant expressément le génie climatique et la climatisation, (iii) d'une attestation de capacité fluides frigorigènes valide, et (iv) d'un RIB officiel. DuctedExpert se réserve le droit de refuser toute adhésion non conforme."
            },
            {
                "num": "ARTICLE 5",
                "title": "Tarifs, Modalités de Paiement & Facturation",
                "content": "Les services sont souscrits selon les tarifs en vigueur affichés sur www.ductedexpert.com, en formule annuelle ou mensuelle. Les règlements s'effectuent par paiement sécurisé Stripe. Les factures sont téléchargeables immédiatement depuis l'espace pro."
            },
            {
                "num": "ARTICLE 6",
                "title": "Garantie Commerciale de 14 Jours",
                "content": "Bien que le droit de rétractation légal ne s'applique pas entre professionnels, DuctedExpert accorde une garantie contractuelle de 14 jours permettant au professionnel d'annuler son abonnement et d'obtenir un remboursement intégral en cas d'insatisfaction."
            },
            {
                "num": "ARTICLE 7",
                "title": "Durée d'Engagement & Reconduction",
                "content": "L'abonnement annuel est conclu pour une durée ferme de douze (12) mois. Il est reconductible tacitement pour des périodes successives de 12 mois, sauf résiliation notifiée avant la date d'échéance depuis l'espace pro."
            },
            {
                "num": "ARTICLE 8",
                "title": "Indépendance et Responsabilité Professionnelle",
                "content": "Le Professionnel exerce son activité en totale indépendance. Il fixe librement ses tarifs et demeure seul responsable de ses devis, de la conformité de ses installations et du service après-vente auprès de ses clients."
            },
            {
                "num": "ARTICLE 9",
                "title": "Outils IA & Publications SEO",
                "content": "Le Professionnel dispose d'outils d'assistance à la rédaction pour publier des articles techniques sur sa page vitrine. Il conserve la responsabilité éditoriale des contenus publiés."
            },
            {
                "num": "ARTICLE 10",
                "title": "Propriété Intellectuelle & Droits sur les Contenus",
                "content": "Le Professionnel autorise DuctedExpert à diffuser son logo, ses réalisations et sa marque sur www.ductedexpert.com pendant la durée de l'abonnement à des fins exclusives de valorisation de son profil."
            },
            {
                "num": "ARTICLE 11",
                "title": "Droit Applicable & Tribunal Compétent",
                "content": "Les présentes CGV sont soumises au droit français. Tout litige relatif à leur validité, interprétation ou exécution sera soumis à la compétence exclusive du Tribunal de Commerce de Paris, France."
            }
        ]
    },
    "ar": {
        "metaTitle": "الشروط العامة للبيع للمحترفين (CGV) | DuctedExpert.com",
        "metaDesc": "الشروط التعاقدية لبيع الاشتراكات المهنية وخدمات الظهور والاعتماد على منصة DuctedExpert.com.",
        "breadcrumbHome": "العودة للرئيسية",
        "badge": "الإطار التعاقدي B2B • شروط البيع للمحترفين",
        "title": "الشروط العامة للبيع للمحترفين",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "آخر تحديث : نوفمبر 2026",
        "officialSiteLabel": "الموقع الإلكتروني الرسمي للمنصة:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "بيانات الشركة المزودة للخدمة والمعلومات الرسمية",
            "p1": "يتم تسويق وتقديم خدمات الاشتراكات المهنية وشارات الاعتماد عبر www.ductedexpert.com بواسطة شركة EXCEED DIGITAL SAS المسجلة في السجل التجاري برقم SIREN 929 458 522.",
            "p2": "المقر الرئيسي: 60 Rue François 1er, 75008 باريس، فرنسا. الدعم الفني المخصص للمحترفين: contact@ductedexpert.com.",
            "websiteLine": "الموقع الإلكتروني الرسمي: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "المادة 1",
                "title": "هوية مزود الخدمة ونطاق التطبيق",
                "content": "تحكم هذه الشروط العامة للبيع العلاقات التعاقدية بين شركة EXCEED DIGITAL SAS ('المزود')، المشغلة للموقع https://www.ductedexpert.com، وأي شركة مقاولات تكييف، فني تبريد، أو مكتب استشارات هندسية ('المهني / العضو') يشترك في خدمات المنصة."
            },
            {
                "num": "المادة 2",
                "title": "موضوع الخدمات ومزايا الاشتراك",
                "content": "يمنح الاشتراك العضو: (1) صفحة مهنية متقدمة على موقع www.ductedexpert.com مهيأة للظهور في محركات البحث، (2) منح شارة 'خبير معتمد' بعد التدقيق المستندي، (3) أدوات الذكاء الاصطناعي لكتابة مقالات تخصصية (SEO)، و(4) استقبال طلبات مشاريع مباشرة من العملاء دون وسطاء."
            },
            {
                "num": "المادة 3",
                "title": "المبدأ الجوهري: 0% عمولة على المبيعات",
                "content": "تعتمد DuctedExpert نموذج اشتراك برمجي خالص (SaaS). لا تتقاضى المنصة أي عمولة (0%) على عقود المشاريع أو مبيعات الأجهزة المبرمة بين العضو وعملائه. وتعود كامل إيرادات المشاريع للعضو بنسبة 100%."
            },
            {
                "num": "المادة 4",
                "title": "شروط الاعتماد والفحص المستندي",
                "content": "يتطلب تفعيل شارة خبير معتمد تقديم: (1) سجل تجاري أو ترخيص مهني سارٍ، (2) وثيقة تأمين مسؤولية مهنية CVC سارية، (3) شهادات التعامل مع غازات التبريد، و(4) آيبان بنكي رسمي للمؤسسة. وتحتفظ المنصة بالحق في رفض أي ملف غير مطابق للمعايير."
            },
            {
                "num": "المادة 5",
                "title": "الأسعار، وسائل الدفع والفواتير",
                "content": "تُحدد أسعار الباقات بالخيارات السنوية أو الشهرية وفقاً للأسعار المعلنة على www.ductedexpert.com. تتم المدفوعات بصورة مشفرة وآمنة عبر Stripe. وتتاح الفواتير الضريبية للتحميل فوراً من لوحة التحكم."
            },
            {
                "num": "المادة 6",
                "title": "ضمان الاسترجاع التجاري خلال 14 يوماً",
                "content": "تمنح DuctedExpert ضمان رضا تجاري لمدة 14 يوماً يبدأ من تاريخ تفعيل الاشتراك، يتيح للمشترك طلب إلغاء الاشتراك واسترداد كامل المبلغ المدفوع في حال عدم الرضا."
            },
            {
                "num": "المادة 7",
                "title": "مدة العقد والتجديد",
                "content": "يُبرم الاشتراك السنوي لمدة ملزمة مدتها اثنا عشر (12) شهراً. ويتجدد تلقائياً لفترات مماثلة ما لم يقم المشترك بطلب إيقاف التجديد من لوحة التحكم قبل تاريخ الاستحقاق السنوي."
            },
            {
                "num": "المادة 8",
                "title": "استقلالية المهني ومسؤوليته الميدانية",
                "content": "يمارس المشترك نشاطه بكامل الاستقلالية الفنية والمالية، ويحدد أسعاره بحرية ويبقى المسؤول الحصري أمام عملائه عن سلامة التركيبات والمواصفات وخدمات ما بعد البيع."
            },
            {
                "num": "المادة 9",
                "title": "أدوات المقالات والذكاء الاصطناعي",
                "content": "توفر المنصة أدوات ذكاء اصطناعي لتوليد مقالات فنية ترفع ترتيب الصفحة في محركات البحث، ويتحمل المشترك مسؤولية المراجعة الفنية لمحتوى مقالاته قبل النشر."
            },
            {
                "num": "المادة 10",
                "title": "الملكية الفكرية وحقوق النشر",
                "content": "يرخص المشترك لمنصة DuctedExpert عرض شعاره واسم مؤسسته وصور مشاريعه على www.ductedexpert.com طوال مدة اشتراكه لغرض إبراز ملفه المهني وتعزيز ظهوره."
            },
            {
                "num": "المادة 11",
                "title": "القانون الواجب التطبيق والاختصاص القضائي",
                "content": "تخضع هذه الشروط العامة للبيع للقوانين المعمول بها. وفي حال حدوث أي نزاع تجاري يتعذر حله ودياً، يُحال النزاع إلى الاختصاص الحصري للمحكمة التجارية في باريس، فرنسا."
            }
        ]
    },
    "de": {
        "metaTitle": "Allgemeine Verkaufsbedingungen (AVB) | DuctedExpert.com",
        "metaDesc": "Allgemeine Verkaufsbedingungen für B2B-Mitgliedschaften und Fachbetriebs-Akkreditierungen auf DuctedExpert.com.",
        "breadcrumbHome": "Zurück zur Startseite",
        "badge": "B2B-Vertragsrahmen • Verkaufsbedingungen",
        "title": "ALLGEMEINE VERKAUFSBEDINGUNGEN",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Service Provider & Corporate Identity",
            "p1": "The professional subscription and visibility services available via www.ductedexpert.com are marketed and provided by EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Headquarters: 60 Rue François 1er, 75008 Paris, France. Dedicated contractor support: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Provider & Scope",
                "content": "These Professional Terms of Sale govern all contractual relationships between EXCEED DIGITAL SAS ('the Provider'), publisher of the website https://www.ductedexpert.com, and any HVAC contractor, installer, or engineering consultancy ('the Professional') subscribing to an active membership on the Platform."
            },
            {
                "num": "ARTICLE 2",
                "title": "Purpose of the Services",
                "content": "The subscription granted by DuctedExpert.com provides the Professional with: (i) an optimized public showcase page on www.ductedexpert.com, (ii) accreditation and display of the 'Verified Expert' seal upon document validation, (iii) AI-powered SEO technical article creation tools, and (iv) direct receipt of qualified project inquiries from property owners."
            },
            {
                "num": "ARTICLE 3",
                "title": "The 0% Commission Principle on Contracting",
                "content": "DuctedExpert operates on a pure SaaS membership model. DuctedExpert takes ZERO commission (0%) on quotes signed, equipment sold, or contracts finalized between the Professional and end clients. All revenues generated through inquiries remain 100% the property of the Professional."
            },
            {
                "num": "ARTICLE 4",
                "title": "Accreditation & Mandatory Document Verification",
                "content": "To maintain the high reputation of the network, activation of the Verified Expert badge requires submission of: (i) official commercial registration certificate, (ii) active professional liability and decennial insurance covering HVAC/thermal engineering, (iii) certified F-Gas refrigerant handling license, and (iv) official corporate banking identification (RIB). DuctedExpert reserves the right to refuse or suspend any application failing compliance."
            },
            {
                "num": "ARTICLE 5",
                "title": "Subscription Plans, Pricing & Payment",
                "content": "Services are available under annual or monthly plans at the rates published on www.ductedexpert.com. All prices are stated exclusive of taxes (HT). Payments are processed securely via Stripe. In the case of annual subscriptions, the full annual fee is billed at activation."
            },
            {
                "num": "ARTICLE 6",
                "title": "14-Day Professional Money-Back Guarantee",
                "content": "Although statutory consumer withdrawal rights do not apply between commercial entities, DuctedExpert grants a voluntary 14-day commercial satisfaction guarantee starting from contract activation, allowing the Professional to request full cancellation if unsatisfied."
            },
            {
                "num": "ARTICLE 7",
                "title": "Term, Renewal & Cancellation",
                "content": "Annual plans are contracted for a firm period of twelve (12) months. Unless notice of non-renewal is submitted through the Pro Portal billing settings prior to the annual anniversary date, the subscription renews automatically for successive periods of 12 months."
            },
            {
                "num": "ARTICLE 8",
                "title": "Independent Contractor Status",
                "content": "The Professional operates with total technical, commercial, and operational independence. The Professional determines their own quote prices, selects brands and materials, and remains exclusively liable for works performed on customer job sites."
            },
            {
                "num": "ARTICLE 9",
                "title": "AI SEO Tools & Publication Quotas",
                "content": "The Professional is granted access to specialized AI content generation tools to publish localized HVAC articles on their showcase page. The Professional retains full editorial control and responsibility for reviewing published text for technical accuracy."
            },
            {
                "num": "ARTICLE 10",
                "title": "Intellectual Property & Platform Rights",
                "content": "The Professional grants DuctedExpert a non-exclusive license to display their company logo, business name, and project photos on www.ductedexpert.com during the subscription term for self-promotion and directory indexing."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Competent Jurisdiction",
                "content": "These Terms of Sale and all commercial relations between the parties are governed by French law. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Commercial Court of Paris (Tribunal de Commerce de Paris), France."
            }
        ]
    },
    "es": {
        "metaTitle": "Condiciones Generales de Venta Profesionales (CGV) | DuctedExpert.com",
        "metaDesc": "Condiciones Generales de Venta que rigen las suscripciones profesionales y herramientas de visibilidad en DuctedExpert.com.",
        "breadcrumbHome": "Volver al inicio",
        "badge": "Marco Contractual B2B • Condiciones de Venta",
        "title": "CONDICIONES GENERALES DE VENTA PROFESIONALES",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Service Provider & Corporate Identity",
            "p1": "The professional subscription and visibility services available via www.ductedexpert.com are marketed and provided by EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Headquarters: 60 Rue François 1er, 75008 Paris, France. Dedicated contractor support: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Provider & Scope",
                "content": "These Professional Terms of Sale govern all contractual relationships between EXCEED DIGITAL SAS ('the Provider'), publisher of the website https://www.ductedexpert.com, and any HVAC contractor, installer, or engineering consultancy ('the Professional') subscribing to an active membership on the Platform."
            },
            {
                "num": "ARTICLE 2",
                "title": "Purpose of the Services",
                "content": "The subscription granted by DuctedExpert.com provides the Professional with: (i) an optimized public showcase page on www.ductedexpert.com, (ii) accreditation and display of the 'Verified Expert' seal upon document validation, (iii) AI-powered SEO technical article creation tools, and (iv) direct receipt of qualified project inquiries from property owners."
            },
            {
                "num": "ARTICLE 3",
                "title": "The 0% Commission Principle on Contracting",
                "content": "DuctedExpert operates on a pure SaaS membership model. DuctedExpert takes ZERO commission (0%) on quotes signed, equipment sold, or contracts finalized between the Professional and end clients. All revenues generated through inquiries remain 100% the property of the Professional."
            },
            {
                "num": "ARTICLE 4",
                "title": "Accreditation & Mandatory Document Verification",
                "content": "To maintain the high reputation of the network, activation of the Verified Expert badge requires submission of: (i) official commercial registration certificate, (ii) active professional liability and decennial insurance covering HVAC/thermal engineering, (iii) certified F-Gas refrigerant handling license, and (iv) official corporate banking identification (RIB). DuctedExpert reserves the right to refuse or suspend any application failing compliance."
            },
            {
                "num": "ARTICLE 5",
                "title": "Subscription Plans, Pricing & Payment",
                "content": "Services are available under annual or monthly plans at the rates published on www.ductedexpert.com. All prices are stated exclusive of taxes (HT). Payments are processed securely via Stripe. In the case of annual subscriptions, the full annual fee is billed at activation."
            },
            {
                "num": "ARTICLE 6",
                "title": "14-Day Professional Money-Back Guarantee",
                "content": "Although statutory consumer withdrawal rights do not apply between commercial entities, DuctedExpert grants a voluntary 14-day commercial satisfaction guarantee starting from contract activation, allowing the Professional to request full cancellation if unsatisfied."
            },
            {
                "num": "ARTICLE 7",
                "title": "Term, Renewal & Cancellation",
                "content": "Annual plans are contracted for a firm period of twelve (12) months. Unless notice of non-renewal is submitted through the Pro Portal billing settings prior to the annual anniversary date, the subscription renews automatically for successive periods of 12 months."
            },
            {
                "num": "ARTICLE 8",
                "title": "Independent Contractor Status",
                "content": "The Professional operates with total technical, commercial, and operational independence. The Professional determines their own quote prices, selects brands and materials, and remains exclusively liable for works performed on customer job sites."
            },
            {
                "num": "ARTICLE 9",
                "title": "AI SEO Tools & Publication Quotas",
                "content": "The Professional is granted access to specialized AI content generation tools to publish localized HVAC articles on their showcase page. The Professional retains full editorial control and responsibility for reviewing published text for technical accuracy."
            },
            {
                "num": "ARTICLE 10",
                "title": "Intellectual Property & Platform Rights",
                "content": "The Professional grants DuctedExpert a non-exclusive license to display their company logo, business name, and project photos on www.ductedexpert.com during the subscription term for self-promotion and directory indexing."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Competent Jurisdiction",
                "content": "These Terms of Sale and all commercial relations between the parties are governed by French law. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Commercial Court of Paris (Tribunal de Commerce de Paris), France."
            }
        ]
    },
    "it": {
        "metaTitle": "Condizioni Generali di Vendita per Professionisti (CGV) | DuctedExpert.com",
        "metaDesc": "Condizioni Generali di Vendita B2B che regolano gli abbonamenti professionali su DuctedExpert.com.",
        "breadcrumbHome": "Torna alla home",
        "badge": "Quadro Contrattuale B2B • Condizioni di Vendita",
        "title": "CONDIZIONI GENERALI DI VENDITA PROFESSIONALI",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Service Provider & Corporate Identity",
            "p1": "The professional subscription and visibility services available via www.ductedexpert.com are marketed and provided by EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Headquarters: 60 Rue François 1er, 75008 Paris, France. Dedicated contractor support: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Provider & Scope",
                "content": "These Professional Terms of Sale govern all contractual relationships between EXCEED DIGITAL SAS ('the Provider'), publisher of the website https://www.ductedexpert.com, and any HVAC contractor, installer, or engineering consultancy ('the Professional') subscribing to an active membership on the Platform."
            },
            {
                "num": "ARTICLE 2",
                "title": "Purpose of the Services",
                "content": "The subscription granted by DuctedExpert.com provides the Professional with: (i) an optimized public showcase page on www.ductedexpert.com, (ii) accreditation and display of the 'Verified Expert' seal upon document validation, (iii) AI-powered SEO technical article creation tools, and (iv) direct receipt of qualified project inquiries from property owners."
            },
            {
                "num": "ARTICLE 3",
                "title": "The 0% Commission Principle on Contracting",
                "content": "DuctedExpert operates on a pure SaaS membership model. DuctedExpert takes ZERO commission (0%) on quotes signed, equipment sold, or contracts finalized between the Professional and end clients. All revenues generated through inquiries remain 100% the property of the Professional."
            },
            {
                "num": "ARTICLE 4",
                "title": "Accreditation & Mandatory Document Verification",
                "content": "To maintain the high reputation of the network, activation of the Verified Expert badge requires submission of: (i) official commercial registration certificate, (ii) active professional liability and decennial insurance covering HVAC/thermal engineering, (iii) certified F-Gas refrigerant handling license, and (iv) official corporate banking identification (RIB). DuctedExpert reserves the right to refuse or suspend any application failing compliance."
            },
            {
                "num": "ARTICLE 5",
                "title": "Subscription Plans, Pricing & Payment",
                "content": "Services are available under annual or monthly plans at the rates published on www.ductedexpert.com. All prices are stated exclusive of taxes (HT). Payments are processed securely via Stripe. In the case of annual subscriptions, the full annual fee is billed at activation."
            },
            {
                "num": "ARTICLE 6",
                "title": "14-Day Professional Money-Back Guarantee",
                "content": "Although statutory consumer withdrawal rights do not apply between commercial entities, DuctedExpert grants a voluntary 14-day commercial satisfaction guarantee starting from contract activation, allowing the Professional to request full cancellation if unsatisfied."
            },
            {
                "num": "ARTICLE 7",
                "title": "Term, Renewal & Cancellation",
                "content": "Annual plans are contracted for a firm period of twelve (12) months. Unless notice of non-renewal is submitted through the Pro Portal billing settings prior to the annual anniversary date, the subscription renews automatically for successive periods of 12 months."
            },
            {
                "num": "ARTICLE 8",
                "title": "Independent Contractor Status",
                "content": "The Professional operates with total technical, commercial, and operational independence. The Professional determines their own quote prices, selects brands and materials, and remains exclusively liable for works performed on customer job sites."
            },
            {
                "num": "ARTICLE 9",
                "title": "AI SEO Tools & Publication Quotas",
                "content": "The Professional is granted access to specialized AI content generation tools to publish localized HVAC articles on their showcase page. The Professional retains full editorial control and responsibility for reviewing published text for technical accuracy."
            },
            {
                "num": "ARTICLE 10",
                "title": "Intellectual Property & Platform Rights",
                "content": "The Professional grants DuctedExpert a non-exclusive license to display their company logo, business name, and project photos on www.ductedexpert.com during the subscription term for self-promotion and directory indexing."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Competent Jurisdiction",
                "content": "These Terms of Sale and all commercial relations between the parties are governed by French law. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Commercial Court of Paris (Tribunal de Commerce de Paris), France."
            }
        ]
    },
    "fi": {
        "metaTitle": "Yleiset myyntiehdot ammattilaisille | DuctedExpert.com",
        "metaDesc": "Yleiset B2B-myyntiehdot ammattilaistilauksille ja näkyvyyspalveluille DuctedExpert.comissa.",
        "breadcrumbHome": "Takaisin etusivulle",
        "badge": "B2B-sopimusehdot • Myyntiehdot",
        "title": "YLEISET MYYNTIEHDOT",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "providerBox": {
            "title": "Service Provider & Corporate Identity",
            "p1": "The professional subscription and visibility services available via www.ductedexpert.com are marketed and provided by EXCEED DIGITAL SAS (SIREN 929 458 522).",
            "p2": "Headquarters: 60 Rue François 1er, 75008 Paris, France. Dedicated contractor support: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Provider & Scope",
                "content": "These Professional Terms of Sale govern all contractual relationships between EXCEED DIGITAL SAS ('the Provider'), publisher of the website https://www.ductedexpert.com, and any HVAC contractor, installer, or engineering consultancy ('the Professional') subscribing to an active membership on the Platform."
            },
            {
                "num": "ARTICLE 2",
                "title": "Purpose of the Services",
                "content": "The subscription granted by DuctedExpert.com provides the Professional with: (i) an optimized public showcase page on www.ductedexpert.com, (ii) accreditation and display of the 'Verified Expert' seal upon document validation, (iii) AI-powered SEO technical article creation tools, and (iv) direct receipt of qualified project inquiries from property owners."
            },
            {
                "num": "ARTICLE 3",
                "title": "The 0% Commission Principle on Contracting",
                "content": "DuctedExpert operates on a pure SaaS membership model. DuctedExpert takes ZERO commission (0%) on quotes signed, equipment sold, or contracts finalized between the Professional and end clients. All revenues generated through inquiries remain 100% the property of the Professional."
            },
            {
                "num": "ARTICLE 4",
                "title": "Accreditation & Mandatory Document Verification",
                "content": "To maintain the high reputation of the network, activation of the Verified Expert badge requires submission of: (i) official commercial registration certificate, (ii) active professional liability and decennial insurance covering HVAC/thermal engineering, (iii) certified F-Gas refrigerant handling license, and (iv) official corporate banking identification (RIB). DuctedExpert reserves the right to refuse or suspend any application failing compliance."
            },
            {
                "num": "ARTICLE 5",
                "title": "Subscription Plans, Pricing & Payment",
                "content": "Services are available under annual or monthly plans at the rates published on www.ductedexpert.com. All prices are stated exclusive of taxes (HT). Payments are processed securely via Stripe. In the case of annual subscriptions, the full annual fee is billed at activation."
            },
            {
                "num": "ARTICLE 6",
                "title": "14-Day Professional Money-Back Guarantee",
                "content": "Although statutory consumer withdrawal rights do not apply between commercial entities, DuctedExpert grants a voluntary 14-day commercial satisfaction guarantee starting from contract activation, allowing the Professional to request full cancellation if unsatisfied."
            },
            {
                "num": "ARTICLE 7",
                "title": "Term, Renewal & Cancellation",
                "content": "Annual plans are contracted for a firm period of twelve (12) months. Unless notice of non-renewal is submitted through the Pro Portal billing settings prior to the annual anniversary date, the subscription renews automatically for successive periods of 12 months."
            },
            {
                "num": "ARTICLE 8",
                "title": "Independent Contractor Status",
                "content": "The Professional operates with total technical, commercial, and operational independence. The Professional determines their own quote prices, selects brands and materials, and remains exclusively liable for works performed on customer job sites."
            },
            {
                "num": "ARTICLE 9",
                "title": "AI SEO Tools & Publication Quotas",
                "content": "The Professional is granted access to specialized AI content generation tools to publish localized HVAC articles on their showcase page. The Professional retains full editorial control and responsibility for reviewing published text for technical accuracy."
            },
            {
                "num": "ARTICLE 10",
                "title": "Intellectual Property & Platform Rights",
                "content": "The Professional grants DuctedExpert a non-exclusive license to display their company logo, business name, and project photos on www.ductedexpert.com during the subscription term for self-promotion and directory indexing."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Competent Jurisdiction",
                "content": "These Terms of Sale and all commercial relations between the parties are governed by French law. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Commercial Court of Paris (Tribunal de Commerce de Paris), France."
            }
        ]
    }
};
