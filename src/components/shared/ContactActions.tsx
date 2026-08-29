import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/CallButton";
import { getDirectionsUrl } from "@/lib/utils";

/**
 * The Contact section's three practical conversion actions: Get
 * Directions, Call Now, and Chat on WhatsApp — all equal visual weight
 * since each serves a genuinely different visitor intent. Stacks
 * full-width on mobile; sits in a row on larger screens.
 */
export function ContactActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild variant="secondary" className="flex-1">
        <a href={getDirectionsUrl()} target="_blank" rel="noopener noreferrer">
          <Navigation className="size-4" aria-hidden="true" />
          Get Directions
        </a>
      </Button>
      <CallButton className="flex-1" />
      <WhatsAppButton className="flex-1" />
    </div>
  );
}
