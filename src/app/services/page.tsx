import type { Metadata } from "next";
import { services } from "@/lib/site-data";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { HowItWorks } from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: `Dental Services in Islamabad | ${siteConfig.name}`,
  description: `Explore the full range of dental treatments at ${siteConfig.name} — general dentistry, cosmetic treatments, orthodontics, implants, and more, with transparent starting prices.`,
};

/**
 * Services index — the full 8-service grid (the homepage only teases a
 * preview), reusing ServiceCard directly. See UI Specification's
 * Services section for the card behavior this inherits.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Dental Care, Tailored to You"
        description="Every treatment starts with a clear, honest plan — browse our full range of services below, each with transparent starting pricing."
      />

      <SectionContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>

      <HowItWorks />

      <SectionContainer variant="tinted">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-[17px] leading-relaxed text-text-secondary">
            Message us on WhatsApp and describe what&apos;s going on —
            we&apos;ll point you in the right direction before you even book.
          </p>
          <WhatsAppButton label="Ask Us on WhatsApp" />
        </div>
      </SectionContainer>
    </>
  );
}
