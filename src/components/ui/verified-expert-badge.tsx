"use client";

import React from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale } from "@/lib/i18n";

interface VerifiedExpertBadgeProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const BADGE_TEXT: Record<Locale, { line1: string; line2: string; line3: string }> = {
    en: {
        line1: "Verified Expert",
        line2: "DuctedExpert",
        line3: "(vetted & verified by DuctedExpert.com)",
    },
    de: {
        line1: "Geprüfter Experte",
        line2: "DuctedExpert",
        line3: "(geprüft & verifiziert von DuctedExpert.com)",
    },
    fi: {
        line1: "Varmennettu Asiantuntija",
        line2: "DuctedExpert",
        line3: "(tarkistettu ja vahvistettu • DuctedExpert.com)",
    },
    es: {
        line1: "Experto Verificado",
        line2: "DuctedExpert",
        line3: "(perfil auditado y verificado • DuctedExpert.com)",
    },
    it: {
        line1: "Esperto Verificato",
        line2: "DuctedExpert",
        line3: "(profilo verificato e accreditato • DuctedExpert.com)",
    },
    ar: {
        line1: "خبير معتمد",
        line2: "DuctedExpert",
        line3: "(ملف مهني مدقق ومعتمد • DuctedExpert.com)",
    },
};

export function VerifiedExpertBadge({ size = "md", className = "" }: VerifiedExpertBadgeProps) {
    const { locale } = useLanguage();
    const txt = BADGE_TEXT[locale] || BADGE_TEXT.en;

    const dimensions = {
        sm: "w-[175px]",
        md: "w-[210px]",
        lg: "w-full max-w-[380px]"
    }[size];

    const line1FontSize = txt.line1.length > 20 ? 23 : txt.line1.length > 16 ? 26 : 30;
    const line3FontSize = txt.line3.length > 40 ? 11.5 : 13;

    return (
        <div
            dir="ltr"
            style={{ direction: "ltr" }}
            className={`inline-flex items-center justify-center select-none group ${dimensions} ${className}`}
            title={`${txt.line1} — ${txt.line2}® ${txt.line3}`}
        >
            <svg
                dir="ltr"
                viewBox="0 0 460 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
                style={{ direction: "ltr" }}
                role="img"
                aria-label={`${txt.line1} ${txt.line2} ${txt.line3}`}
            >
                <defs>
                    <linearGradient id="ductedGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#D59B2B" />
                    </linearGradient>

                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#F59E0B" floodOpacity="0.35" />
                    </filter>

                    <style>{`
                        @keyframes textHeartbeat {
                            0%, 100% {
                                transform: scale(1);
                                filter: drop-shadow(0 0 0 rgba(213, 155, 43, 0));
                            }
                            14% {
                                transform: scale(1.045);
                                filter: drop-shadow(0 2px 8px rgba(213, 155, 43, 0.45));
                            }
                            28% {
                                transform: scale(1.015);
                                filter: drop-shadow(0 0 0 rgba(213, 155, 43, 0));
                            }
                            42% {
                                transform: scale(1.035);
                                filter: drop-shadow(0 2px 6px rgba(213, 155, 43, 0.35));
                            }
                            56% {
                                transform: scale(1);
                                filter: drop-shadow(0 0 0 rgba(213, 155, 43, 0));
                            }
                        }
                        .ducted-text-heartbeat {
                            transform-box: fill-box;
                            transform-origin: center center;
                            animation: textHeartbeat 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                        }
                    `}</style>
                </defs>

                {/* ================= OFFICIAL DUCTEDEXPERT "D" EMBLEM (LEFT) ================= */}
                <g>
                    <image
                        href="/ductedexpert-d-emblem.png"
                        xlinkHref="/ductedexpert-d-emblem.png"
                        x="12"
                        y="18"
                        width="118"
                        height="118"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </g>

                {/* ================= ANIMATED TEXT & CHECKMARK ================= */}
                <g className="ducted-text-heartbeat">
                    <text
                        x="142"
                        y="61"
                        fill="#3A4F5C"
                        fontFamily="Montserrat, Inter, system-ui, -apple-system, sans-serif"
                        fontWeight="700"
                        fontSize={line1FontSize}
                        letterSpacing="-0.5"
                        textAnchor="start"
                        direction="ltr"
                    >
                        {txt.line1}
                    </text>

                    <line
                        x1="136"
                        y1="76"
                        x2="386"
                        y2="76"
                        stroke="#3A4F5C"
                        strokeWidth="2.2"
                    />

                    <g>
                        <path
                            d="M 397 34 A 27 27 0 1 1 391 64"
                            stroke="#3A4F5C"
                            strokeWidth="4.5"
                            strokeLinecap="round"
                            fill="none"
                        />
                        <path
                            d="M 403 54 L 414 64 L 434 44"
                            stroke="url(#ductedGoldGrad)"
                            strokeWidth="7.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            filter="url(#goldGlow)"
                        />
                    </g>

                    <text
                        x="142"
                        y="113"
                        fill="#3A4F5C"
                        fontFamily="Montserrat, Inter, system-ui, -apple-system, sans-serif"
                        fontWeight="700"
                        fontSize="33"
                        letterSpacing="-0.5"
                        textAnchor="start"
                        direction="ltr"
                    >
                        {txt.line2}
                        <tspan fontSize="18" dy="-13" fontWeight="600">®</tspan>
                    </text>

                    <text
                        x="142"
                        y="140"
                        fill="#3A4F5C"
                        fontFamily="Montserrat, Inter, system-ui, -apple-system, sans-serif"
                        fontWeight="500"
                        fontSize={line3FontSize}
                        textAnchor="start"
                        direction="ltr"
                    >
                        {txt.line3}
                    </text>
                </g>
            </svg>
        </div>
    );
}
