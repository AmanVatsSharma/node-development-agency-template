'use client';

/**
 * @fileoverview Customization & Integration Section - EnterpriseHero CRM
 * @description Dynamic use-cases and BharatERP integration flow
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  Workflow, 
  Building2, 
  Factory, 
  Cloud, 
  ArrowRight,
  Link2,
  Database,
  Users
} from 'lucide-react';

console.log('[CRM] CustomizationSection component loaded');

export function CustomizationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const useCases = [
    { icon: <Building2 className="h-6 w-6" />, name: 'Agency', color: 'from-blue-500 to-cyan-500' },
    { icon: <Factory className="h-6 w-6" />, name: 'Manufacturing', color: 'from-green-500 to-emerald-500' },
    { icon: <Cloud className="h-6 w-6" />, name: 'SaaS', color: 'from-purple-500 to-pink-500' },
    { icon: <Workflow className="h-6 w-6" />, name: 'Consulting', color: 'from-orange-500 to-amber-500' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="customization"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              A CRM That <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Molds Around</span><br />Your Workflow
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Whether you're an agency, manufacturer, SaaS company, or consultancy — we adapt to your unique processes.
            </p>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={`px-6 py-4 rounded-2xl bg-gradient-to-r ${useCase.color} text-white shadow-xl hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3">
                  {useCase.icon}
                  <span className="font-bold text-lg">{useCase.name}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Integration Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-black text-center mb-12">
              <span className="text-[#00C897]">BharatERP</span> Integration Flow
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {[
                { name: 'Accounts', icon: <Database className="h-8 w-8" />, color: 'from-blue-500 to-blue-600' },
                { name: 'CRM', icon: <Users className="h-8 w-8" />, color: 'from-purple-500 to-purple-600' },
                { name: 'Inventory', icon: <Factory className="h-8 w-8" />, color: 'from-green-500 to-green-600' },
                { name: 'HRM', icon: <Building2 className="h-8 w-8" />, color: 'from-orange-500 to-orange-600' }
              ].map((module, index) => (
                <React.Fragment key={index}>
                  <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${module.color} text-white shadow-xl`}>
                    {module.icon}
                    <span className="font-bold">{module.name}</span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="h-8 w-8 text-gray-400 dark:text-gray-600 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#002F9E] to-[#00C897] text-white font-bold px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl"
              >
                <Link2 className="h-5 w-5 mr-2" />
                See BharatERP Integration Flow
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
