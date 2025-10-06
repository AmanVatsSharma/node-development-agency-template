'use client';

/**
 * Testimonials Section - PREMIUM CAROUSEL VERSION
 * Beautiful testimonial cards with avatar and ratings
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

console.log('[ReactJS-Dev] TestimonialsSection component loaded');

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
  gradient: string;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    console.log('[ReactJS-Dev] TestimonialsSection mounted');
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => {
      clearInterval(interval);
      console.log('[ReactJS-Dev] TestimonialsSection unmounted');
    };
  }, [activeIndex]);

  const testimonials: Testimonial[] = [
    {
      name: 'Rishabh Sharma',
      role: 'Founder & CEO',
      company: 'TechFlow SaaS',
      text: 'They built our entire dashboard in React — incredibly fast and efficient. The code quality is outstanding, and the performance is phenomenal. Our users love the new interface!',
      rating: 5,
      avatar: 'RS',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Megha Patel',
      role: 'Marketing Director',
      company: 'GrowthHub',
      text: 'From Figma to flawless React implementation — absolutely top-tier quality! The attention to detail and pixel-perfect execution exceeded our expectations. Highly recommended!',
      rating: 5,
      avatar: 'MP',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Arjun Verma',
      role: 'CTO',
      company: 'DataSync Pro',
      text: 'Best React developers we\'ve worked with. They delivered our MVP 2 weeks ahead of schedule with clean, maintainable code. The team is professional and responsive.',
      rating: 5,
      avatar: 'AV',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      id="testimonials"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #61DAFB 1px, transparent 0)`,
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Client Love
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Amazing Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Real feedback from real clients building real products
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[500px] sm:h-[450px] mb-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 dark:opacity-10`} />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 opacity-10 dark:opacity-20">
                    <Quote className="w-24 h-24 sm:w-32 sm:h-32 text-[#61DAFB]" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#00C897] text-[#00C897]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed mb-8">
                      "{currentTestimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center shadow-xl`}>
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {currentTestimonial.avatar}
                        </span>
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-1">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-sm sm:text-base text-[#61DAFB] font-bold">
                          {currentTestimonial.role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-[#61DAFB] dark:hover:border-[#61DAFB] transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`transition-all ${
                    index === activeIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-[#61DAFB] to-[#00C897] rounded-full'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-[#61DAFB] dark:hover:border-[#61DAFB] transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
