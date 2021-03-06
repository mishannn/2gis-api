import { ItemType, ItemSearchType, ItemSortType } from '../items/itemsRequestParams';
import Locale from 'src/models/dgis/Locale';

export interface MarkersRequestParams {
  locale?: Locale;
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
