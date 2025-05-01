import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/api/clerk-webhook',
  '/api/drive-activity/notification',
  '/api/payment/success',
];

const ignoredRoutes = [
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait',
];

export default clerkMiddleware((auth, req) => {
  const path = req.nextUrl.pathname;
  
  // Check if the route should be ignored
  if (ignoredRoutes.some(route => path.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Check if the route is public
  if (publicRoutes.some(route => path === route)) {
    return NextResponse.next();
  }
  
  // For protected routes, auth check is automatically handled by Clerk
});

 
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};