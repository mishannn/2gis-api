import Flags from '../Flags';
import MarkerCluster from '../MarkerCluster';
import NameEx from '../NameEx';
import Context from '../Context';
import Schedule from '../Schedule';
import Reviews from '../Reviews';
import Reviews2 from '../Reviews2';
import Ad from '../ad/Ad';
import SearchAttributes from '../SearchAttributes';
import Point from '../Point';

export default interface MarkerItem2 {
  /**
   * Уникальный идентификатор.
   */
  id: string;
  /**
   * Тип маркера.
   */
  type: string;
  /**
   * Признак релевантности объекта.
   */
  vital?: number;
  /**
   * Долгота.
   * example:
   * 55.10401153
   */
  lon: number;
  /**
   * Широта.
   * example:
   * 36.75896072
   */
  lat: number;
  /**
   * Идентификатор рубрики.
   * example:
   * 4503719886454906
   */
  rubr?: string;
  /**
   * Флаг, указывающий на рекламодателя.
   */
  is_advertising: boolean;
  /**
   * Признак удаленного объекта
   */
  is_deleted?: boolean;
  source_type?: number;
  /**
   * Список признаков объекта.
   */
  flags?: Flags;
  /**
   * Описание кластеризованного объекта.
   */
  cluster?: MarkerCluster;
  match_type?: number;
  /**
   * Идентификатор геометрии, к которой принадлежит маркер.
   */
  geometry_id?: string;
  /**
   * Имя объекта.
   * example:
   * Усть-Каменогорск
   */
  name?: string;
  /**
   * Составные части наименования организации.
   */
  name_ex?: NameEx;
  /**
   * Динамические свойства филиала.
   */
  context?: Context;
  /**
   * Описание расписания работы.
   */
  schedule?: Schedule;
  reviews?: Reviews | Reviews2;
  /**
   * Смещение таймзоны в минутах относительно UTC0.
   * example:
   * 420
   */
  timezone_offset?: number;
  /**
   * Рекламные материалы данного филиала.
   */
  ads?: Ad;
  /**
   * Параметры результата поиска. Возвращается только в поисковых методах версии 3.0
   */
  search_attributes?: SearchAttributes;
  /**
   * Объект был найден не по идентификатору, а через геокодинг по этой координате
   * example:
   * 54.991984,82.901886
   */
  geocoded_by?: Point;
}
