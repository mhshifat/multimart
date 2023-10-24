'use client'

import { useEffect, useRef, useState } from "react";
import FilterPopupLayout from "./filter-popup-layout";
import ReactSlider from 'react-slider';

interface PriceFilterPopupViewProps {
  title: string
  options: {min: number, max: number}
  headerOff?: boolean
  className?: string[]
  onChange?: (value: {min: number, max: number})=>void
} 

export default function PriceFilterPopupView({
  title,
  options,
  headerOff,
  className,
  onChange
}: PriceFilterPopupViewProps) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [defaultValues, setDefaultValues] = useState([
    options?.min,
    options?.max,
  ]);
  const comParams = new URLSearchParams(window.location.search).get('minmax');
  const [reRender, setReRender] = useState(0);

  useEffect(() => {
    if (comParams) {
      setDefaultValues(
        decodeURIComponent(comParams)
          ?.split('-')
          .map((item) => parseFloat(item)),
      );
      setReRender((value) => value + 1);
    }
  }, [comParams]);
    return (
      <FilterPopupLayout title={title}>
        <ReactSlider
        key={JSON.stringify(reRender) + 'PriceRangeFilter'}
        className="h-[50px] relative [&_.track-1]:bg-black [&_.track-0]:bg-[#B7B7B7] [&_.track-2]:bg-[#B7B7B7] [&_.track]:h-[3px] [&_.track]:absolute [&_.track]:top-[50%] [&_.track]:-translate-y-[50%]"
        thumbClassName="absolute top-[50%] -translate-y-[50%]"
        trackClassName="track"
        defaultValue={defaultValues}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => (
          <div {...props}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <g filter="url(#filter0_b_4132_17557)">
                <circle cx={12} cy={12} r={12} fill="#FAFAFA" />
                <circle cx={12} cy={12} r="11.5" stroke="black" />
              </g>
              <circle cx={12} cy={12} r={8} fill="black" />
              <defs>
                <filter
                  id="filter0_b_4132_17557"
                  x={-7}
                  y={-7}
                  width={38}
                  height={38}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4132_17557"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4132_17557"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        )}
        pearling
        minDistance={10}
        min={options?.min}
        max={options?.max}
        onChange={(value) => {
          setDefaultValues(value);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            onChange?.({min: 0, max: 1});
            setReRender((value) => value + 1);
          }, 2000);
        }}
      />
      <div className="grid gap-[17px] items-center grid-cols-[1fr_auto_1fr] mt-[17px]">
        <button className="py-[14px] flex items-center justify-center rounded-lg border border-[rgba(0,0,0,0.13)] bg-[#F5F5F5] font-[600]">
          $ {defaultValues[0]}
        </button>
        <p className="text-black font-Open-Sans text-[14px] font-[600] leading-[120%] -tracking-[0.28px] lowercase">
          to
        </p>
        <button className="py-[14px] flex items-center justify-center rounded-lg border border-[rgba(0,0,0,0.13)] bg-[#F5F5F5] font-[600]">
          $ {defaultValues[1]}
        </button>
      </div>
      </FilterPopupLayout>
    )
}