"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCases } from "@/lib/site-data";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BeforeAfterCard } from "@/components/shared/BeforeAfterCard";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GalleryFilter } from "@/types";

const FILTERS: { value: GalleryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "whitening", label: "Whitening" },
  { value: "veneers", label: "Veneers" },
  { value: "implants", label: "Implants" },
  { value: "orthodontics", label: "Orthodontics" },
];

/**
 * Before & After Gallery — visual, undeniable proof of results.
 * Filterable by treatment type; switching filters cross-fades the grid
 * (250ms) rather than an abrupt swap. See UI Specification Section 7.
 */
export function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");

  const visibleCases =
    activeFilter === "all"
      ? galleryCases
      : galleryCases.filter((c) => c.filter === activeFilter);

  return (
    <SectionContainer id="before-after">
      <div className="mx-auto max-w-[600px] text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          Real Results
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl">
          See the Transformation
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          Drag the slider on any case to compare before and after — filter
          by the treatment you&rsquo;re curious about.
        </p>
      </div>

      <Tabs
        value={activeFilter}
        onValueChange={(value) => setActiveFilter(value as GalleryFilter)}
        className="mt-10 flex flex-col items-center"
      >
        <TabsList aria-label="Filter results by treatment type">
          {FILTERS.map((filter) => (
            <TabsTrigger key={filter.value} value={filter.value}>
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-10 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleCases.length > 0 ? (
              visibleCases.map((galleryCase, index) => (
                <AnimatedSection key={galleryCase.id} delay={index * 0.06}>
                  <BeforeAfterCard galleryCase={galleryCase} />
                </AnimatedSection>
              ))
            ) : (
              <p className="col-span-full py-12 text-center text-text-secondary">
                No cases to show for this treatment yet — check back soon.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center">
        <WhatsAppButton label="See Your Transformation — Book a Consultation" />
      </div>
    </SectionContainer>
  );
}
