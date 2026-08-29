"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { clinicPhotos } from "@/lib/site-data";

/**
 * Photos — a quick visual strip of the studio and its doctors on the
 * homepage itself (separate from the dedicated before/after treatment
 * gallery at /gallery), so visitors get a feel for the place before
 * scrolling further.
 */
export function Photos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionContainer id="photos" variant="tinted">
      <AnimatedSection className="mb-10 max-w-xl">
        <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Take a Look Around
        </span>
        <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
          Our Studio & Team
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {clinicPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              style={photo.position ? { objectPosition: photo.position } : undefined}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/gallery"
          className="text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
        >
          View Full Smile Gallery →
        </Link>
      </div>
    </SectionContainer>
  );
}
