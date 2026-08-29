import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * Icon + title + description, used for objection-handling / benefit
 * lists. Deliberately has no icon container circle or card border/shadow
 * — this visually differentiates it from ServiceCard so the two icon
 * treatments on the homepage don't blur together (per UI Spec Section
 * 5). Centered, icon-top layout on mobile; icon-left, text-right row on
 * tablet/desktop. A plain Server Component (no interactivity), so it
 * can be reused anywhere a benefit/feature needs listing without
 * pulling in any client-side cost.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-4 md:text-left",
        className
      )}
    >
      <Icon
        className="size-10 shrink-0 text-primary"
        strokeWidth={2}
        aria-hidden="true"
      />
      <div>
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
