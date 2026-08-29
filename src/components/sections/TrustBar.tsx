import { trustStats } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StatBlock } from "@/components/shared/StatBlock";
import { OpenStatusBadge } from "@/components/shared/OpenStatusBadge";

const yearsStat = trustStats.find((s) => s.id === "years")!;
const patientsStat = trustStats.find((s) => s.id === "patients")!;
const certifiedStat = trustStats.find((s) => s.id === "certified")!;

/**
 * Trust Bar — quick-scan credibility reinforcement immediately below the
 * Hero, for visitors who scroll past without clicking a CTA. Four
 * columns on desktop (2x2 on mobile): Years, Patients, PMDC Certified,
 * and a live Open/Closed status. See UI Specification Section 3.
 */
export function TrustBar() {
  return (
    <SectionContainer id="trust-bar" variant="tinted" className="!py-12">
      <AnimatedSection className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-border">
        <div className="flex justify-center px-4">
          <StatBlock
            value={yearsStat.value}
            suffix={yearsStat.suffix}
            label={yearsStat.label}
            icon={<yearsStat.icon className="size-8 text-primary" aria-hidden="true" />}
            delay={0}
          />
        </div>
        <div className="flex justify-center px-4">
          <StatBlock
            value={patientsStat.value}
            suffix={patientsStat.suffix}
            label={patientsStat.label}
            icon={<patientsStat.icon className="size-8 text-primary" aria-hidden="true" />}
            delay={100}
          />
        </div>
        <div className="flex justify-center px-4">
          <StatBlock
            value={certifiedStat.value}
            suffix={certifiedStat.suffix}
            label={certifiedStat.label}
            icon={<certifiedStat.icon className="size-8 text-primary" aria-hidden="true" />}
            delay={200}
          />
        </div>
        <div className="flex justify-center px-4">
          <OpenStatusBadge />
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
