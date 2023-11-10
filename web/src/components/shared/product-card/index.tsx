"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductOne from '../../../assets/product-1.png';
import ProductTwo from '../../../assets/product-2.png';
import ProductActions from "./product-actions";
import { Badge } from "@/components/ui";

export default function ProductCard() {
  const percentSale = 20;
  const isPercentSaleType = percentSale > 0;
  const [coverImage, setCoverImage] = useState<string>(ProductOne as unknown as string);

  return (
    <Link href='' className="w-full">
      <div className="bg-[#F5F5F5] md:p-[2rem] md:rounded-[1.4rem] aspect-[5/6] flex flex-col justify-end relative">
        <Badge variant="danger" className="absolute top-[1rem] left-[1rem] md:top-[2.2rem] md:left-[2.2rem] font-Mulish text-[clamp(1.4rem,2vw+.5rem,1.6rem)] font-[700] leading-[140%] tracking-[0.2px]">-{percentSale}%</Badge>
        <ProductActions />
        <Image
          src={coverImage!}
          alt="product image"
          className="w-full h-full object-contain object-bottom product-image-shadow"
        />
      </div>

      <div className="flex-wrap mt-[1rem] mb-[1.8rem] md:mt-[1.8rem] md:mb-[2.8rem] flex items-center gap-[1rem]" onMouseLeave={() => setCoverImage(ProductOne as unknown as string)}>
        {new Array(4).fill("").map((_, idx) => (
          <span key={idx} onMouseOver={() => setCoverImage(ProductTwo as unknown as string)} className="cursor-pointer overflow-hidden relative w-[5.1rem] h-[5.1rem] flex items-end justify-center rounded-[.6rem] border border-[#D9D9D9]">
            <Image
              src={ProductTwo}
              alt="product image"
              className="w-full h-full object-contain object-bottom"
            />
            {idx === 3 && (
              <p className="absolute inset-0 bg-backdrop flex items-center justify-center p-1 text-[#F5F5F5] font-Mulish text-[clamp(1.6rem,2vw+.5rem,1.7rem)] font-[600] leading-[120%] -tracking-[0.476px] uppercase">+3</p>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-[.8rem] md:gap-[1.3rem]">
        <h4 className="text-black font-Mulish text-[clamp(1.6rem,2vw+.5rem,2.4rem)] font-[600] leading-[120%] -tracking-[0.48px] uppercase">NIKE</h4>
        <h3 className="text-black font-OpenSans text-[clamp(1.6rem,2vw+.5rem,2rem)] font-[300] leading-[120%] -tracking-[0.4px] uppercase">CTAS LUGGED HI W</h3>
        {isPercentSaleType ? (
          <p className="font-Mulish text-[clamp(1.6rem,2vw+.5rem,2.4rem)] font-[600] leading-[120%] -tracking-[0.48px]"><span className="text-[#FC0000]">$211.49</span>&nbsp;&nbsp;<span className="text-[#505050] line-through">$234.99</span></p>
        ) : (
          <p className="text-black font-Mulish text-[clamp(1.6rem,2vw+.5rem,2.4rem)] font-[600] leading-[120%] -tracking-[0.48px]">$70.00</p>
        )}
      </div>
    </Link>
  )
}