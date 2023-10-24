import { Container } from "@/components/shared";
import CollectionProducts from "./collections-products";
import CollectionFilters from "./collection-filter"
import GridListPopupView from "./grid-list-popup-view"

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
        <CollectionProducts />
      </Container>
    </div>
  )
}
