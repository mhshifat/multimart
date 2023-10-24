import { Button } from "@/components/ui";
import FilterPopupLayout from "./filter-popup-layout";

interface GridListPopupViewProps {
  title: string
  options: {
    title: string
    value: string
  }[]
}

export default function GridListPopupView({title, options}: GridListPopupViewProps) {
  const isActive = false;
    return (
      <FilterPopupLayout title={title}>
        <div className="grid grid-cols-2 gap-[12px]">
          {
            options?.map((option) => <Button className={`border ${isActive ? 'border-black font-[600]' : 'border-transparent font-[400]'} leading-[120%] -tracking[0.28] bg-[#f5f5f5] px-[19px] py-[14px] font-OpenSans text-[14px] text-black capitalize rounded-lg`} key={option?.title}>{option?.title}</Button>)
          }
        </div>
      </FilterPopupLayout>
    )
}