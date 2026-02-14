'use client';

/**
 * Testimonials Section Component - Healthcare Software Development
 * Healthcare Professional Social Proof
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ArrowLeft, 
  ArrowRight, 
  Play,
  CheckCircle,
  Award,
  Heart,
  Users,
  Building2
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] TestimonialsSection component loaded');

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Medical Director",
      hospital: "Apollo Hospital, Delhi",
      avatar: "/testimonials/dr-rajesh.jpg",
      rating: 5,
      quote: "The Hospital Management System from Vedpragya Bharat transformed our operations completely. Patient wait times dropped by 65% and our staff efficiency improved dramatically. The system is intuitive, reliable, and has significantly improved patient satisfaction.",
      results: "65% reduction in wait times",
      verified: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Chief Medical Officer",
      hospital: "Fortis Clinic, Mumbai",
      avatar: "/testimonials/dr-priya.jpg",
      rating: 5,
      quote: "Our clinic operations are now completely digital. The system handles everything from appointments to prescriptions seamlessly. The team's understanding of healthcare workflows is exceptional, and the support is outstanding.",
      results: "90% reduction in prescription errors",
      verified: true
    },
    {
      id: 3,
      name: "Mr. Amit Patel",
      position: "Operations Manager",
      hospital: "Max Pharmacy Chain",
      avatar: "/testimonials/amit-patel.jpg",
      rating: 5,
      quote: "The pharmacy management system revolutionized our operations across 25+ locations. We now have real-time visibility, automated reordering, and 98% inventory accuracy. Customer satisfaction has improved significantly.",
      results: "98% inventory accuracy achieved",
      verified: true
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      position: "Head of IT",
      hospital: "Manipal Hospital, Bangalore",
      avatar: "/testimonials/dr-sunita.jpg",
      rating: 5,
      quote: "The EHR system implementation was flawless. HIPAA compliance was maintained throughout, and the integration with existing systems was seamless. Our doctors love the intuitive interface and mobile access.",
      results: "100% HIPAA compliance maintained",
      verified: true
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      position: "Cardiologist",
      hospital: "Medanta Hospital, Gurgaon",
      avatar: "/testimonials/dr-vikram.jpg",
      rating: 5,
      quote: "The telemedicine platform has been a game-changer, especially during the pandemic. Video consultations are crystal clear, prescription management is seamless, and patient data is always secure. Highly recommended!",
      results: "500+ successful teleconsultations",
      verified: true
    },
    {
      id: 6,
      name: "Ms. Kavita Mehta",
      position: "Hospital Administrator",
      hospital: "Kokilaben Hospital, Mumbai",
      avatar: "/testimonials/kavita-mehta.jpg",
      rating: 5,
      quote: "The analytics dashboard provides incredible insights into our operations. We can now make data-driven decisions, optimize resource allocation, and improve patient outcomes. The ROI has been phenomenal.",
      results: "40% improvement in operational efficiency",
      verified: true
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Client Success Stories with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hire Healthcare Software Developer
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from healthcare professionals 
            who have transformed their practices with our software solutions.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
            >
              <ArrowRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-12"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {testimonials[currentTestimonial].hospital}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Results */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {testimonials[currentTestimonial].results}
                </div>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                "{testimonial.quote.substring(0, 120)}..."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Trusted by Healthcare Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Patients Served</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your healthcare facility 
            with our proven software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Schedule Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View All Testimonials
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}