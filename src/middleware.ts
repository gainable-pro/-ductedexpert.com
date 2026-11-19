import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isValidLocale, Locale, findRouteByPath, getLegacyRoute, getLocalizedUrl } from './lib/i18n';

/**
 * Mapping ISO Country Codes (from Vercel GeoIP) to supported DuctedExpert locales
 */
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
    // German (de)
    'DE': 'de', // Germany
    'AT': 'de', // Austria
    'CH': 'de', // Switzerland
    'LI': 'de', // Liechtenstein
    'LU': 'de', // Luxembourg

    // Spanish (es)
    'ES': 'es', // Spain
    'MX': 'es', // Mexico
    'AR': 'es', // Argentina
    'CO': 'es', // Colombia
    'CL': 'es', // Chile
    'PE': 'es', // Peru
    'VE': 'es', // Venezuela
    'EC': 'es', // Ecuador
    'GT': 'es', // Guatemala
    'CU': 'es', // Cuba
    'BO': 'es', // Bolivia
    'DO': 'es', // Dominican Republic
    'HN': 'es', // Honduras
    'PY': 'es', // Paraguay
    'SV': 'es', // El Salvador
    'NI': 'es', // Nicaragua
    'CR': 'es', // Costa Rica
    'PA': 'es', // Panama
    'UY': 'es', // Uruguay
    'PR': 'es', // Puerto Rico
    'GQ': 'es', // Equatorial Guinea

    // Italian (it)
    'IT': 'it', // Italy
    'SM': 'it', // San Marino
    'VA': 'it', // Vatican

    // Finnish (fi)
    'FI': 'fi', // Finland

    // Arabic (ar)
    'SA': 'ar', // Saudi Arabia
    'AE': 'ar', // United Arab Emirates
    'QA': 'ar', // Qatar
    'KW': 'ar', // Kuwait
    'BH': 'ar', // Bahrain
    'OM': 'ar', // Oman
    'EG': 'ar', // Egypt
    'MA': 'ar', // Morocco
    'DZ': 'ar', // Algeria
    'TN': 'ar', // Tunisia
    'JO': 'ar', // Jordan
    'LB': 'ar', // Lebanon
    'IQ': 'ar', // Iraq
    'LY': 'ar', // Libya
    'SD': 'ar', // Sudan
    'YE': 'ar', // Yemen
    'SY': 'ar', // Syria
    'PS': 'ar', // Palestine
};

/**
 * Detect the appropriate locale from visitor's GeoIP (Vercel IP country), query testing, or Accept-Language
 */
