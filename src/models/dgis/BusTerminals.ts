export default interface BusTerminals {
  /**
   * Количество автовокзалов.
   */
  count?: number;
  /**
   * Автовокзалы.
   */
  items?: {
    /**
     * Уникальный идентификатор автовокзала.
     */
    id: string;
    /**
     * Название объекта.
     */
    name?: string;
    /**
     * Дополнительная информация.
     */
    additional_info?: string;
  }[];
}
