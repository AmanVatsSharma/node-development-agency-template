"use client";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD-CLASS HERO ANIMATION - TRULY IMPRESSIVE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * COMMON SENSE DESIGN:
 * - Everything is VISIBLE from all angles (3D, not flat)
 * - BRIGHT GLOWING objects with high contrast
 * - Proper spatial distribution
 * - Cinematic tour with info cards
 * - Premium, impressive experience
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Sphere,
  Stars,
  Float,
  OrbitControls,
  Line,
  Sparkles,
  Html,
  Text,
  RoundedBox
} from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// ═══════════════════════════════════════════════════════════════════════════
// VIBRANT COLORS - HIGH CONTRAST
// ═══════════════════════════════════════════════════════════════════════════

const NEON_GREEN = "#00ff41";
const ELECTRIC_CYAN = "#00ffff";
const LASER_BLUE = "#4da6ff";
const HOT_PINK = "#ff00ff";
const VIBRANT_ORANGE = "#ff6600";
const BRIGHT_YELLOW = "#ffff00";
const PURE_WHITE = "#ffffff";
const DARK_BG = "#0a0a0f"; // Slight tint, not pure black

// Tech colors for easy identification
const TECH_COLORS: Record<string, string> = {
  "Node.js": NEON_GREEN,
  "Next.js": PURE_WHITE,
  "NestJS": "#e0234e",
  "Python": "#3776ab",
  "TypeScript": "#3178c6",
  "React": "#61dafb",
  "Docker": "#2496ed",
  "Kubernetes": "#326ce5",
  "PostgreSQL": "#336791",
  "MongoDB": "#47a248",
  "Redis": "#dc382d",
  "GraphQL": "#e10098",
  "AWS": "#ff9900",
  "Azure": "#0089d6",
  "Rust": "#ce422b",
  "Go": "#00add8",
  "Java": "#007396",
  "SAP": "#0faaff",
  "AI/ML": HOT_PINK,
  "TensorFlow": "#ff6f00",
};

// ═══════════════════════════════════════════════════════════════════════════
// INFO CARD ON RIGHT SIDE
// ═══════════════════════════════════════════════════════════════════════════

