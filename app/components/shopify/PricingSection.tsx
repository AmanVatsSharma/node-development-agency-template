'use client';

/**
 * PricingSection Component
 * 
 * Premium pricing table with 3 tiers and add-ons
 * Features:
 * - Animated pricing cards
 * - Popular badge on middle tier
 * - Interactive hover effects
 * - Mobile-responsive layout
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[PricingSection] Component loaded');

interface PricingTier {
  id: number;
  name: string;
  tagline: string;
  price: string;
  period: string;
  timeline: string;
  icon: React.ReactNode;
  features: string[];
  isPopular?: boolean;
  color: string;
  gradient: string;
}

interface AddOn {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Starter Launch',
    tagline: 'New D2C brands',
    price: '₹35,000',
    period: '',
    timeline: '7 days',
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Premium theme customization',
      '3 essential pages (Home, Product, Contact)',
      'Basic SEO setup',
      'Mobile-responsive design',
      'Payment gateway integration',
      'Email support',
    ],
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 2,
    name: 'Growth Brand',
    tagline: 'Mid-level stores',
    price: '₹65,000',
    period: '',
    timeline: '15 days',
    icon: <Star className="w-6 h-6" />,
    features: [
      '✨ Everything in Starter, plus:',
      'Custom theme design',
      'CRO setup & optimization',
      'Marketing automations (Klaviyo/Omnisend)',
      'Advanced SEO & speed optimization',
      'WhatsApp integration',
      'Abandoned cart recovery',
      '30-day support',
    ],
    isPopular: true,
    color: 'from-[#00B894] to-emerald-500',
    gradient: 'from-[#00B894]/10 to-emerald-500/10',
  },
  {
    id: 3,
    name: 'Elite D2C',
    tagline: 'Premium brands / export stores',
    price: '₹1L - ₹1.5L',
    period: '',
    timeline: '20-25 days',
    icon: <Crown className="w-6 h-6" />,
    features: [
      '👑 Everything in Growth, plus:',
      'Fully custom theme from scratch',
      'Advanced CRO & A/B testing',
      'Multi-currency + multi-language',
      'Custom app/section development',
      'Full marketing integration suite',
      'Team training & documentation',
      '60-day priority support',
      'Dedicated success manager',
    ],
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
];

const addOns: AddOn[] = [
  { id: 1, name: 'Multi-currency + multi-language setup', icon: <Zap className="w-4 h-4" /> },
  { id: 2, name: 'Subscription products', icon: <Zap className="w-4 h-4" /> },
  { id: 3, name: 'Custom app / section development', icon: <Zap className="w-4 h-4" /> },
  { id: 4, name: 'Shopify to Next.js Headless migration', icon: <Zap className="w-4 h-4" /> },
];

const PricingSection = () => {
  console.log('[PricingSection] Rendering pricing section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSelectPlan = (planName: string) => {
    console.log(`[PricingSection] Plan selected: ${planName}`);
    // Scroll to contact section or open modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B894]/10 to-emerald-500/10 border border-[#00B894]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-semibold text-gray-700">Flexible Pricing</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for every stage of your e-commerce journey
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              isInView={isInView}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>

        {/* Add-ons section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              ⚡ Popular Add-Ons
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={addOn.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:border-[#00B894] transition-colors"
                >
                  <div className="p-2 bg-gradient-to-br from-[#00B894] to-emerald-500 rounded-lg text-white">
                    {addOn.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{addOn.name}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-6 italic">
              Custom enterprise stores and retainer options available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  tier: PricingTier;
  index: number;
  isInView: boolean;
  onSelect: (planName: string) => void;
}

const PricingCard = ({ tier, index, isInView, onSelect }: PricingCardProps) => {
  const isPopular = tier.isPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative ${isPopular ? 'lg:scale-105 lg:-mt-4 lg:mb-4' : ''}`}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-[#00B894] to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
            🔥 Most Popular
          </div>
        </motion.div>
      )}

      <div
        className={`relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
          isPopular ? 'border-[#00B894]' : 'border-gray-100'
        } overflow-hidden group`}
      >
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} text-white mb-6 shadow-lg`}
          >
            {tier.icon}
          </motion.div>

          {/* Plan name and tagline */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
          <p className="text-gray-600 mb-6">{tier.tagline}</p>

          {/* Price */}
          <div className="mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {tier.price}
              <span className="text-lg font-normal text-gray-600">{tier.period}</span>
            </div>
            <div className="text-sm text-gray-600">Timeline: {tier.timeline}</div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => onSelect(tier.name)}
            className={`w-full mb-8 py-6 rounded-xl text-base font-semibold transition-all duration-300 ${
              isPopular
                ? 'bg-gradient-to-r from-[#00B894] to-emerald-500 hover:from-[#00B894]/90 hover:to-emerald-500/90 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>

          {/* Features list */}
          <ul className="space-y-4">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mt-0.5`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative corner element */}
        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${tier.color} rounded-full -mr-16 -mb-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default PricingSection;
