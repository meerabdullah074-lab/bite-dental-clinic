import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";

export const metadata: Metadata = {
  title: `Before & After Gallery | ${siteConfig.name}`,
  description: `Real treatment results from ${siteConfig.name} — browse before-and-after cases by treatment type, from whitening to full smile makeovers.`,
};

/**
 * Gallery page — the homepage's BeforeAfterGallery section is already a
 * complete, self-contained page in miniature (heading, filter tabs,
 * grid, CTA), so this route reuses it directly rather than rebuilding
 * an equivalent layout.
 */
export default function GalleryPage() {
  return <BeforeAfterGallery />;
}
