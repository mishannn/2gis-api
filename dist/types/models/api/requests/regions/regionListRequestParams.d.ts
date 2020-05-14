export declare enum RegionField {
    NameGrammaticalCases = "items.name_grammatical_cases",
    Domain = "items.domain",
    Locales = "items.locales",
    TimeZone = "items.time_zone",
    Bounds = "items.bounds",
    Statistics = "items.statistics",
    Locale = "items.locale",
    Settlements = "items.settlements",
    Satellites = "items.satellites",
    Code = "items.code",
    UriCode = "items.uri_code",
    UriAliases = "items.uri_aliases",
    AllowForIndexing = "items.allow_for_indexing",
    CountryCode = "items.country_code",
    DefaultPos = "items.default_pos",
    ZoomLevel = "items.zoom_level",
    Flags = "items.flags",
    Seo = "items.seo",
    Hidden = "items.hidden",
    WeightsTime = "items.weights_time"
}
export declare enum RegionType {
    Region = "region",
    Segment = "segment",
    Universe = "universe"
}
export interface RegionListRequestParams {
    page?: number;
    page_size?: number;
    locale?: string;
    locale_filter?: string[];
    country_code_filter?: string;
    format?: string;
    callback?: string;
    fields?: RegionField[];
    type?: RegionType;
    show_hidden?: boolean;
}
