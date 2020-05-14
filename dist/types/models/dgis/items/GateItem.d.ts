import AdmDiv from '../admdiv/AdmDiv';
import Dates from '../Dates';
import Reviews from '../Reviews';
import Geometry from '../Geometry';
import SourceType from '../SourceType';
import Album from '../content/Album';
import Context from '../Context';
import Stat from '../Stat';
import Locale from '../Locale';
import Point from '../Point';
import SearchAttributes from '../SearchAttributes';
export default interface GateItem {
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
    type: 'gate';
    /**
     * Принадлежность к административной территории.
     */
    adm_div?: AdmDiv[];
    /**
     * Название объекта.
     */
    caption: string;
    /**
     * Время внесения информации о филиале в БД.
     */
    dates?: Dates;
    /**
     * Описание прохода или проезда.
     */
    name: string;
    /**
     * Полное название прохода или проезда.
     */
    full_name?: string;
    /**
     * Тип прохода или проезда.
     *
     * Возможные значения:
     *
     *  * main — основной;
     *  * additional — дополнительный;
     *  * service — служебный.
     */
    purpose: 'main' | 'additional' | 'service';
    /**
     * Если true, то проезд до объекта возможен, если false или отсутствует, то нет.
     */
    is_routing_available?: boolean;
    /**
     * Доступность.
     *
     * Возможные значения:
     *
     *  * public — общедоступный;
     *  * paid — платный;
     *  * restricted — для служебного пользования.
     */
    access: 'public' | 'paid' | 'restricted';
    /**
     * Локализованное название типа доступа.
     */
    access_name?: string | {
        [key: string]: any;
    };
    /**
     * Комментарий к доступности. Например, для платного проезда может быть указана стоимость.
     */
    access_comment?: string;
    /**
     * Тип заграждения.
     *
     * Возможные значения:
     *
     *  * gate — ворота;
     *  * gate_barrier — шлагбаум;
     *  * turnstile — турникет;
     *  * wicket — калитка.
     */
    barrier?: 'gate' | 'gate_barrier' | 'turnstile' | 'wicket';
    /**
     * Отзывы о геообъекте.
     */
    reviews?: Reviews;
    /**
     * Геометрия прохода или проезда.
     */
    geometry?: Geometry;
    /**
     * Идентификатор источника данных об объекте. Если отсутсвует, источник данных — 2GIS.
     */
    sources?: SourceType[];
    /**
     * Внешний контент. Дополнительные данные, такие как данные о фотографиях.
     */
    external_content?: Album[];
    /**
     * Динамические свойства филиала.
     */
    context?: Context;
    /**
     * Данные для формирования сообщений статистики.
     */
    stat?: Stat;
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
