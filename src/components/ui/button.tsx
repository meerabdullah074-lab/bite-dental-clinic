import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button primitive — ui/ layer (shadcn/ui pattern).
 * Variants map directly to the Button System defined in the design spec:
 * primary (filled), whatsapp, secondary (outline), ghost.
 * No business copy lives here — this is structure/styling only.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-[15px] font-semibold transition-all duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px hover:shadow-md active:translate-y-0",
        whatsapp:
          "bg-whatsapp text-white hover:brightness-95 hover:-translate-y-px hover:shadow-md active:translate-y-0",
        secondary:
          "border-[1.5px] border-primary text-primary bg-transparent hover:bg-primary/8",
        ghost:
          "bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-5 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
