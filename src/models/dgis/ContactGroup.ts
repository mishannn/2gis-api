import Contact from './Contact';
import Schedule from './Schedule';

export default interface ContactGroup {
  /**
   * Имя группы контактов.
   */
  name?: string;
  /**
   * Комментарий к группе контактов.
   */
  comment?: string;
  /**
   * Расписание группы контактов.
   */
  schedule?: Schedule;
  /**
   * Список контактов
   */
  contacts: Contact[];
}
