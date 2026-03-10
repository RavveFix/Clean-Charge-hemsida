# Spline 3D Hero Design

## Objective

Elevate the Clean Charge AB homepage hero section to a "cinematic", premium tier
by introducing an interactive 3D scene using Spline, while maintaining strict
performance budgets.

## Concept

Instead of a static background image, the Hero section will feature an
interactive, glowing 3D object (e.g., an abstract clean energy "orb" or sleek
technological shape) that responds subtly to the user's mouse movements. This
immediately communicates a modern, high-tech, and premium brand identity aligned
with leading EV market players.

## Architecture & Performance

- **Dependency:** `@splinetool/react-spline` and `@splinetool/runtime`.
- **Lazy Loading:** The Spline runtime is heavy (~500KB). We will build a
  `<SplineScene>` wrapper component using React `Suspense` and `lazy` to ensure
  the critical rendering path for the text and navigation is unaffected.
- **Responsive Degradation:** On mobile devices, the 3D scene will load but with
  optimized scaling, or we can configure it to be hidden entirely if performance
  is an issue, falling back to a clean gradient.
- **Layout:** A CSS grid/flex split layout. Left side: The bold GSAP-animated
  typography and CTAs. Right side/Background: The interactive Spline canvas.

## Success Criteria

1. The 3D scene loads successfully and reacts to mouse movement.
2. The page performance (Lighthouse/Web Vitals) remains strong due to lazy
   loading.
3. The Hero text remains perfectly legible (contrast is preserved).
