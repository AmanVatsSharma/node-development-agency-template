'use client';

/**
 * Our Process Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const steps = [
    {
      step: '1',
      title: 'Consultation & Voice Mapping',
      description: 'Define voice tone, languages, and use cases'
    },
    {
      step: '2',
      title: 'Script & Intent Training',
      description: 'Custom conversation flows for your business'
    },
    {
      step: '3',
      title: 'Integration',
      description: 'Connect with your phone number, CRM or Google Sheet'
    },
    {
      step: '4',
      title: 'Testing & Tuning',
      description: 'Simulate real calls until AI passes the human test'
    },
    {
      step: '5',
      title: 'Launch & Support',
      description: 'Ongoing training + monthly improvements'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="process"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-5 border border-indigo-200 dark:border-indigo-800">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide text-sm">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            5 Steps to Your AI Voice Agent
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B1E39] via-[#FF7A00] to-[#0B1E39]" />

            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0B1E39] to-[#FF7A00] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-[#FF7A00]/40 relative z-10">
                    <span className="text-white font-black text-2xl">{item.step}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
