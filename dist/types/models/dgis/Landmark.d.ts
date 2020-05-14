import StationType from './transport/StationType';
import LandmarkType from './LandmarkType';
export default interface Landmark {
    /**
     * Уникальный идентификатор ориентира.
     */
    id: string;
    /**
     * Тип объекта.
     *
     * Возможные значения:
     *
     *  * station_platform — остановочная платформа;
     *  * station_entrance — вход на станцию;
     *  * building — здание;
     *  * branch — филиал организации;
     *  * adm_div — административная единица.
     */
    type: LandmarkType;
    /**
     * Подтип объекта. Для места — place. Для остановочной платформы список возможных подтипов:
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
    subtype?: 'place' | StationType;
    /**
     * ID остановки для типов «остановочная платформа», «вход в метро».
     */
    station_id?: string;
    /**
     * Название объекта.
     */
    name: string;
    /**
     * Номер входа.
     */
    entrance_display_name?: string;
    /**
     * Расстояние от описываемого объекта до ближайшей остановочной платформы данной остановки в метрах.
     */
    distance: number;
    /**
     * Азимут до объекта.
     */
    azimuth?: number;
}
