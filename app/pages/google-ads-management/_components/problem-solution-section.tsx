'use client';

/**
 * Problem/Solution Section Component
 * Addresses common Google Ads pain points and our solutions
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, Target, TrendingUp, Settings, BarChart3 } from 'lucide-react';

console.log('[Google-Ads] ProblemSolutionSection component loaded');

interface ProblemSolution {
  icon: React.ReactNode;
  problem: string;
  solution: string;
}

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] ProblemSolutionSection mounted');
    return () => console.log('[Google-Ads] ProblemSolutionSection unmounted');
  }, []);

  const problems: ProblemSolution[] = [
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
      problem: 'Wasting budget on broad keywords',
      solution: 'Precision Targeting + Negative Keyword Filters'
    },
    {
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
      problem: 'Low CTR & poor ad copy',
      solution: 'Conversion-optimized Ad Copy & Landing Pages'
    },
    {
      icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
      problem: 'Irregular optimization',
      solution: 'Weekly Data-Driven Optimization'
    },
    {
      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
      problem: 'No ROI tracking',
      solution: 'Full Analytics & Call Tracking Setup'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
      id="problems"
      role="region"
      aria-labelledby="problems-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border border-red-200 dark:border-red-800 text-sm sm:text-base">
            <span className="font-bold text-red-700 dark:text-red-300 uppercase tracking-wide">
              The Problem We Solve
            </span>
          </div>

          <h2
            id="problems-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Stop Throwing Money Away
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Most agencies run ads. <span className="font-bold text-blue-600 dark:text-blue-400">We run profitable systems.</span>
          </p>
        </motion.div>

        {/* Problem/Solution Grid - MOBILE OPTIMIZED */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Problem Side - Red Theme */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg flex-shrink-0">
                        <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-wide">
                          Common Issue
                        </div>
                        <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                          {item.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solution Side - Green/Blue Theme */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/40 dark:to-green-900/40 rounded-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide flex items-center gap-1">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                          Our Solution
                        </div>
                        <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
          className="text-center mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-black text-white">
            "Most agencies run ads. We run <span className="text-yellow-400">profitable systems</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
