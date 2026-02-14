/**
 * @fileoverview SEO Content Wrapper Component
 * @description Wraps page content with SEO-optimized structure
 * @version 1.0.0
 */

'use client';

import { ReactNode } from 'react';
import { KeywordSet } from '@/app/lib/seo/keyword-research';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedServices } from './RelatedServices';

interface SEOContentWrapperProps {
  children: ReactNode;
  pageName: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  showRelatedServices?: boolean;
  relatedServicesTitle?: string;
  className?: string;
}

/**
 * SEO Content Wrapper
 * Provides consistent SEO structure across pages
 */
export function SEOContentWrapper({
  children,
  pageName,
  breadcrumbs,
  showRelatedServices = true,
  relatedServicesTitle,
  className = '',
}: SEOContentWrapperProps) {
  return (
    <div className={className}>
      {/* Breadcrumb Navigation */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}
      
      {/* Main Content */}
      {children}
      
      {/* Related Services Section */}
      {showRelatedServices && (
        <RelatedServices 
          currentPage={pageName}
          title={relatedServicesTitle}
        />
      )}
    </div>
  );
}
