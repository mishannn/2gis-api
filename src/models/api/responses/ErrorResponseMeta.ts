import ResponseError from './ResponseError';

export default interface ErrorResponseMeta {
  /**
   * Код ответа.
   */
  code: number;
  /**
   * Текущая версия API.
   */
  apiVersion: string;
  /**
   * Ошибка.
   */
  error: ResponseError;
  /**
   * Дата последнего обновления данных.
   */
  issueDate?: string;
}
