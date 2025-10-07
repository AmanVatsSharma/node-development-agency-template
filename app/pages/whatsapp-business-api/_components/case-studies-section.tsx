'use client';

/**
 * @fileoverview Case Studies Section
 * @description Real results from Indian businesses
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[CaseStudiesSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const caseStudies = [
    {
      company: 'FashionHub India',
      industry: 'E-commerce Fashion',
      size: '500+ daily orders',
      challenge: 'High cart abandonment rate and slow customer support response',
      solution: 'Implemented cart recovery automation and instant order tracking',
      results: [
        { metric: '+40%', label: 'Cart Recovery', icon: <TrendingUp /> },
        { metric: '85%', label: 'Customer Satisfaction', icon: <Users /> },
        { metric: '< 60s', label: 'Avg Response Time', icon: <Clock /> },
        { metric: '₹12L+', label: 'Monthly Revenue Recovered', icon: <DollarSign /> }
      ],
      gradient: 'from-[#25D366] to-[#128C7E]',
      testimonial: '"WhatsApp automation recovered ₹12L+ in abandoned carts monthly. Best ROI ever!"',
      author: 'Priya Sharma, Founder'
    },
    {
      company: 'HealthPlus Clinic',
      industry: 'Healthcare',
      size: '200+ appointments/day',
      challenge: '30% no-show rate and manual appointment confirmations',
      solution: 'Automated appointment reminders and confirmations 24h before',
      results: [
        { metric: '80%', label: 'Reduction in No-Shows', icon: <TrendingUp /> },
        { metric: '95%', label: 'Confirmation Rate', icon: <Users /> },
        { metric: '5h', label: 'Staff Time Saved/Day', icon: <Clock /> },
        { metric: '₹8L+', label: 'Annual Savings', icon: <DollarSign /> }
      ],
      gradient: 'from-[#FF7A00] to-[#FFB100]',
      testimonial: '"Our no-show rate dropped from 30% to 6%. The ROI paid for itself in 2 months!"',
      author: 'Dr. Rajesh Kumar, Director'
    },
    {
      company: 'TechSolutions Ltd',
      industry: 'B2B SaaS',
      size: '1000+ leads/month',
      challenge: 'Slow lead response time leading to lost opportunities',
      solution: 'Instant lead response bot with qualification questions',
      results: [
        { metric: '3×', label: 'Faster Lead Response', icon: <TrendingUp /> },
        { metric: '60%', label: 'Lead Qualification Rate', icon: <Users /> },
        { metric: '< 2min', label: 'First Response Time', icon: <Clock /> },
        { metric: '+45%', label: 'Sales Conversion', icon: <DollarSign /> }
      ],
      gradient: 'from-[#075E54] to-[#128C7E]',
      testimonial: '"We now respond to leads in under 2 minutes. Our close rate increased by 45%!"',
      author: 'Amit Verma, Sales Head'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="case-studies"
      role="region"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-full text-[#25D366] font-bold text-sm border border-[#25D366]/20">
                📊 Real Results
              </span>
            </div>
            <h2 
              id="case-studies-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Success Stories From
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                Indian Businesses
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See how WhatsApp automation transformed these businesses
            </p>
          </motion.div>

          {/* Case Studies */}
          <motion.div variants={fadeInUp} className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Left: Company Info & Challenge/Solution */}
                  <div>
                    {/* Company Header */}
                    <div className="mb-6">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.gradient} text-white rounded-full font-bold text-sm mb-3`}>
                        {study.industry}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                        {study.company}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-semibold">
                        {study.size}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="text-red-500">⚠️</span>
                        Challenge
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        Solution
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>

                    {/* Testimonial */}
                    <div className={`bg-gradient-to-r ${study.gradient} rounded-2xl p-6 text-white`}>
                      <p className="text-lg font-semibold mb-3 italic">
                        {study.testimonial}
                      </p>
                      <p className="text-sm opacity-90 font-bold">
                        — {study.author}
                      </p>
                    </div>
                  </div>

                  {/* Right: Results Grid */}
                  <div className="grid grid-cols-2 gap-4 content-start">
                    {study.results.map((result, rIndex) => (
                      <motion.div
                        key={rIndex}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 text-center"
                      >
                        <div className={`text-[#25D366] mb-3 flex justify-center`}>
                          {result.icon}
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                          {result.metric}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                🚀 Want Similar Results for Your Business?
              </p>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Let's discuss how WhatsApp automation can transform your operations
              </p>
              <a 
                href="#lead-form"
                className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Get Your Custom Strategy Now
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] CaseStudiesSection component loaded');
