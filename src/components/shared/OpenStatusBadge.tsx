"use client";

import { Clock } from "lucide-react";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import { cn } from "@/lib/utils";

interface OpenStatusBadgeProps {
  className?: string;
  /**
   * "stat" (default) renders the vertical icon/word/label block used in
   * the Trust Bar. "pill" renders a compact horizontal pill — used in
   * the Contact section, where the spec calls for this to be "the
   * highest-attention element in this section," sitting alone at the
   * top of the details column rather than inside a 4-column stat grid.
   */
  variant?: "stat" | "pill";
}

/**
 * Live Open/Closed indicator, computed from siteConfig.hours via
 * useOpenStatus. Color never carries the status alone — the text label
 * ("Open Now" / "Closed Now") is always present alongside it, per the
 * Accessibility Strategy's rule against color-only information. Closed
 * is rendered as a neutral gray, not red — it's a trust-neutral fact,
 * not a failure state.
 */
export function OpenStatusBadge({ className, variant = "stat" }: OpenStatusBadgeProps) {
  const { isOpen, label } = useOpenStatus();

  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex w-fit items-center gap-2 rounded-full px-4 py-2",
          isOpen ? "bg-success/15" : "bg-border/60",
          className
        )}
      >
        <span className="relative flex size-2.5">
          <Clock
            className={cn(
              "size-4",
              isOpen ? "text-success" : "text-text-secondary"
            )}
            aria-hidden="true"
          />
          {isOpen && (
            <span
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-success/40 motion-safe:animate-open-pulse"
            />
          )}
        </span>
        <span
          className={cn(
            "text-[15px] font-semibold",
            isOpen ? "text-success" : "text-text-secondary"
          )}
          role="status"
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", className)}>
      <span
        className={cn(
          "relative flex size-8 items-center justify-center rounded-full",
          isOpen ? "bg-success/15" : "bg-border"
        )}
      >
        <Clock
          className={cn("size-4", isOpen ? "text-success" : "text-text-secondary")}
          aria-hidden="true"
        />
        {isOpen && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-success/40 motion-safe:animate-open-pulse"
          />
        )}
      </span>
      <span className="text-3xl font-bold text-primary" aria-hidden="true">
        {isOpen ? "Open" : "Closed"}
      </span>
      <span
        className="text-sm font-medium uppercase tracking-wide text-text-secondary"
        aria-hidden="true"
      >
        Today
      </span>
      <span className="sr-only" role="status">
        {label}
      </span>
    </div>
  );
}
