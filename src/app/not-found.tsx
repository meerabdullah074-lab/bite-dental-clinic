import type { Metadata } from "next";
import Link from "next/link";
import { Frown } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

/**
 * Custom 404. Next.js App Router renders this automatically for any
 * unmatched route, and whenever notFound() is called (e.g. an unknown
 * service slug in app/services/[slug]/page.tsx).
 */
export default function NotFound() {
  return (
    <SectionContainer className="flex min-h-[60vh] items-center">
      <div className="mx-auto flex max-w-[560px] flex-col items-center gap-6 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary/8">
          <Frown className="size-8 text-primary" aria-hidden="true" />
        </span>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            404
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-text-primary md:text-4xl">
            We Couldn&apos;t Find That Page
          </h1>
        </div>

        <p className="text-[17px] leading-relaxed text-text-secondary">
          The page you&apos;re looking for may have moved or no longer
          exists. Let&apos;s get you back on track.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">Back to Home</Link>
          </Button>
          <WhatsAppButton
            variant="whatsapp"
            className="w-full sm:w-auto"
            label="Chat With Us"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
