"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Service data
const services = [
  {
    id: 'nodejs',
    title: 'Node.js Development',
    shortDesc: 'Custom, scalable backend solutions built with Node.js.',
    fullDesc: 'Our Node.js development services deliver high-performance, scalable backend solutions for enterprises. We specialize in microservices architecture, real-time applications, and API development that powers your business.',
    icon: '/images/services/nodejs.svg',
    imageUrl: '/images/services/nodejs-hero.jpg',
    features: [
      'Custom API Development',
      'Microservices Architecture',
      'Real-time Applications',
      'Performance Optimization',
      'Scalable Backend Systems',
      'Enterprise Integration'
    ],
    technologies: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker'],
    color: 'bg-green-600',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    id: '3d',
    title: '3D Interactive Experiences',
    shortDesc: 'Immersive 3D animations and interactive visualizations.',
    fullDesc: 'Transform your digital presence with immersive 3D experiences. From product showcases to interactive data visualizations, we create engaging experiences that captivate your audience and elevate your brand.',
    icon: '/images/services/3d.svg',
    imageUrl: '/images/services/3d-hero.jpg',
    features: [
      'Interactive Product Showcases',
      '3D Data Visualizations',
      'WebGL Animations',
      'Virtual Environments',
      'Augmented Reality Experiences',
      'Performance-Optimized Rendering'
    ],
    technologies: ['Three.js', 'WebGL', 'React Three Fiber', 'GSAP', 'Blender', 'Spline', 'WebXR'],
    color: 'bg-blue-600',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    shortDesc: 'End-to-end enterprise applications with robust architecture.',
    fullDesc: 'Our enterprise solutions combine robust architecture, security, and scalability to meet your business-critical needs. We build systems that grow with your organization and integrate seamlessly with your existing infrastructure.',
    icon: '/images/services/enterprise.svg',
    imageUrl: '/images/services/enterprise-hero.jpg',
    features: [
      'Custom Enterprise Applications',
      'Legacy System Modernization',
      'Workflow Automation',
      'Business Intelligence Dashboards',
      'System Integration',
      'Multi-tenant Architecture'
    ],
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Azure', 'Kubernetes', 'CI/CD'],
    color: 'bg-indigo-600',
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    id: 'api',
    title: 'API Development',
    shortDesc: 'Robust, scalable API solutions for seamless integrations.',
    fullDesc: 'We design and develop robust, well-documented APIs that power your digital ecosystem. From RESTful services to GraphQL endpoints, our APIs provide the foundation for seamless integration and data exchange.',
    icon: '/images/services/api.svg',
    imageUrl: '/images/services/api-hero.jpg',
    features: [
      'RESTful API Design',
      'GraphQL Implementation',
      'API Gateway Solutions',
      'Swagger/OpenAPI Documentation',
      'Versioning Strategies',
      'Security & Authentication'
    ],
    technologies: ['REST', 'GraphQL', 'OpenAPI', 'OAuth', 'JWT', 'API Gateway', 'Microservices'],
    color: 'bg-orange-600',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    shortDesc: 'Expert guidance on architecture, technology, and strategy.',
    fullDesc: 'Our technical consulting services provide expert guidance on architecture, technology selection, and digital strategy. We help you navigate complex technical decisions to ensure your technology investments deliver maximum value.',
    icon: '/images/services/consulting.svg',
    imageUrl: '/images/services/consulting-hero.jpg',
    features: [
      'Architecture Review',
      'Technology Stack Selection',
      'Performance Optimization',
      'Security Assessment',
      'Cloud Migration Strategy',
      'Team Augmentation'
    ],
    technologies: ['System Architecture', 'Cloud Strategy', 'DevOps', 'Security', 'Performance', 'Training'],
    color: 'bg-purple-600',
    gradient: 'from-purple-600 to-pink-600',
  }
];

export default function ServicesPage() {
  // State for the currently selected service
  const [selectedService, setSelectedService] = useState(services[0]);
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Premium</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Enterprise-grade solutions powered by cutting-edge Node.js development and immersive 3D experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation & Details */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12 justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedService.id === service.id
                    ? `text-white ${service.color}`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Service Visual */}
              <div className="order-2 lg:order-1">
                <div className={`rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${selectedService.gradient} p-1`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                    <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                      {/* Placeholder for actual images */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient} opacity-50`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full ${selectedService.color} flex items-center justify-center`}>
                          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies Used */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Description */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  {selectedService.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {selectedService.fullDesc}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/pages/portfolio" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-center transition duration-300"
                  >
                    See Related Projects
                  </Link>
                  <Link 
                    href="/pages/enterprise" 
                    className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full font-medium text-center transition duration-300"
                  >
                    Explore Enterprise Solutions
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Service Process</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We follow a proven methodology to deliver exceptional results for our clients, ensuring transparent communication and measurable outcomes at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">We analyze your requirements, goals, and challenges to understand your unique needs.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300">We design a comprehensive solution blueprint and technology roadmap.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Our expert teams build your solution using agile methodologies and best practices.</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Delivery & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">We deploy, optimize, and provide ongoing support to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our premium Node.js development and 3D animation expertise can solve your business challenges.
          </p>
          <Link 
            href="/pages/contact" 
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 