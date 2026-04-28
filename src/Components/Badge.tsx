import type { HTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "info"
  | "warning"
  | "error";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-content border border-transparent",
  secondary: "bg-secondary text-secondary-content border border-transparent",
  outline: "bg-transparent text-base-content border border-base-content/40",
  success: "bg-success text-success-content border border-transparent",
  info: "bg-info text-info-content border border-transparent",
  warning: "bg-warning text-warning-content border border-transparent",
  error: "bg-error text-error-content border border-transparent",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
};

export function Badge({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Badge;
