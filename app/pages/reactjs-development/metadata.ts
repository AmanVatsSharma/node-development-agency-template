import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for React.js Development Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'React.js Development Services | Custom React Applications',
  'Expert React.js development services. Custom React applications, React Native mobile apps, component libraries, and modern web solutions. Enterprise-grade React development.',
  [
    ...KEYWORD_SETS.webDevelopment,
    'react.js development',
    'react development services',
    'react.js developers',
    'react applications',
    'react native',
    'frontend development',
  ],
  '/pages/reactjs-development',
  '/images/reactjs-development-og.jpg'
);