interface InfoCardProps {
  title: string;
  description: string;
  features: string[];
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, features, color }) => (
  <div className="fixed top-1/2 right-8 -translate-y-1/2 z-40 max-w-md">
    <div 
      className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl transition-all duration-500 animate-slideInRight"
      style={{ borderColor: color }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
        />
        <h3 
          className="text-2xl font-bold"
          style={{ color }}
        >
          {title}
        </h3>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-2">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="flex items-start gap-2 text-sm text-gray-200 animate-fadeIn"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span style={{ color }}>▸</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// LOADING SPINNER
// ═══════════════════════════════════════════════════════════════════════════

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
    <div className="relative">
      <div className="w-24 h-24 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
      <div className="absolute top-3 left-3 w-18 h-18 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
    </div>
    <p className="text-cyan-400 text-lg font-bold mt-6 animate-pulse">Loading World-Class Experience...</p>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 3D TECH LOGO - VISIBLE FROM ALL ANGLES
// ═══════════════════════════════════════════════════════════════════════════

interface TechLogoProps {
  position: [number, number, number];
  name: string;
  color: string;
  onFocus: () => void;
}

const TechLogo3D: React.FC<TechLogoProps> = ({ position, name, color, onFocus }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      
      // Float animation
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.15;
      
      // Pulse when hovered
      if (hovered) {
        const scale = 1.2 + Math.sin(clock.getElapsedTime() * 5) * 0.1;
        meshRef.current.scale.setScalar(scale);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position}>
      {/* Main glowing sphere - VISIBLE FROM ALL ANGLES */}
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        onClick={onFocus}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 3 : 2}
          metalness={0.8}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>
      
      {/* Outer glow ring - also visible from all angles */}
      <mesh>
        <torusGeometry args={[0.75, 0.05, 16, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.8 : 0.5}
          toneMapped={false}
        />
      </mesh>
      
      {/* 3D Text label - always facing camera */}
      <Text
        position={[0, -1, 0]}
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {name}
      </Text>
      
      {/* Point light for extra glow */}
      <pointLight position={[0, 0, 0]} intensity={hovered ? 2 : 1} color={color} distance={3} />
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED SERVER RACK - BRIGHT & VISIBLE
// ═══════════════════════════════════════════════════════════════════════════

interface ServerRackProps {
  position: [number, number, number];
  label: string;
  color: string;
  onFocus: () => void;
}

const BrightServerRack: React.FC<ServerRackProps> = ({ position, label, color, onFocus }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.4) * 0.1;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15; // ROTATE so visible from all sides
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 6) * 0.08;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={onFocus}
    >
      {/* Main frame - GLOWING ON ALL SIDES */}
      <RoundedBox args={[1.5, 2.5, 1.2]} radius={0.05}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.8}
          metalness={0.8}
          roughness={0.3}
          toneMapped={false}
        />
      </RoundedBox>
      
      {/* Bright glowing edges - VISIBLE FROM ALL ANGLES */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.5, 2.5, 1.2)]} />
        <lineBasicMaterial color={ELECTRIC_CYAN} linewidth={3} />
      </lineSegments>
      
      {/* Server blades - ON FRONT SIDE */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <group key={`front-${i}`}>
          <mesh position={[0, 1.0 - i * 0.28, 0.61]}>
            <boxGeometry args={[1.3, 0.22, 0.02]} />
            <meshStandardMaterial
              color={NEON_GREEN}
              emissive={NEON_GREEN}
              emissiveIntensity={hovered ? 3 : 2}
              toneMapped={false}
            />
          </mesh>
          
          {[0, 1, 2, 3, 4, 5].map((led) => (
            <mesh key={led} position={[-0.5 + led * 0.2, 1.0 - i * 0.28, 0.62]}>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshBasicMaterial color={ELECTRIC_CYAN} toneMapped={false} />
              <pointLight position={[0, 0, 0]} intensity={1} color={ELECTRIC_CYAN} distance={0.5} />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Server blades - ON BACK SIDE (so visible when rotated) */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <group key={`back-${i}`}>
          <mesh position={[0, 1.0 - i * 0.28, -0.61]}>
            <boxGeometry args={[1.3, 0.22, 0.02]} />
            <meshStandardMaterial
              color={LASER_BLUE}
              emissive={LASER_BLUE}
              emissiveIntensity={hovered ? 3 : 2}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
      
      {/* Server blades - ON LEFT SIDE */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh key={`left-${i}`} position={[-0.76, 1.0 - i * 0.28, 0]}>
          <boxGeometry args={[0.02, 0.22, 1.0]} />
          <meshStandardMaterial
            color={HOT_PINK}
            emissive={HOT_PINK}
            emissiveIntensity={hovered ? 2.5 : 1.5}
            toneMapped={false}
          />
        </mesh>
      ))}
      
      {/* Server blades - ON RIGHT SIDE */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh key={`right-${i}`} position={[0.76, 1.0 - i * 0.28, 0]}>
          <boxGeometry args={[0.02, 0.22, 1.0]} />
          <meshStandardMaterial
            color={VIBRANT_ORANGE}
            emissive={VIBRANT_ORANGE}
            emissiveIntensity={hovered ? 2.5 : 1.5}
            toneMapped={false}
          />
        </mesh>
      ))}
      
      {/* Multiple point lights around the rack */}
      <pointLight position={[0, 0, 0.8]} intensity={hovered ? 4 : 2} color={color} distance={4} />
      <pointLight position={[0, 0, -0.8]} intensity={hovered ? 4 : 2} color={color} distance={4} />
      <pointLight position={[0.8, 0, 0]} intensity={hovered ? 3 : 1.5} color={color} distance={3} />
      <pointLight position={[-0.8, 0, 0]} intensity={hovered ? 3 : 1.5} color={color} distance={3} />
      
      {/* Label - always facing camera */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.35}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="#000000"
        fontWeight="bold"
      >
        {label}
      </Text>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED DATABASE - BRIGHT & VISIBLE
// ═══════════════════════════════════════════════════════════════════════════

interface DatabaseProps {
  position: [number, number, number];
  label: string;
  color: string;
  onFocus: () => void;
}

