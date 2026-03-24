import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(rw|en|fr|sw|ar|es|de|pt|zh|hi)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
