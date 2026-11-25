import { Metadata } from 'next';
import { headers } from 'next/headers';
import SearchPageClient from '@/app/trouver-installateur/search-client';
import { getExperts } from '@/lib/experts';
import { JsonLd, ItemListJsonLd } from '@/components/seo/JsonLd';
import { getServerLocale } from '@/lib/server-locale';
import { getAlternatesUrls, getDictionary } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getServerLocale();
    const dict = getDictionary(locale);

    return {
        title: dict.home.metaTitle,
        description: dict.home.metaDesc,
        alternates: {
            canonical: `https://www.ductedexpert.com/${locale}`,
            languages: getAlternatesUrls('/'),
        },
        openGraph: {
            title: dict.home.metaTitle,
            description: dict.home.metaDesc,
            images: ['/ductedexpert-logo.png'],
        }
    };
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedParams = await searchParams;
    const headerList = await headers();
    const locale = await getServerLocale();
    const dict = getDictionary(locale);

    const latStr = headerList.get("x-vercel-ip-latitude");
    const lngStr = headerList.get("x-vercel-ip-longitude");
    const testLat = resolvedParams.testLat ? parseFloat(resolvedParams.testLat as string) : undefined;
    const testLng = resolvedParams.testLng ? parseFloat(resolvedParams.testLng as string) : undefined;

    const ipLat = testLat || (latStr ? parseFloat(latStr) : undefined);
    const ipLng = testLng || (lngStr ? parseFloat(lngStr) : undefined);

    const initialView = { center: [47.5, 4.5], zoom: 5 };

    const activeCity = (resolvedParams.city as string)?.trim() || "";

    const filters = {
        q: (resolvedParams.q as string)?.trim() || "",
        city: activeCity,
        country: (resolvedParams.country as string)?.trim() || "",
        types: Array.isArray(resolvedParams.type) ? resolvedParams.type : (resolvedParams.type ? [resolvedParams.type as string] : []),
        technologies: (resolvedParams.technologies as string)?.split(",").filter(Boolean) || [],
        batiments: (resolvedParams.batiments as string)?.split(",").filter(Boolean) || [],
        interventions: (resolvedParams.interventions as string)?.split(",").filter(Boolean) || [],
        ipLat,
        ipLng,
    };

    const filterParam = resolvedParams.filter as string;
    if (filterParam === 'bureau_etude') {
        if (!filters.types.includes('bureau')) filters.types.push('bureau');
    } else if (!filterParam && filters.types.length === 0) {
        filters.types.push('societe', 'bureau');
    }

    const initialExperts = await getExperts(filters);

    const faqItems = dict.home.faq;

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={faqSchema} />
            <ItemListJsonLd
                name={dict.home.nearbyExperts}
                description={dict.home.metaDesc}
                items={initialExperts.map(expert => ({
                    name: expert.name,
                    slug: expert.slug,
                    city: expert.city,
                    country: expert.country || 'FR',
                    expertTypes: expert.expertTypes,
                    isLabeled: expert.isLabeled
                }))}
            />
            <SearchPageClient initialExperts={initialExperts} initialView={initialView} />

            {/* BLOC GEO / AEO (International Search & AI Overview Optimization) */}
            <section className="bg-[#1F2D3D] text-white py-12 border-b border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
                        <div className="flex items-center gap-3 mb-4 text-[#D59B2B]">
                            <span className="bg-[#D59B2B]/20 text-[#D59B2B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#D59B2B]/30">
                                {dict.home.geoBadge}
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            {dict.home.geoTitle}
                        </h2>
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6">
                            {dict.home.geoText}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/80 text-sm text-slate-300">
                            <div className="flex items-center gap-2">
                                <span className="text-[#D59B2B] font-bold">✓</span>
                                <span>{dict.home.geoCheck1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D59B2B] font-bold">✓</span>
                                <span>{dict.home.geoCheck2}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D59B2B] font-bold">✓</span>
                                <span>{dict.home.geoCheck3}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* International SEO Content Section */}
            <section className="bg-white py-16 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-8">
                        {dict.home.seoMainTitle}
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                        <div>
                            <h2 className="text-xl font-bold text-[#D59B2B] mb-3">{dict.home.seoBlock1Title}</h2>
                            <p className="text-slate-600 mb-6">
                                {dict.home.seoBlock1Text}
                            </p>

                            <h2 className="text-xl font-bold text-[#D59B2B] mb-3">{dict.home.seoBlock2Title}</h2>
                            <p className="text-slate-600">
                                {dict.home.seoBlock2Text}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#D59B2B] mb-3">{dict.home.seoBlock3Title}</h2>
                            <p className="text-slate-600 mb-6">
                                {dict.home.seoBlock3Text}
                            </p>

                            <h2 className="text-xl font-bold text-[#D59B2B] mb-3">{dict.home.seoBlock4Title}</h2>
                            <p className="text-slate-600">
                                {dict.home.seoBlock4Text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F2D3D] text-center mb-10">
                        {dict.home.faqTitle}
                    </h2>
                    <div className="space-y-6">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#1F2D3D] mb-2 flex items-center gap-2">
                                    <span className="text-[#D59B2B] font-bold">Q.</span> {item.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
