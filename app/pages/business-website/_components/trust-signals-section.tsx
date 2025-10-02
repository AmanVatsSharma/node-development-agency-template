'use client';

/**
 * Trust Signals Section
 * Displays social proof, client count, and trust indicators
 * Positioned immediately after hero for maximum impact
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';

console.log('[Business-Website] TrustSignalsSection component loaded');

export function TrustSignalsSection() {
  useEffect(() => {
    console.log('[Business-Website] TrustSignalsSection mounted');
    return () => console.log('[Business-Website] TrustSignalsSection unmounted');
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Award, value: '1000+', label: 'Projects Delivered', color: 'text-purple-600 dark:text-purple-400' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', color: 'text-green-600 dark:text-green-400' },
    { icon: Shield, value: '100%', label: 'Secure & Reliable', color: 'text-indigo-600 dark:text-indigo-400' },
  ];

  return (
    <section 
      className="py-6 sm:py-8 md:py-12 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800"
      role="region"
      aria-label="Trust indicators"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-2 sm:mb-3">
                  <Icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${stat.color}`} />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Trust Elements - Compact on Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
            <span className="text-green-600 dark:text-green-400 font-semibold">✓</span>
            <span className="whitespace-nowrap">GST Registered</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">✓</span>
            <span className="whitespace-nowrap">100% Secure</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 rounded-full border border-purple-200 dark:border-purple-800">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">✓</span>
            <span className="whitespace-nowrap">Money-Back</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

