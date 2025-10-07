'use client';

/**
 * @fileoverview Implementation Process Section - EnterpriseHero CRM
 * @description Horizontal timeline with 5 steps
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  Monitor, 
  Settings, 
  Database, 
  Rocket,
  Check
} from 'lucide-react';

console.log('[CRM] ImplementationSection component loaded');

export function ImplementationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Consultation',
      description: 'We understand your business needs, existing workflows, and customization requirements.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2',
      icon: <Monitor className="h-8 w-8" />,
      title: 'Demo Setup',
      description: 'Get a personalized demo instance configured with your modules and sample data.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '3',
      icon: <Settings className="h-8 w-8" />,
      title: 'Customization',
      description: 'We tailor fields, forms, workflows, and branding to match your exact requirements.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '4',
      icon: <Database className="h-8 w-8" />,
      title: 'Migration',
      description: 'Seamless data import from your existing systems with zero downtime and data integrity.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      number: '5',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Training & Go-Live',
      description: 'Comprehensive team training, documentation, and support for smooth launch.',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="process"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full border border-[#FFD700]/40 mb-6">
              <Rocket className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Proven Delivery Process</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Implementation <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Process</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From consultation to go-live in 4-6 weeks. Transparent, tested, and tailored to you.
            </p>
          </motion.div>

          {/* Timeline - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] origin-left"
              />

              <div className="grid grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg mb-4`}>
                        {step.icon}
                      </div>

                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white font-black text-xl shadow-lg">
                        {step.number}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline - Mobile */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Number + Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
