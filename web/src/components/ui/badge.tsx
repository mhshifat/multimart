import { HTMLAttributes, PropsWithChildren } from "react";

type BadgeVariants = "danger" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariants;
}

const variantClasses: Record<BadgeVariants, string> = {
  danger: "bg-[#FC0000] text-white",
  warning: "bg-[#EBC436] text-black",
}

export default function Badge({ children, variant, className }: PropsWithChildren<BadgeProps>) {
  return <span className={`py-[6px] px-[8px] rounded-[7px] ${variantClasses[variant]} ${className}`}>{children}</span>
}