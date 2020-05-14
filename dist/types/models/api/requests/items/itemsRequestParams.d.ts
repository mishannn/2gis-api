import Locale from 'src/models/dgis/Locale';
export declare enum ItemField {
    Stat = "items.stat",
    RegionId = "items.region_id",
    Point = "items.point",
    AdmDiv = "items.adm_div",
    Dates = "items.dates",
    Photos = "items.photos",
    SeeAlso = "items.see_also",
    Flags = "items.flags",
    Locale = "items.locale",
    Address = "items.address",
    Schedule = "items.schedule",
    NameEx = "items.name_ex",
    Reviews = "items.reviews",
    Options = "items.ads.options",
    IsConditional = "items.address.is_conditional",
    Links = "items.links",
    UpdatedAt = "items.dates.updated_at",
    DeletedAt = "items.dates.deleted_at",
    IsRoutingAvailable = "items.is_routing_available",
    StopFactors = "items.stop_factors",
    Group = "items.group",
    ExternalContent = "items.external_content",
    FullAddressName = "items.full_address_name",
    ContactGroups = "items.contact_groups",
    Rubrics = "items.rubrics",
    AttributeGroups = "items.attribute_groups",
    RegBcUrl = "items.reg_bc_url",
    Floors = "items.floors",
    Attraction = "items.attraction",
    Statistics = "items.statistics",
    LevelCount = "items.level_count",
    Capacity = "items.capacity",
    Description = "items.description",
    Context = "items.context",
    AccessName = "items.access_name",
    IsPaid = "items.is_paid",
    Access = "items.access",
    AccessComment = "items.access_comment",
    Selection = "items.geometry.selection",
    Hover = "items.geometry.hover",
    Style = "items.geometry.style",
    Centroid = "items.geometry.centroid",
    IsMainInGroup = "items.is_main_in_group",
    IsPromoted = "items.is_promoted",
    HasGoods = "items.has_goods",
    HasPinnedGoods = "items.has_pinned_goods",
    HasRealty = "items.has_realty",
    HasPayments = "items.has_payments",
    SearchAttributes = "search_attributes",
    Filters = "filters",
    Widgets = "widgets",
    ContextRubrics = "context_rubrics",
    RequestType = "request_type",
    Cb = "cb",
    Dym = "dym",
    Hash = "hash"
}
export declare enum ItemType {
    AdmDiv = "adm_div",
    AdmDivCountry = "adm_div.country",
    AdmDivRegion = "adm_div.region",
    AdmDivCity = "adm_div.city",
    AdmDivDistrict = "adm_div.district",
    AdmDivDistrictArea = "adm_div.district_area",
    AdmDivDivision = "adm_div.division",
    AdmDivLivingArea = "adm_div.living_area",
    AdmDivPlace = "adm_div.place",
    AdmDivSettlement = "adm_div.settlement",
    Attraction = "attraction",
    Building = "building",
    Crossroad = "crossroad",
    FereignCity = "foreign_city",
    Gate = "gate",
    Parking = "parking",
    Road = "road",
    Street = "street",
    Branch = "branch",
    Route = "route",
    Station = "station",
    StationMetro = "station.metro",
    Coordinates = "coordinates"
}
export declare enum ItemSearchType {
    Discovery = "discovery",
    OneBranch = "one_branch",
    Indoor = "indoor",
    Ads = "ads",
    DiscoveryPartialSearcher = "discovery_partial_searcher",
    DiscoveryPartialSearcherStrict = "discovery_partial_searcher_strict"
}
export declare enum ItemSortType {
    Relevance = "relevance",
    Distance = "distance",
    Rating = "rating",
    FlampRating = "flamp_rating",
    GeneralRating = "general_rating",
    DistanceWithoutAds = "distance_without_ads",
    CreationTime = "creation_time",
    OpenedTime = "opened_time"
}
export interface ItemsRequestParams {
    locale?: Locale;
    q?: string;
    fields?: ItemField[];
    type?: ItemType[];
    search_type?: ItemSearchType;
    rubric_id?: number[];
    org_id?: number;
    is_reviewable_on_flamp?: boolean;
    has_photos?: boolean;
    has_rating?: boolean;
    has_reviews?: boolean;
    has_reviews_on_flamp?: boolean;
    has_site?: boolean;
    work_time?: string;
    opened_after_date?: string;
    has_itin?: boolean;
    has_trade_license?: boolean;
    allow_deleted?: boolean;
    sort?: string;
    sort_point?: string;
    region_id?: number;
    district_id?: number[];
    building_id?: number[];
    city_id?: number;
    point1?: string;
    point2?: string;
    point?: string;
    radius?: number;
    polygon?: string;
    viewpoint1?: string;
    viewpoint2?: string;
    is_viewport_change?: boolean;
    page?: number;
    page_size?: number;
}
