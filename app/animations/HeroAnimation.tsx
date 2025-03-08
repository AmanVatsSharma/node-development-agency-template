"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Sphere, 
  MeshDistortMaterial, 
  Stars, 
  Environment, 
  Float, 
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  Torus,
  Box,
  OrbitControls
} from "@react-three/drei";
import { Suspense } from "react";

// Simple spinner for loading state
const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Animated floating elements
const FloatingElements = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Main sphere */}
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.6}
            speed={1.5}
            roughness={0}
            metalness={1}
            envMapIntensity={1}
          />
        </Sphere>
      </Float>
      
      {/* Secondary spheres */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        position={[-2.5, -0.5, -1]}
      >
        <Sphere args={[0.6, 48, 48]}>
          <MeshWobbleMaterial
            color="#8b5cf6"
            factor={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float
        speed={2.5}
        rotationIntensity={0.8}
        floatIntensity={0.5}
        position={[2.5, 1, -2]}
      >
        <Sphere args={[0.8, 48, 48]}>
          <MeshDistortMaterial
            color="#ec4899"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Additional geometric elements */}
      <Float
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.4}
        position={[-1.5, 2, -3]}
      >
        <Torus args={[0.5, 0.2, 16, 32]}>
          <MeshWobbleMaterial
            color="#10b981"
            factor={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </Float>
      
      <Float
        speed={1.8}
        rotationIntensity={0.6}
        floatIntensity={0.5}
        position={[2, -2, -1]}
      >
        <Box args={[0.8, 0.8, 0.8]}>
          <MeshDistortMaterial
            color="#f59e0b"
            distort={0.2}
            speed={1}
            roughness={0}
            metalness={0.9}
          />
        </Box>
      </Float>
    </group>
  );
};

// Dynamic animated rings
const Rings = () => {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      ringsRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });
  
  return (
    <group ref={ringsRef} position={[0, 0, -5]}>
      {[...Array(5)].map((_, i) => (
        <Torus
          key={i}
          args={[3 + i * 0.5, 0.1, 16, 32]}
          rotation={[Math.PI / 2, 0, i * Math.PI / 5]}
        >
          <meshStandardMaterial
            color={`hsl(${i * 40}, 80%, 60%)`}
            emissive={`hsl(${i * 40}, 80%, 30%)`}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7 - i * 0.1}
          />
        </Torus>
      ))}
    </group>
  );
};

// Floor reflection
const Floor = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
    <planeGeometry args={[50, 50]} />
    <MeshReflectorMaterial
      blur={[300, 30]}
      resolution={1024}
      mixBlur={1}
      mixStrength={80}
      roughness={1}
      depthScale={1.2}
      minDepthThreshold={0.4}
      maxDepthThreshold={1.4}
      color="#050505"
      metalness={0.8}
    />
  </mesh>
);

// Main scene content
const SceneContent = () => (
  <>
    {/* Environment and lighting */}
    <Environment preset="night" />
    <ambientLight intensity={0.2} />
    <spotLight 
      position={[10, 15, 10]} 
      angle={0.3} 
      penumbra={1} 
      intensity={1.5} 
      castShadow 
    />
    
    {/* Animated rings in background */}
    <Rings />
    
    {/* Animated elements */}
    <FloatingElements />
    
    {/* Floor */}
    <Floor />
    
    {/* Stars background */}
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    
    {/* Controls */}
    {React.createElement(OrbitControls as any, {
      enableZoom: false,
      enablePan: false,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      maxPolarAngle: Math.PI / 2,
      minPolarAngle: Math.PI / 3
    })}
  </>
);

export default function HeroAnimation() {
  // Client-side only rendering check
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null; // Don't render anything on the server
  }
  
  return (
    <div className="w-full h-full absolute inset-0">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
} 