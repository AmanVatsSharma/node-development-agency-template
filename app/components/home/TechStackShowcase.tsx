"use client";

/**
 * @fileoverview TechStackShowcase Component - Technology Stack Display
 * @description Premium showcase of technologies and tools used
 * Features:
 * - Animated technology icons
 * - Category-based organization
 * - Hover effects with tooltips
 * - Responsive grid layout
 * 
 * @component TechStackShowcase
 * @example
 * <TechStackShowcase />
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Console log for debugging
console.log('[TechStackShowcase] Component loaded');

/**
 * Technology interface
 */
interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string; // Emoji or SVG
  color: string; // Tailwind gradient
}

/**
 * Technology Category Component
 */
interface TechCategoryProps {
  category: string;
  technologies: Technology[];
  index: number;
}

function TechCategory({ category, technologies, index }: TechCategoryProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  console.log(`[TechCategory] Rendering category: ${category}`);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-12"
    >
      {/* Category Header */}
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
        {category}
      </h3>
      
      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="group relative"
          >
            {/* Tech Card */}
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer`}>
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </p>
              </div>
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {tech.name}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Main TechStackShowcase Component
 */
export default function TechStackShowcase() {
  const shouldReduceMotion = useReducedMotion();
  console.log('[TechStackShowcase] Component rendering');
  
  // Technology stack data organized by category
  const techStack: Record<string, Technology[]> = {
    'Frontend': [
      { id: 'react', name: 'React', category: 'Frontend', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { id: 'nextjs', name: 'Next.js', category: 'Frontend', icon: '▲', color: 'from-gray-700 to-black' },
      { id: 'typescript', name: 'TypeScript', category: 'Frontend', icon: '📘', color: 'from-blue-600 to-blue-800' },
      { id: 'tailwind', name: 'Tailwind', category: 'Frontend', icon: '🎨', color: 'from-teal-400 to-cyan-600' },
      { id: 'threejs', name: 'Three.js', category: 'Frontend', icon: '🎮', color: 'from-purple-500 to-pink-600' },
      { id: 'framer', name: 'Framer Motion', category: 'Frontend', icon: '✨', color: 'from-pink-500 to-purple-600' },
    ],
    'Backend': [
      { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: '🟢', color: 'from-green-500 to-green-700' },
      { id: 'express', name: 'Express', category: 'Backend', icon: '🚂', color: 'from-gray-600 to-gray-800' },
      { id: 'nestjs', name: 'NestJS', category: 'Backend', icon: '🔺', color: 'from-red-500 to-pink-600' },
      { id: 'graphql', name: 'GraphQL', category: 'Backend', icon: '◈', color: 'from-pink-500 to-purple-600' },
      { id: 'prisma', name: 'Prisma', category: 'Backend', icon: '🔷', color: 'from-blue-400 to-indigo-600' },
      { id: 'mongodb', name: 'MongoDB', category: 'Backend', icon: '🍃', color: 'from-green-600 to-emerald-700' },
    ],
    'Cloud & DevOps': [
      { id: 'aws', name: 'AWS', category: 'Cloud', icon: '☁️', color: 'from-orange-400 to-yellow-600' },
      { id: 'docker', name: 'Docker', category: 'DevOps', icon: '🐳', color: 'from-blue-500 to-cyan-600' },
      { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps', icon: '☸️', color: 'from-blue-600 to-indigo-700' },
      { id: 'vercel', name: 'Vercel', category: 'Cloud', icon: '▲', color: 'from-gray-800 to-black' },
      { id: 'github', name: 'GitHub Actions', category: 'DevOps', icon: '🔧', color: 'from-gray-700 to-purple-900' },
      { id: 'nginx', name: 'Nginx', category: 'DevOps', icon: '🌐', color: 'from-green-500 to-teal-600' },
    ],
    'AI & Data': [
      { id: 'openai', name: 'OpenAI', category: 'AI', icon: '🤖', color: 'from-emerald-400 to-cyan-600' },
      { id: 'tensorflow', name: 'TensorFlow', category: 'AI', icon: '🧠', color: 'from-orange-500 to-red-600' },
      { id: 'python', name: 'Python', category: 'AI', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
      { id: 'redis', name: 'Redis', category: 'Data', icon: '🔴', color: 'from-red-500 to-red-700' },
      { id: 'elasticsearch', name: 'Elasticsearch', category: 'Data', icon: '🔍', color: 'from-teal-500 to-cyan-600' },
      { id: 'postgresql', name: 'PostgreSQL', category: 'Data', icon: '🐘', color: 'from-blue-600 to-indigo-700' },
    ],
  };
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden content-visibility-auto">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl hidden md:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage the latest and most powerful technologies to build scalable, secure, and high-performance solutions
          </p>
        </motion.div>
        
        {/* Technology Categories */}
        <div className="max-w-7xl mx-auto">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <TechCategory
              key={category}
              category={category}
              technologies={technologies}
              index={index}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            And many more technologies tailored to your specific needs
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            Discuss Your Tech Stack →
          </button>
        </motion.div>
      </div>
    </section>
  );
}