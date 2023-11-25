"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductOne from '../../../assets/product-1.png';
import ProductTwo from '../../../assets/product-2.png';
import ProductActions from "./product-actions";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function ProductCard() {
  const [coverImage, setCoverImage] = useState<string>(ProductOne as unknown as string);
  
  const percentSale = 20;
  const isPercentSaleType = percentSale > 0;

  return (
    <Link href='' className={cn("bg-background text-foreground w-full")}>
      <div className={cn("bg-border text-border-foreground relative flex aspect-[5/6] flex-col justify-end md:rounded-[1.4rem] md:p-[2rem]")}>
        <Badge variant="danger" size="small" className="font-Mulish absolute left-[1rem] top-[1rem] text-[clamp(1rem,2vw+.5rem,1.4rem)] font-[700] leading-[140%] tracking-[0.2px] md:left-[2.2rem] md:top-[2.2rem]">-{percentSale}%</Badge>
        <ProductActions />
        <Image
          src={coverImage!}
          alt="product image"
          className="product-image-shadow h-full w-full object-contain object-bottom"
        />
      </div>

      <div className="mb-[1.8rem] mt-[1rem] flex flex-wrap items-center gap-[1rem] md:mb-[2.8rem] md:mt-[1.8rem]" onMouseLeave={() => setCoverImage(ProductOne as unknown as string)}>
        {new Array(4).fill("").map((_, idx) => (
          <span key={idx} onMouseOver={() => setCoverImage(ProductTwo as unknown as string)} className={cn("border-border relative flex h-[5.1rem] w-[5.1rem] cursor-pointer items-end justify-center overflow-hidden rounded-[.6rem] border")}>
            <Image
              src={ProductTwo}
              alt="product image"
              className="h-full w-full object-contain object-bottom"
            />
            {idx === 3 && (
              <p className={cn("text-backdrop-foreground bg-backdrop font-Mulish absolute inset-0 flex items-center justify-center p-1 text-[clamp(1.6rem,2vw+.5rem,1.7rem)] font-[600] uppercase leading-[120%] tracking-[-0.476px]")}>+3</p>
            )}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-[.8rem] md:gap-[1rem]">
        <h4 className={cn("text-foreground font-Mulish text-[clamp(1.4rem,2vw+.5rem,2rem)] font-[600] uppercase leading-[120%] tracking-[-0.48px]")}>NIKE</h4>
        <h3 className={cn("text-foreground font-OpenSans text-[clamp(1.2rem,2vw+.5rem,1.8rem)] font-[300] uppercase leading-[120%] tracking-[-0.4px]")}>CTAS LUGGED HI W</h3>
        {isPercentSaleType ? (
          <p className="font-Mulish text-[clamp(1.4rem,2vw+.5rem,2rem)] font-[600] leading-[120%] tracking-[-0.48px]"><span className="text-destructive">$211.49</span>&nbsp;&nbsp;<span className={cn("text-foreground line-through")}>$234.99</span></p>
        ) : (
          <p className={cn("text-foreground font-Mulish text-[clamp(1.4rem,2vw+.5rem,2rem)] font-[600] leading-[120%] tracking-[-0.48px]")}>$70.00</p>
        )}
      </div>
    </Link>
  )
}