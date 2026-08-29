"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds, used for manual stagger between sibling sections. */
  delay?: number;
}

/**
 * Wraps section content with the standard fade-up scroll-reveal.
 * Animation plays once (viewport.once) and is skipped entirely when the
 * user's OS requests reduced motion — implemented once here so every
 * section automatically inherits correct behavior.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
