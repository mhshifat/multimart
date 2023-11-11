"use client";
import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import { useTheme } from "@/hooks";
import { clsx } from "@/lib/utils";

export default function CollectionPage() {
  const { theme } = useTheme();

  return (
    <div className={clsx("w-full", {
      "bg-white": theme === 'light',
      "bg-[#010409]": theme === 'dark',
    })}>
      <Container>
        <CollectionProducts />
      </Container>
    </div>
  )
}
