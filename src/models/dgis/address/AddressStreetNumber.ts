export default interface AddressStreetNumber {
  /**
   * Идентификатор улицы.
   */
  street_id?: string;
  /**
   * Тип объекта
   */
  type: 'street_number';
  /**
   * Название улицы.
   */
  street: string;
  /**
   * Номер дома, включая дроби, корпуса и буквенные обозначения.
   */
  number: string;
}
