export default interface Content {
    /**
     * Тип контента.
     */
    type: string;
    /**
     * Надпись на кнопке.
     */
    label: string;
    /**
     * URL основного фото в справочнике 2ГИС.
     */
    main_photo_url?: string;
    /**
     * Адрес в справочнике 2ГИС.
     */
    url: string;
    /**
     * Код в справочнике 2ГИС.
     */
    value: string;
}
