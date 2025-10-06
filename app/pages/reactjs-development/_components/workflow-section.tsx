'use client';

/**
 * Workflow Section
 * Project timeline and process
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, PenTool, Code2, TestTube, Rocket } from 'lucide-react';

console.log('[ReactJS-Dev] WorkflowSection component loaded');

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

export function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] WorkflowSection mounted');
    return () => console.log('[ReactJS-Dev] WorkflowSection unmounted');
  }, []);

  const steps: Step[] = [
    {
      number: '1',
      icon: Lightbulb,
      title: 'Discovery & Ideation',
      description: 'Understanding your vision, goals, and requirements',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      number: '2',
      icon: PenTool,
      title: 'Wireframes & Design',
      description: 'Creating intuitive UI/UX designs and prototypes',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '3',
      icon: Code2,
      title: 'React Development',
      description: 'Building your app with clean, scalable React code',
      gradient: 'from-[#61DAFB] to-[#00C897]'
    },
    {
      number: '4',
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Rigorous testing for bugs, performance, and security',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '5',
      icon: Rocket,
      title: 'Launch & Maintenance',
      description: 'Deploying your app and providing ongoing support',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="workflow"
      role="region"
      aria-labelledby="workflow-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#00C897] text-sm sm:text-base">
            <span className="font-bold text-[#00C897] dark:text-[#00C897] uppercase tracking-wide">
              Our Process
            </span>
          </div>

          <h2
            id="workflow-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Project Workflow
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 mb-6">
            We follow agile methodology — every 7 days, you see your project growing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Timeline, Mobile: Vertical */}
          <div className="space-y-8 lg:space-y-0 lg:flex lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative lg:flex-1"
                >
                  {/* Connector Line - Mobile Only */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 lg:hidden" />
                  )}

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-2xl transition-all duration-300">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} mb-4 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rotate-45" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
