import CollectionFilters from "./collection-filter"
import GridListPopupView from "./grid-list-popup-view"

export default function CollectionPage() {
  return (
    <div>
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
    </div>
  )
}
