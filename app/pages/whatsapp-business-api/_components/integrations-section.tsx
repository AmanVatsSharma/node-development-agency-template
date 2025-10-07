'use client';

/**
 * @fileoverview Integrations Section
 * @description CRM & Platform integrations showcase
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Check } from 'lucide-react';

export function IntegrationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[IntegrationsSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const integrations = [
    {
      category: 'CRM Platforms',
      platforms: [
        { name: 'HubSpot', logo: '🔶', color: '#FF7A59' },
        { name: 'Salesforce', logo: '☁️', color: '#00A1E0' },
        { name: 'Zoho CRM', logo: '🟠', color: '#E42527' },
        { name: 'Pipedrive', logo: '🟢', color: '#1A1A1A' }
      ]
    },
    {
      category: 'E-commerce',
      platforms: [
        { name: 'Shopify', logo: '🛍️', color: '#96BF48' },
        { name: 'WooCommerce', logo: '🛒', color: '#96588A' },
        { name: 'Wix', logo: '⬛', color: '#0C6EFC' },
        { name: 'Magento', logo: '🔷', color: '#EE672F' }
      ]
    },
    {
      category: 'Payment Gateways',
      platforms: [
        { name: 'Razorpay', logo: '💳', color: '#3395FF' },
        { name: 'Stripe', logo: '💰', color: '#635BFF' },
        { name: 'PayPal', logo: '💵', color: '#00457C' },
        { name: 'Paytm', logo: '📱', color: '#00BAF2' }
      ]
    },
    {
      category: 'Automation & Tools',
      platforms: [
        { name: 'Zapier', logo: '⚡', color: '#FF4A00' },
        { name: 'Make (Integromat)', logo: '🔧', color: '#7B42BC' },
        { name: 'Google Sheets', logo: '📊', color: '#0F9D58' },
        { name: 'Airtable', logo: '📋', color: '#FCB400' }
      ]
    },
    {
      category: 'Communication',
      platforms: [
        { name: 'Slack', logo: '💬', color: '#4A154B' },
        { name: 'Microsoft Teams', logo: '👥', color: '#6264A7' },
        { name: 'Discord', logo: '🎮', color: '#5865F2' },
        { name: 'Telegram', logo: '✈️', color: '#0088CC' }
      ]
    },
    {
      category: 'Marketing',
      platforms: [
        { name: 'Mailchimp', logo: '📧', color: '#FFE01B' },
        { name: 'SendGrid', logo: '📨', color: '#1A82E2' },
        { name: 'ActiveCampaign', logo: '🎯', color: '#356AE6' },
        { name: 'ConvertKit', logo: '✉️', color: '#FB6970' }
      ]
    }
  ];

  const features = [
    'Two-way data sync',
    'Real-time webhooks',
    'Custom API endpoints',
    'Automated workflows',
    'Data mapping & transformation',
    'Error handling & retries'
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="integrations"
      role="region"
      aria-labelledby="integrations-heading"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#075E54]/10 rounded-full text-[#075E54] dark:text-[#25D366] font-bold text-sm border border-[#075E54]/20">
                <Network className="h-4 w-4" />
                Seamless Integrations
              </span>
            </div>
            <h2 
              id="integrations-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Connect With Your
              <br />
              <span className="bg-gradient-to-r from-[#075E54] to-[#25D366] bg-clip-text text-transparent">
                Favorite Tools
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              WhatsApp automation that works with your existing tech stack
            </p>
          </motion.div>

          {/* Integration Categories */}
          <motion.div variants={fadeInUp} className="space-y-8 mb-12 md:mb-16">
            {integrations.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.platforms.map((platform, pIndex) => (
                    <motion.div
                      key={pIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] dark:hover:border-[#25D366] transition-all text-center group"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {platform.logo}
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                        {platform.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Integration Features */}
          <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">
                How Our Integrations Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Custom Integration CTA */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-r from-[#075E54] to-[#25D366] rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't See Your Tool? No Problem!
              </h3>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                We can build custom integrations with any platform that has an API
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form"
                  className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  Request Custom Integration
                </a>
              </div>
              <p className="text-sm mt-4 opacity-75">
                ⚡ Most custom integrations completed in 7-10 business days
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] IntegrationsSection component loaded');
