'use client';

/**
 * Pricing Section
 * Transparent pricing with INR-focused packages
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

console.log('[ReactJS-Dev] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  highlight?: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] PricingSection mounted');
    return () => console.log('[ReactJS-Dev] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Startup MVP',
      price: '49,999',
      period: 'Starting from',
      description: 'New Startups',
      features: [
        'MVP in 4 weeks',
        'Basic UI components',
        'API-ready architecture',
        'React 18 + Hooks',
        'Responsive design',
        'Contact form integration',
        'Vercel deployment',
        '14-day bug warranty'
      ],
      highlight: 'Perfect for launching your idea fast'
    },
    {
      name: 'Growth App',
      price: '99,999',
      period: 'Starting from',
      description: 'Growing Businesses',
      features: [
        'Full-feature React app',
        'Custom component library',
        'Redux/Zustand state management',
        'REST/GraphQL API integration',
        'Admin dashboard',
        'User authentication',
        'Performance optimized',
        'Analytics integration',
        'CI/CD setup',
        '30-day bug warranty'
      ],
      popular: true,
      highlight: 'Most popular for scaling businesses'
    },
    {
      name: 'Enterprise Build',
      price: 'Custom',
      period: 'Quote',
      description: 'SaaS & Corporates',
      features: [
        'Custom architecture',
        'TypeScript + React',
        'Advanced state management',
        'Real-time features',
        'Multi-role authentication',
        'Payment gateway integration',
        'Database design',
        'Full backend (Node/Nest)',
        'AWS/Vercel hosting',
        'CI/CD pipeline',
        'Comprehensive docs',
        'Priority support'
      ],
      highlight: 'Complete enterprise solution'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-[#61DAFB]/5 to-[#00C897]/5 dark:from-gray-950 dark:via-[#61DAFB]/5 dark:to-[#00C897]/5"
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
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#00C897]/20 to-[#61DAFB]/20 rounded-full mb-4 sm:mb-5 border border-[#00C897] text-sm sm:text-base">
            <span className="font-bold text-[#00C897] dark:text-[#00C897] uppercase tracking-wide">
              💬 Transparent Pricing
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Pricing Plans
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
            Choose the perfect plan — all prices in INR
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs font-bold">
            {[
              '✅ No Hidden Costs',
              '✅ GST Included',
              '✅ Custom Quotes'
            ].map((item, i) => (
              <span key={i} className="px-3 py-2 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 text-[#61DAFB] dark:text-[#61DAFB] rounded-full border-2 border-[#61DAFB] shadow-sm">
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
                  ? 'bg-gradient-to-br from-[#61DAFB]/10 via-[#00C897]/10 to-[#61DAFB]/10 dark:from-[#61DAFB]/20 dark:via-[#00C897]/20 dark:to-[#61DAFB]/20 border-[3px] border-[#61DAFB] shadow-2xl shadow-[#61DAFB]/40 scale-[1.02] lg:scale-105'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-2xl active:scale-95'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-[#1E1E1E] text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-start justify-center">
                    <span className="text-2xl text-gray-600 dark:text-gray-400 mt-2">₹</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {plan.period}
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-[#61DAFB] font-semibold">
                  {plan.highlight}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00C897] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
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
                    ? 'bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-[#1E1E1E] shadow-lg' 
                    : 'border-[#61DAFB] hover:bg-[#61DAFB]/10'
                }`}
                onClick={() => console.log(`[ReactJS-Dev] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  💬 Book Free Consultation
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
          className="text-center bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 rounded-2xl p-6 sm:p-8 border border-[#61DAFB] max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
            Need a Custom Solution?
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We build custom React applications tailored to your unique requirements.
            <br className="hidden sm:block" />
            Contact us for a personalized quote!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
