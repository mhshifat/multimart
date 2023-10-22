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
    return (
      <FilterPopupLayout title={title}>
        <div className="grid grid-cols-2 gap-[20px]">
          {
            options?.map((option) => <Button className="bg-[#f5f5f5] px-[6px] py-[12px] font-Mulish font-[600] text-black capitalize rounded-md" key={option?.title}>{option?.title}</Button>)
          }
        </div>
      </FilterPopupLayout>
    )
}