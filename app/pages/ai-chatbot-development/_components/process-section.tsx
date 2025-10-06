'use client';

/**
 * Process Section - How We Deliver
 * 5-Step Process
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Workflow, Brain, TestTube, Rocket } from 'lucide-react';

console.log('[AI-Chatbot-Dev] ProcessSection component loaded');

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] ProcessSection mounted');
    return () => console.log('[AI-Chatbot-Dev] ProcessSection unmounted');
  }, []);

  const steps: ProcessStep[] = [
    {
      number: '1',
      icon: <Target className="h-8 w-8" />,
      title: 'Strategy & Use-Case Mapping',
      description: 'We identify business goals, customer pain points, and define chatbot personality.'
    },
    {
      number: '2',
      icon: <Workflow className="h-8 w-8" />,
      title: 'Conversation Flow Design',
      description: 'UX-driven scripts that sound human and sell.'
    },
    {
      number: '3',
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Training & Integration',
      description: 'Connect to OpenAI/Claude, CRM, website, or WhatsApp API.'
    },
    {
      number: '4',
      icon: <TestTube className="h-8 w-8" />,
      title: 'Testing & Tuning',
      description: 'We fine-tune until your chatbot feels alive.'
    },
    {
      number: '5',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Deployment & Support',
      description: 'Launch, monitor, and keep optimizing with analytics.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="process"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Our Process
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            How We Deliver
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to launch in 5 strategic steps
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Number Badge */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0A2540]/80 flex items-center justify-center border-4 border-[#FFB100] shadow-2xl">
                      <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                          {step.number}
                        </div>
                        <div className="text-[#FFB100]">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting Line (except last) */}
                    {index !== steps.length - 1 && (
                      <div className="hidden sm:block absolute top-24 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[#FFB100] to-transparent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl border-2 border-green-500 dark:border-green-600">
            <Rocket className="h-6 w-6 text-green-600 dark:text-green-400" />
            <span className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">
              ⚡ Average delivery: 7–15 days
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
