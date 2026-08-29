import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";

interface LogoProps {
  /**
   * "light" renders the mark for use over dark or transparent surfaces
   * (header at rest over the hero, footer). "dark" renders it for use
   * over light surfaces (scrolled header). The logo artwork itself is a
   * single navy badge that reads fine on both, so this mainly controls
   * the wordmark fallback color.
   */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Site wordmark + logo mark, shared between Header and Footer so the two
 * never visually drift from each other.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.shortName} — go to homepage`}
      className={cn("flex items-center gap-2.5", className)}
    >
      <Image
        src="/images/brand/logo.png"
        alt=""
        width={40}
        height={40}
        className="size-9 shrink-0 rounded-full object-cover md:size-10"
        priority
      />
      <span
        className={cn(
          "font-display text-lg font-semibold leading-tight tracking-tight transition-colors md:text-xl",
          variant === "light"
            ? "text-text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"
            : "text-primary"
        )}
      >
        {siteConfig.shortName}
      </span>
    </Link>
  );
}

