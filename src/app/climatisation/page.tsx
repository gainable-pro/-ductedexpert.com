import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Check } from "lucide-react";
import Link from "next/link";
import { HeroSlider } from "@/components/climatisation/HeroSlider";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, getDictionary, withLocalePath } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);

  return {
    title: dict.climatisationPage.metaTitle,
    description: dict.climatisationPage.metaDesc,
    alternates: {
      canonical: `https://www.ductedexpert.com/${locale}/climatisation`,
      languages: getAlternatesUrls('/climatisation'),
    },
    openGraph: {
      title: dict.climatisationPage.metaTitle,
      description: dict.climatisationPage.metaDesc,
      url: `https://www.ductedexpert.com/${locale}/climatisation`,
      type: "website",
      images: ["/gainable-fr-climatisation-pompe-a-chaleur-hero.png"],
    }
  };
}

export default async function ClimatisationPage() {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const c = dict.climatisationPage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DuctedExpert.com - Air Conditioning & Heat Pumps",
    "url": `https://www.ductedexpert.com/${locale}/climatisation`,
    "description": c.metaDesc,
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLOCK 1: Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4 transition-all duration-1000 ease-in-out">
        <HeroSlider />

        <div className="container relative z-10 mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#1F2D3D] mb-6 tracking-wide leading-tight uppercase font-montserrat">
            {c.heroTitle1}<br />{c.heroTitle2}
          </h1>
          <h2 className="text-lg md:text-xl text-[#1F2D3D] mb-10 max-w-4xl mx-auto font-light font-montserrat leading-relaxed">
            <span className="text-[#D59B2B] font-bold">{c.heroSubtitleHighlight}</span> {c.heroSubtitleRest}
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Link href={withLocalePath("/", locale)}>
              <Button size="lg" className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-12 py-8 rounded-full text-xl shadow-2xl uppercase tracking-wide transform hover:scale-105 transition-transform w-full sm:w-auto">
                {c.findExpertBtn}
              </Button>
            </Link>
            <Link href={withLocalePath("/inscription", locale)}>
              <Button size="lg" className="bg-[#1F2D3D] hover:bg-[#2c3e50] text-white font-bold px-12 py-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-transform w-full sm:w-auto">
                {c.becomeMemberBtn}
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 font-medium">
            {c.freeQuotesNote}
          </p>
        </div>
      </section>

      {/* SECTEUR D'ACTIVITÉ - ICONS ROW */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-maison.png" alt="Residential" className="object-contain w-full h-full scale-[1.3]" />
              </div>
            </Link>
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-tertiaire.jpg" alt="Commercial" className="object-contain w-full h-full" />
              </div>
            </Link>
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-commerce.jpg" alt="Retail" className="object-contain w-full h-full" />
              </div>
            </Link>
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-hotellerie.jpg" alt="Hospitality" className="object-contain w-full h-full" />
              </div>
            </Link>
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-industrie.png" alt="Industrial" className="object-contain w-full h-full" />
              </div>
            </Link>
            <Link href={withLocalePath("/", locale)} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 mb-4 relative transition-transform transform group-hover:scale-110">
                <img src="/gainable-fr-climatisation-secteur-sante.jpg" alt="Healthcare" className="object-contain w-full h-full" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCK 2: BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-6">
                {c.sectionWhyTitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {c.sectionWhyText}
              </p>
              <div className="space-y-4">
                {c.benefits.map((b, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D59B2B]/15 text-[#D59B2B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2D3D] text-base">{b.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/gainable-fr-climatisation-pompe-a-chaleur-hero.png"
                alt={c.metaTitle}
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
