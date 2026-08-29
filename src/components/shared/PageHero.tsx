"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Animated banner used at the top of interior pages (About, Services,
 * Contact) — the studio's reception photo as a full-width background
 * with a dark scrim, matching the homepage Hero's visual language so
 * the brand feels consistent across every page, not just "/".
 */
export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-[42vh] w-full items-center overflow-hidden bg-editorial-dark",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/images/hero/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-editorial-dark/60"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[900px] px-5 py-20 text-center md:px-8">
        {eyebrow && (
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[1.5px] text-accent drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl font-semibold text-text-on-dark drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-[600px] text-[17px] leading-relaxed text-text-on-dark/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
