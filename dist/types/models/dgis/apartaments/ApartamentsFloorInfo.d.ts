export default interface ApartamentsFloorInfo {
    /**
     * Номер первого этажа диапазона.
     */
    start: number;
    /**
     * Номер последнего этажа диапазона.
     */
    end: number;
    /**
     * Положительное значение шага изменения номера, по умолчанию 1.
     */
    step?: number;
}
