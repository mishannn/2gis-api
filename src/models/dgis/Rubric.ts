export default interface Rubric {
  /**
   * Уникальный идентификатор рубрики.
   */
  id: string;
  /**
   * Короткий идентификатор рубрики.
   */
  short_id: number;
  /**
   * Собственное имя рубрики.
   */
  name: string;
  /**
   * Транслированное название страницы в web.
   */
  alias?: string;
  /**
   * Идентификатор объединяющей рубрики.
   */
  parent_id?: string;
  /**
   * Тип рубрики.
   *
   * Возможные значения:
   *
   *  * primary — основная;
   *  * additional — дополнительная.
   */
  kind: 'primary' | 'additional';
}
