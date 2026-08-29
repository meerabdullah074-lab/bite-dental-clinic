"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/config/site.config";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

/**
 * Persistent sticky header. Background/shadow/height transition from a
 * transparent, borderless bar at the top of the page to a solid white
 * bar with a shadow once scrolled — separation is communicated through
 * elevation (shadow), not a text-color swap. Text stays dark at all
 * times: the Hero section sits on the light `background` token (not a
 * dark image), so a light-text-on-transparent header would be
 * unreadable at rest. Collapses to logo + hamburger below the md
 * breakpoint. See Header_Implementation_Plan.md for the full spec.
 *
 * Solid-state logic: Header lives once in the root layout and is
 * shared across every route, so it can't receive a per-page prop from
 * an individual page component the way a route-local element could.
 * Instead it determines its own "should start solid" state via
 * usePathname (already needed here for nav active-link styling): only
 * the homepage ("/") has a hero section to sit transparently over —
 * every interior page (About, Services, Contact, etc.) has ordinary
 * page content starting immediately below the header, so those routes
 * render solid from the first paint regardless of scroll position.
 */
export function Header({ className }: HeaderProps) {
  const isPastThreshold = useScrollPosition(80);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSolid = !isHomePage || isPastThreshold;

  // Lifted into state (rather than left uncontrolled) so that clicking a
  // nav link inside the mobile menu can close the Sheet programmatically.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 ease-out",
        isSolid
          ? "h-[72px] bg-surface shadow-sm"
          : "h-[88px] bg-editorial-dark/35 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-20">
        <Logo variant={isSolid ? "dark" : "light"} />

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-[15px] font-medium tracking-[0.2px] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-[width] after:duration-150 after:ease-out hover:after:w-full",
                  isSolid
                    ? "text-text-secondary hover:text-primary"
                    : "text-text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] hover:text-accent",
                  isActive && (isSolid ? "text-primary after:w-full" : "text-accent after:w-full")
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 md:flex">
          {siteConfig.contact.phone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={cn(
                "flex items-center gap-2 text-[15px] font-medium transition-colors",
                isSolid
                  ? "text-text-secondary hover:text-primary"
                  : "text-text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] hover:text-accent"
              )}
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          )}
          <WhatsAppButton size="sm" />
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                !isSolid &&
                  "text-text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] hover:text-text-on-dark"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav
              aria-label="Mobile navigation"
              className="mt-10 flex flex-col gap-6"
            >
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-text-primary hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium text-text-primary transition-colors hover:text-primary"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              )}

              <WhatsAppButton className="mt-4 w-full" />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
