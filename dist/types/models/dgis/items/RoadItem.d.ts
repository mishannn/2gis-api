import Dates from '../Dates';
import Context from '../Context';
import Stat from '../Stat';
import Reviews from '../Reviews';
import Geometry from '../Geometry';
import Statistics from '../Statistics';
import Group from '../Group';
import Album from '../content/Album';
import Locale from '../Locale';
import SearchAttributes from '../SearchAttributes';
import Point from '../Point';
import SourceType from '../SourceType';
export default interface RoadItem {
    /**
     * Идентификатор дороги.
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
     * Тип объекта.
     *
     * Возможные значения:
     *
     *  * road — дорога.
     */
    type: 'road';
    /**
     * Название дороги (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Собственное название дороги.
     */
    name?: string;
    /**
     * Полное название дороги.
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
     * Динамическая информация.
     */
    context?: Context;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Отзывы о геообъекте.
     */
    reviews?: Reviews;
    /**
     * Геометрия дороги.
     */
    geometry?: Geometry;
    /**
     * Сводная информация о дороге.
     */
    statistics?: Statistics;
    /**
     * Связанные в объединённую карточку объекты.
     */
    group?: Group[] | {
        [key: string]: any;
    };
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
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
