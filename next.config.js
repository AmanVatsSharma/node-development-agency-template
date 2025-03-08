/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  // Configuration object to be returned
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['enterprisehero.com'],
      formats: ['image/avif', 'image/webp'],
    },
    // Disable ESLint during builds
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    // Disable specific data fetching during build for API routes
    experimental: {
      // Prevent API routes from being pre-rendered at build time
      // This helps with Prisma connection issues during Vercel builds
      instrumentationHook: true,
      serverComponentsExternalPackages: ['@prisma/client']
    },
    // Add any other default configuration here
  };

  // Development-specific settings
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      // Add development-specific configurations here
    };
  }

  // Production build settings
  if (phase === PHASE_PRODUCTION_BUILD) {
    // Check if bundle analysis is enabled
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    });

    // Apply bundle analyzer and other production optimizations
    return withBundleAnalyzer({
      ...nextConfig,
      // Additional production optimizations
      compiler: {
        // Remove console.log in production
        removeConsole: {
          exclude: ['error', 'warn'],
        },
      },
      // Optimize images further in production
      images: {
        ...nextConfig.images,
        minimumCacheTTL: 60,
      },
      experimental: {
        ...nextConfig.experimental,
        // Enable modern JavaScript features
        optimizeCss: true,
      }
    });
  }

  // Default config if not in development or production build phase
  return nextConfig;
}; 