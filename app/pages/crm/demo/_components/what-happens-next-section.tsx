'use client';

/**
 * @fileoverview What Happens Next Section - EnterpriseHero CRM Demo
 * @description 3-step process after demo request
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileCheck, Settings, Video, ArrowRight } from 'lucide-react';

console.log('[CRM-Demo] WhatHappensNextSection component loaded');

export function WhatHappensNextSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '1',
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Review Requirements',
      description: 'Our team reviews your submission and identifies the best modules and configurations for your business.',
      color: 'from-blue-500 to-cyan-500',
      time: '2-4 hours'
    },
    {
      number: '2',
      icon: <Settings className="h-8 w-8" />,
      title: 'Set Up Demo Environment',
      description: 'We configure a personalized demo instance on a dedicated subdomain with your selected modules and sample data.',
      color: 'from-purple-500 to-pink-500',
      time: '12-20 hours'
    },
    {
      number: '3',
      icon: <Video className="h-8 w-8" />,
      title: 'Schedule Walk-Through Call',
      description: 'You receive demo credentials and a calendar link to schedule a guided walk-through with our CRM specialist.',
      color: 'from-green-500 to-emerald-500',
      time: '24 hours'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="what-next"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              What Happens <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Next?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your personalized demo journey in 3 simple steps
            </p>
          </motion.div>

          {/* Steps - Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-20 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] origin-left"
              />

              <div className="grid grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all h-full">
                      
                      {/* Icon Circle */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg mb-6`}>
                        {step.icon}
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white font-black text-xl shadow-lg">
                        {step.number}
                      </div>

                      {/* Time Badge */}
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full border border-gray-200 dark:border-gray-700 mb-4">
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                          ⏱️ {step.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Connector (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 -right-6 text-gray-400 dark:text-gray-600">
                        <ArrowRight className="h-8 w-8" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps - Mobile */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
                  
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Time Badge */}
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full border border-gray-200 dark:border-gray-700 mb-2">
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                          ⏱️ {step.time}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                        {step.number}. {step.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#002F9E]/10 to-[#00C897]/10 rounded-2xl border border-[#FFD700]/30 shadow-lg">
              <p className="text-base font-bold text-gray-800 dark:text-gray-200">
                ⚡ Total time: <span className="text-[#00C897]">24 hours</span> from submission to demo access
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
