export default interface Hotels {
  /**
   * Количество  отелей.
   */
  count?: number;
  /**
   * Отели.
   */
  items?: {
    /**
     * Уникальный идентификатор отеля.
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
