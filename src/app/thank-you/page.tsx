import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Thank You | ${siteConfig.name}`,
  description: "Your message has been received.",
  robots: { index: false, follow: true },
};

/**
 * Thank You page — the redirect target for the contact form once it's
 * wired to a submission handler. Deliberately not indexed (robots meta
 * above) since it's a transient confirmation state, not real content.
 */
export default function ThankYouPage() {
  return (
    <SectionContainer className="flex min-h-[60vh] items-center">
      <div className="mx-auto flex max-w-[560px] flex-col items-center gap-6 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
        </span>

        <h1 className="text-3xl font-semibold text-text-primary md:text-4xl">
          Thank You — We&apos;ve Got Your Message
        </h1>
        <p className="text-[17px] leading-relaxed text-text-secondary">
          Someone from our team will get back to you shortly. If it&apos;s
          urgent, the fastest way to reach us is WhatsApp.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WhatsAppButton className="w-full sm:w-auto" />
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
