"use client";
import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import { cn } from "@/lib/utils";
import CollectionFilters from "./collection-filter"
import GridListPopupView from "./grid-list-popup-view"
import PriceFilterPopupView from "./price-filter-popup-view";
import { Checkbox, Dialog } from "@/components/ui";
import SortFilterPopup from "./sort-filter-popup";
export default function CollectionPage() {
  const isMobile = false;
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
      <Dialog open={false} onClose={()=>console.log("nice")}>
        {({ Content, Close }) => (
          <Content className={`${isMobile ? "left-0 bottom-0" : "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"} flex flex-col justify-center items-center gap-[30px]`}>
            {isMobile && (
              <Close className='w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path d="M2 20L20 2" stroke="black" strokeWidth={2} strokeLinecap="square" />
                  <path d="M20 20L2 2" stroke="black" strokeWidth={2} strokeLinecap="square" />
                </svg>
              </Close>
            )}
            <p>Yahooo!</p>
          </Content>
        )}
      </Dialog>
    </div>
  )
}
