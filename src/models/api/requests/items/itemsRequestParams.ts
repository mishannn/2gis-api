import Locale from 'src/models/dgis/Locale';

export enum ItemField {
  Stat = 'items.stat', // данные для формирования сообщений статистики;
  RegionId = 'items.region_id', // уникальный идентификатор проекта;
  Point = 'items.point', // координаты точки поиска, заданные в системе координат WGS84 в формате lon, lat;
  AdmDiv = 'items.adm_div', // принадлежность к административной территории;
  Dates = 'items.dates', // время внесения информации о филиале в БД;
  Photos = 'items.photos', // фотографии, связанные с организацией;
  SeeAlso = 'items.see_also', // список рекламодателей для блока «смотри также»;
  Flags = 'items.flags', // список признаков объекта;
  Locale = 'items.locale', // текущая локаль для региона;
  Address = 'items.address', // адрес, по которому располагается объект;
  Schedule = 'items.schedule', // расписание работы филиала;
  NameEx = 'items.name_ex', // составные части наименования объекта;
  Reviews = 'items.reviews', // отзывы об объекте;
  Options = 'items.ads.options', // рекламные опции;
  IsConditional = 'items.address.is_conditional', // флаг «условного адреса»;
  Links = 'items.links', // связанные объекты;
  UpdatedAt = 'items.dates.updated_at', // дата последнего изменения информации об организации в формате ISO 8601;
  DeletedAt = 'items.dates.deleted_at', // дата удаления организации из базы в формате ISO 8601;
  IsRoutingAvailable = 'items.is_routing_available', // флаг, возможен ли проезд до объекта;
  StopFactors = 'items.stop_factors', // набор блокирующих атрибутов, соответствующих запросу;
  Group = 'items.group', // связанные в объединённую карточку объекты;
  ExternalContent = 'items.external_content', // дополнительные данные филиала, такие как буклеты и фотографии;
  FullAddressName = 'items.full_address_name', // то же, что и address_name, но с указанием города;
  ContactGroups = 'items.contact_groups', // контакты филиала;
  Rubrics = 'items.rubrics', // рубрики филиала;
  AttributeGroups = 'items.attribute_groups', // дополнительные атрибуты филиала;
  RegBcUrl = 'items.reg_bc_url', // URL для регистрации бизнес-коннекшна просмотра профиля;
  Floors = 'items.floors', // количество этажей;
  Attraction = 'items.attraction', // описание достопримечательности;
  Statistics = 'items.statistics', // cводная информация о геообъекте;
  LevelCount = 'items.level_count', // количество уровней парковки;
  Capacity = 'items.capacity', // вместимость парковки;
  Description = 'items.description', // описание геообъекта;
  Context = 'items.context', // динамическая информация;
  AccessName = 'items.access_name', // локализованное название типа доступа;
  IsPaid = 'items.is_paid', // является ли парковка платной;
  Access = 'items.access', // тип доступа для парковки;
  AccessComment = 'items.access_comment', // локализованное название для типа доступа;
  Selection = 'items.geometry.selection', // геометрия для выделения объекта;
  Hover = 'items.geometry.hover', // геометрия области, используемой для определения попадания курсора в зону объекта;
  Style = 'items.geometry.style', // идентификатор стиля для отображения;
  Centroid = 'items.geometry.centroid', // визуальный центр геометрии объекта;
  IsMainInGroup = 'items.is_main_in_group', // признак того, что это главный объект в группе объектов гибрида.
  IsPromoted = 'items.is_promoted', // Фирма участвует в промо-акции Чека
  HasGoods = 'items.has_goods', // загружен список товаров фирмы
  HasPinnedGoods = 'items.has_pinned_goods', // у фирмы включен блок «Закрепленные товары»
  HasRealty = 'items.has_realty', // есть недвижимость на продаже
  HasPayments = 'items.has_payments', // есть возможность оплатить услуги фирмы онлайн
  SearchAttributes = 'search_attributes', // информация о произведённом поиске;
  Filters = 'filters', // фильтры для дополнительного поиска;
  Widgets = 'widgets', // виджеты;
  ContextRubrics = 'context_rubrics', // массив контекстных рубрик;
  RequestType = 'request_type', // тип поискового запроса;
  Cb = 'cb', // контекстный баннер;
  Dym = 'dym', // блок «Возможно, вы имели ввиду»;
  Hash = 'hash', // базовый хеш;
}

export enum ItemType {
  AdmDiv = 'adm_div', // административная единица;
  AdmDivCountry = 'adm_div.country', // страна;
  AdmDivRegion = 'adm_div.region', // регион (область/край/республика и т.п.);
  AdmDivCity = 'adm_div.city', // город;
  AdmDivDistrict = 'adm_div.district', // район;
  AdmDivDistrictArea = 'adm_div.district_area', // район области;
  AdmDivDivision = 'adm_div.division', // округ;
  AdmDivLivingArea = 'adm_div.living_area', // жилмассив, микрорайон;
  AdmDivPlace = 'adm_div.place', // место;
  AdmDivSettlement = 'adm_div.settlement', // населённый пункт;
  Attraction = 'attraction', // достопримечательность;
  Building = 'building', // здание;
  Crossroad = 'crossroad', // перекрёсток;
  FereignCity = 'foreign_city', // населенный пункт, не принадлежащий к текущему проекту;
  Gate = 'gate', // проход/проезд;
  Parking = 'parking', // парковка;
  Road = 'road', // дорога;
  Street = 'street', // улица;
  Branch = 'branch', // филиал организации;
  Route = 'route', // маршрут;
  Station = 'station', // остановка;
  StationMetro = 'station.metro', // станция метро;
  Coordinates = 'coordinates', // глобальная координата.
}

export enum ItemSearchType {
  Discovery = 'discovery', // максимально широкий поиск с возможностью раскрытия связанных объектов (рубрики, соответсвующие запросу, будут раскрыты до входящих в них филиалов);
  OneBranch = 'one_branch', // идентичен discovery, но для организации будет отдан только один филиал;
  Indoor = 'indoor', // конфигурация для качественного поиска филиалов в здании;
  Ads = 'ads', // идентичен discovery, но будут выданы только объекты с рекламой. Кроме того, для организации будет отдан только один первый по ранжированию филиал;
  DiscoveryPartialSearcher = 'discovery_partial_searcher', // идентичен discovery, но будет задействовано больше вариантов пересечений связей;
  DiscoveryPartialSearcherStrict = 'discovery_partial_searcher_strict', // идентичен discovery_partial_searcher, но с выключенным префиксным поиском.
}

export enum ItemSortType {
  Relevance = 'relevance', // по убыванию релевантности. В поиске участвует название организации и рубрики, в которые входит организация;
  Distance = 'distance', // по возрастанию расстояния. Расстояние рассчитывается до центра площадных геообъектов (городов, районов и т.д.) и по кратчайшему расстоянию до линейных (улиц). Если передан параметр sort_point, то расстояние рассчитывается до этой точки;
  Rating = 'rating', // по убыванию рейтинга;
  FlampRating = 'flamp_rating', // по убыванию рейтинга флампа;
  GeneralRating = 'general_rating', // по убыванию рейтинга (алиас rating);
  DistanceWithoutAds = 'distance_without_ads', // по возрастанию расстояния аналогично distance, но без учёта рекламных весов;
  CreationTime = 'creation_time', // по убыванию даты создания филиала организации;
  OpenedTime = 'opened_time', // по убыванию даты открытия.
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
