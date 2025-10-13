# Hero WASM Integration

- Where Rust/WASM was added:
  - `rust/hero-sim-wasm` (wasm-bindgen crate exporting `init_particles`, `step_rotate_y`, `fibonacci_sphere`).
  - Built via `wasm-pack` to `public/wasm/hero_sim/`.
  - Worker at `public/workers/heroSim.js` loads WASM first, falls back to JS with console warnings.
  - React component `app/animations/components/WasmParticles.tsx` uses the worker; swaps from per-frame JS math to worker/WASM updates.
  - Integrated in `app/animations/HeroAnimationWorldClass.tsx` as `WasmParticles`.

- Why it improves performance:
  - Moves heavy per-frame particle math off the main thread.
  - Rust/WASM executes numeric loops faster and avoids GC pauses.
  - Main thread only updates a single `Points` geometry buffer.

- How to rebuild the Rust part:
  - Prereqs: Rust toolchain + wasm-pack installed.
  - Build: `npm run build:wasm`.
  - Outputs: `public/wasm/hero_sim/hero_sim_wasm_bg.wasm` and loader JS.

- Fallback behavior:
  - If WASM or module workers unsupported, the worker logs a warning and uses JS math.
  - If worker creation fails, `WasmParticles` logs and generates positions on main thread as last resort.

- Notes:
  - No lazy loading requested: worker/WASM initializes immediately on component mount.
  - Adjust particle counts or speed via `WasmParticles` props.
