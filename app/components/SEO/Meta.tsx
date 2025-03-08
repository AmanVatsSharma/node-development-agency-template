'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonicalUrl?: string;
  noIndex?: boolean;
}

const siteName = 'Enterprise Hero';
const siteUrl = 'https://enterprisehero.com';
const defaultDescription = 'Premium Node.js development and 3D animation services for enterprise applications.';
const defaultKeywords = 'Node.js, React, Next.js, 3D Animations, Enterprise Development, Web Development';
const defaultOgImage = '/images/og-default.jpg';

export default function Meta({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
}: MetaProps) {
  const pathname = usePathname();
  
  // Format page title
  const formattedTitle = title 
    ? `${title} | ${siteName}` 
    : `${siteName} - Premium Node.js Development`;
  
  // Generate canonical URL
  const pageCanonicalUrl = canonicalUrl || `${siteUrl}${pathname}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonicalUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Robots Tags */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Favicon Tags - You can expand this with more sizes as needed */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
} 