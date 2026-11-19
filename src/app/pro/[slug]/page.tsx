import type { Metadata } from "next";
import { prisma, withDbRetry } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    MapPin, Globe, Linkedin, Facebook, Youtube, CheckCircle,
    Building2, Wrench, GraduationCap, Mail
} from "lucide-react";
import { ContactWizard } from "@/components/features/contact/contact-wizard";
import { ExpertArticles } from "@/components/features/expert/expert-articles";
import { PhoneCallButton } from "@/components/features/expert/phone-call-button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { VerifiedExpertBadge } from "@/components/ui/verified-expert-badge";
import { getServerLocale } from "@/lib/server-locale";
import { getAlternatesUrls, getDictionary, translateTerm } from "@/lib/i18n";
import { translateText } from "@/lib/translator";

export const dynamic = 'force-dynamic';

async function getExpertBySlug(slug: string) {
    return await withDbRetry(() =>
        prisma.expert.findUnique({
            where: { slug },
            include: {
                technologies: true,
                interventions_clim: true,
                interventions_etude: true,
                batiments: true,
                marques: true,
                certifications: true,
                photos: true,
                articles: {
                    where: { status: 'PUBLISHED' },
                    orderBy: { createdAt: 'desc' },
                    take: 50,
                    select: {
                        slug: true,
                        title: true,
                        introduction: true,
                        mainImage: true,
                        publishedAt: true,
                        createdAt: true
                    }
                },
                user: {
                    select: { email: true }
                }
            }
        })
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const locale = await getServerLocale();
    const dict = getDictionary(locale);
    try {
        const { slug } = await params;
        const expert = await getExpertBySlug(slug);

        if (!expert) {
            return {
                title: "Expert - DuctedExpert.com",
                description: dict.home.metaDesc,
            };
        }

        const typeTranslated = translateTerm(expert.expert_type, locale);
        const translatedDescription = await translateText(expert.description, locale, "expert_description");
        const title = `${expert.nom_entreprise} (${expert.ville}) - ${typeTranslated} | DuctedExpert.com`;
        const description = translatedDescription
            ? translatedDescription.slice(0, 155)
            : `${expert.nom_entreprise} - ${typeTranslated} in ${expert.ville}. ${dict.home.freeQuote}.`;
        const canonical = `https://www.ductedexpert.com/${locale}/pro/${expert.slug}`;

        return {
            title,
            description,
            alternates: {
                canonical,
                languages: getAlternatesUrls(`/pro/${expert.slug}`),
            },
            openGraph: {
                title,
                description,
                url: canonical,
                siteName: 'DuctedExpert.com',
                type: 'profile',
            }
        };
    } catch {
        return {
            title: "DuctedExpert.com",
            description: dict.home.metaDesc,
        };
    }
}

export default async function PublicProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = await getServerLocale();
    const dict = getDictionary(locale);
    const expert = await getExpertBySlug(slug);

    if (!expert) {
        notFound();
    }

    const typeLabel = translateTerm(expert.expert_type, locale);
    const typeColor = expert.expert_type === 'bureau_detude'
        ? "bg-purple-100 text-purple-800"
        : "bg-blue-100 text-blue-800";

    const translatedDescription = await translateText(expert.description, locale, "expert_description");

    const localizedArticles = await Promise.all(
        (expert.articles || []).map(async (art) => ({
            ...art,
            title: await translateText(art.title, locale, "title"),
            introduction: art.introduction ? await translateText(art.introduction, locale, "expert_description") : null,
        }))
    );

    const getYoutubeId = (url: string | null) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };
    const youtubeId = getYoutubeId(expert.video_url);

    const profileUrl = `https://www.ductedexpert.com/${locale}/pro/${expert.slug}`;

    const businessJsonLd: any = {
        "@context": "https://schema.org",
        "@type": expert.expert_type === 'cvc_climatisation' ? ["HVACBusiness", "HomeAndConstructionBusiness"] : "ProfessionalService",
        "name": expert.nom_entreprise,
        "image": expert.logo_url || "https://www.ductedexpert.com/assets/logo-share.png",
        "@id": `${profileUrl}#business`,
        "url": profileUrl,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": expert.adresse || expert.ville,
            "addressLocality": expert.ville,
            "postalCode": expert.code_postal,
            "addressCountry": expert.pays
        },
        "description": translatedDescription,
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
            />

            <main className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
                    <div className="h-48 relative">
                        <div className="absolute inset-0 bg-slate-800/20 z-10"></div>
                        <img
                            src={
                                expert.expert_type === 'bureau_detude'
                                    ? "/assets/images/hero-bureau.png"
                                    : "/assets/images/hero-cvc.png"
                            }
                            alt={expert.nom_entreprise}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="px-8 pb-8">
                        <div className="flex flex-col md:flex-row items-start gap-6 -mt-32 relative z-20">
                            <div className="w-64 h-64 bg-white rounded-xl shadow-lg border-4 border-white overflow-hidden flex items-center justify-center">
                                {expert.logo_url ? (
                                    <img src={expert.logo_url} alt={expert.nom_entreprise} className="w-full h-full object-contain p-4" />
                                ) : (
                                    <span className="text-6xl font-bold text-slate-300">{expert.nom_entreprise.charAt(0)}</span>
                                )}
                            </div>

                            <div className="flex-1 pt-32 md:pt-4">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex flex-col gap-1 mb-3">
                                            <h1 className="text-3xl font-bold text-[#1F2D3D]">
                                                {expert.nom_entreprise}
                                            </h1>
                                            <div className="flex items-center gap-2 text-[#D59B2B] font-semibold bg-[#FFF8ED] px-3 py-1 rounded w-fit border border-[#D59B2B]/20">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>{dict.nav.verifiedExpert} • DuctedExpert.com</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${typeColor}`}>
                                                {typeLabel}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-3 mb-6">
                                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                                <MapPin className="w-4 h-4 text-[#D59B2B]" />
                                                <span>{expert.ville} ({expert.code_postal}), {translateTerm(expert.pays, locale)}</span>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3">
                                                {expert.site_web && (
                                                    <a
                                                        href={expert.site_web.startsWith('http') ? expert.site_web : `https://${expert.site_web}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-white hover:border-[#D59B2B] hover:text-[#D59B2B] transition-all"
                                                    >
                                                        <Globe className="w-4 h-4" />
                                                        <span>Website</span>
                                                    </a>
                                                )}
                                                {expert.linkedin && (
                                                    <a
                                                        href={expert.linkedin.startsWith('http') ? expert.linkedin : `https://${expert.linkedin}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all"
                                                    >
                                                        <Linkedin className="w-4 h-4" />
                                                        <span>LinkedIn</span>
                                                    </a>
                                                )}
                                                {expert.facebook && (
                                                    <a
                                                        href={expert.facebook.startsWith('http') ? expert.facebook : `https://${expert.facebook}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all"
                                                    >
                                                        <Facebook className="w-4 h-4" />
                                                        <span>Facebook</span>
                                                    </a>
                                                )}
                                                {expert.youtube && (
                                                    <a
                                                        href={expert.youtube.startsWith('http') ? expert.youtube : `https://${expert.youtube}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all"
                                                    >
                                                        <Youtube className="w-4 h-4" />
                                                        <span>YouTube</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <PhoneCallButton telephone={expert.telephone} />
                                        <ContactWizard
                                            preSelectedExperts={[{
                                                id: expert.id,
                                                nom_entreprise: expert.nom_entreprise,
                                                expert_type: expert.expert_type,
                                                ville: expert.ville
                                            }]}
                                            triggerButton={
                                                <Button className="bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-12 px-8 shadow-md">
                                                    {dict.home.requestQuote}
                                                </Button>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* DESCRIPTION */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-[#1F2D3D] mb-4">
                                {expert.nom_entreprise} – {expert.ville}
                            </h2>
                            <p className={`text-slate-600 leading-relaxed whitespace-pre-line ${locale === 'ar' ? 'text-right font-tajawal' : 'text-left'}`}>
                                {translatedDescription}
                            </p>
                        </section>

                        {/* VIDEO */}
                        {expert.video_url && (
                            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-inner">
                                    {youtubeId ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${youtubeId}`}
                                            title="Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <video
                                            src={expert.video_url}
                                            controls
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </section>
                        )}

                        {/* PHOTO GALLERY */}
                        {expert.photos && expert.photos.length > 0 && (
                            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {expert.photos.map((photo, idx) => (
                                        <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                                            <img
                                                src={photo.photo_url}
                                                alt={`${expert.nom_entreprise} ${idx + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* SKILLS / TAGS (Translated) */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-[#1F2D3D] mb-6">{dict.signup.step3Title}</h2>

                            {expert.technologies.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                                        <Wrench className="w-4 h-4" /> {dict.home.technologiesFilter}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {expert.technologies.map((t) => (
                                            <Badge key={t.id} variant="secondary" className="bg-slate-100 text-slate-700 px-3 py-1.5 text-sm">
                                                {translateTerm(t.value, locale)}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {expert.interventions_clim.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> {dict.signup.interventionsHeading}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {expert.interventions_clim.map((t) => (
                                            <Badge key={t.id} variant="outline" className="border-slate-200 text-slate-600 px-3 py-1.5 text-sm">
                                                {translateTerm(t.value, locale)}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {expert.batiments.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" /> {dict.home.buildingTypeFilter}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {expert.batiments.map((t) => (
                                            <Badge key={t.id} variant="outline" className="border-slate-200 text-slate-600 px-3 py-1.5 text-sm">
                                                {translateTerm(t.value, locale)}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {expert.interventions_etude.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" /> {dict.signup.interventionsHeading}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {expert.interventions_etude.map((t) => (
                                            <Badge key={t.id} variant="secondary" className="bg-purple-50 text-purple-700 px-3 py-1.5 text-sm">
                                                {translateTerm(t.value, locale)}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {expert.marques.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3">{dict.signup.brandsHeading}</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {expert.marques.map((marque) => (
                                            <div key={marque.id} title={marque.value}>
                                                <BrandLogo brand={marque.value} size={48} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {expert.certifications && expert.certifications.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-3">{dict.signup.certificationsHeading}</h3>
                                    <div className="flex flex-wrap items-center gap-4">
                                        {expert.certifications.map((cert) => (
                                            <div key={cert.id} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-[#D59B2B]" />
                                                <span className="font-semibold text-slate-700 text-sm">
                                                    {translateTerm(cert.value, locale)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* EXPERT'S OWN SEO ARTICLES PUBLISHED FROM PRO DASHBOARD */}
                        <ExpertArticles
                            articles={localizedArticles}
                            expertSlug={expert.slug}
                            expertName={expert.nom_entreprise}
                            locale={locale}
                        />
                    </div>

                    {/* RIGHT COLUMN: CONTACT & MAP */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-64 relative z-0">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(expert.ville + ", " + expert.pays)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            />
                        </div>

                        <div className="sticky top-24">
                            <ContactWizard
                                preSelectedExperts={[{
                                    id: expert.id,
                                    nom_entreprise: expert.nom_entreprise,
                                    expert_type: expert.expert_type,
                                    ville: expert.ville
                                }]}
                                triggerButton={
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center space-y-4 cursor-pointer hover:shadow-md transition-shadow group">
                                        <div className="w-16 h-16 bg-[#FFF8ED] text-[#D59B2B] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#D59B2B] group-hover:text-white transition-colors">
                                            <Mail className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#1F2D3D]">{dict.home.requestQuote}</h3>
                                            <p className="text-sm text-slate-500 mt-1">
                                                {dict.home.freeNoCommitment}
                                            </p>
                                        </div>
                                        <Button className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold h-12">
                                            {dict.home.freeQuote}
                                        </Button>
                                    </div>
                                }
                            />

                            <div className="flex justify-center mt-4">
                                {expert.is_labeled && (
                                    <VerifiedExpertBadge size="md" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