const BrightDatabase: React.FC<DatabaseProps> = ({ position, label, color, onFocus }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5; // ROTATING so visible from all sides
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.7) * 0.15;
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 6) * 0.1;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={onFocus}
    >
      {/* Database disks - GLOWING ON ALL SIDES */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[0, 0.5 - i * 0.5, 0]}>
          {/* Main cylinder - GLOWING MATERIAL ALL AROUND */}
          <mesh>
            <cylinderGeometry args={[0.8, 0.8, 0.35, 48]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={hovered ? 1.5 : 1}
              metalness={0.7}
              roughness={0.3}
              toneMapped={false}
            />
          </mesh>
          
          {/* Bright top surface */}
          <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.8, 48]} />
            <meshStandardMaterial
              color={NEON_GREEN}
              emissive={NEON_GREEN}
              emissiveIntensity={hovered ? 3 : 2}
              toneMapped={false}
            />
          </mesh>
          
          {/* Bright bottom surface - visible when rotated */}
          <mesh position={[0, -0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.8, 48]} />
            <meshStandardMaterial
              color={ELECTRIC_CYAN}
              emissive={ELECTRIC_CYAN}
              emissiveIntensity={hovered ? 3 : 2}
              toneMapped={false}
            />
          </mesh>
          
          {/* Multiple glowing rings at different heights */}
          <mesh position={[0, 0.19, 0]}>
            <torusGeometry args={[0.6, 0.04, 16, 48]} />
            <meshBasicMaterial color={NEON_GREEN} toneMapped={false} />
          </mesh>
          
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[0.65, 0.03, 16, 48]} />
            <meshBasicMaterial color={ELECTRIC_CYAN} toneMapped={false} />
          </mesh>
          
          <mesh position={[0, -0.19, 0]}>
            <torusGeometry args={[0.6, 0.04, 16, 48]} />
            <meshBasicMaterial color={LASER_BLUE} toneMapped={false} />
          </mesh>
          
          {/* Data indicator lights - AROUND THE CYLINDER */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((light) => {
            const angle = (light / 12) * Math.PI * 2;
            const x = Math.cos(angle) * 0.75;
            const z = Math.sin(angle) * 0.75;
            return (
              <mesh key={light} position={[x, 0, z]}>
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshBasicMaterial 
                  color={light % 3 === 0 ? NEON_GREEN : light % 3 === 1 ? ELECTRIC_CYAN : HOT_PINK} 
                  toneMapped={false} 
                />
                <pointLight 
                  position={[0, 0, 0]} 
                  intensity={1.5} 
                  color={light % 3 === 0 ? NEON_GREEN : light % 3 === 1 ? ELECTRIC_CYAN : HOT_PINK} 
                  distance={0.8} 
                />
              </mesh>
            );
          })}
        </group>
      ))}
      
      {/* Multiple point lights for 360-degree illumination */}
      <pointLight position={[0, 0.5, 0]} intensity={hovered ? 5 : 3} color={NEON_GREEN} distance={5} />
      <pointLight position={[0, -0.5, 0]} intensity={hovered ? 5 : 3} color={ELECTRIC_CYAN} distance={5} />
      <pointLight position={[1, 0, 0]} intensity={hovered ? 3 : 2} color={color} distance={3} />
      <pointLight position={[-1, 0, 0]} intensity={hovered ? 3 : 2} color={color} distance={3} />
      <pointLight position={[0, 0, 1]} intensity={hovered ? 3 : 2} color={color} distance={3} />
      <pointLight position={[0, 0, -1]} intensity={hovered ? 3 : 2} color={color} distance={3} />
      
      {/* Label - always facing camera */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.35}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="#000000"
        fontWeight="bold"
      >
        {label}
      </Text>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CENTRAL NEURAL SPHERE - BRIGHT VERSION
// ═══════════════════════════════════════════════════════════════════════════

const BrightNeuralSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.15;
    }
  });

  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 3;
    const count = 24;
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      positions.push([x, y, z]);
    }
    
    return positions;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Bright wireframe */}
      <lineSegments>
        <edgesGeometry args={[new THREE.SphereGeometry(3, 32, 32)]} />
        <lineBasicMaterial color={NEON_GREEN} linewidth={3} />
      </lineSegments>
      
      {/* Glowing inner spheres */}
      <Sphere args={[2.9, 32, 32]}>
        <meshBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>
      
      <Sphere args={[2.7, 32, 32]}>
        <meshBasicMaterial
          color={ELECTRIC_CYAN}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* BRIGHT nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : HOT_PINK}
            emissive={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : HOT_PINK}
            emissiveIntensity={3}
            toneMapped={false}
          />
          <pointLight 
            position={[0, 0, 0]} 
            intensity={1} 
            color={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : HOT_PINK} 
            distance={1} 
          />
        </mesh>
      ))}
      
      {/* Central glow */}
      <pointLight position={[0, 0, 0]} intensity={3} color={NEON_GREEN} distance={10} />
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CINEMATIC CAMERA TOUR
// ═══════════════════════════════════════════════════════════════════════════

interface TourStop {
  position: [number, number, number];
  lookAt: [number, number, number];
  duration: number;
  info: {
    title: string;
    description: string;
    features: string[];
    color: string;
  };
}

const TOUR_STOPS: TourStop[] = [
  {
    position: [0, 2, 15],
    lookAt: [0, 0, 0],
    duration: 3,
    info: {
      title: "Full Stack Architecture",
      description: "Enterprise-grade microservices architecture built with modern technologies.",
      features: [
        "20+ Technologies integrated",
        "Microservices architecture",
        "Cloud-native deployment",
        "Real-time data processing",
        "99.99% uptime SLA"
      ],
      color: ELECTRIC_CYAN
    }
  },
  {
    position: [-8, 3, 5],
    lookAt: [-6, 1, -2],
    duration: 3,
    info: {
      title: "Backend Technologies",
      description: "Powerful backend stack with Node.js, Python, and enterprise frameworks.",
      features: [
        "Node.js & NestJS for APIs",
        "Python for AI/ML",
        "Microservices with Docker & Kubernetes",
        "Scalable server infrastructure",
        "Load balancing & auto-scaling"
      ],
      color: NEON_GREEN
    }
  },
  {
    position: [8, 3, 5],
    lookAt: [6, 1, -2],
    duration: 3,
    info: {
      title: "Data & Databases",
      description: "Robust data layer with SQL, NoSQL, and caching solutions.",
      features: [
        "PostgreSQL for relational data",
        "MongoDB for flexible schemas",
        "Redis for high-speed caching",
        "Real-time data synchronization",
        "Automated backups & recovery"
      ],
      color: LASER_BLUE
    }
  },
  {
    position: [0, 8, 8],
    lookAt: [0, 2, 0],
    duration: 3,
    info: {
      title: "Cloud & DevOps",
      description: "Modern DevOps practices with AWS, Azure, and containerization.",
      features: [
        "Multi-cloud deployment (AWS & Azure)",
        "Docker containers for consistency",
        "Kubernetes orchestration",
        "CI/CD pipelines",
        "Infrastructure as Code"
      ],
      color: VIBRANT_ORANGE
    }
  },
  {
    position: [0, -5, 10],
    lookAt: [0, -2, 0],
    duration: 3,
    info: {
      title: "AI & Advanced Tech",
      description: "Cutting-edge AI/ML capabilities with Python and TensorFlow.",
      features: [
        "Machine Learning models",
        "Natural Language Processing",
        "Predictive analytics",
        "Computer vision",
        "Automated decision-making"
      ],
      color: HOT_PINK
    }
  }
];

