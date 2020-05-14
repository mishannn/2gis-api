import Geometry from '../Geometry';
import Platform from '../Platform';
export declare type RouteDirectionType = 'forward' | 'backward' | 'additional' | 'circular' | 'loop';
export default interface RouteDirection {
    /**
     * Уникальный 64-битный идентификатор направления маршрута (subroute).
     */
    id: string;
    /**
     * Направление маршрута.
     */
    type: RouteDirectionType;
    /**
     * Название направления маршрута.
     */
    name?: string;
    /**
     * Описание направления маршрута.
     */
    description?: string;
    /**
     * Геометрия направления маршрута.
     */
    geometry: Geometry;
    /**
     * Последовательность остановочных платформ маршрута.
     */
    platforms: Platform[];
}
