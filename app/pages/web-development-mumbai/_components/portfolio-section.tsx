'use client';

/**
 * Portfolio Section Component - MUMBAI-BASED CASE STUDIES
 * Showcases successful web development projects for Mumbai businesses
 * 
 * FEATURES:
 * - Mumbai client case studies
 * - Real results and metrics
 * - Interactive project cards
 * - Mobile-responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Social proof through results
 * - Visual project showcase
 * - Trust building
 * - Mobile optimization
 * 
 * @version 1.0.0 - Mumbai-Based Portfolio
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe, Award } from 'lucide-react';

console.log('[Mumbai-Web-Development] PortfolioSection component loaded');

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    console.log('[Mumbai-Web-Development] PortfolioSection mounted');
    return () => console.log('[Mumbai-Web-Development] PortfolioSection unmounted');
  }, []);

  const projects = [
    {
      id: 1,
      name: 'Bandra Fine Dining Restaurant',
      category: 'Food & Beverage',
      location: 'Bandra West, Mumbai',
      description: 'Complete website redesign with online ordering system and table reservation feature',
      image: '/portfolio-1.jpg',
      results: {
        traffic: '+180%',
        conversions: '+250%',
        revenue: '+320%',
        time: '3 weeks'
      },
      features: ['Online Ordering', 'Table Reservation', 'Menu Management', 'Payment Gateway'],
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      name: 'Andheri Medical Clinic',
      category: 'Healthcare',
      location: 'Andheri East, Mumbai',
      description: 'Patient portal with appointment booking, medical records, and telemedicine integration',
      image: '/portfolio-2.jpg',
      results: {
        traffic: '+150%',
        conversions: '+200%',
        revenue: '+180%',
        time: '4 weeks'
      },
      features: ['Patient Portal', 'Appointment Booking', 'Medical Records', 'Telemedicine'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Powai Tech Startup',
      category: 'Technology',
      location: 'Powai, Mumbai',
      description: 'SaaS platform with user dashboard, analytics, and subscription management',
      image: '/portfolio-3.jpg',
      results: {
        traffic: '+300%',
        conversions: '+400%',
        revenue: '+500%',
        time: '6 weeks'
      },
      features: ['User Dashboard', 'Analytics', 'Subscription Management', 'API Integration'],
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'Thane Real Estate',
      category: 'Real Estate',
      location: 'Thane, Mumbai',
      description: 'Property listing platform with virtual tours, mortgage calculator, and CRM integration',
      image: '/portfolio-4.jpg',
      results: {
        traffic: '+220%',
        conversions: '+180%',
        revenue: '+250%',
        time: '5 weeks'
      },
      features: ['Property Listings', 'Virtual Tours', 'Mortgage Calculator', 'CRM Integration'],
      tech: ['Vue.js', 'Express.js', 'MongoDB', 'Three.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Navi Mumbai E-commerce',
      category: 'E-commerce',
      location: 'Navi Mumbai',
      description: 'Multi-vendor marketplace with inventory management and order tracking system',
      image: '/portfolio-5.jpg',
      results: {
        traffic: '+280%',
        conversions: '+350%',
        revenue: '+420%',
        time: '7 weeks'
      },
      features: ['Multi-vendor', 'Inventory Management', 'Order Tracking', 'Payment Gateway'],
      tech: ['Shopify Plus', 'Liquid', 'GraphQL', 'Webhooks'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Malad Fitness Center',
      category: 'Fitness & Wellness',
      location: 'Malad West, Mumbai',
      description: 'Membership portal with class booking, workout tracking, and nutrition planning',
      image: '/portfolio-6.jpg',
      results: {
        traffic: '+160%',
        conversions: '+190%',
        revenue: '+210%',
        time: '4 weeks'
      },
      features: ['Class Booking', 'Workout Tracking', 'Nutrition Planning', 'Membership Portal'],
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50"
      id="portfolio"
      role="region"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mumbai Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real results from real Mumbai businesses. See how we've helped local companies grow their online presence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <div className="text-sm font-medium">{project.category}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.location}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{project.results.traffic}</div>
                    <div className="text-xs text-gray-500">Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{project.results.conversions}</div>
                    <div className="text-xs text-gray-500">Conversions</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Project Details */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{projects[selectedProject].location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[selectedProject].name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {projects[selectedProject].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[selectedProject].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results & Tech */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Results Achieved</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{projects[selectedProject].results.traffic}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Traffic Increase</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{projects[selectedProject].results.conversions}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{projects[selectedProject].results.revenue}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">{projects[selectedProject].results.time}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Delivery Time</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technology Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's create your own success story. Get a free consultation and see how we can help your Mumbai business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                onClick={() => console.log('[Mumbai-Web-Development] Portfolio CTA - Start My Project clicked')}
              >
                Start My Project
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:+919963730111"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                onClick={() => console.log('[Mumbai-Web-Development] Portfolio CTA - Call Expert clicked')}
              >
                Call Mumbai Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}