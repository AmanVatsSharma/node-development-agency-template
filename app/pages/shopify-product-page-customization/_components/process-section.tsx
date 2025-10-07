'use client';

/**
 * @fileoverview Process Section - 5-Step Delivery Process
 * @description Transparent workflow with timeline visualization
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileText, Code, TestTube, Rocket, CheckCircle2 } from 'lucide-react';

console.log('[Shopify-Product-Page] ProcessSection component loaded');

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery Call & UX Audit',
    description: 'We analyze your current product page, understand your business goals, and identify conversion bottlenecks.',
    duration: 'Day 1',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    icon: FileText,
    title: 'Design Wireframe + Approval',
    description: 'Get a visual mockup of your new product page layout with all interactive elements mapped out.',
    duration: 'Days 2-3',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    icon: Code,
    title: 'Development in Staging Store',
    description: 'Our developers build your custom features using Liquid, JavaScript, and Shopify APIs in a safe environment.',
    duration: 'Days 4-10',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    icon: TestTube,
    title: 'Testing & Analytics Setup',
    description: 'Rigorous QA testing on all devices, plus integration of tracking pixels and analytics dashboards.',
    duration: 'Days 11-13',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Go Live + 14 Days Support',
    description: 'Seamless deployment to your live store with ongoing support to ensure everything runs smoothly.',
    duration: 'Days 14-28',
    color: 'from-[#FFB400] to-orange-500',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            🧭 Our <span className="text-[#FFB400]">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From discovery to deployment — a proven 5-step workflow
          </p>
        </motion.div>

        {/* Timeline - Desktop (Horizontal) */}
        <div className="hidden lg:block max-w-7xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 to-[#FFB400]" />

            {/* Steps */}
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <div className="flex flex-col items-center">
                    <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl mb-4 relative z-10`}>
                      <step.icon className="h-16 w-16 text-white" />
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-gray-900 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                        <span className="text-lg font-black text-gray-900 dark:text-white">{step.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                          ⏱️ {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile (Vertical) */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 to-[#FFB400]" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon Circle */}
                  <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl z-10`}>
                    <step.icon className="h-8 w-8 text-white" />
                    {/* Step Number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-black text-gray-900 dark:text-white">{step.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 px-3 py-1.5 rounded-full">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        ⏱️ {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              On-Time Delivery Guaranteed
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              We stick to deadlines. If we're late, you get a <span className="font-black text-green-600">10% discount</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] ProcessSection exported');
