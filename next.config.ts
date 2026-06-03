import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false, // Hides the development button entirely
  /* cacheComponents: true,
  cacheLife: {
    blog: {
      stale: 3600, // 1 hour
      revalidate: 900, // 15 minutes
      expire: 86400, // 1 day
    },
  }, */
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // basePath: 'https://dummyjson.com'
}
 
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);