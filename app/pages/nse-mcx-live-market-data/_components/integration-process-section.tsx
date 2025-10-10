'use client';

/**
 * @fileoverview Integration Process Section
 * @description Step-by-step guide to get started with the API
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserPlus, Key, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export function IntegrationProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: 1,
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Sign Up & Verify',
      description: 'Create your account in 2 minutes. Instant email verification and KYC approval.',
      time: '2 min',
      color: 'from-[#00FF88] to-[#00CC70]',
      details: ['Email verification', 'Quick KYC process', 'Instant approval', 'Free trial access']
    },
    {
      number: 2,
      icon: <Key className="h-8 w-8" />,
      title: 'Get API Keys',
      description: 'Generate secure API keys from your dashboard. Test in sandbox environment first.',
      time: '1 min',
      color: 'from-[#FFD700] to-[#FFA500]',
      details: ['Generate API keys', 'Sandbox access', 'Test environment', 'Documentation access']
    },
    {
      number: 3,
      icon: <Code className="h-8 w-8" />,
      title: 'Integrate & Test',
      description: 'Use our SDKs or REST API. Test with sample code and verify data accuracy.',
      time: '10 min',
      color: 'from-[#00FF88] to-[#00CC70]',
      details: ['Choose your SDK', 'Sample code', 'Test API calls', 'Verify data']
    },
    {
      number: 4,
      icon: <Rocket className="h-8 w-8" />,
      title: 'Go Live!',
      description: 'Switch to production keys and start receiving live market data instantly.',
      time: '1 min',
      color: 'from-[#FFD700] to-[#FFA500]',
      details: ['Switch to production', 'Live data access', 'Monitor usage', '24/7 support']
    }
  ];

  const quickStart = `// Quick Start - 3 Lines of Code
import { MarketDataAPI } from '@marketdata/sdk';

const api = new MarketDataAPI('YOUR_API_KEY');
const quote = await api.getQuote('NSE', 'RELIANCE');

console.log(\`RELIANCE: ₹\${quote.last_price}\`);
// Output: RELIANCE: ₹2456.75`;

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden"
      id="integration"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Rocket className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">GET STARTED IN MINUTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">4 Simple Steps</span> to Live Data
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From signup to live data in less than 15 minutes. No complex setup, no waiting.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FF88] via-[#FFD700] to-[#00FF88] opacity-20" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/20 h-full">
                  {/* Step Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-black text-xl mb-4 shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} text-white mb-3`}>
                    {step.icon}
                  </div>

                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#00FF88]/10 rounded-full border border-[#00FF88]/30 mb-3">
                    <span className="text-[#00FF88] text-xs font-bold">{step.time}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, dIndex) => (
                      <div 
                        key={dIndex}
                        className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#00FF88]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 z-20">
                    <div className="bg-white dark:bg-gray-900 p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-[#00FF88]" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Start Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              Quick Start Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get live market data in just 3 lines of code
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-[#00FF88]/20">
            {/* Code Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 bg-[#FF3366] rounded-full" />
                  <div className="h-3 w-3 bg-[#FFD700] rounded-full" />
                  <div className="h-3 w-3 bg-[#00FF88] rounded-full" />
                </div>
                <span className="text-white/70 text-sm font-mono ml-2">quick-start.js</span>
              </div>
              <button className="text-[#00FF88] text-xs hover:text-[#00CC70] transition-colors">
                Copy
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6">
              <pre className="text-sm font-mono text-white/90 leading-relaxed overflow-x-auto">
                <code>{quickStart}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105"
          >
            <Rocket className="h-5 w-5" />
            Start Your Free Trial Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] IntegrationProcessSection loaded');
