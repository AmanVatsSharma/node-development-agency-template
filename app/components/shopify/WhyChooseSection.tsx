'use client';

/**
 * WhyChooseSection Component
 * 
 * Comparison table showing why custom Shopify stores are better
 * Features:
 * - Animated comparison table
 * - Problem/Solution format
 * - Icons and visual hierarchy
 * - Mobile-responsive layout
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, AlertCircle, Sparkles } from 'lucide-react';

console.log('[WhyChooseSection] Component loaded');

interface Comparison {
  id: number;
  problem: string;
  solution: string;
}

const comparisons: Comparison[] = [
  {
    id: 1,
    problem: 'Generic look & low trust',
    solution: 'Premium custom UI/UX with brand personality',
  },
  {
    id: 2,
    problem: 'Poor conversions',
    solution: 'CRO-driven layout tested on 100+ brands',
  },
  {
    id: 3,
    problem: 'Slow loading',
    solution: 'Core Web Vitals < 2s',
  },
  {
    id: 4,
    problem: 'Hard to manage',
    solution: 'Automated flows + easy CMS',
  },
  {
    id: 5,
    problem: 'Weak mobile experience',
    solution: 'Mobile-first design with advanced interactions',
  },
];

const WhyChooseSection = () => {
  console.log('[WhyChooseSection] Rendering why choose section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B894]/10 to-emerald-500/10 border border-[#00B894]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-semibold text-gray-700">The Smart Choice</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              Custom Over Templates
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop settling for generic themes. Get a store built for your brand's success.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop view */}
          <div className="hidden md:block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Table header */}
            <div className="grid grid-cols-2 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="p-8 flex items-center gap-3 border-r border-gray-200">
                <div className="p-3 bg-red-50 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Template Store</h3>
                  <p className="text-sm text-gray-600">Common Problems</p>
                </div>
              </div>
              <div className="p-8 flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-[#00B894] to-emerald-500 rounded-xl">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Solution</h3>
                  <p className="text-sm text-gray-600">Premium Benefits</p>
                </div>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-2 border-t border-gray-100 hover:bg-gray-50/50 transition-colors"
              >
                {/* Problem */}
                <div className="p-6 border-r border-gray-100 flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-gray-700">{comparison.problem}</p>
                </div>

                {/* Solution */}
                <div className="p-6 flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{comparison.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Problem */}
                <div className="p-6 bg-red-50 border-b border-red-100">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-red-700 uppercase mb-1">Problem</p>
                      <p className="text-gray-900 font-medium">{comparison.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="p-6 bg-gradient-to-br from-[#00B894]/5 to-emerald-500/5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-[#00B894] uppercase mb-1">Our Solution</p>
                      <p className="text-gray-900 font-medium">{comparison.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 italic">
            💡 Don't let a generic template hold your brand back
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
