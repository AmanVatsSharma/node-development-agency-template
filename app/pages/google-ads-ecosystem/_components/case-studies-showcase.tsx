'use client';

/**
 * @fileoverview Case Studies Showcase - Real results across all service types
 * @description Component showcasing success stories and results from different industries and services
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive case study carousel
 * - Industry-specific success stories
 * - Detailed metrics and results
 * - Before/after comparisons
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp,
  Target,
  Users,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  Play,
  BarChart3,
  Star,
  CheckCircle,
  Award,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  service: string;
  duration: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: React.ComponentType<any>;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    rating: number;
  };
  image?: string;
  isVideo?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'real-estate-gurugram',
    company: 'Premium Properties',
    industry: 'Real Estate',
    service: 'Enterprise Google Ads Management',
    duration: '45 days',
    challenge: 'Low-quality leads and high cost per acquisition in competitive Gurugram market',
    solution: 'Implemented targeted local campaigns with advanced remarketing and lead scoring system',
    results: [
      { metric: 'Revenue Generated', value: '₹18L', improvement: '900%', icon: DollarSign },
      { metric: 'Cost Per Lead', value: '₹1,200', improvement: '60%', icon: Target },
      { metric: 'Lead Quality Score', value: '9.2/10', improvement: '150%', icon: Star },
      { metric: 'ROAS', value: '10×', improvement: '400%', icon: TrendingUp }
    ],
    testimonial: {
      quote: 'Rajapragya transformed our lead generation. We went from struggling to get 5-10 leads per month to consistently generating 50+ high-quality leads. The ROI is incredible.',
      author: 'Rajesh Kumar',
      position: 'Founder & CEO',
      rating: 5
    },
    isVideo: true
  },
  {
    id: 'ecommerce-mumbai',
    company: 'StyleHub Fashion',
    industry: 'E-commerce',
    service: 'E-commerce Google Ads Optimization',
    duration: '60 days',
    challenge: 'Low conversion rates and high cart abandonment affecting online sales growth',
    solution: 'Optimized shopping campaigns with dynamic remarketing and conversion-focused landing pages',
    results: [
      { metric: 'Sales Increase', value: '320%', improvement: '220%', icon: TrendingUp },
      { metric: 'Conversion Rate', value: '12.4%', improvement: '180%', icon: Target },
      { metric: 'Cart Abandonment', value: '35%', improvement: '45%', icon: BarChart3 },
      { metric: 'Average Order Value', value: '₹2,800', improvement: '25%', icon: DollarSign }
    ],
    testimonial: {
      quote: 'Our online sales tripled in just 2 months. The team\'s expertise in e-commerce optimization is unmatched. Highly recommend their services.',
      author: 'Priya Sharma',
      position: 'Marketing Director',
      rating: 5
    }
  },
  {
    id: 'saas-bangalore',
    company: 'CloudTech Solutions',
    industry: 'SaaS',
    service: 'B2B Lead Generation',
    duration: '30 days',
    challenge: 'High cost per lead and low trial-to-paid conversion rates in competitive SaaS market',
    solution: 'Implemented account-based marketing with targeted LinkedIn and Google Ads integration',
    results: [
      { metric: 'Qualified Leads', value: '500+', improvement: '250%', icon: Users },
      { metric: 'Cost Per Lead', value: '₹850', improvement: '40%', icon: Target },
      { metric: 'Trial Conversion', value: '28%', improvement: '120%', icon: TrendingUp },
      { metric: 'ROAS', value: '7.2×', improvement: '180%', icon: BarChart3 }
    ],
    testimonial: {
      quote: 'The quality of leads improved dramatically. We\'re now getting decision-makers who are genuinely interested in our solution. Game-changer for our business.',
      author: 'Amit Patel',
      position: 'VP of Sales',
      rating: 5
    }
  },
  {
    id: 'healthcare-delhi',
    company: 'MediCare Plus',
    industry: 'Healthcare',
    service: 'Local Business Google Ads',
    duration: '90 days',
    challenge: 'Low patient appointments and high competition for medical keywords in Delhi',
    solution: 'Local-focused campaigns with Google My Business optimization and appointment booking integration',
    results: [
      { metric: 'Appointments', value: '300%', improvement: '200%', icon: Calendar },
      { metric: 'Cost Per Appointment', value: '₹450', improvement: '60%', icon: Target },
      { metric: 'Local Visibility', value: '95%', improvement: '150%', icon: TrendingUp },
      { metric: 'Patient Satisfaction', value: '4.8/5', improvement: '40%', icon: Star }
    ],
    testimonial: {
      quote: 'Our appointment bookings increased by 300% in just 3 months. The team understood healthcare marketing challenges perfectly.',
      author: 'Dr. Neha Gupta',
      position: 'Medical Director',
      rating: 5
    },
    isVideo: true
  },
  {
    id: 'education-mumbai',
    company: 'EduTech Academy',
    industry: 'Education',
    service: 'YouTube Advertising Management',
    duration: '45 days',
    challenge: 'Low course enrollment rates and high competition for education keywords',
    solution: 'Video marketing campaigns with educational content and free course previews',
    results: [
      { metric: 'Course Enrollments', value: '150%', improvement: '50%', icon: Users },
      { metric: 'Video Views', value: '2.5M', improvement: '400%', icon: Play },
      { metric: 'Engagement Rate', value: '8.7%', improvement: '180%', icon: Star },
      { metric: 'Cost Per Enrollment', value: '₹1,200', improvement: '35%', icon: Target }
    ],
    testimonial: {
      quote: 'Our video campaigns are driving incredible engagement and enrollments. The creative team knows how to connect with students.',
      author: 'Vikram Singh',
      position: 'Founder',
      rating: 5
    }
  },
  {
    id: 'automotive-chennai',
    company: 'AutoMax Dealership',
    industry: 'Automotive',
    service: 'Performance Max Campaigns',
    duration: '60 days',
    challenge: 'Low showroom visits and high competition for automotive keywords in Chennai',
    solution: 'AI-powered Performance Max campaigns with vehicle-specific targeting and local extensions',
    results: [
      { metric: 'Showroom Visits', value: '180%', improvement: '80%', icon: Users },
      { metric: 'Test Drive Bookings', value: '250%', improvement: '150%', icon: Calendar },
      { metric: 'Cost Per Visit', value: '₹800', improvement: '45%', icon: Target },
      { metric: 'ROAS', value: '6.2×', improvement: '120%', icon: TrendingUp }
    ],
    testimonial: {
      quote: 'Our showroom foot traffic doubled. The AI-powered campaigns are incredibly effective at reaching the right customers.',
      author: 'Suresh Kumar',
      position: 'Sales Manager',
      rating: 5
    }
  }
];

export function CaseStudiesShowcase() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const industries = ['All Industries', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];

  const filteredCaseStudies = selectedIndustry === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  const currentCaseStudy = filteredCaseStudies[activeCaseStudy] || caseStudies[0];

  const handleCaseStudyChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveCaseStudy((prev) => (prev + 1) % filteredCaseStudies.length);
    } else {
      setActiveCaseStudy((prev) => (prev - 1 + filteredCaseStudies.length) % filteredCaseStudies.length);
    }
    console.log(`[CaseStudiesShowcase] Case study changed: ${direction}`);
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    setActiveCaseStudy(0);
    console.log(`[CaseStudiesShowcase] Industry changed: ${industry}`);
  };

  const handleCaseStudyClick = (caseStudyId: string, caseStudyTitle: string) => {
    console.log(`[CaseStudiesShowcase] Case study clicked: ${caseStudyTitle}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'case_study_click', {
        case_study_id: caseStudyId,
        case_study_title: caseStudyTitle,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Real Results,
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses across industries 
            achieve remarkable growth with our Google Ads ecosystem.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {industry}
            </button>
          ))}
        </motion.div>

        {/* Case Study Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCaseStudy}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Column - Case Study Details */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{currentCaseStudy.company}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-sm">{currentCaseStudy.industry}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm">{currentCaseStudy.service}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {currentCaseStudy.duration}
                      </div>
                      {currentCaseStudy.isVideo && (
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          Video Case Study
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Challenge
                      </h4>
                      <p className="text-gray-700">{currentCaseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Our Solution
                      </h4>
                      <p className="text-gray-700">{currentCaseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {currentCaseStudy.results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <result.icon className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-gray-600">{result.metric}</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                          <div className="text-sm text-green-600 font-semibold">+{result.improvement}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(currentCaseStudy.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{currentCaseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{currentCaseStudy.testimonial.author}</div>
                      <div className="text-gray-600">{currentCaseStudy.testimonial.position}</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual/Video */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    {currentCaseStudy.isVideo ? (
                      <motion.div
                        className="cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCaseStudyClick(currentCaseStudy.id, currentCaseStudy.company)}
                      >
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Watch Case Study</h4>
                        <p className="text-blue-100">See the full story in action</p>
                      </motion.div>
                    ) : (
                      <div>
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <BarChart3 className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Detailed Analysis</h4>
                        <p className="text-blue-100">Comprehensive performance breakdown</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleCaseStudyChange('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={() => handleCaseStudyChange('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Case Study Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {filteredCaseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCaseStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCaseStudy === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join these successful businesses and let us help you achieve similar results 
            with our proven Google Ads ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#roi-calculator"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Calculate My Potential ROI
            </Link>
            
            <Link
              href="tel:+919876543210"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 border border-blue-600"
            >
              <Play className="w-5 h-5" />
              Schedule Strategy Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudiesShowcase;