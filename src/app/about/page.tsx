import type { Metadata } from "next";
import { doctors } from "@/lib/site-data";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHero } from "@/components/shared/PageHero";
import { DoctorProfile } from "@/components/shared/DoctorProfile";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Meet the team behind ${siteConfig.name} and learn what makes our approach to dental care different — gentle, transparent, and built around your comfort.`,
};

/**
 * About page — composed almost entirely from existing, reusable
 * section components (TrustBar, WhyChooseUs) plus the same DoctorProfile
 * content block used on the homepage's dark panel, rather than
 * duplicating any of that markup. See Module 6's DoctorProfile — its
 * doc comment specifically anticipated this reuse.
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The Story Behind ${siteConfig.name}`}
        description="We built this clinic around a simple idea: dental care shouldn't be something you dread. Here's who we are and how we work."
      />

      <TrustBar />

      <SectionContainer variant="dark">
        <div className="space-y-20">
          {doctors.map((doctor, index) => (
            <AnimatedSection key={doctor.name} delay={index * 0.1}>
              <DoctorProfile doctor={doctor} />
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>

      <WhyChooseUs />
    </>
  );
}
