'use client';

/**
 * Technology Section Component - TECH STACK SHOWCASE
 * Premium technology showcase with professional design
 * 
 * @version 2.0.0 - Production Ready Technology
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Globe,
  Monitor,
  Smartphone,
  Server,
  Lock,
  Settings,
  BarChart3
} from 'lucide-react';

console.log('[Mumbai-Web-Development] TechnologySection component loaded');

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] TechnologySection mounted');
    return () => console.log('[Mumbai-Web-Development] TechnologySection unmounted');
  }, []);

  const technologies = [
    { 
      name: 'React', 
      category: 'Frontend', 
      icon: Code, 
      color: 'text-blue-500',
      bgColor: 'from-blue-500/10 to-blue-500/5',
      borderColor: 'border-blue-500/20',
      description: 'Modern UI library for building interactive user interfaces'
    },
    { 
      name: 'Next.js', 
      category: 'Framework', 
      icon: Monitor, 
      color: 'text-black dark:text-white',
      bgColor: 'from-slate-500/10 to-slate-500/5',
      borderColor: 'border-slate-500/20',
      description: 'Full-stack React framework for production-ready applications'
    },
    { 
      name: 'Node.js', 
      category: 'Backend', 
      icon: Server, 
      color: 'text-green-500',
      bgColor: 'from-green-500/10 to-green-500/5',
      borderColor: 'border-green-500/20',
      description: 'JavaScript runtime for scalable server-side applications'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      icon: Database, 
      color: 'text-green-600',
      bgColor: 'from-green-600/10 to-green-600/5',
      borderColor: 'border-green-600/20',
      description: 'NoSQL database for flexible data storage and retrieval'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      icon: Database, 
      color: 'text-blue-600',
      bgColor: 'from-blue-600/10 to-blue-600/5',
      borderColor: 'border-blue-600/20',
      description: 'Advanced open-source relational database system'
    },
    { 
      name: 'AWS', 
      category: 'Cloud', 
      icon: Cloud, 
      color: 'text-orange-500',
      bgColor: 'from-orange-500/10 to-orange-500/5',
      borderColor: 'border-orange-500/20',
      description: 'Amazon Web Services for scalable cloud infrastructure'
    },
    { 
      name: 'Vercel', 
      category: 'Hosting', 
      icon: Cloud, 
      color: 'text-black dark:text-white',
      bgColor: 'from-slate-600/10 to-slate-600/5',
      borderColor: 'border-slate-600/20',
      description: 'Global edge network for fast website deployment'
    },
    { 
      name: 'Stripe', 
      category: 'Payments', 
      icon: Shield, 
      color: 'text-purple-500',
      bgColor: 'from-purple-500/10 to-purple-500/5',
      borderColor: 'border-purple-500/20',
      description: 'Secure payment processing for e-commerce solutions'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Styling', 
      icon: Zap, 
      color: 'text-cyan-500',
      bgColor: 'from-cyan-500/10 to-cyan-500/5',
      borderColor: 'border-cyan-500/20',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    { 
      name: 'TypeScript', 
      category: 'Language', 
      icon: Code, 
      color: 'text-blue-600',
      bgColor: 'from-blue-600/10 to-blue-600/5',
      borderColor: 'border-blue-600/20',
      description: 'Typed superset of JavaScript for better code quality'
    },
    { 
      name: 'GraphQL', 
      category: 'API', 
      icon: Globe, 
      color: 'text-pink-500',
      bgColor: 'from-pink-500/10 to-pink-500/5',
      borderColor: 'border-pink-500/20',
      description: 'Query language for APIs with powerful data fetching'
    },
    { 
      name: 'Docker', 
      category: 'DevOps', 
      icon: Settings, 
      color: 'text-blue-500',
      bgColor: 'from-blue-500/10 to-blue-500/5',
      borderColor: 'border-blue-500/20',
      description: 'Containerization platform for consistent deployments'
    }
  ];

  const categories = [
    {
      name: 'Frontend Development',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs']
    },
    {
      name: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'AWS S3']
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      technologies: ['AWS', 'Vercel', 'Docker', 'CI/CD']
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
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20"
      id="technology"
      role="region"
      aria-labelledby="technology-heading"
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
            id="technology-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Modern Technology Stack
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, secure, and scalable websites for Mumbai businesses.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${tech.borderColor}`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${tech.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className={`h-6 w-6 ${tech.color}`} />
              </div>
              <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">{tech.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{tech.category}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Benefits */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Our Technology Stack?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We choose technologies that provide the best performance, security, and scalability for Mumbai businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Lightning Fast</h4>
              <p className="text-blue-100 text-sm">Optimized for speed and performance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Secure & Reliable</h4>
              <p className="text-blue-100 text-sm">Enterprise-grade security and reliability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Scalable</h4>
              <p className="text-blue-100 text-sm">Grows with your Mumbai business</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}