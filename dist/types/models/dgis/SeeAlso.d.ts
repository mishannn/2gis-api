import NameEx from './NameEx';
import Point from './Point';
import Address from './address/Address';
import Org from './Org';
import Stat from './Stat';
import Ad from './ad/Ad';
export default interface SeeAlso {
    /**
     * Уникальный идентификатор филиала организации.
     */
    id: string;
    /**
     * Тип объекта.
     *
     * Возможные значения:
     *
     *  * branch — филиал.
     */
    type: 'branch';
    /**
     * Название филиала организации.
     */
    name: string;
    /**
     * Составные части наименования организации.
     */
    name_ex: NameEx;
    /**
     * Координаты точки поиска.
     */
    point?: Point;
    /**
     * Представление поля address в виде одной строки.
     */
    address_name?: string;
    /**
     * Уточнение о местоположении филиала по указанному адресу.
     */
    address_comment?: string;
    /**
     * Рекламные материалы данного филиала.
     */
    ads?: Ad;
    /**
     * URL основного фото филиала.
     */
    main_photo_url?: string;
    /**
     * Организация, к которой относится филиал.
     */
    org: Org;
    address?: Address;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
}
