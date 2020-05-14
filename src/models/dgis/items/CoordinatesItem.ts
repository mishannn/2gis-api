import SearchAttributes from '../SearchAttributes';

export default interface CoordinatesItem {
  /**
   * Тип объекта.
   *
   * Возможные значения:
   *
   *  * coordinates — глобальная координата.
   */
  type: 'coordinates';
  /**
   * Информация о произведённом поиске.
   */
  search_attributes?: SearchAttributes;
  /**
   * Долгота.
   */
  lon: number;
  /**
   * Широта.
   */
  lat: number;
}
