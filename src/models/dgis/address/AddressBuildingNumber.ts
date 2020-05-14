export default interface AddressBuildingNumber {
  /**
   * Тип объекта.
   */
  type: 'number';
  /**
   * Номер дома, включая дроби и буквенные обозначения. Возможно, имя собственное, если так принято.
   */
  number: string;
}
