'use client';

/**
 * @fileoverview Service Tiers - Interactive tier-based service showcase
 * @description Component showing service hierarchy with filtering and detailed information
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive tier filtering
 * - Service comparison capabilities
 * - Detailed service information
 * - Mobile-optimized responsive design
 * - Conversion tracking integration
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Star, 
  Zap, 
  BarChart3, 
  Shield, 
  Award,
  ArrowRight,
  CheckCircle,
  Filter,
  X
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  isNew?: boolean;
  metrics?: {
    label: string;
    value: string;
    trend?: 'up' | 'down' | 'stable';
  }[];
  relatedServices?: {
    title: string;
    link: string;
  }[];
  industry?: string[];
}

interface ServiceTiersProps {
  services: Service[];
  selectedTier: string;
  onTierChange: (tier: string) => void;
}

export function ServiceTiers({ services, selectedTier, onTierChange }: ServiceTiersProps) {
  const tiers = [
    { id: 'All Tiers', name: 'All Services', count: services.length, color: 'from-gray-600 to-gray-800' },
    { id: 'Tier 1', name: 'Enterprise', count: services.filter(s => s.tier === 'Tier 1').length, color: 'from-blue-600 to-blue-800' },
    { id: 'Tier 2', name: 'Growth', count: services.filter(s => s.tier === 'Tier 2').length, color: 'from-purple-600 to-purple-800' },
    { id: 'Tier 3', name: 'Optimization', count: services.filter(s => s.tier === 'Tier 3').length, color: 'from-green-600 to-green-800' }
  ];

  const filteredServices = selectedTier === 'All Tiers' 
    ? services 
    : services.filter(service => service.tier === selectedTier);

  const handleTierClick = (tierId: string) => {
    onTierChange(tierId);
    console.log(`[ServiceTiers] Tier selected: ${tierId}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tier_filter_click', {
        selected_tier: tierId,
        page_location: window.location.pathname
      });
    }
  };

  const handleServiceClick = (serviceTitle: string, serviceTier: string) => {
    console.log(`[ServiceTiers] Service clicked: ${serviceTitle} (${serviceTier})`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_click', {
        service_title: serviceTitle,
        service_tier: serviceTier,
        page_location: window.location.pathname
      });
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Tier 1': return 'from-blue-600 to-blue-800';
      case 'Tier 2': return 'from-purple-600 to-purple-800';
      case 'Tier 3': return 'from-green-600 to-green-800';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'Tier 1': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Tier 2': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Tier 3': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-white">
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
            Service Tiers
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Designed for Every Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise management to specialized optimization, our tiered approach 
            ensures the perfect Google Ads solution for your business size and goals.
          </p>
        </motion.div>

        {/* Tier Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {tiers.map((tier) => (
            <motion.button
              key={tier.id}
              onClick={() => handleTierClick(tier.id)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedTier === tier.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <span>{tier.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedTier === tier.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tier.count}
                </span>
              </div>
              
              {selectedTier === tier.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -z-10"
                  layoutId="activeTier"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                {/* Service Header */}
                <div className="p-6 pb-4">
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTierBadgeColor(service.tier)}`}>
                      {service.tier}
                    </span>
                    <div className="flex gap-2">
                      {service.isPopular && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      {service.isNew && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                      {service.priceNote && (
                        <span className="text-sm text-gray-500">{service.priceNote}</span>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  {service.metrics && service.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {service.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          className="bg-gray-50 rounded-lg p-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: metricIndex * 0.1 }}
                        >
                          <div className="flex items-center gap-2">
                            {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                            {metric.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />}
                            {metric.trend === 'stable' && <Target className="w-4 h-4 text-blue-500" />}
                            <span className="text-xs text-gray-600">{metric.label}</span>
                          </div>
                          <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Industry Tags */}
                  {service.industry && service.industry.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.industry.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.industry.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                            +{service.industry.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Link 
                    href={service.ctaLink}
                    onClick={() => handleServiceClick(service.title, service.tier)}
                  >
                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                        service.isPopular 
                          ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600'
                          : `bg-gradient-to-r ${getTierColor(service.tier)} hover:opacity-90`
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {service.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-yellow-500/5 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tier Comparison CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Tier?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts can help you determine the perfect Google Ads solution 
              based on your business size, goals, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#roi-calculator"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Get Free Consultation
              </Link>
              <Link
                href="tel:+919876543210"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 border border-blue-600"
              >
                <ArrowRight className="w-5 h-5" />
                Call Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceTiers;