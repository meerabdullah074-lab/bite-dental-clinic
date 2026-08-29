"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

/**
 * How It Works — demystifies the first-visit process to remove
 * "fear of the unknown," per the strategy research. Four steps in a
 * horizontal row connected by a line on desktop; a vertical timeline on
 * mobile (a well-understood convention for sequential processes on
 * small screens). The connecting line "draws" itself in sync with the
 * steps' left-to-right stagger reveal. See UI Specification Section 9.
 */
export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const lineTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut" as const,
  };

  return (
    <SectionContainer id="how-it-works">
      <div className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Simple Process
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          From your first message to a comfortable, informed visit — no
          surprises along the way.
        </p>
      </div>

      <div ref={containerRef} className="relative mt-16">
        {/* Connecting line — vertical on mobile, positioned behind the
            icon column; horizontal on desktop, positioned through the
            icon row's vertical center. */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[27px] top-2 w-0.5 bg-border lg:bottom-auto lg:left-0 lg:right-0 lg:top-[27px] lg:h-0.5 lg:w-auto"
        >
          <motion.div
            className="h-full w-full origin-top bg-accent lg:origin-left"
            initial={{ scaleY: 0, scaleX: 1 }}
            animate={
              isInView
                ? { scaleY: 1, scaleX: 1 }
                : { scaleY: 0, scaleX: 1 }
            }
            transition={lineTransition}
            style={{ transformOrigin: "top left" }}
          />
        </div>

        <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.step}
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: -12 }
                }
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  ease: "easeOut",
                }}
                className="relative flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0"
              >
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-accent text-white shadow-sm lg:mb-4">
                  <Icon className="size-6" aria-hidden="true" />
                </span>

                <div className="flex-1 pt-1 lg:pt-0">
                  <span
                    className="hidden text-5xl font-bold leading-none text-primary/10 lg:block"
                    aria-hidden="true"
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-text-primary lg:mt-3">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      <div className="mt-14 flex justify-center">
        <WhatsAppButton label="Start With Step One — Book Now" />
      </div>
    </SectionContainer>
  );
}
