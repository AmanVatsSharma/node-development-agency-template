'use client';

/**
 * Process Section - 6-Step Workflow
 * Transparent workflow from consultation to deployment
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileCode, Code, TestTube, Rocket, GraduationCap } from 'lucide-react';

console.log('[Shopify-Headless] ProcessSection component loaded');

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const steps = [
    {
      number: '01',
      icon: <Search className="h-8 w-8" />,
      title: 'Architecture Audit & Consultation',
      description: 'Deep-dive analysis of your current Shopify store, requirements gathering, and technical feasibility assessment.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: <FileCode className="h-8 w-8" />,
      title: 'Tech Stack Blueprint',
      description: 'Detailed architecture planning, API design, data modeling, and performance optimization strategy.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      number: '03',
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Build custom Next.js/Hydrogen storefront with React components, state management, and routing.',
      color: 'from-[#00E0B8] to-emerald-500'
    },
    {
      number: '04',
      icon: <TestTube className="h-8 w-8" />,
      title: 'Integration & Testing',
      description: 'Connect all APIs, payment gateways, analytics tools, and comprehensive QA testing across devices.',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '05',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Deployment',
      description: 'Production deployment on Vercel/Cloudflare/AWS with edge caching, CDN setup, and monitoring.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      number: '06',
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Handover + Training + Support',
      description: 'Complete documentation, team training sessions, knowledge transfer, and ongoing support package.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden"
      id="process"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              🧭 Our <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Systematic, transparent workflow from consultation to launch
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + (index * 0.1) }}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Large Number Background */}
                    <div className="absolute -top-4 -left-4 text-8xl font-black text-gray-100 dark:text-white/5 select-none">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl`}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-[#1e293b] border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 mt-20 w-[2px] h-24 bg-gradient-to-b from-[#00E0B8] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline Visualization (Mobile) */}
          <div className="md:hidden relative mt-8">
            <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00E0B8] via-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
