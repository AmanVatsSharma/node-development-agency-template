"use client";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HERO ANIMATION - ENTERPRISE NODE.JS NEURAL NETWORK
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DESIGN CONCEPT: "The Node Network"
 * - HIGH CONTRAST: Pure black background with bright neon elements
 * - Holographic neural network sphere with glowing nodes
 * - Animated light beam connections
 * - Floating particle system
 * - Professional bloom/glow effects
 * 
 * COLOR STRATEGY (Maximum Contrast):
 * - Background: Pure black (#000000)
 * - Primary: Bright neon green (#00ff41)
 * - Secondary: Electric cyan (#00ffff)
 * - Accents: Laser blue (#0080ff)
 * - Text: Pure white (#ffffff)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import React, { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Sphere, 
  Stars, 
  Environment, 
  Float, 
  OrbitControls,
  Line,
  MeshTransmissionMaterial,
  Sparkles,
  Html
} from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// ═══════════════════════════════════════════════════════════════════════════
// HIGH CONTRAST COLOR CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const PURE_BLACK = "#000000";
const NEON_GREEN = "#00ff41";   // Bright Node.js green
const ELECTRIC_CYAN = "#00ffff"; // Bright cyan for connections
const LASER_BLUE = "#0080ff";    // Bright blue accents
const PURE_WHITE = "#ffffff";    // Maximum contrast text

console.log("🎨 [HeroAnimation] Initializing HIGH CONTRAST Neural Network visualization...");

// ═══════════════════════════════════════════════════════════════════════════
// LOADING SPINNER
// ═══════════════════════════════════════════════════════════════════════════

const LoadingSpinner = () => {
  console.log("⏳ [LoadingSpinner] Rendering loading state...");
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-transparent border-t-[#00ff41] rounded-full animate-spin"></div>
        <div className="absolute top-3 left-3 w-14 h-14 border-4 border-transparent border-t-[#00ffff] rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
      </div>
  </div>
);
};

// ═══════════════════════════════════════════════════════════════════════════
// NEURAL NETWORK NODE
// ═══════════════════════════════════════════════════════════════════════════

/**
 * NetworkNode - Individual glowing node in the neural network
 * HIGH CONTRAST: Bright neon sphere with strong emissive glow
 */
const NetworkNode = ({ position, color = NEON_GREEN, size = 0.15 }: { position: [number, number, number]; color?: string; size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Pulsing animation for extra visibility
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2} // HIGH INTENSITY for maximum glow
        toneMapped={false}    // Prevent tone mapping from dulling colors
      />
    </mesh>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CENTRAL NEURAL SPHERE
// ═══════════════════════════════════════════════════════════════════════════

/**
 * NeuralSphere - Main centerpiece with wireframe and glowing nodes
 * HIGH CONTRAST: Bright wireframe with intense glow
 */
const NeuralSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  
  // Smooth rotation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
    
    // Animate wireframe opacity for breathing effect
    if (wireframeRef.current) {
      const material = wireframeRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.4 + Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
    }
  });

  // Generate nodes on sphere surface
  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 3.5; // BIGGER sphere
    const count = 24; // More nodes
    
    // Fibonacci sphere distribution for even spacing
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

  console.log("🌐 [NeuralSphere] Rendering central sphere with nodes...");

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere - BIGGER - HIGH CONTRAST */}
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[new THREE.SphereGeometry(3.5, 32, 32)]} />
        <lineBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.5}
          linewidth={2}
        />
      </lineSegments>
      
      {/* Inner glow sphere - BIGGER */}
      <Sphere args={[3.5, 32, 32]}>
        <meshBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          />
        </Sphere>
      
      {/* Network nodes on surface */}
      {nodes.map((pos, i) => (
        <NetworkNode
          key={i}
          position={pos}
          color={i % 3 === 0 ? NEON_GREEN : i % 3 === 1 ? ELECTRIC_CYAN : LASER_BLUE}
          size={0.12}
        />
      ))}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// SERVER RACK VISUALIZATION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * ServerRack - REALISTIC 3D server rack with detailed hardware
 * Clearly recognizable as data center infrastructure
 */
