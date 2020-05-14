export default interface Riverports {
    /**
     * Количество речных портов.
     */
    count?: number;
    /**
     * Речные порты.
     */
    items?: {
        /**
         * Уникальный идентификатор речного порта.
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
