import Content from './Content';

export default interface Booklet extends Content {
  /**
   * Тип контента.
   */
  type: 'booklet';

  /**
   * Тип буклета.
   */
  subtype?: 'buildings' | 'saunas';

  /**
   * Заголовок персональной страницы филиала в справочнике 2ГИС.
   */
  title?: string;

  rubric_id?: number;

  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;

  rubric_ids: string[];
}
