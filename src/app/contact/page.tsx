import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactSection } from "@/components/shared/ContactSection";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} — find our address, hours, and the fastest way to book: WhatsApp, phone, or in person.`,
};

/**
 * Contact page — reuses the same ContactSection content block as the
 * homepage's Contact section, per its own doc comment anticipating
 * exactly this reuse (Module 11).
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to See You"
        description="Whether it's a routine check-up or a question before you book, we're one message away."
      />
      <SectionContainer id="contact">
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
