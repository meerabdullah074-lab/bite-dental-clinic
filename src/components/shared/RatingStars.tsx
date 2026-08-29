import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  /** Pixel size of each star icon. */
  size?: number;
  className?: string;
}

/**
 * Renders a row of filled/half/empty stars for a numeric rating.
 * Uses the star-rating color token, kept deliberately outside the core
 * palette per the Design System (universal star-color recognition
 * matters more than palette purity here).
 */
export function RatingStars({ rating, size = 16, className }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled = i < fullStars;
        const isHalf = !isFilled && i === fullStars && hasHalfStar;
        return (
          <Star
            key={i}
            aria-hidden="true"
            width={size}
            height={size}
            className={cn(
              isFilled || isHalf
                ? "fill-star-rating text-star-rating"
                : "fill-transparent text-border"
            )}
            style={isHalf ? { clipPath: "inset(0 50% 0 0)" } : undefined}
          />
        );
      })}
    </div>
  );
}
