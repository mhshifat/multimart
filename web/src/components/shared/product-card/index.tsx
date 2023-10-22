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
      <div className="bg-[#F5F5F5] md:p-[20px] md:rounded-[14px] aspect-[5/6] flex flex-col justify-end relative">
        <Badge variant="danger" className="absolute top-[10px] left-[10px] md:top-[22px] md:left-[22px] font-Mulish text-[14px] font-[700] leading-[140%] tracking-[0.2px]">-{percentSale}%</Badge>
        <ProductActions />
        <Image
          src={coverImage!}
          alt="product image"
          className="w-full h-full object-contain object-bottom product-image-shadow"
        />
      </div>

      <div className="flex-wrap mt-[10px] mb-[18px] md:mt-[18px] md:mb-[28px] flex items-center gap-[10px]" onMouseLeave={() => setCoverImage(ProductOne as unknown as string)}>
        {new Array(4).fill("").map((_, idx) => (
          <span key={idx} onMouseOver={() => setCoverImage(ProductTwo as unknown as string)} className="cursor-pointer overflow-hidden relative w-[51px] h-[51px] flex items-end justify-center rounded-[6.806px] border border-[#D9D9D9]">
            <Image
              src={ProductTwo}
              alt="product image"
              className="w-full h-full object-contain object-bottom"
            />
            {idx === 3 && (
              <p className="absolute inset-0 bg-backdrop flex items-center justify-center p-1 text-[#F5F5F5] font-Mulish text-[23.823px] font-[600] leading-[120%] -tracking-[0.476px] uppercase">+3</p>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-[8px] md:gap-[13px]">
        <h4 className="text-black font-Mulish text-[clamp(14px,2.5vw,24px)] font-[600] leading-[120%] -tracking-[0.48px] uppercase">NIKE</h4>
        <h3 className="text-black font-OpenSans text-[clamp(14px,2.5vw,20px)] font-[300] leading-[120%] -tracking-[0.4px] uppercase">CTAS LUGGED HI W</h3>
        {isPercentSaleType ? (
          <p className="font-Mulish text-[clamp(14px,2.5vw,24px)] font-[600] leading-[120%] -tracking-[0.48px]"><span className="text-[#FC0000]">$211.49</span>&nbsp;&nbsp;<span className="text-[#505050] line-through">$234.99</span></p>
        ) : (
          <p className="text-black font-Mulish text-[clamp(14px,2.5vw,24px)] font-[600] leading-[120%] -tracking-[0.48px]">$70.00</p>
        )}
      </div>
    </Link>
  )
}