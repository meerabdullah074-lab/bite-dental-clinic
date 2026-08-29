import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

/**
 * Fully clickable service card. The entire card is a single <Link> —
 * not a div with a separate "Learn More" link inside it — so there's
 * one clear hit target and no nested-interactive-element accessibility
 * problem. Icon-left/text-right on mobile (compact, fast to scan while
 * thumb-scrolling); icon-top/text-below on desktop, per UI Spec
 * Section 4. Hover: 4px lift + shadow-md on the card, 1.05 scale on the
 * icon container, both 200ms ease.
 */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`${service.name} — ${service.shortDescription} Learn more.`}
      className={cn(
        "group flex flex-row items-start gap-4 rounded-lg border border-border bg-surface p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md md:flex-col md:items-start md:gap-0",
        className
      )}
    >
      <span
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/8 transition-transform duration-200 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <Icon className="size-8 text-primary" aria-hidden="true" />
      </span>

      <div className="flex flex-1 flex-col md:mt-4">
        <h3 className="text-xl font-semibold text-text-primary">
          {service.name}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          {service.shortDescription}
        </p>
        <span
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent"
          aria-hidden="true"
        >
          Learn More
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
