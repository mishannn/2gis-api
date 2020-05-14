export enum RegionField {
  NameGrammaticalCases = 'items.name_grammatical_cases', // cклонение названия региона;
  Domain = 'items.domain', // значение домена;
  Locales = 'items.locales', // список локалей, на которых возможен поиск для данного региона;
  TimeZone = 'items.time_zone', // часовой пояс;
  Bounds = 'items.bounds', // геометрия границ проекта в формате WKT;
  Statistics = 'items.statistics', // статистика по региону;
  Locale = 'items.locale', // текущая локаль для региона;
  Settlements = 'items.settlements', // список городов-спутников;
  Satellites = 'items.satellites', // список городов-спутников в виде объектов;
  Code = 'items.code', // код региона;
  UriCode = 'items.uri_code', // код региона, который будет отображаться в домене;
  UriAliases = 'items.uri_aliases', // набор алиасов региона;
  AllowForIndexing = 'items.allow_for_indexing', // список языков проекта, на которых разрешено индексировать;
  CountryCode = 'items.country_code', // код страны;
  DefaultPos = 'items.default_pos', // позиция по умолчанию для отображения проекта;
  ZoomLevel = 'items.zoom_level', // уровень масштаба;
  Flags = 'items.flags', // признаки наличия определённой информации в регионе;
  Seo = 'items.seo', // дополнительные поля для SEO;
  Hidden = 'items.hidden', // флаг, является ли проект скрытым;
  WeightsTime = 'items.weights_time', // время последнего обновления рекламных весов в формате Unix timestamp.
}

export enum RegionType {
  Region = 'region', // регион;
  Segment = 'segment', // сегмент;
  Universe = 'universe', // universe.
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