function detectGeoLocale(request: NextRequest): Locale {
    // 1. Query parameter override for easy testing (e.g. ?country=DE, ?country=ES, ?geo=IT)
    const testParam = (
        request.nextUrl.searchParams.get('country') ||
        request.nextUrl.searchParams.get('geo') ||
        request.nextUrl.searchParams.get('testCountry')
    )?.toUpperCase();

    if (testParam) {
        if (isValidLocale(testParam.toLowerCase())) {
            return testParam.toLowerCase() as Locale;
        }
        if (COUNTRY_TO_LOCALE[testParam]) {
            return COUNTRY_TO_LOCALE[testParam];
        }
    }

    // 2. Vercel GeoIP Country Header or Edge geo
    const vercelCountry = (
        request.headers.get('x-vercel-ip-country') ||
        request.headers.get('cf-ipcountry') ||
        (request as unknown as { geo?: { country?: string } }).geo?.country
    )?.toUpperCase();

    if (vercelCountry && COUNTRY_TO_LOCALE[vercelCountry]) {
        return COUNTRY_TO_LOCALE[vercelCountry];
    }

    // 3. Fallback to browser Accept-Language header
    const acceptLang = request.headers.get('accept-language')?.toLowerCase() || '';
    if (acceptLang.startsWith('de') || acceptLang.includes(',de')) return 'de';
    if (acceptLang.startsWith('es') || acceptLang.includes(',es')) return 'es';
    if (acceptLang.startsWith('it') || acceptLang.includes(',it')) return 'it';
    if (acceptLang.startsWith('fi') || acceptLang.includes(',fi')) return 'fi';
    if (acceptLang.startsWith('ar') || acceptLang.includes(',ar')) return 'ar';

    // 4. Default: English
    return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip static assets or public files with extensions
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.(png|jpg|jpeg|gif|webp|svg|ico|mp4|webm|pdf|txt|xml|json)$/i.test(pathname)
    ) {
        return NextResponse.next();
    }

    // Redirect trailing slashes (except root)
    if (pathname.length > 1 && pathname.endsWith('/')) {
        const cleanPath = pathname.slice(0, -1);
        return NextResponse.redirect(new URL(cleanPath + request.nextUrl.search, request.url), 301);
    }

    // Automatic GeoIP orientation on root: German IP -> /de, Spanish IP -> /es, Italian IP -> /it, Finnish IP -> /fi, Arabic IP -> /ar, others -> /en
    if (pathname === '/' || pathname === '') {
        const targetLocale = detectGeoLocale(request);
        const redirectUrl = new URL(`/${targetLocale}${request.nextUrl.search}`, request.url);
        const response = NextResponse.redirect(redirectUrl, 307);
        response.cookies.set('NEXT_LOCALE', targetLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'lax',
        });
        return response;
    }

    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0]?.toLowerCase();

    // 301 Redirect legacy French slugs to their canonical localized URLs
    // e.g. /en/climatisation -> /en/air-conditioning, /de/climatisation -> /de/klimaanlage, /en/labels -> /en/verified-expert
    const legacyKey = getLegacyRoute(pathname);
    if (legacyKey) {
        const targetLocale: Locale = isValidLocale(firstSegment)
            ? firstSegment
            : (isValidLocale(request.cookies.get('NEXT_LOCALE')?.value)
                ? (request.cookies.get('NEXT_LOCALE')!.value as Locale)
                : DEFAULT_LOCALE);
        const targetUrl = getLocalizedUrl(legacyKey, targetLocale);
        return NextResponse.redirect(new URL(targetUrl + request.nextUrl.search, request.url), 301);
    }

    if (isValidLocale(firstSegment)) {
        const locale: Locale = firstSegment;
        const remainingPath = '/' + segments.slice(1).join('/');

        // Resolve direct localized route mapping (e.g. /de/klimaanlage -> /air-conditioning)
        // Direct 200 OK execution, ZERO redirect hops.
        const routeMatch = findRouteByPath(remainingPath);
        const internalPath = routeMatch ? routeMatch.internalPath : (remainingPath === '/' ? '/' : remainingPath);

        const rewriteUrl = new URL(internalPath, request.url);
        rewriteUrl.search = request.nextUrl.search;

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-locale', locale);
        requestHeaders.set('x-pathname', pathname);

        const response = NextResponse.rewrite(rewriteUrl, {
            request: {
                headers: requestHeaders,
            },
        });

        response.cookies.set('NEXT_LOCALE', locale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'lax',
        });

        return response;
    }

    // No locale prefix in URL -> check if path matches a localized slug or internal path
    const routeMatch = findRouteByPath(pathname);
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const targetLocale: Locale = (routeMatch && routeMatch.locale && isValidLocale(routeMatch.locale))
        ? routeMatch.locale
        : (isValidLocale(cookieLocale) ? cookieLocale : detectGeoLocale(request));

    const internalPath = routeMatch ? routeMatch.internalPath : pathname;

    const rewriteUrl = new URL(internalPath, request.url);
    rewriteUrl.search = request.nextUrl.search;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', targetLocale);
    requestHeaders.set('x-pathname', pathname);

    const response = NextResponse.rewrite(rewriteUrl, {
        request: {
            headers: requestHeaders,
        },
    });

    response.cookies.set('NEXT_LOCALE', targetLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
    });

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
