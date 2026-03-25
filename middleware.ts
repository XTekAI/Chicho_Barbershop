import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host') || '';
    const isQR =
        hostname === 'qr.chichobarbershop.com' ||
        hostname.startsWith('qr.');

    if (isQR && req.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/qr', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
