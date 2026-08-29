import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { DoctorProfile as DoctorProfileData } from "@/types";

interface DoctorProfileProps {
  doctor: DoctorProfileData;
}

/**
 * Doctor narrative content block: portrait, name/title, first-person
 * bio, qualification badges, and a consultation CTA. Config-driven (all
 * copy comes from the `doctor` prop, sourced from lib/site-data.ts) and
 * layout-only otherwise, so it's reusable anywhere a doctor's profile
 * needs to render — the homepage's dark panel now, an About page
 * section later — independent of the surrounding background treatment.
 * See UI Specification Section 6.
 */
export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Portrait — anchor element, largest single visual on the page */}
      <div className="lg:col-span-5">
        <ParallaxImage
          src={doctor.photo}
          alt={doctor.photoAlt}
          objectPosition="center 8%"
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg shadow-lg lg:max-w-none lg:rounded-xl"
        />
      </div>

      {/* Narrative text — fades up as one block, no internal stagger */}
      <AnimatedSection className="lg:col-span-7">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          {doctor.name}
        </h2>
        <p className="mt-2 text-[15px] font-medium text-accent">
          {doctor.title}
        </p>

        <div className="mt-6 space-y-4">
          {doctor.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-[17px] leading-[1.7] text-text-on-dark/85"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {doctor.credentials.map((credential) => (
            <li
              key={credential}
              className="flex items-center gap-2 text-sm text-text-on-dark/90"
            >
              <CheckCircle2
                className="size-5 shrink-0 text-accent"
                aria-hidden="true"
              />
              {credential}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <WhatsAppButton
            variant="primary"
            label={`Book a Consultation with ${doctor.name}`}
            message={`Hi, I'd like to book a consultation with ${doctor.name}.`}
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
