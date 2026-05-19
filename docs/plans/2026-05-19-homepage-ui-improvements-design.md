# Design Document: Homepage UI & Layout Improvements

**Date:** 2026-05-19  
**Author:** AI Assistant  
**Status:** Approved  

---

## 1. Objectives
Elevate the Clean Charge AB website landing page to a premium, production-grade visual experience by resolving 6 distinct UI/UX issues identified during a browser and code audit. These fixes focus on responsive design, typographic elegance, animation precision, text wrapping, and Swedish copy refinement.

---

## 2. Components & Proposed Changes

### 2.1 Hero Refinement (`components/Hero.tsx`)
- **Issue:** Letter descenders are cut off by GSAP `clip-path` animation combined with tight `leading-[1.08]`.
- **Solution:**
  - Increase heading line-height dynamically: `leading-[1.12]`.
  - Adjust header font-sizes to breathe better: `text-[2rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]`.
  - Replace the GSAP `clipPath` reveal with a smoother, robust organic opacity + slide-up reveal (`y: 30` to `0`).
  - Introduce bottom padding on the `h1` elements (`pb-1`) to shield descenders from clipping.
  - Insert an animated ambient lighting glow (`bg-aurora`) around the right visual container containing the Spline 3D Scene.

### 2.2 Monta Section Overlap Fix (`components/MontaSection.tsx`)
- **Issue:** Overlap between `"Marknadens smartaste Betallösning"` title and the admin collage card graphics on viewports between 1024px and 1280px.
- **Solution:**
  - Scale down the main heading slightly: `text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]` with `leading-[1.05]`.
  - Adjust grid column ratios from `lg:grid-cols-2` to `lg:grid-cols-[1.1fr_0.9fr]` and increase gap to `gap-12 lg:gap-20` to guarantee adequate spacing.
  - Scale overlapping live dashboard admin card to `w-3/5 md:w-[55%] lg:w-[60%]`.
  - Standardize glassmorphic overlay using `border-2 border-white/80 shadow-[0_20px_50px_rgba(0,61,255,0.15)] bg-slate-950/90 backdrop-blur-md`.

### 2.3 Features Bento Copy & Terminal Fix (`components/FeaturesBento.tsx`)
- **Issue:** Typewriter widget terminal text clips at the right boundary. Grammatical error in Swedish copy ("din hus").
- **Solution:**
  - Make terminal widget text container wrap safely and adjust font size: `break-words whitespace-pre-wrap text-[11px] sm:text-[12px] md:text-[13px]`.
  - Replace undefined Tailwind background class `bg-cc-green` with standard compile-safe `bg-brand-green`.
  - Edit copy from `"Skyddar din hus huvudsäkring"` to `"Skyddar husets huvudsäkring"`.

### 2.4 Pre-Footer CTA Truncation Fix (`components/PreFooterCTA.tsx`)
- **Issue:** Perks list cards are truncated horizontally on 1200px screens due to overly tight grid gaps and grid structure.
- **Solution:**
  - Adjust grid to `lg:grid-cols-[1.15fr_0.85fr]` and change grid gaps: `gap-8 md:gap-12 lg:gap-16 xl:gap-24`.
  - Reduce container padding to standard `px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 md:py-32 lg:py-40`.
  - Taper card translation in GSAP/reveal states from `translate-x-20` to `translate-x-8` to maintain strict boundary alignment.

### 2.5 Footer Theme Colors (`components/Footer.tsx`)
- **Issue:** Uses undefined `text-charcoal` tailwind color utility, causing text color fallback issues.
- **Solution:**
  - Swap `text-charcoal` with compile-safe, high-contrast `text-slate-600`.
  - Ensure SVG logo has elegant text fallback options.

### 2.6 Solutions Section Grammar Refinement (`components/SolutionsSection.tsx`)
- **Issue:** Swedish phrasing `"installerar mot privatpersoner"` is awkward.
- **Solution:**
  - Modify copy to `"installerar hos privatpersoner"`.

---

## 3. Verification Plan
- **Local Dev Server:** Validate Next.js compile builds without errors.
- **Responsive Layout Audits:** Inspect views at mobile, tablet, 1024px, 1200px, and 1440px+ screens using browser automation.
- **Performance:** Check smooth rendering transitions of all GSAP elements.
