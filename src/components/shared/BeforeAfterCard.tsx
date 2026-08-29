import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryCase } from "@/types";

interface BeforeAfterCardProps {
  galleryCase: GalleryCase;
  className?: string;
}

/**
 * Static before/after result card. Each `afterImage` here is already a
 * combined before/after collage supplied by the clinic, so this simply
 * displays the image full-bleed with its label underneath — no drag
 * slider or comparison interaction.
 */
export function BeforeAfterCard({ galleryCase, className }: BeforeAfterCardProps) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface shadow-sm">
        <Image
          src={galleryCase.afterImage}
          alt={galleryCase.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <figcaption className="mt-3 text-[15px] font-medium text-text-secondary">
        {galleryCase.label}
      </figcaption>
    </figure>
  );
}
