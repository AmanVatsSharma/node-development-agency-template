'use client';

/**
 * Integrations Section Component
 * Show Tools & Platform Integrations
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

console.log('[Google-Ads] IntegrationsSection component loaded');

export function IntegrationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] IntegrationsSection mounted');
    return () => console.log('[Google-Ads] IntegrationsSection unmounted');
  }, []);

  const integrations = [
    { name: 'Google Ads', color: 'from-blue-600 to-blue-700' },
    { name: 'Tag Manager', color: 'from-purple-600 to-purple-700' },
    { name: 'Analytics 4', color: 'from-orange-600 to-orange-700' },
    { name: 'Looker Studio', color: 'from-green-600 to-green-700' },
    { name: 'Zapier', color: 'from-yellow-600 to-orange-600' },
    { name: 'HubSpot', color: 'from-red-600 to-pink-600' },
    { name: 'Shopify', color: 'from-green-600 to-emerald-700' },
    { name: 'Meta Pixel', color: 'from-blue-600 to-indigo-700' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="integrations"
      role="region"
      aria-labelledby="integrations-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-4 sm:mb-5 border border-purple-200 dark:border-purple-800 text-sm sm:text-base">
            <span className="font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
              Integrations & Tools
            </span>
          </div>

          <h2
            id="integrations-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Advanced Google Ads Management Tools & Integrations
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just run ads — we build <span className="font-bold text-blue-600 dark:text-blue-400">full sales funnels that convert</span>
          </p>
        </motion.div>

        {/* Integrations Grid - MOBILE OPTIMIZED */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-100"
              >
                {/* Logo/Icon Placeholder */}
                <div className={`w-full aspect-square bg-gradient-to-br ${integration.color} rounded-xl mb-3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-black text-sm sm:text-base text-center px-2">
                    {integration.name.split(' ')[0]}
                  </span>
                </div>

                {/* Name */}
                <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white text-center">
                  {integration.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-6 sm:p-8 border-2 border-blue-200 dark:border-blue-700"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            <p className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
              Seamless Integrations
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We integrate with your existing marketing stack to create a unified, high-performing sales system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
