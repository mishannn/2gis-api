export default interface Airports {
    /**
     * Количество  аэропортов.
     */
    count?: number;
    /**
     * Аэропорты.
     */
    items?: {
        /**
         * Уникальный идентификатор аэропорта.
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
