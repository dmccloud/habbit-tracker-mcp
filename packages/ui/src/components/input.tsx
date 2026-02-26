import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border border-page-ink/15 bg-surface px-4 text-base text-page-ink outline-none transition-colors placeholder:text-page-ink/40 focus-visible:border-page-ink/30 focus-visible:ring-2 focus-visible:ring-page-ink/8 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
