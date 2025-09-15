"use client";

import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 6,
  className = "",
  style = {}
}) => {
  return (
    <div 
      className={`floating-element ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

// Premium Icon Components
const PremiumIcon: React.FC<{ 
  icon: string; 
  size?: number; 
  className?: string;
  color?: string;
}> = ({ icon, size = 24, className = "", color = "currentColor" }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'nodejs': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-5.508-3.18c-0.622-0.36-1.001-1.009-1.001-1.729V5.156c0-0.72,0.379-1.369,1.001-1.729l5.508-3.18c0.56-0.324,1.284-0.324,1.844,0l5.508,3.18c0.622,0.36,1.001,1.009,1.001,1.729v13.688c0,0.72-0.379,1.369-1.001,1.729l-5.508,3.18C12.639,23.916,12.319,24,11.998,24z M6.998,18.758c0,0.168,0.089,0.325,0.236,0.414l5.508,3.18c0.15,0.086,0.33,0.086,0.48,0l5.508-3.18c0.147-0.089,0.236-0.246,0.236-0.414V5.156c0-0.168-0.089-0.325-0.236-0.414l-5.508-3.18c-0.15-0.086-0.33-0.086-0.48,0L7.234,4.742C7.087,4.831,6.998,4.988,6.998,5.156V18.758z"/>
        <path d="M8.5,12.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5S8.5,13.328,8.5,12.5z"/>
        <path d="M12.5,12.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5S12.5,13.328,12.5,12.5z"/>
      </svg>
    ),
    'react': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" opacity="0.3"/>
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" opacity="0.3"/>
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" opacity="0.3"/>
      </svg>
    ),
    'database': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,3C7.58,3,4,4.79,4,7s3.58,4,8,4s8-1.79,8-4S16.42,3,12,3z M4,9v3c0,2.21,3.58,4,8,4s8-1.79,8-4V9c0,2.21-3.58,4-8,4S4,11.21,4,9z M4,14v3c0,2.21,3.58,4,8,4s8-1.79,8-4v-3c0,2.21-3.58,4-8,4S4,16.21,4,14z"/>
      </svg>
    ),
    'cloud': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14c0,3.31,2.69,6,6,6h13c2.76,0,5-2.24,5-5C24,12.36,21.95,10.22,19.35,10.04z"/>
      </svg>
    ),
    'security': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,1L3,5V11C3,16.55,6.84,21.74,12,23C17.16,21.74,21,16.55,21,11V5L12,1M12,7C13.4,7,14.8,8.6,14.8,10V11H16V16H8V11H9.2V10C9.2,8.6,10.6,7,12,7M12,8.2C11.2,8.2,10.4,8.7,10.4,10V11H13.6V10C13.6,8.7,12.8,8.2,12,8.2Z"/>
      </svg>
    ),
    'analytics': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M19,3H5C3.9,3,3,3.9,3,5V19C3,20.1,3.9,21,5,21H19C20.1,21,21,20.1,21,19V5C21,3.9,20.1,3,19,3M19,19H5V5H19V19Z"/>
        <path d="M7,17H9V10H7V17Z"/>
        <path d="M11,17H13V7H11V17Z"/>
        <path d="M15,17H17V13H15V17Z"/>
      </svg>
    ),
    'globe': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,4a8,8,0,0,1,0,16,8,8,0,0,1,0-16ZM12,6a6,6,0,0,0,0,12,6,6,0,0,0,0-12ZM12,8a4,4,0,0,1,0,8,4,4,0,0,1,0-8Z"/>
      </svg>
    ),
    'rocket': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,2.5L8,7H16L12,2.5M12,1L6,8H18L12,1M12,9C10.34,9,9,10.34,9,12S10.34,15,12,15S15,13.66,15,12S13.66,9,12,9M12,13.5C11.17,13.5,10.5,12.83,10.5,12S11.17,10.5,12,10.5S13.5,11.17,13.5,12S12.83,13.5,12,13.5M12,8C8.69,8,6,10.69,6,14H18C18,10.69,15.31,8,12,8Z"/>
      </svg>
    ),
    'star': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
      </svg>
    ),
    'lightning': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M7,2V13H10V22L17,10H13L17,2H7Z"/>
      </svg>
    )
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {iconMap[icon] || (
        <div className={`w-${size/4} h-${size/4} bg-current rounded-full opacity-50`}></div>
      )}
    </div>
  );
};

// Floating Background Elements Component
export const FloatingBackgroundElements: React.FC = () => {
  const elements = [
    { icon: 'nodejs', position: 'top-20 left-10', delay: 0, color: '#3b82f6' },
    { icon: 'react', position: 'top-40 right-20', delay: 1, color: '#10b981' },
    { icon: 'database', position: 'top-60 left-1/4', delay: 2, color: '#8b5cf6' },
    { icon: 'cloud', position: 'top-80 right-1/3', delay: 3, color: '#f59e0b' },
    { icon: 'security', position: 'top-32 left-1/2', delay: 4, color: '#ef4444' },
    { icon: 'analytics', position: 'top-52 right-10', delay: 5, color: '#06b6d4' },
    { icon: 'globe', position: 'top-72 left-16', delay: 6, color: '#84cc16' },
    { icon: 'rocket', position: 'top-24 right-1/4', delay: 7, color: '#f97316' },
    { icon: 'star', position: 'top-44 left-3/4', delay: 8, color: '#eab308' },
    { icon: 'lightning', position: 'top-64 right-16', delay: 9, color: '#a855f7' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          delay={element.delay}
          duration={8 + (index % 3)}
          className={`floating-icon ${element.position}`}
        >
          <PremiumIcon 
            icon={element.icon} 
            size={32} 
            color={element.color}
            className="opacity-20 hover:opacity-40 transition-opacity duration-300"
          />
        </FloatingElement>
      ))}
    </div>
  );
};

// Premium Floating Cards Component
export const PremiumFloatingCards: React.FC = () => {
  const cards = [
    {
      title: "Enterprise Grade",
      icon: "security",
      color: "from-blue-500 to-blue-600",
      delay: 0
    },
    {
      title: "Global Scale",
      icon: "globe", 
      color: "from-green-500 to-green-600",
      delay: 2
    },
    {
      title: "Innovation",
      icon: "rocket",
      color: "from-purple-500 to-purple-600", 
      delay: 4
    },
    {
      title: "Excellence",
      icon: "star",
      color: "from-orange-500 to-orange-600",
      delay: 6
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <FloatingElement
          key={index}
          delay={card.delay}
          duration={10}
          className={`premium-card w-32 h-20 ${card.color} bg-gradient-to-br opacity-10 hover:opacity-20 transition-opacity duration-500`}
          style={{
            position: 'absolute',
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 20)}%`,
            transform: `rotate(${index * 15}deg)`
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white">
            <PremiumIcon icon={card.icon} size={20} color="white" />
            <span className="text-xs font-semibold mt-1">{card.title}</span>
          </div>
        </FloatingElement>
      ))}
    </div>
  );
};

// Premium Geometric Shapes
export const PremiumGeometricShapes: React.FC = () => {
  const shapes = [
    { type: 'circle', position: 'top-10 left-20', size: 'w-16 h-16', delay: 0 },
    { type: 'square', position: 'top-30 right-10', size: 'w-12 h-12', delay: 2 },
    { type: 'triangle', position: 'top-50 left-10', size: 'w-14 h-14', delay: 4 },
    { type: 'diamond', position: 'top-70 right-20', size: 'w-10 h-10', delay: 6 },
    { type: 'hexagon', position: 'top-20 right-1/3', size: 'w-18 h-18', delay: 8 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <FloatingElement
          key={index}
          delay={shape.delay}
          duration={12}
          className={`${shape.position} ${shape.size} opacity-5`}
        >
          <div className={`w-full h-full premium-gradient rounded-full transform rotate-45`}></div>
        </FloatingElement>
      ))}
    </div>
  );
};

export default FloatingElement;