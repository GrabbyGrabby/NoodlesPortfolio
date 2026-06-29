# 🧬 Shivaji Jadhav - 3D Scroll-Based Portfolio

An interactive, responsive 3D portfolio website for Shivaji Jadhav. The project features a floating, WebGPU/WebGL-powered Three.js boids-repulsion noodle backdrop that reacts dynamically to mouse movement, camera parallax, and scroll progress, accompanied by modern glassmorphism panels.

## 🚀 Features

- **Dynamic Three.js WebGPU Backdrop**: A network of animated noodles driven by GPU compute shaders that are repelled by the mouse cursor.
- **Scroll-Linked Animations**: Easing camera trajectories and noodle properties (radius, separation, speed) based on viewport scroll progress.
- **Floating Curved Navigation**: Sleek glassmorphism navigation floating bar with custom-colored logo branding ("S" and "J" in theme blue).
- **Responsive Layout**: Designed to adapt perfectly across mobile, tablet, and widescreen layouts.
- **Performance Monitor**: Press the **`P`** key to view statistics (stats-gl) and debug variables (lil-gui) interactively.

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, Vanilla CSS3 (custom layouts & animations), JavaScript (ES modules)
- **3D Engine**: Three.js (WebGPURenderer & Three Shading Language / TSL)
- **Tooling**: Vite (hot module reloading, fast builds), lil-gui, stats-gl
- **Deployment**: Configured for Vercel, Netlify, or direct static serving.

## 📦 Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build the optimized production bundle:
   ```bash
   npm run build
   ```
