'use client';

/**
 * @fileoverview Testimonials Section - Social proof and client success stories
 * @description Component showcasing client testimonials, ratings, and success stories
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive testimonial carousel
 * - Video testimonials support
 * - Industry-specific testimonials
 * - Rating and review display
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star,
  Quote,
  Play,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  industry: string;
  rating: number;
  quote: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  image?: string;
  isVideo?: boolean;
  videoUrl?: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 'rajesh-kumar-real-estate',
    name: 'Rajesh Kumar',
    position: 'Founder & CEO',
    company: 'Premium Properties',
    industry: 'Real Estate',
    rating: 5,
    quote: 'Rajapragya transformed our lead generation completely. We went from struggling to get 5-10 leads per month to consistently generating 50+ high-quality leads. The ROI is incredible - we spent ₹1.8L and generated ₹18L in revenue in just 45 days.',
    results: [
      { metric: 'Revenue Generated', value: '₹18L', improvement: '900%' },
      { metric: 'Cost Per Lead', value: '₹1,200', improvement: '60%' },
      { metric: 'Lead Quality', value: '9.2/10', improvement: '150%' }
    ],
    verified: true,
    isVideo: true
  },
  {
    id: 'priya-sharma-ecommerce',
    name: 'Priya Sharma',
    position: 'Marketing Director',
    company: 'StyleHub Fashion',
    industry: 'E-commerce',
    rating: 5,
    quote: 'Our online sales tripled in just 2 months with their e-commerce optimization. The team\'s expertise in shopping campaigns and dynamic remarketing is unmatched. We\'re now consistently hitting our sales targets.',
    results: [
      { metric: 'Sales Increase', value: '320%', improvement: '220%' },
      { metric: 'Conversion Rate', value: '12.4%', improvement: '180%' },
      { metric: 'ROAS', value: '6.8×', improvement: '140%' }
    ],
    verified: true
  },
  {
    id: 'amit-patel-saas',
    name: 'Amit Patel',
    position: 'VP of Sales',
    company: 'CloudTech Solutions',
    industry: 'SaaS',
    rating: 5,
    quote: 'The quality of B2B leads improved dramatically. We\'re now getting decision-makers who are genuinely interested in our solution. The account-based marketing approach was a game-changer for our business.',
    results: [
      { metric: 'Qualified Leads', value: '500+', improvement: '250%' },
      { metric: 'Cost Per Lead', value: '₹850', improvement: '40%' },
      { metric: 'Trial Conversion', value: '28%', improvement: '120%' }
    ],
    verified: true,
    isVideo: true
  },
  {
    id: 'neha-gupta-healthcare',
    name: 'Dr. Neha Gupta',
    position: 'Medical Director',
    company: 'MediCare Plus',
    industry: 'Healthcare',
    rating: 5,
    quote: 'Our appointment bookings increased by 300% in just 3 months. The team understood healthcare marketing challenges perfectly and created compliant campaigns that actually work.',
    results: [
      { metric: 'Appointments', value: '300%', improvement: '200%' },
      { metric: 'Cost Per Appointment', value: '₹450', improvement: '60%' },
      { metric: 'Patient Satisfaction', value: '4.8/5', improvement: '40%' }
    ],
    verified: true
  },
  {
    id: 'vikram-singh-education',
    name: 'Vikram Singh',
    position: 'Founder',
    company: 'EduTech Academy',
    industry: 'Education',
    rating: 5,
    quote: 'Our video campaigns are driving incredible engagement and enrollments. The creative team knows how to connect with students and create content that converts. Highly recommend their YouTube advertising services.',
    results: [
      { metric: 'Course Enrollments', value: '150%', improvement: '50%' },
      { metric: 'Video Views', value: '2.5M', improvement: '400%' },
      { metric: 'Engagement Rate', value: '8.7%', improvement: '180%' }
    ],
    verified: true,
    isVideo: true
  },
  {
    id: 'suresh-kumar-automotive',
    name: 'Suresh Kumar',
    position: 'Sales Manager',
    company: 'AutoMax Dealership',
    industry: 'Automotive',
    rating: 5,
    quote: 'Our showroom foot traffic doubled with their Performance Max campaigns. The AI-powered approach is incredibly effective at reaching the right customers at the right time.',
    results: [
      { metric: 'Showroom Visits', value: '180%', improvement: '80%' },
      { metric: 'Test Drive Bookings', value: '250%', improvement: '150%' },
      { metric: 'ROAS', value: '6.2×', improvement: '120%' }
    ],
    verified: true
  }
];

const industryStats = [
  { industry: 'Real Estate', clients: 25, avgROAS: '12.5×', satisfaction: '98%' },
  { industry: 'E-commerce', clients: 40, avgROAS: '6.8×', satisfaction: '96%' },
  { industry: 'Healthcare', clients: 30, avgROAS: '8.2×', satisfaction: '97%' },
  { industry: 'SaaS', clients: 20, avgROAS: '7.2×', satisfaction: '99%' },
  { industry: 'Education', clients: 15, avgROAS: '5.5×', satisfaction: '95%' },
  { industry: 'Automotive', clients: 10, avgROAS: '6.2×', satisfaction: '94%' }
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const industries = ['All Industries', ...Array.from(new Set(testimonials.map(t => t.industry)))];

  const filteredTestimonials = selectedIndustry === 'All Industries' 
    ? testimonials 
    : testimonials.filter(t => t.industry === selectedIndustry);

  const currentTestimonial = filteredTestimonials[activeTestimonial] || testimonials[0];

  const handleTestimonialChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    } else {
      setActiveTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    }
    console.log(`[TestimonialsSection] Testimonial changed: ${direction}`);
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    setActiveTestimonial(0);
    console.log(`[TestimonialsSection] Industry changed: ${industry}`);
  };

  const handleVideoPlay = (testimonialId: string, testimonialName: string) => {
    console.log(`[TestimonialsSection] Video play clicked: ${testimonialName}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'testimonial_video_play', {
        testimonial_id: testimonialId,
        testimonial_name: testimonialName,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hire Google Ads Ecosystem Expert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with our Google Ads ecosystem.
          </p>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => handleIndustryChange(industry)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {industry}
            </button>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Column - Testimonial Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h3>
                      <p className="text-blue-600 font-semibold">{currentTestimonial.position}</p>
                      <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
                    </div>
                    {currentTestimonial.verified && (
                      <div className="ml-auto">
                        <div className="flex items-center gap-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Verified
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600">{currentTestimonial.rating}/5</span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 italic mb-8 relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {currentTestimonial.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-white rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                        <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                        <div className="text-xs text-green-600 font-semibold">+{result.improvement}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Video/Visual */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    {currentTestimonial.isVideo ? (
                      <motion.button
                        className="cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleVideoPlay(currentTestimonial.id, currentTestimonial.name)}
                      >
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Watch Testimonial</h4>
                        <p className="text-blue-100">Hear {currentTestimonial.name.split(' ')[0]}'s full story</p>
                      </motion.button>
                    ) : (
                      <div>
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Success Story</h4>
                        <p className="text-blue-100">{currentTestimonial.industry} Client</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleTestimonialChange('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={() => handleTestimonialChange('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-16">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Industry Stats */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Performance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-4">{stat.industry}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clients</span>
                    <span className="font-semibold">{stat.clients}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg ROAS</span>
                    <span className="font-semibold text-green-600">{stat.avgROAS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Satisfaction</span>
                    <span className="font-semibold text-blue-600">{stat.satisfaction}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">Our Client Success Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7.2×</div>
              <div className="text-blue-100">Average ROAS</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50Cr+</div>
              <div className="text-blue-100">Revenue Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;