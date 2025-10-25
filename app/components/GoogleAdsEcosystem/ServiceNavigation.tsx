'use client';

/**
 * @fileoverview ServiceNavigation Component - Cross-service navigation for Google Ads Ecosystem
 * @description Navigation component that shows related services and ecosystem connections
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Dynamic service recommendations
 * - Cross-navigation between related services
 * - Service hierarchy visualization
 * - Mobile-optimized navigation
 * - Conversion tracking for navigation clicks
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, TrendingUp, Target, Zap } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  price: string;
  link: string;
  icon: React.ReactNode;
  isPopular?: boolean;
  isNew?: boolean;
  relatedServices?: string[];
  industry?: string[];
}

interface ServiceNavigationProps {
  currentService?: string;
  showAllServices?: boolean;
  className?: string;
}

const allServices: Service[] = [
  // Tier 1 Services
  {
    id: 'enterprise-google-ads',
    title: 'Enterprise Google Ads Management',
    description: 'Complete enterprise-level Google Ads management with dedicated team',
    tier: 'Tier 1',
    price: '₹75K-₹2L+/month',
    link: '/pages/enterprise-google-ads-management',
    icon: <Target className="w-6 h-6" />,
    isPopular: true,
    relatedServices: ['ecommerce-google-ads', 'b2b-lead-generation', 'google-ads-audit'],
    industry: ['Real Estate', 'Healthcare', 'B2B Services', 'SaaS']
  },
  {
    id: 'ecommerce-google-ads',
    title: 'E-commerce Google Ads Optimization',
    description: 'Specialized e-commerce campaign optimization for maximum conversions',
    tier: 'Tier 1',
    price: '₹50K-₹1.5L/month',
    link: '/pages/ecommerce-google-ads-optimization',
    icon: <TrendingUp className="w-6 h-6" />,
    relatedServices: ['enterprise-google-ads', 'performance-max', 'landing-page-optimization'],
    industry: ['E-commerce', 'Retail', 'Fashion', 'Electronics']
  },
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    description: 'High-quality B2B leads through targeted Google Ads campaigns',
    tier: 'Tier 1',
    price: '₹60K-₹1.25L/month',
    link: '/pages/b2b-lead-generation-ads',
    icon: <Target className="w-6 h-6" />,
    relatedServices: ['enterprise-google-ads', 'google-ads-audit', 'landing-page-optimization'],
    industry: ['B2B Services', 'SaaS', 'Consulting', 'Technology']
  },
  // Tier 2 Services
  {
    id: 'local-business-ads',
    title: 'Local Business Google Ads',
    description: 'Local-focused campaigns to drive foot traffic and calls',
    tier: 'Tier 2',
    price: '₹25K-₹75K/month',
    link: '/pages/local-business-google-ads',
    icon: <Target className="w-6 h-6" />,
    relatedServices: ['youtube-advertising', 'google-ads-audit'],
    industry: ['Restaurants', 'Healthcare', 'Beauty', 'Automotive']
  },
  {
    id: 'youtube-advertising',
    title: 'YouTube Advertising Management',
    description: 'Video advertising campaigns for brand awareness and conversions',
    tier: 'Tier 2',
    price: '₹35K-₹85K/month',
    link: '/pages/youtube-advertising-management',
    icon: <Zap className="w-6 h-6" />,
    isNew: true,
    relatedServices: ['performance-max', 'ecommerce-google-ads'],
    industry: ['Education', 'Entertainment', 'Technology', 'Fashion']
  },
  {
    id: 'performance-max',
    title: 'Performance Max Campaigns',
    description: 'AI-powered campaigns across all Google networks',
    tier: 'Tier 2',
    price: '₹40K-₹90K/month',
    link: '/pages/performance-max-campaigns',
    icon: <TrendingUp className="w-6 h-6" />,
    relatedServices: ['ecommerce-google-ads', 'youtube-advertising'],
    industry: ['E-commerce', 'Retail', 'Fashion', 'Electronics']
  },
  // Tier 3 Services
  {
    id: 'google-ads-audit',
    title: 'Google Ads Audit & Strategy',
    description: 'Comprehensive audit and strategic recommendations',
    tier: 'Tier 3',
    price: '₹25K-₹75K one-time',
    link: '/pages/google-ads-audit-strategy',
    icon: <Star className="w-6 h-6" />,
    relatedServices: ['enterprise-google-ads', 'b2b-lead-generation', 'landing-page-optimization'],
    industry: ['All Industries']
  },
  {
    id: 'landing-page-optimization',
    title: 'Landing Page Optimization',
    description: 'Convert more visitors with optimized landing pages',
    tier: 'Tier 3',
    price: '₹30K-₹1L one-time',
    link: '/pages/landing-page-optimization',
    icon: <Target className="w-6 h-6" />,
    relatedServices: ['ecommerce-google-ads', 'b2b-lead-generation', 'google-ads-audit'],
    industry: ['All Industries']
  }
];

export function ServiceNavigation({ 
  currentService, 
  showAllServices = false, 
  className = '' 
}: ServiceNavigationProps) {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');

  const currentServiceData = allServices.find(service => service.id === currentService);
  const relatedServices = currentServiceData?.relatedServices || [];
  const relatedServicesData = allServices.filter(service => 
    relatedServices.includes(service.id)
  );

  const filteredServices = showAllServices 
    ? allServices.filter(service => 
        selectedIndustry === 'All Industries' || 
        service.industry?.includes(selectedIndustry)
      )
    : relatedServicesData;

  const servicesByTier = filteredServices.reduce((acc, service) => {
    if (!acc[service.tier]) {
      acc[service.tier] = [];
    }
    acc[service.tier].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const handleServiceClick = (serviceId: string, serviceTitle: string) => {
    console.log(`[ServiceNavigation] Service clicked: ${serviceTitle} (${serviceId})`);
    
    // Track navigation clicks
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_navigation_click', {
        service_id: serviceId,
        service_title: serviceTitle,
        current_service: currentService,
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

  const industries = ['All Industries', ...Array.from(new Set(
    allServices.flatMap(service => service.industry || [])
  ))];

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {showAllServices ? 'Complete Google Ads Ecosystem' : 'Related Services'}
        </h3>
        <p className="text-gray-600">
          {showAllServices 
            ? 'Explore our full range of Google Ads services tailored to your business needs'
            : 'Discover complementary services that can enhance your Google Ads performance'
          }
        </p>
      </div>

      {/* Industry Filter (only for all services view) */}
      {showAllServices && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
      )}

      {/* Services by Tier */}
      <div className="space-y-6">
        {Object.entries(servicesByTier).map(([tier, services]) => (
          <div key={tier} className="space-y-4">
            {/* Tier Header */}
            <motion.button
              onClick={() => setExpandedTier(expandedTier === tier ? null : tier)}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getTierBadgeColor(tier)}`}>
                  {tier}
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {services.length} Service{services.length !== 1 ? 's' : ''}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  expandedTier === tier ? 'rotate-180' : ''
                }`} 
              />
            </motion.button>

            {/* Services in Tier */}
            <AnimatePresence>
              {expandedTier === tier && (
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {service.title}
                            </h4>
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
                          <p className="text-xs text-gray-600 mb-2">
                            {service.description}
                          </p>
                          <div className="text-sm font-semibold text-gray-900 mb-3">
                            {service.price}
                          </div>
                        </div>
                      </div>

                      <Link 
                        href={service.link}
                        onClick={() => handleServiceClick(service.id, service.title)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Ecosystem Overview */}
      {showAllServices && (
        <motion.div
          className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-yellow-50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
            Why Choose Our Complete Ecosystem?
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">8+</div>
              <div className="text-sm text-gray-600">Specialized Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Service Tiers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Industry Coverage</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/pages/google-ads-ecosystem"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-yellow-600 transition-all duration-300"
          onClick={() => {
            console.log('[ServiceNavigation] Ecosystem CTA clicked');
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'ecosystem_cta_click', {
                page_location: window.location.pathname
              });
            }
          }}
        >
          Explore Complete Ecosystem
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}

export default ServiceNavigation;