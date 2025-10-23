'use client';

/**
 * Hero Section Component - Healthcare Software Development Landing Page
 * Transform Healthcare with Cutting-Edge Software
 * CONVERSION OPTIMIZED for Indian healthcare market - Google Ads ready
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Play, Shield, Clock, Users, TrendingUp, Stethoscope, Heart } from 'lucide-react';

console.log('[Healthcare-Software-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [metrics, setMetrics] = useState({ 
    patients: 0, 
    hospitals: 0, 
    efficiency: 0,
    compliance: 100 
  });

  useEffect(() => {
    console.log('[Healthcare-Software-Dev] HeroSection mounted');
    
    // Animate metrics
    if (inView) {
      let patientsCount = 0;
      let hospitalsCount = 0;
      let efficiencyCount = 0;
      let complianceCount = 100;
      
      const interval = setInterval(() => {
        patientsCount += 50;
        hospitalsCount += 1;
        efficiencyCount += 2;
        complianceCount -= 1;
        
        setMetrics({ 
          patients: Math.min(patientsCount, 10000), 
          hospitals: Math.min(hospitalsCount, 100),
          efficiency: Math.min(efficiencyCount, 85),
          compliance: Math.max(complianceCount, 99)
        });
        
        if (patientsCount >= 10000 && hospitalsCount >= 100 && efficiencyCount >= 85 && complianceCount <= 99) {
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 107, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-blue-400/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Stethoscope size={60} />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-green-400/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Heart size={50} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-cyan-400/20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Shield size={45} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">HIPAA Compliant • 100+ Healthcare Providers</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Transform Healthcare with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                Cutting-Edge Software
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Build HIPAA-compliant healthcare solutions that save lives, 
              reduce costs, and improve patient outcomes across India.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">60% Faster Operations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300">100% HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-gray-300">10,000+ Patients Served</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  console.log('[Healthcare-Software-Dev] Primary CTA clicked');
                  // Track conversion
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Get Free Consultation',
                      value: 1
                    });
                  }
                }}
              >
                Get Free Healthcare Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                onClick={() => {
                  console.log('[Healthcare-Software-Dev] Secondary CTA clicked');
                }}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-8 flex items-center gap-6 text-sm text-gray-400"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>100+ Healthcare Providers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>99% Success Rate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Stats */}
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Healthcare Impact Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Patients Served */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {metrics.patients.toLocaleString()}+
                  </div>
                  <div className="text-gray-300 text-sm">Patients Served</div>
                </div>
                
                {/* Hospitals */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {metrics.hospitals}+
                  </div>
                  <div className="text-gray-300 text-sm">Hospitals & Clinics</div>
                </div>
                
                {/* Efficiency */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {metrics.efficiency}%
                  </div>
                  <div className="text-gray-300 text-sm">Efficiency Gain</div>
                </div>
                
                {/* Compliance */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {metrics.compliance}%
                  </div>
                  <div className="text-gray-300 text-sm">Compliance Rate</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>System Uptime</span>
                  <span>99.9%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "99.9%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}