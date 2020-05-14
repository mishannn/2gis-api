import EntranceGeometry from './EntranceGeometry';
import ApartamentsInfo from '../apartaments/ApartamentsInfo';
import EntranceRelativeGeometry from './EntranceRelativeGeometry';
export default interface DatabaseEntrance {
    /**
     * Уникальный идентификатор входа.
     */
    id: string;
    /**
     * Описание входа.
     */
    name?: string;
    /**
     * Комментарий ко входу.
     */
    comment?: string;
    /**
     * Номер входа.
     */
    entrance_display_name?: string;
    /**
     * Является ли вход основным.
     */
    is_primary: boolean;
    /**
     * Если присутствует и равен true, то вход отображается в списке входов.
     */
    is_visible_on_map?: boolean;
    /**
     * Отсутствуют для входов без квартир. Должны полностью совпадать для входов, имеющих одинаковое название.
     */
    is_visible_in_ui?: boolean;
    /**
     * Если присутствует и равен true, то для этого входа на карте отображаются poi.
     */
    has_poi?: boolean;
    /**
     * Непустое имя подъезда.
     */
    entity_name?: string;
    /**
     * Номер подъезда.
     */
    entity_number?: string;
    /**
     * Информация о квартирах в доме.
     */
    apartments_info?: ApartamentsInfo;
    /**
     * Геометрия входа.
     */
    geometry: EntranceGeometry;
    /**
     * Отсутствует для входов со сложной геометрией.
     */
    relative_geometry?: EntranceRelativeGeometry;
}
