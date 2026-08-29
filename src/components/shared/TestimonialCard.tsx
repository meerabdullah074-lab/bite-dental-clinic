import { Quote } from "lucide-react";
import { RatingStars } from "@/components/shared/RatingStars";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Single review card: star rating, quote, patient name, and an optional
 * treatment tag. Purely presentational (no hooks) so it stays a Server
 * Component and can be reused anywhere a review needs displaying,
 * independent of whatever carousel/grid wraps it.
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-md",
        className
      )}
    >
      <Quote
        className="absolute right-6 top-6 size-10 text-accent/15"
        aria-hidden="true"
      />

      <RatingStars rating={testimonial.rating} size={16} />

      <p className="mt-4 flex-1 text-[16px] leading-relaxed text-text-primary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-[15px] font-semibold text-text-primary">
          {testimonial.name}
        </span>
        {testimonial.treatment && (
          <span className="shrink-0 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
            {testimonial.treatment}
          </span>
        )}
      </div>
    </div>
  );
}
