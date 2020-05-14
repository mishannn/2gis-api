import AddressStreetNumber from './AddressStreetNumber';
import AddressBuildingNumber from './AddressBuildingNumber';
import AddressLocation from './AddressLocation';
export default interface Address {
    /**
     * Уникальный идентификатор дома, к которому относится данный адрес.
     */
    building_id?: string;
    /**
     * Почтовый индекс.
     */
    postcode?: string;
    /**
     * Уникальный почтовый код здания.
     */
    building_code?: string;
    /**
     * Название здания (в адресе для филиалов).
     */
    building_name?: string;
    /**
     * Makani адрес объекта.
     */
    makani?: string;
    /**
     * Массив компонентов адреса.
     *
     * Возможные значения:
     *
     *  * типичный адрес;
     *  * только номер дома;
     *  * универсальное описание.
     */
    components?: (AddressStreetNumber | AddressBuildingNumber | AddressLocation)[];
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
}
