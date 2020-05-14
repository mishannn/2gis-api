import AdLogo from './AdLogo';
import AdAction from './AdAction';
import AdVideo from './AdVideo';
import AdImage from './AdImage';
import AdTexts from './AdTexts';

export default interface AdBuyHere {
  /**
   * Идентификатор owned рубрики.
   */
  owned_rubric_id: string;
  /**
   * Идентификатор филиала организации-владельца ЗМК.
   */
  branch_id: string;
  /**
   * Идентификатор организации-владельца ЗМК.
   */
  org_id: string;
  /**
   * Идентификатор позиции заказа.
   */
  ads_id?: string;
  hash: string;
  /**
   * Является ли owned рубрика primary.
   */
  is_primary?: boolean;
  /**
   * Пользовательский заголовок объявления.
   */
  custom_title: string;
  /**
   * Заголовок объявления.
   */
  title: string;
  /**
   * Логотип рекламодателя.
   */
  logo?: AdLogo;
  /**
   * Список действий по внешним рекламным ресурсам.
   */
  actions?: AdAction[];
  /**
   * Список рекламных видео материалов.
   */
  videos?: AdVideo[];
  /**
   * Список рекламных изображений.
   */
  images?: AdImage[];
  /**
   * Рекламные тексты.
   */
  ads_texts: AdTexts;
}
