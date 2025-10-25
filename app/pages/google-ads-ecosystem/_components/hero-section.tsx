'use client';

/**
 * @fileoverview Hero Section - Google Ads Ecosystem Hub
 * @description High-impact hero section showcasing the complete Google Ads ecosystem
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Phone,
  CheckCircle,
  Shield,
  Zap,
  BarChart3,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const handleCTAClick = (ctaType: string) => {
    console.log(`[Ecosystem-Hero] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ecosystem_hero_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const services = [
    { name: 'Enterprise Ads', icon: Target, color: 'text-blue-400' },
    { name: 'E-commerce', icon: Globe, color: 'text-orange-400' },
    { name: 'B2B Lead Gen', icon: Users, color: 'text-green-400' },
    { name: 'Local Business', icon: BarChart3, color: 'text-purple-400' },
    { name: 'YouTube Ads', icon: Zap, color: 'text-red-400' },
    { name: 'Performance Max', icon: TrendingUp, color: 'text-indigo-400' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20" />
        
        {/* Floating Service Icons */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`absolute ${service.color} opacity-20`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 12)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <service.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                India's Complete Google Ads Ecosystem
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Master Every
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Google Ads Channel
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                From Enterprise campaigns to Local business ads, we're India's only 
                agency that masters every Google Ads channel. Get 6.5×+ ROAS across 
                Search, Display, YouTube, Shopping, and Performance Max campaigns.
              </motion.p>
            </div>

            {/* Service Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                  <span className="text-white text-sm font-medium">{service.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Google Ads Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#services"
                onClick={() => handleCTAClick('view_services')}
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                Explore All Services
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>6.5× Average ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>8 Service Channels</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Complete Google Ads Ecosystem
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Target className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-white font-semibold">Enterprise Management</div>
                    <div className="text-gray-300 text-sm">₹75K-₹2L+/month</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Globe className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="text-white font-semibold">E-commerce Optimization</div>
                    <div className="text-gray-300 text-sm">₹50K-₹1.5L/month</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Users className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-white font-semibold">B2B Lead Generation</div>
                    <div className="text-gray-300 text-sm">₹60K-₹1.25L/month</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Local Business Ads</div>
                    <div className="text-gray-300 text-sm">₹25K-₹75K/month</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}