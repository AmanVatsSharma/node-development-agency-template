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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
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
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Award className="w-4 h-4" />
              Enterprise Google Ads Management
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Dedicated Team,
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Enterprise Results
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Complete enterprise-level Google Ads management with dedicated teams, 
              advanced strategies, and 24/7 monitoring. Built for businesses that demand excellence.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                'Dedicated account manager & team',
                '24/7 campaign monitoring',
                'Advanced automation & AI',
                'Custom reporting dashboard',
                'Priority support & consultation'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="#roi-calculator"
                onClick={() => handleCTAClick('roi_calculator')}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <TrendingUp className="w-5 h-5" />
                Calculate Enterprise ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Enterprise Team
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">8.5×</div>
                  <div className="text-blue-200 text-sm">Average ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-blue-200 text-sm">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">₹50Cr+</div>
                  <div className="text-blue-200 text-sm">Revenue Generated</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Enterprise Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Enterprise Dashboard</h3>
                  <p className="text-gray-600">Live Performance Monitoring</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">₹2.4L</div>
                  <div className="text-sm text-gray-600">Ad Spend</div>
                  <div className="text-xs text-green-600">+12% vs last month</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">487</div>
                  <div className="text-sm text-gray-600">Leads Generated</div>
                  <div className="text-xs text-green-600">+34% vs last month</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">8.2%</div>
                  <div className="text-sm text-gray-600">CTR</div>
                  <div className="text-xs text-green-600">+22% vs last month</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">12.4%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-xs text-green-600">+18% vs last month</div>
                </div>
              </div>

              {/* ROAS Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">ROAS Performance</h4>
                <div className="flex items-end gap-2 h-20">
                  {[3.2, 4.1, 5.8, 6.2, 7.1, 8.5, 8.2].map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1"
                      style={{ height: `${(value / 8.5) * 100}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${(value / 8.5) * 100}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Week 1</span>
                  <span>Week 7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;