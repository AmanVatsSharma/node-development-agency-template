'use client';

/**
 * @fileoverview Ecosystem Overview - Complete service mastery showcase
 * @description Visual overview of the complete Google Ads ecosystem with interactive elements
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive ecosystem visualization
 * - Service hierarchy and relationships
 * - Industry coverage demonstration
 * - Key metrics and achievements
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Globe,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Car,
  Home,
  Laptop
} from 'lucide-react';

export function EcosystemOverview() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const ecosystemData = {
    tiers: [
      {
        name: 'Tier 1 - Enterprise',
        color: 'from-blue-600 to-blue-800',
        services: [
          {
            id: 'enterprise',
            name: 'Enterprise Google Ads Management',
            description: 'Complete enterprise-level management with dedicated teams',
            icon: Target,
            metrics: { roas: '8.5×', clients: '50+' }
          },
          {
            id: 'ecommerce',
            name: 'E-commerce Google Ads Optimization',
            description: 'Specialized e-commerce campaign optimization',
            icon: ShoppingCart,
            metrics: { sales: '+320%', conversion: '12.4%' }
          },
          {
            id: 'b2b',
            name: 'B2B Lead Generation',
            description: 'High-quality B2B leads through targeted campaigns',
            icon: Users,
            metrics: { leads: '500+', quality: '9.2/10' }
          }
        ]
      },
      {
        name: 'Tier 2 - Growth',
        color: 'from-purple-600 to-purple-800',
        services: [
          {
            id: 'local',
            name: 'Local Business Google Ads',
            description: 'Local-focused campaigns for foot traffic and calls',
            icon: Building2,
            metrics: { calls: '+180%', traffic: '+65%' }
          },
          {
            id: 'youtube',
            name: 'YouTube Advertising Management',
            description: 'Video advertising for brand awareness and conversions',
            icon: Zap,
            metrics: { views: '15.2%', engagement: '8.7%' }
          },
          {
            id: 'performance',
            name: 'Performance Max Campaigns',
            description: 'AI-powered campaigns across all Google networks',
            icon: BarChart3,
            metrics: { reach: '+250%', efficiency: '35%' }
          }
        ]
      },
      {
        name: 'Tier 3 - Optimization',
        color: 'from-green-600 to-green-800',
        services: [
          {
            id: 'audit',
            name: 'Google Ads Audit & Strategy',
            description: 'Comprehensive audit and strategic recommendations',
            icon: Star,
            metrics: { issues: '12-25', roi: '300%' }
          },
          {
            id: 'landing',
            name: 'Landing Page Optimization',
            description: 'Convert more visitors with optimized landing pages',
            icon: Shield,
            metrics: { conversion: '15.8%', speed: '2.1s' }
          }
        ]
      }
    ],
    industries: [
      { name: 'Real Estate', icon: Home, color: 'text-blue-600', clients: '25+' },
      { name: 'Healthcare', icon: Heart, color: 'text-red-600', clients: '30+' },
      { name: 'E-commerce', icon: ShoppingCart, color: 'text-green-600', clients: '40+' },
      { name: 'B2B Services', icon: Building2, color: 'text-purple-600', clients: '35+' },
      { name: 'SaaS', icon: Laptop, color: 'text-indigo-600', clients: '20+' },
      { name: 'Education', icon: GraduationCap, color: 'text-yellow-600', clients: '15+' },
      { name: 'Automotive', icon: Car, color: 'text-gray-600', clients: '10+' },
      { name: 'Technology', icon: Globe, color: 'text-cyan-600', clients: '25+' }
    ],
    achievements: [
      { metric: '500+', label: 'Campaigns Managed', icon: Target },
      { metric: '₹50Cr+', label: 'Revenue Generated', icon: TrendingUp },
      { metric: '98%', label: 'Client Satisfaction', icon: Star },
      { metric: '10+', label: 'Years Experience', icon: Award }
    ]
  };

  const handleServiceHover = (serviceId: string) => {
    setActiveService(serviceId);
    console.log(`[EcosystemOverview] Service hovered: ${serviceId}`);
  };

  const handleServiceLeave = () => {
    setActiveService(null);
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
            Complete Google Ads
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ecosystem Mastery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise management to specialized optimization, our comprehensive ecosystem 
            covers every aspect of Google Ads success across all industries and business sizes.
          </p>
        </motion.div>

        {/* Ecosystem Visualization */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-96 lg:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50" />
            
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <Target className="w-12 h-12 text-white" />
            </motion.div>

            {/* Service Tiers */}
            {ecosystemData.tiers.map((tier, tierIndex) => (
              <div key={tier.name} className="absolute">
                {tier.services.map((service, serviceIndex) => {
                  const totalServices = tier.services.length;
                  const angle = (serviceIndex * 360) / totalServices + (tierIndex * 120);
                  const radius = 80 + (tierIndex * 60);
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={service.id}
                      className="absolute w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg cursor-pointer group"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`
                      }}
                      onHoverStart={() => handleServiceHover(service.id)}
                      onHoverEnd={handleServiceLeave}
                      whileHover={{ scale: 1.2, zIndex: 20 }}
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        y: { duration: 3 + serviceIndex * 0.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <service.icon className={`w-8 h-8 ${
                        tierIndex === 0 ? 'text-blue-600' : 
                        tierIndex === 1 ? 'text-purple-600' : 'text-green-600'
                      }`} />
                    </motion.div>
                  );
                })}
              </div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {ecosystemData.tiers.map((tier, tierIndex) =>
                tier.services.map((service, serviceIndex) => {
                  const totalServices = tier.services.length;
                  const angle = (serviceIndex * 360) / totalServices + (tierIndex * 120);
                  const radius = 80 + (tierIndex * 60);
                  const x1 = 50;
                  const y1 = 50;
                  const x2 = 50 + (Math.cos((angle * Math.PI) / 180) * radius * 0.5);
                  const y2 = 50 + (Math.sin((angle * Math.PI) / 180) * radius * 0.5);

                  return (
                    <motion.line
                      key={`${tierIndex}-${serviceIndex}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke={`url(#gradient-${tierIndex})`}
                      strokeWidth="2"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1 + serviceIndex * 0.1, duration: 1 }}
                    />
                  );
                })
              )}
              <defs>
                <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
                <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>

            {/* Active Service Details */}
            <AnimatePresence>
              {activeService && (
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-xl p-6 shadow-xl max-w-sm z-30"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const service = ecosystemData.tiers
                      .flatMap(tier => tier.services)
                      .find(s => s.id === activeService);
                    
                    if (!service) return null;

                    return (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(service.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-blue-600">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Service Tiers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {ecosystemData.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mb-6`}>
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
              
              <div className="space-y-4">
                {tier.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <service.icon className={`w-5 h-5 ${
                      index === 0 ? 'text-blue-600' : 
                      index === 1 ? 'text-purple-600' : 'text-green-600'
                    }`} />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Coverage */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {ecosystemData.industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <div className="font-medium text-gray-900 text-sm mb-1">{industry.name}</div>
                <div className="text-xs text-gray-500">{industry.clients} clients</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Track Record
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ecosystemData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EcosystemOverview;