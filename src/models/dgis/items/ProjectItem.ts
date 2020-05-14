import Dates from '../Dates';
import Geometry from '../Geometry';
import Statistics from '../Statistics';
import Locale from '../Locale';
import Reviews from '../Reviews';
import Content from '../content/Content';
import Booklet from '../content/Booklet';
import Album from '../content/Album';
import Stat from '../Stat';

export default interface ProjectItem {
  /**
   * Уникальный идентификатор объекта.
   */
  id: string;
  /**
   * Уникальный идентификатор проекта.
   */
  region_id?: string;
  /**
   * Уникальный идентификатор сегмента
   */
  segment_id?: string;
  /**
   * Тип объекта.
   */
  type: 'project';
  /**
   * Именование проекта.
   */
  name: string;
  /**
   * Время внесения информации о филиале в БД.
   */
  dates?: Dates;
  /**
   * Полное название проекта.
   */
  full_name?: string;
  /**
   * Идентификатор основного города проекта.
   */
  default_city_id: string;
  /**
   * Геометрия проекта.
   */
  geometry: Geometry;
  /**
   * Сводная информация о проекте.
   */
  statistics?: Statistics;
  /**
   * Текущая локаль.
   */
  locale?: Locale;
  /**
   * Отзывы о проекте.
   */
  reviews?: Reviews;
  /**
   * Дополнительные данные объекта, например фотографии.
   */
  external_content?: (Content | Booklet | Album)[];
  /**
   * Данные для формирования сообщений статистики.
   */
  stat?: Stat;
}
