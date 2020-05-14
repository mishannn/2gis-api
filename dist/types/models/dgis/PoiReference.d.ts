export default interface PoiReference {
    /**
     * Идентификатор связанного объекта.
     */
    id: string;
    /**
     * Тип связанного объекта.
     *
     * Возможные значения:
     */
    type: 'branch' | 'building' | 'station_entrance';
    /**
     * Подтип связанного объекта.
     */
    subtype?: 'metro' | 'stop';
    /**
     * Имя связанного объекта.
     */
    name?: string;
}
