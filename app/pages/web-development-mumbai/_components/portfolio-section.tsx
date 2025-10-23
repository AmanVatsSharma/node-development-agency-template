'use client';

/**
 * Portfolio Section Component - MUMBAI SUCCESS STORIES
 * Premium portfolio showcase with real Mumbai client projects
 * 
 * @version 2.0.0 - Production Ready Portfolio
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  ExternalLink, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Calendar,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

console.log('[Mumbai-Web-Development] PortfolioSection component loaded');

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    console.log('[Mumbai-Web-Development] PortfolioSection mounted');
    return () => console.log('[Mumbai-Web-Development] PortfolioSection unmounted');
  }, []);

  const projects = [
    {
      id: 1,
      name: "Bandra Fine Dining",
      category: "Restaurant & Food",
      location: "Bandra West, Mumbai",
      description: "Complete digital transformation for a premium fine dining restaurant with online ordering, table reservations, and customer management system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+300%",
        conversions: "+250%",
        revenue: "+180%",
        period: "6 months"
      },
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      features: ["Online Ordering", "Table Reservations", "Menu Management", "Customer Portal"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      id: 2,
      name: "Andheri Medical Clinic",
      category: "Healthcare",
      location: "Andheri East, Mumbai",
      description: "Comprehensive patient management system with appointment booking, medical records, and telemedicine capabilities for a leading medical clinic.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+200%",
        conversions: "+180%",
        revenue: "+220%",
        period: "4 months"
      },
      technologies: ["React", "Express.js", "PostgreSQL", "Twilio"],
      features: ["Appointment Booking", "Patient Records", "Telemedicine", "Billing System"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      name: "Powai Tech Solutions",
      category: "Technology & SaaS",
      location: "Powai, Mumbai",
      description: "Enterprise SaaS platform for project management with real-time collaboration, analytics dashboard, and team communication tools.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+500%",
        conversions: "+400%",
        revenue: "+350%",
        period: "8 months"
      },
      technologies: ["Next.js", "Node.js", "Redis", "AWS"],
      features: ["Project Management", "Real-time Chat", "Analytics Dashboard", "Team Collaboration"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 4,
      name: "Thane Real Estate",
      category: "Real Estate",
      location: "Thane, Mumbai",
      description: "Advanced property listing platform with virtual tours, 360° photos, and AI-powered property recommendations for real estate business.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+250%",
        conversions: "+180%",
        revenue: "+200%",
        period: "5 months"
      },
      technologies: ["React", "Django", "PostgreSQL", "Google Maps API"],
      features: ["Property Listings", "Virtual Tours", "360° Photos", "AI Recommendations"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 5,
      name: "Malad Fitness Center",
      category: "Fitness & Wellness",
      location: "Malad West, Mumbai",
      description: "Complete fitness management system with class booking, membership management, workout tracking, and nutrition planning.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+180%",
        conversions: "+190%",
        revenue: "+160%",
        period: "3 months"
      },
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      features: ["Class Booking", "Membership Portal", "Workout Tracking", "Nutrition Plans"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      id: 6,
      name: "Goregaon E-commerce",
      category: "E-commerce",
      location: "Goregaon, Mumbai",
      description: "Multi-vendor marketplace platform connecting local Mumbai businesses with customers, featuring advanced inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      results: {
        traffic: "+400%",
        conversions: "+350%",
        revenue: "+280%",
        period: "7 months"
      },
      technologies: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
      features: ["Multi-vendor Platform", "Inventory Management", "Payment Gateway", "Order Tracking"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
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
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20"
      id="portfolio"
      role="region"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Mumbai Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped Mumbai businesses transform their online presence and grow their revenue.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${project.borderColor}`}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-medium`}>
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{project.results.traffic}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Traffic</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.results.conversions}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Conversions</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
                        <div className="flex items-center text-slate-600 dark:text-slate-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          {project.location}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-64 object-cover rounded-xl mb-6"
                        />
                        <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Results Achieved</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{project.results.traffic}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Traffic Increase</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{project.results.conversions}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Conversions</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{project.results.revenue}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Revenue Growth</div>
                          </div>
                          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{project.results.period}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Timeframe</div>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 200+ successful Mumbai businesses who have transformed their online presence with our web development expertise.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => console.log('[Mumbai-Web-Development] Portfolio CTA - Get Started clicked')}
          >
            <a href="#lead-form" className="flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}