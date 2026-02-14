'use client';

/**
 * Case Studies Section Component
 * Real Results with ROI Metrics
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, IndianRupee, BarChart3, Building2, ShoppingBag, Laptop } from 'lucide-react';

console.log('[Google-Ads] CaseStudiesSection component loaded');

interface CaseStudy {
  icon: React.ReactNode;
  industry: string;
  location: string;
  result: string;
  metric: string;
  gradient: string;
  bgColor: string;
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] CaseStudiesSection mounted');
    return () => console.log('[Google-Ads] CaseStudiesSection unmounted');
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      icon: <Building2 className="h-8 w-8 sm:h-10 sm:w-10" />,
      industry: 'Real Estate Agency',
      location: 'Gurugram',
      result: '₹1.8 L spent → ₹18 L revenue in 45 days',
      metric: 'ROAS 10×',
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
    },
    {
      icon: <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10" />,
      industry: 'E-Commerce Store',
      location: 'Delhi',
      result: '320% increase in sales with Performance Max + remarketing',
      metric: '3.2× Growth',
      gradient: 'from-green-600 to-emerald-700',
      bgColor: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900'
    },
    {
      icon: <Laptop className="h-8 w-8 sm:h-10 sm:w-10" />,
      industry: 'SaaS Company',
      location: 'Bangalore',
      result: 'Cost per lead down 40% within 30 days',
      metric: '40% CPL ↓',
      gradient: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="case-studies"
      role="region"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Proven Results
            </span>
          </div>

          <h2
            id="case-studies-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Hire Google Ads Expert Case Studies & Portfolio
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data-driven campaigns that deliver <span className="font-bold text-blue-600 dark:text-blue-400">measurable ROI</span>
          </p>
        </motion.div>

        {/* Case Studies Grid - MOBILE OPTIMIZED */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-gradient-to-br ${study.bgColor} rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-100`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-br ${study.gradient} rounded-2xl mb-4 shadow-lg`}>
                <div className="text-white">
                  {study.icon}
                </div>
              </div>

              {/* Industry & Location */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-1">
                  {study.industry}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  📍 {study.location}
                </p>
              </div>

              {/* Result */}
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-relaxed">
                  {study.result}
                </p>
              </div>

              {/* Metric Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full shadow-lg`}>
                <TrendingUp className="h-4 w-4 text-white" />
                <span className="text-sm sm:text-base font-black text-white">
                  {study.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
