import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  /** Applies the editorial-dark contrast panel treatment (Doctor/Footer). */
  variant?: "default" | "dark" | "tinted";
}

/**
 * Wraps every homepage section with consistent max-width, horizontal
 * padding, and vertical rhythm (space-2xl / space-2xl-mobile) so
 * individual sections don't each reimplement container spacing.
 */
export function SectionContainer({
  children,
  className,
  id,
  variant = "default",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-24",
        variant === "dark" && "bg-editorial-dark text-text-on-dark",
        variant === "tinted" && "bg-primary/[0.04]",
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-20">
        {children}
      </div>
    </section>
  );
}
