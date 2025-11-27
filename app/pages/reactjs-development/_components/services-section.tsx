'use client';

/**
 * Services Section - PREMIUM BENTO GRID VERSION
 * Stunning bento-style grid with animations
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BarChart3, Rocket, Plug, RefreshCw, Paintbrush, ArrowRight, Sparkles } from 'lucide-react';

console.log('[ReactJS-Dev] ServicesSection component loaded');

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  size: 'small' | 'large';
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] ServicesSection mounted');
    return () => console.log('[ReactJS-Dev] ServicesSection unmounted');
  }, []);

  const services: Service[] = [
    {
      icon: Code2,
      title: 'Custom Web App Development',
      description: 'End-to-end custom applications built from scratch',
      features: ['Full-stack architecture', 'Scalable codebase', 'API integration', 'Real-time features'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      size: 'large'
    },
    {
      icon: BarChart3,
      title: 'Dashboards & Analytics',
      description: 'Interactive data visualization dashboards',
      features: ['Live data updates', 'Custom charts', 'Export features'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      size: 'small'
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Launch-ready products in 4-6 weeks',
      features: ['Rapid prototyping', 'Core features', 'User testing'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      size: 'small'
    },
    {
      icon: Plug,
      title: 'API Integration',
      description: 'Seamless backend connectivity',
      features: ['REST/GraphQL', 'Third-party APIs', 'Authentication', 'Data sync'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      size: 'large'
    },
    {
      icon: RefreshCw,
      title: 'Legacy Migration',
      description: 'Modernize old apps to React',
      features: ['Code refactoring', 'Performance boost', 'Modern UI'],
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      size: 'small'
    },
    {
      icon: Paintbrush,
      title: 'Design to Code',
      description: 'Pixel-perfect Figma implementation',
      features: ['Design system', 'Component library', 'Responsive'],
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      size: 'small'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(97, 218, 251) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hire React.js Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Services We Offer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Complete React development solutions for every stage of your journey
          </motion.p>
        </motion.div>

        {/* Bento Grid - Mobile First */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeCard === index;
              const gridSpan = service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  className={`group relative ${gridSpan}`}
                >
                  <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-[#61DAFB]/10 hover:-translate-y-1">
                    
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#61DAFB]/20 to-[#00C897]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient} mb-5 sm:mb-6 shadow-2xl`}
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 sm:space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#61DAFB] to-[#00C897]" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Learn More Link */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#61DAFB] hover:text-[#00C897] transition-colors group/btn"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#61DAFB]/20">
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                Don't see what you need?
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                We build custom React solutions tailored to your needs
              </p>
            </div>
            <motion.a
              href="#lead-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
