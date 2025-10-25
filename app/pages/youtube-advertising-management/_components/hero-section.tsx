import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target, TrendingUp, Zap, ArrowRight, Star, Users, Eye, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const handleCTAClick = (ctaType: string) => {
    console.log(`[YouTube-Hero] CTA clicked: ${ctaType}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'youtube_hero_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const handleVideoPlay = () => {
    console.log('[YouTube-Hero] Video play clicked');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'video_play', {
        video_title: 'YouTube Advertising Success Story',
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating YouTube Icons */}
        <motion.div
          className="absolute top-20 left-10 text-red-400/30"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Play size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-rose-400/30"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Eye size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-pink-400/30"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ThumbsUp size={30} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Play className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">YouTube Advertising Management</span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Tier 2
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Video Ads That
              </span>
              <br />
              <span className="text-white">
                Drive Results
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Dominate YouTube with expert video advertising campaigns that deliver 
              <span className="text-rose-400 font-semibold"> 3.8× ROAS</span> and 
              <span className="text-rose-400 font-semibold"> 2.5M+ video views</span> for your brand.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {[
                { icon: Play, text: "Video Campaigns", metric: "2.5M+ Views" },
                { icon: Target, text: "Precision Targeting", metric: "3.8× ROAS" },
                { icon: TrendingUp, text: "Brand Awareness", metric: "85% Reach" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <feature.icon className="w-6 h-6 text-rose-400 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-white font-medium text-sm">{feature.text}</div>
                    <div className="text-rose-400 font-bold text-lg">{feature.metric}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#roi-calculator"
                onClick={() => handleCTAClick('roi_calculator')}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
              >
                <Zap className="w-5 h-5" />
                Calculate Video ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Free Video Strategy
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.7/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-rose-400">180+</span> Video Campaigns
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-rose-400">₹1.5Cr+</span> Revenue Generated
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* YouTube Advertising Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm font-medium">YouTube Ads Dashboard</div>
              </div>

              {/* Video Campaign Stats */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4 border border-red-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-300 text-sm font-medium">Video Views</span>
                    <span className="text-green-400 text-sm font-bold">+2.5M</span>
                  </div>
                  <div className="text-white text-2xl font-bold">2.5M Views</div>
                  <div className="text-gray-300 text-sm">Total campaign</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-red-400 text-sm font-medium">ROAS</div>
                    <div className="text-white text-xl font-bold">3.8×</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-red-400 text-sm font-medium">CTR</div>
                    <div className="text-white text-xl font-bold">4.2%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-500/20 to-red-500/20 rounded-lg p-4 border border-rose-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-rose-300 text-sm font-medium">Brand Awareness</span>
                    <span className="text-green-400 text-sm font-bold">85%</span>
                  </div>
                  <div className="text-white text-lg font-bold">Target Reach</div>
                  <div className="text-gray-300 text-sm">Audience coverage</div>
                </div>
              </div>

              {/* Floating Success Metrics */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                +2.5M Views
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                3.8× ROAS
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}