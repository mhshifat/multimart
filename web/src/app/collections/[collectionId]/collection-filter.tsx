import useCollectionFilters from "./use-collection-filters"

export default function CollectionFilters() {
  const {filters} = useCollectionFilters();

  return (
    <div>
     {
      filters?.map(filter => <p key={filter?.title}>{filter?.title}</p>)
     }
    </div>
  )
}