import PhotoItem from './PhotoItem';

export default interface Photos {
  items?: PhotoItem[];
  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;
}
