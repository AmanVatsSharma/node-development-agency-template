'use client';

/**
 * Pricing Section - PREMIUM INTERACTIVE PRICING
 * Beautiful pricing cards with comparison and animations
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';

console.log('[ReactJS-Dev] PricingSection component loaded');

interface PricingPlan {
  icon: React.ElementType;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient: string;
  ctaText: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] PricingSection mounted');
    return () => console.log('[ReactJS-Dev] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      icon: Rocket,
      name: 'Startup MVP',
      tagline: 'Perfect for launching fast',
      price: '49,999',
      period: 'one-time',
      description: 'Get your MVP to market in 4 weeks',
      features: [
        'MVP in 4 weeks',
        'Core features only',
        'React 18 + Hooks',
        'Basic UI components',
        'API-ready architecture',
        'Responsive design',
        'Contact form',
        'Vercel deployment',
        '14-day bug warranty'
      ],
      gradient: 'from-green-400 to-emerald-500',
      ctaText: 'Start Your MVP'
    },
    {
      icon: Zap,
      name: 'Growth App',
      tagline: 'For scaling businesses',
      price: '99,999',
      period: 'one-time',
      description: 'Full-featured React application',
      features: [
        'Everything in Startup',
        'Full-feature React app',
        'Custom component library',
        'Redux/Zustand state',
        'REST/GraphQL API',
        'Admin dashboard',
        'User authentication',
        'Performance optimized',
        'Analytics integration',
        'CI/CD setup',
        '30-day bug warranty',
        'Priority email support'
      ],
      popular: true,
      gradient: 'from-[#61DAFB] to-[#00C897]',
      ctaText: 'Scale Your Business'
    },
    {
      icon: Crown,
      name: 'Enterprise',
      tagline: 'Complete solution',
      price: 'Custom',
      period: 'quote',
      description: 'Enterprise-grade React application',
      features: [
        'Everything in Growth',
        'Custom architecture',
        'TypeScript + React',
        'Advanced state management',
        'Real-time features',
        'Multi-role auth',
        'Payment integration',
        'Database design',
        'Full backend (Node/Nest)',
        'AWS/Vercel hosting',
        'CI/CD pipeline',
        'Comprehensive docs',
        'Dedicated support',
        '90-day warranty'
      ],
      gradient: 'from-purple-400 to-pink-500',
      ctaText: 'Contact Sales'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#61DAFB]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00C897]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00C897]/10 to-[#61DAFB]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#00C897]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C897]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00C897] to-[#61DAFB] bg-clip-text text-transparent uppercase tracking-wider">
              Investment Plans
            </span>
          </motion.div>

          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hire React.js Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Pricing & Packages
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6"
          >
            Choose the perfect plan for your React journey
          </motion.p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['✅ No Hidden Costs', '✅ GST Included', '✅ Money-back Guarantee'].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border-2 border-[#61DAFB]/30 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;
            const isPop = plan.popular;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative group ${isPop ? 'lg:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-6 py-2 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white text-sm font-black rounded-full shadow-xl flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                )}

                <div className={`relative h-full bg-white dark:bg-gray-900 rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 border-2 overflow-hidden transition-all duration-500 ${
                  isPop 
                    ? 'border-[#61DAFB] shadow-2xl shadow-[#61DAFB]/20 scale-105'
                    : 'border-gray-200 dark:border-gray-800 hover:border-[#61DAFB]/50 hover:shadow-2xl hover:-translate-y-2'
                }`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${plan.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${plan.gradient} mb-6 shadow-2xl`}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>

                    {/* Plan Name */}
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base text-[#61DAFB] font-bold mb-6">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-start gap-1 mb-2">
                        <span className="text-2xl text-gray-600 dark:text-gray-400 mt-2">₹</span>
                        <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {plan.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 sm:space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + idx * 0.03 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#00C897] flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      asChild
                      size="lg"
                      className={`w-full text-base font-bold py-6 rounded-xl sm:rounded-2xl shadow-lg transition-all ${
                        isPop
                          ? 'bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-white hover:shadow-xl'
                          : 'bg-white dark:bg-gray-800 border-2 border-[#61DAFB] text-[#61DAFB] hover:bg-[#61DAFB] hover:text-white dark:hover:bg-[#61DAFB]'
                      }`}
                    >
                      <a href="#lead-form" className="flex items-center justify-center gap-2">
                        <span>{plan.ctaText}</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10 bg-gradient-to-r from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 backdrop-blur-xl rounded-3xl border border-[#61DAFB]/20 max-w-3xl">
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-2">
                Need Something Custom?
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                We build tailored React solutions for unique requirements
              </p>
            </div>
            <motion.a
              href="#lead-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
