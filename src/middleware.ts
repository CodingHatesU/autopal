import { clerkMiddleware, auth, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/api/clerk-webhook',
  '/api/drive-activity/notification',
  '/api/payment/success',
  '/sign-in(.*)',
  '/sign-up(.*)',
];

// Define your ignored routes (routes that bypass Clerk middleware entirely)
const ignoredRoutes = [
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait',
];


const isPublicRoute = createRouteMatcher([
  ...publicRoutes,
  ...ignoredRoutes
]);


export default clerkMiddleware( async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect(); // Protect the route if it matches the defined criteria
  }
});

 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};