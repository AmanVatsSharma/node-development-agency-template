'use client';

/**
 * @fileoverview Integration Capabilities Section
 * @description Showcase exchange, payment, and third-party integrations
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link2, CreditCard, Building2, Shield, Database, Zap } from 'lucide-react';

export function IntegrationCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Integration-Capabilities] Component rendered');

  const integrations = [
    {
      category: 'Exchanges',
      icon: Building2,
      items: ['NSE', 'BSE', 'MCX', 'NCDEX', 'NSE F&O', 'Currency'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Payment Gateways',
      icon: CreditCard,
      items: ['Razorpay', 'PayU', 'Instamojo', 'CCAvenue', 'Paytm'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Banking Partners',
      icon: Building2,
      items: ['ICICI Bank', 'HDFC Bank', 'SBI', 'Axis Bank', 'Kotak'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'KYC Providers',
      icon: Shield,
      items: ['DigiLocker', 'Aadhaar eKYC', 'Digio', 'Karza', 'IDfy'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Data Providers',
      icon: Database,
      items: ['Live Market Feeds', 'Historical Data', 'Corporate Actions', 'News APIs'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      category: 'CRM Integration',
      icon: Link2,
      items: ['Zoho CRM', 'Salesforce', 'HubSpot', 'Custom CRM', 'Webhooks'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628]"
      id="integrations"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full mb-5 border border-blue-500/30">
            <span className="font-bold text-blue-400 uppercase tracking-wide text-sm">
              Integrations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Seamless{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Integration Ecosystem
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Pre-built connectors to exchanges, payment gateways, banks, and third-party services
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-black text-white mb-3">{integration.category}</h3>

                <div className="space-y-2">
                  {integration.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <Zap className="h-3 w-3 text-[#00FF88]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* API Access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-md border-2 border-[#00FF88]/30 rounded-2xl p-6">
            <p className="text-white font-bold mb-2">Need a custom integration?</p>
            <p className="text-sm text-gray-400 mb-4">
              Our REST & WebSocket APIs allow you to build custom integrations
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black rounded-lg hover:shadow-lg transition-all"
            >
              <Link2 className="h-4 w-4" />
              Request API Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
