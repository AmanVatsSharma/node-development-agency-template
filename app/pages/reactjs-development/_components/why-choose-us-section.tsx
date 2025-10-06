'use client';

/**
 * Why Choose Us Section - PREMIUM VERSION
 * Stunning differentiators with animations
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Users, Rocket, Shield, HeartHandshake, Sparkles, CheckCircle2, Zap } from 'lucide-react';

console.log('[ReactJS-Dev] WhyChooseUsSection component loaded');

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
  gradient: string;
}

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] WhyChooseUsSection mounted');
    return () => console.log('[ReactJS-Dev] WhyChooseUsSection unmounted');
  }, []);

  const reasons: Reason[] = [
    {
      icon: Code,
      title: 'Full-Stack React Expertise',
      description: 'Complete mastery of frontend and backend React ecosystem',
      stat: '8+ years',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: '100% Custom Architecture',
      description: 'No templates, no boilerplates — built for your exact needs',
      stat: 'Zero shortcuts',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Dedicated Developer',
      description: 'Your own React expert for every project, every sprint',
      stat: '1:1 attention',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle2,
      title: 'Agile Sprint Delivery',
      description: 'See progress every 7 days with transparent communication',
      stat: 'Weekly updates',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Long-Term Support',
      description: 'Post-launch maintenance, scaling, and feature updates',
      stat: '90-day warranty',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: HeartHandshake,
      title: 'Client-First Approach',
      description: 'Your success is our success — we\'re partners, not vendors',
      stat: '100% satisfaction',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="why-choose-us"
      role="region"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#61DAFB]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#00C897]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Why Us
            </span>
          </motion.div>

          <motion.h2
            id="why-choose-us-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Our Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We don't just write React code — we engineer digital experiences
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
              >
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-[#61DAFB]/10 hover:-translate-y-2">
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${reason.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${reason.gradient} mb-5 shadow-2xl`}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>

                    {/* Stat Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 rounded-full mb-4 border border-[#61DAFB]/30">
                      <Zap className="w-3 h-3 text-[#61DAFB]" />
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                        {reason.stat}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] rounded-3xl sm:rounded-[2.5rem] p-[2px] shadow-2xl">
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#61DAFB]/5 via-transparent to-[#00C897]/5 rounded-3xl sm:rounded-[2.5rem]" />
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#61DAFB] to-[#00C897] mb-6 sm:mb-8 shadow-xl"
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                {/* Quote */}
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    "We don't just write
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
                    React code —
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    we engineer digital
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
                    experiences."
                  </span>
                </p>

                {/* Trust Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                  {[
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '100%', label: 'Client Satisfaction' },
                    { value: '8+', label: 'Years Experience' },
                    { value: '95+', label: 'Avg. Performance Score' }
                  ].map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
