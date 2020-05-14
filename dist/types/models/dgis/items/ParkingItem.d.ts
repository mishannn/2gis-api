import AdmDiv from '../admdiv/AdmDiv';
import Point from '../Point';
import Dates from '../Dates';
import Address from '../address/Address';
import Schedule from '../Schedule';
import Reviews from '../Reviews';
import ParkingCapacity from '../parking/ParkingCapacity';
import Geometry from '../Geometry';
import Links from '../Links';
import Context from '../Context';
import Stat from '../Stat';
import Group from '../Group';
import SourceType from '../SourceType';
import Album from '../content/Album';
import Locale from '../Locale';
export default interface ParkingItem {
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
    type: 'parking';
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Тип парковки.
     */
    subtype: 'ground' | 'underground' | 'multilevel';
    /**
     * Название парковки (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Назначение парковки.
     *
     * Возможные значения:
     *
     *  * car — для автомобилей;
     *  * bike — для велосипедов;
     *  * motorbike — для мотоциклов/мопедов.
     */
    purpose: 'car' | 'bike' | 'motorbike';
    /**
     * Собственное название парковки.
     */
    name?: string;
    /**
     * Полное название парковки.
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
     * Адрес здания, в котором находится парковка.
     */
    address?: Address;
    /**
     * Представление поля address в виде одной строки.
     */
    address_name?: string;
    /**
     * То же, что и address_name, но с указанием города.
     */
    full_address_name?: string;
    /**
     * Количество уровней парковки.
     */
    level_count?: number;
    /**
     * Является ли парковка платной.
     */
    is_paid: boolean;
    /**
     * Является ли парковка перехватывающей.
     */
    is_incentive: boolean;
    /**
     * Тип доступа.
     *
     * Возможные значения:
     *
     *  * public — общедоступная;
     *   * handicapped_only — только для инвалидов;
     *  * customers_only — только для клиентов;
     *  * residents_only — только для резидентов.
     */
    access: 'public' | 'handicapped_only' | 'customers_only' | 'residents_only';
    /**
     * Локализованное название для типа доступа.
     */
    access_name?: string | {
        [key: string]: any;
    };
    /**
     * Комментарий про платность, про дополнительные ограничения и пр.
     */
    access_comment?: string;
    /**
     * Комментарий. Поле предназначено для добавления какой-либо дополнительной информации о парковке.
     */
    comment?: string;
    /**
     * Расписание работы парковки.
     */
    schedule?: Schedule;
    /**
     * Отзывы о геообъекте.
     */
    reviews?: Reviews;
    /**
     * Вместимость парковки.
     */
    capacity?: ParkingCapacity;
    /**
     * Геометрия парковки.
     */
    geometry?: Geometry;
    /**
     * Связанные объекты.
     */
    links?: Links;
    /**
     * Динамическая информация
     */
    context?: Context;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
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
     * Временная зона объекта в формате POSIX.
     */
    timezone?: string;
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
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
    /**
     * Параметры результата поиска. Возвращается только в поисковых методах версии 3.0.
     */
    search_attributes?: {
        [key: string]: any;
    };
    /**
     * Объект был найден не по идентификатору, а через геокодинг по этой координате
     */
    geocoded_by?: Point;
}
