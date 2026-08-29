import Link from "next/link";
import { Image as ImageIcon, Users, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { services } from "@/lib/site-data";
import { getDirectionsUrl } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * Footer — utility navigation, final SEO/trust reinforcement, and a
 * safety net for visitors who reach the bottom without converting. The
 * second of the two deliberate dark panels on the page (bookending
 * Meet the Doctor), per the Design System's "Calm Confidence" rhythm.
 * See UI Specification Section 12.
 *
 * Note: lucide-react ships generic outline icons only (no brand marks
 * for Instagram/Facebook) — Image/Users icons stand in as neutral,
 * visually distinct placeholders. Swap for real brand SVGs if desired.
 */
export function Footer() {
  // NOTE: currentYear is computed at build time (this is a Server
  // Component, statically rendered). That's fine for a copyright year —
  // worst case it's briefly one year behind for sites that don't
  // redeploy right at midnight on Jan 1st, a universally accepted
  // trade-off. It is NOT fine for "today's hours" (a build-time
  // computation would freeze on whatever day the site was built and be
  // silently wrong every day after) — so hours live only in the
  // Contact section's client-rendered BusinessHours component, which
  // correctly reads the visitor's actual local day. This footer links
  // to that section instead of duplicating a stale computation.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-dark text-text-on-dark">
      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 md:px-8 md:pt-20 lg:px-20">
        {/* Desktop 4-column grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-10">
          {/* Brand block — always visible */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-text-on-dark/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.shortName} on Instagram`}
                className="text-text-on-dark/80 transition-colors hover:text-accent"
              >
                <ImageIcon className="size-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.shortName} on Facebook`}
                className="text-text-on-dark/80 transition-colors hover:text-accent"
              >
                <Users className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links — desktop only, collapses into an accordion on mobile below */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <FooterColumnHeader>Quick Links</FooterColumnHeader>
            {siteConfig.nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>

          {/* Services — desktop only, collapses into an accordion on mobile below */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <FooterColumnHeader>Services</FooterColumnHeader>
            {services.map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </FooterLink>
            ))}
          </div>

          {/* Contact — always visible */}
          <div className="flex flex-col gap-3">
            <FooterColumnHeader>Contact</FooterColumnHeader>

            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-[15px] text-text-on-dark/80 transition-colors hover:text-accent"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.address}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-[15px] text-text-on-dark/80 transition-colors hover:text-accent"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-[15px] text-text-on-dark/80 transition-colors hover:text-accent"
            >
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              <span>View Hours</span>
            </a>

            <WhatsAppButton size="sm" className="mt-2 w-fit" />
          </div>
        </div>

        {/* Mobile-only collapsible Quick Links / Services */}
        <div className="mt-8 lg:hidden">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="quick-links" className="border-text-on-dark/10">
              <AccordionTrigger className="text-text-on-dark hover:text-accent">
                Quick Links
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {siteConfig.nav.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="services" className="border-text-on-dark/10">
              <AccordionTrigger className="text-text-on-dark hover:text-accent">
                Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {services.map((service) => (
                    <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                      {service.name}
                    </FooterLink>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-text-on-dark/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-xs text-text-on-dark/50">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex gap-5">
            {siteConfig.footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-text-on-dark/60 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-text-on-dark/60">
      {children}
    </span>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[15px] text-text-on-dark/80 transition-colors hover:text-accent"
    >
      {children}
    </Link>
  );
}
