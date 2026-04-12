"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/app/lib/cn";

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  [key: string]: any;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <Component
      className={cn("relative text-xl p-[1px] overflow-hidden bg-transparent", containerClassName)}
      {...otherProps}
    >
      <div className="absolute inset-0 rounded-[inherit]" style={{ overflow: "hidden" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx ?? "12"}
            ry={ry ?? "12"}
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.9) 0%, rgba(99,68,245,0.6) 40%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>

      <div
        className={cn(
          "relative border border-transparent bg-clip-padding",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
