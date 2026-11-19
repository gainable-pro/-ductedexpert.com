import { NextResponse } from 'next/server';
import { prisma, withDbRetry } from '@/lib/prisma';
import { SUPPORTED_LOCALES, LOCALIZED_ROUTES, RouteKey } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://www.ductedexpert.com';
const SYSTEM_EXPERT_SLUGS = ['gainable-fr', 'redaction-gainable', 'bureau-etude-gainable'];

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: idStr } = await params;
    const id = Number(idStr);

    try {
        let xml = '';

        if (id === 0) {
            const nowStr = new Date().toISOString();

            // 1. Static pages across all supported locales (en, de, fi, es, it, ar) with native localized URLs
            const staticList: string[] = [];
            const indexableKeys: RouteKey[] = [
                'home',
                'airConditioning',
                'engineeringOffice',
                'verifiedExpert',
                'whyDuctedExpert',
                'findInstaller',
                'contact',
                'termsOfUse',
                'termsOfSale',
            ];

            for (const loc of SUPPORTED_LOCALES) {
                for (const key of indexableKeys) {
                    const slug = LOCALIZED_ROUTES[key][loc] || '';
                    staticList.push(`/${loc}${slug}`);
                }
            }

            const staticUrls = staticList.map(r => `  <url><loc>${BASE_URL}${r}</loc><lastmod>${nowStr}</lastmod><changefreq>daily</changefreq><priority>${r.endsWith('/air-conditioning') || r.endsWith('/klimaanlage') || r.endsWith('/ilmastointi') ? '0.9' : '0.8'}</priority></url>`);

            // 2. Active Experts + Real Artisan Articles in Sitemap 0 (Priority Crawl)
            const [experts, artisanArticles] = await withDbRetry(() =>
                Promise.all([
                    prisma.expert.findMany({
                        where: { status: 'active' },
                        select: { slug: true }
                    }),
                    prisma.article.findMany({
                        where: {
                            status: 'PUBLISHED',
                            expert: { slug: { notIn: SYSTEM_EXPERT_SLUGS } }
                        },
                        orderBy: { updatedAt: 'desc' },
                        select: {
                            slug: true,
                            updatedAt: true,
                            expert: { select: { slug: true } }
                        }
                    })
                ])
            );

            const expertUrls = experts.map(e =>
                `  <url><loc>${BASE_URL}/pro/${e.slug}</loc><lastmod>${nowStr}</lastmod><changefreq>daily</changefreq><priority>0.95</priority></url>`
            );

            const artisanArticleUrls = artisanArticles.map(a =>
                `  <url><loc>${BASE_URL}/entreprise/${a.expert.slug}/articles/${a.slug}</loc><lastmod>${a.updatedAt.toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.90</priority></url>`
            );

            // 3. Catalogue Products
            const rawCatalog = await import('@/data/sonepar_catalog.json').then(m => m.default || m);
            const toSlug = (sku: string) => sku.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
            const productUrls = (rawCatalog as any[]).map(p =>
                `  <url><loc>${BASE_URL}/materiel/${toSlug(p.manufacturerSku)}</loc><lastmod>${nowStr}</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>`
            );

            // 4. Cities (Deduplicated)
            const { CITIES_100 } = await import('@/data/cities-100');
            const { CITIES_EXTENDED } = await import('@/data/cities-extended');
            const { CITIES_MEDIUM } = await import('@/data/cities-medium');
            const { slugify } = await import('@/lib/utils');
            const rawCities = [...CITIES_100, ...CITIES_EXTENDED, ...CITIES_MEDIUM];
            const uniqueCitiesMap = new Map();
            rawCities.forEach(c => {
                if (c && c.slug && !uniqueCitiesMap.has(c.slug)) {
                    uniqueCitiesMap.set(c.slug, c);
                }
            });
            const ALL_CITIES = Array.from(uniqueCitiesMap.values());

            const regionSet = new Set(ALL_CITIES.map(c => c.region).filter(Boolean));
            const regionUrls = [...regionSet].map(r =>
                `  <url><loc>${BASE_URL}/trouver-installateur/${slugify(r)}</loc><lastmod>${nowStr}</lastmod><changefreq>weekly</changefreq><priority>0.90</priority></url>`
            );
            const cityUrls = ALL_CITIES.map(c =>
                `  <url><loc>${BASE_URL}/climatisation/${c.slug}</loc><lastmod>${nowStr}</lastmod><changefreq>weekly</changefreq><priority>0.90</priority></url>`
            );

            const all = [...staticUrls, ...expertUrls, ...artisanArticleUrls, ...productUrls, ...regionUrls, ...cityUrls];
            xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.join('\n')}\n</urlset>`;

        } else if (id >= 1) {
            // All published articles remain in sitemaps 1..12 (zero pages lost), protected by withDbRetry against empty responses
            const chunkSize = 5000;
            const skip = (id - 1) * chunkSize;

            const [expertsData, articles] = await withDbRetry(() =>
                Promise.all([
                    prisma.expert.findMany({ select: { id: true, slug: true } }),
                    prisma.article.findMany({
                        where: { status: 'PUBLISHED' },
                        skip: skip,
                        take: chunkSize,
                        select: { slug: true, updatedAt: true, expertId: true },
                        orderBy: { updatedAt: 'desc' }
                    })
                ])
            );

            const expertMap = new Map(expertsData.map(e => [e.id, e.slug]));

            const urls = articles
                .filter(a => expertMap.has(a.expertId))
                .map(a =>
                    `  <url><loc>${BASE_URL}/entreprise/${expertMap.get(a.expertId)}/articles/${a.slug}</loc><lastmod>${a.updatedAt.toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
                );

            xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
        } else {
            return new NextResponse('Not found', { status: 404 });
        }

        return new NextResponse(xml, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            },
        });

    } catch (err: any) {
        console.error('Sitemap error:', err);
        // Never return HTTP 200 with an empty/broken sitemap on DB timeout! Return 503 with no-store so Google keeps the previous valid sitemap.
        return new NextResponse('Service Unavailable', {
            status: 503,
            headers: {
                'Cache-Control': 'no-store, must-revalidate',
            },
        });
    }
}
