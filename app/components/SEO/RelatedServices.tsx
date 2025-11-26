/**
 * @fileoverview Related Services Component for Internal Linking
 * @description Displays related services with keyword-rich links for SEO
 * @version 1.0.0
 */

'use client';

import Link from 'next/link';
import { generateRelatedServicesSection } from '@/app/lib/seo/internal-linking';

interface RelatedServicesProps {
  currentPage: string;
  title?: string;
  className?: string;
}

/**
 * Related Services Component
 * Displays related services with SEO-optimized internal links
 */
export function RelatedServices({ 
  currentPage, 
  title = 'Related Services',
  className = '' 
}: RelatedServicesProps) {
  const relatedServices = generateRelatedServicesSection(currentPage);
  
  if (relatedServices.length === 0) {
    return null;
  }
  
  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our related services to find the perfect solution for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
