import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isValidLocale, Locale, findRouteByPath, getLegacyRoute, getLocalizedUrl } from './lib/i18n';

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

    // Default root orientation: typing ductedexpert.com directly redirects to English (/en)
    if (pathname === '/' || pathname === '') {
        const redirectUrl = new URL(`/en${request.nextUrl.search}`, request.url);
        const response = NextResponse.redirect(redirectUrl, 307);
        response.cookies.set('NEXT_LOCALE', 'en', {
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
        : (isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE);

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
