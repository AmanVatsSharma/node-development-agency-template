"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedIllustrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationType?: "float" | "pulse" | "rotate" | "scale";
  delay?: number;
  duration?: number;
}

const animationVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  rotate: {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  scale: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AnimatedIllustration({
  src,
  alt,
  width,
  height,
  className = "",
  animationType = "float",
  delay = 0,
  duration = 3
}: AnimatedIllustrationProps) {
  const shouldReduceMotion = useReducedMotion();

  console.log("[AnimatedIllustration] Rendering", { src, animationType, shouldReduceMotion });

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? undefined : animationVariants}
      animate={shouldReduceMotion ? { opacity: 1 } : animationType}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-contain"
        priority={false}
      />
    </motion.div>
  );
}