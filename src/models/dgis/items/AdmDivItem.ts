import AdmDiv from '../admdiv/AdmDiv';
import Dates from '../Dates';
import Locale from '../Locale';
import Group from '../Group';
import Reviews from '../Reviews';
import Photos from '../photos/Photos';
import Attraction from '../Attraction';
import Geometry from '../Geometry';
import Point from '../Point';
import SourceType from '../SourceType';
import Flags from '../Flags';
import Album from '../content/Album';
import Stat from '../Stat';
import Links from '../Links';
import Statistics from '../Statistics';
import SearchAttributes from '../SearchAttributes';
import Context from '../Context';
import AdmDivType from '../admdiv/AdmDivType';

export default interface AdmDivItem {
  type: 'adm_div';

  /**
   * Уникальный идентификатор геообъекта.
   */
  id: string;

  /**
   * Идентификатор региона.
   */
  region_id?: string;

  /**
   * Уникальный идентификатор сегмента.
   */
  segment_id?: string;

  /**
   * Подтип административной единицы.
   */
  subtype: AdmDivType;

  /**
   * Локализованное название типа населённого пункта (только для subtype = settlement).
   */
  subtype_specification?: string;

  /**
   * Признак того, что это главный объект в группе объектов гибрида.
   */
  is_main_in_group?: boolean;

  /**
   * Название территории (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
   */
  caption: string;

  /**
   * Название территории.
   */
  name: string;

  /**
   * Полное название территории.
   */
  full_name?: string;
  description?: string;

  /**
   * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
   */
  is_routing_available?: boolean;

  /**
   * Принадлежность к административной территории более высокого уровня.
   */
  adm_div?: AdmDiv[];

  /**
   * Время внесения информации о филиале в БД.
   */
  dates?: Dates;

  /**
   * Текущая локаль.
   */
  locale?: Locale;

  /**
   * Связанные в объединённую карточку объекты.
   */
  group?: Group[] | { [key: string]: any };

  /**
   * Отзывы о геообъекте.
   */
  reviews?: Reviews;

  /**
   * Фотографии территории.
   */
  photos?: Photos;

  /**
   * Описание достопримечательности.
   */
  attraction?: Attraction;

  /**
   * Геометрия территории.
   */
  geometry?: Geometry;

  /**
   * Сводная информация об административной единице.
   */
  statistics?: Statistics;

  /**
   * Связанные объекты.
   */
  links?: Links;

  /**
   * Динамические свойства здания.
   */
  context?: Context;

  /**
   * Данные для формирования сообщений статистики.
   */
  stat?: Stat;

  /**
   * Внешний контент
   */
  external_content?: Album[];

  /**
   * Список признаков объекта.
   */
  flags?: Flags;

  /**
   * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
   */
  sources?: SourceType[];

  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;

  /**
   * Подсказка, соответствующая запросу. Поле доступно только в методах автодополнения.
   */
  search_attributes?: SearchAttributes;

  /**
   * Объект был найден не по идентификатору, а через геокодинг по этой координате
   */
  geocoded_by?: Point;
}
