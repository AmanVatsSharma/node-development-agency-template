"use client";
import React from "react";
import { cn } from "@/app/lib/cn";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  // Fan of beams spreading from top-left AND top-right corners across the full hero
  const paths = [
    // From top-left corner, fanning right
    "M0 0 Q 200 300 800 200",
    "M0 0 Q 300 400 900 500",
    "M0 0 Q 150 250 700 100",
    "M0 0 Q 400 500 1100 600",
    "M0 0 Q 100 150 500 -50",
    "M0 0 Q 500 600 1300 800",
    "M0 0 Q 250 350 900 350",
    // From top-right corner, fanning left
    "M1440 0 Q 1200 300 400 200",
    "M1440 0 Q 1100 400 300 500",
    "M1440 0 Q 1300 250 700 100",
    "M1440 0 Q 900 500 200 600",
    "M1440 0 Q 1350 150 900 -50",
    // Full-width horizontal sweeps
    "M-100 200 Q 400 50 900 200 Q 1300 350 1600 150",
    "M-100 500 Q 500 300 1000 500 Q 1300 650 1700 450",
    "M-100 800 Q 600 600 1100 700 Q 1400 800 1700 650",
    // Diagonal bottom-left to top-right
    "M-200 900 Q 300 500 800 300 Q 1200 100 1700 -100",
    "M-200 700 Q 200 400 700 250 Q 1100 100 1600 -200",
    "M-100 1000 Q 400 600 900 400 Q 1300 200 1800 0",
    // Center fans
    "M720 1000 Q 720 600 200 200",
    "M720 1000 Q 720 600 1240 200",
    "M720 1000 Q 500 500 100 0",
    "M720 1000 Q 900 500 1400 0",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {paths.map((_, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`beam-g-${i}`}
              x1="0%" y1="0%" x2="100%" y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
              <stop offset={`${20 + (i % 5) * 8}%`} stopColor="#2563EB" stopOpacity="0.7" />
              <stop offset={`${35 + (i % 5) * 8}%`} stopColor="#818CF8" stopOpacity="0.5" />
              <stop offset={`${55 + (i % 5) * 5}%`} stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          ))}
          {/* travelling highlight gradients */}
          {paths.map((_, i) => (
            <linearGradient
              key={`dot-grad-${i}`}
              id={`dot-g-${i}`}
              x1="0%" y1="0%" x2="100%" y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Static beam paths */}
        {paths.map((path, i) => (
          <path
            key={`beam-${i}`}
            d={path}
            stroke={`url(#beam-g-${i})`}
            strokeWidth={i % 3 === 0 ? "1.2" : "0.7"}
            strokeOpacity={0.5 + (i % 4) * 0.1}
            fill="none"
          />
        ))}

        {/* Travelling glow dots along each beam */}
        {paths.map((path, i) => (
          <circle key={`dot-${i}`} r={i % 4 === 0 ? "2.5" : "1.5"} fill="white" opacity="0.9">
            <animateMotion
              dur={`${5 + i * 0.6}s`}
              repeatCount="indefinite"
              path={path}
              begin={`-${i * 0.5}s`}
            />
          </circle>
        ))}

        {/* Edge fade masks */}
        <defs>
          <radialGradient id="center-glow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#center-glow)" />
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
