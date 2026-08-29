import { doctors } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { DoctorProfile } from "@/components/shared/DoctorProfile";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * Meet the Doctor(s) — the single highest-leverage trust section,
 * converting an anonymous "clinic" into specific, trustworthy humans.
 * Rendered on the deliberate dark editorial panel (per the Design
 * System's "Calm Confidence" direction) — one of only two dark sections
 * on the page, creating a rhythm break as the visitor scrolls.
 */
export function MeetTheDoctor() {
  return (
    <SectionContainer id="meet-the-doctor" variant="dark">
      <div className="space-y-20">
        {doctors.map((doctor, index) => (
          <AnimatedSection key={doctor.name} delay={index * 0.1}>
            <DoctorProfile doctor={doctor} />
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}
