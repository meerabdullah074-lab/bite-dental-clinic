import { Phone, MessageCircle, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { getDirectionsUrl } from "@/lib/utils";

/**
 * Fixed-position mobile action bar — Call / WhatsApp / Directions.
 * Rendered once in the root layout, mobile-breakpoint-only (hidden
 * md:flex reversed — visible below md, hidden at/above). Identified in
 * the architecture doc as the single highest-leverage mobile conversion
 * element for a WhatsApp-first market.
 */
export function StickyMobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-stretch border-t border-border bg-surface shadow-lg md:hidden">
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="flex flex-1 flex-col items-center justify-center gap-1 text-text-secondary transition-colors active:text-primary"
      >
        <Phone className="size-5" />
        <span className="text-xs font-medium">Call</span>
      </a>

      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-whatsapp text-white"
      >
        <MessageCircle className="size-5" />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>

      <a
        href={getDirectionsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 text-text-secondary transition-colors active:text-primary"
      >
        <Navigation className="size-5" />
        <span className="text-xs font-medium">Directions</span>
      </a>
    </div>
  );
}
