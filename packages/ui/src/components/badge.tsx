import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default: "bg-page-ink text-page-bg",
  secondary: "border border-page-ink/12 bg-page-bg text-page-ink",
  outline: "border border-page-ink/20 bg-surface text-page-ink",
};

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: BadgeVariant;
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs leading-none font-medium tracking-wide",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
