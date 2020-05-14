import RouteType from './RouteType';
import Geometry from '../Geometry';

export default interface StationPlatform {
  /**
   * Уникальный идентификатор остановочной платформы.
   */
  id: string;

  /**
   * Геометрия остановочной платформы.
   */
  geometry: Geometry;

  /**
   * Массив типов транспорта, проходящего через эту платформу.
   */
  route_types?: RouteType[];
}
