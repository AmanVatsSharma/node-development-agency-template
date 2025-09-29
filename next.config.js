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
    // Ignore TypeScript build errors (requested)
    typescript: {
      // Warning: This allows production builds to successfully complete even if
      // your project has type errors.
      ignoreBuildErrors: true,
    },
    // Disable specific data fetching during build for API routes
    // Cleaned up deprecated experimental flags for Next 15+
    serverExternalPackages: ['@prisma/client'],
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
        // keep experimental toggle to ensure compatibility with tailwindcss v4 css optimizer
        optimizeCss: true,
      }
    });
  }

  // Default config if not in development or production build phase
  return nextConfig;
}; 