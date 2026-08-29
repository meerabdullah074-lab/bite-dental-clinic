"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import { DAY_NAMES } from "@/lib/utils";
import type { OpenStatus } from "@/types";

function computeStatus(now: Date): OpenStatus {
  const todayName = DAY_NAMES[now.getDay()];
  const today = siteConfig.hours.find((h) => h.day === todayName);

  if (!today || !today.open || !today.close) {
    return { isOpen: false, label: "Closed Today", todayHours: null };
  }

  if (today.open === "00:00" && today.close === "23:59") {
    return {
      isOpen: true,
      label: "Open 24 Hours",
      todayHours: { open: today.open, close: today.close },
    };
  }

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);

  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const isOpen = nowMinutes >= openMinutes && nowMinutes < closeMinutes;

  return {
    isOpen,
    label: isOpen ? "Open Now" : "Closed Now",
    todayHours: { open: today.open, close: today.close },
  };
}

/**
 * Computes live Open/Closed status from siteConfig.hours, re-evaluated
 * every minute. Client-only (depends on the visitor's local clock) —
 * server render always starts from a safe "Closed" default to avoid a
 * hydration mismatch, then corrects itself on mount.
 *
 * The synchronous setState below is intentional: this is the
 * "subscribing to an external system" (the wall clock) case React's own
 * docs carve out as a valid effect use, even though the lint rule's
 * heuristic can't distinguish it from a derived-state anti-pattern.
 */
export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>({
    isOpen: false,
    label: "Closed",
    todayHours: null,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial sync with the external wall-clock, see doc comment above
    setStatus(computeStatus(new Date()));
    const interval = setInterval(() => {
      setStatus(computeStatus(new Date()));
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
