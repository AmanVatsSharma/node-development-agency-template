'use client';

/**
 * @fileoverview ServiceCard Component - Interactive service showcase for Google Ads Ecosystem
 * @description Reusable card component for displaying services with CTAs, pricing, and navigation
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive hover effects and animations
 * - Dynamic pricing display
 * - Service-specific CTAs
 * - Cross-navigation to related services
 * - Mobile-optimized responsive design
 * - Conversion tracking integration
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
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
  className?: string;
}

export function ServiceCard({
  title,
  description,
  price,
  priceNote,
  tier,
  icon,
  features,
  ctaText,
  ctaLink,
  isPopular = false,
  isNew = false,
  metrics = [],
  relatedServices = [],
  industry = [],
  className = ''
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCTAClick = () => {
    console.log(`[ServiceCard] CTA clicked: ${title} - ${ctaText}`);
    
    // Track conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_card_cta_click', {
        service_title: title,
        service_tier: tier,
        cta_text: ctaText,
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
    <motion.div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Popular/New Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {isPopular && (
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            ⭐ Most Popular
          </motion.div>
        )}
        {isNew && (
          <motion.div
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            ✨ New
          </motion.div>
        )}
      </div>

      {/* Tier Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTierBadgeColor(tier)}`}>
          {tier}
        </span>
      </div>

      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{price}</span>
            {priceNote && (
              <span className="text-sm text-gray-500">{priceNote}</span>
            )}
          </div>
        </div>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Industry Tags */}
        {industry.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {industry.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6">
        <Link href={ctaLink} onClick={handleCTAClick}>
          <motion.button
            className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              isPopular 
                ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600'
                : `bg-gradient-to-r ${getTierColor(tier)} hover:opacity-90`
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <motion.div
          className="px-6 pb-4 border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4">
            <p className="text-xs text-gray-500 mb-2">Related Services:</p>
            <div className="flex flex-wrap gap-1">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-yellow-500/5 opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default ServiceCard;