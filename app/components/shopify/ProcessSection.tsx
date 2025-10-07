'use client';

/**
 * ProcessSection Component
 * 
 * 6-step process timeline with animations
 * Features:
 * - Animated timeline visualization
 * - Step-by-step process flow
 * - Mobile-responsive vertical layout
 * - Icon animations
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

console.log('[ProcessSection] Component loaded');

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Strategy Call',
    description: 'We understand your brand, goals, target audience, and competition to create a tailored strategy.',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design & Wireframe',
    description: 'Custom designs that reflect your brand personality and optimize for conversions.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    number: '03',
    title: 'Development & Integration',
    description: 'Building your store with clean code, integrations, and all necessary functionality.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-[#00B894] to-emerald-500',
  },
  {
    id: 4,
    number: '04',
    title: 'Testing + Speed Optimization',
    description: 'Rigorous testing across devices, browsers, and performance optimization for speed.',
    icon: <TestTube className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    number: '05',
    title: 'Launch & Training',
    description: 'Going live with your store and training your team on managing it effectively.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    number: '06',
    title: '30-Day Post-Launch Support',
    description: 'Ongoing support to ensure smooth operations and quick fixes for any issues.',
    icon: <HeadphonesIcon className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
  },
];

const ProcessSection = () => {
  console.log('[ProcessSection] Rendering process section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1C4E80]/10 to-[#00B894]/10 border border-[#1C4E80]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1C4E80]" />
            <span className="text-sm font-semibold text-gray-700">Our Process</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Journey
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              From Idea to Launch
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 6-step process that transforms your vision into a thriving online store
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop view */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#00B894] to-pink-500 origin-left"
            />

            <div className="grid grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <ProcessCardMobile key={step.id} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isInView: boolean;
}

const ProcessCard = ({ step, index, isInView }: ProcessCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative ${isEven ? 'mt-0' : 'mt-32'}`}
    >
      {/* Connecting dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        className={`absolute ${isEven ? 'top-32' : 'top-0'} left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${step.color} rounded-full z-10 shadow-lg`}
      />

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
        {/* Number badge */}
        <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4 shadow-lg`}
        >
          {step.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

        {/* Arrow indicator */}
        {index < processSteps.length - 1 && (
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ProcessCardMobile = ({ step, index, isInView }: ProcessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex gap-6">
        {/* Left: Timeline */}
        <div className="flex flex-col items-center">
          {/* Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
          >
            {step.icon}
          </motion.div>

          {/* Connecting line */}
          {index < processSteps.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className={`w-0.5 flex-1 bg-gradient-to-b ${step.color} mt-2 origin-top min-h-[60px]`}
            />
          )}
        </div>

        {/* Right: Content */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="text-4xl font-bold text-gray-100 mb-2">{step.number}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessSection;
