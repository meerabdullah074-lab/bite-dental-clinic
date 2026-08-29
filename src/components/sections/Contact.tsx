import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactSection } from "@/components/shared/ContactSection";

/**
 * Contact — removes the last practical logistical friction (where,
 * when, how to reach). See UI Specification Section 11.
 */
export function Contact() {
  return (
    <SectionContainer id="contact">
      <AnimatedSection className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Visit Us
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          Find Us &amp; Get in Touch
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-12">
        <ContactSection showMap={false} />
      </AnimatedSection>
    </SectionContainer>
  );
}
