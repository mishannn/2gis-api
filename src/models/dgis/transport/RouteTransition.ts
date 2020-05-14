import RouteType from './RouteType';

export default interface RouteTransition {
  /**
   * Идентификатор связанного маршрута.
   */
  route_id: string;
  /**
   * Название связанного маршрута.
   */
  route_name: string;
  /**
   * Тип маршрута.
   */
  route_type: RouteType;
  /**
   * Иконка метро.
   */
  route_logo?: string;
  /**
   * Идентификатор остановки. Формат:
   */
  color?: string;
  /**
   * Идентификатор остановки.
   */
  station_id: string;
  /**
   * Название остановки.
   */
  station_name: string;
}
