'use client';

/**
 * @fileoverview Pricing Overview - Transparent ecosystem pricing showcase
 * @description Component showing comprehensive pricing across all service tiers
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Tiered pricing display
 * - Service comparison table
 * - ROI calculator integration
 * - Transparent pricing breakdown
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  X,
  Star,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  Calculator,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  color: string;
  isPopular: boolean;
  services: {
    name: string;
    included: boolean;
    description: string;
  }[];
  features: string[];
  ctaText: string;
  ctaLink: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const pricingTiers: PricingTier[] = [
  {
    id: 'tier-1',
    name: 'Tier 1 - Enterprise',
    description: 'Complete enterprise-level Google Ads management with dedicated teams',
    price: '₹75K-₹2L+',
    priceNote: 'per month based on ad spend',
    color: 'from-blue-600 to-blue-800',
    isPopular: false,
    services: [
      { name: 'Enterprise Google Ads Management', included: true, description: 'Dedicated account manager and team' },
      { name: 'E-commerce Google Ads Optimization', included: true, description: 'Complete e-commerce campaign optimization' },
      { name: 'B2B Lead Generation', included: true, description: 'High-quality B2B lead generation' },
      { name: 'Local Business Google Ads', included: true, description: 'Local-focused campaigns' },
      { name: 'YouTube Advertising Management', included: true, description: 'Video advertising campaigns' },
      { name: 'Performance Max Campaigns', included: true, description: 'AI-powered multi-network campaigns' },
      { name: 'Google Ads Audit & Strategy', included: true, description: 'Comprehensive audit and strategy' },
      { name: 'Landing Page Optimization', included: true, description: 'Conversion-focused landing pages' }
    ],
    features: [
      'Dedicated account manager',
      '24/7 campaign monitoring',
      'Weekly strategy calls',
      'Custom reporting dashboard',
      'Advanced automation',
      'Priority support',
      'Unlimited revisions',
      'Data ownership guarantee'
    ],
    ctaText: 'Get Enterprise Quote',
    ctaLink: '/pages/enterprise-google-ads-management',
    metrics: [
      { label: 'Avg ROAS', value: '8.5×' },
      { label: 'Client Success', value: '98%' }
    ]
  },
  {
    id: 'tier-2',
    name: 'Tier 2 - Growth',
    description: 'Perfect for growing businesses ready to scale their Google Ads presence',
    price: '₹25K-₹75K',
    priceNote: 'per month based on service selection',
    color: 'from-purple-600 to-purple-800',
    isPopular: true,
    services: [
      { name: 'Enterprise Google Ads Management', included: false, description: 'Available as add-on' },
      { name: 'E-commerce Google Ads Optimization', included: true, description: 'E-commerce campaign optimization' },
      { name: 'B2B Lead Generation', included: true, description: 'B2B lead generation campaigns' },
      { name: 'Local Business Google Ads', included: true, description: 'Local business campaigns' },
      { name: 'YouTube Advertising Management', included: true, description: 'Video advertising management' },
      { name: 'Performance Max Campaigns', included: true, description: 'Performance Max campaigns' },
      { name: 'Google Ads Audit & Strategy', included: true, description: 'Audit and strategy included' },
      { name: 'Landing Page Optimization', included: false, description: 'Available as add-on' }
    ],
    features: [
      'Account manager',
      'Bi-weekly optimization',
      'Monthly strategy calls',
      'Standard reporting',
      'Basic automation',
      'Email support',
      '3 revisions included',
      'Data transparency'
    ],
    ctaText: 'Choose Growth Plan',
    ctaLink: '/pages/google-ads-ecosystem#pricing',
    metrics: [
      { label: 'Avg ROAS', value: '6.8×' },
      { label: 'Client Success', value: '95%' }
    ]
  },
  {
    id: 'tier-3',
    name: 'Tier 3 - Optimization',
    description: 'Project-based services for specific optimization needs',
    price: '₹15K-₹50K',
    priceNote: 'per project based on scope',
    color: 'from-green-600 to-green-800',
    isPopular: false,
    services: [
      { name: 'Enterprise Google Ads Management', included: false, description: 'Not included' },
      { name: 'E-commerce Google Ads Optimization', included: false, description: 'Available as project' },
      { name: 'B2B Lead Generation', included: false, description: 'Available as project' },
      { name: 'Local Business Google Ads', included: false, description: 'Available as project' },
      { name: 'YouTube Advertising Management', included: false, description: 'Available as project' },
      { name: 'Performance Max Campaigns', included: false, description: 'Available as project' },
      { name: 'Google Ads Audit & Strategy', included: true, description: 'Comprehensive audit and strategy' },
      { name: 'Landing Page Optimization', included: true, description: 'Landing page optimization' }
    ],
    features: [
      'Project-based pricing',
      'One-time deliverables',
      'Strategy consultation',
      'Implementation support',
      'Basic reporting',
      'Email support',
      '1 revision included',
      'Data ownership'
    ],
    ctaText: 'Start Project',
    ctaLink: '/pages/google-ads-audit-strategy',
    metrics: [
      { label: 'Avg ROI', value: '300%' },
      { label: 'Project Success', value: '100%' }
    ]
  }
];

const addOnServices = [
  {
    name: 'Landing Page Optimization',
    price: '₹30K-₹1L',
    description: 'One-time project to optimize your landing pages for better conversions'
  },
  {
    name: 'Google Ads Audit',
    price: '₹25K-₹75K',
    description: 'Comprehensive audit of your existing Google Ads account'
  },
  {
    name: 'Advanced Reporting',
    price: '₹10K/month',
    description: 'Custom reporting dashboard with advanced analytics'
  },
  {
    name: 'Priority Support',
    price: '₹5K/month',
    description: '24/7 priority support and faster response times'
  }
];

export function PricingOverview() {
  const [selectedTier, setSelectedTier] = useState('tier-2');
  const [showComparison, setShowComparison] = useState(false);

  const currentTier = pricingTiers.find(tier => tier.id === selectedTier) || pricingTiers[1];

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    console.log(`[PricingOverview] Tier selected: ${tierId}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pricing_tier_select', {
        tier_id: tierId,
        tier_name: pricingTiers.find(t => t.id === tierId)?.name,
        page_location: window.location.pathname
      });
    }
  };

  const handleCTAClick = (tierId: string, ctaText: string) => {
    console.log(`[PricingOverview] CTA clicked: ${ctaText} for ${tierId}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pricing_cta_click', {
        tier_id: tierId,
        cta_text: ctaText,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ecosystem Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect tier for your business needs. All pricing is transparent with no hidden fees, 
            and you can upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Tier Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pricingTiers.map((tier) => (
            <motion.button
              key={tier.id}
              onClick={() => handleTierSelect(tier.id)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedTier === tier.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <span>{tier.name}</span>
                {tier.isPopular && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    Popular
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Tier Details */}
        <motion.div
          key={selectedTier}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Pricing Info */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentTier.color} rounded-xl flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentTier.name}</h3>
                    <p className="text-gray-600">{currentTier.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{currentTier.price}</div>
                  <div className="text-gray-500">{currentTier.priceNote}</div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentTier.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {currentTier.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={currentTier.ctaLink}
                onClick={() => handleCTAClick(currentTier.id, currentTier.ctaText)}
              >
                <motion.button
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    currentTier.isPopular
                      ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600'
                      : `bg-gradient-to-r ${currentTier.color} hover:opacity-90`
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentTier.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            {/* Right Column - Services Included */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Services Included</h4>
              
              <div className="space-y-4">
                {currentTier.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {service.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{service.name}</h5>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add-on Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Add-on Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Comparison Toggle */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto border border-blue-600"
          >
            <BarChart3 className="w-5 h-5" />
            {showComparison ? 'Hide' : 'Show'} Detailed Comparison
          </button>
        </motion.div>

        {/* Detailed Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      {pricingTiers.map((tier) => (
                        <th key={tier.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingTiers[0].services.map((service, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{service.name}</td>
                        {pricingTiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 text-center">
                            {tier.services[index]?.included ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ROI Calculator CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Not Sure Which Tier is Right for You?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our ROI calculator to see which services will give you the best return on investment 
            for your specific business needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate My ROI
            </Link>
            
            <Link
              href="tel:+919876543210"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              <Shield className="w-5 h-5" />
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingOverview;