/*
  Module Worker: Hero Simulation
  - Tries to load Rust WASM first
  - Falls back to JS implementation if WASM unsupported or fails
*/

// Enable module worker logs
console.log("🧩 [HeroSimWorker] Starting worker (module mode)");

let wasm = null;
let hasWasm = false;

(async () => {
  try {
    // wasm-pack output expected at this path after build
    wasm = await import('/wasm/hero_sim/hero_sim_wasm.js');
    hasWasm = !!wasm;
    console.log("⚡ [HeroSimWorker] WASM module loaded");
  } catch (err) {
    console.warn("⚠️ [HeroSimWorker] WASM load failed, using JS fallback", err);
  }
})();

// --- JS fallback implementations --- //
function initParticlesJS(count, rmin, rmax, seed) {
  const state = { v: seed || 1 >>> 0 };
  const rand = () => ((state.v = (state.v * 1664525 + 1013904223) >>> 0) / 0xffffffff);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = rand();
    const v = rand();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = rmin + (rmax - rmin) * rand();
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

function stepRotateYJS(positions, angle) {
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];
    positions[i] = x * c + z * s;
    positions[i + 1] = y;
    positions[i + 2] = -x * s + z * c;
  }
  return positions;
}

let particlePositions = null;

self.onmessage = async (e) => {
  const { type, payload } = e.data || {};
  try {
    if (type === 'init') {
      const { count, radiusMin, radiusMax, seed } = payload;
      if (hasWasm && wasm?.init_particles) {
        const vec = wasm.init_particles(count >>> 0, radiusMin, radiusMax, seed >>> 0);
        particlePositions = new Float32Array(vec);
        console.log("✅ [HeroSimWorker] init via WASM", { count });
      } else {
        particlePositions = initParticlesJS(count, radiusMin, radiusMax, seed);
        console.log("✅ [HeroSimWorker] init via JS fallback", { count });
      }
      self.postMessage({ type: 'init_done', positions: particlePositions }, [particlePositions.buffer]);
      // Note: positions ArrayBuffer is transferred; recreate view for worker
      particlePositions = new Float32Array(particlePositions);
    }
    else if (type === 'step') {
      const { angle } = payload;
      if (!particlePositions) return;
      if (hasWasm && wasm?.step_rotate_y) {
        // wasm returns a new Vec<f32>; create new buffer each step
        const vec = wasm.step_rotate_y(particlePositions, angle);
        particlePositions = new Float32Array(vec);
      } else {
        particlePositions = stepRotateYJS(particlePositions, angle);
      }
      self.postMessage({ type: 'step_done', positions: particlePositions }, [particlePositions.buffer]);
      particlePositions = new Float32Array(particlePositions);
    }
  } catch (err) {
    console.error("❌ [HeroSimWorker] Error handling message", type, err);
    self.postMessage({ type: 'error', message: String(err) });
  }
};
