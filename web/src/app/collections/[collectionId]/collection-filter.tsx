"use client";

import { Bubble, Button } from "@/components/ui";
import useCollectionFilters from "./use-collection-filters";
import { COLLECTIONS_FILTERS, CollectionFiltersEnum } from "./constants";
import GridListPopupView from "./grid-list-popup-view";

export default function CollectionFilters() {
  const { filters } = useCollectionFilters();

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-[30px] flex-wrap">
        {filters?.map((filter) => (
          <Bubble key={filter?.title} count={()=>0} hideOnZero={filter?.title === CollectionFiltersEnum.Collections}>
              <Button
            className="bg-white flex items-center whitespace-nowrap gap-[10px]"
            
            onClick={() => console.log("clicked")}
          >
            <span className="font-Mulish text-[16px] text-black font-[700] uppercase leading-[120%] -tracking-[0.32px] text-center whitespace-nowrap">
              {filter?.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              width={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <ellipse
                cx="12.003"
                cy={12}
                rx={12}
                ry="12.0009"
                transform="rotate(90 12.003 12)"
                fill="#F5F5F5"
              />
              <path
                d="M12.5039 7.2002C12.5039 6.92405 12.28 6.7002 12.0039 6.7002C11.7278 6.7002 11.5039 6.92405 11.5039 7.2002L12.5039 7.2002ZM11.6504 16.3537C11.8456 16.549 12.1622 16.549 12.3575 16.3537L15.5394 13.1718C15.7347 12.9765 15.7347 12.6599 15.5394 12.4647C15.3442 12.2694 15.0276 12.2694 14.8323 12.4647L12.0039 15.2931L9.17548 12.4647C8.98022 12.2694 8.66363 12.2694 8.46837 12.4647C8.27311 12.6599 8.27311 12.9765 8.46837 13.1718L11.6504 16.3537ZM11.5039 7.2002L11.5039 16.0002L12.5039 16.0002L12.5039 7.2002L11.5039 7.2002Z"
                fill="black"
              />
            </svg>
          </Button>
          </Bubble>
          
        ))}
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#f5f5f5] flex items-center justify-between whitespace-nowrap gap-[10px] py-[5px] px-[15px] rounded-[8px] min-w-[192px]">
            <p className="text-black text-center font-Mulish text-[18px] font-[300] leading-[120%] -tracking-[0.36px] capitalize">
              collection:
              <span className="font-[600]">
                {" women's footwear"}
              </span>
            </p>
            <Button className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M13.0352 7.74268L7.33242 13.4454"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.33203 7.74268L13.0348 13.4454"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

          </span>
          <Button className="capitalize ml-[5px] underline underline-offset-2 text-black font-Mulish text-[16px] font-[600] leading-[120%] -tracking-[0.32px]">clear all filters</Button>
        </div>
      </div>
      <div className="flex items-center gap-[7px]">
        <span className="font-Mulish text-[16px] text-black font-[700] uppercase leading-[120%] -tracking-[0.32px] text-center whitespace-nowrap">
          SORT BY
        </span>
        <Button className="bg-[#f5f5f5] flex items-center justify-between whitespace-nowrap gap-[10px] py-[11px] pl-[14px] pr-[11px] rounded-[8px] min-w-[192px]" onClick={() => console.log("clicked")}>
          <span className="font-Mulish text-[14px] text-black font-[400] uppercase leading-[120%] -tracking-[0.28px] text-left whitespace-nowrap">
            best selling
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <ellipse
              cx="12.0009"
              cy={12}
              rx={12}
              ry="12.0009"
              transform="rotate(-90 12.0009 12)"
              fill="white"
            />
            <path
              d="M11.5 16.7969C11.5 17.073 11.7239 17.2969 12 17.2969C12.2761 17.2969 12.5 17.073 12.5 16.7969L11.5 16.7969ZM12.3536 7.64332C12.1583 7.44806 11.8417 7.44806 11.6464 7.64332L8.46447 10.8253C8.2692 11.0206 8.2692 11.3371 8.46447 11.5324C8.65973 11.7277 8.97631 11.7277 9.17157 11.5324L12 8.70398L14.8284 11.5324C15.0237 11.7277 15.3403 11.7277 15.5355 11.5324C15.7308 11.3371 15.7308 11.0206 15.5355 10.8253L12.3536 7.64332ZM12.5 16.7969L12.5 7.99687L11.5 7.99687L11.5 16.7969L12.5 16.7969Z"
              fill="black"
            />
          </svg>

        </Button>
      </div>
    </div>
  );
}
