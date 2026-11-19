import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isValidLocale, Locale } from './lib/i18n';

// 301 Permanent Redirects: Transition legacy French URLs to English International URLs
const LEGACY_URL_REDIRECTS: Record<string, string> = {
    '/climatisation': '/air-conditioning',
    '/bureau-etude': '/engineering-office',
    '/pourquoi-gainable': '/why-ducted-expert',
    '/labels': '/verified-expert',
    '/trouver-installateur': '/find-installer',
    '/cgu': '/terms-of-use',
    '/cgv': '/terms-of-sale',
    '/mentions-legales': '/legal-notice',
    '/politique-confidentialite': '/privacy-policy',
    '/politique-cookies': '/cookies-policy',
};

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

    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0]?.toLowerCase();

    if (isValidLocale(firstSegment)) {
        const locale: Locale = firstSegment;
        const remainingPath = '/' + segments.slice(1).join('/');

        // 301 Redirect legacy French subpaths to international English URLs
        if (LEGACY_URL_REDIRECTS[remainingPath]) {
            const newTarget = `/${locale}${LEGACY_URL_REDIRECTS[remainingPath]}`;
            return NextResponse.redirect(new URL(newTarget + request.nextUrl.search, request.url), 301);
        }

        const rewriteUrl = request.nextUrl.clone();
        rewriteUrl.pathname = remainingPath === '/' ? '/' : remainingPath;

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

    // No locale prefix in URL -> determine from cookie or default to English ('en')
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const activeLocale: Locale = isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

    // 301 Redirect legacy French URLs without locale prefix
    if (LEGACY_URL_REDIRECTS[pathname]) {
        const newTarget = `/${activeLocale}${LEGACY_URL_REDIRECTS[pathname]}`;
        return NextResponse.redirect(new URL(newTarget + request.nextUrl.search, request.url), 301);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', activeLocale);
    requestHeaders.set('x-pathname', pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
