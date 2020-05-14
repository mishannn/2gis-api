import ApartamentsFloorInfo from './ApartamentsFloorInfo';

export default interface ApartamentsFloor {
  /**
   * Непустое название этажа.
   */
  name?: ApartamentsFloorInfo | string;
  /**
   * Квартиры на этаже.
   */
  apartments?: ApartamentsFloorInfo | ApartamentsFloorInfo[] | string;
}
