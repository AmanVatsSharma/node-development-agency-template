'use client';

/**
 * Why ReactJS Section - PREMIUM VERSION
 * Stunning animated cards with app-like experience
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Zap, RefreshCw, TrendingUp, Shield, Sparkles } from 'lucide-react';

console.log('[ReactJS-Dev] WhyReactSection component loaded');

interface Benefit {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  stats: string;
  gradient: string;
  glowColor: string;
}

export function WhyReactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] WhyReactSection mounted');
    return () => console.log('[ReactJS-Dev] WhyReactSection unmounted');
  }, []);

  const benefits: Benefit[] = [
    {
      icon: Zap,
      title: 'Blazing Fast',
      tagline: 'Virtual DOM Magic',
      description: 'Lightning-fast rendering with React\'s Virtual DOM. Updates only what changes, ensuring smooth 60 FPS experiences.',
      stats: '10x faster than traditional DOM',
      gradient: 'from-yellow-400 via-orange-400 to-red-500',
      glowColor: 'rgba(251, 191, 36, 0.3)'
    },
    {
      icon: RefreshCw,
      title: 'Reusable Components',
      tagline: 'Build Once, Use Everywhere',
      description: 'Create modular, reusable components that speed up development and ensure UI consistency across your entire app.',
      stats: '70% faster development',
      gradient: 'from-green-400 via-emerald-400 to-teal-500',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      icon: TrendingUp,
      title: 'Infinite Scalability',
      tagline: 'From MVP to Enterprise',
      description: 'Start small, grow big. React scales effortlessly from simple MVPs to complex enterprise applications handling millions of users.',
      stats: 'Powers 10M+ websites',
      gradient: 'from-blue-400 via-cyan-400 to-indigo-500',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      icon: Shield,
      title: 'Meta Backed',
      tagline: 'Industry Standard',
      description: 'Built and maintained by Meta (Facebook). Used by Netflix, Instagram, Airbnb, and thousands of industry leaders worldwide.',
      stats: 'Used by Fortune 500',
      gradient: 'from-purple-400 via-pink-400 to-rose-500',
      glowColor: 'rgba(168, 85, 247, 0.3)'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="why-react"
      role="region"
      aria-labelledby="why-react-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#61DAFB]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C897]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 via-[#00C897]/10 to-[#61DAFB]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg shadow-[#61DAFB]/20"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              The React Advantage
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            id="why-react-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Why Businesses Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              ReactJS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            The world's most loved library for building modern web experiences
          </motion.p>
        </motion.div>

        {/* Premium Benefit Cards - Mobile First Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-[#61DAFB]/20">
                  
                  {/* Animated Gradient Border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ margin: '-2px', zIndex: -1 }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ 
                      background: `radial-gradient(circle at 50% 50%, ${benefit.glowColor}, transparent 70%)`,
                      zIndex: -2
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${benefit.gradient} mb-5 sm:mb-6 shadow-2xl`}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full mb-4 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#61DAFB] to-[#00C897] animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                        {benefit.stats}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {benefit.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base font-bold text-[#61DAFB] mb-3 sm:mb-4">
                      {benefit.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Decorative Element */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 opacity-10 dark:opacity-5 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-500"
                      animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    >
                      <Icon className="w-full h-full text-gray-900 dark:text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Trust Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-12 sm:mt-16 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 lg:p-14 border border-[#61DAFB]/20 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#61DAFB]/10 via-transparent to-[#00C897]/10 opacity-50" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#61DAFB] to-[#00C897] mb-6 shadow-xl"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-5">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  "ReactJS powers
                </span>
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
                  {" "}Facebook, Netflix & Instagram"
                </span>
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-semibold">
                — Join 10+ million websites built with React
              </p>

              {/* Company Logos Placeholder */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 opacity-60">
                {['Meta', 'Netflix', 'Instagram', 'Airbnb'].map((company) => (
                  <div key={company} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
