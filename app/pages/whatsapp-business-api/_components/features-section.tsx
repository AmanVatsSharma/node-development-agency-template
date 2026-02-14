'use client';

/**
 * @fileoverview Features Section - What You'll Get
 * @description 4 main feature offerings with icons and descriptions
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CheckCircle2, 
  Bot, 
  BarChart3, 
  Network,
  Smartphone,
  Shield,
  Zap,
  Users
} from 'lucide-react';

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[FeaturesSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const features = [
    {
      id: 1,
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Complete WhatsApp Business API Setup',
      description: 'We handle everything from start to finish',
      gradient: 'from-[#25D366] to-[#128C7E]',
      details: [
        'Verified green-tick Business account',
        'Facebook Business Verification assistance',
        'Meta Cloud API or BSP (360Dialog / Gupshup / Twilio) setup',
        'Integration with CRM / website / forms'
      ]
    },
    {
      id: 2,
      icon: <Bot className="h-8 w-8" />,
      title: 'Smart WhatsApp Automation Workflows',
      description: 'AI-powered conversations that feel human',
      gradient: 'from-[#FF7A00] to-[#FFB100]',
      details: [
        'Auto-reply for FAQs',
        'Instant lead response bot',
        'Order status & delivery updates',
        'Appointment booking via WhatsApp',
        'Abandoned cart recovery messages',
        'Payment collection with Razorpay links',
        'Internal team notifications'
      ]
    },
    {
      id: 3,
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics & Performance Dashboard',
      description: 'Data-driven insights for better decisions',
      gradient: 'from-[#075E54] to-[#128C7E]',
      details: [
        'Track messages sent, delivered, read, replied',
        'Measure campaign performance',
        'Segment users & retarget efficiently',
        'Real-time reporting & alerts'
      ]
    },
    {
      id: 4,
      icon: <Network className="h-8 w-8" />,
      title: 'CRM & Website Integrations',
      description: 'Seamlessly connect with your existing tools',
      gradient: 'from-[#FFB100] to-[#FF7A00]',
      details: [
        'HubSpot, Zoho, Salesforce integration',
        'Shopify, WooCommerce, Wix connectivity',
        'Custom backend integrations (NestJS / Node.js)',
        'Google Sheets & Zapier Automations'
      ]
    }
  ];

  const highlights = [
    { icon: <Smartphone />, text: 'Mobile-First Design', color: 'text-[#25D366]' },
    { icon: <Shield />, text: 'Bank-Grade Security', color: 'text-[#FF7A00]' },
    { icon: <Zap />, text: 'Lightning Fast Setup', color: 'text-[#075E54]' },
    { icon: <Users />, text: '24/7 Support Team', color: 'text-[#128C7E]' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="features"
      role="region"
      aria-labelledby="features-heading"
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
                🎁 Complete Solution
              </span>
            </div>
            <h2 
              id="features-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Key Features of Our WhatsApp Business API Integration
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A complete, turnkey WhatsApp automation solution —{' '}
              <span className="font-bold text-[#25D366]">from setup to scaling</span>
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] dark:hover:border-[#25D366] transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-bold text-[#25D366] mb-2">
                      {`0${feature.id}`}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Bar */}
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-white">
                    {highlight.icon}
                  </div>
                  <p className="text-white font-bold text-sm md:text-base">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Automate WhatsApp Communication
            </p>
            <a 
              href="#pricing"
              className="inline-block px-8 py-4 bg-[#FF7A00] hover:bg-[#ff9933] text-white rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95"
            >
              View Pricing Plans →
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] FeaturesSection component loaded');
