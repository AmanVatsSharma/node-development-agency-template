'use client';

/**
 * @fileoverview Use Cases Section
 * @description Industry-specific WhatsApp automation use cases
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShoppingBag, 
  Stethoscope, 
  Briefcase, 
  Building2,
  Smartphone
} from 'lucide-react';

export function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[UseCasesSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const useCases = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      emoji: '🛒',
      title: 'E-commerce',
      gradient: 'from-[#25D366] to-[#128C7E]',
      applications: [
        'Cart recovery automation',
        'Order tracking updates',
        'Product recommendations',
        'Flash sale notifications',
        'Customer feedback collection'
      ],
      result: '40% increase in cart recovery'
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      emoji: '🏥',
      title: 'Clinics & Salons',
      gradient: 'from-[#FF7A00] to-[#FFB100]',
      applications: [
        'Appointment confirmations',
        'Reminder notifications (24h before)',
        'Follow-up care messages',
        'Prescription refill reminders',
        'Customer satisfaction surveys'
      ],
      result: '80% reduction in no-shows'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      emoji: '🧾',
      title: 'Service Providers',
      gradient: 'from-[#075E54] to-[#128C7E]',
      applications: [
        'Lead follow-ups',
        'Quote/invoice delivery',
        'Service completion updates',
        'Payment reminders',
        'Referral request automation'
      ],
      result: '3× faster lead response'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      emoji: '🏢',
      title: 'Enterprises',
      gradient: 'from-[#FFB100] to-[#FF7A00]',
      applications: [
        'Customer care automation',
        'Ticket status updates',
        'Multi-department routing',
        'SLA monitoring',
        'Escalation workflows'
      ],
      result: '60% reduction in support costs'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      emoji: '📲',
      title: 'Agencies / SaaS',
      gradient: 'from-[#25D366] to-[#075E54]',
      applications: [
        'Onboarding automation',
        'User activation sequences',
        'Feature adoption nudges',
        'Renewal reminders',
        'Support ticket creation'
      ],
      result: '50% better user activation'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="use-cases"
      role="region"
      aria-labelledby="use-cases-heading"
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
                🎯 Industry Solutions
              </span>
            </div>
            <h2 
              id="use-cases-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              WhatsApp Automation
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                For Every Industry
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tailored solutions that drive results in your specific business
            </p>
          </motion.div>

          {/* Use Cases Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] dark:hover:border-[#25D366] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${useCase.gradient} text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {useCase.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>

                {/* Applications List */}
                <ul className="space-y-2 mb-6">
                  {useCase.applications.map((app, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-[#25D366] font-bold mt-0.5">→</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                {/* Result Badge */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${useCase.gradient} text-white rounded-full text-sm font-bold shadow-md`}>
                  📈 {useCase.result}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don't See Your Industry? We Got You Covered!
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Every business is unique. We'll create a custom WhatsApp automation solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form"
                  className="inline-block px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  Get Custom Solution
                </a>
                <a 
                  href="#contact"
                  className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] UseCasesSection component loaded');
