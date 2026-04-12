/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const SEO_SECURITY_HEADERS = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

module.exports = (phase) => {
  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'enterprisehero.com' },
      ],
      formats: ['image/avif', 'image/webp'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    serverExternalPackages: ['@prisma/client'],
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: SEO_SECURITY_HEADERS,
        },
      ];
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
    };
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    });

    return withBundleAnalyzer({
      ...nextConfig,
      compiler: {
        removeConsole: {
          exclude: ['error', 'warn'],
        },
      },
      images: {
        ...nextConfig.images,
        minimumCacheTTL: 31536000,
      },
      experimental: {
        optimizeCss: true,
      },
    });
  }

  return nextConfig;
};