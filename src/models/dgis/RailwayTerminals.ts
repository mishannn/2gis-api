export default interface RailwayTerminals {
  /**
   * Количество ж/д вокзалов.
   */
  count?: number;
  /**
   * Ж/Д вокзалы.
   */
  items?: {
    /**
     * Уникальный идентификатор ж/д вокзала.
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
