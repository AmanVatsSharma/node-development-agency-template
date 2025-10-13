"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface WasmParticlesProps {
  count?: number;
  radiusMin?: number;
  radiusMax?: number;
  speed?: number; // radians per second
  color?: string;
  size?: number;
  opacity?: number;
}

function generateFallbackPositions(count: number, radiusMin: number, radiusMax: number, seed = 1): Float32Array {
  console.warn("⚠️ [WasmParticles] Using JS fallback positions (Worker unavailable)");
  let v = seed >>> 0;
  const rand = () => ((v = (v * 1664525 + 1013904223) >>> 0) / 0xffffffff);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = rand();
    const w = rand();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * w - 1);
    const r = radiusMin + (radiusMax - radiusMin) * rand();
    const st = Math.sin(theta), ct = Math.cos(theta);
    const sp = Math.sin(phi), cp = Math.cos(phi);
    const x = r * st * sp;
    const y = r * cp;
    const z = r * ct * sp;
    const idx = i * 3;
    out[idx] = x; out[idx + 1] = y; out[idx + 2] = z;
  }
  return out;
}

function rotateYInPlace(arr: Float32Array, angle: number) {
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  for (let i = 0; i < arr.length; i += 3) {
    const x = arr[i];
    const y = arr[i + 1];
    const z = arr[i + 2];
    arr[i] = x * c + z * s;
    arr[i + 1] = y;
    arr[i + 2] = -x * s + z * c;
  }
}

const WasmParticles: React.FC<WasmParticlesProps> = ({
  count = 500,
  radiusMin = 3,
  radiusMax = 5,
  speed = 0.5,
  color = "#00ffff",
  size = 0.12,
  opacity = 0.9,
}) => {
  const pointsRef = useRef<THREE.Points | null>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const useJsFallbackRef = useRef<boolean>(false);

  // Geometry setup
  const geometry = useMemo(() => new THREE.BufferGeometry(), []);
  const material = useMemo(() => new THREE.PointsMaterial({
    size,
    vertexColors: false,
    transparent: true,
    opacity,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    color: new THREE.Color(color),
  }), [color, opacity, size]);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      try {
        const worker = new Worker('/workers/heroSim.js', { type: 'module' });
        workerRef.current = worker;
        console.log("🧵 [WasmParticles] Worker created");

        worker.onmessage = (e: MessageEvent) => {
          const { type, positions: pos } = e.data || {};
          if (type === 'init_done' && pos && !cancelled) {
            const arr = new Float32Array(pos);
            setPositions(arr);
            console.log("✅ [WasmParticles] Init positions received", { count: arr.length / 3 });
          } else if (type === 'step_done' && pos && !cancelled) {
            const arr = new Float32Array(pos);
            setPositions(arr);
          } else if (type === 'error') {
            console.error("❌ [WasmParticles] Worker error:", e.data?.message);
          }
        };

        worker.onerror = (err) => {
          console.error("❌ [WasmParticles] Worker error", err);
          if (!useJsFallbackRef.current) {
            useJsFallbackRef.current = true;
            setPositions(generateFallbackPositions(count, radiusMin, radiusMax));
          }
        };

        worker.postMessage({ type: 'init', payload: { count, radiusMin, radiusMax, seed: 12345 } });
      } catch (err) {
        console.warn("⚠️ [WasmParticles] Worker unavailable, using JS fallback", err);
        useJsFallbackRef.current = true;
        setPositions(generateFallbackPositions(count, radiusMin, radiusMax));
      }
    };

    init();
    return () => {
      cancelled = true;
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
        console.log("🧵 [WasmParticles] Worker terminated");
      }
    };
  }, [count, radiusMin, radiusMax]);

  // Hook into R3F render loop
  const angleRef = useRef(0);
  useFrame((_, delta) => {
    if (!positions) return;

    // Update positions via worker or JS fallback
    if (workerRef.current && !useJsFallbackRef.current) {
      angleRef.current += speed * delta;
      // Keep angle small to reduce numeric drift on WASM side
      const stepAngle = speed * delta;
      try {
        workerRef.current.postMessage({ type: 'step', payload: { angle: stepAngle } });
      } catch (err) {
        console.warn("⚠️ [WasmParticles] Worker postMessage failed, switching to JS fallback", err);
        useJsFallbackRef.current = true;
      }
    } else {
      angleRef.current += speed * delta;
      const newArr = new Float32Array(positions);
      rotateYInPlace(newArr, speed * delta);
      setPositions(newArr);
    }

    // Push latest positions into geometry
    if (positions && pointsRef.current) {
      const attr = geometry.getAttribute('position') as THREE.BufferAttribute | null;
      if (!attr || (attr.array as any).length !== positions.length) {
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
      } else {
        (attr.array as Float32Array).set(positions);
        attr.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material}>
      {/* Geometry and material are managed imperatively */}
    </points>
  );
};

export default WasmParticles;
