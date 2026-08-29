"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Returns a boolean rather than the raw scroll offset, since consumers
 * (Header) only ever need the crossed/not-crossed state — this avoids
 * re-rendering on every pixel of scroll movement.
 *
 * The scroll listener is passive and updates are batched via
 * requestAnimationFrame so this stays smooth on lower-end mobile CPUs.
 */
export function useScrollPosition(threshold: number = 80): boolean {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      setIsPastThreshold(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(evaluate);
        ticking = true;
      }
    };

    // Evaluate once on mount in case the page loads already scrolled
    // (e.g. anchor-link navigation or a restored scroll position).
    evaluate();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isPastThreshold;
}
