import { Phone } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

interface CallButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function CallButton({
  label = "Call Now",
  variant = "secondary",
  ...props
}: CallButtonProps) {
  return (
    <Button asChild variant={variant} {...props}>
      <a href={`tel:${siteConfig.contact.phone}`}>
        <Phone />
        {label}
      </a>
    </Button>
  );
}
