import AdmDiv from '../admdiv/AdmDiv';
import Group from '../Group';
import Locale from '../Locale';
import Reviews from '../Reviews';
import Photos from '../photos/Photos';
import Geometry from '../Geometry';
import Album from '../content/Album';
import Stat from '../Stat';
import SourceType from '../SourceType';
import Point from '../Point';
import SearchAttributes from '../SearchAttributes';
import Address from '../address/Address';
import Context from '../Context';
export default interface AttractionItem {
    type: 'attraction';
    /**
     * Уникальный идентификатор геообъекта
     */
    id: string;
    /**
     * Уникальный идентификатор проекта.
     */
    region_id?: string;
    /**
     * Уникальный идентификатор сегмента.
     */
    segment_id?: string;
    /**
     * Принадлежность к административной территории.
     */
    adm_div?: AdmDiv[];
    /**
     * Связанные в объединённую карточку объекты.
     */
    group?: Group[] | {
        [key: string]: any;
    };
    /**
     * Локализованное название типа достопримечательности.
     */
    subtype_name: string;
    subtype: string;
    /**
     * Название достопримечательности (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Название достопримечательности.
     */
    name?: string;
    /**
     * Полное название достопримечательности.
     */
    full_name?: string;
    /**
     * Описание достопримечательности.
     */
    description?: string;
    /**
     * Текущая локаль.
     */
    locale?: Locale;
    /**
     * Авторы.
     */
    authors?: string;
    /**
     * Дата или даты.
     */
    since?: string;
    address?: Address;
    address_comment?: string;
    /**
     * Отзывы о геообъекте.
     */
    reviews?: Reviews;
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Фотографии достопримечательности.
     */
    photos?: Photos;
    /**
     * Геометрия достопримечательности.
     */
    geometry?: Geometry;
    /**
     * Динамическая информация.
     */
    context?: Context;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
     */
    external_content?: Album[];
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
    /**
     * Параметры результата поиска. Возвращается только в поисковых методах версии 3.0.
     */
    search_attributes?: SearchAttributes;
    /**
     * Объект был найден не по идентификатору, а через геокодинг по этой координате
     */
    geocoded_by?: Point;
}
