export default interface StructureInfo {
  /**
   * Обозначение материала здания. Поле доступно только в коммерческом API.
   */
  material?: string;
  /**
   * Количество квартир в жилом доме. Поле доступно только в коммерческом API.
   */
  apartments_count?: number;
  /**
   * Количество подъездов в жилом доме. Поле доступно только в коммерческом API.
   */
  porch_count?: number;
}
