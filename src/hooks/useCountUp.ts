import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Target value to count up to. */
  target: number;
  /** Total animation duration in ms. */
  duration?: number;
  /** Delay before the count-up starts, in ms (used for staggering). */
  delay?: number;
  /** Count-up only runs once `start` becomes true. */
  start: boolean;
  /** Skips the animation and jumps straight to `target`. */
  disabled?: boolean;
}

/**
 * Ease-out cubic — starts fast, settles gently. Matches the "calm, not
 * energetic" animation principle from the Animation System spec.
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Animates a number from 0 to `target` once `start` becomes true, driven
 * by requestAnimationFrame rather than a setInterval tick so it stays
 * smooth and stops firing as soon as the tab is backgrounded. Used by
 * StatBlock for the Trust Bar's count-up statistics.
 */
export function useCountUp({
  target,
  duration = 600,
  delay = 0,
  start,
  disabled = false,
}: UseCountUpOptions): number {
  const [value, setValue] = useState(() => (disabled ? target : 0));
  const frameRef = useRef<number | undefined>(undefined);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (disabled || !start || hasStartedRef.current) {
      return;
    }
    hasStartedRef.current = true;

    const timeoutId = window.setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setValue(target * easeOutCubic(progress));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [start, target, duration, delay, disabled]);

  // If a caller's `disabled` flag flips true after mount (e.g. the OS
  // reduced-motion setting changes mid-session), snap straight to the
  // final value rather than leaving a stale in-progress number on screen.
  return disabled ? target : value;
}
