'use client';

/**
 * Tech Stack Section - PREMIUM ANIMATED LOGO GRID
 * Interactive tech logos with hover effects and tooltips
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

console.log('[ReactJS-Dev] TechStackSection component loaded');

interface Tech {
  name: string;
  category: string;
  gradient: string;
  description: string;
}

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] TechStackSection mounted');
    return () => console.log('[ReactJS-Dev] TechStackSection unmounted');
  }, []);

  const techStack: Tech[] = [
    { name: 'React', category: 'Core', gradient: 'from-[#61DAFB] to-cyan-400', description: 'UI library' },
    { name: 'TypeScript', category: 'Language', gradient: 'from-blue-600 to-blue-400', description: 'Type safety' },
    { name: 'Next.js', category: 'Framework', gradient: 'from-black to-gray-800', description: 'SSR & SSG' },
    { name: 'Redux', category: 'State', gradient: 'from-purple-600 to-purple-400', description: 'State management' },
    { name: 'TailwindCSS', category: 'Styling', gradient: 'from-cyan-500 to-teal-400', description: 'Utility CSS' },
    { name: 'Vite', category: 'Build', gradient: 'from-purple-500 to-yellow-400', description: 'Build tool' },
    { name: 'GraphQL', category: 'API', gradient: 'from-pink-500 to-purple-500', description: 'Query language' },
    { name: 'Node.js', category: 'Runtime', gradient: 'from-green-600 to-green-400', description: 'Backend' },
    { name: 'Firebase', category: 'Backend', gradient: 'from-yellow-500 to-orange-500', description: 'BaaS' },
    { name: 'AWS', category: 'Cloud', gradient: 'from-orange-600 to-yellow-500', description: 'Cloud services' },
    { name: 'Jest', category: 'Testing', gradient: 'from-red-600 to-orange-500', description: 'Unit tests' },
    { name: 'Cypress', category: 'Testing', gradient: 'from-gray-700 to-gray-500', description: 'E2E tests' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="tech-stack"
      role="region"
      aria-labelledby="tech-stack-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#61DAFB]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00C897]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Modern & Powerful
            </span>
          </motion.div>

          <motion.h2
            id="tech-stack-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Tech
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Industry-leading technologies for building exceptional React apps
          </motion.p>
        </motion.div>

        {/* Premium Tech Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-[#61DAFB]/10 hover:-translate-y-2">
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-br ${tech.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={hoveredTech === tech.name ? { scale: 1.5 } : { scale: 1 }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredTech === tech.name ? 1 : 0, y: hoveredTech === tech.name ? 0 : -10 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white text-[10px] font-bold rounded-full whitespace-nowrap"
                    >
                      {tech.category}
                    </motion.div>

                    {/* Tech Logo Placeholder */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}
                    >
                      <span className="text-2xl sm:text-3xl font-black text-white">
                        {tech.name.charAt(0)}
                      </span>
                    </motion.div>

                    {/* Tech Name */}
                    <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredTech === tech.name ? 1 : 0,
                        height: hoveredTech === tech.name ? 'auto' : 0
                      }}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 overflow-hidden"
                    >
                      {tech.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 sm:p-10 bg-gradient-to-br from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 backdrop-blur-xl rounded-3xl border border-[#61DAFB]/20 max-w-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#61DAFB] to-[#00C897] flex items-center justify-center shadow-xl">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white">
              Your tech stack is not just built —
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              it's <span className="font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent">future-ready</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
