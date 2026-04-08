import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host') || '';

    const isQR =
        hostname === 'qr.chichobarbershop.com' ||
        hostname.startsWith('qr.');

    const isNails =
        hostname === 'nails.chichobarbershop.com' ||
        hostname.startsWith('nails.');

    if (isQR && req.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/qr', req.url));
    }

    if (isNails && req.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/nails', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
