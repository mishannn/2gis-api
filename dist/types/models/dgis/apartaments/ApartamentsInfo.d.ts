import ApartamentsFloor from './ApartamentsFloor';
export default interface ApartamentsInfo {
    /**
     * Номер дома, к которому относится вход. Выгружается только в случае, когда подъезды имеют свои отдельные адреса.
     */
    building_number?: string;
    /**
     * true, если распределение квартир по этажам было произведено автоматически.
     */
    calculated: boolean;
    /**
     * Информация о распределении квартир по этажам.
     */
    floors: ApartamentsFloor[];
}
