import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

interface WhatsAppButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
  message?: string;
  /**
   * Visual style of the button. Defaults to the recognizable WhatsApp
   * green used everywhere else on the site. "primary" (accent gold) is
   * available for contexts that need the button to read as a general
   * premium CTA rather than a WhatsApp-branded action — e.g. sitting on
   * the dark Doctor section, where the spec calls for an accent-colored
   * button that "stands out strongly against the dark background."
   * "ghost" renders as a plain text link with an icon (e.g. the FAQ
   * section's low-priority "still have questions?" prompt). The wa.me
   * deep-link logic is identical across all three.
   */
  variant?: "whatsapp" | "primary" | "ghost";
}

/**
 * Single source of truth for the wa.me deep link so the phone number and
 * pre-filled message format are never hardcoded in multiple places.
 */
export function WhatsAppButton({
  label = "Chat on WhatsApp",
  message,
  variant = "whatsapp",
  ...props
}: WhatsAppButtonProps) {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappDefaultMessage
  );
  const href = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;

  return (
    <Button asChild variant={variant} {...props}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {label}
      </a>
    </Button>
  );
}