const ServerRack = ({ position, label }: { position: [number, number, number]; label?: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  console.log(`🖥️ [ServerRack] Rendering detailed server rack at position ${position}`);

  return (
    <group ref={groupRef} position={position}>
      {/* Main rack frame - BLACK METAL */}
      <mesh>
        <boxGeometry args={[0.8, 1.6, 0.5]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>
      
      {/* Server blade units (6 layers) - MORE DETAILED */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <group key={`server-${i}`}>
          {/* Server unit body */}
          <mesh position={[0, 0.6 - i * 0.22, 0.26]}>
            <boxGeometry args={[0.7, 0.18, 0.04]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#1a1a1a" : "#151515"}
              metalness={0.7}
              roughness={0.4}
            />
          </mesh>
          
          {/* Front panel with LEDs */}
          <mesh position={[0, 0.6 - i * 0.22, 0.27]}>
            <boxGeometry args={[0.68, 0.16, 0.01]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? NEON_GREEN : ELECTRIC_CYAN}
              emissive={i % 3 === 0 ? NEON_GREEN : ELECTRIC_CYAN}
              emissiveIntensity={0.8}
              toneMapped={false}
              transparent
              opacity={0.3}
            />
          </mesh>
          
          {/* Activity LEDs (3 per server) */}
          {[0, 1, 2].map((led) => (
              <mesh key={`led-${led}`} position={[-0.25 + led * 0.15, 0.6 - i * 0.22, 0.28]}>
                <sphereGeometry args={[0.015, 8, 8]} />
                <meshBasicMaterial
                  color={led === 0 ? NEON_GREEN : led === 1 ? LASER_BLUE : ELECTRIC_CYAN}
                  toneMapped={false}
                />
              </mesh>
            ))}
          
          {/* Ventilation slots */}
          {[0, 1, 2, 3].map((slot) => (
            <mesh key={`vent-${slot}`} position={[0.15 - slot * 0.1, 0.6 - i * 0.22, 0.275]}>
              <boxGeometry args={[0.02, 0.14, 0.005]} />
              <meshBasicMaterial color="#000000" />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Power indicator strip - TOP */}
      <mesh position={[0, 0.8, 0.26]}>
        <boxGeometry args={[0.6, 0.03, 0.02]} />
        <meshBasicMaterial
          color={NEON_GREEN}
          toneMapped={false}
        />
      </mesh>
      
      {/* Label text */}
      {label && (
        <Html position={[0, -0.9, 0]} center distanceFactor={10}>
          <div className="text-[#00ff41] text-xs font-mono bg-black/80 px-2 py-1 rounded border border-[#00ff41]/50 whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DATABASE CYLINDER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * DatabaseCylinder - RECOGNIZABLE database with stacked disks
 * Clear representation of data storage
 */
const DatabaseCylinder = ({ position, label }: { position: [number, number, number]; label?: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      // Gentle float animation
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  console.log(`💾 [DatabaseCylinder] Rendering detailed database at position ${position}`);

  return (
    <group ref={groupRef} position={position}>
      {/* Database stack - 3 distinct disks */}
      {[0, 1, 2].map((i) => (
        <group key={`disk-${i}`} position={[0, 0.3 - i * 0.3, 0]}>
          {/* Main cylinder body */}
          <mesh>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Top disk surface - glowing */}
          <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.5, 32]} />
            <meshStandardMaterial
              color={i === 0 ? NEON_GREEN : i === 1 ? ELECTRIC_CYAN : LASER_BLUE}
              emissive={i === 0 ? NEON_GREEN : i === 1 ? ELECTRIC_CYAN : LASER_BLUE}
              emissiveIntensity={0.5}
              toneMapped={false}
              transparent
              opacity={0.6}
            />
          </mesh>
          
          {/* Spinning data rings */}
          <mesh position={[0, 0.11, 0]}>
            <torusGeometry args={[0.35, 0.02, 16, 32]} />
            <meshBasicMaterial
              color={NEON_GREEN}
              toneMapped={false}
            />
          </mesh>
          
          {/* Data indicator lights */}
          {[0, 1, 2, 3].map((light) => {
            const angle = (light / 4) * Math.PI * 2;
            const x = Math.cos(angle) * 0.4;
            const z = Math.sin(angle) * 0.4;
            return (
              <mesh key={`light-${light}`} position={[x, 0.12, z]}>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshBasicMaterial
                  color={ELECTRIC_CYAN}
                  toneMapped={false}
                />
              </mesh>
            );
          })}
        </group>
      ))}
      
      {/* Label */}
      {label && (
        <Html position={[0, -0.7, 0]} center distanceFactor={10}>
          <div className="text-[#00ffff] text-xs font-mono bg-black/80 px-2 py-1 rounded border border-[#00ffff]/50 whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CODE BLOCK / BROWSER WINDOW
// ═══════════════════════════════════════════════════════════════════════════

/**
 * CodeWindow - VS CODE-STYLE editor window with actual code
 * Recognizable as development environment
 */
const CodeWindow = ({ position, label }: { position: [number, number, number]; label?: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  console.log(`💻 [CodeWindow] Rendering VS Code-style window at position ${position}`);

  return (
    <group ref={groupRef} position={position}>
      {/* Window frame - DARK THEME */}
      <mesh>
        <boxGeometry args={[1.2, 0.9, 0.05]} />
        <meshStandardMaterial
          color="#1e1e1e" // VS Code dark theme
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Title bar */}
      <mesh position={[0, 0.42, 0.026]}>
        <boxGeometry args={[1.18, 0.06, 0.01]} />
        <meshBasicMaterial color="#2d2d30" />
      </mesh>
      
      {/* Close/minimize/maximize buttons */}
      {[-0.52, -0.46, -0.4].map((x, i) => (
        <mesh key={`btn-${i}`} position={[x, 0.42, 0.027]}>
          <circleGeometry args={[0.015, 16]} />
          <meshBasicMaterial
            color={i === 0 ? "#ff5f56" : i === 1 ? "#ffbd2e" : "#27c93f"}
          />
        </mesh>
      ))}
      
      {/* Code editor area - DARK */}
      <mesh position={[0, -0.02, 0.026]}>
        <planeGeometry args={[1.16, 0.8]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      
      {/* Syntax-highlighted code lines */}
      {[
        { text: "const", color: LASER_BLUE, y: 0.3, width: 0.15 },
        { text: "app", color: "#9cdcfe", y: 0.3, width: 0.1, x: 0.1 },
        { text: "=", color: "#d4d4d4", y: 0.3, width: 0.05, x: 0.22 },
        { text: "express", color: NEON_GREEN, y: 0.3, width: 0.2, x: 0.35 },
        { text: "function", color: LASER_BLUE, y: 0.15, width: 0.2 },
        { text: "handleRequest", color: "#dcdcaa", y: 0.15, width: 0.35, x: 0.25 },
        { text: "app.listen", color: NEON_GREEN, y: 0, width: 0.25 },
        { text: "(3000)", color: "#ce9178", y: 0, width: 0.15, x: 0.3 },
        { text: "console.log", color: "#dcdcaa", y: -0.15, width: 0.3 },
        { text: "'Server running'", color: "#ce9178", y: -0.15, width: 0.4, x: 0.35 },
      ].map((line, i) => (
        <mesh key={i} position={[-0.45 + (line.x || 0), line.y, 0.027]}>
          <boxGeometry args={[line.width, 0.02, 0.001]} />
          <meshBasicMaterial
            color={line.color}
            toneMapped={false}
          />
        </mesh>
      ))}
      
      {/* Line numbers sidebar */}
      <mesh position={[-0.53, -0.02, 0.027]}>
        <boxGeometry args={[0.08, 0.78, 0.001]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      {[1, 2, 3, 4].map((num, i) => (
        <mesh key={`line-${i}`} position={[-0.53, 0.25 - i * 0.15, 0.028]}>
          <boxGeometry args={[0.03, 0.02, 0.001]} />
          <meshBasicMaterial color="#858585" />
        </mesh>
      ))}
      
      {/* Cursor blink */}
      <mesh position={[0.55, -0.15, 0.028]}>
        <boxGeometry args={[0.008, 0.02, 0.001]} />
        <meshBasicMaterial
          color={PURE_WHITE}
          toneMapped={false}
        />
      </mesh>
      
      {/* Label */}
      {label && (
        <Html position={[0, -0.55, 0]} center distanceFactor={10}>
          <div className="text-[#0080ff] text-xs font-mono bg-black/80 px-2 py-1 rounded border border-[#0080ff]/50 whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// NODE.JS LOGO
// ═══════════════════════════════════════════════════════════════════════════

/**
 * NodeJSLogo - Recognizable Node.js hexagon logo
 */
const NodeJSLogo = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      const float = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      groupRef.current.position.y = position[1] + float;
    }
  });

  // Create hexagon shape
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
      {/* Main hexagon body */}
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
      
      {/* Glow ring */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.7, 0.03, 16, 32]} />
        <meshBasicMaterial
          color={NEON_GREEN}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      
      {/* Label */}
      <Html position={[0, -0.9, 0]} center distanceFactor={10}>
        <div className="text-[#00ff41] text-sm font-bold bg-black/90 px-3 py-1.5 rounded border-2 border-[#00ff41] whitespace-nowrap">
          Node.js Core
        </div>
      </Html>
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA FLOW PARTICLES (showing microservices communication)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * DataFlow - Animated particles showing data transfer between services
 */
const DataFlow = ({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) => {
  const particleRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (particleRef.current) {
      // Lerp between start and end
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
// API ENDPOINT NODES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * APINode - Microservice endpoint with label
 */
const APINode = ({ position, label }: { position: [number, number, number]; label?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.7;
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.15;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial
          color={LASER_BLUE}
          emissive={LASER_BLUE}
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
          toneMapped={false}
        />
      </mesh>
      
      {label && (
        <Html position={[0, -0.3, 0]} center distanceFactor={15}>
          <div className="text-[#0080ff] text-[10px] font-mono bg-black/70 px-1.5 py-0.5 rounded border border-[#0080ff]/40 whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// CONNECTION LINES (Light Beams)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * ConnectionLines - Animated light beams between nodes
 * HIGH CONTRAST: Bright colored lines with glow
 */
const ConnectionLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  // Generate connection pairs
  const connections = useMemo(() => {
    const lines: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [];
    const radius = 3.5; // Match bigger sphere
    
    // Create radial connections from center
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      lines.push({
        start: [0, 0, 0],
        end: [x, 0, z],
        color: i % 2 === 0 ? ELECTRIC_CYAN : NEON_GREEN
      });
    }
    
    return lines;
  }, []);

  // Animate line opacity
  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.4;
      });
    }
  });

  console.log("⚡ [ConnectionLines] Rendering connection beams...");

  return (
    <group ref={linesRef}>
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start, conn.end]}
          color={conn.color}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ORBITING PARTICLES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * OrbitingParticles - Data particles flowing around the sphere
 * HIGH CONTRAST: Bright particles with trails
 */
const OrbitingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleData = useMemo(() => {
    const count = 300; // REDUCED for performance on low-end devices
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // HIGH CONTRAST colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Neon green
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.25;
      } else if (colorChoice < 0.66) {
        // Electric cyan
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1;
      } else {
        // Laser blue
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 1;
      }
    }
    
    return { positions, colors, count };
  }, []);

  // Orbital animation
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.2;
    }
  });

  console.log("✨ [OrbitingParticles] Rendering particle system...");

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
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending} // Makes particles glow
        toneMapped={false} // Prevents dulling
      />
    </points>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// HOLOGRAPHIC GRID FLOOR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * HolographicGrid - Cyber-aesthetic grid floor
 * HIGH CONTRAST: Bright grid lines on black
 */
const HolographicGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      // Fade animation
      const material = gridRef.current.material as THREE.Material;
      if (Array.isArray(material)) {
        material.forEach(mat => {
          (mat as THREE.LineBasicMaterial).opacity = 0.3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
        });
      }
    }
  });

  console.log("📐 [HolographicGrid] Rendering grid floor...");

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, ELECTRIC_CYAN, ELECTRIC_CYAN]}
      position={[0, -4, 0]}
      material-transparent
      material-opacity={0.3}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// FLOATING RINGS (Depth)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * FloatingRings - Multiple rings for depth and scale
 * HIGH CONTRAST: Bright rings with different colors
 */
const FloatingRings = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.03;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const rings = [
    { radius: 4, color: NEON_GREEN, opacity: 0.3 },
    { radius: 5, color: ELECTRIC_CYAN, opacity: 0.25 },
    { radius: 6, color: LASER_BLUE, opacity: 0.2 }
  ];

  console.log("⭕ [FloatingRings] Rendering depth rings...");
  
  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * Math.PI / 3]}>
          <torusGeometry args={[ring.radius, 0.02, 16, 64]} />
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={ring.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// BACKGROUND STARS (Depth)
// ═══════════════════════════════════════════════════════════════════════════

const BackgroundStars = () => {
  console.log("⭐ [BackgroundStars] Rendering starfield...");
  
  return (
    <Stars
      radius={100}
      depth={50}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// SCENE CONTENT
// ═══════════════════════════════════════════════════════════════════════════

const SceneContent = () => {
  console.log("🎬 [SceneContent] Composing HIGH CONTRAST scene...");

  return (
    <>
      {/* PURE BLACK BACKGROUND */}
      <color attach="background" args={[PURE_BLACK]} />
      
      {/* FOG for depth (very subtle) */}
      <fog attach="fog" args={[PURE_BLACK, 10, 50]} />
      
      {/* LIGHTING - Minimal to preserve contrast */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={1} color={NEON_GREEN} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color={ELECTRIC_CYAN} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color={LASER_BLUE} />
      
      {/* BACKGROUND ELEMENTS */}
      <BackgroundStars />
      <HolographicGrid />
      <FloatingRings />
      
      {/* MAIN ELEMENTS */}
      <NeuralSphere />
      <ConnectionLines />
      <OrbitingParticles />
      
      {/* ====== WEB DEVELOPMENT ECOSYSTEM WITH LABELS ====== */}
      
      {/* NODE.JS CORE - CENTER TOP */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
        <NodeJSLogo position={[0, 4, -2]} />
      </Float>
      
      {/* Server Racks - INFRASTRUCTURE LAYER */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <ServerRack position={[-5, -1, -3]} label="Load Balancer" />
      </Float>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <ServerRack position={[5, -1, -3]} label="API Gateway" />
      </Float>
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.35}>
        <ServerRack position={[0, -2, -5]} label="App Servers" />
      </Float>
      
      {/* Database Layer - DATA STORAGE */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <DatabaseCylinder position={[-4.5, 2, -2.5]} label="PostgreSQL" />
      </Float>
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <DatabaseCylinder position={[4.5, 2, -2.5]} label="MongoDB" />
      </Float>
      
      {/* Development Environment - CODE EDITORS */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <CodeWindow position={[-6.5, 0.5, 0]} label="API Service" />
      </Float>
      <Float speed={1.7} rotationIntensity={0.3} floatIntensity={0.5}>
        <CodeWindow position={[6.5, 0.5, 0]} label="Auth Service" />
      </Float>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5}>
        <CodeWindow position={[0, 3, -4.5]} label="Main App" />
      </Float>
      
      {/* Microservices Layer - API ENDPOINTS */}
      {[
        { angle: 0, label: "User API" },
        { angle: 1, label: "Payment" },
        { angle: 2, label: "Orders" },
        { angle: 3, label: "Analytics" },
        { angle: 4, label: "Email" },
        { angle: 5, label: "Notif" }
      ].map((service, i) => {
        const angle = (service.angle / 6) * Math.PI * 2;
        const radius = 5.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 1.5;
        
        return (
          <APINode
            key={`api-${i}`}
            position={[x, y, z]}
            label={service.label}
          />
        );
      })}
      
      {/* DATA FLOWS - Show microservices communication */}
      {/* Flow from Node.js Core to services */}
      <DataFlow start={[0, 4, -2]} end={[-5, -1, -3]} color={NEON_GREEN} />
      <DataFlow start={[0, 4, -2]} end={[5, -1, -3]} color={ELECTRIC_CYAN} />
      <DataFlow start={[-6.5, 0.5, 0]} end={[-4.5, 2, -2.5]} color={LASER_BLUE} />
      <DataFlow start={[6.5, 0.5, 0]} end={[4.5, 2, -2.5]} color={NEON_GREEN} />
      <DataFlow start={[0, 0, 0]} end={[0, 4, -2]} color={ELECTRIC_CYAN} />
      
      {/* Extra sparkles for magic - REDUCED for performance */}
      <Sparkles
        count={50}
        scale={10}
        size={2}
        speed={0.3}
        color={ELECTRIC_CYAN}
      />
      
      {/* CAMERA CONTROLS */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        enableDamping
        dampingFactor={0.05}
      />
      
      {/* POST-PROCESSING EFFECTS - MAXIMUM BLOOM for HIGH CONTRAST */}
      <EffectComposer>
        <Bloom
          intensity={2}           // High intensity
          luminanceThreshold={0.2} // Low threshold to catch more lights
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.001, 0.001]}
        />
      </EffectComposer>
  </>
);
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export default function HeroAnimation() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    console.log("🚀 [HeroAnimation] Component mounted, enabling HIGH CONTRAST rendering...");
    setIsClient(true);
    
    return () => {
      console.log("🔚 [HeroAnimation] Component unmounting...");
    };
  }, []);
  
  if (!isClient) {
    console.log("⏸️ [HeroAnimation] SSR detected, skipping render...");
    return null;
  }
  
  console.log("✅ [HeroAnimation] Rendering HIGH CONTRAST scene...");
  
  return (
    <div className="w-full h-full absolute inset-0 bg-black">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            toneMapping: THREE.NoToneMapping // Preserve bright colors
          }}
          dpr={[1, 2]}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
} 

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HIGH CONTRAST NOTES:
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * - Pure black background (#000000) for maximum contrast
 * - Bright neon colors (green, cyan, blue) at full intensity
 * - emissiveIntensity set to 2+ for strong glow
 * - toneMapped: false to prevent color dulling
 * - Additive blending on particles for extra brightness
 * - Strong bloom effect to make lights POP
 * - Minimal ambient lighting to preserve darkness
 * 
 * RESULT: Maximum visual impact with clear, bright elements
 * 
 * ═══════════════════════════════════════════════════════════════════════════

*/
