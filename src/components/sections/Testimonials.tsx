"use client";

import { useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { testimonials } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { useScrollSnapCarousel } from "@/hooks/useScrollSnapCarousel";
import { cn } from "@/lib/utils";

/**
 * Testimonials — third-party social proof. A reviews-summary badge sits
 * above a scroll-snap carousel (1 card on mobile, a peeking ~1.5–3 on
 * larger screens), auto-advancing every 5s and pausing immediately on
 * any user interaction. See UI Specification Section 8.
 */
export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const { trackRef, activeIndex, scrollToIndex, pause, resume } =
    useScrollSnapCarousel({
      itemCount: testimonials.length,
      autoplayInterval: shouldReduceMotion ? 0 : 5000,
    });

  const activeTestimonial = testimonials[activeIndex];

  return (
    <SectionContainer id="testimonials">
      <div className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Patient Stories
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          What Our Patients Say
        </h2>
      </div>

      {/* Reviews summary badge */}
      <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 shadow-sm">
        <Star className="size-5 fill-star-rating text-star-rating" aria-hidden="true" />
        <span className="text-base font-semibold text-text-primary">
          {siteConfig.rating.value}
        </span>
        <span className="text-sm text-text-secondary">
          ({siteConfig.rating.count} Google Reviews)
        </span>
      </div>

      <AnimatedSection className="mt-10">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
          onPointerEnter={pause}
          onPointerLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Review from ${testimonial.name}`}
                className="w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[31%]"
              >
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </div>
            ))}
          </div>

          {/* Dot pagination */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to review from ${testimonial.name}`}
                aria-current={index === activeIndex}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "w-6 bg-primary"
                    : "bg-border hover:bg-primary/40"
                )}
              />
            ))}
          </div>

          {/* Screen-reader-only live status, avoids a silent carousel */}
          <p className="sr-only" role="status" aria-live="polite">
            {activeTestimonial &&
              `Showing review ${activeIndex + 1} of ${testimonials.length}, from ${activeTestimonial.name}`}
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-10 flex justify-center">
        <a
          href={
            siteConfig.contact.googleMapsPlaceId
              ? `https://search.google.com/local/reviews?placeid=${siteConfig.contact.googleMapsPlaceId}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
        >
          Read All Reviews on Google
        </a>
      </div>
    </SectionContainer>
  );
}
