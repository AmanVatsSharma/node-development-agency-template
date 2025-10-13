use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn init_particles(count: u32, radius_min: f32, radius_max: f32, seed: u32) -> Vec<f32> {
    // Simple deterministic RNG (LCG) for reproducibility without extra deps in wasm
    let mut state = if seed == 0 { 1 } else { seed } as u64;
    let mut randf = || {
        state = state.wrapping_mul(6364136223846793005).wrapping_add(1);
        let v = ((state >> 33) as u32) as f32 / (u32::MAX as f32);
        v
    };

    let mut out = Vec::with_capacity((count as usize) * 3);
    for _ in 0..count {
        // Random spherical coordinates
        let u = randf();
        let v = randf();
        let theta = 2.0 * std::f32::consts::PI * u;
        let phi = (2.0 * v - 1.0).acos();
        let r = radius_min + (radius_max - radius_min) * randf();

        let (st, ct) = theta.sin_cos();
        let (sp, cp) = phi.sin_cos();
        let x = r * st * sp;
        let y = r * cp;
        let z = r * ct * sp;
        out.push(x);
        out.push(y);
        out.push(z);
    }
    out
}

#[wasm_bindgen]
pub fn step_rotate_y(positions: Vec<f32>, angle: f32) -> Vec<f32> {
    // Stateless update: rotate each (x, y, z) around Y axis by angle
    let (s, c) = angle.sin_cos();
    let mut out = positions; // reuse input allocation
    let n = out.len() / 3;
    for i in 0..n {
        let idx = i * 3;
        let x = out[idx];
        let y = out[idx + 1];
        let z = out[idx + 2];
        let xr = x * c + z * s;
        let zr = -x * s + z * c;
        out[idx] = xr;
        out[idx + 1] = y;
        out[idx + 2] = zr;
    }
    out
}

#[wasm_bindgen]
pub fn fibonacci_sphere(count: u32, radius: f32) -> Vec<f32> {
    // Evenly distribute points on a sphere using Fibonacci lattice
    let mut out = Vec::with_capacity((count as usize) * 3);
    let golden_angle = std::f32::consts::PI * (3.0 - (5.0f32).sqrt());
    for i in 0..count {
        let y = 1.0 - (2.0 * (i as f32 + 0.5) / count as f32);
        let r = (1.0 - y * y).sqrt();
        let theta = golden_angle * i as f32;
        let (s, c) = theta.sin_cos();
        out.push(radius * c * r);
        out.push(radius * y);
        out.push(radius * s * r);
    }
    out
}
