import Attribute from './Attribute';

export default interface AttributeGroup {
  /**
   * Адрес иконки.
   */
  icon_url?: string;

  /**
   * Название группы дополнительных атрибутов.
   */
  name?: string;

  /**
   * Признак того, что есть пересечение между контекстными рубриками и рубриками дополнительных атрибутов этой группы.
   */
  is_context: boolean;

  /**
   * Признак того, что есть пересечение между primary рубриками филиала и рубриками дополнительных атрибутов этой группы.
   */
  is_primary: boolean;

  /**
   * Массив идентификаторов рубрик, связанных с группой дополнительных атрибутов
   */
  rubric_ids: string[];

  /**
   * Список допоплнительных атрибутов в данной группе.
   */
  attributes: Attribute[];
}
