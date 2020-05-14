import RouteType from '../transport/RouteType';
import AdmDiv from '../admdiv/AdmDiv';
import Locale from '../Locale';
import Album from '../content/Album';
import Context from '../Context';
import Stat from '../Stat';
import Geometry from '../Geometry';
import Dates from '../Dates';
import StationType from '../transport/StationType';
import Group from '../Group';
import Reviews from '../Reviews';
import Schedule from '../Schedule';
import StationPlatform from '../transport/StationPlatform';
import TransportRoute from '../transport/TransportRoute';
import Links from '../Links';
export default interface StationItem {
    /**
     * Уникальный идентификатор остановки.
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
     *  * station — остановка.
     */
    type: 'station';
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Тип станции.
     */
    subtype: StationType;
    /**
     * Название остановки (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Название остановки.
     */
    name: string;
    /**
     * Полное название остановки.
     */
    full_name?: string;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Временная зона объекта в формате POSIX.
     */
    timezone?: string;
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
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
     * Отзывы о станции.
     */
    reviews?: Reviews;
    /**
     * Время работы станции.
     */
    schedule?: Schedule;
    /**
     * Остановочные платформы остановки.
     */
    platforms: StationPlatform[];
    /**
     * Маршруты транспорта, проходящие через станцию или остановку.
     */
    routes?: TransportRoute[];
    /**
     * Иконка метро.
     */
    route_logo?: string;
    /**
     * Связанные объекты.
     *
     * Возможные значения:
     *
     *  * entrances — входы на станцию;
     *  * database_entrances — точки входа;
     *  * nearest_stations — расположенные поблизости остановки, в том числе переходы на другие станции метро, помимо станции, связанной со входом.
     */
    links?: Links;
    /**
     * Геометрия остановки.
     */
    geometry?: Geometry;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Динамические свойства станции.
     */
    context?: Context;
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: string[];
    /**
     * Смещение таймзоны в минутах относительно UTC0.
     */
    timezone_offset?: number;
    /**
     * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
     */
    external_content?: Album[];
    /**
     * Текущая локаль.
     */
    locale?: Locale;
    /**
     * Тип маршрута.
     */
    route_type?: RouteType;
    /**
     * Присутствует, если применяется цветовое кодирование, например в случае станций метро.
     */
    color?: string;
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
}
