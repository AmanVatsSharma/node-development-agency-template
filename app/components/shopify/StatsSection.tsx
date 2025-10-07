'use client';

/**
 * StatsSection Component
 * 
 * Animated statistics/trust bar showing key metrics
 * Features:
 * - Animated counter for numbers
 * - Icon animations
 * - Responsive grid layout
 * - Scroll-triggered animations
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Award, Zap, TrendingUp } from 'lucide-react';

console.log('[StatsSection] Component loaded');

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    icon: <Award className="w-6 h-6" />,
    color: 'from-[#00B894] to-emerald-500',
  },
  {
    id: 2,
    value: 100,
    suffix: '+',
    label: 'Stores Built',
    icon: <Users className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    value: 42,
    suffix: '%',
    label: 'Avg. Conversion Increase',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    value: 2,
    suffix: 's',
    label: 'Load Speed',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
  },
];

// Counter animation hook
const useCounter = (end: number, duration: number = 2, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    console.log(`[StatsSection] Starting counter animation to ${end}`);
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
};

const StatsSection = () => {
  console.log('[StatsSection] Rendering stats section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: Stat;
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
  const count = useCounter(stat.value, 2, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {stat.icon}
      </motion.div>

      {/* Value */}
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        {count}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-gray-600 to-gray-900">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-600 font-medium">{stat.label}</p>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default StatsSection;
