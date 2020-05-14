export default interface Seaports {
  /**
   * Количество морских портов.
   */
  count?: number;
  /**
   * Морские порты.
   */
  items?: {
    /**
     * Уникальный идентификатор морского порта.
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
