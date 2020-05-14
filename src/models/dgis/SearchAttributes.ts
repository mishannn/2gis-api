import Point2 from './Point2';
import Advertister from './Advertister';
import Stat2 from './Stat2';

export default interface SearchAttributes {
  /**
   * Идентификаторы всех контекстных рубрик.
   */
  context_rubrics?: string[];
  /**
   * Идентификаторы контекстных атрибутов.
   */
  context_attributes?: string[];
  /**
   * Было ли гео-ограничение в тексте запроса «школа в первомайском».
   */
  geo_restriction?: boolean;
  /**
   * Указанная сортировка.
   */
  sort?: string;
  dgis_project_id?: string;
  /**
   * Все рекламодатели.
   */
  advertisers?: Advertister[];
  /**
   * Общие данные для статистики.
   */
  stat?: Stat2;
  /**
   * Признак, что самый релеватный результат найден по частичному совпадению.
   */
  is_partial?: boolean;
  /**
   * Прямоугольная область, описывающая все результаты поиска.
   */
  out_viewport?: Point2[];
  /**
   * Область, по которой получены данные, чтобы при выходе из нее запросить новые.
   */
  drag_bound?: Point2[];

  [key: string]: any;
}
