import RouteType from './RouteType';
import RouteDirection from './RouteDirection';

export type TransportRouteDirectionType = 'bidirectional' | 'one_way' | 'circular' | 'loop';

export default interface TransportRoute {
  /**
   * Идентификатор маршрута.
   */
  id: string;
  /**
   * Тип маршрута.
   */
  subtype: RouteType;
  /**
   * Имя маршрута.
   */
  name: string;
  /**
   * Присутствует, если применяется цветовое кодирование, например в случае станций метро.
   */
  color?: string;
  /**
   * Иконка метро.
   */
  route_logo?: string;
  /**
   * Тип направления маршрута.
   */
  direction_type: TransportRouteDirectionType;
  /**
   * Начальная остановка маршрута. Присутствует во всех случаях, кроме direction_type == loop.
   */
  from_name: string;
  /**
   * Конечная остановка маршрута. Присутствует во всех случаях, кроме direction_type == loop
   */
  to_name: string;
  /**
   * Комментарий. Присутствует, если требуется описать маршрут движения особым образом.
   */
  comment?: string;
  /**
   * Направления маршрута.
   */
  directions?: RouteDirection[];
}
