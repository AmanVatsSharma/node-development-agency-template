'use client';

/**
 * How It Works Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneForwarded, Brain, Database, UserCheck, BarChart3 } from 'lucide-react';

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const steps = [
    {
      icon: PhoneForwarded,
      title: 'Call Routing & Speech Recognition',
      description: 'AI detects caller intent instantly',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Smart Response Engine',
      description: 'Replies naturally via trained GPT + text-to-speech',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Logs every call, lead & appointment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserCheck,
      title: 'Human Fallback',
      description: 'Sends hot leads to your team instantly if needed',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track calls, leads, sentiment & ROI',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-5 border border-purple-200 dark:border-purple-800">
            <span className="font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide text-sm">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            How Our Hire AI Voice Agent Developer Works
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-2xl">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#0B1E39] to-[#FF7A00] flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-xl`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
