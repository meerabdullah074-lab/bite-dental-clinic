import { OpenStatusBadge } from "@/components/shared/OpenStatusBadge";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { BusinessHours } from "@/components/shared/BusinessHours";
import { ContactActions } from "@/components/shared/ContactActions";

/**
 * Composes the full Contact content block: map, live Open/Closed status,
 * address/phone/email, weekly hours, and the three action CTAs. Kept
 * separate from sections/Contact.tsx (which only supplies the
 * SectionContainer chrome and heading) so this content is reusable
 * anywhere a full contact block is needed independent of page-level
 * wrapping — e.g. a standalone /contact page later.
 */
interface ContactSectionProps {
  /** Whether to render the embedded Google Map. Defaults to true.
   *  Set to false on the homepage so the map only appears on /contact. */
  showMap?: boolean;
}

export function ContactSection({ showMap = true }: ContactSectionProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
      {showMap && <GoogleMap />}

      <div className="flex flex-col gap-8">
        <OpenStatusBadge variant="pill" />
        <ContactInfo />
        <BusinessHours />
        <ContactActions />
      </div>
    </div>
  );
}
