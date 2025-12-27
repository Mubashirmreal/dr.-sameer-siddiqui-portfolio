# Reduce Unused JavaScript - Analysis & Solutions

## Current Issue

Lighthouse reports **51.2 KB of unused JavaScript** in the 108 KB bundle.

**Main culprit:** Framer Motion library
- Used in all 12 components
- Full library loaded (~50KB gzipped)
- Only using basic features (motion, AnimatePresence)
- ~47% of the bundle is unused code

## Components Using Framer Motion

All 12 components import from `framer-motion`:
1. CookieConsent.tsx - `motion`, `AnimatePresence`
2. ExperienceTable.tsx - `motion`
3. FAQ.tsx - `motion`, `AnimatePresence`
4. FloatingConsultation.tsx - `motion`, `AnimatePresence`
5. Footer.tsx - `motion`, `AnimatePresence`
6. GalleryGrid.tsx - `motion`
7. Header.tsx - `motion`
8. Hero.tsx - `motion`
9. Highlights.tsx - `motion`
10. Impact.tsx - `motion`
11. Services.tsx - `motion`, `AnimatePresence`
12. WhyChoose.tsx - `motion`

## Solutions (Ranked by Impact)

### Option 1: Replace Framer Motion with CSS Animations ⭐ RECOMMENDED

**Impact:** Reduce bundle by ~50KB (47% reduction)

Replace Framer Motion with native CSS animations and Intersection Observer API.

**Pros:**
- ✅ Eliminates 50KB of JavaScript
- ✅ Better performance (CSS animations are GPU-accelerated)
- ✅ No external dependencies
- ✅ Faster page load

**Cons:**
- ⚠️ Requires rewriting animation code
- ⚠️ More verbose for complex animations
- ⚠️ Takes development time

**Effort:** Medium (2-3 hours)

### Option 2: Code Splitting / Lazy Loading

**Impact:** Reduce initial bundle by ~30-40KB

Load components below the fold lazily:
```tsx
// Only load above-the-fold components initially
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const Services = lazy(() => import('./components/Services'));
```

**Pros:**
- ✅ Faster initial load
- ✅ Framer Motion loads only when needed
- ✅ Easy to implement

**Cons:**
- ⚠️ Framer Motion still loaded eventually
- ⚠️ Slight delay when scrolling to lazy components

**Effort:** Low (30 minutes)

### Option 3: Use Lighter Animation Library

**Impact:** Reduce bundle by ~35KB

Replace Framer Motion with a lighter alternative:
- **react-spring** (~14KB gzipped)
- **react-transition-group** (~6KB gzipped)
- **motion-one** (~5KB gzipped) ⭐ Best alternative

**Pros:**
- ✅ Smaller bundle size
- ✅ Similar API to Framer Motion
- ✅ Good performance

**Cons:**
- ⚠️ Still adds dependency
- ⚠️ Need to rewrite animation code

**Effort:** Medium (2-3 hours)

### Option 4: Tree Shaking Optimization

**Impact:** Minimal (~5KB reduction)

Ensure Vite is properly tree-shaking Framer Motion.

**Current import map:**
```json
"framer-motion": "https://esm.sh/framer-motion@^12.23.26"
```

**Optimized:**
```json
"framer-motion": "https://esm.sh/framer-motion@^12.23.26?bundle"
```

**Pros:**
- ✅ Easy to implement
- ✅ No code changes

**Cons:**
- ⚠️ Minimal impact (Framer Motion doesn't tree-shake well)

**Effort:** Very Low (5 minutes)

## Recommended Approach

### Phase 1: Quick Wins (Immediate)

1. **Enable code splitting** for below-fold components
2. **Optimize import map** with `?bundle` flag
3. **Lazy load FAQ, Footer, Services**

**Expected savings:** ~15-20KB

### Phase 2: Long-term (Future)

1. **Replace Framer Motion** with CSS animations for simple cases
2. **Keep Framer Motion** only for complex animations (FAQ accordion, etc.)
3. **Use motion-one** for remaining animations

**Expected savings:** ~35-40KB

## Implementation: Quick Wins

### 1. Add React Lazy Loading

```tsx
// App.tsx
import { lazy, Suspense } from 'react';

// Above-the-fold (load immediately)
import Header from './components/Header';
import Hero from './components/Hero';
import GalleryGrid from './components/GalleryGrid';

// Below-the-fold (lazy load)
const Services = lazy(() => import('./components/Services'));
const ExperienceTable = lazy(() => import('./components/ExperienceTable'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GalleryGrid />
      
      <Suspense fallback={null}>
        <Services />
        <ExperienceTable />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}
```

### 2. Optimize Import Map

```html
<!-- index.html -->
<script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.1/",
    "react": "https://esm.sh/react@^19.2.1",
    "react-dom/": "https://esm.sh/react-dom@^19.2.1/",
    "framer-motion": "https://esm.sh/framer-motion@^12.23.26?bundle"
  }
}
</script>
```

## Alternative: CSS-Only Animations

For simple fade-in animations, replace Framer Motion:

### Before (Framer Motion):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### After (CSS + Intersection Observer):
```tsx
// Component
<div className="fade-in-up" ref={observerRef}>
  Content
</div>

// CSS
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

// JavaScript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
```

## Expected Results

### Current Bundle
- Total: 108 KB
- Unused: 51.2 KB (47%)
- Used: 56.8 KB

### After Quick Wins (Phase 1)
- Initial bundle: ~85 KB
- Lazy loaded: ~23 KB
- Savings: ~23 KB (21%)

### After Full Optimization (Phase 2)
- Total bundle: ~60 KB
- Savings: ~48 KB (44%)

## Summary

**Immediate action (5 min):**
- ✅ Add `?bundle` to Framer Motion import

**Short-term (30 min):**
- ✅ Implement lazy loading for below-fold components
- ✅ Expected savings: ~20KB

**Long-term (2-3 hours):**
- 💡 Replace Framer Motion with CSS animations
- 💡 Expected savings: ~40KB

Would you like me to implement the quick wins (lazy loading + import optimization)?
