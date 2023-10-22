import { lazy } from "react";

export enum CollectionFiltersEnum {
    Collections = "collections",
    Sizes = "sizes",
    Prices = "prices",
    Colors = "colors",
    Brands = "brands",
    Occations = "occations",
    Styles = "styles",
    PercentSales = "percent sales"
}

export enum CollectionFilterParamKeys {
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
        title: CollectionFiltersEnum.Collections,
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
        title: CollectionFiltersEnum.Sizes,
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
        title: CollectionFiltersEnum.Prices,
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
        title: CollectionFiltersEnum.Colors,
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
        title: CollectionFiltersEnum.Brands,
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
        title: CollectionFiltersEnum.Occations,
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
        title: CollectionFiltersEnum.PercentSales,
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