"use client";

/**
 * @fileoverview TestimonialCarousel Component - Client Testimonials Showcase
 * @description Premium carousel for displaying client testimonials
 * Features:
 * - Auto-rotating carousel with manual controls
 * - Star ratings
 * - Client photos and company logos
 * - Smooth animations
 * 
 * @component TestimonialCarousel
 * @example
 * <TestimonialCarousel />
 */

import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Console log for debugging
console.log('[TestimonialCarousel] Component loaded');

/**
 * Testimonial interface
 */
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string; // Avatar URL or placeholder
  rating: number; // 1-5
  text: string;
  project: string;
}

/**
 * Star Rating Component
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Main TestimonialCarousel Component
 */
export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionInView = useInView(sectionRef, { margin: "-200px" });
  const shouldReduceMotion = useReducedMotion();
  
  console.log('[TestimonialCarousel] Component rendering, currentIndex:', currentIndex, {
    isAutoPlaying,
    isSectionInView,
    shouldReduceMotion,
  });
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      role: 'CTO',
      company: 'TechVision India',
      image: '👨‍💼',
      rating: 5,
      text: 'This team transformed our legacy system into a modern, scalable platform. Their Node.js expertise and attention to detail exceeded our expectations. The 3D visualizations they built are simply stunning!',
      project: 'Enterprise ERP Modernization'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'GlobalShop Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with this team was a game-changer for our e-commerce platform. They delivered a Shopify headless solution that increased our conversion rate by 35%. Highly recommended!',
      project: 'Shopify Headless Migration'
    },
    {
      id: '3',
      name: 'Ahmed Al-Rashid',
      role: 'Founder & CEO',
      company: 'Dubai Logistics Hub',
      image: '👨‍💻',
      rating: 5,
      text: 'Their AI Voice Agent solution revolutionized our customer support. We handle 10x more calls now with better quality and 24/7 availability. The ROI was visible within the first month!',
      project: 'AI Voice Automation'
    },
    {
      id: '4',
      name: 'Jennifer Chen',
      role: 'VP Engineering',
      company: 'FinanceFlow Canada',
      image: '👩‍💻',
      rating: 5,
      text: 'Security and compliance were critical for our fintech platform. The team delivered a SOC 2 compliant solution with bank-grade security. Their global presence meant round-the-clock support.',
      project: 'Financial Platform Development'
    },
    {
      id: '5',
      name: 'Michael Schmidt',
      role: 'Director of IT',
      company: 'MediCare Solutions',
      image: '👨‍⚕️',
      rating: 5,
      text: 'The HIPAA-compliant telemedicine platform they built is exceptional. Clean architecture, excellent UX, and seamless integrations. Our patient satisfaction scores went up by 40%.',
      project: 'Telemedicine Platform'
    }
  ];
  
  // Auto-play functionality
  useEffect(() => {
    // Robust guards to keep mobiles smooth:
    // - Disable autoplay if user interacted (isAutoPlaying=false)
    // - Disable autoplay if section is offscreen
    // - Disable autoplay if user prefers reduced motion
    if (!isAutoPlaying) {
      console.log('[TestimonialCarousel] Autoplay disabled (user interaction)');
      return;
    }

    if (!isSectionInView) {
      console.log('[TestimonialCarousel] Autoplay paused (section not in view)');
      return;
    }

    if (shouldReduceMotion) {
      console.log('[TestimonialCarousel] Autoplay disabled (prefers-reduced-motion)');
      return;
    }
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    console.log('[TestimonialCarousel] Auto-play interval set');
    
    return () => {
      clearInterval(interval);
      console.log('[TestimonialCarousel] Auto-play interval cleared');
    };
  }, [isAutoPlaying, isSectionInView, shouldReduceMotion, testimonials.length]);
  
  // Navigation handlers
  const goToNext = () => {
    console.log('[TestimonialCarousel] Next button clicked');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const goToPrev = () => {
    console.log('[TestimonialCarousel] Previous button clicked');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index: number) => {
    console.log('[TestimonialCarousel] Indicator clicked, index:', index);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  const currentTestimonial = testimonials[currentIndex];

  // Animation settings (reduced-motion safe).
  const slideMotion = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
      };
  
  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden content-visibility-auto"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl hidden md:block"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience
          </p>
        </motion.div>
        
        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={slideMotion.initial}
                animate={slideMotion.animate}
                exit={slideMotion.exit}
                transition={slideMotion.transition}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-cyan-400 opacity-20">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  {/* Star Rating */}
                  <StarRating rating={currentTestimonial.rating} />
                  
                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                    "{currentTestimonial.text}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
                      {currentTestimonial.image}
                    </div>
                    
                    {/* Details */}
                    <div>
                      <p className="text-xl font-bold text-white">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-cyan-300">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Project: {currentTestimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-cyan-400'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}