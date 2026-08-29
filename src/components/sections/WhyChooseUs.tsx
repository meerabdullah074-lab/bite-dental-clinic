import { whyChooseUsItems } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FeatureCard } from "@/components/shared/FeatureCard";

/**
 * Why Choose Us — preemptively neutralizes the four biggest objections
 * (pain, hygiene, cost, technology) before the visitor has to ask.
 * Narrower, centered 2x2 grid (max-width 1000px) on a subtly tinted
 * background to create rhythm distinction from the white Services
 * section above it. All four items fade up together as one unit — no
 * per-item stagger — since four items read as a single group, per UI
 * Specification Section 5.
 */
export function WhyChooseUs() {
  return (
    <SectionContainer id="why-choose-us" variant="tinted">
      <AnimatedSection className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[600px] text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
            Care Built Around Your Comfort
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          {whyChooseUsItems.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
