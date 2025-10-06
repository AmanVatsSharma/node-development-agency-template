'use client';

/**
 * Process Section Component
 * Our Proven 5-Step System
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileText, Rocket, TrendingUp, BarChart3 } from 'lucide-react';

console.log('[Google-Ads] ProcessSection component loaded');

interface ProcessStep {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] ProcessSection mounted');
    return () => console.log('[Google-Ads] ProcessSection unmounted');
  }, []);

  const steps: ProcessStep[] = [
    {
      step: 1,
      icon: <Search className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Audit & Strategy Call',
      description: 'We review your current ads + competitors.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Blueprint Setup',
      description: 'Define goals, budgets, and target personas.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      step: 3,
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Campaign Launch',
      description: 'Build optimized campaigns with custom tracking.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      step: 4,
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Optimize & Scale',
      description: 'A/B testing ads & keywords every week.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      step: 5,
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Monthly ROI Reporting',
      description: 'Show spend → leads → sales clarity.',
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950"
      id="process"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-indigo-200 dark:border-indigo-800 text-sm sm:text-base">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              Our Proven System
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            How We Drive Results
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our battle-tested 5-step process to transform your Google Ads performance
          </p>
        </motion.div>

        {/* Process Steps - MOBILE OPTIMIZED */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-blue-500 shadow-lg">
                      <span className="text-sm font-black text-blue-600 dark:text-blue-400">{step.step}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-300 to-blue-500 dark:from-blue-700 dark:to-blue-500" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
