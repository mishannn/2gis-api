export default interface StopFactor {
    /**
     * Имя дополнительного атрибута.
     */
    name: string;
    /**
     * Идентификатор фильтра по атрибуту. Может отсутствовать, если по данному атрибуту нельзя фильтровать.
     */
    tag?: string;
}
