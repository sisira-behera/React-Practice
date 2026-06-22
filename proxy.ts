import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { routing } from "./i18n/routing";

 
const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    
    // Check if this is a protected path (myaccount)
    // Extract locale from path
    const segments = path.split('/').filter(Boolean);
    const locales = routing.locales as readonly string[];
    const locale = segments[0] && locales.includes(segments[0] as any) ? segments[0] : routing.defaultLocale;
    const isProtectedPath = path.includes("/myaccount");
    
    // Get the token using the correct configuration
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });
    
    // If trying to access a protected route without authentication
    if (isProtectedPath && !token) {
        // Redirect to login with locale and callback URL
        const callbackUrl = encodeURIComponent(path);
        return NextResponse.redirect(new URL(`/${locale}/login?callbackUrl=${callbackUrl}`, request.url));
    }
    
    // Apply the intl middleware for locale handling
    return intlMiddleware(request);
}

 
export const config = {
  // Match all pathnames except api, _next, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};