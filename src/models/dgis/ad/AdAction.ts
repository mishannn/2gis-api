import AdsActionType from './AdActionType';
import AdPlatformType from './AdPlatformType';

export default interface AdAction {
  /**
   * Тип действия.
   */
  type: AdsActionType;
  /**
   * Соответствие типов действия и значений поля value:
   *  * link — URL страницы, которую требуется открыть;
   *  * phone — телефон в формате +<цифры без разделителей>;
   *  * callback — URL страницы, на которую требуется отправить данные для заказа обратного звонка;
   *  * open_card — идентификатор объекта справочника, карточку которого требуется открыть;
   *  * search_by_org — идентификатор организации, филиалы которой требуется найти;
   *  * search_by_rubric — идентификатор рубрики, филиалы которой требуется найти;
   *  * search_by_query — текст запроса, по которому требуется выполнить поиск.
   */
  value: string;
  /**
   * Имя действия. Если поле отсутствует, используют для подписи общую локализованную фразу «Узнать больше».
   */
  name?: string;
  /**
   * Коды платформ.
   */
  platforms?: AdPlatformType[];
  /**
   * Подпись, отражающая назначение CTA. Если данное поле присутствует, то именно оно должно быть использовано в качестве надписи на кнопке.
   */
  caption?: string;
}
