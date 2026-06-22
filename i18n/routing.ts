import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      de: '/about'
    },
    '/products': {
      de: '/products'
    },
    '/products/[id]': {
      de: '/products/[id]'
    },
    '/category/[slug]': {
      de: '/category/[slug]' // category listing page
    },
    '/plp': {
      de: '/plp' // category listing page (PLP)
    },
    '/myaccount': {
      de: '/myaccount' 
    },
    '/contact': {
      de: '/contact'
    },
    '/privacy': {
      de: '/privacy'
    },
    '/signup': {
      de: '/signup'
    },
    '/forgot-password': {
      de: '/forgot-password'
    },
    '/login': {
      de: '/login'
    },
  }
});