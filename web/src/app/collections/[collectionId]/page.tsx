"use client";
import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import { cn } from "@/lib/utils";
import CollectionFilters from "./collection-filter"
import GridListPopupView from "./grid-list-popup-view"
import PriceFilterPopupView from "./price-filter-popup-view";
import { Checkbox } from "@/components/ui";
import SortFilterPopup from "./sort-filter-popup";
export default function CollectionPage() {
  return (
    <div className={cn("bg-background text-foreground w-full")}>
      <Container>
      <CollectionFilters />
      <GridListPopupView title="Mens" options={[
        {
          title: "title 1", 
          value: "title 1"
        },
        {
          title: "title 1", 
          value: "title 1"
        },
        {
          title: "title 1", 
          value: "title 1"
        },
        {
          title: "title 1", 
          value: "title 1"
        },
      ]}/>
      <PriceFilterPopupView options={{min: 0, max: 200}} title="price"/>
      <Checkbox>
      </Checkbox>
      <SortFilterPopup onChange={(value)=>console.log(value)} />
        <CollectionProducts />
      </Container>
    </div>
  )
}
