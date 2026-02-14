'use client';

/**
 * @fileoverview Pricing Section
 * @description Transparent pricing tiers for market data API
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Zap, TrendingUp, Rocket, Crown } from 'lucide-react';

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="h-6 w-6" />,
      description: 'Perfect for individual traders and small projects',
      price: { monthly: 999, annual: 9990 },
      popular: false,
      color: 'from-gray-600 to-gray-800',
      features: [
        { text: '10,000 API calls/day', included: true },
        { text: 'Real-time equity data', included: true },
        { text: 'Historical data (1 year)', included: true },
        { text: 'REST API access', included: true },
        { text: 'WebSocket streaming', included: false },
        { text: 'Options chain data', included: false },
        { text: 'MCX commodity data', included: false },
        { text: 'Email support', included: true },
        { text: 'Priority support', included: false }
      ],
      cta: 'Start Free Trial',
      badge: null
    },
    {
      name: 'Professional',
      icon: <TrendingUp className="h-6 w-6" />,
      description: 'For serious traders and growing fintech startups',
      price: { monthly: 4999, annual: 49990 },
      popular: true,
      color: 'from-[#00FF88] to-[#00CC70]',
      features: [
        { text: '1,00,000 API calls/day', included: true },
        { text: 'Real-time equity data', included: true },
        { text: 'Historical data (5 years)', included: true },
        { text: 'REST API access', included: true },
        { text: 'WebSocket streaming', included: true },
        { text: 'Options chain data', included: true },
        { text: 'MCX commodity data', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Dedicated support', included: false }
      ],
      cta: 'Get Started',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      icon: <Crown className="h-6 w-6" />,
      description: 'For large trading firms and institutions',
      price: { monthly: 49999, annual: 499990 },
      popular: false,
      color: 'from-[#FFD700] to-[#FFA500]',
      features: [
        { text: 'Unlimited API calls', included: true },
        { text: 'Real-time equity data', included: true },
        { text: 'Historical data (10+ years)', included: true },
        { text: 'REST API access', included: true },
        { text: 'WebSocket streaming', included: true },
        { text: 'Options chain data', included: true },
        { text: 'MCX commodity data', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Custom SLA', included: true }
      ],
      cta: 'Contact Sales',
      badge: 'Enterprise'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden"
      id="pricing"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Rocket className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Hire Trading Data Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Pricing & Packages</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Choose the plan that fits your needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-200 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39]'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-bold transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39]'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-[#FF3366] text-white text-xs px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-0 mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <div className={`px-4 py-1.5 bg-gradient-to-r ${plan.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 h-full flex flex-col ${
                plan.popular
                  ? 'border-[#00FF88] shadow-2xl shadow-[#00FF88]/20 scale-105'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50'
              }`}>
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} text-white mb-4 w-fit`}>
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gray-900 dark:text-white">
                      ₹{plan.price[billingCycle].toLocaleString()}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-[#00FF88] flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-gray-700 dark:text-gray-200' 
                          : 'text-gray-400 dark:text-gray-500 line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#lead-form"
                  className={`block text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] hover:shadow-2xl hover:shadow-[#00FF88]/50 hover:scale-105'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-[#00FF88]" />
            <span>7-day money-back guarantee • No credit card required for trial</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] PricingSection loaded');
