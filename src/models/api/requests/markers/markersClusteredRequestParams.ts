import { ItemType, ItemSearchType, ItemSortType } from '../items/itemsRequestParams';
import Locale from 'src/models/dgis/Locale';

export enum ClusteredMarkerField {
  Name = 'items.name', // название объекта;
  Context = 'items.context', // динамическая информация;
  StopFactors = 'items.stop_factors', // набор блокирующих атрибутов, соответствующих запросу;
  Schedule = 'items.schedule', // расписание работы;
  Reviews = 'items.reviews', // отзывы.
}

export interface MarkersClusteredRequestParams {
  locale?: Locale;
  fields?: ClusteredMarkerField[];
  map_width: number;
  map_height: number;
  q?: string;
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
  sort?: ItemSortType;
  sort_point?: string;
  district_id?: number[];
  building_id?: number[];
  city_id?: number;
  polygon?: string;
  viewpoint1: string;
  viewpoint2: string;
  is_viewport_change?: boolean;
  page?: number;
  page_size?: number;
}
