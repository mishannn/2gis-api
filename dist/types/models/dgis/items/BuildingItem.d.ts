import AdmDiv from '../admdiv/AdmDiv';
import Booklet from '../content/Booklet';
import Content from '../content/Content';
import Album from '../content/Album';
import Point from '../Point';
import SearchAttributes from '../SearchAttributes';
import SourceType from '../SourceType';
import MetaRubric from '../MetaRubric';
import Stat from '../Stat';
import Flags from '../Flags';
import Context from '../Context';
import Reviews from '../Reviews';
import Links from '../Links';
import Geometry from '../Geometry';
import Attraction from '../Attraction';
import Photos from '../photos/Photos';
import StructureInfo from '../StructureInfo';
import Floors from '../floors/Floors';
import FloorPlans from '../floors/FloorPlans';
import Address from '../address/Address';
import Dates from '../Dates';
import Group from '../Group';
export default interface BuildingItem {
    /**
     * Уникальный идентификатор геообъекта.
     */
    id: string;
    /**
     * Идентификатор региона.
     */
    region_id?: string;
    /**
     * Уникальный идентификатор сегмента.
     */
    segment_id?: string;
    type: 'building';
    /**
     * Название дома.
     */
    name?: string;
    /**
     * Название дома (для использования в функционале «поделиться», для конечных точек маршрута и т. д.).
     */
    caption: string;
    /**
     * Полное название дома.
     */
    full_name?: string;
    /**
     * Собственное имя здания.
     */
    building_name?: string;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Описание назначения здания.
     */
    purpose_name: string;
    /**
     * Текущая локаль.
     */
    locale?: 'cs_CZ' | 'en_CY' | 'es_CL' | 'it_IT' | 'ru_RU' | 'ru_KZ' | 'ru_UA' | 'uk_UA' | 'en_AE' | 'ar_AE' | 'ru_KG' | 'ru_UZ' | 'az_AZ';
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Признак наличия в здании недвижимости на продаже
     */
    has_realty?: boolean;
    /**
     * Признак наличия в здании обслуживающих организаций с возможностью оплатить их услуги онлайн
     */
    has_payments?: boolean;
    /**
     * Принадлежность к административной территории.
     */
    adm_div?: AdmDiv[];
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Связанные в объединённую карточку объекты.
     */
    group?: Group[] | {
        [key: string]: any;
    };
    /**
     * Адрес дома.
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
     * Количество этажей.
     */
    floors?: Floors;
    /**
     * Информация об этажах здания.
     */
    floor_plans?: FloorPlans;
    /**
     * Данные о количестве квартир и материале здания. Поле доступно только в коммерческом API.
     */
    structure_info?: StructureInfo;
    /**
     * Фотографии здания.
     */
    photos?: Photos;
    /**
     * Описание достопримечательности.
     */
    attraction?: Attraction;
    /**
     * Геометрия здания.
     */
    geometry?: Geometry;
    /**
     * Количество организаций в здании, на которые можно написать отзыв на flamp.ru
     */
    allowed_for_reviews_count?: number;
    /**
     * Связанные объекты.
     */
    links?: Links;
    /**
     * Отзывы о геообъекте.
     */
    reviews?: Reviews;
    /**
     * Динамические свойства здания.
     */
    context?: Context;
    /**
     * Внешний контент. Дополнительные данные здания, такие как данные о фотографиях.
     */
    external_content?: (Content | Booklet | Album)[];
    /**
     * Список признаков объекта.
     */
    flags?: Flags;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Доступные метарубрики для выдачи организаций в этом здании.
     */
    metarubrics?: MetaRubric[];
    item_provider?: string;
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
