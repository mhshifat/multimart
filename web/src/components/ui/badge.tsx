import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, PropsWithChildren } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof variantClasses> {}

const variantClasses = cva("rounded-lg", {
  variants: {
    variant: {
      default: "bg-background",
      danger: "bg-destructive",
    },
    size: {
      default: "p-0",
      small: "py-[.5rem] px-[1rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export default function Badge({ children, variant, size, className }: PropsWithChildren<BadgeProps>) {
  return <span className={cn(variantClasses({ variant, size, className }))}>{children}</span>
}