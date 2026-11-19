// src/lib/labels-content.ts
import { Locale } from "./i18n";

export interface LabelsPageData {
    metaTitle: string;
    metaDesc: string;
    hero: {
        topBadge: string;
        title1: string;
        title2: string;
        desc: string;
        reassurance: { title: string; desc: string }[];
        findProBtn: string;
        joinProBtn: string;
    };
    officialBadge: {
        tag: string;
        title: string;
        desc: string;
        legalNotice: string;
    };
    traps: {
        tag: string;
        title: string;
        titleHighlight: string;
        desc: string;
        items: {
            num: string;
            title: string;
            badTitle: string;
            badText: string;
            goodTitle: string;
            goodText: string;
        }[];
        vision: {
            tag: string;
            title: string;
            titleHighlight: string;
            desc: string;
        };
    };
    verification: {
        tag: string;
        title: string;
        desc: string;
        steps: {
            num: string;
            stepTag: string;
            title: string;
            badge: string;
            desc: string;
            roleTitle: string;
            roleDesc: string;
        }[];
    };
    artisanTrust: {
        tag: string;
        title: string;
        titleHighlight: string;
        paragraphs: string[];
    };
    whyChoose: {
        title: string;
        titleHighlight: string;
        benefits: { title: string; desc: string }[];
    };
    proSection: {
        tag: string;
        title: string;
        titleHighlight: string;
        paragraphs: string[];
        joinBtn: string;
    };
    requirements: {
        tag: string;
        title: string;
        titleHighlight: string;
        desc: string;
        docsTitle: string;
        docs: { title: string; desc: string }[];
        ethicsTitle: string;
        ethics: { title: string; desc: string }[];
        consultBtn: string;
    };
    faq: {
        tag: string;
        title: string;
        items: { q: string; a: string }[];
    };
}

