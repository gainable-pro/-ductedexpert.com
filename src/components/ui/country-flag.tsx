import React from 'react';

interface CountryFlagProps {
    code: string;
    alt?: string;
    className?: string;
}

export function CountryFlag({ code, alt, className = "w-5 h-3.5" }: CountryFlagProps) {
    if (!code) return null;
    const cleanCode = code.toLowerCase().trim();
    return (
        <span className={`inline-flex items-center justify-center shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] ${className}`}>
            <img
                src={`/flags/${cleanCode}.svg`}
                alt={alt || code}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </span>
    );
}
