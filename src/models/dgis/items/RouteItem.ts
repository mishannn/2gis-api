import RouteType from '../transport/RouteType';
import Dates from '../Dates';
import Reviews from '../Reviews';
import RouteDirection from '../transport/RouteDirection';
import RouteContext from '../transport/RouteContext';
import Album from '../content/Album';
import Stat from '../Stat';
import Locale from '../Locale';
import SourceType from '../SourceType';

export default interface RouteItem {
  /**
   * Уникальный идентификатор маршрута.
   */
  id: string;
  region_id?: string;
  segment_id?: string;

  /**
   * Тип объекта.
   *
   * Возможные значения:
   *
   *  * route — маршрут.
   */
  type: 'route';

  /**
   * Тип маршрута.
   */
  subtype: RouteType;

  /**
   * Название объекта (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
   */
  caption?: string;

  /**
   * Время внесения информации о филиале в БД.
   */
  dates?: Dates;

  /**
   * Название маршрута.
   */
  name: string;

  /**
   * Цвет маршрута, если есть. Например, для линий метро. Формат: #rrggbb
   */
  color?: string;

  /**
   * Название начальной остановки маршрута.
   */
  from_name?: string;

  /**
   * Название конечной остановки маршрута.
   */
  to_name?: string;

  /**
   * Иконка метро.
   */
  route_logo?: string;

  /**
   * Отзывы о геообъекте.
   */
  reviews?: Reviews;

  /**
   * Направления маршрута.
   */
  directions?: RouteDirection[];

  /**
   * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
   */
  sources?: SourceType[];

  /**
   * Динамические свойства маршрута.
   */
  context?: RouteContext;

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
}
