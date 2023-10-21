import { lazy } from "react";

enum CollectionFilters {
    Collections = "collections",
    Sizes = "sizes",
    Prices = "prices",
    Colors = "colors",
    Brands = "brands",
    Occations = "occations",
    Styles = "styles",
    PercentSales = "percent sales"
}

enum CollectionFilterParamKeys {
    Sizes = "sizes",
    Prices = "prices",
    Colors = "colors",
    Brands = "brands",
    Occations = "occations",
    Styles = "styles",
    PercentSales = "percent sales"
}

export const COLLECTIONS_FILTERS = [
    {
        title: CollectionFilters.Collections,
        paramKey: null,
        options: [
            {
                title: "collection 1",
            },
            {
                title: "collection 2",
            },
            {
                title: "collection 3",
            },
            {
                title: "collection 4",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
    {
        title: CollectionFilters.Sizes,
        paramKey: CollectionFilterParamKeys.Sizes,
        options: [
            {
                title: "10",
            },
            {
                title: "20",
            },
            {
                title: "25",
            },
            {
                title: "30",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
    {
        title: CollectionFilters.Prices,
        paramKey: CollectionFilterParamKeys.Prices,
        options: [
            {
                title: 100,
            },
            {
                title: 200,
            },
            {
                title: 300,
            },
            {
                title: 400,
            },
        ],
        popup: lazy(()=>import('./price-filter-popup-view'))
    },
    {
        title: CollectionFilters.Colors,
        paramKey: CollectionFilterParamKeys.Colors,
        options: [
            {
                title: "black",
            },
            {
                title: "white",
            },
            {
                title: "red",
            },
            {
                title: "blue",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
    {
        title: CollectionFilters.Brands,
        paramKey: CollectionFilterParamKeys.Brands,
        options: [
            {
                title: "addidas",
            },
            {
                title: "white",
            },
            {
                title: "red",
            },
            {
                title: "blue",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
    {
        title: CollectionFilters.Occations,
        paramKey: CollectionFilterParamKeys.Occations,
        options: [
            {
                title: "casual",
            },
            {
                title: "formal",
            },
            {
                title: "sport",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
    {
        title: CollectionFilters.PercentSales,
        paramKey: CollectionFilterParamKeys.PercentSales,
        options: [
            {
                title: "above 50%",
            },
            {
                title: "30% - 50%",
            },
            {
                title: "60% - 80%",
            },
            {
                title: "under 10%",
            },
        ],
        popup: lazy(()=>import('./grid-list-popup-view'))
    },
]