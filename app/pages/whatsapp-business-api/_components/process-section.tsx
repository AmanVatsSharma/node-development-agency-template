'use client';

/**
 * @fileoverview Process Section
 * @description 5-step implementation process with timeline
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  CheckCircle, 
  Code, 
  TestTube, 
  Rocket,
  Clock,
  ArrowRight
} from 'lucide-react';

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[ProcessSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const steps = [
    {
      number: 1,
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Consultation & Demo',
      duration: 'Day 1',
      description: 'Understand your needs',
      details: [
        'Free 30-minute strategy call',
        'Review your current process',
        'Identify automation opportunities',
        'Live demo of WhatsApp automation',
        'Custom recommendations'
      ],
      color: 'from-[#25D366] to-[#128C7E]'
    },
    {
      number: 2,
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Verification & API Setup',
      duration: 'Day 2-3',
      description: 'We handle all Meta approvals',
      details: [
        'Facebook Business Manager setup',
        'WhatsApp Business Account creation',
        'Official verification process',
        'Green tick approval',
        'Phone number configuration'
      ],
      color: 'from-[#FF7A00] to-[#FFB100]'
    },
    {
      number: 3,
      icon: <Code className="h-6 w-6" />,
      title: 'Automation Buildout',
      duration: 'Day 4-5',
      description: 'Custom workflows & bot logic',
      details: [
        'Design conversation flows',
        'Build automation workflows',
        'Configure triggers & responses',
        'CRM/website integration',
        'Payment gateway setup (if needed)'
      ],
      color: 'from-[#075E54] to-[#128C7E]'
    },
    {
      number: 4,
      icon: <TestTube className="h-6 w-6" />,
      title: 'Testing & Go Live',
      duration: 'Day 6',
      description: 'Fully tested, monitored launch',
      details: [
        'End-to-end testing',
        'Quality assurance checks',
        'Load testing',
        'Staging environment review',
        'Production deployment'
      ],
      color: 'from-[#FFB100] to-[#FF7A00]'
    },
    {
      number: 5,
      icon: <Rocket className="h-6 w-6" />,
      title: 'Ongoing Support',
      duration: 'Continuous',
      description: 'Monthly insights & improvements',
      details: [
        'Performance monitoring',
        'Monthly analytics reports',
        'Optimization recommendations',
        '24/7 technical support',
        'Regular updates & new features'
      ],
      color: 'from-[#25D366] to-[#075E54]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="process"
      role="region"
      aria-labelledby="process-heading"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7A00]/10 rounded-full text-[#FF7A00] font-bold text-sm border border-[#FF7A00]/20">
                <Clock className="h-4 w-4" />
                Simple 5-Step Process
              </span>
            </div>
            <h2 
              id="process-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              From Setup to Success
              <br />
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFB100] bg-clip-text text-transparent">
                in Just 48 Hours
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We handle everything so you can focus on your business
            </p>
          </motion.div>

          {/* Timeline for Desktop */}
          <motion.div 
            variants={fadeInUp}
            className="hidden lg:block relative mb-12"
          >
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#FF7A00] to-[#075E54]" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] transition-all"
                  >
                    {/* Number Badge */}
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mt-6 mb-4 h-12 w-12 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mx-auto`}>
                      {step.icon}
                    </div>

                    {/* Duration */}
                    <div className="text-center mb-3">
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300">
                        {step.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-[#25D366] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 -right-6 text-gray-300 dark:text-gray-600">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline for Mobile/Tablet */}
          <motion.div 
            variants={fadeInUp}
            className="lg:hidden space-y-8 relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#25D366] via-[#FF7A00] to-[#075E54]" />

            {steps.map((step, index) => (
              <div key={index} className="relative pl-20">
                {/* Number Badge */}
                <div className={`absolute left-2 h-12 w-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl shadow-lg z-10`}>
                  {step.number}
                </div>

                {/* Step Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-6 w-6" />
                <span className="text-xl md:text-2xl font-bold">
                  ⚡ Fast-Track Setup Available
                </span>
              </div>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Need it even faster? We can complete setup in 24 hours for urgent projects.
              </p>
              <a 
                href="#lead-form"
                className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Start Your WhatsApp Automation Today
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] ProcessSection component loaded');
