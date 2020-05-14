import StopFactor from './StopFactor';

export default interface Context {
  /**
   * Расстояние до некой точки в метрах.
   */
  distance?: number;
  /**
   * Попадает ли объект в границы сортировки.
   */
  is_in_bound?: boolean;
  /**
   * Набор блокирующих атрибутов, соответствующих запросу.
   */
  stop_factors?: StopFactor[];
  /**
   * Код группы обслуживающих организаций.
   */
  servicing_group?: string;
  /**
   * Коды групп обслуживающих организаций.
   */
  servicing_groups?: string[];
  /**
   * Уникальный идентификатор входа в здание.
   */
  entrance_id?: string;
}
