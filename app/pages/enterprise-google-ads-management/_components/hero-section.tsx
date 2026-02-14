'use client';

/**
 * @fileoverview Hero Section - Enterprise Google Ads Management
 * @description High-impact hero section for enterprise-level Google Ads management
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
  Zap
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const handleCTAClick = (ctaType: string) => {
    console.log(`[Enterprise-Hero] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'enterprise_hero_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
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
                India's #1 Enterprise Google Ads Agency
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Hire Enterprise Google Ads Expert
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Professional Enterprise Google Ads Management Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Scale your business with our enterprise-grade Google Ads management. 
                We deliver 8.5× ROAS, 24/7 monitoring, and dedicated account management 
                for businesses spending ₹10L+ monthly on Google Ads.
              </motion.p>
            </div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">8.5×</div>
                <div className="text-sm text-gray-400">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">₹50Cr+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
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
                Call Enterprise Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                Schedule Consultation
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
                <span>8.5× ROAS Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Dedicated Team</span>
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
                Enterprise Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Target className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-white font-semibold">Advanced Targeting</div>
                    <div className="text-gray-300 text-sm">Precise audience segmentation</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-white font-semibold">Performance Analytics</div>
                    <div className="text-gray-300 text-sm">Real-time reporting & insights</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Users className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Dedicated Team</div>
                    <div className="text-gray-300 text-sm">24/7 account management</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-semibold">Automation</div>
                    <div className="text-gray-300 text-sm">AI-powered optimization</div>
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