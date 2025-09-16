"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedIllustration from '../../components/AnimatedIllustration';

// Project data
const projects = [
  {
    id: 'enterprise-crm',
    title: 'Enterprise CRM Platform',
    category: 'enterprise',
    tags: ['Node.js', 'Next.js', 'MongoDB', 'Redis', 'Docker'],
    description: 'A comprehensive CRM solution for enterprise clients featuring real-time analytics, customer journey mapping, and integration with multiple third-party services.',
    challenge: 'The client needed to replace their legacy CRM system with a modern, scalable solution that could handle their growing customer base and integrate with their existing tools.',
    solution: 'We built a custom CRM platform using Node.js and Next.js, implementing a microservices architecture for scalability. Real-time features were powered by WebSockets, and we used Redis for caching to ensure optimal performance.',
    results: ['50% increase in user productivity', '99.9% system uptime', '30% reduction in customer response time', 'Seamless integration with 12+ external services'],
    imageUrl: '/images/portfolio/enterprise-crm.jpg',
    color: 'blue'
  },
  {
    id: 'interactive-product-showcase',
    title: 'Interactive Product Showcase',
    category: '3d',
    tags: ['Three.js', 'WebGL', 'React', 'GSAP', 'WebXR'],
    description: 'An immersive 3D product configurator allowing customers to customize and visualize products in real-time before purchase.',
    challenge: 'The client wanted to reduce product returns by giving customers a way to accurately visualize customized products before ordering.',
    solution: 'We developed a WebGL-based 3D product configurator using Three.js and React. The application allowed users to customize products in real-time, view them from any angle, and even experience them in AR on supported devices.',
    results: ['35% reduction in product returns', '28% increase in average order value', '40% more time spent on product pages', 'Positive customer feedback on the shopping experience'],
    imageUrl: '/images/portfolio/interactive-product.jpg',
    color: 'purple'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Analytics Dashboard',
    category: 'enterprise',
    tags: ['Node.js', 'GraphQL', 'D3.js', 'PostgreSQL', 'Redis'],
    description: 'A real-time financial analytics platform processing millions of transactions daily with advanced visualization and reporting capabilities.',
    challenge: 'The financial institution needed a high-performance dashboard to monitor transactions, detect anomalies, and provide insights to their customers.',
    solution: 'We built a real-time analytics platform with Node.js and GraphQL for the API layer. Complex data visualization was implemented with D3.js, and we optimized database queries and implemented caching for handling millions of transactions.',
    results: ['Real-time processing of 2M+ daily transactions', 'Detection of fraudulent activities improved by 40%', '60% faster report generation', 'System capable of handling 10x current load'],
    imageUrl: '/images/portfolio/financial-dashboard.jpg',
    color: 'green'
  },
  {
    id: 'ecommerce-platform',
    title: 'Enterprise E-Commerce Platform',
    category: 'api',
    tags: ['Node.js', 'Microservices', 'Kubernetes', 'MongoDB', 'Redis', 'Elasticsearch'],
    description: 'A scalable e-commerce platform supporting multiple vendors, advanced product search, and personalized recommendations.',
    challenge: 'The client needed to transition from a monolithic e-commerce platform to a scalable solution capable of handling seasonal traffic spikes and supporting their growing vendor network.',
    solution: 'We implemented a microservices architecture with Node.js, deployed on Kubernetes for automatic scaling. The search functionality was powered by Elasticsearch, and we used machine learning for personalized product recommendations.',
    results: ['Platform now handles 10x peak traffic without slowdowns', 'Search response time reduced by 70%', '25% increase in conversion rate through personalization', 'Onboarding time for new vendors reduced from weeks to days'],
    imageUrl: '/images/portfolio/ecommerce-platform.jpg',
    color: 'orange'
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Monitoring System',
    category: 'enterprise',
    tags: ['Node.js', 'MQTT', 'WebSockets', 'Time-series DB', 'React'],
    description: 'A real-time IoT monitoring system for industrial equipment with predictive maintenance capabilities.',
    challenge: 'The manufacturing client needed a system to monitor thousands of IoT devices in real-time and predict maintenance needs to prevent costly equipment failures.',
    solution: 'We developed a Node.js-based monitoring system that processes data from thousands of sensors in real-time. The system uses machine learning for predictive maintenance and provides a real-time dashboard for monitoring equipment status.',
    results: ['45% reduction in unexpected equipment downtime', 'Maintenance costs reduced by 30%', 'Real-time monitoring of 5,000+ connected devices', 'Early detection of potential failures'],
    imageUrl: '/images/portfolio/iot-dashboard.jpg',
    color: 'teal'
  },
  {
    id: 'virtual-showroom',
    title: 'Virtual Real Estate Showroom',
    category: '3d',
    tags: ['Three.js', 'React', 'WebXR', 'Node.js', 'MongoDB'],
    description: 'An immersive virtual reality platform allowing potential buyers to tour properties remotely with interactive features.',
    challenge: "The real estate developer needed a way to showcase properties to international buyers who couldn't visit in person, especially during travel restrictions.",
    solution: 'We created a WebXR-powered virtual showroom using Three.js and React, allowing users to take virtual tours of properties, interact with features, and visualize different design options.',
    results: ['40% increase in international buyer engagement', '25% reduction in time-to-sale for featured properties', '60% of buyers made purchasing decisions without physical visits', 'Positive feedback on the immersive experience'],
    imageUrl: '/images/portfolio/virtual-showroom.jpg',
    color: 'purple'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'enterprise', name: 'Enterprise Solutions' },
  { id: '3d', name: '3D Experiences' },
  { id: 'api', name: 'API Development' }
];

