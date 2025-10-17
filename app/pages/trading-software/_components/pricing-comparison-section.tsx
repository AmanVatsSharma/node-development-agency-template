'use client';

/**
 * @fileoverview Pricing Comparison Section
 * @description 3-tier pricing with transparent breakdown
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function PricingComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Pricing-Comparison] Component rendered');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      tagline: 'For New Brokers',
      setup: '₹2,99,000',
      monthly: '₹49,000',
      features: [
        'Up to 1,000 active clients',
        'NSE, BSE, MCX integration',
        'Basic charting tools',
        'Mobile apps (iOS & Android)',
        'Email support',
        'Basic risk management',
        'Standard reporting',
        'API access (Rate limited)'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Professional',
      icon: Star,
      tagline: 'Most Popular',
      setup: '₹4,99,000',
      monthly: '₹99,000',
      features: [
        'Up to 10,000 active clients',
        'All exchanges + Forex + Crypto',
        'TradingView advanced charts',
        'White-label branding',
        '24/7 phone & email support',
        'Advanced risk & margin tools',
        'Custom reports & analytics',
        'Full API access + WebSocket',
        'Algo trading support',
        'Dedicated account manager'
      ],
      popular: true,
      gradient: 'from-[#00FF88] to-[#00dd77]',
      borderColor: 'border-[#00FF88]'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      tagline: 'For Large Brokerages',
      setup: 'Custom',
      monthly: 'Custom',
      features: [
        'Unlimited active clients',
        'All Professional features',
        'Custom feature development',
        'SLA guarantees (99.99%)',
        'Dedicated support team',
        'Priority bug fixes',
        'Custom integrations',
        'On-premise deployment option',
        'Compliance & audit support',
        'Training & onboarding'
      ],
      popular: false,
      gradient: 'from-[#FFD700] to-[#FFA500]',
      borderColor: 'border-[#FFD700]/30'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e]"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-[#FFD700]/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Choose The Perfect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">
              Plan For You
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No hidden fees. No surprises. Just straightforward pricing that grows with your business.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className={`relative ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1 bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black text-xs rounded-full">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`relative bg-white/5 backdrop-blur-md border-4 ${plan.borderColor} rounded-3xl p-8 h-full hover:border-opacity-60 transition-all group ${plan.popular ? 'shadow-2xl shadow-[#00FF88]/20' : ''}`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.tagline}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm text-gray-400">Setup:</span>
                      <span className="text-2xl font-black text-white">{plan.setup}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400">Monthly:</span>
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">{plan.monthly}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FF88] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#lead-form"
                    onClick={() => console.log(`[Pricing] ${plan.name} plan selected`)}
                    className={`block w-full text-center px-6 py-4 rounded-xl font-black transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] hover:shadow-2xl hover:shadow-[#00FF88]/50'
                        : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20'
                    }`}
                  >
                    {plan.setup === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </a>

                  {/* Glow Effect */}
                  {plan.popular && (
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-10 blur-3xl -z-10`} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
            <p className="text-sm text-gray-300">
              💡 <span className="font-bold">All plans include:</span> Free software updates, security patches, and regular feature additions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
