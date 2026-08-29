"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Sparkles, Users, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/CallButton";
import { RatingStars } from "@/components/shared/RatingStars";
import { siteConfig } from "@/config/site.config";
import { ANIMATION_DURATION } from "@/lib/constants";

/**
 * Staggered entrance sequence: eyebrow (0ms) → H1 (120ms) → subheadline
 * (240ms) → CTAs (360ms) → feature row (480ms), each a fade-up. Plays on
 * mount since the Hero is already in the viewport on load.
 */
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const featureRow = [
  { icon: Sparkles, label: "Advanced Technology" },
  { icon: Users, label: "Experienced Specialists" },
  { icon: ShieldCheck, label: "Patient First Approach" },
];

/**
 * Hero — full-bleed clinic photo background with a dark scrim, matching
 * the studio's brand reference (reception/waiting-area photo, headline
 * on the left, dual CTAs, and a feature strip along the bottom). Replaces
 * the previous split text/image layout.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const transition = (delaySeconds: number) =>
    shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: ANIMATION_DURATION.medium,
          delay: delaySeconds,
          ease: "easeOut" as const,
        };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-editorial-dark"
    >
      {/* Full-bleed background photo — slow continuous Ken Burns zoom.
          Deliberately NOT using negative z-index here (relies on plain
          DOM order + z-index:0 instead) — negative z-index siblings can
          paint behind a positioned ancestor's own background color in
          some engines/setups, which is what was hiding this image. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/images/hero/hero-background.webp"
          alt="Reception and waiting area at Bite Squad Dental Studio, G-8 Markaz, Islamabad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark scrim + gradients so headline text stays readable, kept
          light enough that the photo itself is clearly visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-editorial-dark/70 via-editorial-dark/40 to-editorial-dark/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-t from-editorial-dark/45 via-transparent to-transparent"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 py-24 md:px-8 lg:px-20">
        <div className="max-w-[620px]">
          <motion.span
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={item}
            transition={transition(0)}
            className="mb-4 block text-[13px] font-semibold uppercase tracking-[1.5px] text-accent drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
          >
            Caring for Smiles, Changing Lives
          </motion.span>

          <motion.h1
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={item}
            transition={transition(0.12)}
            className="font-display text-4xl font-semibold leading-[1.08] text-text-on-dark drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[60px]"
          >
            Advanced Care.
            <br />
            Beautiful Smiles.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={item}
            transition={transition(0.24)}
            className="mt-6 max-w-[480px] text-lg leading-relaxed text-text-on-dark/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            At {siteConfig.name}, we combine expertise, technology, and
            compassion to give you the healthy, confident smile you
            deserve.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={item}
            transition={transition(0.36)}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <WhatsAppButton
              label="Book Appointment"
              className="w-full sm:w-auto"
            />
            <CallButton
              variant="secondary"
              className="w-full border border-text-on-dark/40 text-text-on-dark sm:w-auto"
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={item}
            transition={transition(0.48)}
            className="mt-8 flex items-center gap-2"
          >
            <RatingStars rating={siteConfig.rating.value} size={16} />
            <span className="text-sm font-medium text-text-on-dark/85">
              {siteConfig.rating.value} Google Rating &middot;{" "}
              {siteConfig.rating.count} Reviews
            </span>
          </motion.div>
        </div>

        {/* Feature strip along the bottom */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition(0.55)}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-text-on-dark/15 pt-8 lg:mt-24"
        >
          {featureRow.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-text-on-dark/30 text-text-on-dark">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-text-on-dark/90">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
