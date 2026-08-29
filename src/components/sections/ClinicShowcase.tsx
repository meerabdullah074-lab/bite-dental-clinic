"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const highlights = [
  "Modern, fully-equipped treatment rooms",
  "Strict sterilization & single-use protocols",
  "Digital X-rays & advanced dental technology",
];

/**
 * ClinicShowcase — sits directly below the Hero, giving the studio's
 * treatment room its own full-width moment (large photo + short trust
 * copy) rather than being buried inside the smaller Hero image column.
 */
export function ClinicShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionContainer id="clinic-showcase" className="py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative lg:col-span-7"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md md:aspect-[16/10]">
            <motion.div
              className="absolute inset-0"
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 14, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Image
                src="/images/hero/hero-clinic-chair.webp"
                alt="Modern treatment room and dental chair at Bite Squad Dental Studio"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <AnimatedSection className="lg:col-span-5">
          <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[1px] text-accent">
            Inside Our Studio
          </span>
          <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
            A Clean, Modern Space Built for Comfort
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
            Every treatment room is designed around patient comfort and
            clinical precision — from the equipment we use to the way we
            keep every surface sterilized between patients.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-[15px] text-text-secondary">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppButton label="Book a Visit" />
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
}
