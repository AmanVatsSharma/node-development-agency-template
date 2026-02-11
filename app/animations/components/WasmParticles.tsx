"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
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
  const workerRef = useRef<Worker | null>(null);
  const useJsFallbackRef = useRef<boolean>(false);
  const positionsRef = useRef<Float32Array | null>(null);
  const workerStepInFlightRef = useRef<boolean>(false);
  const stepAccumulatorRef = useRef<number>(0);
  const cancelledRef = useRef<boolean>(false);

  // Geometry setup
  const geometry = useMemo(() => new THREE.BufferGeometry(), []);
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size,
        vertexColors: false,
        transparent: true,
        opacity,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        color: new THREE.Color(color),
      }),
    [color, opacity, size],
  );

  const applyPositionsToGeometry = useCallback(
    (nextPositions: Float32Array) => {
      const attr = geometry.getAttribute("position") as THREE.BufferAttribute | null;

      if (!attr || (attr.array as Float32Array).length !== nextPositions.length) {
        // Copy into a new buffer attribute to avoid accidental shared mutation.
        geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(nextPositions), 3));
        return;
      }

      (attr.array as Float32Array).set(nextPositions);
      attr.needsUpdate = true;
    },
    [geometry],
  );

  useEffect(() => {
    cancelledRef.current = false;
    useJsFallbackRef.current = false;
    workerStepInFlightRef.current = false;
    stepAccumulatorRef.current = 0;

    const initializeFallback = (reason: string, error?: unknown) => {
      if (cancelledRef.current) {
        return;
      }

      console.warn("⚠️ [WasmParticles] Switching to JS fallback", { reason, error });
      useJsFallbackRef.current = true;

      const fallbackPositions = generateFallbackPositions(count, radiusMin, radiusMax);
      positionsRef.current = fallbackPositions;
      applyPositionsToGeometry(fallbackPositions);

      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };

    const init = async () => {
      try {
        const worker = new Worker("/workers/heroSim.js", { type: "module" });
        workerRef.current = worker;
        console.log("🧵 [WasmParticles] Worker created");

        worker.onmessage = (e: MessageEvent) => {
          const { type, positions: pos } = e.data || {};
          if (cancelledRef.current) {
            return;
          }

          if (type === "init_done" && pos) {
            const arr = new Float32Array(pos);
            positionsRef.current = arr;
            applyPositionsToGeometry(arr);
            workerStepInFlightRef.current = false;
            console.log("✅ [WasmParticles] Init positions received", { count: arr.length / 3 });
          } else if (type === "step_done" && pos) {
            const arr = new Float32Array(pos);
            positionsRef.current = arr;
            applyPositionsToGeometry(arr);
            workerStepInFlightRef.current = false;
          } else if (type === "error") {
            console.error("❌ [WasmParticles] Worker error message:", e.data?.message);
            workerStepInFlightRef.current = false;
            initializeFallback("worker-message-error", e.data?.message);
          }
        };

        worker.onerror = (err) => {
          console.error("❌ [WasmParticles] Worker error", err);
          workerStepInFlightRef.current = false;
          initializeFallback("worker-onerror", err);
        };

        worker.postMessage({
          type: "init",
          payload: { count, radiusMin, radiusMax, seed: 12345 },
        });
      } catch (err) {
        initializeFallback("worker-unavailable", err);
      }
    };

    init();

    return () => {
      cancelledRef.current = true;
      workerStepInFlightRef.current = false;

      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
        console.log("🧵 [WasmParticles] Worker terminated");
      }
    };
  }, [applyPositionsToGeometry, count, radiusMax, radiusMin]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
      console.log("🧹 [WasmParticles] Disposed geometry and material");
    };
  }, [geometry, material]);

  // Hook into R3F render loop
  useFrame((_, delta) => {
    const positions = positionsRef.current;
    if (!positions) {
      return;
    }

    // Worker mode with backpressure: max 30 simulation updates per second.
    if (workerRef.current && !useJsFallbackRef.current) {
      stepAccumulatorRef.current += delta;
      const fixedStep = 1 / 30;

      if (workerStepInFlightRef.current || stepAccumulatorRef.current < fixedStep) {
        return;
      }

      const stepDelta = stepAccumulatorRef.current;
      stepAccumulatorRef.current = 0;

      try {
        workerStepInFlightRef.current = true;
        workerRef.current.postMessage({
          type: "step",
          payload: { angle: speed * stepDelta },
        });
      } catch (err) {
        console.warn("⚠️ [WasmParticles] Worker postMessage failed, switching to JS fallback", err);
        useJsFallbackRef.current = true;
        workerStepInFlightRef.current = false;
        if (workerRef.current) {
          workerRef.current.terminate();
          workerRef.current = null;
        }
      }

      return;
    }

    // JS fallback mode: mutate in place without triggering React re-renders.
    rotateYInPlace(positions, speed * delta);
    applyPositionsToGeometry(positions);
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material}>
      {/* Geometry and material are managed imperatively */}
    </points>
  );
};

export default WasmParticles;
