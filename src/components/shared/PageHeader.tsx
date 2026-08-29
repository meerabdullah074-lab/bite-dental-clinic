import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Consistent heading block for interior (non-homepage) pages: eyebrow
 * label, H1, optional description — centered, shared max-width. Kept
 * content-only (no SectionContainer wrapper) so each page controls its
 * own container spacing/variant around it.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-[760px] text-center", className)}>
      {eyebrow && (
        <span className="text-[13px] font-semibold uppercase tracking-[1px] text-accent">
          {eyebrow}
        </span>
      )}
      <h1
        className={cn(
          "text-4xl font-semibold text-text-primary md:text-5xl",
          eyebrow && "mt-4"
        )}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
