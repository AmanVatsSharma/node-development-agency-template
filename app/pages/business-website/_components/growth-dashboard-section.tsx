'use client';

/**
 * CLIENT SUCCESS METRICS SECTION - PREMIUM PROFESSIONAL
 * 
 * PURPOSE:
 * Showcase real business results and success metrics professionally
 * NO India map - replaced with clean, data-driven visualization
 * 
 * FEATURES:
 * - Live animated success metrics
 * - Client testimonial highlights
 * - Revenue impact visualization
 * - Professional statistics display
 * - City-based success stories (text-based, no map)
 * - Premium glassmorphism design
 * 
 * CONVERSION PSYCHOLOGY:
 * - Numbers create instant credibility
 * - Success stories inspire confidence
 * - Professional design builds trust
 * - Data-driven approach demonstrates expertise
 * 
 * @version 2.0.0 - Professional redesign without map
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign,
  Award,
  Building2,
  Star,
  Target,
  Zap,
  CheckCircle2
} from 'lucide-react';

console.log('[Business-Website] ClientSuccessMetrics component loaded - PREMIUM VERSION');

export function GrowthDashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Animated counters
  const [totalProjects, setTotalProjects] = useState(0);
  const [avgRevenue, setAvgRevenue] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [avgROI, setAvgROI] = useState(0);
  
  // Success stories data (city-based but no map required)
  const successStories = [
    { city: 'Mumbai', company: 'Fashion E-commerce', result: '+320% Sales', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { city: 'Delhi', company: 'Restaurant Chain', result: '500+ Daily Orders', icon: Target, color: 'from-green-500 to-emerald-500' },
    { city: 'Bangalore', company: 'Tech Startup', result: '₹50L+ Revenue', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
    { city: 'Hyderabad', company: 'Healthcare', result: '2000+ Leads', icon: Users, color: 'from-orange-500 to-red-500' },
  ];

  useEffect(() => {
    console.log('[Business-Website] ClientSuccessMetrics mounted');
    
    if (inView) {
      console.log('[Business-Website] Starting success metrics animation');
      
      // Total projects: 0 → 500+
      let projects = 0;
      const projectsInterval = setInterval(() => {
        projects += 15;
        setTotalProjects(Math.min(500, projects));
        if (projects >= 500) clearInterval(projectsInterval);
      }, 30);
      
      // Average revenue increase: 0 → 285%
      let revenue = 0;
      const revenueInterval = setInterval(() => {
        revenue += 8;
        setAvgRevenue(Math.min(285, revenue));
        if (revenue >= 285) clearInterval(revenueInterval);
      }, 40);
      
      // Client satisfaction: 0 → 98%
      let satisfaction = 0;
      const satisfactionInterval = setInterval(() => {
        satisfaction += 3;
        setClientSatisfaction(Math.min(98, satisfaction));
        if (satisfaction >= 98) clearInterval(satisfactionInterval);
      }, 50);
      
      // Average ROI: 0 → 450%
      let roi = 0;
      const roiInterval = setInterval(() => {
        roi += 12;
        setAvgROI(Math.min(450, roi));
        if (roi >= 450) clearInterval(roiInterval);
      }, 35);
    }
    
    return () => console.log('[Business-Website] ClientSuccessMetrics unmounted');
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      id="client-success"
      role="region"
      aria-labelledby="success-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-3 sm:mb-4 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              Client Success Stories
            </span>
          </div>
          
          <h2
            id="success-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white"
          >
            Professional Business Website Development Reporting
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real growth. See how we've helped 500+ Indian companies succeed online.
          </p>
        </motion.div>

        {/* Main Metrics Grid - 4 Key Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
          
          {/* Stat 1: Total Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
                {totalProjects}+
              </div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </div>
          </motion.div>
          
          {/* Stat 2: Avg Revenue Increase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
                +{avgRevenue}%
              </div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Avg Revenue Growth
              </div>
            </div>
          </motion.div>
          
          {/* Stat 3: Client Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Star className="h-6 w-6 text-white fill-white" />
                </div>
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
                {clientSatisfaction}%
              </div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Satisfaction Rate
              </div>
            </div>
          </motion.div>
          
          {/* Stat 4: Average ROI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">
                {avgROI}%
              </div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Average ROI
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Stories Grid - City-Based Results (No Map) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
          {successStories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl group-hover:opacity-20 transition-all`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${story.color} rounded-xl mb-4 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      {story.city}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {story.company}
                  </h3>
                  <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {story.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Ready to Join 500+ Successful Businesses?
            </h3>
            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
              Get your professional website and start seeing results in 14-21 days
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Started Today
              <TrendingUp className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
