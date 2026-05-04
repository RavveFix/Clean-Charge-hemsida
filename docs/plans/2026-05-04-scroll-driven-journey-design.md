# Design: The Scroll-Driven Journey (Clean Charge AB)

## Overview
A cinematic, highly immersive modernization of the Clean Charge AB landing page. The design transitions the page from a standard section-based layout to a unified, scroll-driven 3D experience, drawing inspiration from high-end tech product launches (like Apple or Polestar).

## Architecture & Structure
Instead of separate sections for Hero, Products, and Monta integration, we will wrap these concepts into a single `Scroll Container` (approx. 3-4 viewport heights tall). 

- **Sticky Environment:** The Spline 3D EV charger model will be positioned with `position: sticky` or `fixed` in the center/side of the viewport, ensuring it remains in view throughout the scrolling experience.
- **Phased Content:** Content will be divided into "phases" corresponding to scroll progress. As the user scrolls down the container, different UI elements will fade in and out.

## Interactions & Data Flow (GSAP + Spline)
We will leverage `GSAP ScrollTrigger` and the `@splinetool/runtime` API to create a seamless connection between the user's scroll position and the 3D environment.

- **Phase 1 (Hero):** 
  - Charger is presented from a stylized front/side angle.
  - Brutalist, clean hero text and primary CTAs animate in using `clip-path` (existing `hero-anim`).
- **Phase 2 (Hardware/Products):**
  - Upon reaching a scroll threshold, GSAP triggers a camera rotation or animation state inside the Spline scene (e.g., rotating 180 degrees or zooming in).
  - Hero text fades out.
  - New hardware-focused typography and glassmorphic UI cards slide in.
- **Phase 3 (Software/Monta):**
  - Further scrolling triggers another camera movement.
  - Potentially, state changes in the 3D model (e.g., LED lights shifting to "Monta Blue").
  - Software benefits and integration details fade in.
- **Resolution:**
  - The sticky behavior releases, the 3D model scales down or moves out of frame, and the page returns to normal document flow for the footer and secondary sections.

## Technical Implementation
- **React/Next.js:** Building the unified component (`CinematicHero.tsx` or similar) to house the experience.
- **GSAP:** Using `ScrollTrigger` to track progress through the unified container and orchestrate the fading of text elements.
- **Spline API:** Capturing the Spline application instance via the `onLoad` prop from `@splinetool/react-spline`. We will use methods like `splineApp.setVariable()` or `splineApp.emitEvent()` triggered by GSAP's `onUpdate` or specific scroll thresholds.
- **Styling:** Tailwind CSS combined with custom utility classes from `globals.css` (e.g., `.glass-card`, `.bg-aurora`) to maintain the "Clean Nordic" aesthetic while introducing aggressive negative space and large typography.
