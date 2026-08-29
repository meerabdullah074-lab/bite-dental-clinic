import { faqs } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * FAQ — final objection-handling layer immediately before the decision
 * point. A clean, borderless divided list (not boxed cards) reads as
 * more premium than a stack of FAQ cards, per UI Specification
 * Section 10. Also emits FAQPage JSON-LD structured data so these Q&As
 * are eligible for rich results in search, per the SEO Architecture doc.
 */
export function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SectionContainer id="faq">
      {/*
        Deliberately a plain <script> tag, not next/script's <Script>
        component. next/script's default strategy injects client-side
        after hydration, so the JSON-LD would be absent from the raw
        server-rendered HTML — some crawlers and rich-result parsers read
        that raw response rather than executing JS first. A native tag
        rendered directly by this Server Component is present in the
        initial HTML unconditionally.
      */}
      <script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Have Questions?
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <AnimatedSection className="mx-auto mt-12 max-w-[760px]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>

      <div className="mt-10 flex justify-center">
        <WhatsAppButton
          variant="ghost"
          label="Still have questions? Chat with us"
        />
      </div>
    </SectionContainer>
  );
}
