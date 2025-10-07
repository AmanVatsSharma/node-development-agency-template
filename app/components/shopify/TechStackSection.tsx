'use client';

/**
 * TechStackSection Component
 * 
 * Showcase of technologies and tools used
 * Features:
 * - Animated tech logos
 * - Marquee effect
 * - Hover interactions
 * - Mobile-responsive
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

console.log('[TechStackSection] Component loaded');

interface Tech {
  id: number;
  name: string;
  category: string;
  color: string;
}

const technologies: Tech[] = [
  { id: 1, name: 'Shopify Plus', category: 'Platform', color: 'from-green-500 to-emerald-600' },
  { id: 2, name: 'Liquid', category: 'Templating', color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Next.js', category: 'Headless', color: 'from-gray-800 to-gray-900' },
  { id: 4, name: 'Node.js', category: 'Backend', color: 'from-green-600 to-green-700' },
  { id: 5, name: 'Klaviyo', category: 'Email Marketing', color: 'from-purple-600 to-purple-700' },
  { id: 6, name: 'Zapier', category: 'Automation', color: 'from-orange-500 to-orange-600' },
  { id: 7, name: 'Google Tag Manager', category: 'Analytics', color: 'from-blue-600 to-blue-700' },
  { id: 8, name: 'Meta Pixel', category: 'Tracking', color: 'from-blue-500 to-indigo-600' },
  { id: 9, name: 'Tailwind UI', category: 'Design', color: 'from-cyan-500 to-teal-600' },
  { id: 10, name: 'React', category: 'Framework', color: 'from-cyan-400 to-blue-500' },
  { id: 11, name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-blue-700' },
  { id: 12, name: 'Framer Motion', category: 'Animation', color: 'from-pink-500 to-rose-600' },
];

const TechStackSection = () => {
  console.log('[TechStackSection] Rendering tech stack section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00B894] to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-semibold text-gray-700">Cutting-Edge Technology</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powered By
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              Best-In-Class Tech
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading tools and technologies to build your store
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Tech icon placeholder */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} mb-4 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {tech.name.charAt(0)}
                  </div>

                  {/* Tech name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  
                  {/* Category */}
                  <p className="text-xs text-gray-600">{tech.category}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            + Many more tools tailored to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
