"use client";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMPLETE WORLD-CLASS HERO ANIMATION - ALL FEATURES
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * INCLUDES EVERYTHING:
 * - ✨ All 20+ technology stack logos (Node, Python, AI/ML, SAP, ERP, etc.)
 * - 🎯 Interactive hover effects and click modals
 * - 📸 Automated camera tour
 * - ⌨️ Code typing animation
 * - 📊 Live performance metrics
 * - 🔄 Data flow particles
 * - 🌐 Microservices architecture
 * - 📱 Mobile optimized
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
  Text
} from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// ═══════════════════════════════════════════════════════════════════════════
// COLORS
// ═══════════════════════════════════════════════════════════════════════════

const PURE_BLACK = "#000000";
const NEON_GREEN = "#00ff41";
const ELECTRIC_CYAN = "#00ffff";
const LASER_BLUE = "#0080ff";
const VIBRANT_PURPLE = "#9333ea";
const HOT_PINK = "#ff00ff";
const ORANGE = "#ff6b00";
const YELLOW = "#ffeb3b";
const PURE_WHITE = "#ffffff";

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// ═══════════════════════════════════════════════════════════════════════════
// INFO PANEL MODAL
// ═══════════════════════════════════════════════════════════════════════════

interface InfoPanelProps {
  title: string;
  description: string;
  features: string[];
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ title, description, features, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
    <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400 rounded-2xl p-8 max-w-md mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-cyan-400 hover:text-white text-2xl font-bold"
      >
        ×
      </button>
      <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Key Features:</h4>
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span className="text-gray-300 text-sm">{feature}</span>
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
  <div className="absolute inset-0 flex items-center justify-center bg-black">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-transparent border-t-[#00ff41] rounded-full animate-spin"></div>
      <div className="absolute top-3 left-3 w-14 h-14 border-4 border-transparent border-t-[#00ffff] rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
      <p className="text-cyan-400 text-sm mt-4 text-center">Loading Full Stack...</p>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED NEURAL SPHERE
// ═══════════════════════════════════════════════════════════════════════════

const EnhancedNeuralSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.15;
    }
    
    if (wireframeRef.current) {
      const material = wireframeRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
    }
  });

  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 4;
    const count = 32;
    
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
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[new THREE.SphereGeometry(4, 48, 48)]} />
        <lineBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.7}
          linewidth={3}
        />
      </lineSegments>
      
      <Sphere args={[4, 48, 48]}>
        <meshBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
      
      <Sphere args={[3.8, 32, 32]}>
        <meshBasicMaterial
          color={ELECTRIC_CYAN}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? NEON_GREEN : i % 4 === 1 ? ELECTRIC_CYAN : i % 4 === 2 ? LASER_BLUE : HOT_PINK}
            emissive={i % 4 === 0 ? NEON_GREEN : i % 4 === 1 ? ELECTRIC_CYAN : i % 4 === 2 ? LASER_BLUE : HOT_PINK}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// INTERACTIVE SERVER RACK
// ═══════════════════════════════════════════════════════════════════════════

