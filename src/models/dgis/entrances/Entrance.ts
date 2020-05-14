import EntranceGeometry from './EntranceGeometry';

export default interface Entrance {
  /**
   * Уникальный идентификатор входа.
   */
  id: string;
  /**
   * Комментарий ко входу.
   */
  comment?: string;
  /**
   * Является ли вход основным.
   */
  is_primary: boolean;
  /**
   * Если присутствует и равен true, то вход отображается в списке входов.
   */
  is_visible_on_map?: boolean;
  /**
   * Отсутствуют для входов без квартир. Должны полностью совпадать для входов, имеющих одинаковое название.
   */
  is_visible_in_ui?: boolean;
  /**
   * Непустое имя подъезда.
   */
  entity_name?: string;
  /**
   * Номер подъезда.
   */
  entity_number?: string;
  /**
   * Номер входа на станцию, если объект является входом.
   */
  entrance_display_name?: string;
  /**
   * Геометрия входа.
   */
  geometry: EntranceGeometry;
}
