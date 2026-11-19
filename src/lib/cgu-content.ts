// src/lib/cgu-content.ts
import { Locale } from "./i18n";

export interface LegalArticle {
    num: string;
    title: string;
    content: string;
}

export interface CguPageData {
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
    editorBox: {
        title: string;
        p1: string;
        p2: string;
        websiteLine: string;
    };
    articles: LegalArticle[];
}

export const CGU_CONTENT: Record<string, CguPageData> = {
    "en": {
        "metaTitle": "General Terms of Use (CGU) | DuctedExpert.com",
        "metaDesc": "General Terms of Use governing access and utilization of the international DuctedExpert.com platform.",
        "breadcrumbHome": "Back to Home",
        "badge": "Legal Framework • User Terms",
        "title": "GENERAL TERMS OF USE",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Platform Publisher & Operator Information",
            "p1": "The DuctedExpert.com platform accessible at www.ductedexpert.com is published and operated by EXCEED DIGITAL SAS, a simplified joint-stock company registered with the Trade and Companies Register under SIREN 929 458 522.",
            "p2": "Corporate Headquarters: 60 Rue François 1er, 75008 Paris, France. Official contact email: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Platform & Publisher",
                "content": "The website accessible at https://www.ductedexpert.com ('the Platform') is published by EXCEED DIGITAL SAS. DuctedExpert.com is an international digital platform and directory dedicated to ducted air conditioning, heat pumps, and thermal engineering. The Platform facilitates direct connections between property owners and independent, vetted HVAC professionals."
            },
            {
                "num": "ARTICLE 2",
                "title": "Definitions",
                "content": "• 'Platform': The website www.ductedexpert.com and all associated services.\n• 'User': Any individual or legal entity browsing the Platform or submitting an inquiry.\n• 'Professional': Any independent HVAC contractor, installer, or engineering consultancy registered on the Platform.\n• 'Inquiry / Project Request': A direct request for information or quotes submitted by a User to one or more Professionals."
            },
            {
                "num": "ARTICLE 3",
                "title": "Intellectual Property & Brand Protection",
                "content": "The entire content of www.ductedexpert.com—including trade names, logos, software algorithms, directory architecture, database structures, graphics, and texts—is protected by international copyright, trademark, and database laws. DuctedExpert® is a protected trademark. Any unauthorized extraction, scraping, reproduction, or commercial reuse of directory data is strictly prohibited and subject to civil and criminal legal action."
            },
            {
                "num": "ARTICLE 4",
                "title": "Purpose of the Platform & 0% Commission Principle",
                "content": "DuctedExpert.com operates strictly as a curated connection directory and technical information resource. Access for private individuals and property owners is 100% free of charge. DuctedExpert takes 0% commission on transactions or quotes agreed between Users and Professionals, ensuring uninflated, transparent market prices."
            },
            {
                "num": "ARTICLE 5",
                "title": "Independence of Professionals",
                "content": "Professionals listed on www.ductedexpert.com are fully independent legal entities. DuctedExpert.com is neither an installer, a general contractor, a broker, nor an employer of the Professionals. Each Professional executes their surveys, quotes, installations, and after-sales services under their sole legal and professional responsibility."
            },
            {
                "num": "ARTICLE 6",
                "title": "Document Verification & 'Verified Expert' Badges",
                "content": "The 'Verified Expert' badge displayed on www.ductedexpert.com indicates that the Professional has submitted official administrative documents (business registration, professional HVAC liability insurance, and F-Gas refrigerant certifications) that have undergone documentary moderation. This verification does not constitute an insurance policy issued by DuctedExpert, which remains a neutral directory publisher."
            },
            {
                "num": "ARTICLE 7",
                "title": "Direct Contact & Quotes",
                "content": "Users may contact Professionals directly through their public profile or via the dedicated project form. Inquiries are transmitted directly to the selected Professional(s). DuctedExpert does not participate in contract negotiations, quote pricing, or payment collection between Users and Professionals."
            },
            {
                "num": "ARTICLE 8",
                "title": "User Commitments & Prohibited Uses",
                "content": "Users agree to provide accurate, truthful project information. Any abusive use—including automated data scraping, spamming professionals, submitting fraudulent contact requests, or attempting to compromise platform security—will result in immediate termination of access and potential legal prosecution."
            },
            {
                "num": "ARTICLE 9",
                "title": "Data Privacy & GDPR Compliance",
                "content": "DuctedExpert.com complies with the General Data Protection Regulation (GDPR) and international privacy standards. Personal data collected via forms is used exclusively to facilitate connection with chosen professionals and is never sold to third-party telemarketing brokers. Users hold rights of access, rectification, and erasure by writing to contact@ductedexpert.com."
            },
            {
                "num": "ARTICLE 10",
                "title": "Limitation of Liability & Technical Availability",
                "content": "While DuctedExpert makes every commercially reasonable effort to ensure continuous access to www.ductedexpert.com, it shall not be held liable for temporary technical interruptions, scheduled maintenance, or delays in professional responses. DuctedExpert is not liable for disputes arising between Users and Professionals regarding quotes or craftsmanship."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Jurisdiction",
                "content": "These Terms of Use are governed by French law. In the event of any dispute regarding the interpretation or execution of these Terms, the parties shall seek an amicable resolution before submitting the dispute to the competent courts of Paris, France."
            }
        ]
    },
    "fr": {
        "metaTitle": "Conditions Générales d'Utilisation (CGU) | DuctedExpert.com",
        "metaDesc": "Conditions Générales d'Utilisation régissant l'accès et l'utilisation de la plateforme internationale DuctedExpert.com.",
        "breadcrumbHome": "Retour à l'accueil",
        "badge": "Cadre Juridique • Conditions Utilisateurs",
        "title": "CONDITIONS GÉNÉRALES D'UTILISATION",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Dernière mise à jour : Novembre 2026",
        "officialSiteLabel": "Site officiel de la plateforme :",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Informations Légales sur l'Éditeur & la Plateforme",
            "p1": "La plateforme DuctedExpert.com accessible à l'adresse www.ductedexpert.com est éditée et exploitée par la société EXCEED DIGITAL SAS, société par actions simplifiée immatriculée au Registre du Commerce et des Sociétés sous le numéro SIREN 929 458 522.",
            "p2": "Siège social : 60 Rue François 1er, 75008 Paris, France. Contact électronique officiel : contact@ductedexpert.com.",
            "websiteLine": "Site officiel : www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification de la Plateforme et de l'Éditeur",
                "content": "Le site internet accessible à l'adresse https://www.ductedexpert.com (« la Plateforme ») est édité par EXCEED DIGITAL SAS. DuctedExpert.com est une plateforme et un annuaire international dédié à la climatisation gainable, aux pompes à chaleur et au génie climatique, mettant en relation directe les porteurs de projets avec des professionnels qualifiés et vérifiés."
            },
            {
                "num": "ARTICLE 2",
                "title": "Définitions",
                "content": "• « Plateforme » : Le site web www.ductedexpert.com et l'ensemble de ses fonctionnalités.\n• « Utilisateur » : Tout internaute particulier ou professionnel consultant la Plateforme ou déposant une demande.\n• « Professionnel » : Tout artisan, installateur CVC ou bureau d'études thermiques indépendant référencé sur la Plateforme.\n• « Demande de mise en relation » : Projet transmis directement par un Utilisateur à un ou plusieurs Professionnels."
            },
            {
                "num": "ARTICLE 3",
                "title": "Propriété Intellectuelle et Protection du Réseau DuctedExpert",
                "content": "L'ensemble des éléments de www.ductedexpert.com (marques, logos, algorithmes, architecture de l'annuaire, bases de données, graphismes et textes) est protégé par les lois internationales sur la propriété intellectuelle. La marque DuctedExpert® est déposée et protégée. Toute extraction de données, aspiration, reproduction ou réutilisation commerciale de l'annuaire est strictement interdite et fera l'objet de poursuites judiciaires."
            },
            {
                "num": "ARTICLE 4",
                "title": "Objet de la Plateforme & Principe du 0 % de Commission",
                "content": "DuctedExpert.com est un annuaire sélectif et un tiers de confiance. L'accès pour les particuliers est 100 % gratuit. DuctedExpert ne prélève aucune commission sur les devis ou chantiers conclus entre Utilisateurs et Professionnels, garantissant ainsi des prix justes et transparents."
            },
            {
                "num": "ARTICLE 5",
                "title": "Indépendance des Professionnels",
                "content": "Les Professionnels référencés sur www.ductedexpert.com sont des entités juridiques indépendantes. DuctedExpert n'est ni installateur, ni maître d'œuvre, ni courtier, ni employeur des Professionnels. Chaque Professionnel réalise ses études, devis et chantiers sous sa seule et entière responsabilité."
            },
            {
                "num": "ARTICLE 6",
                "title": "Modération Documentaire et Badges « Expert Vérifié »",
                "content": "Le badge « Expert Vérifié » affiché sur www.ductedexpert.com atteste que le professionnel a fourni des pièces justificatives officielles (immatriculation, attestation d'assurance décennale CVC, attestation fluides) ayant fait l'objet d'une modération documentaire attentive."
            },
            {
                "num": "ARTICLE 7",
                "title": "Contact Direct & Devis",
                "content": "L'Utilisateur peut contacter directement le Professionnel depuis sa fiche ou via le formulaire de projet. La mise en relation est directe et sans intermédiaire commercial dans la négociation du devis."
            },
            {
                "num": "ARTICLE 8",
                "title": "Obligations des Utilisateurs & Utilisations Interdites",
                "content": "L'Utilisateur s'engage à fournir des informations réelles et sincères. Toute utilisation abusive, collecte automatisée de données, spam ou tentative d'atteinte à la sécurité du site entraînera l'interdiction d'accès immédiate et des poursuites éventuelles."
            },
            {
                "num": "ARTICLE 9",
                "title": "Données Personnelles & RGPD",
                "content": "DuctedExpert.com applique une politique stricte de confidentialité conforme au RGPD. Les coordonnées transmises ne sont utilisées que pour la mise en relation avec les professionnels choisis et ne sont jamais revendues à des plateformes tierces de télémarketing."
            },
            {
                "num": "ARTICLE 10",
                "title": "Responsabilité & Disponibilité Technique",
                "content": "DuctedExpert met en œuvre ses meilleurs efforts pour assurer la disponibilité continue de www.ductedexpert.com mais ne saurait être tenu responsable des pannes de réseau ou de la teneur des travaux réalisés par les professionnels indépendants."
            },
            {
                "num": "ARTICLE 11",
                "title": "Droit Applicable & Juridiction",
                "content": "Les présentes CGU sont soumises au droit français. Tout différend relatif à leur validité ou exécution sera porté devant les tribunaux compétents de Paris, France."
            }
        ]
    },
    "ar": {
        "metaTitle": "الشروط والأحكام العامة للاستخدام (CGU) | DuctedExpert.com",
        "metaDesc": "الشروط والأحكام العامة التي تحكم الوصول واستخدام منصة DuctedExpert.com العالمية للتكييف المركزي والمكاتب الهندسية.",
        "breadcrumbHome": "العودة للرئيسية",
        "badge": "الإطار القانوني • شروط الاستخدام",
        "title": "الشروط والأحكام العامة للاستخدام",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "آخر تحديث : نوفمبر 2026",
        "officialSiteLabel": "الموقع الإلكتروني الرسمي للمنصة:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "بيانات الشركة المشغلة والمطورة للمنصة",
            "p1": "يتم تشغيل وإدارة منصة DuctedExpert.com المتاحة عبر الرابط www.ductedexpert.com بواسطة شركة EXCEED DIGITAL SAS، وهي شركة مساهمة مبسطة مسجلة في السجل التجاري تحت رقم SIREN 929 458 522.",
            "p2": "المقر الرئيسي: 60 Rue François 1er, 75008 باريس، فرنسا. البريد الإلكتروني الرسمي للتواصل والدعم: contact@ductedexpert.com.",
            "websiteLine": "الموقع الإلكتروني الرسمي: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "المادة 1",
                "title": "هوية المنصة والجهة المشغلة",
                "content": "الموقع الإلكتروني المتاح عبر الرابط https://www.ductedexpert.com ('المنصة') يُدار بواسطة شركة EXCEED DIGITAL SAS. تُعد DuctedExpert.com منصة ودليلاً هندسياً دولياً متخصصاً في أنظمة التكييف المركزي المخفي (الدكت)، المضخات الحرارية، والمكاتب الاستشارية الهندسية، وتهدف لربط ملاك المشاريع مباشرة بالمقاولين والمهندسين المعتمدين."
            },
            {
                "num": "المادة 2",
                "title": "التعريفات والمصطلحات",
                "content": "• 'المنصة': الموقع الإلكتروني www.ductedexpert.com وكافة الأدوات والخدمات التابعة له.\n• 'المستخدم': أي شخص طبيعي أو اعتباري يتصفح المنصة أو يرسل طلب عرض سعر أو استفسار.\n• 'المهني / الخبير': أي شركة مقاولات تكييف أو مكتب استشارات هندسية مسجل رسمياً في دليل المنصة.\n• 'طلب المشروع': طلب عرض سعر أو دراسة يرسله المستخدم مباشرة إلى المقاول أو المكتب الهندسي المختار."
            },
            {
                "num": "المادة 3",
                "title": "الملكية الفكرية وحماية شبكة DuctedExpert",
                "content": "كافة محتويات www.ductedexpert.com — بما في ذلك العلامات التجارية، الشعارات، البرمجيات، هيكل الدليل، قواعد البيانات، والتصاميم — محمية بموجب القوانين والاتفاقيات الدولية للملكية الفكرية. علامة DuctedExpert® مسجلة ومحمية قانونياً. يُحظر تماماً أي سحب آلي للبيانات (Scraping) أو استغلال تجاري غير مرخص تحت طائلة الملاحقة القضائية."
            },
            {
                "num": "المادة 4",
                "title": "طبيعة المنصة ومبدأ 0% عمولة",
                "content": "تعمل منصة DuctedExpert.com كدليل نوعي وجهة ثقة محايدة للربط المباشر. استخدام المنصة لأصحاب المنازل وملاك المشاريع مجاني 100% تماماً. لا تتقاضى المنصة أي عمولة على عقود المشاريع أو عروض الأسعار المتفق عليها بين العميل والمقاول، مما يضمن أسعاراً عادلة وشفافة."
            },
            {
                "num": "المادة 5",
                "title": "استقلالية المقاولين والشركات المعتمدة",
                "content": "المقاولون والمكاتب الهندسية المسجلون على www.ductedexpert.com كيانات قانونية مستقلة تماماً. ولا تُعتبر DuctedExpert.com مقاول تنفيذ أو مقاولاً بالباطن أو وسيطاً تجارياً أو جهة عمل للمقاولين. ويتحمل كل مقاول أو مكتب استشاري كامل المسؤولية الفنية والمهنية والقانونية عن دراساته وعقوده وأعماله الميدانية."
            },
            {
                "num": "المادة 6",
                "title": "التدقيق المستندي وشارة 'خبير معتمد'",
                "content": "تشير شارة 'خبير معتمد' المعروضة على www.ductedexpert.com إلى أن المقاول أو المكتب الهندسي قد قدم مستنداته الرسمية (السجل التجاري، وثيقة التأمين المهني CVC، وتراخيص التعامل مع غازات التبريد) وخضعت لتدقيق وفحص مستندي من فريق المنصة. ولا تمثل هذه الشارة بوليصة تأمين تصدرها المنصة."
            },
            {
                "num": "المادة 7",
                "title": "التواصل المباشر وعروض الأسعار",
                "content": "يتواصل المستخدم مباشرة مع المقاول المختار عبر صفحته العامة أو نموذج المشروع الإلكتروني. تُحوّل الطلبات مباشرة للمقاول دون تدخل من المنصة في تسعير العروض أو استلام دفعات المشاريع."
            },
            {
                "num": "المادة 8",
                "title": "التزامات المستخدمين والاستخدامات المحظورة",
                "content": "يلتزم المستخدم بتقديم بيانات صحيحة ودقيقة عن مشروعه. يُحظر تماماً أي استخدام مسيء يشمل السحب الآلي للبيانات، إرسال رسائل سبام للمقاولين، أو محاولة اختراق أمن المنصة، ويترتب على ذلك حظر فوري للمستخدم ومساءلة قانونية."
            },
            {
                "num": "المادة 9",
                "title": "حماية البيانات الشخصية والخصوصية",
                "content": "تلتزم DuctedExpert.com بأعلى معايير الخصوصية واللوائح العامة لحماية البيانات (GDPR). تُستخدم البيانات المدخلة في النماذج حصرياً لتمكين المقاول المختار من التواصل مع العميل، ولا يتم إطلاقاً بيعها لشركات التسويق الهاتفي أو أطراف ثالثة."
            },
            {
                "num": "المادة 10",
                "title": "حدود المسؤولية والجاهزية التقنية",
                "content": "تبذل DuctedExpert جهوداً حثيثة لضمان استمرار عمل موقع www.ductedexpert.com على مدار الساعة، ولكنها لا تتحمل أي مسؤولية عن انقطاعات فنية مؤقتة خارجة عن إرادتها أو عن أي نزاع تعاقدي ميداني ينشأ بين العميل والمقاول المستقل."
            },
            {
                "num": "المادة 11",
                "title": "القانون الواجب التطبيق والاختصاص القضائي",
                "content": "تخضع هذه الشروط والأحكام للقوانين المعمول بها. وفي حال نشوء أي خلاف بشأن تفسيرها أو تنفيذها، يسعى الطرفان لحله ودياً قبل اللجوء للمحاكم المختصة في باريس، فرنسا."
            }
        ]
    },
    "de": {
        "metaTitle": "Allgemeine Nutzungsbedingungen (AGB) | DuctedExpert.com",
        "metaDesc": "Allgemeine Nutzungsbedingungen für den Zugriff und die Nutzung der internationalen Plattform DuctedExpert.com.",
        "breadcrumbHome": "Zurück zur Startseite",
        "badge": "Rechtlicher Rahmen • Nutzungsbedingungen",
        "title": "ALLGEMEINE NUTZUNGSBEDINGUNGEN",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Platform Publisher & Operator Information",
            "p1": "The DuctedExpert.com platform accessible at www.ductedexpert.com is published and operated by EXCEED DIGITAL SAS, a simplified joint-stock company registered with the Trade and Companies Register under SIREN 929 458 522.",
            "p2": "Corporate Headquarters: 60 Rue François 1er, 75008 Paris, France. Official contact email: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Platform & Publisher",
                "content": "The website accessible at https://www.ductedexpert.com ('the Platform') is published by EXCEED DIGITAL SAS. DuctedExpert.com is an international digital platform and directory dedicated to ducted air conditioning, heat pumps, and thermal engineering. The Platform facilitates direct connections between property owners and independent, vetted HVAC professionals."
            },
            {
                "num": "ARTICLE 2",
                "title": "Definitions",
                "content": "• 'Platform': The website www.ductedexpert.com and all associated services.\n• 'User': Any individual or legal entity browsing the Platform or submitting an inquiry.\n• 'Professional': Any independent HVAC contractor, installer, or engineering consultancy registered on the Platform.\n• 'Inquiry / Project Request': A direct request for information or quotes submitted by a User to one or more Professionals."
            },
            {
                "num": "ARTICLE 3",
                "title": "Intellectual Property & Brand Protection",
                "content": "The entire content of www.ductedexpert.com—including trade names, logos, software algorithms, directory architecture, database structures, graphics, and texts—is protected by international copyright, trademark, and database laws. DuctedExpert® is a protected trademark. Any unauthorized extraction, scraping, reproduction, or commercial reuse of directory data is strictly prohibited and subject to civil and criminal legal action."
            },
            {
                "num": "ARTICLE 4",
                "title": "Purpose of the Platform & 0% Commission Principle",
                "content": "DuctedExpert.com operates strictly as a curated connection directory and technical information resource. Access for private individuals and property owners is 100% free of charge. DuctedExpert takes 0% commission on transactions or quotes agreed between Users and Professionals, ensuring uninflated, transparent market prices."
            },
            {
                "num": "ARTICLE 5",
                "title": "Independence of Professionals",
                "content": "Professionals listed on www.ductedexpert.com are fully independent legal entities. DuctedExpert.com is neither an installer, a general contractor, a broker, nor an employer of the Professionals. Each Professional executes their surveys, quotes, installations, and after-sales services under their sole legal and professional responsibility."
            },
            {
                "num": "ARTICLE 6",
                "title": "Document Verification & 'Verified Expert' Badges",
                "content": "The 'Verified Expert' badge displayed on www.ductedexpert.com indicates that the Professional has submitted official administrative documents (business registration, professional HVAC liability insurance, and F-Gas refrigerant certifications) that have undergone documentary moderation. This verification does not constitute an insurance policy issued by DuctedExpert, which remains a neutral directory publisher."
            },
            {
                "num": "ARTICLE 7",
                "title": "Direct Contact & Quotes",
                "content": "Users may contact Professionals directly through their public profile or via the dedicated project form. Inquiries are transmitted directly to the selected Professional(s). DuctedExpert does not participate in contract negotiations, quote pricing, or payment collection between Users and Professionals."
            },
            {
                "num": "ARTICLE 8",
                "title": "User Commitments & Prohibited Uses",
                "content": "Users agree to provide accurate, truthful project information. Any abusive use—including automated data scraping, spamming professionals, submitting fraudulent contact requests, or attempting to compromise platform security—will result in immediate termination of access and potential legal prosecution."
            },
            {
                "num": "ARTICLE 9",
                "title": "Data Privacy & GDPR Compliance",
                "content": "DuctedExpert.com complies with the General Data Protection Regulation (GDPR) and international privacy standards. Personal data collected via forms is used exclusively to facilitate connection with chosen professionals and is never sold to third-party telemarketing brokers. Users hold rights of access, rectification, and erasure by writing to contact@ductedexpert.com."
            },
            {
                "num": "ARTICLE 10",
                "title": "Limitation of Liability & Technical Availability",
                "content": "While DuctedExpert makes every commercially reasonable effort to ensure continuous access to www.ductedexpert.com, it shall not be held liable for temporary technical interruptions, scheduled maintenance, or delays in professional responses. DuctedExpert is not liable for disputes arising between Users and Professionals regarding quotes or craftsmanship."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Jurisdiction",
                "content": "These Terms of Use are governed by French law. In the event of any dispute regarding the interpretation or execution of these Terms, the parties shall seek an amicable resolution before submitting the dispute to the competent courts of Paris, France."
            }
        ]
    },
    "es": {
        "metaTitle": "Términos y Condiciones Generales de Uso (CGU) | DuctedExpert.com",
        "metaDesc": "Términos y Condiciones Generales de Uso que rigen el acceso y uso de la plataforma internacional DuctedExpert.com.",
        "breadcrumbHome": "Volver al inicio",
        "badge": "Marco Jurídico • Condiciones de Uso",
        "title": "CONDICIONES GENERALES DE USO",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Platform Publisher & Operator Information",
            "p1": "The DuctedExpert.com platform accessible at www.ductedexpert.com is published and operated by EXCEED DIGITAL SAS, a simplified joint-stock company registered with the Trade and Companies Register under SIREN 929 458 522.",
            "p2": "Corporate Headquarters: 60 Rue François 1er, 75008 Paris, France. Official contact email: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Platform & Publisher",
                "content": "The website accessible at https://www.ductedexpert.com ('the Platform') is published by EXCEED DIGITAL SAS. DuctedExpert.com is an international digital platform and directory dedicated to ducted air conditioning, heat pumps, and thermal engineering. The Platform facilitates direct connections between property owners and independent, vetted HVAC professionals."
            },
            {
                "num": "ARTICLE 2",
                "title": "Definitions",
                "content": "• 'Platform': The website www.ductedexpert.com and all associated services.\n• 'User': Any individual or legal entity browsing the Platform or submitting an inquiry.\n• 'Professional': Any independent HVAC contractor, installer, or engineering consultancy registered on the Platform.\n• 'Inquiry / Project Request': A direct request for information or quotes submitted by a User to one or more Professionals."
            },
            {
                "num": "ARTICLE 3",
                "title": "Intellectual Property & Brand Protection",
                "content": "The entire content of www.ductedexpert.com—including trade names, logos, software algorithms, directory architecture, database structures, graphics, and texts—is protected by international copyright, trademark, and database laws. DuctedExpert® is a protected trademark. Any unauthorized extraction, scraping, reproduction, or commercial reuse of directory data is strictly prohibited and subject to civil and criminal legal action."
            },
            {
                "num": "ARTICLE 4",
                "title": "Purpose of the Platform & 0% Commission Principle",
                "content": "DuctedExpert.com operates strictly as a curated connection directory and technical information resource. Access for private individuals and property owners is 100% free of charge. DuctedExpert takes 0% commission on transactions or quotes agreed between Users and Professionals, ensuring uninflated, transparent market prices."
            },
            {
                "num": "ARTICLE 5",
                "title": "Independence of Professionals",
                "content": "Professionals listed on www.ductedexpert.com are fully independent legal entities. DuctedExpert.com is neither an installer, a general contractor, a broker, nor an employer of the Professionals. Each Professional executes their surveys, quotes, installations, and after-sales services under their sole legal and professional responsibility."
            },
            {
                "num": "ARTICLE 6",
                "title": "Document Verification & 'Verified Expert' Badges",
                "content": "The 'Verified Expert' badge displayed on www.ductedexpert.com indicates that the Professional has submitted official administrative documents (business registration, professional HVAC liability insurance, and F-Gas refrigerant certifications) that have undergone documentary moderation. This verification does not constitute an insurance policy issued by DuctedExpert, which remains a neutral directory publisher."
            },
            {
                "num": "ARTICLE 7",
                "title": "Direct Contact & Quotes",
                "content": "Users may contact Professionals directly through their public profile or via the dedicated project form. Inquiries are transmitted directly to the selected Professional(s). DuctedExpert does not participate in contract negotiations, quote pricing, or payment collection between Users and Professionals."
            },
            {
                "num": "ARTICLE 8",
                "title": "User Commitments & Prohibited Uses",
                "content": "Users agree to provide accurate, truthful project information. Any abusive use—including automated data scraping, spamming professionals, submitting fraudulent contact requests, or attempting to compromise platform security—will result in immediate termination of access and potential legal prosecution."
            },
            {
                "num": "ARTICLE 9",
                "title": "Data Privacy & GDPR Compliance",
                "content": "DuctedExpert.com complies with the General Data Protection Regulation (GDPR) and international privacy standards. Personal data collected via forms is used exclusively to facilitate connection with chosen professionals and is never sold to third-party telemarketing brokers. Users hold rights of access, rectification, and erasure by writing to contact@ductedexpert.com."
            },
            {
                "num": "ARTICLE 10",
                "title": "Limitation of Liability & Technical Availability",
                "content": "While DuctedExpert makes every commercially reasonable effort to ensure continuous access to www.ductedexpert.com, it shall not be held liable for temporary technical interruptions, scheduled maintenance, or delays in professional responses. DuctedExpert is not liable for disputes arising between Users and Professionals regarding quotes or craftsmanship."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Jurisdiction",
                "content": "These Terms of Use are governed by French law. In the event of any dispute regarding the interpretation or execution of these Terms, the parties shall seek an amicable resolution before submitting the dispute to the competent courts of Paris, France."
            }
        ]
    },
    "it": {
        "metaTitle": "Condizioni Generali di Utilizzo (CGU) | DuctedExpert.com",
        "metaDesc": "Condizioni Generali di Utilizzo relative all'accesso e alla consultazione della piattaforma internazionale DuctedExpert.com.",
        "breadcrumbHome": "Torna alla home",
        "badge": "Quadro Giuridico • Condizioni d'Uso",
        "title": "CONDIZIONI GENERALI DI UTILIZZO",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Platform Publisher & Operator Information",
            "p1": "The DuctedExpert.com platform accessible at www.ductedexpert.com is published and operated by EXCEED DIGITAL SAS, a simplified joint-stock company registered with the Trade and Companies Register under SIREN 929 458 522.",
            "p2": "Corporate Headquarters: 60 Rue François 1er, 75008 Paris, France. Official contact email: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Platform & Publisher",
                "content": "The website accessible at https://www.ductedexpert.com ('the Platform') is published by EXCEED DIGITAL SAS. DuctedExpert.com is an international digital platform and directory dedicated to ducted air conditioning, heat pumps, and thermal engineering. The Platform facilitates direct connections between property owners and independent, vetted HVAC professionals."
            },
            {
                "num": "ARTICLE 2",
                "title": "Definitions",
                "content": "• 'Platform': The website www.ductedexpert.com and all associated services.\n• 'User': Any individual or legal entity browsing the Platform or submitting an inquiry.\n• 'Professional': Any independent HVAC contractor, installer, or engineering consultancy registered on the Platform.\n• 'Inquiry / Project Request': A direct request for information or quotes submitted by a User to one or more Professionals."
            },
            {
                "num": "ARTICLE 3",
                "title": "Intellectual Property & Brand Protection",
                "content": "The entire content of www.ductedexpert.com—including trade names, logos, software algorithms, directory architecture, database structures, graphics, and texts—is protected by international copyright, trademark, and database laws. DuctedExpert® is a protected trademark. Any unauthorized extraction, scraping, reproduction, or commercial reuse of directory data is strictly prohibited and subject to civil and criminal legal action."
            },
            {
                "num": "ARTICLE 4",
                "title": "Purpose of the Platform & 0% Commission Principle",
                "content": "DuctedExpert.com operates strictly as a curated connection directory and technical information resource. Access for private individuals and property owners is 100% free of charge. DuctedExpert takes 0% commission on transactions or quotes agreed between Users and Professionals, ensuring uninflated, transparent market prices."
            },
            {
                "num": "ARTICLE 5",
                "title": "Independence of Professionals",
                "content": "Professionals listed on www.ductedexpert.com are fully independent legal entities. DuctedExpert.com is neither an installer, a general contractor, a broker, nor an employer of the Professionals. Each Professional executes their surveys, quotes, installations, and after-sales services under their sole legal and professional responsibility."
            },
            {
                "num": "ARTICLE 6",
                "title": "Document Verification & 'Verified Expert' Badges",
                "content": "The 'Verified Expert' badge displayed on www.ductedexpert.com indicates that the Professional has submitted official administrative documents (business registration, professional HVAC liability insurance, and F-Gas refrigerant certifications) that have undergone documentary moderation. This verification does not constitute an insurance policy issued by DuctedExpert, which remains a neutral directory publisher."
            },
            {
                "num": "ARTICLE 7",
                "title": "Direct Contact & Quotes",
                "content": "Users may contact Professionals directly through their public profile or via the dedicated project form. Inquiries are transmitted directly to the selected Professional(s). DuctedExpert does not participate in contract negotiations, quote pricing, or payment collection between Users and Professionals."
            },
            {
                "num": "ARTICLE 8",
                "title": "User Commitments & Prohibited Uses",
                "content": "Users agree to provide accurate, truthful project information. Any abusive use—including automated data scraping, spamming professionals, submitting fraudulent contact requests, or attempting to compromise platform security—will result in immediate termination of access and potential legal prosecution."
            },
            {
                "num": "ARTICLE 9",
                "title": "Data Privacy & GDPR Compliance",
                "content": "DuctedExpert.com complies with the General Data Protection Regulation (GDPR) and international privacy standards. Personal data collected via forms is used exclusively to facilitate connection with chosen professionals and is never sold to third-party telemarketing brokers. Users hold rights of access, rectification, and erasure by writing to contact@ductedexpert.com."
            },
            {
                "num": "ARTICLE 10",
                "title": "Limitation of Liability & Technical Availability",
                "content": "While DuctedExpert makes every commercially reasonable effort to ensure continuous access to www.ductedexpert.com, it shall not be held liable for temporary technical interruptions, scheduled maintenance, or delays in professional responses. DuctedExpert is not liable for disputes arising between Users and Professionals regarding quotes or craftsmanship."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Jurisdiction",
                "content": "These Terms of Use are governed by French law. In the event of any dispute regarding the interpretation or execution of these Terms, the parties shall seek an amicable resolution before submitting the dispute to the competent courts of Paris, France."
            }
        ]
    },
    "fi": {
        "metaTitle": "Yleiset käyttöehdot | DuctedExpert.com",
        "metaDesc": "Yleiset käyttöehdot kansainvälisen DuctedExpert.com -palvelun käyttöön.",
        "breadcrumbHome": "Takaisin etusivulle",
        "badge": "Oikeudelliset ehdot • Käyttöehdot",
        "title": "YLEISET KÄYTTÖEHDOT",
        "subtitle": "DUCTEDEXPERT.COM — EXCEED DIGITAL",
        "lastUpdate": "Last updated: November 2026",
        "officialSiteLabel": "Official Platform Website:",
        "officialSiteUrl": "https://www.ductedexpert.com",
        "officialSiteText": "www.ductedexpert.com",
        "editorBox": {
            "title": "Platform Publisher & Operator Information",
            "p1": "The DuctedExpert.com platform accessible at www.ductedexpert.com is published and operated by EXCEED DIGITAL SAS, a simplified joint-stock company registered with the Trade and Companies Register under SIREN 929 458 522.",
            "p2": "Corporate Headquarters: 60 Rue François 1er, 75008 Paris, France. Official contact email: contact@ductedexpert.com.",
            "websiteLine": "Official website: www.ductedexpert.com"
        },
        "articles": [
            {
                "num": "ARTICLE 1",
                "title": "Identification of the Platform & Publisher",
                "content": "The website accessible at https://www.ductedexpert.com ('the Platform') is published by EXCEED DIGITAL SAS. DuctedExpert.com is an international digital platform and directory dedicated to ducted air conditioning, heat pumps, and thermal engineering. The Platform facilitates direct connections between property owners and independent, vetted HVAC professionals."
            },
            {
                "num": "ARTICLE 2",
                "title": "Definitions",
                "content": "• 'Platform': The website www.ductedexpert.com and all associated services.\n• 'User': Any individual or legal entity browsing the Platform or submitting an inquiry.\n• 'Professional': Any independent HVAC contractor, installer, or engineering consultancy registered on the Platform.\n• 'Inquiry / Project Request': A direct request for information or quotes submitted by a User to one or more Professionals."
            },
            {
                "num": "ARTICLE 3",
                "title": "Intellectual Property & Brand Protection",
                "content": "The entire content of www.ductedexpert.com—including trade names, logos, software algorithms, directory architecture, database structures, graphics, and texts—is protected by international copyright, trademark, and database laws. DuctedExpert® is a protected trademark. Any unauthorized extraction, scraping, reproduction, or commercial reuse of directory data is strictly prohibited and subject to civil and criminal legal action."
            },
            {
                "num": "ARTICLE 4",
                "title": "Purpose of the Platform & 0% Commission Principle",
                "content": "DuctedExpert.com operates strictly as a curated connection directory and technical information resource. Access for private individuals and property owners is 100% free of charge. DuctedExpert takes 0% commission on transactions or quotes agreed between Users and Professionals, ensuring uninflated, transparent market prices."
            },
            {
                "num": "ARTICLE 5",
                "title": "Independence of Professionals",
                "content": "Professionals listed on www.ductedexpert.com are fully independent legal entities. DuctedExpert.com is neither an installer, a general contractor, a broker, nor an employer of the Professionals. Each Professional executes their surveys, quotes, installations, and after-sales services under their sole legal and professional responsibility."
            },
            {
                "num": "ARTICLE 6",
                "title": "Document Verification & 'Verified Expert' Badges",
                "content": "The 'Verified Expert' badge displayed on www.ductedexpert.com indicates that the Professional has submitted official administrative documents (business registration, professional HVAC liability insurance, and F-Gas refrigerant certifications) that have undergone documentary moderation. This verification does not constitute an insurance policy issued by DuctedExpert, which remains a neutral directory publisher."
            },
            {
                "num": "ARTICLE 7",
                "title": "Direct Contact & Quotes",
                "content": "Users may contact Professionals directly through their public profile or via the dedicated project form. Inquiries are transmitted directly to the selected Professional(s). DuctedExpert does not participate in contract negotiations, quote pricing, or payment collection between Users and Professionals."
            },
            {
                "num": "ARTICLE 8",
                "title": "User Commitments & Prohibited Uses",
                "content": "Users agree to provide accurate, truthful project information. Any abusive use—including automated data scraping, spamming professionals, submitting fraudulent contact requests, or attempting to compromise platform security—will result in immediate termination of access and potential legal prosecution."
            },
            {
                "num": "ARTICLE 9",
                "title": "Data Privacy & GDPR Compliance",
                "content": "DuctedExpert.com complies with the General Data Protection Regulation (GDPR) and international privacy standards. Personal data collected via forms is used exclusively to facilitate connection with chosen professionals and is never sold to third-party telemarketing brokers. Users hold rights of access, rectification, and erasure by writing to contact@ductedexpert.com."
            },
            {
                "num": "ARTICLE 10",
                "title": "Limitation of Liability & Technical Availability",
                "content": "While DuctedExpert makes every commercially reasonable effort to ensure continuous access to www.ductedexpert.com, it shall not be held liable for temporary technical interruptions, scheduled maintenance, or delays in professional responses. DuctedExpert is not liable for disputes arising between Users and Professionals regarding quotes or craftsmanship."
            },
            {
                "num": "ARTICLE 11",
                "title": "Governing Law & Jurisdiction",
                "content": "These Terms of Use are governed by French law. In the event of any dispute regarding the interpretation or execution of these Terms, the parties shall seek an amicable resolution before submitting the dispute to the competent courts of Paris, France."
            }
        ]
    }
};
