import RouteType from '../transport/RouteType';
import Dates from '../Dates';
import AdmDiv from '../admdiv/AdmDiv';
import Group from '../Group';
import Address from '../address/Address';
import Schedule from '../Schedule';
import StationPlatform from '../transport/StationPlatform';
import TransportRoute from '../transport/TransportRoute';
import Reviews from '../Reviews';
import Links from '../Links';
import Stat from '../Stat';
import Context from '../Context';
import SourceType from '../SourceType';
import StructureInfo from '../StructureInfo';
import Floors from '../floors/Floors';
import Locale from '../Locale';
import Album from '../content/Album';
import Geometry from '../Geometry';
import StationType from '../transport/StationType';
export default interface StationEntranceItem {
    /**
     * Уникальный идентификатор входа.
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
     *  * station_entrance — вход на станцию.
     */
    type: 'station_entrance';
    /**
     * Тип станции.
     *
     * Возможные значения:
     *
     *  * stop — остановка городского наземного транспорта;
     *  * railway — железнодорожный вокзал;
     *  * metro — станция метро;
     *  * river_transport — речной порт;
     *  * trolleybus — троллейбус;
     *  * tram — трамвай;
     *  * funicular_railway — фуникулёр;
     *  * monorail — монорельс;
     *  * cable_car — канатная дорога;
     *  * light_rail — скоростной трамвай;
     *  * premetro — метротрам;
     *  * light_metro — лёгкое метро.
     */
    subtype: StationType;
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Уникальный идентификатор станции, к которой относится вход.
     */
    station_id: string;
    /**
     * Название входа на остановку (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Название станции.
     */
    name: string;
    /**
     * Полное название станции.
     */
    full_name?: string;
    /**
     * Временная зона объекта в формате POSIX.
     */
    timezone?: string;
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Комментарий ко входу.
     */
    comment?: string;
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
     * Описание местоположения объекта.
     */
    address?: Address;
    /**
     * Представление поля address в виде одной строки, готовой для показа пользователю.
     */
    address_name?: string;
    /**
     * То же, что и address_name, но с указанием города.
     */
    full_address_name?: string;
    /**
     * Время работы входа.
     */
    schedule?: Schedule;
    /**
     * Остановочные платформы станции.
     */
    platforms: StationPlatform[];
    /**
     * Маршруты транспорта, проходящие через остановочный пункт.
     */
    routes: TransportRoute[];
    /**
     * Отзывы о входе.
     */
    reviews?: Reviews;
    /**
     * Связанные объекты.
     */
    links?: Links;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Динамические свойства входа.
     */
    context?: Context;
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
    /**
     * Иконка метро.
     */
    route_logo?: string;
    /**
     * Тип маршрута.
     */
    route_type?: RouteType;
    /**
     * Геометрия входа.
     */
    geometry?: Geometry;
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
     * Присутствует, если применяется цветовое кодирование, например в случае станций метро.
     */
    color?: string;
    /**
     * Описание назначения здания.
     */
    purpose_name?: string;
    /**
     * Количество этажей.
     */
    floors?: Floors;
    /**
     * Собственное имя здания.
     */
    building_name?: string;
    /**
     * Данные о материале здания. Поле доступно только в коммерческом API.
     */
    structure_info?: StructureInfo;
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
}
