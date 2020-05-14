import AdLogo from './AdLogo';
import AdAction from './AdAction';
import AdBanner from './AdBanner';
import AdVideo from './AdVideo';
import AdImage from './AdImage';
import AdBuyHere from './AdBuyHere';
import AdBuyHereOwner from './AdBuyHereOwener';
export default interface AdOptions {
    /**
     * Логотип рекламодателя.
     */
    logo?: AdLogo;
    discount?: boolean;
    /**
     * Список действий по внешним рекламным ресурсам.
     */
    actions?: AdAction[];
    /**
     * Список рекламных видеоматериалов.
     */
    videos?: AdVideo[];
    /**
     * Список рекламных изображений.
     */
    images?: AdImage[];
    /**
     * Цвет брендирования.
     */
    color?: string;
    /**
     * Рекламные материалы для доноров ЗМК («Здесь можно купить»).
     */
    buy_here?: AdBuyHere[];
    /**
     * Рекламные материалы для owner'а owned рубрики.
     */
    buy_here_owner?: AdBuyHereOwner[];
    /**
     * Контекстный баннер.
     */
    cb?: AdBanner;
}
