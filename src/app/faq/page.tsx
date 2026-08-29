import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteConfig.name}`,
  description: `Answers to common questions about visiting ${siteConfig.name} — pain, pricing, hygiene, insurance, and what to expect at your first appointment.`,
};

/**
 * FAQ page — reuses the homepage's FAQ section component directly
 * (heading, accordion, JSON-LD structured data, and WhatsApp CTA all
 * already self-contained there).
 */
export default function FAQPage() {
  return <FAQ />;
}
