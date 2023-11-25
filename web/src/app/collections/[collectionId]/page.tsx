"use client";
import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import { cn } from "@/lib/utils";

export default function CollectionPage() {
  return (
    <div className={cn("bg-background text-foreground w-full")}>
      <Container>
        <CollectionProducts />
      </Container>
    </div>
  )
}
