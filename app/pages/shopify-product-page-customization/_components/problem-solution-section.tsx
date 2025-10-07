'use client';

/**
 * @fileoverview Problem-Solution Matrix Section
 * @description Shows why your product page matters with animated statistics
 * @version 1.0.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

console.log('[Shopify-Product-Page] ProblemSolutionSection component loaded');

const problems = [
  {
    problem: 'Generic layout',
    result: 'Low engagement & trust',
    icon: AlertCircle,
    color: 'red',
  },
  {
    problem: 'No personalization',
    result: 'Drop-offs before checkout',
    icon: AlertCircle,
    color: 'orange',
  },
  {
    problem: 'Slow performance',
    result: 'Lost conversions',
    icon: AlertCircle,
    color: 'red',
  },
  {
    problem: 'Missing details',
    result: 'Customer doubts increase',
    icon: AlertCircle,
    color: 'yellow',
  },
  {
    problem: 'No upsell logic',
    result: 'Average order value flatlines',
    icon: AlertCircle,
    color: 'red',
  },
];

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [counters, setCounters] = useState({ engagement: 0, conversions: 0, aov: 0 });

  useEffect(() => {
    if (inView) {
      console.log('[Shopify-Product-Page] ProblemSolutionSection in view - animating counters');
      
      const interval = setInterval(() => {
        setCounters(prev => ({
          engagement: Math.min(prev.engagement + 2, 45),
          conversions: Math.min(prev.conversions + 1, 28),
          aov: Math.min(prev.aov + 1, 35),
        }));
      }, 30);

      setTimeout(() => clearInterval(interval), 2000);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="why-it-matters"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      role="region"
      aria-labelledby="problem-solution-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="problem-solution-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            💡 Why Your Product Page <span className="text-[#FFB400]">Matters</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stop losing sales to poor product page design. Here's what's costing you money:
          </p>
        </motion.div>

        {/* Problems Table - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 p-6">
              <div className="text-white font-black text-lg">Problem</div>
              <div className="text-center">
                <ArrowRight className="h-6 w-6 text-[#FFB400] mx-auto" />
              </div>
              <div className="text-white font-black text-lg text-right">Result</div>
            </div>

            {/* Table Rows */}
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                  <span className="font-bold text-gray-900 dark:text-white">{item.problem}</span>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-right font-semibold text-red-600 dark:text-red-400">
                  {item.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Problems Cards - Mobile */}
        <div className="md:hidden space-y-4 mb-12">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-start gap-3 mb-3">
                <item.icon className={`h-5 w-5 text-${item.color}-600 flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <div className="font-bold text-gray-900 dark:text-white mb-1">{item.problem}</div>
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-semibold">{item.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  ✨ We fix all of that — with strategic design + intelligent interactions.
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Transform your boring product page into a conversion machine
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-wide">Engagement</span>
            </div>
            <div className="text-5xl font-black mb-1">+{counters.engagement}%</div>
            <p className="text-blue-100 text-sm">More time on page</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-wide">Conversions</span>
            </div>
            <div className="text-5xl font-black mb-1">+{counters.conversions}%</div>
            <p className="text-green-100 text-sm">Add-to-cart rate</p>
          </div>

          <div className="bg-gradient-to-br from-[#FFB400] to-orange-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-wide">AOV Boost</span>
            </div>
            <div className="text-5xl font-black mb-1">+{counters.aov}%</div>
            <p className="text-orange-100 text-sm">Order value increase</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] ProblemSolutionSection exported');
