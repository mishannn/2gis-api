import AdmDiv from '../admdiv/AdmDiv';
import RouteType from '../transport/RouteType';
import SourceType from '../SourceType';
import Links from '../Links';
import Album from '../content/Album';
import Locale from '../Locale';
import Reviews from '../Reviews';
import StationType from '../transport/StationType';
import Dates from '../Dates';
import Group from '../Group';
import Schedule from '../Schedule';
import Geometry from '../Geometry';
import TransportRoute from '../transport/TransportRoute';
import Stat from '../Stat';
import Context from '../Context';

export default interface StationPlatformItem {
  /**
   * Уникальный идентификатор остановочной платформы.
   */
  id: string;
  /**
   * Уникальный идентификатор проекта.
   */
  region_id?: string;
  /**
   * Уникальный идентификатор сегмента.
   */
  segment_id?: string;
  /**
   * Уникальный идентификатор остановки, к которой относится эта остановочная платформа.
   */
  station_id: string;
  /**
   * Тип объекта.
   *
   * Возможные значения:
   *
   *  * station_platform — остановочная платформа.
   */
  type: 'station_platform';
  /**
   * Тип станции.
   */
  subtype: StationType;
  /**
   * Название остановочной платформы (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
   */
  caption: string;
  /**
   * Время внесения информации о филиале в БД.
   */
  dates?: Dates;
  /**
   * Название остановки.
   */
  name: string;
  /**
   * Полное название остановки.
   */
  full_name?: string;
  /**
   * Признак того, что это главный объект в группе объектов гибрида.
   */
  is_main_in_group?: boolean;
  /**
   * Временная зона объекта в формате POSIX.
   */
  timezone?: string;
  /**
   * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
   */
  is_routing_available?: boolean;
  /**
   * Принадлежность к административной территории.
   */
  adm_div?: AdmDiv[];
  /**
   * Связанные в объединённую карточку объекты.
   */
  group?: Group[] | { [key: string]: any };
  /**
   * Время работы станции.
   */
  schedule?: Schedule;
  /**
   * Геометрия остановочной платформы.
   */
  geometry?: Geometry;
  /**
   * Маршруты транспорта, проходящие через остановочный пункт.
   */
  routes?: TransportRoute[];
  /**
   * Данные для формирования сообщений статистики.
   */
  stat?: Stat;
  /**
   * Динамические свойства остановочной платформы
   */
  context?: Context;
  /**
   * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
   */
  sources?: SourceType[];
  /**
   * Иконка метро.
   */
  route_logo?: string;
  /**
   * Связанные объекты.
   */
  links?: Links;
  /**
   * Смещение таймзоны в минутах относительно UTC0.
   */
  timezone_offset?: number;
  /**
   * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
   */
  external_content?: Album[];
  /**
   * Текущая локаль.
   */
  locale?: Locale;
  /**
   * Тип маршрута.
   */
  route_type?: RouteType;
  /**
   * Отзывы о остановочной платформе.
   */
  reviews?: Reviews;
  /**
   * Цвет маршрута, если есть. Например, для линий метро. Формат: #rrggbb
   */
  color?: string;
  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;
}
