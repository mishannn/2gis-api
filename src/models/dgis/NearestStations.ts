import RouteType from './transport/RouteType';

export default interface NearestStations {
  /**
   * Уникальный идентификатор остановки.
   */
  id: string;
  /**
   * Название остановки.
   */
  name: string;
  /**
   * Дополнительный комментарий к названию остановки, например название линии (или линий) метро, к которым относится станция.
   */
  comment?: string;
  /**
   * Присутствует, если применяется цветовое кодирование, например в случае станций метро.
   */
  color?: string;
  /**
   * Иконка метро.
   */
  route_logo?: string;
  /**
   * Массив типов транспорта, проходящего через эту остановку.
   */
  route_types: RouteType[];
  /**
   * Расстояние от описываемого объекта до ближайшей остановочной платформы данной остановки в метрах.
   */
  distance: number;
  /**
   * Существует ли внутренний переход на эту станцию из описываемого объекта.
   */
  internal_transition?: boolean;
  /**
   * Вход
   */
  entrance?: {
    /**
     * Уникальный идентификатор входа.
     */
    id?: string;
    /**
     * Описание входа
     */
    name: string;
    /**
     * Номер входа на станцию, если объект является входом.
     */
    entrance_display_name?: string;
    /**
     * Геометрия входа.
     */
    geometry?: {
      /**
       * Визуальный центр геометрии объекта.
       */
      centroid?: string;
      /**
       * Геометрия области, используемой для определения попадания курсора в зону объекта.
       */
      hover?: string;
      /**
       * Геометрия для выделения объекта.
       */
      selection?: string;
      /**
       * Идентификатор стиля для отображения.
       */
      style?: string;
    };
  };
}
