import {
  Hero,
  ClinicShowcase,
  TrustBar,
  Services,
  WhyChooseUs,
  MeetTheDoctor,
  Photos,
  Testimonials,
  HowItWorks,
  FAQ,
  Contact,
} from "@/components/sections";

/**
 * Homepage — composes section placeholders in the order defined by the
 * UI Specification. Sections are currently empty shells (structure only);
 * business content and layout implementation come in a later pass.
 *
 * Note: Before/After treatment gallery is intentionally NOT shown here —
 * it only appears on the dedicated /gallery page. A lighter Photos strip
 * (studio + doctors) is shown instead.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ClinicShowcase />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <MeetTheDoctor />
      <Photos />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Contact />
    </>
  );
}
