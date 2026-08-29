"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
}

/**
 * Embedded, interactive Google Map for the clinic's location. Fades and
 * scales in slightly (0.97 -> 1, 400ms) on scroll-into-view, per UI
 * Specification Section 11. Lazy-loaded via the iframe's native
 * `loading="lazy"` attribute so it doesn't cost anything on initial
 * page load until the visitor scrolls near it.
 */
export function GoogleMap({ className }: GoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={containerRef}
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : shouldReduceMotion
            ? undefined
            : { opacity: 0, scale: 0.97 }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut",
      }}
      className={cn(
        "h-[300px] w-full overflow-hidden rounded-lg shadow-sm lg:h-full lg:min-h-[420px]",
        className
      )}
    >
      <iframe
        src={siteConfig.contact.googleMapsEmbedSrc}
        title={`Map showing the location of ${siteConfig.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="size-full border-0"
      />
    </motion.div>
  );
}
