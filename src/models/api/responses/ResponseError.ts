export default interface ResponseError {
  /**
   * Короткий уникальный текстовый код ошибки.
   */
  type?: string;
  /**
   * Описание ошибки.
   */
  message?: string;
}
