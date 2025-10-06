'use client';

/**
 * Why Choose Us Section Component
 * Key Differentiators & Expertise
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, DollarSign, Zap, Bot, Lock } from 'lucide-react';

console.log('[Google-Ads] WhyChooseUsSection component loaded');

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] WhyChooseUsSection mounted');
    return () => console.log('[Google-Ads] WhyChooseUsSection unmounted');
  }, []);

  const reasons: Reason[] = [
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Certified Google Ads Experts',
      description: '10+ Years Combined Experience',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'ROI-Obsessed Approach',
      description: 'No vanity metrics',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Fast Optimization Cycles',
      description: 'Data reviewed every 48 hours',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'AI + Automation Built In',
      description: 'You already have your system!',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: <Lock className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Transparent Reporting',
      description: 'You own all accounts & data',
      gradient: 'from-indigo-600 to-indigo-700'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="why-choose-us"
      role="region"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Why Rajapragya Bharat
            </span>
          </div>

          <h2
            id="why-choose-us-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Why Choose Us
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            We don't just manage ads — we engineer <span className="font-bold text-blue-600 dark:text-blue-400">profitable systems</span>
          </p>
        </motion.div>

        {/* Reasons Grid - MOBILE OPTIMIZED */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-br ${reason.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2">
            "We don't guess. We analyze, execute & scale."
          </p>
          <p className="text-sm sm:text-base text-blue-100">
            — Rajapragya Bharat Pvt. Ltd.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
