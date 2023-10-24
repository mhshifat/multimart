import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import CollectionFilters from "./collection-filter"
import GridListPopupView from "./grid-list-popup-view"
import PriceFilterPopupView from "./price-filter-popup-view";

export default function CollectionPage() {
  return (
    <div className="w-full">
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
        <CollectionProducts />
      </Container>
    </div>
  )
}
