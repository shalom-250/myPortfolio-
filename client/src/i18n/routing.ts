import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['rw', 'en', 'fr', 'sw', 'ar', 'es', 'de', 'pt', 'zh', 'hi'],

  // Used when no locale matches
  defaultLocale: 'rw'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
