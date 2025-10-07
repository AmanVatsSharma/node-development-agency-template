'use client';

/**
 * Add-Ons Section - Premium Additional Services
 * Optional enhancements for the headless migration
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Zap, BarChart3, Globe2, Building2, Plus } from 'lucide-react';

console.log('[Shopify-Headless] AddOnsSection component loaded');

export function AddOnsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const addOns = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Headless CMS',
      subtitle: 'Sanity / Contentful',
      description: 'Content management freedom with visual editors',
      price: '+ ₹40k - ₹80k'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'GraphQL API Optimization',
      description: 'Advanced caching and query optimization',
      price: '+ ₹30k - ₹50k'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics Dashboard',
      subtitle: 'PostHog / Mixpanel',
      description: 'Real-time insights and conversion tracking',
      price: '+ ₹50k - ₹1L'
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: 'Multilingual / Multi-currency',
      description: 'Global reach with localization',
      price: '+ ₹60k - ₹1.2L'
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'B2B Shopify API',
      description: 'Wholesale and bulk ordering features',
      price: '+ ₹80k - ₹1.5L'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-[#1e293b] dark:to-[#0F172A]"
      id="add-ons"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              ⚡ Add<span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">-Ons</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enhance your headless commerce with premium features
            </p>
          </motion.div>

          {/* Add-Ons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#00E0B8] transition-all">
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E0B8] to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
                    {addon.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {addon.title}
                  </h3>
                  {addon.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{addon.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {addon.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-lg font-black text-[#00E0B8]">
                      {addon.price}
                    </span>
                    <Plus className="h-5 w-5 text-gray-400 group-hover:text-[#00E0B8] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              💡 <span className="font-bold text-gray-900 dark:text-white">Need custom features?</span> We build tailored solutions for your unique requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
