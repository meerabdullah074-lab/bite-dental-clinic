"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/**
 * Tabs primitive — ui/ layer. Radix-based so keyboard navigation
 * (arrow keys between tabs, correct roving tabindex) and aria-selected
 * state are correct by default. Used for the Before & After gallery's
 * treatment-type filter row.
 */
function Tabs({ ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root {...props} />;
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex w-full max-w-full items-center gap-2 overflow-x-auto",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium text-text-secondary transition-colors",
        "hover:text-primary",
        "data-[state=active]:bg-primary/8 data-[state=active]:font-semibold data-[state=active]:text-primary",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content className={cn(className)} {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
