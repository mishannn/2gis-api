import Point from '../Point';

export default interface MarkerItem {
  /**
   * Уникальный идентификатор.
   */
  id: string;
  /**
   * Тип маркера.
   */
  type: string;
  /**
   * Признак релевантности объекта.
   */
  vital?: number;
  /**
   * Долгота.
   * example:
   * 55.10401153
   */
  lon: number;
  /**
   * Широта.
   * example:
   * 36.75896072
   */
  lat: number;
  /**
   * Идентификатор рубрики.
   * example:
   * 4503719886454906
   */
  rubr?: string;
  /**
   * Флаг, указывающий на рекламодателя.
   */
  is_advertising: boolean;
  /**
   * Признак удаленного объекта
   */
  is_deleted?: boolean;
  source_type?: number;
  match_type?: number;
  /**
   * Идентификатор геометрии, к которой принадлежит маркер.
   */
  geometry_id?: string;
  /**
   * Объект был найден не по идентификатору, а через геокодинг по этой координате
   * example:
   * 54.991984,82.901886
   */
  geocoded_by?: Point;
}
