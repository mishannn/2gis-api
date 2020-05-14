export default interface Attraction {
  /**
   * Уникальный идентификатор объекта достопримечательности.
   */
  id?: string;
  /**
   * Локализованное название типа достопримечательности.
   */
  subtype_name: string;
  /**
   * Название достопримечательности.
   */
  name?: string;
  /**
   * Описание достопримечательности.
   */
  description?: string;
  /**
   * Дата или даты.
   */
  dates?: string;
  /**
   * Авторы.
   */
  authors?: string;
}