export const LABELS_CONTENT: Record<Locale, LabelsPageData> = {
    "en": {
        "metaTitle": "Verified Expert Label DuctedExpert.com: The Global Quality Standard in HVAC",
        "metaDesc": "Discover the DuctedExpert Verified Expert standard: official protection for homeowners against rogue installers, invalid insurance, and post-sale abandonment.",
        "hero": {
            "topBadge": "Official Quality Seal • Homeowner Protection • Contractor Distinction",
            "title1": "Installing ducted air conditioning should never be",
            "title2": "a game of roulette with your home",
            "desc": "A concealed ducted system is built into your ceilings and structure for the next 15 to 20 years. It is not an ordinary appliance: it is a major investment between €8,000 and €35,000. The DuctedExpert® Verified Expert Label audits professional licenses, validates specific HVAC liability coverage, and elevates top-tier contractors.",
            "reassurance": [
                {
                    "title": "Verified HVAC Liability Insurance",
                    "desc": "Official policy validated for ducted CVC, refrigerant piping & water damage."
                },
                {
                    "title": "Solvent & Established Entity",
                    "desc": "Audited business registration, trade registry standing & zero shell companies."
                },
                {
                    "title": "100% Free Connection",
                    "desc": "Direct contact with the expert • Zero commissions or broker fees on your project."
                }
            ],
            "findProBtn": "Find a Verified Installer Near Me",
            "joinProBtn": "Are You an Installer? Join the Network"
        },
        "officialBadge": {
            "tag": "Visual Mark of Trust",
            "title": "The Official « Verified Expert » Badge",
            "desc": "Look for this official seal on member profiles and vehicle fleets. The pulsating green heartbeat signifies an active company whose certifications, licenses, and insurance policies have undergone strict document verification.",
            "legalNotice": "This badge is a registered trademark of DuctedExpert.com. Any unauthorized display or fraudulent reproduction by unverified entities triggers immediate legal enforcement."
        },
        "traps": {
            "tag": "Market Reality • What Others Won't Tell You",
            "title": "The 4 Hidden Traps of Air Conditioning",
            "titleHighlight": "(and how our label protects you)",
            "desc": "Ducted air conditioning is a specialized engineering discipline requiring refrigeration precision and acoustic calculations. Yet the surge in demand has attracted unvetted middlemen and low-cost sub-tier crews. Here are the 4 major risks homeowners face, and our rigorous response:",
            "items": [
                {
                    "num": "01",
                    "title": "1. Post-Installation Ghosting & Abandonment",
                    "badTitle": "The Real Risk:",
                    "badText": "Before the contract is signed, the salesperson replies in five minutes. But when winter arrives and the ducted heat pump triggers an error code, calls go to voicemail and messages are ignored. You spent thousands of euros and are left in the cold with no customer support.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "We strictly select established local businesses with verified customer reviews and mandatory annual maintenance agreements."
                },
                {
                    "num": "02",
                    "title": "2. Fly-By-Night Entities & Quick Liquidations",
                    "badTitle": "The Real Risk:",
                    "badText": "Sales operations set up hurriedly, subcontracting installations to the lowest bidder. As soon as defects and formal notices accumulate, the company enters sudden liquidation, only to reopen months later under a new name with zero accountability.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Deep vetting of company registration, financial solvency, operating history, and lack of insolvency proceedings."
                },
                {
                    "num": "03",
                    "title": "3. The Illusion of Insurance (Non-HVAC Policies)",
                    "badTitle": "The Real Risk:",
                    "badText": "The contractor provides an insurance certificate, but a close look reveals it only covers painting or basic plumbing to save on premium costs. When a ceiling collapse occurs due to an uninsulated drain overflow, the insurer flatly denies coverage.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Original certificates audited specifically for 'HVAC, Ducted Refrigeration Networks and Thermal Engineering' with active premium validation."
                },
                {
                    "num": "04",
                    "title": "4. Fake Reviews & Uncertified Refrigerant Handling",
                    "badTitle": "The Real Risk:",
                    "badText": "Unlicensed crews handling R32 / R410A refrigerants without certified vacuum pumps and recovery stations. Moisture inside the copper lines turns the oil acidic, burning out the compressor in months and voiding the manufacturer's warranty.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Mandatory F-Gas / Refrigerant Handling certification verified directly with regulatory testing bodies."
                }
            ],
            "vision": {
                "tag": "Everyday Peace of Mind",
                "title": "What Your Home Truly Deserves:",
                "titleHighlight": "Invisible, silent, and enduring comfort.",
                "desc": "By choosing a DuctedExpert® Verified Expert, you turn a stressful home project into a seamless, high-confidence experience. You enjoy perfectly balanced air distribution, whisper-quiet acoustics, and total peace of mind for the next 15 years."
            }
        },
        "verification": {
            "tag": "DuctedExpert.com Quality Audit",
            "title": "Our 4-Step Document & Qualification Audit",
            "desc": "We do not award badges out of courtesy. Every partner installer undergoes an uncompromising multi-stage review:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "Step 1 • Project Liability",
                    "title": "Specific & Validated HVAC Liability Insurance",
                    "badge": "Original Certificate Audited",
                    "desc": "Current-year certificate with verified trade classifications explicitly covering 'HVAC, Thermal Engineering, Ducted Networks and Heat Pumps'. Paid-up premium required.",
                    "roleTitle": "Role of the insurer:",
                    "roleDesc": "The policy subscribed by the contractor legally covers their craftsmanship for 10 years per contract terms. DuctedExpert performs rigorous documentary verification."
                },
                {
                    "num": "02",
                    "stepTag": "Step 2 • Legal Existence",
                    "title": "Active Trade Registry, Seniority & Solvency",
                    "badge": "Official Chamber of Commerce / Registry Live Check",
                    "desc": "Verification of official business ID, matching HVAC business code, confirmed physical headquarters, zero insolvency filings, and official commercial bank account.",
                    "roleTitle": "Integrity check:",
                    "roleDesc": "We eliminate shell entities, unannounced subcontracting brokers, and newly formed paper corporations."
                },
                {
                    "num": "03",
                    "stepTag": "Step 3 • Technical Competence",
                    "title": "F-Gas Certified Refrigerant Handling Capability",
                    "badge": "Regulatory Body License Verified",
                    "desc": "Official Category 1 refrigerant handling license enabling legal purchase, recovery, and pressure-testing of R32 and fluorinated greenhouse gases.",
                    "roleTitle": "Manufacturer warranty preservation:",
                    "roleDesc": "Major manufacturers (Daikin, Mitsubishi, Panasonic, Toshiba) require certified commissioning to honor equipment warranties."
                },
                {
                    "num": "04",
                    "stepTag": "Step 4 • Brand Authorization",
                    "title": "Major Manufacturer & Zoning Direct Distribution",
                    "badge": "Authorized Equipment Supply Chains",
                    "desc": "Direct relationships with official brand distributors and smart zoning specialists (Airzone) ensuring genuine parts and priority technical support.",
                    "roleTitle": "Quality guarantee:",
                    "roleDesc": "Certified duct fabrication, fire-rated insulation, acoustic plenums, and calibrated volume flow balancing."
                }
            ]
        },
        "artisanTrust": {
            "tag": "Authentic Relationships",
            "title": "Rediscover the Pleasure of Working with",
            "titleHighlight": "a True, Trusted Professional",
            "paragraphs": [
                "When you work with a DuctedExpert® Verified Expert, you never speak to an aggressive offshore call center trying to auction your phone number to multiple competing bidders.",
                "You speak directly with an established local business owner who takes genuine pride in their work, understands regional climate dynamics, and visits your home with respect and technical rigor.",
                "No aggressive pressure, no phony flash discounts: just honest technical counsel, transparent quotes, and master craftsmanship."
            ]
        },
        "whyChoose": {
            "title": "Why Choose a Contractor Bearing the",
            "titleHighlight": "Verified Expert Quality Label?",
            "benefits": [
                {
                    "title": "Zero Hidden Markups or Commissions",
                    "desc": "The platform is 100% free for homeowners. You negotiate directly with your contractor on fair, uninflated prices."
                },
                {
                    "title": "Whisper-Quiet Acoustic Engineering",
                    "desc": "Proper plenum sizing and acoustic insulation ensure that your climate control operates at near-silent sound levels."
                },
                {
                    "title": "Complete Manufacturer Warranty Backing",
                    "desc": "Certified commissioning validates full 5-to-10-year manufacturer compressor and parts warranties."
                },
                {
                    "title": "Reliable Long-Term Maintenance",
                    "desc": "Local presence guarantees annual preventive filter and refrigerant servicing without being abandoned."
                }
            ]
        },
        "proSection": {
            "tag": "For High-Standard HVAC Contractors",
            "title": "Are You a Serious Installer?",
            "titleHighlight": "Stop letting unlicensed operators steal your reputation.",
            "paragraphs": [
                "You invest heavily in your liability insurance. You continuously train your technicians, take the time to fabricate acoustic plenums, balance airflows, and answer customer calls years after the job is finished.",
                "Yet in front of skeptical homeowners wary of building trade scandals, you must constantly defend your prices against cowboy operators who cut corners.",
                "The DuctedExpert® Verified Expert Label sets you apart instantly. It showcases your credentials, wins customer confidence, and brings you direct qualified projects with 0% sales commission."
            ],
            "joinBtn": "Apply for Verified Expert Accreditation"
        },
        "requirements": {
            "tag": "Admission Criteria",
            "title": "Prerequisites for Earning the",
            "titleHighlight": "DuctedExpert Label",
            "desc": "We do not compromise on technical integrity or homeowner safety. Here are the administrative and professional prerequisites required on official documentation:",
            "docsTitle": "Mandatory Administrative Documents",
            "docs": [
                {
                    "title": "Official Trade Registry Certificate",
                    "desc": "Verifying active company standing, address, and legal representative."
                },
                {
                    "title": "HVAC Professional Liability Insurance",
                    "desc": "Explicitly covering heating, cooling, ducted ventilation, and refrigeration."
                },
                {
                    "title": "Refrigerant Handling Certificate (F-Gas)",
                    "desc": "Valid certification for all technicians operating on pressurized circuits."
                },
                {
                    "title": "Official Bank Identity (RIB) & Photo ID",
                    "desc": "Confirming legitimate corporate financial operations."
                }
            ],
            "ethicsTitle": "Ethical & Quality Commitments",
            "ethics": [
                {
                    "title": "Itemized, Transparent Quotes",
                    "desc": "Explicit brand names, model capacities, duct materials, and zero surprise add-ons."
                },
                {
                    "title": "Respect of Deadlines & Job Site Cleanliness",
                    "desc": "Protection of floors, furniture, and thorough clean-up post installation."
                },
                {
                    "title": "Commissioning Protocol & Demonstration",
                    "desc": "Full customer training on thermostats, zoning controls, and handover of technical documentation."
                }
            ],
            "consultBtn": "Explore Verified Experts in My Area"
        },
        "faq": {
            "tag": "Clear Answers",
            "title": "Frequently Asked Questions About the Verified Expert Label",
            "items": [
                {
                    "q": "What risks do homeowners face if an installer lacks proper HVAC liability insurance?",
                    "a": "A standard plumber or painter's insurance policy excludes ducted air conditioning and refrigerant work. If water damage occurs from a condensate leak or an electrical fire starts, the insurer will deny coverage, leaving the homeowner solely liable for thousands of euros in damages."
                },
                {
                    "q": "Does DuctedExpert charge homeowners for quotes or contractor introductions?",
                    "a": "No, DuctedExpert is 100% free for homeowners. We do not take sales commissions on contractor contracts, which guarantees transparent, competitive market rates."
                },
                {
                    "q": "How can I verify that a contractor's Verified Expert badge is genuine?",
                    "a": "Every accredited member has an active profile page on DuctedExpert.com with their verified company details, license numbers, and certified badge. If a contractor displays the badge without an active profile, contact us immediately."
                },
                {
                    "q": "What is the difference between split AC and ducted air conditioning?",
                    "a": "Split systems have wall-mounted indoor units visible in each room. Ducted systems hide the indoor units completely inside ceilings or attics, distributing air through discrete architectural grilles with superior acoustics and aesthetics."
                },
                {
                    "q": "What documents must an installer submit to earn the label?",
                    "a": "Contractors must provide active trade registration documents, current-year HVAC liability insurance with proof of payment, official F-Gas certification, and signed adherence to our quality code of ethics."
                },
                {
                    "q": "What should I do if I am an installer and wish to obtain the label?",
                    "a": "Click on 'Register as a Pro' or 'Apply for Verified Expert Accreditation'. Our compliance team reviews your uploaded documentation within 48 business hours."
                }
            ]
        }
    },
    "de": {
        "metaTitle": "Geprüfter Experte Label DuctedExpert.com: Der Qualitätsstandard für Klimatechnik",
        "metaDesc": "Entdecken Sie das DuctedExpert Gütesiegel: Der offizielle Schutz für Bauherren vor unqualifizierten Betrieben, fehlender Versicherung und Mängeln.",
        "hero": {
            "topBadge": "Offizielles Vertrauenssiegel • Kundenschutz • Fachbetriebs-Auszeichnung",
            "title1": "Die Installation einer Kanal-Klimaanlage sollte niemals",
            "title2": "ein Glücksspiel mit Ihrer Immobilie sein",
            "desc": "Ein Kanalklimasystem wird für die nächsten 15 bis 20 Jahre unsichtbar in Decken und Wänden verbaut. Es ist keine gewöhnliche Haushaltsware, sondern eine Investition zwischen 8.000 € und 35.000 €. Das DuctedExpert® Label 'Geprüfter Experte' prüft Gewerbeanmeldungen, validiert Betriebshaftpflichten und hebt erstklassige Fachbetriebe hervor.",
            "reassurance": [
                {
                    "title": "Verified HVAC Liability Insurance",
                    "desc": "Official policy validated for ducted CVC, refrigerant piping & water damage."
                },
                {
                    "title": "Solvent & Established Entity",
                    "desc": "Audited business registration, trade registry standing & zero shell companies."
                },
                {
                    "title": "100% Free Connection",
                    "desc": "Direct contact with the expert • Zero commissions or broker fees on your project."
                }
            ],
            "findProBtn": "Geprüften Fachbetrieb in meiner Nähe finden",
            "joinProBtn": "Sind Sie Fachbetrieb? Dem Netzwerk beitreten"
        },
        "officialBadge": {
            "tag": "Visual Mark of Trust",
            "title": "Das offizielle Siegel « Geprüfter Experte »",
            "desc": "Achten Sie auf dieses offizielle Siegel auf den Profilen und Einsatzfahrzeugen der Fachbetriebe. Der pulsierende grüne Herzschlag signalisiert ein aktives Unternehmen mit geprüften Dokumenten.",
            "legalNotice": "This badge is a registered trademark of DuctedExpert.com. Any unauthorized display or fraudulent reproduction by unverified entities triggers immediate legal enforcement."
        },
        "traps": {
            "tag": "Market Reality • What Others Won't Tell You",
            "title": "Die 4 versteckten Fallen bei der Klimainstallation",
            "titleHighlight": "(und wie unser Label Sie davor schützt)",
            "desc": "Ducted air conditioning is a specialized engineering discipline requiring refrigeration precision and acoustic calculations. Yet the surge in demand has attracted unvetted middlemen and low-cost sub-tier crews. Here are the 4 major risks homeowners face, and our rigorous response:",
            "items": [
                {
                    "num": "01",
                    "title": "1. Post-Installation Ghosting & Abandonment",
                    "badTitle": "The Real Risk:",
                    "badText": "Before the contract is signed, the salesperson replies in five minutes. But when winter arrives and the ducted heat pump triggers an error code, calls go to voicemail and messages are ignored. You spent thousands of euros and are left in the cold with no customer support.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "We strictly select established local businesses with verified customer reviews and mandatory annual maintenance agreements."
                },
                {
                    "num": "02",
                    "title": "2. Fly-By-Night Entities & Quick Liquidations",
                    "badTitle": "The Real Risk:",
                    "badText": "Sales operations set up hurriedly, subcontracting installations to the lowest bidder. As soon as defects and formal notices accumulate, the company enters sudden liquidation, only to reopen months later under a new name with zero accountability.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Deep vetting of company registration, financial solvency, operating history, and lack of insolvency proceedings."
                },
                {
                    "num": "03",
                    "title": "3. The Illusion of Insurance (Non-HVAC Policies)",
                    "badTitle": "The Real Risk:",
                    "badText": "The contractor provides an insurance certificate, but a close look reveals it only covers painting or basic plumbing to save on premium costs. When a ceiling collapse occurs due to an uninsulated drain overflow, the insurer flatly denies coverage.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Original certificates audited specifically for 'HVAC, Ducted Refrigeration Networks and Thermal Engineering' with active premium validation."
                },
                {
                    "num": "04",
                    "title": "4. Fake Reviews & Uncertified Refrigerant Handling",
                    "badTitle": "The Real Risk:",
                    "badText": "Unlicensed crews handling R32 / R410A refrigerants without certified vacuum pumps and recovery stations. Moisture inside the copper lines turns the oil acidic, burning out the compressor in months and voiding the manufacturer's warranty.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Mandatory F-Gas / Refrigerant Handling certification verified directly with regulatory testing bodies."
                }
            ],
            "vision": {
                "tag": "Everyday Peace of Mind",
                "title": "What Your Home Truly Deserves:",
                "titleHighlight": "Invisible, silent, and enduring comfort.",
                "desc": "By choosing a DuctedExpert® Verified Expert, you turn a stressful home project into a seamless, high-confidence experience. You enjoy perfectly balanced air distribution, whisper-quiet acoustics, and total peace of mind for the next 15 years."
            }
        },
        "verification": {
            "tag": "DuctedExpert.com Quality Audit",
            "title": "Our 4-Step Document & Qualification Audit",
            "desc": "We do not award badges out of courtesy. Every partner installer undergoes an uncompromising multi-stage review:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "Step 1 • Project Liability",
                    "title": "Specific & Validated HVAC Liability Insurance",
                    "badge": "Original Certificate Audited",
                    "desc": "Current-year certificate with verified trade classifications explicitly covering 'HVAC, Thermal Engineering, Ducted Networks and Heat Pumps'. Paid-up premium required.",
                    "roleTitle": "Role of the insurer:",
                    "roleDesc": "The policy subscribed by the contractor legally covers their craftsmanship for 10 years per contract terms. DuctedExpert performs rigorous documentary verification."
                },
                {
                    "num": "02",
                    "stepTag": "Step 2 • Legal Existence",
                    "title": "Active Trade Registry, Seniority & Solvency",
                    "badge": "Official Chamber of Commerce / Registry Live Check",
                    "desc": "Verification of official business ID, matching HVAC business code, confirmed physical headquarters, zero insolvency filings, and official commercial bank account.",
                    "roleTitle": "Integrity check:",
                    "roleDesc": "We eliminate shell entities, unannounced subcontracting brokers, and newly formed paper corporations."
                },
                {
                    "num": "03",
                    "stepTag": "Step 3 • Technical Competence",
                    "title": "F-Gas Certified Refrigerant Handling Capability",
                    "badge": "Regulatory Body License Verified",
                    "desc": "Official Category 1 refrigerant handling license enabling legal purchase, recovery, and pressure-testing of R32 and fluorinated greenhouse gases.",
                    "roleTitle": "Manufacturer warranty preservation:",
                    "roleDesc": "Major manufacturers (Daikin, Mitsubishi, Panasonic, Toshiba) require certified commissioning to honor equipment warranties."
                },
                {
                    "num": "04",
                    "stepTag": "Step 4 • Brand Authorization",
                    "title": "Major Manufacturer & Zoning Direct Distribution",
                    "badge": "Authorized Equipment Supply Chains",
                    "desc": "Direct relationships with official brand distributors and smart zoning specialists (Airzone) ensuring genuine parts and priority technical support.",
                    "roleTitle": "Quality guarantee:",
                    "roleDesc": "Certified duct fabrication, fire-rated insulation, acoustic plenums, and calibrated volume flow balancing."
                }
            ]
        },
        "artisanTrust": {
            "tag": "Authentic Relationships",
            "title": "Rediscover the Pleasure of Working with",
            "titleHighlight": "a True, Trusted Professional",
            "paragraphs": [
                "When you work with a DuctedExpert® Verified Expert, you never speak to an aggressive offshore call center trying to auction your phone number to multiple competing bidders.",
                "You speak directly with an established local business owner who takes genuine pride in their work, understands regional climate dynamics, and visits your home with respect and technical rigor.",
                "No aggressive pressure, no phony flash discounts: just honest technical counsel, transparent quotes, and master craftsmanship."
            ]
        },
        "whyChoose": {
            "title": "Warum einen Fachbetrieb mit dem Siegel",
            "titleHighlight": "Geprüfter Experte wählen?",
            "benefits": [
                {
                    "title": "Zero Hidden Markups or Commissions",
                    "desc": "The platform is 100% free for homeowners. You negotiate directly with your contractor on fair, uninflated prices."
                },
                {
                    "title": "Whisper-Quiet Acoustic Engineering",
                    "desc": "Proper plenum sizing and acoustic insulation ensure that your climate control operates at near-silent sound levels."
                },
                {
                    "title": "Complete Manufacturer Warranty Backing",
                    "desc": "Certified commissioning validates full 5-to-10-year manufacturer compressor and parts warranties."
                },
                {
                    "title": "Reliable Long-Term Maintenance",
                    "desc": "Local presence guarantees annual preventive filter and refrigerant servicing without being abandoned."
                }
            ]
        },
        "proSection": {
            "tag": "For High-Standard HVAC Contractors",
            "title": "Sind Sie ein qualifizierter Fachbetrieb?",
            "titleHighlight": "Lassen Sie sich nicht von Billiganbietern untergraben.",
            "paragraphs": [
                "You invest heavily in your liability insurance. You continuously train your technicians, take the time to fabricate acoustic plenums, balance airflows, and answer customer calls years after the job is finished.",
                "Yet in front of skeptical homeowners wary of building trade scandals, you must constantly defend your prices against cowboy operators who cut corners.",
                "The DuctedExpert® Verified Expert Label sets you apart instantly. It showcases your credentials, wins customer confidence, and brings you direct qualified projects with 0% sales commission."
            ],
            "joinBtn": "Jetzt als geprüfter Experte bewerben"
        },
        "requirements": {
            "tag": "Admission Criteria",
            "title": "Voraussetzungen für den Erhalt des",
            "titleHighlight": "DuctedExpert Siegels",
            "desc": "We do not compromise on technical integrity or homeowner safety. Here are the administrative and professional prerequisites required on official documentation:",
            "docsTitle": "Mandatory Administrative Documents",
            "docs": [
                {
                    "title": "Official Trade Registry Certificate",
                    "desc": "Verifying active company standing, address, and legal representative."
                },
                {
                    "title": "HVAC Professional Liability Insurance",
                    "desc": "Explicitly covering heating, cooling, ducted ventilation, and refrigeration."
                },
                {
                    "title": "Refrigerant Handling Certificate (F-Gas)",
                    "desc": "Valid certification for all technicians operating on pressurized circuits."
                },
                {
                    "title": "Official Bank Identity (RIB) & Photo ID",
                    "desc": "Confirming legitimate corporate financial operations."
                }
            ],
            "ethicsTitle": "Ethical & Quality Commitments",
            "ethics": [
                {
                    "title": "Itemized, Transparent Quotes",
                    "desc": "Explicit brand names, model capacities, duct materials, and zero surprise add-ons."
                },
                {
                    "title": "Respect of Deadlines & Job Site Cleanliness",
                    "desc": "Protection of floors, furniture, and thorough clean-up post installation."
                },
                {
                    "title": "Commissioning Protocol & Demonstration",
                    "desc": "Full customer training on thermostats, zoning controls, and handover of technical documentation."
                }
            ],
            "consultBtn": "Geprüfte Fachbetriebe in meiner Region ansehen"
        },
        "faq": {
            "tag": "Clear Answers",
            "title": "Häufige Fragen zum Siegel Geprüfter Experte",
            "items": [
                {
                    "q": "What risks do homeowners face if an installer lacks proper HVAC liability insurance?",
                    "a": "A standard plumber or painter's insurance policy excludes ducted air conditioning and refrigerant work. If water damage occurs from a condensate leak or an electrical fire starts, the insurer will deny coverage, leaving the homeowner solely liable for thousands of euros in damages."
                },
                {
                    "q": "Does DuctedExpert charge homeowners for quotes or contractor introductions?",
                    "a": "No, DuctedExpert is 100% free for homeowners. We do not take sales commissions on contractor contracts, which guarantees transparent, competitive market rates."
                },
                {
                    "q": "How can I verify that a contractor's Verified Expert badge is genuine?",
                    "a": "Every accredited member has an active profile page on DuctedExpert.com with their verified company details, license numbers, and certified badge. If a contractor displays the badge without an active profile, contact us immediately."
                },
                {
                    "q": "What is the difference between split AC and ducted air conditioning?",
                    "a": "Split systems have wall-mounted indoor units visible in each room. Ducted systems hide the indoor units completely inside ceilings or attics, distributing air through discrete architectural grilles with superior acoustics and aesthetics."
                },
                {
                    "q": "What documents must an installer submit to earn the label?",
                    "a": "Contractors must provide active trade registration documents, current-year HVAC liability insurance with proof of payment, official F-Gas certification, and signed adherence to our quality code of ethics."
                },
                {
                    "q": "What should I do if I am an installer and wish to obtain the label?",
                    "a": "Click on 'Register as a Pro' or 'Apply for Verified Expert Accreditation'. Our compliance team reviews your uploaded documentation within 48 business hours."
                }
            ]
        }
    },
    "fi": {
        "metaTitle": "Sertifioitu Asiantuntija -laatumerkki | DuctedExpert.com",
        "metaDesc": "DuctedExpert Sertifioitu Asiantuntija -merkki: Virallinen suoja asunnonomistajille ammattitaidottomilta asennuksilta ja puutteellisilta vakuutuksilta.",
        "hero": {
            "topBadge": "Virallinen laatutakuu • Asiakassuoja • Asiantuntijan arvostus",
            "title1": "Kanavailmastoinnin asennus ei saa koskaan olla",
            "title2": "uhkapeliä oman kotisi kanssa",
            "desc": "Kanavoitu ilmastointijärjestelmä asennetaan kiinteäksi osaksi kotisi rakenteita seuraavaksi 15–20 vuodeksi. Kyseessä on merkittävä 8 000 – 35 000 euron investointi. DuctedExpert® Sertifioitu Asiantuntija -laatumerkki tarkastaa urakoitsijoiden luvat, vastuuvakuutukset ja kylmäalan pätevyydet.",
            "reassurance": [
                {
                    "title": "Verified HVAC Liability Insurance",
                    "desc": "Official policy validated for ducted CVC, refrigerant piping & water damage."
                },
                {
                    "title": "Solvent & Established Entity",
                    "desc": "Audited business registration, trade registry standing & zero shell companies."
                },
                {
                    "title": "100% Free Connection",
                    "desc": "Direct contact with the expert • Zero commissions or broker fees on your project."
                }
            ],
            "findProBtn": "Löydä tarkastettu asennusliike läheltäni",
            "joinProBtn": "Oletko urakoitsija? Liity verkostoon"
        },
        "officialBadge": {
            "tag": "Visual Mark of Trust",
            "title": "Virallinen « Sertifioitu Asiantuntija » -merkki",
            "desc": "Look for this official seal on member profiles and vehicle fleets. The pulsating green heartbeat signifies an active company whose certifications, licenses, and insurance policies have undergone strict document verification.",
            "legalNotice": "This badge is a registered trademark of DuctedExpert.com. Any unauthorized display or fraudulent reproduction by unverified entities triggers immediate legal enforcement."
        },
        "traps": {
            "tag": "Market Reality • What Others Won't Tell You",
            "title": "Ilmastointialan 4 piilevää sudenkuoppaa",
            "titleHighlight": "(ja miten laatumerkkimme suojaa sinua)",
            "desc": "Ducted air conditioning is a specialized engineering discipline requiring refrigeration precision and acoustic calculations. Yet the surge in demand has attracted unvetted middlemen and low-cost sub-tier crews. Here are the 4 major risks homeowners face, and our rigorous response:",
            "items": [
                {
                    "num": "01",
                    "title": "1. Post-Installation Ghosting & Abandonment",
                    "badTitle": "The Real Risk:",
                    "badText": "Before the contract is signed, the salesperson replies in five minutes. But when winter arrives and the ducted heat pump triggers an error code, calls go to voicemail and messages are ignored. You spent thousands of euros and are left in the cold with no customer support.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "We strictly select established local businesses with verified customer reviews and mandatory annual maintenance agreements."
                },
                {
                    "num": "02",
                    "title": "2. Fly-By-Night Entities & Quick Liquidations",
                    "badTitle": "The Real Risk:",
                    "badText": "Sales operations set up hurriedly, subcontracting installations to the lowest bidder. As soon as defects and formal notices accumulate, the company enters sudden liquidation, only to reopen months later under a new name with zero accountability.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Deep vetting of company registration, financial solvency, operating history, and lack of insolvency proceedings."
                },
                {
                    "num": "03",
                    "title": "3. The Illusion of Insurance (Non-HVAC Policies)",
                    "badTitle": "The Real Risk:",
                    "badText": "The contractor provides an insurance certificate, but a close look reveals it only covers painting or basic plumbing to save on premium costs. When a ceiling collapse occurs due to an uninsulated drain overflow, the insurer flatly denies coverage.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Original certificates audited specifically for 'HVAC, Ducted Refrigeration Networks and Thermal Engineering' with active premium validation."
                },
                {
                    "num": "04",
                    "title": "4. Fake Reviews & Uncertified Refrigerant Handling",
                    "badTitle": "The Real Risk:",
                    "badText": "Unlicensed crews handling R32 / R410A refrigerants without certified vacuum pumps and recovery stations. Moisture inside the copper lines turns the oil acidic, burning out the compressor in months and voiding the manufacturer's warranty.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Mandatory F-Gas / Refrigerant Handling certification verified directly with regulatory testing bodies."
                }
            ],
            "vision": {
                "tag": "Everyday Peace of Mind",
                "title": "What Your Home Truly Deserves:",
                "titleHighlight": "Invisible, silent, and enduring comfort.",
                "desc": "By choosing a DuctedExpert® Verified Expert, you turn a stressful home project into a seamless, high-confidence experience. You enjoy perfectly balanced air distribution, whisper-quiet acoustics, and total peace of mind for the next 15 years."
            }
        },
        "verification": {
            "tag": "DuctedExpert.com Quality Audit",
            "title": "Our 4-Step Document & Qualification Audit",
            "desc": "We do not award badges out of courtesy. Every partner installer undergoes an uncompromising multi-stage review:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "Step 1 • Project Liability",
                    "title": "Specific & Validated HVAC Liability Insurance",
                    "badge": "Original Certificate Audited",
                    "desc": "Current-year certificate with verified trade classifications explicitly covering 'HVAC, Thermal Engineering, Ducted Networks and Heat Pumps'. Paid-up premium required.",
                    "roleTitle": "Role of the insurer:",
                    "roleDesc": "The policy subscribed by the contractor legally covers their craftsmanship for 10 years per contract terms. DuctedExpert performs rigorous documentary verification."
                },
                {
                    "num": "02",
                    "stepTag": "Step 2 • Legal Existence",
                    "title": "Active Trade Registry, Seniority & Solvency",
                    "badge": "Official Chamber of Commerce / Registry Live Check",
                    "desc": "Verification of official business ID, matching HVAC business code, confirmed physical headquarters, zero insolvency filings, and official commercial bank account.",
                    "roleTitle": "Integrity check:",
                    "roleDesc": "We eliminate shell entities, unannounced subcontracting brokers, and newly formed paper corporations."
                },
                {
                    "num": "03",
                    "stepTag": "Step 3 • Technical Competence",
                    "title": "F-Gas Certified Refrigerant Handling Capability",
                    "badge": "Regulatory Body License Verified",
                    "desc": "Official Category 1 refrigerant handling license enabling legal purchase, recovery, and pressure-testing of R32 and fluorinated greenhouse gases.",
                    "roleTitle": "Manufacturer warranty preservation:",
                    "roleDesc": "Major manufacturers (Daikin, Mitsubishi, Panasonic, Toshiba) require certified commissioning to honor equipment warranties."
                },
                {
                    "num": "04",
                    "stepTag": "Step 4 • Brand Authorization",
                    "title": "Major Manufacturer & Zoning Direct Distribution",
                    "badge": "Authorized Equipment Supply Chains",
                    "desc": "Direct relationships with official brand distributors and smart zoning specialists (Airzone) ensuring genuine parts and priority technical support.",
                    "roleTitle": "Quality guarantee:",
                    "roleDesc": "Certified duct fabrication, fire-rated insulation, acoustic plenums, and calibrated volume flow balancing."
                }
            ]
        },
        "artisanTrust": {
            "tag": "Authentic Relationships",
            "title": "Rediscover the Pleasure of Working with",
            "titleHighlight": "a True, Trusted Professional",
            "paragraphs": [
                "When you work with a DuctedExpert® Verified Expert, you never speak to an aggressive offshore call center trying to auction your phone number to multiple competing bidders.",
                "You speak directly with an established local business owner who takes genuine pride in their work, understands regional climate dynamics, and visits your home with respect and technical rigor.",
                "No aggressive pressure, no phony flash discounts: just honest technical counsel, transparent quotes, and master craftsmanship."
            ]
        },
        "whyChoose": {
            "title": "Miksi valita urakoitsija, jolla on",
            "titleHighlight": "Sertifioitu Asiantuntija -laatumerkki?",
            "benefits": [
                {
                    "title": "Zero Hidden Markups or Commissions",
                    "desc": "The platform is 100% free for homeowners. You negotiate directly with your contractor on fair, uninflated prices."
                },
                {
                    "title": "Whisper-Quiet Acoustic Engineering",
                    "desc": "Proper plenum sizing and acoustic insulation ensure that your climate control operates at near-silent sound levels."
                },
                {
                    "title": "Complete Manufacturer Warranty Backing",
                    "desc": "Certified commissioning validates full 5-to-10-year manufacturer compressor and parts warranties."
                },
                {
                    "title": "Reliable Long-Term Maintenance",
                    "desc": "Local presence guarantees annual preventive filter and refrigerant servicing without being abandoned."
                }
            ]
        },
        "proSection": {
            "tag": "For High-Standard HVAC Contractors",
            "title": "Oletko vastuullinen LVI-urakoitsija?",
            "titleHighlight": "Erotu epäpätevistä toimijoista ja ansaitse asiakkaiden luottamus.",
            "paragraphs": [
                "You invest heavily in your liability insurance. You continuously train your technicians, take the time to fabricate acoustic plenums, balance airflows, and answer customer calls years after the job is finished.",
                "Yet in front of skeptical homeowners wary of building trade scandals, you must constantly defend your prices against cowboy operators who cut corners.",
                "The DuctedExpert® Verified Expert Label sets you apart instantly. It showcases your credentials, wins customer confidence, and brings you direct qualified projects with 0% sales commission."
            ],
            "joinBtn": "Hae Sertifioitu Asiantuntija -akkreditointia"
        },
        "requirements": {
            "tag": "Admission Criteria",
            "title": "Edellytykset ja kriteerit",
            "titleHighlight": "DuctedExpert -laatumerkille",
            "desc": "We do not compromise on technical integrity or homeowner safety. Here are the administrative and professional prerequisites required on official documentation:",
            "docsTitle": "Mandatory Administrative Documents",
            "docs": [
                {
                    "title": "Official Trade Registry Certificate",
                    "desc": "Verifying active company standing, address, and legal representative."
                },
                {
                    "title": "HVAC Professional Liability Insurance",
                    "desc": "Explicitly covering heating, cooling, ducted ventilation, and refrigeration."
                },
                {
                    "title": "Refrigerant Handling Certificate (F-Gas)",
                    "desc": "Valid certification for all technicians operating on pressurized circuits."
                },
                {
                    "title": "Official Bank Identity (RIB) & Photo ID",
                    "desc": "Confirming legitimate corporate financial operations."
                }
            ],
            "ethicsTitle": "Ethical & Quality Commitments",
            "ethics": [
                {
                    "title": "Itemized, Transparent Quotes",
                    "desc": "Explicit brand names, model capacities, duct materials, and zero surprise add-ons."
                },
                {
                    "title": "Respect of Deadlines & Job Site Cleanliness",
                    "desc": "Protection of floors, furniture, and thorough clean-up post installation."
                },
                {
                    "title": "Commissioning Protocol & Demonstration",
                    "desc": "Full customer training on thermostats, zoning controls, and handover of technical documentation."
                }
            ],
            "consultBtn": "Tutustu alueeni sertifioituihin asiantuntijoihin"
        },
        "faq": {
            "tag": "Clear Answers",
            "title": "Usein kysytyt kysymykset laatumerkistä",
            "items": [
                {
                    "q": "What risks do homeowners face if an installer lacks proper HVAC liability insurance?",
                    "a": "A standard plumber or painter's insurance policy excludes ducted air conditioning and refrigerant work. If water damage occurs from a condensate leak or an electrical fire starts, the insurer will deny coverage, leaving the homeowner solely liable for thousands of euros in damages."
                },
                {
                    "q": "Does DuctedExpert charge homeowners for quotes or contractor introductions?",
                    "a": "No, DuctedExpert is 100% free for homeowners. We do not take sales commissions on contractor contracts, which guarantees transparent, competitive market rates."
                },
                {
                    "q": "How can I verify that a contractor's Verified Expert badge is genuine?",
                    "a": "Every accredited member has an active profile page on DuctedExpert.com with their verified company details, license numbers, and certified badge. If a contractor displays the badge without an active profile, contact us immediately."
                },
                {
                    "q": "What is the difference between split AC and ducted air conditioning?",
                    "a": "Split systems have wall-mounted indoor units visible in each room. Ducted systems hide the indoor units completely inside ceilings or attics, distributing air through discrete architectural grilles with superior acoustics and aesthetics."
                },
                {
                    "q": "What documents must an installer submit to earn the label?",
                    "a": "Contractors must provide active trade registration documents, current-year HVAC liability insurance with proof of payment, official F-Gas certification, and signed adherence to our quality code of ethics."
                },
                {
                    "q": "What should I do if I am an installer and wish to obtain the label?",
                    "a": "Click on 'Register as a Pro' or 'Apply for Verified Expert Accreditation'. Our compliance team reviews your uploaded documentation within 48 business hours."
                }
            ]
        }
    },
    "es": {
        "metaTitle": "Sello Experto Verificado DuctedExpert.com: El Estándar de Calidad en Climatización",
        "metaDesc": "Descubra el sello Experto Verificado DuctedExpert: la protección oficial de particulares frente a instaladores no cualificados y pólizas de seguro deficientes.",
        "hero": {
            "topBadge": "Garantía Oficial de Confianza • Protección del Cliente • Distinción Profesional",
            "title1": "Instalar aire acondicionado por conductos nunca debería ser",
            "title2": "un juego de azar con su vivienda",
            "desc": "Un sistema por conductos se integra en sus techos y estructuras para los próximos 15 a 20 años. No es un electrodoméstico cualquiera: es una inversión importante de entre 8.000 € y 35.000 €. El sello DuctedExpert® Experto Verificado audita la documentación, seguros de responsabilidad CVC y capacita a las mejores empresas.",
            "reassurance": [
                {
                    "title": "Verified HVAC Liability Insurance",
                    "desc": "Official policy validated for ducted CVC, refrigerant piping & water damage."
                },
                {
                    "title": "Solvent & Established Entity",
                    "desc": "Audited business registration, trade registry standing & zero shell companies."
                },
                {
                    "title": "100% Free Connection",
                    "desc": "Direct contact with the expert • Zero commissions or broker fees on your project."
                }
            ],
            "findProBtn": "Buscar un Instalador Verificado Cerca de Mí",
            "joinProBtn": "¿Es usted instalador? Unirse a la Red"
        },
        "officialBadge": {
            "tag": "Visual Mark of Trust",
            "title": "El Distintivo Oficial « Experto Verificado »",
            "desc": "Look for this official seal on member profiles and vehicle fleets. The pulsating green heartbeat signifies an active company whose certifications, licenses, and insurance policies have undergone strict document verification.",
            "legalNotice": "This badge is a registered trademark of DuctedExpert.com. Any unauthorized display or fraudulent reproduction by unverified entities triggers immediate legal enforcement."
        },
        "traps": {
            "tag": "Market Reality • What Others Won't Tell You",
            "title": "Las 4 Trampas Ocultas de la Climatización",
            "titleHighlight": "(y cómo nuestro sello le protege de ellas)",
            "desc": "Ducted air conditioning is a specialized engineering discipline requiring refrigeration precision and acoustic calculations. Yet the surge in demand has attracted unvetted middlemen and low-cost sub-tier crews. Here are the 4 major risks homeowners face, and our rigorous response:",
            "items": [
                {
                    "num": "01",
                    "title": "1. Post-Installation Ghosting & Abandonment",
                    "badTitle": "The Real Risk:",
                    "badText": "Before the contract is signed, the salesperson replies in five minutes. But when winter arrives and the ducted heat pump triggers an error code, calls go to voicemail and messages are ignored. You spent thousands of euros and are left in the cold with no customer support.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "We strictly select established local businesses with verified customer reviews and mandatory annual maintenance agreements."
                },
                {
                    "num": "02",
                    "title": "2. Fly-By-Night Entities & Quick Liquidations",
                    "badTitle": "The Real Risk:",
                    "badText": "Sales operations set up hurriedly, subcontracting installations to the lowest bidder. As soon as defects and formal notices accumulate, the company enters sudden liquidation, only to reopen months later under a new name with zero accountability.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Deep vetting of company registration, financial solvency, operating history, and lack of insolvency proceedings."
                },
                {
                    "num": "03",
                    "title": "3. The Illusion of Insurance (Non-HVAC Policies)",
                    "badTitle": "The Real Risk:",
                    "badText": "The contractor provides an insurance certificate, but a close look reveals it only covers painting or basic plumbing to save on premium costs. When a ceiling collapse occurs due to an uninsulated drain overflow, the insurer flatly denies coverage.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Original certificates audited specifically for 'HVAC, Ducted Refrigeration Networks and Thermal Engineering' with active premium validation."
                },
                {
                    "num": "04",
                    "title": "4. Fake Reviews & Uncertified Refrigerant Handling",
                    "badTitle": "The Real Risk:",
                    "badText": "Unlicensed crews handling R32 / R410A refrigerants without certified vacuum pumps and recovery stations. Moisture inside the copper lines turns the oil acidic, burning out the compressor in months and voiding the manufacturer's warranty.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Mandatory F-Gas / Refrigerant Handling certification verified directly with regulatory testing bodies."
                }
            ],
            "vision": {
                "tag": "Everyday Peace of Mind",
                "title": "What Your Home Truly Deserves:",
                "titleHighlight": "Invisible, silent, and enduring comfort.",
                "desc": "By choosing a DuctedExpert® Verified Expert, you turn a stressful home project into a seamless, high-confidence experience. You enjoy perfectly balanced air distribution, whisper-quiet acoustics, and total peace of mind for the next 15 years."
            }
        },
        "verification": {
            "tag": "DuctedExpert.com Quality Audit",
            "title": "Our 4-Step Document & Qualification Audit",
            "desc": "We do not award badges out of courtesy. Every partner installer undergoes an uncompromising multi-stage review:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "Step 1 • Project Liability",
                    "title": "Specific & Validated HVAC Liability Insurance",
                    "badge": "Original Certificate Audited",
                    "desc": "Current-year certificate with verified trade classifications explicitly covering 'HVAC, Thermal Engineering, Ducted Networks and Heat Pumps'. Paid-up premium required.",
                    "roleTitle": "Role of the insurer:",
                    "roleDesc": "The policy subscribed by the contractor legally covers their craftsmanship for 10 years per contract terms. DuctedExpert performs rigorous documentary verification."
                },
                {
                    "num": "02",
                    "stepTag": "Step 2 • Legal Existence",
                    "title": "Active Trade Registry, Seniority & Solvency",
                    "badge": "Official Chamber of Commerce / Registry Live Check",
                    "desc": "Verification of official business ID, matching HVAC business code, confirmed physical headquarters, zero insolvency filings, and official commercial bank account.",
                    "roleTitle": "Integrity check:",
                    "roleDesc": "We eliminate shell entities, unannounced subcontracting brokers, and newly formed paper corporations."
                },
                {
                    "num": "03",
                    "stepTag": "Step 3 • Technical Competence",
                    "title": "F-Gas Certified Refrigerant Handling Capability",
                    "badge": "Regulatory Body License Verified",
                    "desc": "Official Category 1 refrigerant handling license enabling legal purchase, recovery, and pressure-testing of R32 and fluorinated greenhouse gases.",
                    "roleTitle": "Manufacturer warranty preservation:",
                    "roleDesc": "Major manufacturers (Daikin, Mitsubishi, Panasonic, Toshiba) require certified commissioning to honor equipment warranties."
                },
                {
                    "num": "04",
                    "stepTag": "Step 4 • Brand Authorization",
                    "title": "Major Manufacturer & Zoning Direct Distribution",
                    "badge": "Authorized Equipment Supply Chains",
                    "desc": "Direct relationships with official brand distributors and smart zoning specialists (Airzone) ensuring genuine parts and priority technical support.",
                    "roleTitle": "Quality guarantee:",
                    "roleDesc": "Certified duct fabrication, fire-rated insulation, acoustic plenums, and calibrated volume flow balancing."
                }
            ]
        },
        "artisanTrust": {
            "tag": "Authentic Relationships",
            "title": "Rediscover the Pleasure of Working with",
            "titleHighlight": "a True, Trusted Professional",
            "paragraphs": [
                "When you work with a DuctedExpert® Verified Expert, you never speak to an aggressive offshore call center trying to auction your phone number to multiple competing bidders.",
                "You speak directly with an established local business owner who takes genuine pride in their work, understands regional climate dynamics, and visits your home with respect and technical rigor.",
                "No aggressive pressure, no phony flash discounts: just honest technical counsel, transparent quotes, and master craftsmanship."
            ]
        },
        "whyChoose": {
            "title": "¿Por qué elegir una empresa con el sello",
            "titleHighlight": "Experto Verificado?",
            "benefits": [
                {
                    "title": "Zero Hidden Markups or Commissions",
                    "desc": "The platform is 100% free for homeowners. You negotiate directly with your contractor on fair, uninflated prices."
                },
                {
                    "title": "Whisper-Quiet Acoustic Engineering",
                    "desc": "Proper plenum sizing and acoustic insulation ensure that your climate control operates at near-silent sound levels."
                },
                {
                    "title": "Complete Manufacturer Warranty Backing",
                    "desc": "Certified commissioning validates full 5-to-10-year manufacturer compressor and parts warranties."
                },
                {
                    "title": "Reliable Long-Term Maintenance",
                    "desc": "Local presence guarantees annual preventive filter and refrigerant servicing without being abandoned."
                }
            ]
        },
        "proSection": {
            "tag": "For High-Standard HVAC Contractors",
            "title": "¿Es usted un instalador profesional serio?",
            "titleHighlight": "No permita que instaladores piratas desprestigien su oficio.",
            "paragraphs": [
                "You invest heavily in your liability insurance. You continuously train your technicians, take the time to fabricate acoustic plenums, balance airflows, and answer customer calls years after the job is finished.",
                "Yet in front of skeptical homeowners wary of building trade scandals, you must constantly defend your prices against cowboy operators who cut corners.",
                "The DuctedExpert® Verified Expert Label sets you apart instantly. It showcases your credentials, wins customer confidence, and brings you direct qualified projects with 0% sales commission."
            ],
            "joinBtn": "Solicitar Acreditación Experto Verificado"
        },
        "requirements": {
            "tag": "Admission Criteria",
            "title": "Condiciones para obtener el Sello",
            "titleHighlight": "DuctedExpert",
            "desc": "We do not compromise on technical integrity or homeowner safety. Here are the administrative and professional prerequisites required on official documentation:",
            "docsTitle": "Mandatory Administrative Documents",
            "docs": [
                {
                    "title": "Official Trade Registry Certificate",
                    "desc": "Verifying active company standing, address, and legal representative."
                },
                {
                    "title": "HVAC Professional Liability Insurance",
                    "desc": "Explicitly covering heating, cooling, ducted ventilation, and refrigeration."
                },
                {
                    "title": "Refrigerant Handling Certificate (F-Gas)",
                    "desc": "Valid certification for all technicians operating on pressurized circuits."
                },
                {
                    "title": "Official Bank Identity (RIB) & Photo ID",
                    "desc": "Confirming legitimate corporate financial operations."
                }
            ],
            "ethicsTitle": "Ethical & Quality Commitments",
            "ethics": [
                {
                    "title": "Itemized, Transparent Quotes",
                    "desc": "Explicit brand names, model capacities, duct materials, and zero surprise add-ons."
                },
                {
                    "title": "Respect of Deadlines & Job Site Cleanliness",
                    "desc": "Protection of floors, furniture, and thorough clean-up post installation."
                },
                {
                    "title": "Commissioning Protocol & Demonstration",
                    "desc": "Full customer training on thermostats, zoning controls, and handover of technical documentation."
                }
            ],
            "consultBtn": "Ver Instaladores Verificados en mi zona"
        },
        "faq": {
            "tag": "Clear Answers",
            "title": "Preguntas Frecuentes sobre el Experto Verificado",
            "items": [
                {
                    "q": "What risks do homeowners face if an installer lacks proper HVAC liability insurance?",
                    "a": "A standard plumber or painter's insurance policy excludes ducted air conditioning and refrigerant work. If water damage occurs from a condensate leak or an electrical fire starts, the insurer will deny coverage, leaving the homeowner solely liable for thousands of euros in damages."
                },
                {
                    "q": "Does DuctedExpert charge homeowners for quotes or contractor introductions?",
                    "a": "No, DuctedExpert is 100% free for homeowners. We do not take sales commissions on contractor contracts, which guarantees transparent, competitive market rates."
                },
                {
                    "q": "How can I verify that a contractor's Verified Expert badge is genuine?",
                    "a": "Every accredited member has an active profile page on DuctedExpert.com with their verified company details, license numbers, and certified badge. If a contractor displays the badge without an active profile, contact us immediately."
                },
                {
                    "q": "What is the difference between split AC and ducted air conditioning?",
                    "a": "Split systems have wall-mounted indoor units visible in each room. Ducted systems hide the indoor units completely inside ceilings or attics, distributing air through discrete architectural grilles with superior acoustics and aesthetics."
                },
                {
                    "q": "What documents must an installer submit to earn the label?",
                    "a": "Contractors must provide active trade registration documents, current-year HVAC liability insurance with proof of payment, official F-Gas certification, and signed adherence to our quality code of ethics."
                },
                {
                    "q": "What should I do if I am an installer and wish to obtain the label?",
                    "a": "Click on 'Register as a Pro' or 'Apply for Verified Expert Accreditation'. Our compliance team reviews your uploaded documentation within 48 business hours."
                }
            ]
        }
    },
    "it": {
        "metaTitle": "Marchio Esperto Verificato DuctedExpert.com: Lo Standard di Qualità HVAC",
        "metaDesc": "Scopri il marchio Esperto Verificato DuctedExpert: la tutela ufficiale per i proprietari contro installatori improvvisati, polizze non idonee e abbandono post-vendita.",
        "hero": {
            "topBadge": "Garanzia Ufficiale di Fiducia • Tutela del Cliente • Riconoscimento Professionale",
            "title1": "Installare un impianto canalizzato non dovrebbe mai essere",
            "title2": "una scommessa azzardata con la tua casa",
            "desc": "Un impianto canalizzato si incassa nei controsoffitti e nella struttura per i prossimi 15-20 anni. Non è un comune elettrodomestico: è un investimento significativo tra gli 8.000 € e i 35.000 €. Il Marchio DuctedExpert® Esperto Verificato verifica su documenti l'abilitazione F-Gas, l'assicurazione decennale/CVC e valorizza le aziende d'eccellenza.",
            "reassurance": [
                {
                    "title": "Verified HVAC Liability Insurance",
                    "desc": "Official policy validated for ducted CVC, refrigerant piping & water damage."
                },
                {
                    "title": "Solvent & Established Entity",
                    "desc": "Audited business registration, trade registry standing & zero shell companies."
                },
                {
                    "title": "100% Free Connection",
                    "desc": "Direct contact with the expert • Zero commissions or broker fees on your project."
                }
            ],
            "findProBtn": "Trova un Installatore Verificato Vicino a Me",
            "joinProBtn": "Sei un Installatore? Unisciti alla Rete"
        },
        "officialBadge": {
            "tag": "Visual Mark of Trust",
            "title": "Il Badge Ufficiale « Esperto Verificato »",
            "desc": "Look for this official seal on member profiles and vehicle fleets. The pulsating green heartbeat signifies an active company whose certifications, licenses, and insurance policies have undergone strict document verification.",
            "legalNotice": "This badge is a registered trademark of DuctedExpert.com. Any unauthorized display or fraudulent reproduction by unverified entities triggers immediate legal enforcement."
        },
        "traps": {
            "tag": "Market Reality • What Others Won't Tell You",
            "title": "Le 4 Trappole Nascoste della Climatizzazione",
            "titleHighlight": "(e come il nostro marchio ti protegge)",
            "desc": "Ducted air conditioning is a specialized engineering discipline requiring refrigeration precision and acoustic calculations. Yet the surge in demand has attracted unvetted middlemen and low-cost sub-tier crews. Here are the 4 major risks homeowners face, and our rigorous response:",
            "items": [
                {
                    "num": "01",
                    "title": "1. Post-Installation Ghosting & Abandonment",
                    "badTitle": "The Real Risk:",
                    "badText": "Before the contract is signed, the salesperson replies in five minutes. But when winter arrives and the ducted heat pump triggers an error code, calls go to voicemail and messages are ignored. You spent thousands of euros and are left in the cold with no customer support.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "We strictly select established local businesses with verified customer reviews and mandatory annual maintenance agreements."
                },
                {
                    "num": "02",
                    "title": "2. Fly-By-Night Entities & Quick Liquidations",
                    "badTitle": "The Real Risk:",
                    "badText": "Sales operations set up hurriedly, subcontracting installations to the lowest bidder. As soon as defects and formal notices accumulate, the company enters sudden liquidation, only to reopen months later under a new name with zero accountability.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Deep vetting of company registration, financial solvency, operating history, and lack of insolvency proceedings."
                },
                {
                    "num": "03",
                    "title": "3. The Illusion of Insurance (Non-HVAC Policies)",
                    "badTitle": "The Real Risk:",
                    "badText": "The contractor provides an insurance certificate, but a close look reveals it only covers painting or basic plumbing to save on premium costs. When a ceiling collapse occurs due to an uninsulated drain overflow, the insurer flatly denies coverage.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Original certificates audited specifically for 'HVAC, Ducted Refrigeration Networks and Thermal Engineering' with active premium validation."
                },
                {
                    "num": "04",
                    "title": "4. Fake Reviews & Uncertified Refrigerant Handling",
                    "badTitle": "The Real Risk:",
                    "badText": "Unlicensed crews handling R32 / R410A refrigerants without certified vacuum pumps and recovery stations. Moisture inside the copper lines turns the oil acidic, burning out the compressor in months and voiding the manufacturer's warranty.",
                    "goodTitle": "DuctedExpert Protection:",
                    "goodText": "Mandatory F-Gas / Refrigerant Handling certification verified directly with regulatory testing bodies."
                }
            ],
            "vision": {
                "tag": "Everyday Peace of Mind",
                "title": "What Your Home Truly Deserves:",
                "titleHighlight": "Invisible, silent, and enduring comfort.",
                "desc": "By choosing a DuctedExpert® Verified Expert, you turn a stressful home project into a seamless, high-confidence experience. You enjoy perfectly balanced air distribution, whisper-quiet acoustics, and total peace of mind for the next 15 years."
            }
        },
        "verification": {
            "tag": "DuctedExpert.com Quality Audit",
            "title": "Our 4-Step Document & Qualification Audit",
            "desc": "We do not award badges out of courtesy. Every partner installer undergoes an uncompromising multi-stage review:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "Step 1 • Project Liability",
                    "title": "Specific & Validated HVAC Liability Insurance",
                    "badge": "Original Certificate Audited",
                    "desc": "Current-year certificate with verified trade classifications explicitly covering 'HVAC, Thermal Engineering, Ducted Networks and Heat Pumps'. Paid-up premium required.",
                    "roleTitle": "Role of the insurer:",
                    "roleDesc": "The policy subscribed by the contractor legally covers their craftsmanship for 10 years per contract terms. DuctedExpert performs rigorous documentary verification."
                },
                {
                    "num": "02",
                    "stepTag": "Step 2 • Legal Existence",
                    "title": "Active Trade Registry, Seniority & Solvency",
                    "badge": "Official Chamber of Commerce / Registry Live Check",
                    "desc": "Verification of official business ID, matching HVAC business code, confirmed physical headquarters, zero insolvency filings, and official commercial bank account.",
                    "roleTitle": "Integrity check:",
                    "roleDesc": "We eliminate shell entities, unannounced subcontracting brokers, and newly formed paper corporations."
                },
                {
                    "num": "03",
                    "stepTag": "Step 3 • Technical Competence",
                    "title": "F-Gas Certified Refrigerant Handling Capability",
                    "badge": "Regulatory Body License Verified",
                    "desc": "Official Category 1 refrigerant handling license enabling legal purchase, recovery, and pressure-testing of R32 and fluorinated greenhouse gases.",
                    "roleTitle": "Manufacturer warranty preservation:",
                    "roleDesc": "Major manufacturers (Daikin, Mitsubishi, Panasonic, Toshiba) require certified commissioning to honor equipment warranties."
                },
                {
                    "num": "04",
                    "stepTag": "Step 4 • Brand Authorization",
                    "title": "Major Manufacturer & Zoning Direct Distribution",
                    "badge": "Authorized Equipment Supply Chains",
                    "desc": "Direct relationships with official brand distributors and smart zoning specialists (Airzone) ensuring genuine parts and priority technical support.",
                    "roleTitle": "Quality guarantee:",
                    "roleDesc": "Certified duct fabrication, fire-rated insulation, acoustic plenums, and calibrated volume flow balancing."
                }
            ]
        },
        "artisanTrust": {
            "tag": "Authentic Relationships",
            "title": "Rediscover the Pleasure of Working with",
            "titleHighlight": "a True, Trusted Professional",
            "paragraphs": [
                "When you work with a DuctedExpert® Verified Expert, you never speak to an aggressive offshore call center trying to auction your phone number to multiple competing bidders.",
                "You speak directly with an established local business owner who takes genuine pride in their work, understands regional climate dynamics, and visits your home with respect and technical rigor.",
                "No aggressive pressure, no phony flash discounts: just honest technical counsel, transparent quotes, and master craftsmanship."
            ]
        },
        "whyChoose": {
            "title": "Perché scegliere un professionista con il marchio",
            "titleHighlight": "Esperto Verificato?",
            "benefits": [
                {
                    "title": "Zero Hidden Markups or Commissions",
                    "desc": "The platform is 100% free for homeowners. You negotiate directly with your contractor on fair, uninflated prices."
                },
                {
                    "title": "Whisper-Quiet Acoustic Engineering",
                    "desc": "Proper plenum sizing and acoustic insulation ensure that your climate control operates at near-silent sound levels."
                },
                {
                    "title": "Complete Manufacturer Warranty Backing",
                    "desc": "Certified commissioning validates full 5-to-10-year manufacturer compressor and parts warranties."
                },
                {
                    "title": "Reliable Long-Term Maintenance",
                    "desc": "Local presence guarantees annual preventive filter and refrigerant servicing without being abandoned."
                }
            ]
        },
        "proSection": {
            "tag": "For High-Standard HVAC Contractors",
            "title": "Sei un installatore serio e qualificato?",
            "titleHighlight": "Non lasciare che operatori improvvisati sottraggano i tuoi cantieri.",
            "paragraphs": [
                "You invest heavily in your liability insurance. You continuously train your technicians, take the time to fabricate acoustic plenums, balance airflows, and answer customer calls years after the job is finished.",
                "Yet in front of skeptical homeowners wary of building trade scandals, you must constantly defend your prices against cowboy operators who cut corners.",
                "The DuctedExpert® Verified Expert Label sets you apart instantly. It showcases your credentials, wins customer confidence, and brings you direct qualified projects with 0% sales commission."
            ],
            "joinBtn": "Richiedi l'Accreditamento Esperto Verificato"
        },
        "requirements": {
            "tag": "Admission Criteria",
            "title": "Requisiti per ottenere il Marchio",
            "titleHighlight": "DuctedExpert",
            "desc": "We do not compromise on technical integrity or homeowner safety. Here are the administrative and professional prerequisites required on official documentation:",
            "docsTitle": "Mandatory Administrative Documents",
            "docs": [
                {
                    "title": "Official Trade Registry Certificate",
                    "desc": "Verifying active company standing, address, and legal representative."
                },
                {
                    "title": "HVAC Professional Liability Insurance",
                    "desc": "Explicitly covering heating, cooling, ducted ventilation, and refrigeration."
                },
                {
                    "title": "Refrigerant Handling Certificate (F-Gas)",
                    "desc": "Valid certification for all technicians operating on pressurized circuits."
                },
                {
                    "title": "Official Bank Identity (RIB) & Photo ID",
                    "desc": "Confirming legitimate corporate financial operations."
                }
            ],
            "ethicsTitle": "Ethical & Quality Commitments",
            "ethics": [
                {
                    "title": "Itemized, Transparent Quotes",
                    "desc": "Explicit brand names, model capacities, duct materials, and zero surprise add-ons."
                },
                {
                    "title": "Respect of Deadlines & Job Site Cleanliness",
                    "desc": "Protection of floors, furniture, and thorough clean-up post installation."
                },
                {
                    "title": "Commissioning Protocol & Demonstration",
                    "desc": "Full customer training on thermostats, zoning controls, and handover of technical documentation."
                }
            ],
            "consultBtn": "Consulta gli Esperti Verificati nella mia zona"
        },
        "faq": {
            "tag": "Clear Answers",
            "title": "Domande Frequenti sull'Esperto Verificato",
            "items": [
                {
                    "q": "What risks do homeowners face if an installer lacks proper HVAC liability insurance?",
                    "a": "A standard plumber or painter's insurance policy excludes ducted air conditioning and refrigerant work. If water damage occurs from a condensate leak or an electrical fire starts, the insurer will deny coverage, leaving the homeowner solely liable for thousands of euros in damages."
                },
                {
                    "q": "Does DuctedExpert charge homeowners for quotes or contractor introductions?",
                    "a": "No, DuctedExpert is 100% free for homeowners. We do not take sales commissions on contractor contracts, which guarantees transparent, competitive market rates."
                },
                {
                    "q": "How can I verify that a contractor's Verified Expert badge is genuine?",
                    "a": "Every accredited member has an active profile page on DuctedExpert.com with their verified company details, license numbers, and certified badge. If a contractor displays the badge without an active profile, contact us immediately."
                },
                {
                    "q": "What is the difference between split AC and ducted air conditioning?",
                    "a": "Split systems have wall-mounted indoor units visible in each room. Ducted systems hide the indoor units completely inside ceilings or attics, distributing air through discrete architectural grilles with superior acoustics and aesthetics."
                },
                {
                    "q": "What documents must an installer submit to earn the label?",
                    "a": "Contractors must provide active trade registration documents, current-year HVAC liability insurance with proof of payment, official F-Gas certification, and signed adherence to our quality code of ethics."
                },
                {
                    "q": "What should I do if I am an installer and wish to obtain the label?",
                    "a": "Click on 'Register as a Pro' or 'Apply for Verified Expert Accreditation'. Our compliance team reviews your uploaded documentation within 48 business hours."
                }
            ]
        }
    },
    "ar": {
        "metaTitle": "شارة الخبير المعتمد DuctedExpert.com: المعيار العالمي لجودة التكييف المركزي",
        "metaDesc": "اكتشف شارة خبير معتمد DuctedExpert: الحماية الرسمية لملاك العقارات من مقاولي التكييف غير المرخصين وتأمين المسؤولية المهنية المعتمد.",
        "hero": {
            "topBadge": "ضمان رسمي للثقة • حماية لأصحاب المشاريع • تميز للشركات المعتمدة",
            "title1": "تركيب التكييف المركزي المخفي لا ينبغي أبداً أن يكون",
            "title2": "مقامرة بأموالك ومبنى منزلك",
            "desc": "منظومة التكييف المخفي (الدكت) تُبنى داخل الأسقف المستعارة وترافق مبنى منزلك للسنوات الـ 15 أو 20 القادمة. إنها ليست مجرد جهاز منزلي، بل استثمار ضخم يتراوح بين 35,000 و 150,000 ريال/درهم. تقوم شارة DuctedExpert® الخبير المعتمد بتدقيق السجلات التجارية، تراخيص التعامل مع وسائط التبريد، وبوليصة التأمين المهني لضمان أعلى معايير الجودة.",
            "reassurance": [
                {
                    "title": "تأمين مسؤولية مهنية CVC مدقق",
                    "desc": "وثيقة تأمين رسمية معتمدة تغطي شبكات مجاري الهواء وتمديدات التبريد وأضرار المياه."
                },
                {
                    "title": "كيان قانوني مرخص ومستقر",
                    "desc": "سجل تجاري نشط، عضوية الغرفة التجارية، فحص الملاءة المالية، وصفر شركات وهمية."
                },
                {
                    "title": "ربط مجاني 100% بين العميل والمقاول",
                    "desc": "تواصل مباشر مع الخبير • صفر عمولة وصفر رسوم وسيطة على مشروعك."
                }
            ],
            "findProBtn": "البحث عن مقاول معتمد بالقرب مني",
            "joinProBtn": "هل أنت مقاول تكييف؟ انضم للشبكة"
        },
        "officialBadge": {
            "tag": "علامة الثقة والاعتماد البصري",
            "title": "الشارة الرسمية « خبير معتمد »",
            "desc": "ابحث عن هذا الختم الرسمي على صفحات المحترفين وسيارات العمل الميدانية. وميض النبض الأخضر المنتظم يؤكد أن الشركة نشطة وخضعت وثائقها وتراخيصها وتأميناتها لتدقيق مستندي صارم.",
            "legalNotice": "هذه الشارة علامة تجارية مسجلة ومحمية قانونياً تابعة لـ DuctedExpert.com. أي استخدام أو تزوير غير مرخص يعرض المنشأة للمساءلة القانونية الفورية."
        },
        "traps": {
            "tag": "واقع السوق • ما لا يخبرك به المقاولون التجاريون",
            "title": "الأفخاخ الأربعة الخفية في تركيب التكييف",
            "titleHighlight": "(وكيف تحميك شارتنا المعتمدة منها)",
            "desc": "التكييف المركزي المخفي هو هندسة تبريد دقيقة وحسابات هواء وتوزيع هادئ. ومع ذلك، جذب السوق سماسرة غير مؤهلين وعمالة غير نظامية. إليك الحقائق الأربعة الصادمة وحلول شبكتنا المعتمدة:",
            "items": [
                {
                    "num": "01",
                    "title": "1. متلازمة اختفاء المقاول بمجرد استلام الدفعة الأخيرة",
                    "badTitle": "الكابوس الواقعي:",
                    "badText": "طالما كان الأمر يتعلق بتوقيع العقد واستلام الدفعة المقدمة، يرد مندوب المبيعات خلال دقيقتين. ولكن عند بدء الصيف وظهور كود عطل في الماكينة، يرن الهاتف دون مجيب وتنتهي محاولاتك بحظر رقمك، لتجد نفسك وعائلتك في حرارة 48 درجة بدون أي صيانة.",
                    "goodTitle": "حماية DuctedExpert:",
                    "goodText": "نلزم أعضاءنا بشفافية العقود، عقود صيانة دورية موثقة، والتزام معتمد بالاستجابة لخدمات ما بعد البيع."
                },
                {
                    "num": "02",
                    "title": "2. الشركات المؤقتة والإغلاق المفاجئ للتنصل من الضمان",
                    "badTitle": "الكابوس الواقعي:",
                    "badText": "مؤسسات تفتح لفترة وجيزة، تسند التنفيذ لعمالة سائبة بالباطن، وحين تتراكم شكاوى العيوب وتسربات المياه، يتم إغلاق السجل التجاري وفتح مؤسسة جديدة باسم آخر بعد 3 أشهر دون أي مساءلة أو تعويض للمالك.",
                    "goodTitle": "حماية DuctedExpert:",
                    "goodText": "فحص دقيق لتاريخ المنشأة، عدم وجود قضايا مالية أو تعثر، وسجل حافل من المشاريع الميدانية القائمة."
                },
                {
                    "num": "03",
                    "title": "3. وهم التأمين (تقديم وثائق تأمين غير مطابقة للتكييف)",
                    "badTitle": "الكابوس الواقعي:",
                    "badText": "يقدم المقاول ورقة تأمين للمالك، ولكنها في الحقيقة وثيقة لأعمال الدهانات أو السباكة البسيطة لتقليل قيمة الاشتراك. وحين يحدث تسريب من خط تصريف المياه في الجبس ويسقط السقف، ترفض شركة التأمين التعويض كلياً.",
                    "goodTitle": "حماية DuctedExpert:",
                    "goodText": "مراجعة بنود بوليصة التأمين للتأكد من شمولها الصريح لأعمال التكييف المركزي، مجاري الهواء، والتمديدات الميكانيكية."
                },
                {
                    "num": "04",
                    "title": "4. عمالة غير مؤهلة للتعامل مع غاز التبريد R32 وتفريغ الهواء",
                    "badTitle": "الكابوس الواقعي:",
                    "badText": "إسناد شحن غاز التبريد لعمالة لا تملك أجهزة سحب الهواء وتفريغ الرطوبة (Vacuum). الرطوبة المتبقية تؤدي لتكوّن أحماض تتلف الضاغط (الكومبروسر) خلال أشهر، وترفض الشركة المصنعة (Daikin, Mitsubishi, Gree) الضمان كلياً.",
                    "goodTitle": "حماية DuctedExpert:",
                    "goodText": "شهادات فنية وتراخيص معتمدة للتعامل مع وسائط التبريد واختبارات ضغط النيتروجين المعتمدة."
                }
            ],
            "vision": {
                "tag": "راحة البال الحقيقية",
                "title": "هذا بالضبط ما يستحقه مبنى منزلك:",
                "titleHighlight": "راحة وهدوء غير مرئي يدوم لسنوات طويلة.",
                "desc": "باختيارك خبيراً معتمداً من DuctedExpert®، يتحول مشروع تكييف فيلتك من قلق مستمر إلى تجربة هندسية مريحة وراقية، مع توزيع هواء مثالي وهدوء فائق وضمان يحمي استثمارك."
            }
        },
        "verification": {
            "tag": "تدقيق الجودة من DuctedExpert.com",
            "title": "المراحل الأربع للتدقيق المستندي والفني",
            "desc": "نحن لا نمنح الشارات مجاملة. يخضع كل مقاول شريك لفحص دقيق لكافة أوراقه وتراخيصه الرسمية:",
            "steps": [
                {
                    "num": "01",
                    "stepTag": "المرحلة 1 • تأمين الأعمال والمشروع",
                    "title": "تأمين مسؤولية مهنية CVC ساري ومفحوص",
                    "badge": "فحص الوثيقة الأصلية",
                    "desc": "وثيقة تأمين للعام الحالي تؤكد تغطية أعمال أنظمة التكييف والتهوية والتمديدات الميكانيكية وسداد الأقساط.",
                    "roleTitle": "دور شركة التأمين:",
                    "roleDesc": "التأمين يحمي المالك والمقاول من الحوادث المفاجئة وأضرار تسربات المياه أو التماسات الكهرباء."
                },
                {
                    "num": "02",
                    "stepTag": "المرحلة 2 • الكيان القانوني والملاءة",
                    "title": "سجل تجاري نشط، خبرة ميدانية وملاءة مالية",
                    "badge": "مطابقة السجلات الرسمية مباشرة",
                    "desc": "التحقق من رقم السجل التجاري، التخصص في أعمال التكييف (HVAC)، المقر الفعلي، والحساب البنكي التجاري الرسمي.",
                    "roleTitle": "فحص النزاهة:",
                    "roleDesc": "استبعاد الشركات الوهمية وسماسرة بيع المشاريع بالباطن."
                },
                {
                    "num": "03",
                    "stepTag": "المرحلة 3 • الكفاءة الفنية والتراخيص",
                    "title": "تراخيص التعامل مع وسائط التبريد واختبارات التشغيل",
                    "badge": "شهادات مهنية معتمدة",
                    "desc": "شهادات التعامل مع غازات التبريد ومعدات تفريغ الهواء واختبارات تسريب النيتروجين المعتمدة.",
                    "roleTitle": "حماية ضمان المصنع:",
                    "roleDesc": "الشركات العالمية تشترط تشغيل المنظومة بواسطة فنيين مرخصين للحفاظ على ضمان الأجهزة."
                },
                {
                    "num": "04",
                    "stepTag": "المرحلة 4 • سلاسل التوريد والماركات",
                    "title": "توريد مباشر من كبرى الوكالات والتحكم الذكي",
                    "badge": "سلاسل توريد موثوقة وأصلية",
                    "desc": "علاقات مباشرة مع وكلاء الماركات العالمية (Daikin, Mitsubishi, Carrier, Gree) وأنظمة الزونينج (Airzone).",
                    "roleTitle": "ضمان جودة المواد:",
                    "roleDesc": "تصنيع دكت مطابق للمواصفات، عزل حراري وصوتي معتمد، وجريلات ألومنيوم ديكورية عالية الجودة."
                }
            ]
        },
        "artisanTrust": {
            "tag": "علاقات مهنية قائمة على الثقة",
            "title": "استعد راحة البال في التعامل مع",
            "titleHighlight": "مقاول هندسي محترف وجدير بالثقة",
            "paragraphs": [
                "عندما توكل مشروعك لخبير معتمد من DuctedExpert®، فأنت لا تتحدث مع مركز اتصالات خارجي يسعى لبيع رقم هاتفك لعدة شركات متنافسة.",
                "أنت تتواصل مباشرة مع صاحب شركة محلية مرموقة يعتز بجودة عمله، ويزور موقعك باحترام ويقدم استشارة هندسية حقيقية.",
                "لا ضغوط بيعية مصطنعة ولا خصومات وهمية: فقط مشورة صادقة، أسعار واضحة، وتنفيذ متقن بأعلى درجات الاحترافية."
            ]
        },
        "whyChoose": {
            "title": "لماذا تختار مقاولاً حاصلاً على شارة",
            "titleHighlight": "الخبير المعتمد من DuctedExpert؟",
            "benefits": [
                {
                    "title": "صفر عمولات أو تكاليف وسيطة",
                    "desc": "المنصة مجانية 100% لأصحاب المشاريع. تتفاوض وتتعاقد مباشرة مع المقاول بأسعار عادلة وشفافة."
                },
                {
                    "title": "عزل صوتي فائق الهدوء",
                    "desc": "تصميم مجاري الهواء واستخدام كاتمات الصوت يضمن تشغيلاً فائق الهدوء في غرف النوم والصالونات."
                },
                {
                    "title": "حماية ضمان الوكلاء والشركات المصنعة",
                    "desc": "التشغيل الهندسي المعتمد يضمن سريان كامل فترة ضمان الماكينات والضواغط لمدة 5 إلى 10 سنوات."
                },
                {
                    "title": "صيانة دورية وخدمة ما بعد البيع",
                    "desc": "التواجد الميداني للشركة يضمن عقود صيانة واستجابة سريعة دون مماطلة."
                }
            ]
        },
        "proSection": {
            "tag": "لشركات ومقاولي التكييف المتميزين",
            "title": "هل شركتكم من الشركات الهندسية الجادة؟",
            "titleHighlight": "لا تدع العمالة غير النظامية تشوه سمعة مهنتك وتسرق مشاريعك.",
            "paragraphs": [
                "أنتم تستثمرون في تأميناتكم، تدربون فنييكم، تصنعون الدكت بعناية فائقة، توازنون تدفق الهواء، وتلتزمون بخدمة العميل حتى بعد انتهاء المشروع بسنوات.",
                "ورغم ذلك، تجدون أنفسكم مضطرين لتبرير أسعاركم العادلة أمام عملاء تعرضوا لتجارب سيئة مع مقاولين غير مؤهلين خفضوا الأسعار على حساب الجودة والسلامة.",
                "شارة الخبير المعتمد من DuctedExpert® تمنحكم التميز الفوري، تبرز تراخيصكم، وتبني ثقة العملاء، مع استقبال مشاريع مباشرة بنسبة 0% عمولة."
            ],
            "joinBtn": "التقدم بطلب الحصول على شارة خبير معتمد"
        },
        "requirements": {
            "tag": "شروط ومعايير الانضمام",
            "title": "الشروط الإلزامية للحصول على شارة",
            "titleHighlight": "DuctedExpert المعتمدة",
            "desc": "نحن لا نتساهل أبداً فيما يتعلق بسلامة المباني وجودة الهواء. إليك المتطلبات الإدارية والفنية الواجب تقديمها:",
            "docsTitle": "المستندات الإدارية الإلزامية",
            "docs": [
                {
                    "title": "السجل التجاري أو الترخيص المهني",
                    "desc": "إثبات سريان نشاط المنشأة والمقر الرسمي والمسؤول القانوني."
                },
                {
                    "title": "وثيقة التأمين المهني CVC",
                    "desc": "تغطية تأمينية سارية لأعمال التكييف والتمديدات الميكانيكية."
                },
                {
                    "title": "تراخيص وشهادات التعامل مع وسائط التبريد",
                    "desc": "شهادات فنية معتمدة للفنيين المنفذين للأعمال الميدانية."
                },
                {
                    "title": "الهوية الرسمية والآيبان البنكي للشركة",
                    "desc": "تأكيد صحة البيانات البنكية والتعامل المالي المباشر."
                }
            ],
            "ethicsTitle": "ميثاق الشرف والالتزام بالجودة",
            "ethics": [
                {
                    "title": "عروض أسعار مفصلة وشفافة",
                    "desc": "تحديد الماركات، القدرات، سماكات العزل والصاج، وبدون أي تكاليف خفية."
                },
                {
                    "title": "الالتزام بالمواعيد ونظافة الموقع",
                    "desc": "حماية الأرضيات والجبس وتسليم الموقع نظيفاً وجاهزاً بعد انتهاء العمل."
                },
                {
                    "title": "بروتوكول التشغيل وتدريب العميل",
                    "desc": "فحص ضغط الغاز وتدريب العميل على استخدام الثرموستات وتسليم المخططات."
                }
            ],
            "consultBtn": "استعراض الخبراء المعتمدين في منطقتي"
        },
        "faq": {
            "tag": "إجابات واضحة وشفافة",
            "title": "الأسئلة الشائعة حول شارة الخبير المعتمد",
            "items": [
                {
                    "q": "ما هي المخاطر التي يتعرض لها المالك إذا لم يكن لدى المقاول تأمين مهني خاص بالتكييف؟",
                    "a": "التأمين التجاري العام يستثني أعطال التكييف وتسربات وسائط التبريد والمياه. وفي حال حدوث التماس أو تسرب مياه أدى لانهيار الأسقف، سترفض شركة التأمين التعويض، مما يضع المالك أمام خسائر جسيمة يتحملها بمفرده."
                },
                {
                    "q": "هل تتقاضى منصة DuctedExpert أي رسوم أو عمولات من ملاك المشاريع؟",
                    "a": "لا، المنصة مجانية 100% لأصحاب المشاريع والمنازل. ولا نأخذ أي عمولات على العقود المبرمة، مما يضمن أسعاراً عادلة وتنافسية."
                },
                {
                    "q": "كيف يمكنني التأكد من صحة شارة الخبير المعتمد للمقاول؟",
                    "a": "كل عضو معتمد يمتلك صفحة رسمية نشطة على موقع DuctedExpert.com توضح بياناته وتراخيصه وسابقة أعماله وشارة الاعتماد. وفي حال استخدام الشارة دون صفحة نشطة، يرجى إبلاغنا فوراً."
                },
                {
                    "q": "ما الفرق بين التكييف السبليت الجداري والتكييف المركزي المخفي؟",
                    "a": "المكيف السبليت تكون وحداته الداخلية معلقة على الجدران داخل كل غرفة. أما التكييف المخفي فيتم إخفاء وحداته بالكامل داخل الأسقف المستعارة وتوزيع الهواء عبر فتحات ديكورية أنيقة بدون أي ضوضاء أو تشويه بصري."
                },
                {
                    "q": "ما هي الوثائق المطلوبة من المقاول للحصول على الشارة؟",
                    "a": "سجل تجاري ساري، تأمين مسؤولية مهنية خاص بالتكييف، تراخيص التعامل مع وسائط التبريد، وتوقيع ميثاق الجودة والالتزام بالشفافية."
                },
                {
                    "q": "كيف يمكنني كمقاول الانضمام لشبكة الخبراء والحصول على الشارة؟",
                    "a": "اضغط على 'مساحة المحترفين' أو 'تسجيل شركة جديدة'. ويقوم فريق التدقيق بمراجعة وثائقكم وتفعيل الشارة خلال 48 ساعة عمل."
                }
            ]
        }
    }
};
