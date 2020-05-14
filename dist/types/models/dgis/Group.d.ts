import StationType from './transport/StationType';
import ItemType from './ItemType';
export default interface Group {
    /**
     * Идентификатор объекта.
     */
    id: string;
    /**
     * Идентификатор организации.
     */
    org_id?: string;
    /**
     * Идентификатор рубрики.
     */
    rubric_id?: string;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Тип объекта.
     */
    type: ItemType;
    /**
     * Подтип поглощенного объекта.
     */
    subtype?: 'place' | StationType;
}
