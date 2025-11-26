/**
 * @fileoverview SEO-Optimized Breadcrumb Navigation
 * @description Breadcrumb component with structured data for better SEO
 * @version 1.0.0
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getParentPage } from '@/app/lib/seo/internal-linking';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component
 * Provides SEO-friendly breadcrumb navigation with structured data
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname if not provided
  const breadcrumbs: BreadcrumbItem[] = items || (() => {
    const paths = pathname.split('/').filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      crumbs.push({ name, url: currentPath });
    });
    
    return crumbs;
  })();
  
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-4 ${className}`}
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li 
              key={index}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {isLast ? (
                <span 
                  itemProp="name" 
                  className="text-gray-900 dark:text-white font-medium"
                >
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.url}
                    itemProp="item"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <span className="mx-2 text-gray-400">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
