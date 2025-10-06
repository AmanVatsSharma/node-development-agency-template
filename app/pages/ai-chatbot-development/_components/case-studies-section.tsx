'use client';

/**
 * Case Studies Section
 * Real Results from Real Businesses
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Phone, Award } from 'lucide-react';

console.log('[AI-Chatbot-Dev] CaseStudiesSection component loaded');

interface CaseStudy {
  title: string;
  company: string;
  metric: string;
  metricValue: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] CaseStudiesSection mounted');
    return () => console.log('[AI-Chatbot-Dev] CaseStudiesSection unmounted');
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      title: 'E-Commerce Store in Delhi',
      company: 'Fashion Retail',
      metric: 'More Leads',
      metricValue: '+215%',
      description: 'Within 14 days. Bot handled 3k+ queries autonomously.',
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Education Startup',
      company: 'EdTech Platform',
      metric: 'Demo Bookings',
      metricValue: '+40%',
      description: 'Increase through WhatsApp AI Assistant.',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real Estate Firm',
      company: 'Property Solutions',
      metric: 'Call Reduction',
      metricValue: '-60%',
      description: 'Manual calls reduced within first week.',
      icon: <Phone className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500'
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <Award className="h-4 w-4" />
              Real Results
            </span>
          </div>

          <h2
            id="case-studies-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Success Stories
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real results — powered by AI
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {study.icon}
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}>
                    {study.metricValue}
                  </div>
                  <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {study.metric}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {study.title}
                </h3>

                {/* Company */}
                <div className="text-sm text-[#FFB100] font-semibold mb-3">
                  {study.company}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold">
            Ready to write your success story? 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
