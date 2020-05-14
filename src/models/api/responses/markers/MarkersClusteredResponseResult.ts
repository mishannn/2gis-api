import SearchAttributes from '../../../dgis/SearchAttributes';
import MarkerItem2 from '../../../dgis/items/MarkerItem2';

export default interface MarkersClusteredResponseResult {
  /**
   * Количество найденных объектов.
   */
  total: number; // int64
  items: MarkerItem2[];
  /**
   * Информация о произведённом поиске.
   */
  search_attributes: SearchAttributes;
}
