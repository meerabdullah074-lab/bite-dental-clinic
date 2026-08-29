import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/**
 * Address, phone, and email, sourced entirely from siteConfig.contact —
 * the same NAP (Name/Address/Phone) values used in the footer, header,
 * and JSON-LD structured data, so they can never drift out of sync with
 * each other. A plain Server Component; nothing here is interactive.
 */
export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <span className="text-[17px] font-medium leading-snug text-text-primary">
          {siteConfig.contact.address}
        </span>
      </div>

      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="flex items-center gap-3 text-[16px] text-text-secondary transition-colors hover:text-primary"
      >
        <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
        {siteConfig.contact.phone}
      </a>

      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="flex items-center gap-3 text-[16px] text-text-secondary transition-colors hover:text-primary"
      >
        <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
        {siteConfig.contact.email}
      </a>
    </div>
  );
}
