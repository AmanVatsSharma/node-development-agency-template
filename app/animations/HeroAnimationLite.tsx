"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

const LITE_BG = "#070b16";
const LITE_PRIMARY = "#00ffff";
const LITE_SECONDARY = "#00ff88";

interface LiteSceneProps {
  particleCount: number;
  sparkleCount: number;
}

const LiteLoadingFallback = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#070b16]">
      <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

const ParticleField = ({ count }: { count: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const out = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.2 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const idx = i * 3;

      out[idx] = radius * Math.sin(phi) * Math.cos(theta);
      out[idx + 1] = radius * Math.cos(phi);
      out[idx + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return out;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.04) * 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={LITE_PRIMARY}
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
};

const LiteScene = ({ particleCount, sparkleCount }: LiteSceneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.08;
  });

  return (
    <>
      <color attach="background" args={[LITE_BG]} />
      <fog attach="fog" args={[LITE_BG, 7, 24]} />

      <ambientLight intensity={0.28} />
      <pointLight position={[6, 5, 6]} intensity={1.1} color={LITE_PRIMARY} />
      <pointLight position={[-5, -4, 5]} intensity={0.9} color={LITE_SECONDARY} />

      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive={LITE_SECONDARY}
            emissiveIntensity={0.45}
            wireframe
            toneMapped={false}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.45, 32, 32]} />
          <meshBasicMaterial
            color={LITE_PRIMARY}
            transparent
            opacity={0.08}
            toneMapped={false}
          />
        </mesh>
      </group>

      <ParticleField count={particleCount} />

      <Sparkles
        count={sparkleCount}
        scale={10}
        size={1.8}
        speed={0.25}
        color={LITE_SECONDARY}
      />
    </>
  );
};

export default function HeroAnimationLite() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    try {
      const mobileMatch =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      setIsMobile(mobileMatch);
      console.log("[HeroAnimationLite] Mounted with mobile detection", { mobileMatch });
    } catch (error) {
      console.error("[HeroAnimationLite] Failed to detect mobile profile", error);
      setIsMobile(false);
    }
  }, []);

  if (!isClient) {
    return <LiteLoadingFallback />;
  }

  const particleCount = isMobile ? 80 : 180;
  const sparkleCount = isMobile ? 24 : 44;
  const dpr: [number, number] = isMobile ? [1, 1.15] : [1, 1.35];

  return (
    <div className="absolute inset-0 w-full h-full bg-[#070b16]">
      <Suspense fallback={<LiteLoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 62 }}
          gl={{
            antialias: false,
            alpha: false,
            powerPreference: "low-power",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.9,
          }}
          dpr={dpr}
        >
          <LiteScene particleCount={particleCount} sparkleCount={sparkleCount} />
        </Canvas>
      </Suspense>
    </div>
  );
}
