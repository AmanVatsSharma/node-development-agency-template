'use client';

/**
 * Pricing Section
 * Transparent pricing with INR-focused packages for Indian market
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

console.log('[AI-Chatbot-Dev] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  highlight?: string;
  bestFor: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] PricingSection mounted');
    return () => console.log('[AI-Chatbot-Dev] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '49,000',
      period: 'One-time',
      description: 'Basic AI Chatbot for Small Websites',
      bestFor: 'Small Websites',
      features: [
        'Basic AI Chatbot',
        'Up to 5 FAQs trained',
        'Website Integration',
        'Email notifications',
        'Basic analytics',
        '1,000 conversations/month',
        '7-10 day delivery',
        '15-day support'
      ],
      highlight: 'Perfect for startups testing AI'
    },
    {
      name: 'Professional',
      price: '99,000',
      period: 'One-time',
      description: 'Custom Personality + CRM Integration',
      bestFor: 'Growing Businesses',
      features: [
        'Custom AI Personality',
        'Unlimited FAQ training',
        'CRM Integration (HubSpot/Zoho)',
        'Analytics Dashboard',
        'Multi-language support',
        'WhatsApp OR Website',
        '10,000 conversations/month',
        'Lead qualification logic',
        '10-15 day delivery',
        '30-day support'
      ],
      popular: true,
      highlight: 'Most popular for SMEs'
    },
    {
      name: 'Enterprise',
      price: '1,99,000',
      period: 'Starting from',
      description: 'Multi-Platform + Custom AI Training',
      bestFor: 'Scaling Brands',
      features: [
        'Multi-Platform (Website + WhatsApp)',
        'Custom AI Model Training',
        'Vector database for docs',
        'Advanced CRM workflows',
        'API access',
        'Unlimited conversations',
        'Priority support 24/7',
        'Monthly optimization',
        'Dedicated account manager',
        'Custom integrations',
        '15-30 day delivery',
        '90-day support'
      ],
      highlight: 'Complete enterprise solution'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Transparent Pricing
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Hire AI Chatbot Developer Pricing & Packages
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
            Choose the perfect plan for your business — all prices in INR
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs font-bold">
            {[
              '✅ No Hidden Costs',
              '✅ GST Included',
              '✅ Custom Quotes Available'
            ].map((item, i) => (
              <span key={i} className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full border-2 border-blue-200 dark:border-blue-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]/90 border-[3px] border-[#FFB100] shadow-2xl shadow-[#FFB100]/40 scale-[1.02] lg:scale-105'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] dark:hover:border-[#FFB100] hover:shadow-2xl active:scale-95'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFB100] to-[#FFB100]/80 text-[#0A2540] text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${plan.popular ? 'text-[#FFB100]' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.bestFor}
                </p>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-start justify-center">
                    <span className={`text-2xl mt-2 ${plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>₹</span>
                    <span className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className={`text-sm mt-1 ${plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.period}
                  </div>
                </div>

                <div className={`text-xs sm:text-sm font-semibold ${plan.popular ? 'text-[#FFB100]' : 'text-[#0A2540] dark:text-[#FFB100]'}`}>
                  {plan.highlight}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
                className={`w-full text-sm sm:text-base font-bold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-[#FFB100] to-[#FFB100]/80 hover:from-[#FFB100]/90 hover:to-[#FFB100]/70 text-[#0A2540] shadow-lg' 
                    : 'border-2 border-[#0A2540] dark:border-[#FFB100] hover:bg-[#0A2540] hover:text-white dark:hover:bg-[#FFB100] dark:hover:text-[#0A2540]'
                }`}
                onClick={() => console.log(`[AI-Chatbot-Dev] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800 max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
            🎯 Need a Custom Solution?
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We build custom AI chatbots tailored to your unique requirements.
            <br className="hidden sm:block" />
            Contact us for a personalized quote!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
