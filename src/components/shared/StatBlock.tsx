"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: number;
  suffix?: string;
  label: string;
  /**
   * A pre-rendered icon element (e.g. `<Award className="size-8" />`),
   * not a component reference. StatBlock is a Client Component; a raw
   * component function passed as a prop from a Server Component parent
   * can't cross that boundary, but an already-rendered React element can.
   */
  icon: React.ReactNode;
  /** Stagger delay in ms, e.g. index * 100 for a per-column stagger. */
  delay?: number;
  className?: string;
}

/**
 * Icon + count-up number + label. Triggers its own count-up animation
 * once scrolled into view (independent of siblings, but accepts a
 * `delay` so a parent list can stagger them). Reused wherever a
 * quick-scan credibility stat is needed (Trust Bar now; About page
 * stats section later).
 */
export function StatBlock({
  value,
  suffix = "",
  label,
  icon,
  delay = 0,
  className,
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const animatedValue = useCountUp({
    target: value,
    duration: 600,
    delay,
    start: isInView,
    disabled: !!shouldReduceMotion,
  });

  // Values under 10 with a decimal (e.g. a 4.9 rating) keep one decimal
  // place; whole numbers (years, patient counts) render without one.
  const isDecimal = value % 1 !== 0;
  const displayValue = isDecimal
    ? animatedValue.toFixed(1)
    : Math.round(animatedValue).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4, delay: delay / 1000, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center gap-2 text-center md:items-center",
        className
      )}
    >
      {icon}
      <span className="text-3xl font-bold text-primary" aria-hidden="true">
        {displayValue}
        {suffix}
      </span>
      <span
        className="text-sm font-medium uppercase tracking-wide text-text-secondary"
        aria-hidden="true"
      >
        {label}
      </span>
      {/* Screen readers get one clean announcement of the final value,
          rather than the animated intermediate numbers or a duplicated
          label read twice. */}
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>
    </motion.div>
  );
}