interface InteractiveServerRackProps {
  position: [number, number, number];
  label: string;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

const InteractiveServerRack: React.FC<InteractiveServerRackProps> = ({ position, label, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.08;
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.05;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <mesh>
        <boxGeometry args={[1.2, 2.2, 0.7]} />
        <meshStandardMaterial
          color={hovered ? "#1a1a1a" : "#0a0a0a"}
          metalness={0.95}
          roughness={0.2}
          emissive={hovered ? ELECTRIC_CYAN : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <group key={`server-${i}`}>
          <mesh position={[0, 0.9 - i * 0.24, 0.36]}>
            <boxGeometry args={[1.0, 0.20, 0.05]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#2a2a2a" : "#252525"}
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>
          
          <mesh position={[0, 0.9 - i * 0.24, 0.38]}>
            <boxGeometry args={[0.98, 0.18, 0.01]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : LASER_BLUE}
              emissive={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : LASER_BLUE}
              emissiveIntensity={hovered ? 1.2 : 0.6}
              toneMapped={false}
              transparent
              opacity={0.4}
            />
          </mesh>
          
          {[0, 1, 2, 3, 4].map((led) => (
            <mesh key={`led-${led}`} position={[-0.35 + led * 0.15, 0.9 - i * 0.24, 0.39]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshBasicMaterial
                color={led % 2 === 0 ? NEON_GREEN : ELECTRIC_CYAN}
                toneMapped={false}
              />
            </mesh>
          ))}
        </group>
      ))}
      
      <Html position={[0, -1.3, 0]} center distanceFactor={10}>
        <div className={`text-xs font-mono px-3 py-2 rounded-lg border-2 transition-all ${
          hovered 
            ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-lg shadow-cyan-400/50' 
            : 'bg-black/80 border-cyan-600/50 text-cyan-400'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// INTERACTIVE DATABASE
// ═══════════════════════════════════════════════════════════════════════════

interface InteractiveDatabaseProps {
  position: [number, number, number];
  label: string;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

const InteractiveDatabase: React.FC<InteractiveDatabaseProps> = ({ position, label, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8) * 0.15;
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.08;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      {[0, 1, 2].map((i) => (
        <group key={`disk-${i}`} position={[0, 0.4 - i * 0.4, 0]}>
          <mesh>
            <cylinderGeometry args={[0.7, 0.7, 0.28, 48]} />
            <meshStandardMaterial
              color={hovered ? "#1a1a1a" : "#0a0a0a"}
              metalness={0.9}
              roughness={0.15}
              emissive={hovered ? NEON_GREEN : "#000000"}
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </mesh>
          
          <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.7, 48]} />
            <meshStandardMaterial
              color={i === 0 ? NEON_GREEN : i === 1 ? ELECTRIC_CYAN : HOT_PINK}
              emissive={i === 0 ? NEON_GREEN : i === 1 ? ELECTRIC_CYAN : HOT_PINK}
              emissiveIntensity={hovered ? 1.2 : 0.7}
              toneMapped={false}
              transparent
              opacity={0.7}
            />
          </mesh>
          
          <mesh position={[0, 0.15, 0]}>
            <torusGeometry args={[0.5, 0.035, 16, 48]} />
            <meshBasicMaterial
              color={NEON_GREEN}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
      
      <Html position={[0, -0.9, 0]} center distanceFactor={10}>
        <div className={`text-xs font-mono px-3 py-2 rounded-lg border-2 transition-all ${
          hovered 
            ? 'bg-green-500/30 border-green-400 text-white shadow-lg shadow-green-400/50' 
            : 'bg-black/80 border-green-600/50 text-green-400'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CODE WINDOW WITH TYPING
// ═══════════════════════════════════════════════════════════════════════════

interface CodeWindowProps {
  position: [number, number, number];
  label: string;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ position, label, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.25;
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8) * 0.12;
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.05;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedLength((prev) => (prev + 1) % 60);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <mesh>
        <boxGeometry args={[1.6, 1.2, 0.08]} />
        <meshStandardMaterial
          color="#1e1e1e"
          metalness={0.4}
          roughness={0.6}
          emissive={hovered ? LASER_BLUE : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      
      <mesh position={[0, 0.56, 0.041]}>
        <boxGeometry args={[1.58, 0.08, 0.01]} />
        <meshBasicMaterial color="#2d2d30" />
      </mesh>
      
      {[-0.7, -0.62, -0.54].map((x, i) => (
        <mesh key={`btn-${i}`} position={[x, 0.56, 0.042]}>
          <circleGeometry args={[0.02, 16]} />
          <meshBasicMaterial
            color={i === 0 ? "#ff5f56" : i === 1 ? "#ffbd2e" : "#27c93f"}
          />
        </mesh>
      ))}
      
      <mesh position={[0, -0.04, 0.041]}>
        <planeGeometry args={[1.54, 1.08]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      
      {[
        { text: "const app", y: 0.4, visible: typedLength > 0 },
        { text: "= express()", y: 0.4, x: 0.25, visible: typedLength > 10 },
        { text: "app.use(cors", y: 0.25, visible: typedLength > 20 },
        { text: "())", y: 0.25, x: 0.3, visible: typedLength > 25 },
        { text: "app.listen", y: 0.1, visible: typedLength > 30 },
        { text: "(3000)", y: 0.1, x: 0.25, visible: typedLength > 35 },
        { text: "console.log", y: -0.05, visible: typedLength > 40 },
        { text: "('Ready')", y: -0.05, x: 0.3, visible: typedLength > 45 },
      ].map((line, i) => (
        line.visible && (
          <mesh key={i} position={[-0.6 + (line.x || 0), line.y, 0.042]}>
            <boxGeometry args={[0.25, 0.025, 0.001]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? LASER_BLUE : i % 3 === 1 ? NEON_GREEN : "#dcdcaa"}
              toneMapped={false}
            />
          </mesh>
        )
      ))}
      
      <mesh position={[0.65, -0.05, 0.043]}>
        <boxGeometry args={[0.012, 0.025, 0.001]} />
        <meshBasicMaterial
          color={PURE_WHITE}
          transparent
          opacity={Math.sin(typedLength * 0.5) > 0 ? 1 : 0}
          toneMapped={false}
        />
      </mesh>
      
      <Html position={[0, -0.75, 0]} center distanceFactor={10}>
        <div className={`text-xs font-mono px-3 py-2 rounded-lg border-2 transition-all ${
          hovered 
            ? 'bg-blue-500/30 border-blue-400 text-white shadow-lg shadow-blue-400/50' 
            : 'bg-black/80 border-blue-600/50 text-blue-400'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// NODE.JS LOGO
// ═══════════════════════════════════════════════════════════════════════════

const NodeJSLogo = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      const float = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      groupRef.current.position.y = position[1] + float;
    }
  });

  const hexShape = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const radius = 0.6;
    
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }, []);

  return (
    <group ref={groupRef} position={position}>
      <mesh rotation={[0, 0, 0]}>
        <extrudeGeometry args={[hexShape, { depth: 0.15, bevelEnabled: true, bevelThickness: 0.05 }]} />
        <meshStandardMaterial
          color={NEON_GREEN}
          emissive={NEON_GREEN}
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>
      
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.7, 0.03, 16, 32]} />
        <meshBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      
      <Html position={[0, -0.9, 0]} center distanceFactor={10}>
        <div className="text-[#00ff41] text-sm font-bold bg-black/90 px-3 py-1.5 rounded border-2 border-[#00ff41] whitespace-nowrap">
          Node.js Core
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// TECH STACK LOGO
// ═══════════════════════════════════════════════════════════════════════════

interface TechStackLogoProps {
  position: [number, number, number];
  name: string;
  logoPath: string;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

const TechStackLogo: React.FC<TechStackLogoProps> = ({ position, name, logoPath, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      logoPath,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.warn(`Failed to load logo: ${name}`, error);
      }
    );
  }, [logoPath, name]);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      const float = Math.sin(clock.getElapsedTime() * 0.6 + position[0]) * 0.12;
      groupRef.current.position.y = position[1] + float;
      
      if (hovered) {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.1;
        groupRef.current.scale.setScalar(scale);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <mesh>
        <planeGeometry args={[0.8, 0.8]} />
        {texture ? (
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={hovered ? 1 : 0.9}
            toneMapped={false}
          />
        ) : (
          <meshBasicMaterial
            color={NEON_GREEN}
            transparent
            opacity={0.6}
          />
        )}
      </mesh>
      
      <mesh>
        <ringGeometry args={[0.5, 0.55, 32]} />
        <meshBasicMaterial
          color={hovered ? ELECTRIC_CYAN : ELECTRIC_CYAN}
          transparent
          opacity={hovered ? 0.6 : 0.3}
          toneMapped={false}
        />
      </mesh>
      
      <Html position={[0, -0.6, 0]} center distanceFactor={15}>
        <div className={`text-[10px] font-bold px-2 py-1 rounded border transition-all ${
          hovered
            ? 'bg-cyan-500/40 border-cyan-400 text-white shadow-lg shadow-cyan-400/50'
            : 'bg-black/90 border-cyan-600/50 text-cyan-400'
        }`}>
          {name}
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// API MICROSERVICE NODE
// ═══════════════════════════════════════════════════════════════════════════

interface APINodeProps {
  position: [number, number, number];
  label: string;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

const APINode: React.FC<APINodeProps> = ({ position, label, onHover, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.7;
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.15;
      meshRef.current.scale.setScalar(hovered ? pulse * 1.2 : pulse);
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(false);
    document.body.style.cursor = 'auto';
  };
  
  return (
    <group 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial
          color={LASER_BLUE}
          emissive={LASER_BLUE}
          emissiveIntensity={hovered ? 2 : 1.5}
          metalness={0.9}
          roughness={0.1}
          toneMapped={false}
        />
      </mesh>
      
      <Html position={[0, -0.3, 0]} center distanceFactor={15}>
        <div className={`text-[10px] font-mono px-1.5 py-0.5 rounded border transition-all ${
          hovered
            ? 'bg-blue-500/40 border-blue-400 text-white'
            : 'bg-black/70 border-blue-600/40 text-blue-400'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA FLOW PARTICLES
// ═══════════════════════════════════════════════════════════════════════════

const DataFlow = ({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) => {
  const particleRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (particleRef.current) {
      const t = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2;
      particleRef.current.position.x = start[0] + (end[0] - start[0]) * t;
      particleRef.current.position.y = start[1] + (end[1] - start[1]) * t;
      particleRef.current.position.z = start[2] + (end[2] - start[2]) * t;
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial
        color={color}
        toneMapped={false}
      />
    </mesh>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PERFORMANCE STATS
// ═══════════════════════════════════════════════════════════════════════════

const PerformanceStats = () => {
  const [fps, setFps] = useState(60);
  const [requests, setRequests] = useState(0);
  
  useFrame(({ clock }) => {
    setFps(Math.floor(55 + Math.random() * 10));
    
    if (Math.floor(clock.getElapsedTime() * 10) % 3 === 0) {
      setRequests((prev) => prev + Math.floor(Math.random() * 50));
    }
  });

  return (
    <Html position={[8, 4, 0]} distanceFactor={10}>
      <div className="bg-black/80 border-2 border-cyan-400/50 rounded-lg p-3 backdrop-blur-sm">
        <div className="text-xs font-mono space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">FPS:</span>
            <span className="text-green-400 font-bold">{fps}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">Requests:</span>
            <span className="text-green-400 font-bold">{requests.toLocaleString()}/s</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">Uptime:</span>
            <span className="text-green-400 font-bold">99.9%</span>
          </div>
        </div>
      </div>
    </Html>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED PARTICLES
// ═══════════════════════════════════════════════════════════════════════════

const EnhancedParticles = ({ isMobile }: { isMobile: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleData = useMemo(() => {
    const count = isMobile ? 200 : 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.25;
      } else if (colorChoice < 0.5) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.75) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 1;
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0; colors[i * 3 + 2] = 1;
      }
      
      sizes[i] = Math.random() * 0.15 + 0.05;
    }
    
    return { positions, colors, sizes, count };
  }, [isMobile]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.04) * 0.25;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleData.count}
          array={particleData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleData.count}
          array={particleData.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleData.count}
          array={particleData.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CAMERA TOUR
// ═══════════════════════════════════════════════════════════════════════════

const CameraTour = ({ enabled }: { enabled: boolean }) => {
  const { camera } = useThree();
  
  useFrame(({ clock }) => {
    if (!enabled) return;
    
    const t = clock.getElapsedTime() * 0.1;
    const radius = 12;
    
    camera.position.x = Math.cos(t) * radius;
    camera.position.z = Math.sin(t) * radius;
    camera.position.y = 2 + Math.sin(t * 0.5) * 2;
    
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN SCENE
// ═══════════════════════════════════════════════════════════════════════════

const SceneContent = ({ 
  isMobile, 
  onServiceHover, 
  onServiceClick,
  onTechClick,
  tourEnabled 
}: { 
  isMobile: boolean;
  onServiceHover: (name: string, hovered: boolean) => void;
  onServiceClick: (type: string, name: string) => void;
  onTechClick: (name: string) => void;
  tourEnabled: boolean;
}) => {
  return (
    <>
      <color attach="background" args={[PURE_BLACK]} />
      <fog attach="fog" args={[PURE_BLACK, 10, 55]} />
      
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} intensity={2} color={NEON_GREEN} />
      <pointLight position={[8, 8, 8]} intensity={1} color={ELECTRIC_CYAN} />
      <pointLight position={[-8, -8, -8]} intensity={1} color={LASER_BLUE} />
      <pointLight position={[0, 10, 0]} intensity={0.8} color={HOT_PINK} />
      
      <Stars radius={100} depth={50} count={isMobile ? 2000 : 5000} factor={5} saturation={0} fade speed={0.6} />
      
      {/* Main sphere */}
      <EnhancedNeuralSphere />
      
      {/* Particles */}
      <EnhancedParticles isMobile={isMobile} />
      
      {/* Node.js Core */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
        <NodeJSLogo position={[0, 5, -2]} />
      </Float>
      
      {/* Server racks */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <InteractiveServerRack 
          position={[-6.5, -1, -4]} 
          label="Load Balancer"
          onHover={(h) => onServiceHover("Load Balancer", h)}
          onClick={() => onServiceClick("server", "Load Balancer")}
        />
      </Float>
      
      <Float speed={2.3} rotationIntensity={0.3} floatIntensity={0.5}>
        <InteractiveServerRack 
          position={[6.5, -1, -4]} 
          label="API Gateway"
          onHover={(h) => onServiceHover("API Gateway", h)}
          onClick={() => onServiceClick("server", "API Gateway")}
        />
      </Float>
      
      <Float speed={2.1} rotationIntensity={0.3} floatIntensity={0.5}>
        <InteractiveServerRack 
          position={[0, -2.5, -6]} 
          label="App Servers"
          onHover={(h) => onServiceHover("App Servers", h)}
          onClick={() => onServiceClick("server", "App Servers")}
        />
      </Float>
      
      {/* Databases */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <InteractiveDatabase 
          position={[-5.5, 3, -3]} 
          label="PostgreSQL"
          onHover={(h) => onServiceHover("PostgreSQL", h)}
          onClick={() => onServiceClick("database", "PostgreSQL")}
        />
      </Float>
      
      <Float speed={2.7} rotationIntensity={0.4} floatIntensity={0.6}>
        <InteractiveDatabase 
          position={[5.5, 3, -3]} 
          label="MongoDB"
          onHover={(h) => onServiceHover("MongoDB", h)}
          onClick={() => onServiceClick("database", "MongoDB")}
        />
      </Float>
      
      {/* Code windows */}
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <CodeWindow 
          position={[-8, 1, 0]} 
          label="API Service"
          onHover={(h) => onServiceHover("API Service", h)}
          onClick={() => onServiceClick("code", "API Service")}
        />
      </Float>
      
      <Float speed={2.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <CodeWindow 
          position={[8, 1, 0]} 
          label="Auth Service"
          onHover={(h) => onServiceHover("Auth Service", h)}
          onClick={() => onServiceClick("code", "Auth Service")}
        />
      </Float>
      
      <Float speed={2.3} rotationIntensity={0.4} floatIntensity={0.6}>
        <CodeWindow 
          position={[0, 4, -5]} 
          label="Main App"
          onHover={(h) => onServiceHover("Main App", h)}
          onClick={() => onServiceClick("code", "Main App")}
        />
      </Float>
      
      {/* Technology Stack Logos - ALL OF THEM */}
      {[
        { name: "Node.js", logo: "/logos/nodejs.png", pos: [-7, 3.5, -1] },
        { name: "Next.js", logo: "/logos/nextjs.png", pos: [7, 3.5, -1] },
        { name: "NestJS", logo: "/logos/nestjs.png", pos: [-7, -3, -1] },
        { name: "Python", logo: "/logos/python.png", pos: [7, -3, -1] },
        { name: "TypeScript", logo: "/logos/typescript.png", pos: [-5, 5, 0] },
        { name: "React", logo: "/logos/react.png", pos: [5, 5, 0] },
        { name: "Docker", logo: "/logos/docker.png", pos: [-5, -5, 0] },
        { name: "Kubernetes", logo: "/logos/kubernetes.png", pos: [5, -5, 0] },
        { name: "PostgreSQL", logo: "/logos/postgresql.png", pos: [-9, 0, -0.5] },
        { name: "MongoDB", logo: "/logos/mongodb.png", pos: [9, 0, -0.5] },
        { name: "Redis", logo: "/logos/redis.png", pos: [-3, 6, -1] },
        { name: "GraphQL", logo: "/logos/graphql.png", pos: [3, 6, -1] },
        { name: "AWS", logo: "/logos/aws.png", pos: [-3, -6, -1] },
        { name: "Azure", logo: "/logos/azure.png", pos: [3, -6, -1] },
        { name: "Rust", logo: "/logos/rust.png", pos: [0, 6.5, -0.5] },
        { name: "Go", logo: "/logos/go.png", pos: [0, -6.5, -0.5] },
        { name: "Java", logo: "/logos/java.png", pos: [-8.5, 2, 0] },
        { name: "SAP", logo: "/logos/sap.png", pos: [8.5, 2, 0] },
        { name: "AI/ML", logo: "/logos/ai.png", pos: [-8.5, -2, 0] },
        { name: "TensorFlow", logo: "/logos/tensorflow.png", pos: [8.5, -2, 0] },
      ].map((tech, i) => (
        <Float key={`tech-${i}`} speed={1.5 + i * 0.1} rotationIntensity={0.1} floatIntensity={0.3}>
          <TechStackLogo 
            position={tech.pos as [number, number, number]} 
            name={tech.name} 
            logoPath={tech.logo}
            onHover={(h) => h && onServiceHover(tech.name, h)}
            onClick={() => onTechClick(tech.name)}
          />
        </Float>
      ))}
      
      {/* API Microservices */}
      {[
        { angle: 0, label: "User API" },
        { angle: 1, label: "Payment" },
        { angle: 2, label: "Orders" },
        { angle: 3, label: "Analytics" },
        { angle: 4, label: "Email" },
        { angle: 5, label: "Notif" },
        { angle: 6, label: "Chat" },
        { angle: 7, label: "Search" },
      ].map((service, i) => {
        const angle = (service.angle / 8) * Math.PI * 2;
        const radius = 5.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 1.5;
        
        return (
          <APINode
            key={`api-${i}`}
            position={[x, y, z]}
            label={service.label}
            onHover={(h) => onServiceHover(service.label, h)}
            onClick={() => onServiceClick("microservice", service.label)}
          />
        );
      })}
      
      {/* Data flows */}
      <DataFlow start={[0, 5, -2]} end={[-6.5, -1, -4]} color={NEON_GREEN} />
      <DataFlow start={[0, 5, -2]} end={[6.5, -1, -4]} color={ELECTRIC_CYAN} />
      <DataFlow start={[-8, 1, 0]} end={[-5.5, 3, -3]} color={LASER_BLUE} />
      <DataFlow start={[8, 1, 0]} end={[5.5, 3, -3]} color={NEON_GREEN} />
      <DataFlow start={[0, 0, 0]} end={[0, 5, -2]} color={ELECTRIC_CYAN} />
      
      {/* Performance stats */}
      <PerformanceStats />
      
      {/* Sparkles */}
      <Sparkles
        count={isMobile ? 60 : 150}
        scale={18}
        size={4}
        speed={0.5}
        color={ELECTRIC_CYAN}
      />
      
      <Sparkles
        count={isMobile ? 40 : 100}
        scale={22}
        size={3}
        speed={0.3}
        color={HOT_PINK}
      />
      
      {!tourEnabled && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3.5}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
        />
      )}
      
      <CameraTour enabled={tourEnabled} />
      
      <EffectComposer>
        <Bloom
          intensity={2.5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0015, 0.0015]}
        />
      </EffectComposer>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// SERVICE INFO DATA
// ═══════════════════════════════════════════════════════════════════════════

const SERVICE_INFO: Record<string, { title: string; description: string; features: string[] }> = {
  "server-Load Balancer": {
    title: "Load Balancer",
    description: "Intelligent traffic distribution across multiple servers ensuring optimal performance and reliability.",
    features: [
      "99.99% uptime guarantee",
      "Auto-scaling based on traffic",
      "Health monitoring and failover",
      "SSL/TLS termination",
      "DDoS protection"
    ]
  },
  "server-API Gateway": {
    title: "API Gateway",
    description: "Centralized entry point for all API requests with advanced routing, authentication, and rate limiting.",
    features: [
      "Request routing and composition",
      "Authentication & authorization",
      "Rate limiting and throttling",
      "API versioning support",
      "Real-time monitoring"
    ]
  },
  "server-App Servers": {
    title: "Application Servers",
    description: "High-performance Node.js application servers running your business logic with horizontal scaling.",
    features: [
      "Containerized deployment",
      "Auto-healing and recovery",
      "Zero-downtime updates",
      "Microservices architecture",
      "Kubernetes orchestration"
    ]
  },
  "database-PostgreSQL": {
    title: "PostgreSQL Database",
    description: "Enterprise-grade relational database with ACID compliance and powerful querying capabilities.",
    features: [
      "ACID transactions",
      "Advanced indexing",
      "Full-text search",
      "JSON/JSONB support",
      "Automated backups"
    ]
  },
  "database-MongoDB": {
    title: "MongoDB Database",
    description: "Flexible NoSQL database for handling large volumes of unstructured data with high performance.",
    features: [
      "Flexible schema design",
      "Horizontal scaling (sharding)",
      "Real-time aggregation",
      "Geographic queries",
      "Change streams"
    ]
  },
  "code-API Service": {
    title: "API Service",
    description: "RESTful and GraphQL API services built with Node.js, Express, and modern best practices.",
    features: [
      "RESTful & GraphQL support",
      "OpenAPI documentation",
      "Input validation",
      "Error handling",
      "Comprehensive testing"
    ]
  },
  "code-Auth Service": {
    title: "Authentication Service",
    description: "Secure authentication and authorization with JWT, OAuth2, and multi-factor authentication.",
    features: [
      "JWT token management",
      "OAuth2 & OIDC support",
      "Multi-factor authentication",
      "Session management",
      "Role-based access control"
    ]
  },
  "code-Main App": {
    title: "Main Application",
    description: "Core application logic orchestrating all services with event-driven architecture.",
    features: [
      "Event-driven design",
      "Message queues (RabbitMQ/Kafka)",
      "Caching layer (Redis)",
      "Real-time WebSocket support",
      "Comprehensive logging"
    ]
  },
  "microservice-User API": {
    title: "User API Microservice",
    description: "User management and profile service handling authentication and user data.",
    features: [
      "User registration & login",
      "Profile management",
      "Role-based permissions",
      "Activity tracking",
      "Data privacy compliance"
    ]
  },
  "microservice-Payment": {
    title: "Payment Microservice",
    description: "Secure payment processing with multiple gateway integrations.",
    features: [
      "Multiple payment gateways",
      "PCI-DSS compliance",
      "Subscription handling",
      "Refund management",
      "Transaction history"
    ]
  },
  "microservice-Orders": {
    title: "Orders Microservice",
    description: "Order processing and fulfillment management system.",
    features: [
      "Order creation & tracking",
      "Inventory management",
      "Shipping integration",
      "Order status updates",
      "Analytics & reporting"
    ]
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// TECH INFO DATA
// ═══════════════════════════════════════════════════════════════════════════

const TECH_INFO: Record<string, { title: string; description: string; features: string[] }> = {
  "Node.js": {
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine for building fast, scalable network applications.",
    features: [
      "Non-blocking I/O",
      "Event-driven architecture",
      "NPM ecosystem (2M+ packages)",
      "Perfect for microservices",
      "Cross-platform support"
    ]
  },
  "Next.js": {
    title: "Next.js",
    description: "React framework with server-side rendering, static generation, and API routes.",
    features: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API routes & middleware",
      "Image optimization",
      "SEO-friendly"
    ]
  },
  "NestJS": {
    title: "NestJS",
    description: "Progressive Node.js framework for building efficient, scalable server-side applications.",
    features: [
      "TypeScript-first",
      "Modular architecture",
      "Dependency injection",
      "GraphQL & REST support",
      "Microservices ready"
    ]
  },
  "Python": {
    title: "Python",
    description: "Versatile programming language perfect for AI/ML, data science, and backend development.",
    features: [
      "AI/ML libraries (TensorFlow, PyTorch)",
      "Data science (Pandas, NumPy)",
      "Web frameworks (Django, Flask)",
      "Automation & scripting",
      "Huge community"
    ]
  },
  "SAP": {
    title: "SAP Integration",
    description: "Enterprise resource planning (ERP) integration for large-scale business operations.",
    features: [
      "SAP HANA integration",
      "BharatERP custom modules",
      "Real-time data sync",
      "Business process automation",
      "Compliance & reporting"
    ]
  },
  "AI/ML": {
    title: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning solutions for intelligent automation.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation engines",
      "Automated decision-making"
    ]
  },
  "React": {
    title: "React",
    description: "JavaScript library for building user interfaces with component-based architecture.",
    features: [
      "Component reusability",
      "Virtual DOM performance",
      "Huge ecosystem",
      "React Native for mobile",
      "State management (Redux, Context)"
    ]
  },
  "TypeScript": {
    title: "TypeScript",
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
    features: [
      "Static type checking",
      "Better IDE support",
      "Enhanced code quality",
      "OOP features",
      "Large-scale app development"
    ]
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function HeroAnimationComplete() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<{ type: string; name: string } | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [tourEnabled, setTourEnabled] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setIsMobile(isMobileDevice());
    
    const tourTimer = setTimeout(() => {
      setTourEnabled(true);
    }, 3000);
    
    return () => clearTimeout(tourTimer);
  }, []);
  
  const handleServiceHover = useCallback((name: string, hovered: boolean) => {
    setHoveredService(hovered ? name : null);
  }, []);
  
  const handleServiceClick = useCallback((type: string, name: string) => {
    setSelectedService({ type, name });
    setSelectedTech(null);
    setTourEnabled(false);
  }, []);
  
  const handleTechClick = useCallback((name: string) => {
    setSelectedTech(name);
    setSelectedService(null);
    setTourEnabled(false);
  }, []);
  
  const handleClosePanel = useCallback(() => {
    setSelectedService(null);
    setSelectedTech(null);
  }, []);
  
  const toggleTour = useCallback(() => {
    setTourEnabled((prev) => !prev);
  }, []);
  
  if (!isClient) {
    return null;
  }
  
  const serviceKey = selectedService ? `${selectedService.type}-${selectedService.name}` : null;
  const serviceInfo = serviceKey ? SERVICE_INFO[serviceKey] : null;
  const techInfo = selectedTech ? TECH_INFO[selectedTech] : null;
  
  return (
    <div className="w-full h-full absolute inset-0 bg-black">
      <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
        <button
          onClick={toggleTour}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
            tourEnabled 
              ? 'bg-cyan-500 text-black' 
              : 'bg-black/80 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20'
          }`}
        >
          {tourEnabled ? '⏸ Stop Tour' : '▶ Start Tour'}
        </button>
        
        {hoveredService && (
          <div className="bg-black/90 border-2 border-cyan-400 rounded-lg px-4 py-2 backdrop-blur-sm">
            <p className="text-cyan-400 text-sm font-mono">Hover: {hoveredService}</p>
            <p className="text-gray-400 text-xs">Click to learn more</p>
          </div>
        )}
      </div>
      
      {serviceInfo && (
        <InfoPanel
          title={serviceInfo.title}
          description={serviceInfo.description}
          features={serviceInfo.features}
          onClose={handleClosePanel}
        />
      )}
      
      {techInfo && (
        <InfoPanel
          title={techInfo.title}
          description={techInfo.description}
          features={techInfo.features}
          onClose={handleClosePanel}
        />
      )}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 70 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: isMobile ? "low-power" : "high-performance",
            toneMapping: THREE.NoToneMapping
          }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <SceneContent 
            isMobile={isMobile}
            onServiceHover={handleServiceHover}
            onServiceClick={handleServiceClick}
            onTechClick={handleTechClick}
            tourEnabled={tourEnabled}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
