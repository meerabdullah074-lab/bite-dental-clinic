import Link from "next/link";
import { services } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";

/**
 * Services Preview — lets visitors self-identify their specific need
 * quickly. 4-column grid on desktop (2 rows for 8 services), 2-column
 * on tablet, single column on mobile. Cards fade up on scroll,
 * staggered 60ms per card in reading order. See UI Specification
 * Section 4.
 */
export function Services() {
  return (
    <SectionContainer id="services">
      <div className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Our Services
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          Comprehensive Care, Tailored to You
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          From routine check-ups to complete smile makeovers — every
          treatment starts with a clear, honest plan.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <AnimatedSection key={service.slug} delay={index * 0.06}>
            <ServiceCard service={service} className="h-full" />
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="secondary">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
