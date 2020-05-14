export default interface Dates {
  /**
   * Дата открытия организации в формате ISO 8601.
   */
  created_at?: string;
  /**
   * Дата последнего изменения информации об организации в формате ISO 8601.
   */
  updated_at?: string;
  /**
   * Дата удаления организации из базы в формате ISO 8601.
   */
  deleted_at?: string;
}
