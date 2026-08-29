import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site.config";

/**
 * Merges Tailwind class names safely, resolving conflicting utility classes.
 * Used across all ui/, shared/, and sections/ components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Day names indexed to match JavaScript's Date.getDay() (0 = Sunday).
 * Single source of truth for anything that needs to map "today" to a
 * siteConfig.hours entry — used by useOpenStatus and BusinessHours so
 * the two never drift out of sync with each other.
 */
export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/**
 * Formats a 24-hour "HH:mm" string (as stored in siteConfig.hours) into
 * a human-friendly 12-hour label, e.g. "14:00" -> "2 PM", "09:30" -> "9:30 AM".
 */
export function formatTime12h(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return minutes === 0
    ? `${hour12} ${period}`
    : `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
}

/**
 * Builds a Google Maps URL for the clinic — prefers a Place ID (most
 * precise) and falls back to a text-address search when no Place ID is
 * configured yet. Single source of truth so every "Get Directions"
 * affordance across the site (Contact section, sticky mobile action
 * bar) resolves the same way and updates together.
 */
export function getDirectionsUrl(): string {
  const { googleMapsPlaceId, address } = siteConfig.contact;
  if (googleMapsPlaceId) {
    return `https://www.google.com/maps/place/?q=place_id:${googleMapsPlaceId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