const CinematicTour = ({ 
  enabled, 
  onStopChange 
}: { 
  enabled: boolean;
  onStopChange: (stop: TourStop | null) => void;
}) => {
  const { camera } = useThree();
  const [currentStop, setCurrentStop] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useFrame(({ clock }) => {
    if (!enabled) return;
    
    const totalDuration = TOUR_STOPS.reduce((sum, stop) => sum + stop.duration, 0);
    const elapsed = clock.getElapsedTime() % totalDuration;
    
    let accumulated = 0;
    let newStop = 0;
    
    for (let i = 0; i < TOUR_STOPS.length; i++) {
      if (elapsed < accumulated + TOUR_STOPS[i].duration) {
        newStop = i;
        setProgress((elapsed - accumulated) / TOUR_STOPS[i].duration);
        break;
      }
      accumulated += TOUR_STOPS[i].duration;
    }
    
    if (newStop !== currentStop) {
      setCurrentStop(newStop);
      onStopChange(TOUR_STOPS[newStop]);
    }
    
    const stop = TOUR_STOPS[newStop];
    const nextStop = TOUR_STOPS[(newStop + 1) % TOUR_STOPS.length];
    const t = progress;
    
    // Smooth interpolation
    camera.position.x = stop.position[0] + (nextStop.position[0] - stop.position[0]) * t * 0.3;
    camera.position.y = stop.position[1] + (nextStop.position[1] - stop.position[1]) * t * 0.3;
    camera.position.z = stop.position[2] + (nextStop.position[2] - stop.position[2]) * t * 0.3;
    
    camera.lookAt(stop.lookAt[0], stop.lookAt[1], stop.lookAt[2]);
  });
  
  return null;
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN SCENE
// ═══════════════════════════════════════════════════════════════════════════

const SceneContent = ({
  onTechFocus,
  tourEnabled,
  onTourStopChange
}: {
  onTechFocus: (name: string, color: string) => void;
  tourEnabled: boolean;
  onTourStopChange: (stop: TourStop | null) => void;
}) => {
  return (
    <>
      {/* Dark background with slight tint */}
      <color attach="background" args={[DARK_BG]} />
      <fog attach="fog" args={[DARK_BG, 15, 50]} />
      
      {/* STRONG lighting for visibility */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color={ELECTRIC_CYAN} />
      <pointLight position={[-10, 10, 10]} intensity={2} color={NEON_GREEN} />
      <pointLight position={[0, -10, 10]} intensity={2} color={HOT_PINK} />
      <pointLight position={[0, 10, -10]} intensity={2} color={LASER_BLUE} />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      
      {/* Central neural sphere */}
      <BrightNeuralSphere />
      
      {/* Tech logos in organized layers */}
      {/* Backend layer */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-8, 4, -3]} name="Node.js" color={TECH_COLORS["Node.js"]} onFocus={() => onTechFocus("Node.js", TECH_COLORS["Node.js"])} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-6, 4, 0]} name="NestJS" color={TECH_COLORS["NestJS"]} onFocus={() => onTechFocus("NestJS", TECH_COLORS["NestJS"])} />
      </Float>
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-8, 0, 0]} name="Python" color={TECH_COLORS["Python"]} onFocus={() => onTechFocus("Python", TECH_COLORS["Python"])} />
      </Float>
      
      {/* Frontend layer */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[8, 4, -3]} name="Next.js" color={TECH_COLORS["Next.js"]} onFocus={() => onTechFocus("Next.js", TECH_COLORS["Next.js"])} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[6, 4, 0]} name="React" color={TECH_COLORS["React"]} onFocus={() => onTechFocus("React", TECH_COLORS["React"])} />
      </Float>
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[8, 0, 0]} name="TypeScript" color={TECH_COLORS["TypeScript"]} onFocus={() => onTechFocus("TypeScript", TECH_COLORS["TypeScript"])} />
      </Float>
      
      {/* Database layer */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-6, -3, 2]} name="PostgreSQL" color={TECH_COLORS["PostgreSQL"]} onFocus={() => onTechFocus("PostgreSQL", TECH_COLORS["PostgreSQL"])} />
      </Float>
      <Float speed={1.9} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[0, -4, 2]} name="MongoDB" color={TECH_COLORS["MongoDB"]} onFocus={() => onTechFocus("MongoDB", TECH_COLORS["MongoDB"])} />
      </Float>
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[6, -3, 2]} name="Redis" color={TECH_COLORS["Redis"]} onFocus={() => onTechFocus("Redis", TECH_COLORS["Redis"])} />
      </Float>
      
      {/* DevOps layer */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-4, 6, -2]} name="Docker" color={TECH_COLORS["Docker"]} onFocus={() => onTechFocus("Docker", TECH_COLORS["Docker"])} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[0, 6, -2]} name="Kubernetes" color={TECH_COLORS["Kubernetes"]} onFocus={() => onTechFocus("Kubernetes", TECH_COLORS["Kubernetes"])} />
      </Float>
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[4, 6, -2]} name="GraphQL" color={TECH_COLORS["GraphQL"]} onFocus={() => onTechFocus("GraphQL", TECH_COLORS["GraphQL"])} />
      </Float>
      
      {/* Cloud layer */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-3, -6, 0]} name="AWS" color={TECH_COLORS["AWS"]} onFocus={() => onTechFocus("AWS", TECH_COLORS["AWS"])} />
      </Float>
      <Float speed={1.9} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[3, -6, 0]} name="Azure" color={TECH_COLORS["Azure"]} onFocus={() => onTechFocus("Azure", TECH_COLORS["Azure"])} />
      </Float>
      
      {/* Other languages */}
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-8, -2, -2]} name="Rust" color={TECH_COLORS["Rust"]} onFocus={() => onTechFocus("Rust", TECH_COLORS["Rust"])} />
      </Float>
      <Float speed={2.1} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[8, -2, -2]} name="Go" color={TECH_COLORS["Go"]} onFocus={() => onTechFocus("Go", TECH_COLORS["Go"])} />
      </Float>
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[0, 7, 2]} name="Java" color={TECH_COLORS["Java"]} onFocus={() => onTechFocus("Java", TECH_COLORS["Java"])} />
      </Float>
      
      {/* Enterprise & AI */}
      <Float speed={2.3} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[-6, -1, 4]} name="SAP" color={TECH_COLORS["SAP"]} onFocus={() => onTechFocus("SAP", TECH_COLORS["SAP"])} />
      </Float>
      <Float speed={2.4} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[6, -1, 4]} name="AI/ML" color={TECH_COLORS["AI/ML"]} onFocus={() => onTechFocus("AI/ML", TECH_COLORS["AI/ML"])} />
      </Float>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <TechLogo3D position={[0, -7, -2]} name="TensorFlow" color={TECH_COLORS["TensorFlow"]} onFocus={() => onTechFocus("TensorFlow", TECH_COLORS["TensorFlow"])} />
      </Float>
      
      {/* Infrastructure components */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <BrightServerRack 
          position={[-10, 0, -5]} 
          label="Load Balancer"
          color={ELECTRIC_CYAN}
          onFocus={() => onTechFocus("Load Balancer", ELECTRIC_CYAN)}
        />
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <BrightServerRack 
          position={[10, 0, -5]} 
          label="API Gateway"
          color={LASER_BLUE}
          onFocus={() => onTechFocus("API Gateway", LASER_BLUE)}
        />
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <BrightDatabase 
          position={[-7, 2, -8]} 
          label="PostgreSQL"
          color={TECH_COLORS["PostgreSQL"]}
          onFocus={() => onTechFocus("PostgreSQL DB", TECH_COLORS["PostgreSQL"])}
        />
      </Float>
      
      <Float speed={2.7} rotationIntensity={0.4} floatIntensity={0.6}>
        <BrightDatabase 
          position={[7, 2, -8]} 
          label="MongoDB"
          color={TECH_COLORS["MongoDB"]}
          onFocus={() => onTechFocus("MongoDB DB", TECH_COLORS["MongoDB"])}
        />
      </Float>
      
      {/* Sparkles for atmosphere */}
      <Sparkles count={100} scale={20} size={4} speed={0.4} color={ELECTRIC_CYAN} />
      <Sparkles count={80} scale={25} size={3} speed={0.3} color={HOT_PINK} />
      
      {/* Camera controls */}
      {!tourEnabled && (
        <OrbitControls
          enableZoom={true}
          minDistance={8}
          maxDistance={25}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      )}
      
      {/* Cinematic tour */}
      <CinematicTour enabled={tourEnabled} onStopChange={onTourStopChange} />
      
      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={3}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// TECH INFO DATA
// ═══════════════════════════════════════════════════════════════════════════

const TECH_INFO: Record<string, { description: string; features: string[] }> = {
  "Node.js": {
    description: "JavaScript runtime built on Chrome's V8 engine for building fast, scalable server applications.",
    features: [
      "Non-blocking I/O for high performance",
      "Event-driven architecture",
      "NPM ecosystem (2M+ packages)",
      "Perfect for microservices",
      "Cross-platform support"
    ]
  },
  "Next.js": {
    description: "React framework with server-side rendering, static generation, and API routes.",
    features: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API routes & middleware",
      "Image optimization",
      "Best-in-class SEO"
    ]
  },
  "NestJS": {
    description: "Progressive Node.js framework for building efficient, scalable enterprise applications.",
    features: [
      "TypeScript-first approach",
      "Modular architecture",
      "Dependency injection",
      "GraphQL & REST support",
      "Microservices ready"
    ]
  },
  "Python": {
    description: "Versatile programming language perfect for AI/ML, data science, and backend development.",
    features: [
      "AI/ML libraries (TensorFlow, PyTorch)",
      "Data science (Pandas, NumPy)",
      "Web frameworks (Django, Flask)",
      "Automation & scripting",
      "Huge community support"
    ]
  },
  "React": {
    description: "JavaScript library for building user interfaces with component-based architecture.",
    features: [
      "Component reusability",
      "Virtual DOM performance",
      "Massive ecosystem",
      "React Native for mobile",
      "State management (Redux, Context)"
    ]
  },
  "TypeScript": {
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
    features: [
      "Static type checking",
      "Better IDE support",
      "Enhanced code quality",
      "OOP features (classes, interfaces)",
      "Large-scale app development"
    ]
  },
  "Docker": {
    description: "Containerization platform for consistent deployment across environments.",
    features: [
      "Container isolation",
      "Consistent environments",
      "Resource efficiency",
      "Easy scaling",
      "CI/CD integration"
    ]
  },
  "Kubernetes": {
    description: "Container orchestration platform for automating deployment, scaling, and management.",
    features: [
      "Auto-scaling containers",
      "Self-healing systems",
      "Load balancing",
      "Rolling updates",
      "Service discovery"
    ]
  },
  "PostgreSQL": {
    description: "Advanced open-source relational database with ACID compliance.",
    features: [
      "ACID transactions",
      "Advanced indexing",
      "Full-text search",
      "JSON/JSONB support",
      "High reliability"
    ]
  },
  "MongoDB": {
    description: "NoSQL database for flexible, scalable document storage.",
    features: [
      "Flexible schema design",
      "Horizontal scaling (sharding)",
      "Real-time aggregation",
      "Geographic queries",
      "Change streams"
    ]
  },
  "Redis": {
    description: "In-memory data structure store used as database, cache, and message broker.",
    features: [
      "Lightning-fast (sub-millisecond)",
      "Multiple data structures",
      "Pub/Sub messaging",
      "Session storage",
      "Caching layer"
    ]
  },
  "GraphQL": {
    description: "Query language for APIs providing a complete description of your data.",
    features: [
      "Request exactly what you need",
      "Single endpoint",
      "Strongly typed",
      "Real-time subscriptions",
      "Better developer experience"
    ]
  },
  "AWS": {
    description: "Amazon Web Services - comprehensive cloud platform with 200+ services.",
    features: [
      "EC2, Lambda, S3 services",
      "Global infrastructure",
      "Auto-scaling",
      "Pay-as-you-go pricing",
      "Enterprise security"
    ]
  },
  "Azure": {
    description: "Microsoft's cloud computing platform with integrated tools and services.",
    features: [
      "Hybrid cloud capabilities",
      "AI & ML services",
      "DevOps integration",
      "Enterprise-grade security",
      "Global data centers"
    ]
  },
  "Rust": {
    description: "Systems programming language focused on safety, speed, and concurrency.",
    features: [
      "Memory safety without GC",
      "Zero-cost abstractions",
      "Concurrent programming",
      "High performance",
      "Growing ecosystem"
    ]
  },
  "Go": {
    description: "Google's programming language designed for simplicity and efficiency.",
    features: [
      "Fast compilation",
      "Built-in concurrency",
      "Simple syntax",
      "Great for microservices",
      "Strong standard library"
    ]
  },
  "Java": {
    description: "Enterprise-grade programming language with platform independence.",
    features: [
      "Write once, run anywhere",
      "Strong OOP support",
      "Mature ecosystem",
      "Enterprise frameworks (Spring)",
      "High performance JVM"
    ]
  },
  "SAP": {
    description: "Enterprise resource planning (ERP) integration for business operations.",
    features: [
      "SAP HANA integration",
      "Custom ERP modules",
      "Real-time data sync",
      "Business process automation",
      "Compliance & reporting"
    ]
  },
  "AI/ML": {
    description: "Artificial Intelligence and Machine Learning solutions for intelligent automation.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation engines",
      "Automated decision-making"
    ]
  },
  "TensorFlow": {
    description: "Open-source machine learning framework from Google.",
    features: [
      "Deep learning models",
      "Neural networks",
      "Production deployment",
      "Mobile & edge support",
      "Large community"
    ]
  },
  "Load Balancer": {
    description: "Intelligent traffic distribution across multiple servers for optimal performance.",
    features: [
      "99.99% uptime guarantee",
      "Auto-scaling",
      "Health monitoring",
      "SSL/TLS termination",
      "DDoS protection"
    ]
  },
  "API Gateway": {
    description: "Centralized entry point for all API requests with routing and security.",
    features: [
      "Request routing",
      "Authentication & authorization",
      "Rate limiting",
      "API versioning",
      "Real-time monitoring"
    ]
  },
  "PostgreSQL DB": {
    description: "Production-ready PostgreSQL database cluster with replication.",
    features: [
      "Master-slave replication",
      "Automated backups",
      "Point-in-time recovery",
      "Connection pooling",
      "Performance monitoring"
    ]
  },
  "MongoDB DB": {
    description: "Sharded MongoDB cluster for high-scale applications.",
    features: [
      "Horizontal sharding",
      "Replica sets",
      "Automated failover",
      "Geographic distribution",
      "Real-time analytics"
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function HeroAnimationWorldClass() {
  const [isClient, setIsClient] = useState(false);
  const [tourEnabled, setTourEnabled] = useState(false);
  const [currentInfo, setCurrentInfo] = useState<{
    title: string;
    description: string;
    features: string[];
    color: string;
  } | null>(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // Auto-start tour after 2 seconds
    const tourTimer = setTimeout(() => {
      setTourEnabled(true);
    }, 2000);
    
    return () => clearTimeout(tourTimer);
  }, []);
  
  const handleTechFocus = useCallback((name: string, color: string) => {
    const info = TECH_INFO[name];
    if (info) {
      setCurrentInfo({
        title: name,
        description: info.description,
        features: info.features,
        color
      });
      setTourEnabled(false);
    }
  }, []);
  
  const handleTourStopChange = useCallback((stop: TourStop | null) => {
    if (stop) {
      setCurrentInfo(stop.info);
    }
  }, []);
  
  const toggleTour = useCallback(() => {
    setTourEnabled((prev) => !prev);
    if (!tourEnabled) {
      setCurrentInfo(null);
    }
  }, [tourEnabled]);
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div className="w-full h-full absolute inset-0">
      {/* Control buttons */}
      <div className="absolute top-4 left-4 z-50 flex gap-3">
        <button
          onClick={toggleTour}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${
            tourEnabled 
              ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
              : 'bg-black/80 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20'
          }`}
        >
          {tourEnabled ? '⏸ Pause Tour' : '▶ Start Cinematic Tour'}
        </button>
        
        {currentInfo && (
          <button
            onClick={() => setCurrentInfo(null)}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-black/80 border-2 border-red-400 text-red-400 hover:bg-red-400/20 transition-all shadow-lg"
          >
            ✕ Close Info
          </button>
        )}
      </div>
      
      {/* Info card */}
      {currentInfo && <InfoCard {...currentInfo} />}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 2, 15], fov: 60 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2
          }}
          dpr={[1, 2]}
        >
          <SceneContent 
            onTechFocus={handleTechFocus}
            tourEnabled={tourEnabled}
            onTourStopChange={handleTourStopChange}
          />
        </Canvas>
      </Suspense>
      
      {/* Instructions overlay */}
      {!currentInfo && !tourEnabled && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-xl rounded-xl px-6 py-3 border-2 border-cyan-400/50">
          <p className="text-cyan-400 text-sm font-mono">
            <span className="font-bold">Click</span> any tech logo or <span className="font-bold">drag</span> to explore • <span className="font-bold">Scroll</span> to zoom
          </p>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%) translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
