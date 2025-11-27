'use client';

/**
 * @fileoverview Case Studies Section - Success Stories with Metrics
 * @description Real client results with before/after comparisons
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Zap, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Product-Page] CaseStudiesSection component loaded');

const caseStudies = [
  {
    id: 1,
    industry: 'Fashion Apparel',
    metric: '+28% Add-to-Cart Rate',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    before: 'Generic product page with basic image gallery',
    after: 'Interactive variant selector + size guide + real-time stock alerts',
    result: 'Increased add-to-cart rate by 28% in first month',
    stats: [
      { label: 'Add-to-Cart', value: '+28%', icon: TrendingUp },
      { label: 'Page Time', value: '+45%', icon: Zap },
      { label: 'Revenue', value: '+₹2.3L', icon: DollarSign },
    ],
  },
  {
    id: 2,
    industry: 'Home Decor',
    metric: '+17% AOV Increase',
    icon: DollarSign,
    color: 'from-blue-500 to-indigo-600',
    before: 'No upsell mechanisms or bundle offers',
    after: '"Bundle & Save" widget + smart cross-sells in cart drawer',
    result: 'Average order value jumped 17% with bundle purchases',
    stats: [
      { label: 'AOV Boost', value: '+17%', icon: DollarSign },
      { label: 'Bundle Sales', value: '+42%', icon: TrendingUp },
      { label: 'Repeat Rate', value: '+23%', icon: Zap },
    ],
  },
  {
    id: 3,
    industry: 'Electronics',
    metric: '+40% Faster Load Speed',
    icon: Zap,
    color: 'from-[#FFB400] to-orange-500',
    before: 'Heavy theme with unoptimized images and scripts',
    after: 'Custom Liquid optimization + lazy loading + CDN integration',
    result: 'Page load time reduced from 4.2s to 2.5s',
    stats: [
      { label: 'Load Speed', value: '-40%', icon: Zap },
      { label: 'Bounce Rate', value: '-32%', icon: TrendingUp },
      { label: 'Mobile Score', value: '95/100', icon: Zap },
    ],
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStudy, setActiveStudy] = useState(0);

  const nextStudy = () => {
    console.log('[Shopify-Product-Page] Next case study');
    setActiveStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    console.log('[Shopify-Product-Page] Previous case study');
    setActiveStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[activeStudy];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      role="region"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            Hire Shopify Customization Expert <span className="text-[#FFB400]">Case Studies & Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real results from real businesses. Here's what we achieved for our clients:
          </p>
        </motion.div>

        {/* Case Study Carousel */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeStudy}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentStudy.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                <currentStudy.icon className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {currentStudy.industry}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                  {currentStudy.metric}
                </h3>
              </div>
            </div>

            {/* Before/After */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-l-4 border-red-500">
                <div className="text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-wide mb-3">
                  ❌ Before
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentStudy.before}
                </p>
              </div>

              {/* After */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-l-4 border-green-500">
                <div className="text-xs font-black text-green-600 dark:text-green-400 uppercase tracking-wide mb-3">
                  ✅ After
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentStudy.after}
                </p>
              </div>
            </div>

            {/* Result */}
            <div className={`bg-gradient-to-r ${currentStudy.color} rounded-2xl p-6 mb-8 text-center shadow-xl`}>
              <p className="text-xl md:text-2xl font-black text-white">
                🎯 {currentStudy.result}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentStudy.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border-2 border-gray-200 dark:border-gray-700"
                >
                  <stat.icon className="h-8 w-8 text-gray-900 dark:text-white mx-auto mb-2" />
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStudy}
              className="h-12 w-12 rounded-full"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStudy(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === activeStudy
                      ? 'w-8 bg-[#FFB400]'
                      : 'w-3 bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStudy}
              className="h-12 w-12 rounded-full"
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] CaseStudiesSection exported');
