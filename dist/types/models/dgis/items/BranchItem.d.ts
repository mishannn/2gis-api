import NameEx from '../NameEx';
import AdmDiv from '../admdiv/AdmDiv';
import Point from '../Point';
import Locale from '../Locale';
import ContactGroup from '../ContactGroup';
import Schedule from '../Schedule';
import Booklet from '../content/Booklet';
import Album from '../content/Album';
import Content from '../content/Content';
import Rubric from '../Rubric';
import MetaRubric from '../MetaRubric';
import Reviews from '../Reviews';
import SearchAttributes from '../SearchAttributes';
import Group from '../Group';
import Address from '../address/Address';
import AttributeGroup from '../AttributeGroup';
import Ad from '../ad/Ad';
import Dates from '../Dates';
import Photos from '../photos/Photos';
import Org from '../Org';
import SeeAlso from '../SeeAlso';
import Flags from '../Flags';
import Links from '../Links';
import Floors from '../floors/Floors';
import StructureInfo from '../StructureInfo';
import Context from '../Context';
import Email from '../Email';
import StopFactor from '../StopFactor';
import Stat from '../Stat';
import Geometry from '../Geometry';
import SourceType from '../SourceType';
export default interface BranchItem {
    type: 'branch';
    /**
     * Уникальный идентификатор филиала организации.
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
     * Полное собственное название филиала или название организации.
     */
    name?: string;
    /**
     * Полное собственное название филиала или название организации.
     */
    caption?: string;
    /**
     * Временная зона объекта в формате POSIX.
     */
    timezone?: string;
    /**
     * Составные части наименования организации.
     */
    name_ex: NameEx;
    /**
     * Псевдоним названия организации.
     */
    alias?: string;
    /**
     * Индивидуальный номер налогоплательщика. Поле доступно только в коммерческом API.
     */
    itin?: string;
    /**
     * Признак удаленного объекта
     */
    is_deleted?: boolean;
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Признак того, что это главный объект в группе объектов гибрида.
     */
    is_main_in_group?: boolean;
    /**
     * Фирма участвует в промо-акции "Чека"
     */
    is_promoted?: boolean;
    /**
     * Фирма опубликовала свой список товаров
     */
    has_goods?: boolean;
    /**
     * Признак наличия в здании недвижимости на продаже
     */
    has_realty?: boolean;
    /**
     * У фирмы включен блок «Закрепленные товары».
     */
    has_pinned_goods?: boolean;
    /**
     * Признак того, что можно оплатить услуги фирмы онлайн
     */
    has_payments?: boolean;
    /**
     * Координаты точки поиска, заданные в системе координат WGS84 в формате lon, lat.
     */
    point?: Point;
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
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
     * Адрес, по которому располагается филиал организации.
     */
    address?: Address;
    /**
     * Лицензия филиала. Поле доступно только в коммерческом API.
     */
    trade_license?: {
        license: string;
        type?: string;
        legal_form?: string;
        end_date?: string;
    };
    /**
     * Представление поля address в виде одной строки.
     */
    address_name?: string;
    /**
     * То же, что и address_name, но с указанием города.
     */
    full_address_name?: string;
    /**
     * Уточнение о местоположении филиала по указанному адресу.
     */
    address_comment?: string;
    /**
     * Численность сотрудников организации. Поле доступно только в коммерческом API.
     *
     * Доступные варианты:
     *  * нет данных
     *  * до 15
     *  * 16-100
     *  * 101-250
     *  * 251-1000
     *  * более 1000
     */
    employees_org_count?: string;
    /**
     * Описание свойств организации.
     */
    org: Org;
    /**
     * Дополнительные атрибуты филиала.
     */
    attribute_groups?: AttributeGroup[];
    /**
     * Текущая локаль для региона.
     */
    locale: Locale;
    /**
     * Контакты филиала.
     */
    contact_groups?: ContactGroup[];
    /**
     * Расписание работы филиала.
     */
    schedule?: Schedule;
    /**
     * Дополнительные данные филиала, такие как буклеты и фотографии.
     */
    external_content?: (Content | Booklet | Album)[];
    /**
     * Рубрики филиала.
     */
    rubrics: Rubric[];
    owned_rubrics?: string[];
    /**
     * Доступные метарубрики для выдачи организаций в гибридном объекте.
     */
    metarubrics?: MetaRubric[];
    /**
     * Отзывы о филиале.
     */
    reviews?: Reviews;
    /**
     * Рекламные материалы данного филиала.
     */
    ads?: Ad;
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Фотографии, связанные с филиалом.
     */
    photos?: Photos;
    /**
     * Список «смотри также».
     */
    see_also?: SeeAlso[];
    /**
     * Список признаков объекта.
     */
    flags?: Flags;
    /**
     * Связанные объекты.
     */
    links?: Links;
    /**
     * Количество этажей в здании.
     */
    floors?: Floors;
    /**
     * Собственное имя здания.
     */
    building_name?: string;
    /**
     * Полное название дома.
     */
    full_name?: string;
    /**
     * Описание назначения здания.
     */
    purpose_name?: string;
    /**
     * Данные о количестве квартир и материале здания. Поле доступно только в коммерческом API.
     */
    structure_info?: StructureInfo;
    /**
     * Динамические свойства филиала.
     */
    context?: Context;
    /**
     * Отправка email в компанию
     */
    email_for_sending?: Email;
    /**
     * Набор блокирующих атрибутов, соответствующих запросу.
     */
    stop_factors?: StopFactor[];
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
    /**
     * Описание.
     */
    description?: string;
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
    /**
     * Смещение таймзоны в минутах относительно UTC0.
     */
    timezone_offset?: number;
    geometry?: Geometry;
    /**
     * Параметры результата поиска. Возвращается только в поисковых методах версии 3.0.
     */
    search_attributes?: SearchAttributes;
}
