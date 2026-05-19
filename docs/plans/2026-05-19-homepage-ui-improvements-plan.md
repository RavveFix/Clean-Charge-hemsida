# Homepage UI Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resolve 6 key UI layout bugs, responsive overlap issues, typewriter terminal text clipping, and Swedish grammar edits to make the Clean Charge AB homepage incredibly premium.

**Architecture:** Component-based UI refinement using Tailwind CSS utility styling, GSAP animation easing, and responsive container optimization.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v3, GSAP.

---

### Task 1: Refine Hero Section Typography & GSAP Animation

**Files:**
- Modify: `components/Hero.tsx`
- Verify: Local dev compile validation & visual inspection of descenders.

**Step 1: Inspect the current clipping behavior**
Ensure the local dev server is running, load `http://localhost:3000/` and verify the letters in the header are cut off horizontally at the bottom.

**Step 2: Apply the minimal code adjustments**
Update `components/Hero.tsx` to:
- Adjust main `h1` heading classes to: `text-[2rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] font-[800] text-text-primary tracking-tighter leading-[1.12] mb-5 sm:mb-6 md:mb-8 lg:pr-10 pb-2`.
- Change the GSAP context animation reveal from a strict `clipPath` to:
  ```typescript
  gsap.fromTo('.hero-anim', 
    { y: 30, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      stagger: 0.12, 
      ease: "power3.out", 
      delay: 0.1 
    }
  );
  ```
- Insert an ambient background glow wrapper inside the visual column containing `<SplineScene>`:
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-r from-cc-green/5 to-blue-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />
  ```

**Step 3: Run Next.js lint/build check to verify it compiles**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run lint`
Expected: PASS with no compile/lint errors in `components/Hero.tsx`.

**Step 4: Commit**
```bash
git add components/Hero.tsx
git commit -m "style(hero): fix heading descender clipping and upgrade GSAP reveal to smooth opacity"
```

---

### Task 2: Resolve Monta Section Responsive Layout & Overlaps

**Files:**
- Modify: `components/MontaSection.tsx`

**Step 1: Inspect current overlay overlap**
Resize browser viewport to 1024px and check that the Monta heading overlaps or is obscured by the admin interface mockup on the right.

**Step 2: Apply the responsive column and font changes**
Modify `components/MontaSection.tsx` as follows:
- Decrease header text size to: `text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] text-white uppercase`.
- Set grid columns and gap to: `grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10`.
- Scale and style overlapping Live Dashboard admin card to:
  - Container classes: `absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-[60%] sm:w-1/2 md:w-[60%] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl bg-slate-950 border border-white/80 backdrop-blur-md group hover:scale-105 transition-all duration-500 cursor-pointer`

**Step 3: Verify no compilation errors**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run lint`
Expected: PASS

**Step 4: Commit**
```bash
git add components/MontaSection.tsx
git commit -m "style(monta): optimize grid columns, text size, and add glassmorphic dashboard card"
```

---

### Task 3: Fix Features Bento Swedish Typo & Monospace Terminal Clipping

**Files:**
- Modify: `components/FeaturesBento.tsx`

**Step 1: Check current terminal clipping and grammar**
Locate typewriter widget text: `"SYSTEM NOMINAL. TEMP: -24°C. HEATER ACTIVE. CHARGING MAINTAINED."` and verify it clips at the boundary on small viewports.

**Step 2: Apply safe wrapping styles and edit Swedish phrasing**
Modify `components/FeaturesBento.tsx`:
- Change `"din hus"` to `"husets"`:
  ```tsx
  <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-full sm:max-w-[260px]">Skyddar husets huvudsäkring genom att automatiskt fördela strömmen optimalt.</p>
  ```
- Change typewriter status text container wrapper classes to include safe word wrapping and scaling:
  ```tsx
  <div className="text-[11px] sm:text-[12px] md:text-[13px] font-mono leading-[1.8] text-slate-300 min-h-[60px] break-words whitespace-pre-wrap">
  ```
- Replace background cursor element class `bg-cc-green` with `bg-brand-green`.

**Step 3: Verify it compiles**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run lint`
Expected: PASS

**Step 4: Commit**
```bash
git add components/FeaturesBento.tsx
git commit -m "style(features-bento): fix Swedish grammatical typo and resolve terminal typewriter clipping"
```

---

### Task 4: Fix Pre-Footer CTA Truncation & Grid Ratios

**Files:**
- Modify: `components/PreFooterCTA.tsx`

**Step 1: Inspect perk cards overflow**
Scroll down to the CTA dark banner on 1200px viewport and verify that the perks list is squished and clipped by the right border.

**Step 2: Apply spacious grid parameters and margin adjustments**
Modify `components/PreFooterCTA.tsx`:
- Change padding and margins to standard responsive values:
  ```tsx
  <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 md:py-32 lg:py-40">
  ```
- Adjust grid column widths and gap metrics:
  ```tsx
  <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
  ```
- Taper card entering slide distance from `translate-x-20` to `translate-x-8` for clean entry.

**Step 3: Verify compilation**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run lint`
Expected: PASS

**Step 4: Commit**
```bash
git add components/PreFooterCTA.tsx
git commit -m "style(pre-footer-cta): adjust padding, grid ratios, and transition offsets to prevent card truncation"
```

---

### Task 5: Upgrade Footer Theme Colors & Standardize Fallbacks

**Files:**
- Modify: `components/Footer.tsx`

**Step 1: Confirm undefined Tailwind class**
Verify that `text-charcoal` is not declared in `tailwind.config.ts`.

**Step 2: Standardize compile-safe color classes**
Modify `components/Footer.tsx`:
- Swap `text-charcoal` in the footer container tag to `text-slate-600`:
  ```tsx
  <footer className="bg-white text-slate-600 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 border-t border-slate-100 font-monta">
  ```
- Make sure logo rendering is safe:
  ```tsx
  <img
    src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg"
    alt="Clean Charge AB"
    className="h-10 w-auto object-contain"
    onError={(e) => {
      // Graceful text fallback if external asset fails to load
      e.currentTarget.style.display = 'none';
      const textFallback = document.getElementById('footer-text-logo');
      if (textFallback) textFallback.classList.remove('hidden');
    }}
  />
  <span id="footer-text-logo" className="hidden text-xl font-black text-text-primary tracking-tighter">
    Clean Charge<span className="text-brand-green">.</span>
  </span>
  ```

**Step 3: Check Next.js build compilation**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run lint`
Expected: PASS

**Step 4: Commit**
```bash
git add components/Footer.tsx
git commit -m "style(footer): substitute undefined color with text-slate-600 and add logo load failure fallback"
```

---

### Task 6: Correct Solutions Section Sweden Phrasing

**Files:**
- Modify: `components/SolutionsSection.tsx`

**Step 1: Spot awkward Swedish phrasing**
Check description in first solution card: `"installerar mot privatpersoner"`

**Step 2: Change word choice**
Modify `components/SolutionsSection.tsx`:
- Edit `desc` of the `private` solution:
  ```typescript
  desc: 'Vi erbjuder anpassade laddlösningar och support för er som installerar hos privatpersoner. Nyttja Grön Teknik-avdraget direkt och säkerställ en premiumupplevelse for kund.',
  ```

**Step 3: Final Build check**
Run: `export PATH="/opt/homebrew/bin:$PATH" && npm run build`
Expected: PASS with full static production bundle successfully generated.

**Step 4: Commit**
```bash
git add components/SolutionsSection.tsx
git commit -m "copy(solutions): refine Swedish phrasing from mot to hos privatpersoner"
```
