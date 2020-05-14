import Album from '../content/Album';
import PoiReference from '../PoiReference';
import Stat from '../Stat';
import Context from '../Context';
import Geometry from '../Geometry';
import Reviews from '../Reviews';

export default interface PoiItem {
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
   * Тип объекта.
   *
   * Возможные значения:
   *
   *  * poi — точечный объект карты.
   */
  type: 'poi';
  /**
   * Отзывы о геообъекте.
   */
  reviews?: Reviews;

  geometry?: Geometry;

  context?: Context;
  /**
   * Данные для формирования сообщений статистики.
   */
  stat?: Stat;
  /**
   * Связанный с геообъектом объект.
   */
  reference: PoiReference;
  /**
   * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
   */
  external_content?: Album[];
}
