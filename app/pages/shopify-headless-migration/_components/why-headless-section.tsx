'use client';

/**
 * Why Go Headless Section - Comparison Table
 * Traditional Shopify vs Headless Shopify (Next.js/Hydrogen)
 * 
 * Shows the dramatic advantages of going headless
 * Mobile-optimized comparison table with smooth animations
 */

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

console.log('[Shopify-Headless] WhyHeadlessSection component loaded');

export function WhyHeadlessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Comparison data
  const comparisons = [
    {
      feature: 'Rendering Speed',
      traditional: 'Slow Liquid rendering',
      headless: 'Blazing-fast React SSR + caching',
      impact: 'high'
    },
    {
      feature: 'Design Control',
      traditional: 'Limited design control',
      headless: '100% freedom with custom UI',
      impact: 'high'
    },
    {
      feature: 'Lighthouse Score',
      traditional: 'Poor scores (60-75)',
      headless: 'Core Web Vitals > 95',
      impact: 'high'
    },
    {
      feature: 'SEO Capabilities',
      traditional: 'SEO constraints',
      headless: 'Full control over metadata & routing',
      impact: 'medium'
    },
    {
      feature: 'Architecture',
      traditional: 'App bloat',
      headless: 'Clean modular micro-frontend',
      impact: 'medium'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    console.log('[Shopify-Headless] WhyHeadlessSection in view:', inView);
  }, [inView]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden"
      id="why-headless"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              💡 Why Go <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Headless</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The performance gap is dramatic. See why leading brands are making the switch.
            </p>
          </motion.div>

          {/* Comparison Table - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-[#1e293b] rounded-3xl border-2 border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl">
              
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-[#0F172A] dark:to-[#1e293b] border-b border-gray-200 dark:border-white/10">
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Feature
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-xl">
                    <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <span className="font-bold text-red-700 dark:text-red-300">Traditional Shopify</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00E0B8] to-cyan-400 rounded-xl shadow-lg">
                    <Check className="h-4 w-4 text-[#0F172A]" />
                    <span className="font-bold text-[#0F172A]">Headless Next.js</span>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 dark:divide-white/10">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="font-semibold text-gray-900 dark:text-white flex items-center">
                      {item.feature}
                      {item.impact === 'high' && (
                        <span className="ml-2 px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded">
                          HIGH IMPACT
                        </span>
                      )}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-center flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500 mr-2" />
                      {item.traditional}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold text-center flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#00E0B8] mr-2" />
                      {item.headless}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-[#1e293b] rounded-2xl border-2 border-gray-200 dark:border-white/10 p-6 shadow-lg"
              >
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  {item.feature}
                  {item.impact === 'high' && (
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded">
                      HIGH IMPACT
                    </span>
                  )}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                    <X className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-red-700 dark:text-red-300 mb-1">Traditional</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{item.traditional}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#00E0B8]/10 to-cyan-400/10 rounded-xl border border-[#00E0B8]/30">
                    <Check className="h-5 w-5 text-[#00E0B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#00E0B8] mb-1">Headless</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.headless}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-[#00E0B8]/10 to-cyan-400/10 dark:from-[#00E0B8]/20 dark:to-cyan-400/20 rounded-2xl border-2 border-[#00E0B8]/30">
              <ArrowRight className="h-6 w-6 text-[#00E0B8]" />
              <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                <span className="text-[#00E0B8]">2–4× faster</span> page loads = higher conversions, lower ads cost, and happier customers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
