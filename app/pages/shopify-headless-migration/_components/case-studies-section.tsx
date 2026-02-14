'use client';

/**
 * Case Studies Section - Real Results with Metrics
 * Showcase successful projects with quantifiable outcomes
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Search, DollarSign } from 'lucide-react';

console.log('[Shopify-Headless] CaseStudiesSection component loaded');

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const caseStudies = [
    {
      title: 'Luxury Home Brand (US)',
      industry: 'Home Decor',
      location: '🇺🇸 United States',
      results: [
        { icon: <Clock className="h-5 w-5" />, metric: '+67%', label: 'Faster Load Speed' },
        { icon: <Search className="h-5 w-5" />, metric: '+35%', label: 'Organic Traffic' },
        { icon: <TrendingUp className="h-5 w-5" />, metric: '96', label: 'Lighthouse Score' }
      ],
      description: 'Migrated from Liquid theme to custom Next.js storefront with edge caching',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      title: 'D2C Skincare India',
      industry: 'Beauty & Wellness',
      location: '🇮🇳 India',
      results: [
        { icon: <TrendingUp className="h-5 w-5" />, metric: '95+', label: 'Core Web Vitals' },
        { icon: <Search className="h-5 w-5" />, metric: '20 days', label: 'Ranking Improvement' },
        { icon: <Clock className="h-5 w-5" />, metric: '-60%', label: 'Load Time' }
      ],
      description: 'Hydrogen-based headless build with Sanity CMS integration',
      color: 'from-[#00E0B8] to-emerald-500',
      bgGradient: 'from-[#00E0B8]/10 to-emerald-500/10 dark:from-[#00E0B8]/20 dark:to-emerald-500/20'
    },
    {
      title: 'Global Apparel Brand',
      industry: 'Fashion E-commerce',
      location: '🌍 Global',
      results: [
        { icon: <DollarSign className="h-5 w-5" />, metric: '₹40k/mo', label: 'Ad Spend Saved' },
        { icon: <TrendingUp className="h-5 w-5" />, metric: '+42%', label: 'Conversion Rate' },
        { icon: <Clock className="h-5 w-5" />, metric: '1.2s', label: 'Avg Page Load' }
      ],
      description: 'Multi-region Next.js build with Cloudflare edge deployment',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden"
      id="case-studies"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Hire Shopify Headless Expert <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Case Studies & Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from real projects. See how we've transformed e-commerce experiences.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.15) }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`h-full bg-gradient-to-br ${study.bgGradient} backdrop-blur-xl border-2 border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#00E0B8] transition-all`}>
                  
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${study.color}`}>
                    <div className="text-sm font-bold text-white/80 mb-1">{study.location}</div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {study.title}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                      {study.industry}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E0B8] to-cyan-400 flex items-center justify-center text-white">
                            {result.icon}
                          </div>
                          <div>
                            <div className="text-2xl font-black text-gray-900 dark:text-white">
                              {result.metric}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {result.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              🚀 <span className="font-bold text-gray-900 dark:text-white">Ready to see similar results?</span> Let's build your success story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
