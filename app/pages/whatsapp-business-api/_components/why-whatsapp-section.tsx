'use client';

/**
 * @fileoverview Why WhatsApp Section
 * @description Comparison of WhatsApp vs Email with statistics
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Users,
  CheckCircle2,
  X
} from 'lucide-react';

export function WhyWhatsAppSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[WhyWhatsAppSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const stats = [
    {
      metric: '98%',
      label: 'Message Open Rate',
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: 'text-[#25D366]'
    },
    {
      metric: '10×',
      label: 'More Than Email',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-[#FF7A00]'
    },
    {
      metric: '24/7',
      label: 'Automated Support',
      icon: <Clock className="h-6 w-6" />,
      color: 'text-[#075E54]'
    },
    {
      metric: '2B+',
      label: 'Active Users Globally',
      icon: <Users className="h-6 w-6" />,
      color: 'text-[#128C7E]'
    }
  ];

  const comparison = [
    {
      feature: 'Open Rate',
      whatsapp: { value: '98%', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
      email: { value: '20%', icon: <X className="h-5 w-5 text-red-500" /> }
    },
    {
      feature: 'Response Time',
      whatsapp: { value: '< 90 seconds', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
      email: { value: '90 minutes', icon: <X className="h-5 w-5 text-red-500" /> }
    },
    {
      feature: 'Engagement Rate',
      whatsapp: { value: '45-60%', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
      email: { value: '2-5%', icon: <X className="h-5 w-5 text-red-500" /> }
    },
    {
      feature: 'Automation',
      whatsapp: { value: 'Full 24/7', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
      email: { value: 'Limited', icon: <X className="h-5 w-5 text-red-500" /> }
    }
  ];

  const reasons = [
    {
      title: 'Direct & Personal',
      description: 'Customers trust WhatsApp. Messages feel personal, not spammy.',
      icon: '💬',
      gradient: 'from-[#25D366] to-[#128C7E]'
    },
    {
      title: 'Multi-Purpose Platform',
      description: 'Sales, support, reminders, feedback, and payments — all in one place.',
      icon: '🎯',
      gradient: 'from-[#FF7A00] to-[#FFB100]'
    },
    {
      title: 'Saves Hours Daily',
      description: 'Automated responses handle FAQs while you focus on growth.',
      icon: '⏰',
      gradient: 'from-[#075E54] to-[#128C7E]'
    },
    {
      title: 'Higher Conversions',
      description: 'Instant engagement = more leads converted into paying customers.',
      icon: '📈',
      gradient: 'from-[#FFB100] to-[#FF7A00]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="why-whatsapp"
      role="region"
      aria-labelledby="why-whatsapp-heading"
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
                <TrendingUp className="h-4 w-4" />
                Marketing That Actually Works
              </span>
            </div>
            <h2 
              id="why-whatsapp-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Why Businesses Are Switching
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                to WhatsApp Automation
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              If your business isn't using WhatsApp automation yet —{' '}
              <span className="font-bold text-[#FF7A00]">you're losing conversions daily</span>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-100 dark:border-gray-700 text-center"
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              WhatsApp vs Email Marketing
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-4 md:p-6 text-gray-600 dark:text-gray-400 font-bold">
                        Feature
                      </th>
                      <th className="text-center p-4 md:p-6">
                        <div className="flex items-center justify-center gap-2">
                          <MessageCircle className="h-5 w-5 text-[#25D366]" />
                          <span className="font-bold text-[#25D366]">WhatsApp</span>
                        </div>
                      </th>
                      <th className="text-center p-4 md:p-6">
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="h-5 w-5 text-gray-500" />
                          <span className="font-bold text-gray-500">Email</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr 
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <td className="p-4 md:p-6 font-semibold text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {row.whatsapp.icon}
                            <span className="font-bold text-gray-900 dark:text-white">
                              {row.whatsapp.value}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {row.email.icon}
                            <span className="font-bold text-gray-500">
                              {row.email.value}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Why Choose WhatsApp Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${reason.gradient} text-white text-2xl mb-4`}>
                  {reason.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                👉 Ready to 10× Your Customer Engagement?
              </p>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Join 10,000+ businesses already automating with WhatsApp
              </p>
              <a 
                href="#lead-form"
                className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Get Started Now — Setup in 48 Hours
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] WhyWhatsAppSection component loaded');
