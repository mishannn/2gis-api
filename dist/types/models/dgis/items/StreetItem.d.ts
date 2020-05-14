import Locale from '../Locale';
import AdmDiv from '../admdiv/AdmDiv';
import Photos from '../photos/Photos';
import Dates from '../Dates';
import Attraction from '../Attraction';
import Geometry from '../Geometry';
import Context from '../Context';
import Statistics from '../Statistics';
import Stat from '../Stat';
import Reviews from '../Reviews';
import SourceType from '../SourceType';
import Group from '../Group';
import Album from '../content/Album';
import SearchAttributes from '../SearchAttributes';
import Point from '../Point';
export default interface StreetItem {
    /**
     * Тип объекта.
     *
     * Возможные значения:
     *
     *  * street — улица.
     */
    type: 'street';
    /**
     * Уникальный идентификатор геообъекта.
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
     * Название улицы.
     */
    name: string;
    /**
     * Название улицы (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Полное название улицы.
     */
    full_name?: string;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Принадлежность к административной территории.
     */
    adm_div?: AdmDiv[];
    /**
     * Фотографии улицы.
     */
    photos?: Photos;
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Описание достопримечательности.
     */
    attraction?: Attraction;
    /**
     * Геометрия улицы.
     */
    geometry?: Geometry;
    /**
     * Сводная информация об улице.
     */
    statistics?: Statistics;
    /**
     * Динамическая информация.
     */
    context?: Context;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Отзывы о геообъекте
     */
    reviews?: Reviews;
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
    /**
     * Связанные в объединённую карточку объекты.
     */
    group?: Group[] | {
        [key: string]: any;
    };
    /**
     * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
     */
    external_content?: Album[];
    /**
     * Текущая локаль.
     */
    locale?: Locale;
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
