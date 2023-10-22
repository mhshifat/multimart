import { ProductCard } from "@/components/shared";

export default function CollectionProducts() {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[30px] gap-y-[80px] col-a">
      {new Array(50).fill("").map((_, idx) => (
        <ProductCard
          key={"ProductCard" + idx}
        />
      ))}
    </div>
  )
}