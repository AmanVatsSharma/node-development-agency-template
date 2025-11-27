'use client';

/**
 * How It Works Section
 * 3-step process to build trust
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, FileSearch, Presentation } from 'lucide-react';

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Zap,
      number: '1',
      title: 'Run Free Scan',
      description: 'Enter your URL and get instant results in 60 seconds. No credit card required.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileSearch,
      number: '2',
      title: 'Book Detailed Audit',
      description: 'We crawl 50+ pages, run Lighthouse tests, backlink audit, and keyword gap analysis.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Presentation,
      number: '3',
      title: 'Receive Action Plan',
      description: 'Get prioritized report + 60-min strategy call + implementation roadmap to boost rankings.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            How Our Hire SEO Audit Expert Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From free scan to complete SEO transformation in three easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 -z-10" />
                )}

                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all h-full">
                  {/* Number Badge */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-2xl font-extrabold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className={`h-12 w-12 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
