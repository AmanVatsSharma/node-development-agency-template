'use client';

/**
 * HeroSection Component
 * 
 * Premium animated hero section for Shopify landing page
 * Features:
 * - Animated gradient background
 * - Floating particles effect
 * - Smooth text animations
 * - CTA buttons with hover effects
 * - Mobile-first responsive design
 * 
 * @component
 */

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[HeroSection] Component loaded');

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const HeroSection = () => {
  console.log('[HeroSection] Rendering hero section');

  const handleConsultation = () => {
    console.log('[HeroSection] Free Consultation button clicked');
    // Scroll to contact form or open modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewStores = () => {
    console.log('[HeroSection] View Recent Stores button clicked');
    // Scroll to portfolio/case studies section
    const portfolioSection = document.getElementById('results');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C4E80] via-[#0A2647] to-[#000814]">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-medium text-white">Premium Shopify Solutions</span>
            <TrendingUp className="w-4 h-4 text-[#00B894]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Launch a Shopify Store
            <br />
            <span className="bg-gradient-to-r from-[#00B894] to-cyan-400 bg-clip-text text-transparent">
              That Actually Sells
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Your brand deserves more than a template.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            We build high-converting Shopify stores designed for sales, speed, and scale — 
            backed by data-driven UX and automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              onClick={handleConsultation}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[#00B894] to-emerald-500 hover:from-[#00B894]/90 hover:to-emerald-500/90 text-white font-semibold px-8 py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <Button
              onClick={handleViewStores}
              size="lg"
              variant="outline"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-2xl text-lg w-full sm:w-auto"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Recent Stores
              </span>
            </Button>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 italic"
          >
            From startup to scaling D2C brand — we help you dominate online with Shopify excellence.
          </motion.p>

          {/* Floating illustration */}
          <motion.div
            variants={itemVariants}
            className="mt-16 relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative mx-auto max-w-4xl"
            >
              {/* Shopify store mockup illustration */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400">
                      yourstore.com
                    </div>
                  </div>
                  
                  {/* Store preview */}
                  <div className="p-6 space-y-4">
                    <div className="h-3 bg-gradient-to-r from-[#00B894] to-transparent rounded w-1/3" />
                    <div className="h-2 bg-white/20 rounded w-2/3" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="aspect-square bg-white/10 rounded-lg" />
                      <div className="aspect-square bg-white/10 rounded-lg" />
                      <div className="aspect-square bg-white/10 rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Floating stats badges */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#00B894] to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl"
                >
                  <div className="text-2xl font-bold">+42%</div>
                  <div className="text-xs">Conversion Rate</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl"
                >
                  <div className="text-2xl font-bold">&lt;2s</div>
                  <div className="text-xs">Load Time</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