export default function PortfolioPage() {
  // State for filtering and selected project
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // Filtered projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // Get the currently selected project details
  const currentProject = selectedProject 
    ? projects.find(project => project.id === selectedProject) 
    : null;
  
  // Animation variants for projects grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-10 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 opacity-20 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming_re_kg9v.svg"
            alt="Programming illustration"
            width={256}
            height={256}
            animationType="float"
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 opacity-15 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app_re_catg.svg"
            alt="Mobile app illustration"
            width={192}
            height={192}
            animationType="scale"
            delay={0.6}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our showcase of premium Node.js development projects and immersive 3D experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters and Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Placeholder for actual project images */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500 to-${project.color}-700 opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-3xl font-bold text-white`}>
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button 
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No projects match the selected category. Please try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="h-64 bg-gray-200 dark:bg-gray-800 relative">
                {/* Placeholder for actual project images */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${currentProject.color}-500 to-${currentProject.color}-700 opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                    {currentProject.title}
                  </h2>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {currentProject.description}
                  </p>
                </div>
                
                {/* Challenge and Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">The Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentProject.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Our Solution</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">The Results</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentProject.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Contact CTA */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Interested in a similar solution for your business?
                  </p>
                  <Link
                    href="/pages/contact"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 opacity-5 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting_a0xv.svg"
            alt="Cloud hosting illustration"
            width={192}
            height={192}
            animationType="pulse"
            delay={0.3}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Client Testimonials</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">John Doe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Enterprise Solutions Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Their expertise in Node.js development and microservices architecture helped us transform our legacy system into a modern, scalable platform. The team's technical knowledge and commitment to quality are impressive."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-300 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Alice Smith</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director, Retail Innovation</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The 3D product configurator transformed our customer experience. Our customers love being able to customize and visualize products before purchase, and we've seen a significant decrease in returns."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                  <span className="text-green-600 dark:text-green-300 font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Robert Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Financial Analytics Ltd.</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Their financial analytics platform has been a game-changer for our institution. The real-time insights and visualization capabilities have improved our decision-making process and helped us better serve our customers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise in Node.js development and 3D experiences can help bring your vision to life.
          </p>
          <Link 
            href="/pages/contact" 
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 