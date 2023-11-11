"use client";
import { ProductCard } from "@/components/shared";
import { useTheme } from "@/hooks";

export default function CollectionProducts() {
  const { changeTheme } = useTheme();

  return (
    <>
      <div>
        <button className="text-[2.4rem]" onClick={() => changeTheme("light")}>Light</button>
        <button className="text-[2.4rem]" onClick={() => changeTheme("dark")}>Dark</button>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[30px] gap-y-[80px]">
        {new Array(50).fill("").map((_, idx) => (
          <ProductCard
            key={"ProductCard" + idx}
          />
        ))}
      </div>
    </>
  )
}