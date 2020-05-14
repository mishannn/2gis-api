export type ContactType =
  | 'email'
  | 'website'
  | 'phone'
  | 'fax'
  | 'icq'
  | 'jabber'
  | 'skype'
  | 'vkontakte'
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'pobox'
  | 'youtube'
  | 'odnoklassniki'
  | 'googleplus'
  | 'linkedin'
  | 'pinterest';

export default interface Contact {
  /**
   * Тип контакта.
   */
  type: ContactType;
  /**
   * Техническое значение контакта.
   */
  value: string;
  /**
   * Значение контакта для вывода на экран.
   */
  text?: string;
  /**
   * Значение контакта для вывода на принтер.
   */
  print_text?: string;
  /**
   * Уточняющая информация о контакте.
   */
  comment?: string;
  /**
   * Ссылка на сайт или социальную сеть.
   */
  url?: string;
  /**
   * URL для регистрации бизнес-коннекшна просмотра профиля.
   */
  reg_bc_url?: string;
}
