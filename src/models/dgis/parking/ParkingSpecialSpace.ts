export default interface ParkingSpecialSpace {
  /**
   * Тип особого места.
   *
   * Возможные значения:
   *
   *  * bicycle — для велосипедов;
   *  * motorbike — для мотоциклов;
   *  * family — для семей;
   *  * handicapped — для инвалидов.
   */
  type: 'bicycle' | 'motorbike' | 'family' | 'handicapped';
  /**
   * Локализованное название особого места.
   */
  name?: string;
  /**
   * Количество мест такого типа на парковке.
   */
  count?: string;
}
