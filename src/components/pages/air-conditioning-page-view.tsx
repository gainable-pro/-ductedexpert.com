"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { HeroSlider } from "@/components/climatisation/HeroSlider";
import { PresentationVideo } from "@/components/features/video/presentation-video";
import { Locale, withLocalePath, getLocalizedUrl } from "@/lib/i18n";
import { CLIMATISATION_CONTENT } from "@/lib/climatisation-content";
import { useLanguage } from "@/components/layout/language-provider";

export function AirConditioningPageView({ locale: initialLocale }: { locale: Locale }) {
  const { locale: contextLocale } = useLanguage();
  const locale = contextLocale || initialLocale || 'en';
  const c = CLIMATISATION_CONTENT[locale] || CLIMATISATION_CONTENT.en;
  const showVideo = true;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DuctedExpert.com - Ducted Air Conditioning & Heat Pumps",
    "url": `https://www.ductedexpert.com/${locale}/air-conditioning`,
    "description": c.metaDesc,
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#1F2D3D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLOCK 1: Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4 transition-all duration-1000 ease-in-out">
        <HeroSlider />

        <div className="container relative z-10 mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#1F2D3D] mb-6 tracking-wide leading-tight uppercase font-montserrat">
            {c.hero.title1}<br />{c.hero.title2}
          </h1>
          <h2 className="text-lg md:text-xl text-[#1F2D3D] mb-10 max-w-4xl mx-auto font-light font-montserrat leading-relaxed">
            <span className="text-[#D59B2B] font-bold">{c.hero.subtitleHighlight}</span> {c.hero.subtitleRest}
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Link href={withLocalePath("/", locale)}>
              <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-12 py-8 rounded-full text-xl shadow-2xl uppercase tracking-wide transform hover:scale-105 transition-transform w-full sm:w-auto">
                {c.hero.findExpertBtn}
              </Button>
            </Link>
            <Link href={withLocalePath("/inscription", locale)}>
              <Button size="lg" className="bg-[#1F2D3D] hover:bg-[#2c3e50] text-white font-bold px-12 py-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-transform w-full sm:w-auto">
                {c.hero.joinProBtn}
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 font-medium">
            {c.hero.freeQuotesNote}
          </p>
        </div>
      </section>

      {/* Presentation Video Section - Multilingual (EN, DE, ES, IT, FI, AR) */}
      {showVideo && (
        <section className="bg-slate-50 py-12 md:py-16 px-4 border-b border-slate-200/80">
          <div className="container max-w-5xl mx-auto">
            <PresentationVideo forceLocale={locale} />
          </div>
        </section>
      )}

      {/* SECTEUR D'ACTIVITÉ - ICONS ROW */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {c.sectors.items.map((sector, i) => (
              <Link key={i} href={getLocalizedUrl('findInstaller', locale)} className="flex flex-col items-center group cursor-pointer">
                <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                  <img src={sector.img} alt={sector.name} className="object-contain w-full h-full" />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-[#D59B2B] transition-colors">
                  {sector.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC 1 — Villas et maisons haut de gamme */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                {c.blockVillas.titlePrefix} <span className="text-[#D59B2B]">{c.blockVillas.titleHighlight}</span> {c.blockVillas.titleSuffix}
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg font-montserrat font-medium leading-relaxed">
                {c.blockVillas.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href={withLocalePath("/", locale)}>
                  <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                    {c.blockVillas.btnText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img src="/gainable-fr-climatisation-villa-interieur.png" alt={c.blockVillas.titleHighlight} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 — Climatisation et chauffage pour bâtiments pro */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                {c.blockCommercial.titlePrefix} <span className="text-[#D59B2B]">{c.blockCommercial.titleHighlight}</span>
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg font-montserrat font-medium leading-relaxed">
                {c.blockCommercial.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href={withLocalePath("/", locale)}>
                  <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                    {c.blockCommercial.btnText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img src="/gainable-fr-climatisation-hotel-lobby.png" alt={c.blockCommercial.titleHighlight} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 — Bureau d’étude CVC */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                {c.blockEngineering.titlePrefix} <span className="text-[#D59B2B]">{c.blockEngineering.titleHighlight}</span>
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg font-montserrat font-medium leading-relaxed">
                {c.blockEngineering.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href={withLocalePath("/engineering-office", locale)}>
                  <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                    {c.blockEngineering.btnText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img src="/gainable-fr-climatisation-ingenieur-cvc.png" alt={c.blockEngineering.titleHighlight} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 4 — Systèmes VRV / DRV */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                {c.blockVrv.titlePrefix} <span className="text-[#D59B2B]">{c.blockVrv.titleHighlight}</span> {c.blockVrv.titleSuffix}
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg font-montserrat font-medium leading-relaxed">
                {c.blockVrv.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href={withLocalePath("/", locale)}>
                  <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                    {c.blockVrv.btnText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img src="/gainable-fr-climatisation-vrv-toiture.png" alt={c.blockVrv.titleHighlight} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 5 — CTA et qualité de l’air */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold font-montserrat text-[#1F2D3D] mb-6">
                <span className="text-[#D59B2B]">{c.blockAhu.titleHighlight}</span> {c.blockAhu.titleSuffix}
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg font-montserrat font-medium leading-relaxed">
                {c.blockAhu.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href={withLocalePath("/", locale)}>
                  <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                    {c.blockAhu.btnText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img src="/gainable-fr-climatisation-technologie-cta.png" alt={c.blockAhu.titleHighlight} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 6 — NOS ZONES D'INTERVENTION */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2D3D] mb-8">
            {c.zones.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-8">
            {c.zones.cities.map((city, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className="text-slate-700 font-semibold px-3 py-1 bg-slate-100 rounded-full text-sm">
                  {city.name} {city.country ? `(${city.country})` : ""}
                </span>
                {idx < c.zones.cities.length - 1 && <span className="text-slate-300">•</span>}
              </span>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href={withLocalePath("/", locale)}>
              <Button variant="outline" className="border-2 border-[#1F2D3D] text-[#1F2D3D] hover:bg-[#1F2D3D] hover:text-white font-bold py-6 px-8 rounded-full shadow-md hover:shadow-xl transition-all h-auto text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D59B2B]" />
                {c.zones.allCitiesBtn}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
