export default interface ResponseMeta {
    /**
     * Код ответа.
     */
    code: number;
    /**
     * Текущая версия API.
     */
    apiVersion: string;
    /**
     * Дата последнего обновления данных.
     */
    issueDate?: string;
}
