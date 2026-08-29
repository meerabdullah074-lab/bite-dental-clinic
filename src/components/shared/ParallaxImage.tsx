"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** CSS object-position value, e.g. "center 15%" to avoid cropping faces in portrait shots. */
  objectPosition?: string;
}

/**
 * A next/image fill-image that drifts slightly slower than the page
 * scroll (a subtle ~24px range, not a dramatic effect) while its
 * container is in view — used for the Doctor section's portrait per UI
 * Specification Section 6 ("image fades in with subtle parallax...
 * ~0.9x speed"). Disabled entirely under prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className,
  objectPosition = "center 12%",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-24, 24]
  );

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-[-24px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      </motion.div>
    </div>
  );
}
