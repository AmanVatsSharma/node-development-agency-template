# Hero Animation Performance Strategy

## Overview

The homepage hero now uses an **adaptive quality strategy** to avoid overloading low-end devices while preserving premium visuals on high-end hardware.

## Goals

- Keep the hero responsive on mobile and average laptops.
- Avoid hard crashes when WebGL is unavailable or unstable.
- Preserve a premium scene for high-capability devices.
- Keep robust fallback behavior with clear debug logs.

## Runtime Decision Matrix

The wrapper (`app/components/HeroAnimationWrapper.tsx`) detects:

- WebGL availability
- `prefers-reduced-motion`
- `navigator.connection.saveData`
- Mobile user agent
- `navigator.hardwareConcurrency`
- `navigator.deviceMemory`

Then routes to one of these profiles:

1. **static**
   - Used for no WebGL, reduced-motion, save-data, and conservative mobile profile.
   - Renders a CSS-based animated background (no Three.js).
2. **lite**
   - Used for balanced devices.
   - Loads `HeroAnimationLite` with minimal mesh/particle counts.
3. **full**
   - Used only for high-capability devices.
   - Boots in lite first, then upgrades to world-class on browser idle.

## Flow Chart

```text
HeroAnimationWrapper mounts
        |
        v
Detect capability (WebGL + memory + cores + motion + save-data)
        |
        +--> no WebGL / reduced motion / save-data --> STATIC
        |
        +--> mobile + constrained --> STATIC
        |
        +--> high score --> LITE (boot) -> IDLE UPGRADE -> FULL
        |
        +--> otherwise --> LITE

Any runtime rendering failure
        |
        v
ErrorBoundary fallback -> STATIC
```

## Key Implementation Notes

- `HeroAnimationLite` keeps geometry and effects intentionally small.
- `WasmParticles` no longer pushes per-frame updates via React state.
  - It now updates `BufferGeometry` directly.
  - Worker stepping uses backpressure (~30Hz max) to prevent message queue overload.
  - JS fallback remains available if Worker/WASM path fails.

## Debugging

Open browser console and look for:

- `[HeroAnimationWrapper] Capability decision`
- `[HeroAnimationWrapper] Upgrading hero from lite to full`
- `[WasmParticles] Worker created`
- `[WasmParticles] Switching to JS fallback`

These logs make it easy to trace why a specific device is seeing static/lite/full mode.
