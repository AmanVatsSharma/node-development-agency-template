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
      swcMinify: true, // Use SWC minifier instead of Terser for faster builds
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
        // Enable modern JavaScript features
        optimizeCss: true,
        // Optimize fonts
        fontLoaders: [
          { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
      }
    });
  }

  // Default config if not in development or production build phase
  return nextConfig;
}; 