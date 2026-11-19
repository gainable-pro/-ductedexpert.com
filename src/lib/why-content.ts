// src/lib/why-content.ts
import { Locale } from "./i18n";

export interface WhyPageData {
    metaTitle: string;
    metaDesc: string;
    hero: {
        title: string;
        sub1: string;
        sub2: string;
        joinBtn: string;
        findBtn: string;
    };
    origin: {
        title: string;
        p1: string;
        p2: string;
        badRealityTitle: string;
        badRealityList: string[];
        goodRealityTitle: string;
        goodRealityLead: string;
        goodRealityList: string[];
        gapBadge: string;
        solutionTitle: string;
        solutionLead: string;
        solutionPoints: string[];
        whyDiffTitle: string;
        whyDiffLead: string;
        whyDiffPoints: string[];
        quote: string;
    };
    clarity: {
        title: string;
        notTitle: string;
        notItems: { title: string; desc: string }[];
        isTitle: string;
        isItems: { title: string; desc: string }[];
    };
    audience: {
        proTitle: string;
        proDesc: string;
        clientTitle: string;
        clientDesc: string;
    };
    selection: {
        title: string;
        subtitle: string;
        criteria: { title: string; desc: string }[];
    };
    ambition: {
        title: string;
        text: string;
        joinMovementTitle: string;
        proBtn: string;
        clientBtn: string;
    };
}

