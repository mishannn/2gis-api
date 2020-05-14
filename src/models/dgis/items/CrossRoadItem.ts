import Dates from '../Dates';
import AdmDiv from '../admdiv/AdmDiv';
import Photos from '../photos/Photos';
import Attraction from '../Attraction';
import Geometry from '../Geometry';
import Reviews from '../Reviews';
import Album from '../content/Album';
import Stat from '../Stat';
import Locale from '../Locale';
import SearchAttributes from '../SearchAttributes';
import Point from '../Point';
import SourceType from '../SourceType';

export default interface CrossRoadItem {
  /**
   * Уникальный идентификатор геообъекта.
   */
  id?: string;
  /**
   * Уникальный идентификатор проекта.
   */
  region_id?: string;
  /**
   * Уникальный идентификатор сегмента.
   */
  segment_id?: string;
  type: 'crossroad';
  /**
   * Название перекрестка (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
   */
  caption: string;
  /**
   * Время внесения информации о филиале в БД.
   */
  dates?: Dates;
  /**
   * Название перекрестка.
   */
  name: string;
  /**
   * Полное название перекрестка.
   */
  full_name?: string;
  /**
   * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
   */
  is_routing_available?: boolean;
  /**
   * Принадлежность к административной территории.
   */
  adm_div?: AdmDiv[];
  /**
   * Фотографии перекрёстка.
   */
  photos?: Photos;
  /**
   * Описание достопримечательности.
   */
  attraction?: Attraction;
  /**
   * Геометрия перекрёстка.
   */
  geometry?: Geometry;
  /**
   * Отзывы о геообъекте.
   */
  reviews?: Reviews;
  /**
   * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
   */
  sources?: SourceType[];
  /**
   * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
   */
  external_content?: Album[];
  /**
   * Данные для формирования сообщений статистики.
   */
  stat?: Stat;
  /**
   * Текущая локаль.
   */
  locale?: Locale;
  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;
  /**
   * Параметры результата поиска. Возвращается только в поисковых методах версии 3.0.
   */
  search_attributes?: SearchAttributes;
  /**
   * Объект был найден не по идентификатору, а через геокодинг по этой координате
   */
  geocoded_by?: Point;
}
