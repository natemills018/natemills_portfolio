import type { HTMLAttributes, ReactNode } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", children, ...rest }: DivProps) {
  return (
    <div
      className={`bg-base-200 rounded-2xl shadow-xl overflow-hidden ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({ className = "", children, ...rest }: DivProps) {
  return (
    <div className={`p-6 flex flex-col gap-2 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement> & { children?: ReactNode }) {
  return (
    <h3
      className={`flex items-center gap-2 text-xl font-bold text-base-content ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function CardActions({ className = "", children, ...rest }: DivProps) {
  return (
    <div className={`flex items-center justify-end gap-2 mt-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Card;
