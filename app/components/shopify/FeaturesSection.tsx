'use client';

/**
 * FeaturesSection Component
 * 
 * Showcase of 5 key features/services with detailed descriptions
 * Features:
 * - Animated feature cards
 * - Icon animations on hover
 * - Expandable content
 * - Mobile-optimized layout
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Palette,
  Settings,
  TrendingUp,
  Zap,
  Search,
  ShoppingCart,
  Layout,
  Clock,
  BarChart,
  Mail,
  Smartphone,
  Target,
  Sparkles,
} from 'lucide-react';

console.log('[FeaturesSection] Component loaded');

interface Feature {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  color: string;
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    number: '01',
    title: 'Conversion-Focused Store Design',
    subtitle: '🎨 Beautiful & Strategic',
    description: 'Custom-built themes that convert visitors into customers',
    icon: <Palette className="w-6 h-6" />,
    highlights: [
      'Custom theme design (no reused template)',
      '100% mobile-first layout',
      'Interactive product galleries, trust badges, and reviews',
      'Speed-optimized Liquid + JS architecture',
    ],
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 2,
    number: '02',
    title: 'Complete Store Setup',
    subtitle: '⚙️ Launch-Ready',
    description: 'Full configuration from products to payments',
    icon: <Settings className="w-6 h-6" />,
    highlights: [
      'Product, collection & navigation setup',
      'Payment, shipping, and tax configuration',
      'WhatsApp / email / CRM integrations',
      'Domain, policies, and launch checklist',
    ],
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 3,
    number: '03',
    title: 'Sales & Conversion Optimization',
    subtitle: '🧠 Data-Driven CRO',
    description: 'Psychology-backed strategies to maximize revenue',
    icon: <TrendingUp className="w-6 h-6" />,
    highlights: [
      'Smart upsells & bundles',
      'Sticky "Buy Now" bars',
      'Abandoned cart recovery',
      'Countdown timers & scarcity widgets',
      'Heatmap analysis + A/B testing',
    ],
    color: 'from-[#00B894] to-emerald-500',
    gradient: 'from-[#00B894]/10 to-emerald-500/10',
  },
  {
    id: 4,
    number: '04',
    title: 'Automation & Marketing Integrations',
    subtitle: '🤖 Smart Workflows',
    description: 'Connect your entire sales ecosystem',
    icon: <Zap className="w-6 h-6" />,
    highlights: [
      'Klaviyo / Omnisend automations',
      'Google & Meta pixels',
      'WhatsApp Business API for order updates',
      'Zapier workflows (lead sync, CRM, analytics)',
    ],
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    id: 5,
    number: '05',
    title: 'SEO & Speed Optimization',
    subtitle: '📊 Performance First',
    description: 'Lightning-fast stores that rank on Google',
    icon: <Search className="w-6 h-6" />,
    highlights: [
      'On-page SEO setup',
      'Schema + meta optimization',
      'Image compression & lazy-load',
      'Lighthouse performance score 90+',
    ],
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-500/10 to-purple-500/10',
  },
];

const FeaturesSection = () => {
  console.log('[FeaturesSection] Rendering features section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1C4E80]/10 to-[#00B894]/10 border border-[#1C4E80]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1C4E80]" />
            <span className="text-sm font-semibold text-gray-700">Complete Solution</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What You Get
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              In Your Package
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end Shopify solutions that cover every aspect of your online store
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="space-y-6 lg:space-y-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isInView: boolean;
}

const FeatureCard = ({ feature, index, isInView }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left: Icon and number */}
          <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6">
            {/* Large number */}
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
              {feature.number}
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
            >
              {feature.icon}
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            {/* Title and subtitle */}
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                {feature.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 text-base sm:text-lg">
              {feature.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {feature.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mt-0.5`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
