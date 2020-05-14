import RouteTransition from './transport/RouteTransition';
import Geometry from './Geometry';

export default interface Platform {
  /**
   * Идентификатор остановочной платформы.
   */
  id: string;
  /**
   * Идентификатор остановки.
   */
  station_id: string;
  /**
   * Название остановки.
   */
  name: string;
  /**
   * Краткое описание места расположения остановочной платформы.
   */
  place_name?: string;
  /**
   * Другие маршруты, на которые можно пересесть на данной остановочной платформе.
   */
  transitions?: RouteTransition[];
  /**
   * Геометрия остановочной платформы.
   */
  geometry: Geometry;
}
