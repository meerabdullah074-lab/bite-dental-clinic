/**
 * Design tokens mirrored here for use in JS/TS logic (e.g. Framer Motion,
 * media query hooks) where a raw value is needed rather than a Tailwind class.
 * Source of truth for color/spacing/radius values themselves lives in
 * src/app/globals.css (@theme block). Keep these two in sync.
 */

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.15,
  base: 0.2,
  medium: 0.4,
  slow: 0.6,
} as const;

export const ANIMATION_EASE = {
  standard: [0.4, 0, 0.2, 1],
  out: "easeOut",
  inOut: "easeInOut",
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.15,
} as const;