export const WHY_CONTENT: Record<Locale, WhyPageData> = {
    "en": {
        "metaTitle": "Why DuctedExpert.com Exists | Direct Connection & Trust in HVAC",
        "metaDesc": "Discover the vision of DuctedExpert.com: a trusted, commission-free platform connecting property owners directly with verified HVAC contractors and thermal engineering offices.",
        "hero": {
            "title": "Why DuctedExpert.com Exists",
            "sub1": "The problem is not a lack of professionals.",
            "sub2": "The problem is the lack of clarity, transparency, and direct trust.",
            "joinBtn": "Join the Network of Trust →",
            "findBtn": "Find a Verified Expert"
        },
        "origin": {
            "title": "DuctedExpert.com Was Born from Field Reality",
            "p1": "DuctedExpert.com was not conceived by generic lead-generation brokers or speculative digital agencies.",
            "p2": "It was born from practical observations shared every day by ducted air conditioning contractors, thermal engineering offices, and frustrated homeowners.",
            "badRealityTitle": "On the ground, we witnessed:",
            "badRealityList": [
                "Homeowners completely lost when comparing confusing, disparate quotes",
                "Ducted installations executed without respecting engineering standards or acoustic design",
                "Contractor certifications and insurance coverage nearly impossible to verify",
                "Hidden subcontracting to low-cost, unlicensed crews",
                "Serious, master craftsmen lumped into the same category as non-compliant operators"
            ],
            "goodRealityTitle": "At the same time, we saw:",
            "goodRealityLead": "Dedicated local businesses and qualified engineers:",
            "goodRealityList": [
                "Properly and specifically insured for HVAC and thermal engineering",
                "Scrupulously respecting technical trade practices and airflow sizing",
                "Continuously investing in technician training and customer satisfaction",
                "...Yet penalized by legacy broker platforms that prioritize sales volume over craftsmanship."
            ],
            "gapBadge": "This gap was no longer acceptable.",
            "solutionTitle": "A Simple Answer to a Complex Problem",
            "solutionLead": "Rather than creating yet another generic quote mill, we made a fundamentally different choice:",
            "solutionPoints": [
                "Strictly vet and select HVAC professionals on verified documents",
                "Elevate technical best practices and airflow acoustic design",
                "Educate clients on technical challenges and fair market pricing",
                "Restore a healthy, direct relationship with 0% intermediary commission"
            ],
            "whyDiffTitle": "Why is this approach truly different?",
            "whyDiffLead": "Because on DuctedExpert.com:",
            "whyDiffPoints": [
                "Visibility is earned through technical merit, not advertising bids",
                "Every professional is personally identified and vetted",
                "Quality and long-term durability always precede volume",
                "Direct customer-to-expert relationship without broker markups"
            ],
            "quote": "DuctedExpert.com was built as a trusted third party serving homeowners and genuine experts alike. It is not the highest bidder who gets promoted, but the most qualified and serious."
        },
        "clarity": {
            "title": "Let's Bring Clarity Back to the HVAC Industry",
            "notTitle": "What DuctedExpert.com IS NOT",
            "notItems": [
                {
                    "title": "A low-cost price comparison engine",
                    "desc": "We do not seek the cheapest installer, but the most technically competent."
                },
                {
                    "title": "A lead-brokering auction house",
                    "desc": "Your contact information is never resold to multiple competing bidders."
                },
                {
                    "title": "An automated web scraper directory",
                    "desc": "No company is published without thorough human and document review."
                }
            ],
            "isTitle": "What DuctedExpert.com IS",
            "isItems": [
                {
                    "title": "A curated directory of vetted experts",
                    "desc": "Installers and engineering offices specializing in ducted HVAC and heat pumps."
                },
                {
                    "title": "Direct contact with zero commission",
                    "desc": "You deal directly with your chosen specialist on uninflated market terms."
                },
                {
                    "title": "An impartial standard of technical excellence",
                    "desc": "Elevating certified contractors who take pride in their craft."
                }
            ]
        },
        "audience": {
            "proTitle": "For HVAC Professionals",
            "proDesc": "A premium platform to showcase your technical excellence, receive direct inquiries without commissions, and win the trust of discerning homeowners.",
            "clientTitle": "For Property Owners & Homeowners",
            "clientDesc": "An objective, reassuring space to find vetted HVAC contractors, understand technical choices, and protect your home investment for 15+ years."
        },
        "selection": {
            "title": "The DuctedExpert.com Selection Standard",
            "subtitle": "A trusted third party guaranteeing the visibility of genuine HVAC masters.",
            "criteria": [
                {
                    "title": "Documentary Vetting",
                    "desc": "Active trade registration, confirmed solvency, and verified professional HVAC insurance."
                },
                {
                    "title": "Technical Competence",
                    "desc": "Refrigerant handling licenses (F-Gas), continuous training, and authorized distributor supply chains."
                },
                {
                    "title": "Commitment to Best Practices",
                    "desc": "Transparent quotes, acoustic consideration, and full system commissioning."
                }
            ]
        },
        "ambition": {
            "title": "Our Ambition",
            "text": "To establish the definitive international benchmark for ducted climate control, where technical excellence and customer peace of mind meet naturally.",
            "joinMovementTitle": "Join the Movement",
            "proBtn": "Register as an HVAC Professional",
            "clientBtn": "Find a Verified Expert in My Area"
        }
    },
    "de": {
        "metaTitle": "Warum DuctedExpert.com existiert | Direkter Kontakt & Vertrauen in der Klimatechnik",
        "metaDesc": "Erfahren Sie mehr über die Vision von DuctedExpert: Eine provisionsfreie Plattform, die Bauherren direkt mit geprüften Klimatechnikern verbindet.",
        "hero": {
            "title": "Warum DuctedExpert.com existiert",
            "sub1": "Das Problem ist nicht der Mangel an Fachbetrieben.",
            "sub2": "Das Problem ist der Mangel an Transparenz, Orientierung und direktem Vertrauen.",
            "joinBtn": "Join the Network of Trust →",
            "findBtn": "Find a Verified Expert"
        },
        "origin": {
            "title": "DuctedExpert.com Was Born from Field Reality",
            "p1": "DuctedExpert.com was not conceived by generic lead-generation brokers or speculative digital agencies.",
            "p2": "It was born from practical observations shared every day by ducted air conditioning contractors, thermal engineering offices, and frustrated homeowners.",
            "badRealityTitle": "On the ground, we witnessed:",
            "badRealityList": [
                "Homeowners completely lost when comparing confusing, disparate quotes",
                "Ducted installations executed without respecting engineering standards or acoustic design",
                "Contractor certifications and insurance coverage nearly impossible to verify",
                "Hidden subcontracting to low-cost, unlicensed crews",
                "Serious, master craftsmen lumped into the same category as non-compliant operators"
            ],
            "goodRealityTitle": "At the same time, we saw:",
            "goodRealityLead": "Dedicated local businesses and qualified engineers:",
            "goodRealityList": [
                "Properly and specifically insured for HVAC and thermal engineering",
                "Scrupulously respecting technical trade practices and airflow sizing",
                "Continuously investing in technician training and customer satisfaction",
                "...Yet penalized by legacy broker platforms that prioritize sales volume over craftsmanship."
            ],
            "gapBadge": "This gap was no longer acceptable.",
            "solutionTitle": "A Simple Answer to a Complex Problem",
            "solutionLead": "Rather than creating yet another generic quote mill, we made a fundamentally different choice:",
            "solutionPoints": [
                "Strictly vet and select HVAC professionals on verified documents",
                "Elevate technical best practices and airflow acoustic design",
                "Educate clients on technical challenges and fair market pricing",
                "Restore a healthy, direct relationship with 0% intermediary commission"
            ],
            "whyDiffTitle": "Why is this approach truly different?",
            "whyDiffLead": "Because on DuctedExpert.com:",
            "whyDiffPoints": [
                "Visibility is earned through technical merit, not advertising bids",
                "Every professional is personally identified and vetted",
                "Quality and long-term durability always precede volume",
                "Direct customer-to-expert relationship without broker markups"
            ],
            "quote": "DuctedExpert.com was built as a trusted third party serving homeowners and genuine experts alike. It is not the highest bidder who gets promoted, but the most qualified and serious."
        },
        "clarity": {
            "title": "Let's Bring Clarity Back to the HVAC Industry",
            "notTitle": "What DuctedExpert.com IS NOT",
            "notItems": [
                {
                    "title": "A low-cost price comparison engine",
                    "desc": "We do not seek the cheapest installer, but the most technically competent."
                },
                {
                    "title": "A lead-brokering auction house",
                    "desc": "Your contact information is never resold to multiple competing bidders."
                },
                {
                    "title": "An automated web scraper directory",
                    "desc": "No company is published without thorough human and document review."
                }
            ],
            "isTitle": "What DuctedExpert.com IS",
            "isItems": [
                {
                    "title": "A curated directory of vetted experts",
                    "desc": "Installers and engineering offices specializing in ducted HVAC and heat pumps."
                },
                {
                    "title": "Direct contact with zero commission",
                    "desc": "You deal directly with your chosen specialist on uninflated market terms."
                },
                {
                    "title": "An impartial standard of technical excellence",
                    "desc": "Elevating certified contractors who take pride in their craft."
                }
            ]
        },
        "audience": {
            "proTitle": "For HVAC Professionals",
            "proDesc": "A premium platform to showcase your technical excellence, receive direct inquiries without commissions, and win the trust of discerning homeowners.",
            "clientTitle": "For Property Owners & Homeowners",
            "clientDesc": "An objective, reassuring space to find vetted HVAC contractors, understand technical choices, and protect your home investment for 15+ years."
        },
        "selection": {
            "title": "The DuctedExpert.com Selection Standard",
            "subtitle": "A trusted third party guaranteeing the visibility of genuine HVAC masters.",
            "criteria": [
                {
                    "title": "Documentary Vetting",
                    "desc": "Active trade registration, confirmed solvency, and verified professional HVAC insurance."
                },
                {
                    "title": "Technical Competence",
                    "desc": "Refrigerant handling licenses (F-Gas), continuous training, and authorized distributor supply chains."
                },
                {
                    "title": "Commitment to Best Practices",
                    "desc": "Transparent quotes, acoustic consideration, and full system commissioning."
                }
            ]
        },
        "ambition": {
            "title": "Our Ambition",
            "text": "To establish the definitive international benchmark for ducted climate control, where technical excellence and customer peace of mind meet naturally.",
            "joinMovementTitle": "Join the Movement",
            "proBtn": "Register as an HVAC Professional",
            "clientBtn": "Find a Verified Expert in My Area"
        }
    },
    "fi": {
        "metaTitle": "Miksi DuctedExpert.com on olemassa | Luottamus ja suora yhteys LVI-alalla",
        "metaDesc": "Tutustu DuctedExpertin visioon: Välityspalkkioton alusta, joka yhdistää asunnonomistajat suoraan sertifioituihin kanavailmastoinnin asiantuntijoihin.",
        "hero": {
            "title": "Miksi DuctedExpert.com on olemassa",
            "sub1": "Ongelma ei ole ammattilaisten puute.",
            "sub2": "Ongelma on läpinäkyvyyden, laatuvalvonnan ja suoran luottamuksen puute.",
            "joinBtn": "Join the Network of Trust →",
            "findBtn": "Find a Verified Expert"
        },
        "origin": {
            "title": "DuctedExpert.com Was Born from Field Reality",
            "p1": "DuctedExpert.com was not conceived by generic lead-generation brokers or speculative digital agencies.",
            "p2": "It was born from practical observations shared every day by ducted air conditioning contractors, thermal engineering offices, and frustrated homeowners.",
            "badRealityTitle": "On the ground, we witnessed:",
            "badRealityList": [
                "Homeowners completely lost when comparing confusing, disparate quotes",
                "Ducted installations executed without respecting engineering standards or acoustic design",
                "Contractor certifications and insurance coverage nearly impossible to verify",
                "Hidden subcontracting to low-cost, unlicensed crews",
                "Serious, master craftsmen lumped into the same category as non-compliant operators"
            ],
            "goodRealityTitle": "At the same time, we saw:",
            "goodRealityLead": "Dedicated local businesses and qualified engineers:",
            "goodRealityList": [
                "Properly and specifically insured for HVAC and thermal engineering",
                "Scrupulously respecting technical trade practices and airflow sizing",
                "Continuously investing in technician training and customer satisfaction",
                "...Yet penalized by legacy broker platforms that prioritize sales volume over craftsmanship."
            ],
            "gapBadge": "This gap was no longer acceptable.",
            "solutionTitle": "A Simple Answer to a Complex Problem",
            "solutionLead": "Rather than creating yet another generic quote mill, we made a fundamentally different choice:",
            "solutionPoints": [
                "Strictly vet and select HVAC professionals on verified documents",
                "Elevate technical best practices and airflow acoustic design",
                "Educate clients on technical challenges and fair market pricing",
                "Restore a healthy, direct relationship with 0% intermediary commission"
            ],
            "whyDiffTitle": "Why is this approach truly different?",
            "whyDiffLead": "Because on DuctedExpert.com:",
            "whyDiffPoints": [
                "Visibility is earned through technical merit, not advertising bids",
                "Every professional is personally identified and vetted",
                "Quality and long-term durability always precede volume",
                "Direct customer-to-expert relationship without broker markups"
            ],
            "quote": "DuctedExpert.com was built as a trusted third party serving homeowners and genuine experts alike. It is not the highest bidder who gets promoted, but the most qualified and serious."
        },
        "clarity": {
            "title": "Let's Bring Clarity Back to the HVAC Industry",
            "notTitle": "What DuctedExpert.com IS NOT",
            "notItems": [
                {
                    "title": "A low-cost price comparison engine",
                    "desc": "We do not seek the cheapest installer, but the most technically competent."
                },
                {
                    "title": "A lead-brokering auction house",
                    "desc": "Your contact information is never resold to multiple competing bidders."
                },
                {
                    "title": "An automated web scraper directory",
                    "desc": "No company is published without thorough human and document review."
                }
            ],
            "isTitle": "What DuctedExpert.com IS",
            "isItems": [
                {
                    "title": "A curated directory of vetted experts",
                    "desc": "Installers and engineering offices specializing in ducted HVAC and heat pumps."
                },
                {
                    "title": "Direct contact with zero commission",
                    "desc": "You deal directly with your chosen specialist on uninflated market terms."
                },
                {
                    "title": "An impartial standard of technical excellence",
                    "desc": "Elevating certified contractors who take pride in their craft."
                }
            ]
        },
        "audience": {
            "proTitle": "For HVAC Professionals",
            "proDesc": "A premium platform to showcase your technical excellence, receive direct inquiries without commissions, and win the trust of discerning homeowners.",
            "clientTitle": "For Property Owners & Homeowners",
            "clientDesc": "An objective, reassuring space to find vetted HVAC contractors, understand technical choices, and protect your home investment for 15+ years."
        },
        "selection": {
            "title": "The DuctedExpert.com Selection Standard",
            "subtitle": "A trusted third party guaranteeing the visibility of genuine HVAC masters.",
            "criteria": [
                {
                    "title": "Documentary Vetting",
                    "desc": "Active trade registration, confirmed solvency, and verified professional HVAC insurance."
                },
                {
                    "title": "Technical Competence",
                    "desc": "Refrigerant handling licenses (F-Gas), continuous training, and authorized distributor supply chains."
                },
                {
                    "title": "Commitment to Best Practices",
                    "desc": "Transparent quotes, acoustic consideration, and full system commissioning."
                }
            ]
        },
        "ambition": {
            "title": "Our Ambition",
            "text": "To establish the definitive international benchmark for ducted climate control, where technical excellence and customer peace of mind meet naturally.",
            "joinMovementTitle": "Join the Movement",
            "proBtn": "Register as an HVAC Professional",
            "clientBtn": "Find a Verified Expert in My Area"
        }
    },
    "es": {
        "metaTitle": "Por qué existe DuctedExpert.com | Confianza y Contacto Directo en Climatización",
        "metaDesc": "Descubra la visión de DuctedExpert: Una plataforma transparente y sin comisiones que conecta a propietarios con instaladores de conductos verificados.",
        "hero": {
            "title": "Por qué existe DuctedExpert.com",
            "sub1": "El problema no es la falta de instaladores.",
            "sub2": "El problema es la falta de claridad, transparencia y conexión directa sin intermediarios.",
            "joinBtn": "Join the Network of Trust →",
            "findBtn": "Find a Verified Expert"
        },
        "origin": {
            "title": "DuctedExpert.com Was Born from Field Reality",
            "p1": "DuctedExpert.com was not conceived by generic lead-generation brokers or speculative digital agencies.",
            "p2": "It was born from practical observations shared every day by ducted air conditioning contractors, thermal engineering offices, and frustrated homeowners.",
            "badRealityTitle": "On the ground, we witnessed:",
            "badRealityList": [
                "Homeowners completely lost when comparing confusing, disparate quotes",
                "Ducted installations executed without respecting engineering standards or acoustic design",
                "Contractor certifications and insurance coverage nearly impossible to verify",
                "Hidden subcontracting to low-cost, unlicensed crews",
                "Serious, master craftsmen lumped into the same category as non-compliant operators"
            ],
            "goodRealityTitle": "At the same time, we saw:",
            "goodRealityLead": "Dedicated local businesses and qualified engineers:",
            "goodRealityList": [
                "Properly and specifically insured for HVAC and thermal engineering",
                "Scrupulously respecting technical trade practices and airflow sizing",
                "Continuously investing in technician training and customer satisfaction",
                "...Yet penalized by legacy broker platforms that prioritize sales volume over craftsmanship."
            ],
            "gapBadge": "This gap was no longer acceptable.",
            "solutionTitle": "A Simple Answer to a Complex Problem",
            "solutionLead": "Rather than creating yet another generic quote mill, we made a fundamentally different choice:",
            "solutionPoints": [
                "Strictly vet and select HVAC professionals on verified documents",
                "Elevate technical best practices and airflow acoustic design",
                "Educate clients on technical challenges and fair market pricing",
                "Restore a healthy, direct relationship with 0% intermediary commission"
            ],
            "whyDiffTitle": "Why is this approach truly different?",
            "whyDiffLead": "Because on DuctedExpert.com:",
            "whyDiffPoints": [
                "Visibility is earned through technical merit, not advertising bids",
                "Every professional is personally identified and vetted",
                "Quality and long-term durability always precede volume",
                "Direct customer-to-expert relationship without broker markups"
            ],
            "quote": "DuctedExpert.com was built as a trusted third party serving homeowners and genuine experts alike. It is not the highest bidder who gets promoted, but the most qualified and serious."
        },
        "clarity": {
            "title": "Let's Bring Clarity Back to the HVAC Industry",
            "notTitle": "What DuctedExpert.com IS NOT",
            "notItems": [
                {
                    "title": "A low-cost price comparison engine",
                    "desc": "We do not seek the cheapest installer, but the most technically competent."
                },
                {
                    "title": "A lead-brokering auction house",
                    "desc": "Your contact information is never resold to multiple competing bidders."
                },
                {
                    "title": "An automated web scraper directory",
                    "desc": "No company is published without thorough human and document review."
                }
            ],
            "isTitle": "What DuctedExpert.com IS",
            "isItems": [
                {
                    "title": "A curated directory of vetted experts",
                    "desc": "Installers and engineering offices specializing in ducted HVAC and heat pumps."
                },
                {
                    "title": "Direct contact with zero commission",
                    "desc": "You deal directly with your chosen specialist on uninflated market terms."
                },
                {
                    "title": "An impartial standard of technical excellence",
                    "desc": "Elevating certified contractors who take pride in their craft."
                }
            ]
        },
        "audience": {
            "proTitle": "For HVAC Professionals",
            "proDesc": "A premium platform to showcase your technical excellence, receive direct inquiries without commissions, and win the trust of discerning homeowners.",
            "clientTitle": "For Property Owners & Homeowners",
            "clientDesc": "An objective, reassuring space to find vetted HVAC contractors, understand technical choices, and protect your home investment for 15+ years."
        },
        "selection": {
            "title": "The DuctedExpert.com Selection Standard",
            "subtitle": "A trusted third party guaranteeing the visibility of genuine HVAC masters.",
            "criteria": [
                {
                    "title": "Documentary Vetting",
                    "desc": "Active trade registration, confirmed solvency, and verified professional HVAC insurance."
                },
                {
                    "title": "Technical Competence",
                    "desc": "Refrigerant handling licenses (F-Gas), continuous training, and authorized distributor supply chains."
                },
                {
                    "title": "Commitment to Best Practices",
                    "desc": "Transparent quotes, acoustic consideration, and full system commissioning."
                }
            ]
        },
        "ambition": {
            "title": "Our Ambition",
            "text": "To establish the definitive international benchmark for ducted climate control, where technical excellence and customer peace of mind meet naturally.",
            "joinMovementTitle": "Join the Movement",
            "proBtn": "Register as an HVAC Professional",
            "clientBtn": "Find a Verified Expert in My Area"
        }
    },
    "it": {
        "metaTitle": "Perché nasce DuctedExpert.com | Trasparenza e Contatto Diretto nel CVC",
        "metaDesc": "Scopri la visione di DuctedExpert: Una piattaforma senza commissioni che mette in contatto diretto proprietari ed esperti di climatizzazione canalizzata.",
        "hero": {
            "title": "Perché nasce DuctedExpert.com",
            "sub1": "Il problema non è la carenza di professionisti.",
            "sub2": "Il problema è la mancanza di trasparenza, chiarezza e contatto diretto senza intermediari.",
            "joinBtn": "Join the Network of Trust →",
            "findBtn": "Find a Verified Expert"
        },
        "origin": {
            "title": "DuctedExpert.com Was Born from Field Reality",
            "p1": "DuctedExpert.com was not conceived by generic lead-generation brokers or speculative digital agencies.",
            "p2": "It was born from practical observations shared every day by ducted air conditioning contractors, thermal engineering offices, and frustrated homeowners.",
            "badRealityTitle": "On the ground, we witnessed:",
            "badRealityList": [
                "Homeowners completely lost when comparing confusing, disparate quotes",
                "Ducted installations executed without respecting engineering standards or acoustic design",
                "Contractor certifications and insurance coverage nearly impossible to verify",
                "Hidden subcontracting to low-cost, unlicensed crews",
                "Serious, master craftsmen lumped into the same category as non-compliant operators"
            ],
            "goodRealityTitle": "At the same time, we saw:",
            "goodRealityLead": "Dedicated local businesses and qualified engineers:",
            "goodRealityList": [
                "Properly and specifically insured for HVAC and thermal engineering",
                "Scrupulously respecting technical trade practices and airflow sizing",
                "Continuously investing in technician training and customer satisfaction",
                "...Yet penalized by legacy broker platforms that prioritize sales volume over craftsmanship."
            ],
            "gapBadge": "This gap was no longer acceptable.",
            "solutionTitle": "A Simple Answer to a Complex Problem",
            "solutionLead": "Rather than creating yet another generic quote mill, we made a fundamentally different choice:",
            "solutionPoints": [
                "Strictly vet and select HVAC professionals on verified documents",
                "Elevate technical best practices and airflow acoustic design",
                "Educate clients on technical challenges and fair market pricing",
                "Restore a healthy, direct relationship with 0% intermediary commission"
            ],
            "whyDiffTitle": "Why is this approach truly different?",
            "whyDiffLead": "Because on DuctedExpert.com:",
            "whyDiffPoints": [
                "Visibility is earned through technical merit, not advertising bids",
                "Every professional is personally identified and vetted",
                "Quality and long-term durability always precede volume",
                "Direct customer-to-expert relationship without broker markups"
            ],
            "quote": "DuctedExpert.com was built as a trusted third party serving homeowners and genuine experts alike. It is not the highest bidder who gets promoted, but the most qualified and serious."
        },
        "clarity": {
            "title": "Let's Bring Clarity Back to the HVAC Industry",
            "notTitle": "What DuctedExpert.com IS NOT",
            "notItems": [
                {
                    "title": "A low-cost price comparison engine",
                    "desc": "We do not seek the cheapest installer, but the most technically competent."
                },
                {
                    "title": "A lead-brokering auction house",
                    "desc": "Your contact information is never resold to multiple competing bidders."
                },
                {
                    "title": "An automated web scraper directory",
                    "desc": "No company is published without thorough human and document review."
                }
            ],
            "isTitle": "What DuctedExpert.com IS",
            "isItems": [
                {
                    "title": "A curated directory of vetted experts",
                    "desc": "Installers and engineering offices specializing in ducted HVAC and heat pumps."
                },
                {
                    "title": "Direct contact with zero commission",
                    "desc": "You deal directly with your chosen specialist on uninflated market terms."
                },
                {
                    "title": "An impartial standard of technical excellence",
                    "desc": "Elevating certified contractors who take pride in their craft."
                }
            ]
        },
        "audience": {
            "proTitle": "For HVAC Professionals",
            "proDesc": "A premium platform to showcase your technical excellence, receive direct inquiries without commissions, and win the trust of discerning homeowners.",
            "clientTitle": "For Property Owners & Homeowners",
            "clientDesc": "An objective, reassuring space to find vetted HVAC contractors, understand technical choices, and protect your home investment for 15+ years."
        },
        "selection": {
            "title": "The DuctedExpert.com Selection Standard",
            "subtitle": "A trusted third party guaranteeing the visibility of genuine HVAC masters.",
            "criteria": [
                {
                    "title": "Documentary Vetting",
                    "desc": "Active trade registration, confirmed solvency, and verified professional HVAC insurance."
                },
                {
                    "title": "Technical Competence",
                    "desc": "Refrigerant handling licenses (F-Gas), continuous training, and authorized distributor supply chains."
                },
                {
                    "title": "Commitment to Best Practices",
                    "desc": "Transparent quotes, acoustic consideration, and full system commissioning."
                }
            ]
        },
        "ambition": {
            "title": "Our Ambition",
            "text": "To establish the definitive international benchmark for ducted climate control, where technical excellence and customer peace of mind meet naturally.",
            "joinMovementTitle": "Join the Movement",
            "proBtn": "Register as an HVAC Professional",
            "clientBtn": "Find a Verified Expert in My Area"
        }
    },
    "ar": {
        "metaTitle": "لماذا تم تأسيس DuctedExpert.com | الشفافية والتواصل المباشر في التكييف المركزي",
        "metaDesc": "اكتشف رؤية DuctedExpert: منصة موثوقة وبنسبة 0% عمولة تربط ملاك الفلل والمشاريع مباشرة بنخبة مقاولي التكييف والمكاتب الهندسية المعتمدة.",
        "hero": {
            "title": "لماذا تم تأسيس DuctedExpert.com",
            "sub1": "المشكلة ليست في قلة شركات التكييف.",
            "sub2": "المشكلة تكمن في غياب الشفافية، تضارب عروض الأسعار، وغياب جهة موثوقة تضمن الجودة.",
            "joinBtn": "انضم إلى شبكة الثقة والاعتماد ←",
            "findBtn": "البحث عن خبير معتمد"
        },
        "origin": {
            "title": "DuctedExpert.com وُلدت من واقع الميدان",
            "p1": "لم تُبتكر DuctedExpert.com من قبل شركات تسويق رقمي أو سماسرة بيع أرقام العملاء.",
            "p2": "بل نشأت من ملاحظات وتحديات حقيقية يشاركها يومياً مقاولو التكييف المركزي، مهندسو المكاتب الاستشارية، وملاك الفلل والمشاريع.",
            "badRealityTitle": "على أرض الواقع، شهدنا ما يلي:",
            "badRealityList": [
                "ملاك مشاريع حائرون أمام عروض أسعار متضاربة لا يمكن المقارنة الفنية بينها",
                "تنفيذ تكييف مخفي دون احترام المعايير الهندسية لمقاسات الدكت والعزل الصوتي",
                "صعوبة التحقق من صحة التراخيص والتأمينات المهنية للشركات المنفذة",
                "إسناد المشاريع بالباطن لعمالة سائبة وغير مؤهلة دون علم المالك",
                "مساواة الشركات الهندسية العريقة بمؤسسات وهمية تفتقر لأبسط معايير الجودة"
            ],
            "goodRealityTitle": "وفي الوقت نفسه، رأينا:",
            "goodRealityLead": "شركات مقاولات ومكاتب هندسية وطنية متميزة:",
            "goodRealityList": [
                "مؤمنة بوثائق تأمين مهني رسمية وسارية تغطي أخطار التكييف والمياه",
                "تلتزم بأعلى المعايير الهندسية في تصنيع الدكت وتوازن تدفق الهواء",
                "تستثمر باستمرار في تدريب فنييها وخدمة ما بعد البيع",
                "...ومع ذلك تعاني من منصات الإعلانات التي تفضل من يدفع أكثر على حساب الجودة."
            ],
            "gapBadge": "هذا التفاوت لم يعد مقبولاً إطلاقاً.",
            "solutionTitle": "إجابة هندسية بسيطة لمشكلة معقدة",
            "solutionLead": "بدلاً من إنشاء منصة وساطة تقليدية تبيع طلبات العملاء، اتخذنا مساراً مختلفاً تماماً:",
            "solutionPoints": [
                "تدقيق وفحص مستندي شامل لتراخيص ومؤهلات كل مقاول ومكتب هندسي",
                "إبراز أفضل الممارسات الهندسية في تصميم الدكت والتحكم الذكي",
                "توعية أصحاب المشاريع بالمعايير الفنية السليمة والأسعار العادلة",
                "إعادة بناء علاقة مباشرة وصحية بين العميل والخبير بنسبة 0% عمولة"
            ],
            "whyDiffTitle": "لماذا يعتبر هذا النموذج فريداً ومختلفاً؟",
            "whyDiffLead": "لأنه على منصة DuctedExpert.com:",
            "whyDiffPoints": [
                "الظهور في الشبكة يُستحق بالكفاءة والاعتماد الرسمي، وليس بالمزايدة الإعلانية",
                "كل مهندس ومقاول يتم التحقق من هويته وتراخيصه وسجله التجاري",
                "جودة المنظومة وسلامتها مقدمة دائماً على عدد المبيعات",
                "تواصل مباشر وشفاف بين العميل والمقاول دون وسطاء أو هوامش ربح خفية"
            ],
            "quote": "\"صُممت DuctedExpert.com لتكون جهة ثقة محايدة تخدم أصحاب المشاريع والشركات الهندسية المتميزة على حد سواء. فالأفضلية ليست لمن يدفع أكثر، بل لمن يقدم العمل الأكثر جودة والتزاماً.\""
        },
        "clarity": {
            "title": "إعادة الشفافية والوضوح لسوق التكييف",
            "notTitle": "ما لا تمثله منصة DuctedExpert.com",
            "notItems": [
                {
                    "title": "لسنا موقع مقارنة أسعار رخيصة",
                    "desc": "نحن لا نبحث عن المقاول الأرخص سعراً، بل عن المقاول الأكثر كفاءة وأماناً لمنزلك."
                },
                {
                    "title": "لسنا سماسرة لبيع أرقام وبيانات العملاء",
                    "desc": "بياناتك لا تُباع ولا تُطرح في مزادات الاتصال المزعجة لعدة شركات متنافسة."
                },
                {
                    "title": "لسنا دليلاً إلكترونياً عشوائياً",
                    "desc": "لا يتم تسجيل أو نشر أي شركة دون فحص وتدقيق مستندي مباشر من فريقنا."
                }
            ],
            "isTitle": "ما تمثله منصة DuctedExpert.com",
            "isItems": [
                {
                    "title": "دليل نخبوي للخبراء المعتمدين",
                    "desc": "شركات مقاولات ومكاتب استشارات متخصصة في التكييف المخفي وأنظمة VRF والمضخات الحرارية."
                },
                {
                    "title": "تواصل وتعاقد مباشر بنسبة 0% عمولة",
                    "desc": "تتعامل وتتفاوض مباشرة مع الخبير الهندسي دون أي عمولات أو رسوم وساطة."
                },
                {
                    "title": "معيار دولي لجودة الأعمال الهندسية",
                    "desc": "إبراز وتمكين الشركات المحترفة التي تعتز بإتقانها وسمعتها في السوق."
                }
            ]
        },
        "audience": {
            "proTitle": "للمقاولين والمكاتب الهندسية",
            "proDesc": "منصة راقية لإبراز خبراتكم المهنية، استقبال مشاريع مباشرة دون عمولات، وكسب ثقة نخبة العملاء الباحثين عن الجودة.",
            "clientTitle": "لأصحاب الفلل والمشاريع",
            "clientDesc": "مساحة آمنة وموثوقة للعثور على أفضل خبراء التكييف المركزي، فهم الخيارات الفنية، وحماية استثمار منزلك لسنوات طويلة."
        },
        "selection": {
            "title": "معايير الاختيار في DuctedExpert.com",
            "subtitle": "جهة اعتماد محايدة تضمن ظهور وتميز الخبراء الحقيقيين فقط.",
            "criteria": [
                {
                    "title": "التدقيق المستندي والقانوني",
                    "desc": "سجل تجاري ساري، عدم وجود تعثرات مالية، وتأمين مسؤولية مهنية خاص بالتكييف."
                },
                {
                    "title": "الكفاءة والتراخيص الفنية",
                    "desc": "تراخيص التعامل مع غازات التبريد، وسلاسل توريد معتمدة من كبرى الوكالات العالمية."
                },
                {
                    "title": "الالتزام بالمواصفات الهندسية",
                    "desc": "عروض أسعار شفافة ومفصلة، عزل صوتي متقن، وبروتوكول تشغيل وتسليم رسمي."
                }
            ]
        },
        "ambition": {
            "title": "رؤيتنا وطموحنا",
            "text": "بناء المعيار الدولي المرجعي الأول لجودة التكييف المركزي المخفي، حيث تلتقي الكفاءة الهندسية براحة بال العميل في تجربة مثالية.",
            "joinMovementTitle": "انضم إلى شبكة التميز",
            "proBtn": "تسجيل شركة تكييف أو مكتب هندسي",
            "clientBtn": "البحث عن خبير معتمد في منطقتي"
        }
    }
};
