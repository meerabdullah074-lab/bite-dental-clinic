"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollSnapCarouselOptions {
  itemCount: number;
  /** Autoplay interval in ms. Pass 0 to disable autoplay entirely. */
  autoplayInterval?: number;
  disabled?: boolean;
}

interface UseScrollSnapCarouselReturn {
  trackRef: React.RefObject<HTMLDivElement | null>;
  activeIndex: number;
  scrollToIndex: (index: number) => void;
  pause: () => void;
  resume: () => void;
}

/**
 * Drives a native CSS scroll-snap carousel (overflow-x-auto + snap-x):
 * tracks which slide is currently active by listening to scroll
 * position, exposes a scrollToIndex for dot-pagination controls, and
 * runs an optional autoplay timer that pauses immediately on any user
 * interaction (pointer down or hover) and resumes once the user is no
 * longer interacting — matching the "never fights user control"
 * principle from the Animation System spec. Native scroll-snap is used
 * for the actual sliding motion rather than custom drag math, so touch
 * swipe, trackpad, and keyboard scrolling all work with zero extra code.
 */
export function useScrollSnapCarousel({
  itemCount,
  autoplayInterval = 5000,
  disabled = false,
}: UseScrollSnapCarouselOptions): UseScrollSnapCarouselReturn {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isPausedRef = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(itemCount - 1, index));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }
  }, [itemCount]);

  // Track which slide is active by nearest-slide-to-scroll-position,
  // throttled via requestAnimationFrame for smooth performance.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const evaluate = () => {
      const children = Array.from(track.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, i) => {
        const distance = Math.abs(child.offsetLeft - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(evaluate);
        ticking = true;
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Autoplay, paused for the duration of any user interaction.
  useEffect(() => {
    if (disabled || autoplayInterval <= 0 || itemCount <= 1) return;

    const interval = window.setInterval(() => {
      if (isPausedRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      const children = Array.from(track.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, i) => {
        const distance = Math.abs(child.offsetLeft - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      const nextIndex = (closestIndex + 1) % itemCount;
      scrollToIndex(nextIndex);
    }, autoplayInterval);

    return () => window.clearInterval(interval);
  }, [disabled, autoplayInterval, itemCount, scrollToIndex]);

  const pause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return { trackRef, activeIndex, scrollToIndex, pause, resume };
}
