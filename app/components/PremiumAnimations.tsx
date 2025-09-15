"use client";

import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Premium Animation Variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Premium Text Animation Component
interface PremiumTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const PremiumText: React.FC<PremiumTextProps> = ({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration, 
            delay,
            ease: [0.6, -0.05, 0.01, 0.99] 
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Premium Card Animation Component
interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  hover = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
      } : {}}
      variants={{
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: { 
            duration: 0.6, 
            delay,
            ease: [0.6, -0.05, 0.01, 0.99] 
          }
        }
      }}
      className={`premium-card premium-hover-scale ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Premium Button Animation Component
interface PremiumButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  children, 
  className = "",
  onClick,
  variant = 'primary'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'premium-btn premium-gradient text-white';
      case 'secondary':
        return 'premium-btn premium-gradient-2 text-white';
      case 'outline':
        return 'premium-btn bg-transparent border-2 border-current text-current hover:bg-current hover:text-white';
      default:
        return 'premium-btn premium-gradient text-white';
    }
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      onClick={onClick}
      className={`${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.button>
  );
};

// Premium Section Animation Component
interface PremiumSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const PremiumSection: React.FC<PremiumSectionProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0, y: 80 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 1, 
            delay,
            ease: [0.6, -0.05, 0.01, 0.99] 
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Premium Counter Animation Component
interface PremiumCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const PremiumCounter: React.FC<PremiumCounterProps> = ({ 
  end, 
  duration = 2,
  prefix = "",
  suffix = "",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={className}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {end}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.div>
  );
};

// Premium Progress Bar Component
interface PremiumProgressProps {
  progress: number;
  label?: string;
  className?: string;
  color?: string;
}

export const PremiumProgress: React.FC<PremiumProgressProps> = ({ 
  progress, 
  label,
  className = "",
  color = "blue"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${progress}%`,
        transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }
      });
    }
  }, [isInView, controls, progress]);

  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {progress}%
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className={`h-full ${getColorClass()} rounded-full`}
        />
      </div>
    </div>
  );
};

// Premium Floating Action Component
interface PremiumFloatingActionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const PremiumFloatingAction: React.FC<PremiumFloatingActionProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.6, -0.05, 0.01, 0.99] 
        }
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
      className={`premium-card ${className}`}
    >
      {children}
    </motion.div>
  );
};