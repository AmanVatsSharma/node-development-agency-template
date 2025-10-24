'use client';

/**
 * @fileoverview Hero Section - Google Ads Ecosystem Mastery Showcase
 * @description High-impact hero section positioning as India's premier Google Ads ecosystem
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Animated ecosystem visualization
 * - Interactive service discovery
 * - Dynamic metrics and statistics
 * - Multiple conversion points
 * - Mobile-optimized design
 * - Trust signals and credibility indicators
 */

import React, { useState, useEffect } from 'react';
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
  Play,
  Calculator,
  Phone
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const metrics = [
    { label: 'Average ROAS', value: '8.5×', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'text-yellow-500' },
    { label: 'Campaigns Managed', value: '500+', icon: Target, color: 'text-blue-500' },
    { label: 'Revenue Generated', value: '₹50Cr+', icon: BarChart3, color: 'text-purple-500' }
  ];

  const ecosystemServices = [
    { name: 'Enterprise Management', icon: Target, tier: 'Tier 1' },
    { name: 'E-commerce Optimization', icon: TrendingUp, tier: 'Tier 1' },
    { name: 'B2B Lead Generation', icon: Users, tier: 'Tier 1' },
    { name: 'Local Business Ads', icon: Target, tier: 'Tier 2' },
    { name: 'YouTube Advertising', icon: Play, tier: 'Tier 2' },
    { name: 'Performance Max', icon: BarChart3, tier: 'Tier 2' },
    { name: 'Google Ads Audit', icon: Star, tier: 'Tier 3' },
    { name: 'Landing Page Optimization', icon: Shield, tier: 'Tier 3' }
  ];

  const trustSignals = [
    'Google Partner Certified',
    '10+ Years Experience',
    '500+ Successful Campaigns',
    '98% Client Retention Rate'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (ctaType: string) => {
    console.log(`[HeroSection] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'hero_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    console.log('[HeroSection] Video play clicked');
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'video_play', {
        video_title: 'Google Ads Ecosystem Overview',
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        {/* Floating Service Icons */}
        {ecosystemServices.map((service, index) => (
          <motion.div
            key={service.name}
            className="absolute opacity-10"
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${20 + (index % 3) * 25}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <service.icon className="w-8 h-8 text-white" />
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
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Award className="w-4 h-4" />
              India's Premier Google Ads Ecosystem
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Master-Level
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Google Ads
              </span>
              <span className="block">Ecosystem</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Complete suite of Google Ads services designed for every business size and industry. 
              From enterprise management to specialized optimization - we've got you covered.
            </motion.p>

            {/* Trust Signals */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white font-medium">{signal}</span>
                </div>
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
                <Calculator className="w-5 h-5" />
                Calculate My ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
            </motion.div>

            {/* Live Metrics */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Live Performance</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400 font-medium">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className={`text-center p-3 rounded-lg ${
                      currentMetric === index ? 'bg-white/20' : 'bg-white/5'
                    } transition-all duration-500`}
                    animate={{
                      scale: currentMetric === index ? 1.05 : 1,
                      backgroundColor: currentMetric === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-blue-200">{metric.label}</div>
                  </motion.div>
                ))}
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
            {/* Ecosystem Visualization */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Target className="w-16 h-16 text-white" />
              </motion.div>

              {/* Service Nodes */}
              {ecosystemServices.map((service, index) => {
                const angle = (index * 360) / ecosystemServices.length;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={service.name}
                    className="absolute w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`
                    }}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {ecosystemServices.map((_, index) => {
                  const angle = (index * 360) / ecosystemServices.length;
                  const radius = 120;
                  const x1 = 50 + (Math.cos((angle * Math.PI) / 180) * radius / 2);
                  const y1 = 50 + (Math.sin((angle * Math.PI) / 180) * radius / 2);
                  const x2 = 50 + (Math.cos((angle * Math.PI) / 180) * radius);
                  const y2 = 50 + (Math.sin((angle * Math.PI) / 180) * radius);

                  return (
                    <motion.line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Video CTA */}
            <motion.div
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
              <button
                onClick={handleVideoPlay}
                className="group bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { label: 'Services', value: '8+' },
            { label: 'Industries', value: '15+' },
            { label: 'Client Success', value: '98%' },
            { label: 'Years Experience', value: '10+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;