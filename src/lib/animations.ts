import type { Variants } from "framer-motion";
import { ANIMATION_DURATION, STAGGER } from "@/lib/constants";

/**
 * Centralized Framer Motion variants. Sections import these rather than
 * redefining slightly-different timing/easing per component.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.medium, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.medium, ease: "easeOut" },
  },
};

export const staggerContainer = (stagger: number = STAGGER.base): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_DURATION.medium, ease: "easeOut" },
  },
};
