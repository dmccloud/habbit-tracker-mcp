import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-page-ink text-page-bg shadow-sm hover:bg-page-ink/85",
  secondary: "bg-warm-tan text-page-ink shadow-sm hover:bg-warm-tan/80",
  outline:
    "border border-page-ink/20 bg-surface text-page-ink hover:bg-page-bg",
  ghost: "bg-transparent text-page-ink hover:bg-page-ink/8",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-[0.95rem]",
  sm: "h-10 px-4.5 text-sm",
  lg: "h-12 px-10 text-base",
};

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-page-ink/20 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export { Button };
