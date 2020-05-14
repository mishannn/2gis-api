!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):"object"==typeof exports?exports.DGApi=t(require("axios")):e.DGApi=t(e.axios)}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),s=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||t.hasOwnProperty(i)||r(t,e,i)},n=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))((function(s,n){function o(e){try{_(r.next(e))}catch(e){n(e)}}function a(e){try{_(r.throw(e))}catch(e){n(e)}}function _(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}_((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Client=void 0;const a=o(i(1)),_=o(i(2)),c=i(3);t.Client=class{constructor(e){this.apiKey=e.apiKey,this.ridKey=e.ridKey,this.appVersion=e.appVersion,this.axios=a.default.create()}getItems(e){return n(this,void 0,void 0,(function*(){return this.sendGetRequest(c.SEARCH_FIRM_URL,e)}))}getMarkers(e){return n(this,void 0,void 0,(function*(){return this.sendGetRequest(c.SEARCH_QUERY_MARKERS_URL,e)}))}getMarkersClustered(e){return n(this,void 0,void 0,(function*(){return this.sendGetRequest(c.SEARCH_CLUSTERED_MARKERS_URL,e)}))}sendGetRequest(e,t){return n(this,void 0,void 0,(function*(){const i=Object.keys(t).reduce((e,i)=>(e[i]=t[i].toString(),e),{}),r=Object.assign(Object.assign({},i),{key:this.apiKey,shv:this.appVersion});r.r=_.default(e,r,this.ridKey);const s=yield this.axios.get(e,{params:r});if("result"in s.data)return s.data.result;if("error"in s.data.meta)throw new Error(s.data.meta.error.message);throw new Error("Произошла ошибка при выполнении запроса")}))}},s(i(4),t)},function(t,i){t.exports=e},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=[22,4147,1234,11],s=r[0]+r[3],n=r[1]+r[2];t.default=function(e,t,i){return function(e){const t=e.length;let i=n;for(let r=0;r<t;r+=1)i=i*s+e.charCodeAt(r),i>>>=0;return i}(function(e){return e.split("?")[0].replace(/^[^/]*\/\/[^/]+\//,"/")}(e)+function(e){return Object.keys(e).map(t=>({key:t,value:(e[t]||"").toString()})).sort((e,t)=>e.key<t.key?-1:e.key>t.key?1:0).map(e=>e.value).join("")}(t)+i)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_ITEM_BY_ENTRACE_URL=t.BRANCH_LIST_URL=t.BRANCH_GET_URL=t.REGION_INFO=t.REGIONS_URL=t.PROFILE_URL=t.OBJECTS_SUGGESTS_URL=t.SUGGESTS_URL=t.SEARCH_REGION_URL=t.SEARCH_FIRM_MARKERS_URL=t.SEARCH_CLUSTERED_MARKERS_URL=t.SEARCH_QUERY_MARKERS_URL=t.SEARCH_GEO_URL=t.GET_ITEM_URL=t.SEARCH_FIRM_URL=t.DASHBOARD_ADS_GET_URL=t.DETECT_REGION_URL=t.RUBRICS_TREE_URL=t.RUBRICATOR_LIST_URL=t.RUBRICATOR_DASHBOARD_URL=t.RUBRICATOR_GET_URL=t.WEB_API3_URL=t.WEB_API_URL=void 0,t.WEB_API_URL="https://catalog.api.2gis.ru/2.0/",t.WEB_API3_URL="https://catalog.api.2gis.ru/3.0/",t.RUBRICATOR_GET_URL=t.WEB_API3_URL+"rubricator/get",t.RUBRICATOR_DASHBOARD_URL=t.WEB_API3_URL+"rubricator/dashboard",t.RUBRICATOR_LIST_URL=t.WEB_API3_URL+"rubricator/list",t.RUBRICS_TREE_URL=t.WEB_API_URL+"catalog/rubric/list",t.DETECT_REGION_URL=t.WEB_API3_URL+"dashboard/geo/items",t.DASHBOARD_ADS_GET_URL=t.WEB_API3_URL+"ads/advise/gta/online/dashboard",t.SEARCH_FIRM_URL=t.WEB_API3_URL+"items",t.GET_ITEM_URL=t.WEB_API3_URL+"items/byid",t.SEARCH_GEO_URL=t.WEB_API_URL+"geo/search",t.SEARCH_QUERY_MARKERS_URL=t.WEB_API3_URL+"markers",t.SEARCH_CLUSTERED_MARKERS_URL=t.WEB_API3_URL+"markers/clustered",t.SEARCH_FIRM_MARKERS_URL=t.WEB_API_URL+"catalog/marker/search",t.SEARCH_REGION_URL=t.WEB_API_URL+"region/search",t.SUGGESTS_URL=t.WEB_API_URL+"suggest/list",t.OBJECTS_SUGGESTS_URL=t.WEB_API3_URL+"suggests",t.PROFILE_URL=t.WEB_API3_URL+"profile/data",t.REGIONS_URL=t.WEB_API_URL+"region/list",t.REGION_INFO=t.WEB_API_URL+"region/get",t.BRANCH_GET_URL=t.WEB_API_URL+"catalog/branch/get",t.BRANCH_LIST_URL=t.WEB_API_URL+"catalog/branch/list",t.GET_ITEM_BY_ENTRACE_URL=t.WEB_API3_URL+"items/byentrance"},function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),s=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||t.hasOwnProperty(i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),s(i(5),t),s(i(6),t),s(i(7),t)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ItemSortType=t.ItemSearchType=t.ItemType=t.ItemField=void 0,function(e){e.Stat="items.stat",e.RegionId="items.region_id",e.Point="items.point",e.AdmDiv="items.adm_div",e.Dates="items.dates",e.Photos="items.photos",e.SeeAlso="items.see_also",e.Flags="items.flags",e.Locale="items.locale",e.Address="items.address",e.Schedule="items.schedule",e.NameEx="items.name_ex",e.Reviews="items.reviews",e.Options="items.ads.options",e.IsConditional="items.address.is_conditional",e.Links="items.links",e.UpdatedAt="items.dates.updated_at",e.DeletedAt="items.dates.deleted_at",e.IsRoutingAvailable="items.is_routing_available",e.StopFactors="items.stop_factors",e.Group="items.group",e.ExternalContent="items.external_content",e.FullAddressName="items.full_address_name",e.ContactGroups="items.contact_groups",e.Rubrics="items.rubrics",e.AttributeGroups="items.attribute_groups",e.RegBcUrl="items.reg_bc_url",e.Floors="items.floors",e.Attraction="items.attraction",e.Statistics="items.statistics",e.LevelCount="items.level_count",e.Capacity="items.capacity",e.Description="items.description",e.Context="items.context",e.AccessName="items.access_name",e.IsPaid="items.is_paid",e.Access="items.access",e.AccessComment="items.access_comment",e.Selection="items.geometry.selection",e.Hover="items.geometry.hover",e.Style="items.geometry.style",e.Centroid="items.geometry.centroid",e.IsMainInGroup="items.is_main_in_group",e.IsPromoted="items.is_promoted",e.HasGoods="items.has_goods",e.HasPinnedGoods="items.has_pinned_goods",e.HasRealty="items.has_realty",e.HasPayments="items.has_payments",e.SearchAttributes="search_attributes",e.Filters="filters",e.Widgets="widgets",e.ContextRubrics="context_rubrics",e.RequestType="request_type",e.Cb="cb",e.Dym="dym",e.Hash="hash"}(t.ItemField||(t.ItemField={})),function(e){e.AdmDiv="adm_div",e.AdmDivCountry="adm_div.country",e.AdmDivRegion="adm_div.region",e.AdmDivCity="adm_div.city",e.AdmDivDistrict="adm_div.district",e.AdmDivDistrictArea="adm_div.district_area",e.AdmDivDivision="adm_div.division",e.AdmDivLivingArea="adm_div.living_area",e.AdmDivPlace="adm_div.place",e.AdmDivSettlement="adm_div.settlement",e.Attraction="attraction",e.Building="building",e.Crossroad="crossroad",e.FereignCity="foreign_city",e.Gate="gate",e.Parking="parking",e.Road="road",e.Street="street",e.Branch="branch",e.Route="route",e.Station="station",e.StationMetro="station.metro",e.Coordinates="coordinates"}(t.ItemType||(t.ItemType={})),function(e){e.Discovery="discovery",e.OneBranch="one_branch",e.Indoor="indoor",e.Ads="ads",e.DiscoveryPartialSearcher="discovery_partial_searcher",e.DiscoveryPartialSearcherStrict="discovery_partial_searcher_strict"}(t.ItemSearchType||(t.ItemSearchType={})),function(e){e.Relevance="relevance",e.Distance="distance",e.Rating="rating",e.FlampRating="flamp_rating",e.GeneralRating="general_rating",e.DistanceWithoutAds="distance_without_ads",e.CreationTime="creation_time",e.OpenedTime="opened_time"}(t.ItemSortType||(t.ItemSortType={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClusteredMarkerField=void 0,function(e){e.Name="items.name",e.Context="items.context",e.StopFactors="items.stop_factors",e.Schedule="items.schedule",e.Reviews="items.reviews"}(t.ClusteredMarkerField||(t.ClusteredMarkerField={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}])}));
//# sourceMappingURL=2gis-api.js.map