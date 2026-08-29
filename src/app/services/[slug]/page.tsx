import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, Wallet, ArrowLeft } from "lucide-react";
import { services } from "@/lib/site-data";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-renders every known service slug at build time (SSG) rather than
 * rendering on request — per the Development Architecture's rendering
 * strategy, marketing pages should be static by default.
 */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/**
 * Any slug not returned by generateStaticParams is treated as
 * genuinely not found at the routing level, rather than attempting an
 * on-demand dynamic render that calls notFound() itself. This is what
 * makes an unknown slug correctly return a real HTTP 404 status.
 */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: `Service Not Found | ${siteConfig.name}` };
  }

  return {
    title: `${service.name} in Islamabad | ${siteConfig.name}`,
    description: service.longDescription,
  };
}

function formatPKR(amount: number): string {
  // Intl.NumberFormat's `currency: "PKR"` style depends on the runtime's
  // ICU currency-symbol data being complete for that currency — some
  // Node builds ship a reduced ICU dataset and silently fall back to a
  // different currency symbol (observed: USD "$") rather than erroring,
  // which would show a wrong currency to visitors. Formatting manually
  // with a literal "PKR" prefix and locale-aware digit grouping only
  // sidesteps that risk entirely.
  //
  // Currently unused: pricing is shown as "Contact for Pricing" instead
  // of a number (kept here in case per-service pricing is reinstated).
  const grouped = new Intl.NumberFormat("en-US").format(amount);
  return `PKR ${grouped}`;
}
void formatPKR;

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    provider: {
      "@type": "Dentist",
      name: siteConfig.name,
    },
  };

  return (
    <>
      {/* JSON-LD structured data for this service, per the SEO Architecture
          doc's MedicalProcedure/Dentist schema guidance. See the FAQ
          section's doc comment (Module 10) for the framework-level note
          on how this is hydrated. */}
      <script
        id={`service-jsonld-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <SectionContainer className="pb-0">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All Services
        </Link>

        <div className="mx-auto max-w-[800px]">
          <span
            className="flex size-16 items-center justify-center rounded-full bg-primary/8"
            aria-hidden="true"
          >
            <Icon className="size-8 text-primary" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-text-primary md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-text-secondary">
            {service.longDescription}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-text-primary">
              What&apos;s Included
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-text-secondary">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Wallet className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    Contact for Pricing
                  </p>
                  <p className="text-sm text-text-secondary">
                    Message us on WhatsApp for an exact quote
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-[15px] font-medium text-text-primary">
                    {service.durationNote}
                  </p>
                  <p className="text-sm text-text-secondary">Typical timeline</p>
                </div>
              </div>
              <WhatsAppButton
                label="Book This Treatment"
                message={`Hi, I'd like to book ${service.name.toLowerCase()} at ${siteConfig.name}.`}
                className="w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>

      {relatedServices.length > 0 && (
        <SectionContainer variant="tinted">
          <h2 className="text-center text-2xl font-semibold text-text-primary md:text-3xl">
            You Might Also Be Interested In
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedServices.map((related, index) => (
              <AnimatedSection key={related.slug} delay={index * 0.06}>
                <ServiceCard service={related} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </SectionContainer>
      )}
    </>
  );
}
