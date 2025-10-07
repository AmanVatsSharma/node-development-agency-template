'use client';

/**
 * @fileoverview Pricing Section
 * @description Transparent 3-tier pricing with INR
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap,
  MessageCircle,
  TrendingUp,
  Crown
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  console.log('[PricingSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const plans = [
    {
      name: 'Starter',
      tagline: 'Perfect for small businesses',
      icon: <MessageCircle className="h-6 w-6" />,
      setupCost: '₹15,000',
      monthlyPayment: '₹5,000',
      annualPayment: '₹50,000',
      savings: '₹10,000',
      gradient: 'from-[#25D366] to-[#128C7E]',
      popular: false,
      features: [
        { text: 'Complete WhatsApp Business API Setup', included: true },
        { text: 'Verified green-tick account', included: true },
        { text: '1 Automation Workflow', included: true },
        { text: 'Basic CRM integration', included: true },
        { text: 'Up to 1,000 messages/month', included: true },
        { text: 'Email support (24h response)', included: true },
        { text: 'Monthly analytics report', included: true },
        { text: 'Advanced workflows', included: false },
        { text: 'Custom integrations', included: false },
        { text: 'Dedicated account manager', included: false }
      ],
      cta: 'Get Started',
      idealFor: 'Startups & Solopreneurs'
    },
    {
      name: 'Growth',
      tagline: 'Most popular for growing businesses',
      icon: <TrendingUp className="h-6 w-6" />,
      setupCost: '₹35,000',
      monthlyPayment: '₹10,000',
      annualPayment: '₹1,00,000',
      savings: '₹20,000',
      gradient: 'from-[#FF7A00] to-[#FFB100]',
      popular: true,
      features: [
        { text: 'Everything in Starter, plus:', included: true },
        { text: 'Up to 5 Automation Workflows', included: true },
        { text: 'CRM integration (HubSpot/Zoho/Salesforce)', included: true },
        { text: 'Up to 5,000 messages/month', included: true },
        { text: 'E-commerce platform integration', included: true },
        { text: 'Payment collection (Razorpay)', included: true },
        { text: 'Priority support (4h response)', included: true },
        { text: 'Weekly analytics & optimization', included: true },
        { text: 'A/B testing for messages', included: true },
        { text: 'Custom integrations (1 included)', included: true }
      ],
      cta: 'Start Growing',
      idealFor: 'E-commerce & Service Brands'
    },
    {
      name: 'Pro Automation Suite',
      tagline: 'For enterprises & agencies',
      icon: <Crown className="h-6 w-6" />,
      setupCost: '₹60,000',
      monthlyPayment: '₹20,000',
      annualPayment: '₹2,00,000',
      savings: '₹40,000',
      gradient: 'from-[#075E54] to-[#128C7E]',
      popular: false,
      features: [
        { text: 'Everything in Growth, plus:', included: true },
        { text: 'Unlimited Automation Workflows', included: true },
        { text: 'Full automation stack', included: true },
        { text: 'Up to 20,000 messages/month', included: true },
        { text: 'Custom analytics dashboard', included: true },
        { text: 'Multi-user team access', included: true },
        { text: 'Advanced AI chatbot training', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'On-site team training (1 session)', included: true },
        { text: '24/7 priority support (1h response)', included: true },
        { text: 'Custom API development', included: true },
        { text: 'White-label option available', included: true }
      ],
      cta: 'Go Enterprise',
      idealFor: 'Enterprises / Agencies'
    }
  ];

  const addOns = [
    { name: 'Additional 1,000 messages', price: '₹2,000/month' },
    { name: 'Extra automation workflow', price: '₹5,000 one-time' },
    { name: 'Custom integration development', price: '₹15,000+' },
    { name: 'On-site training (per session)', price: '₹25,000' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
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
                <Zap className="h-4 w-4" />
                Transparent Pricing
              </span>
            </div>
            <h2 
              id="pricing-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Simple, Honest Pricing
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                No Hidden Fees
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business size and growth stage
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#25D366] text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-[#25D366] text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Annual
                <span className="ml-2 px-2 py-0.5 bg-[#FF7A00] text-white rounded-full text-xs">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl border-4 ${
                  plan.popular 
                    ? 'border-[#FF7A00]' 
                    : 'border-gray-200 dark:border-gray-700'
                } ${plan.popular ? 'md:scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#FF7A00] to-[#FFB100] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-4 shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100 dark:border-gray-700">
                  <div className="mb-3">
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                      Setup Cost:
                    </span>
                    <div className="text-3xl font-black text-gray-900 dark:text-white">
                      {plan.setupCost}
                    </div>
                    <span className="text-xs text-gray-500">one-time</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                      Then:
                    </span>
                    <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                      {billingCycle === 'monthly' ? plan.monthlyPayment : plan.annualPayment}
                    </div>
                    <span className="text-sm text-gray-500">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    {billingCycle === 'annual' && (
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
                          Save {plan.savings} annually
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className={`flex items-start gap-2 text-sm ${
                        feature.included 
                          ? 'text-gray-700 dark:text-gray-300' 
                          : 'text-gray-400 dark:text-gray-600 line-through'
                      }`}
                    >
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        feature.included ? 'text-[#25D366]' : 'text-gray-300'
                      }`} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 mb-6 text-center">
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                    IDEAL FOR: 
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white ml-1">
                    {plan.idealFor}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full h-12 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB100] hover:from-[#FFB100] hover:to-[#ff9933] text-white'
                      : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white'
                  }`}
                >
                  <a href="#lead-form">
                    {plan.cta} →
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons */}
          <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">
                Optional Add-ons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-base">
                      {addon.name}
                    </span>
                    <span className="text-[#25D366] font-black text-sm md:text-base">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                💬 Not Sure Which Plan is Right for You?
              </p>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Book a free 30-minute consultation and we'll recommend the perfect solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form"
                  className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  Schedule Free Consultation
                </a>
                <a 
                  href="#contact"
                  className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p className="text-sm mt-4 opacity-75">
                ✅ No credit card required • ✅ No obligation • ✅ Custom plans available
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] PricingSection component loaded');
