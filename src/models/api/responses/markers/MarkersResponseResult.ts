import MarkerItem from '../../../dgis/items/MarkerItem';
import CoordinatesItem from 'src/models/dgis/items/CoordinatesItem';

export default interface MarkersResponseResult {
  /**
   * Количество найденных объектов.
   */
  total: number; // int64
  items: (MarkerItem | CoordinatesItem)[];
}
