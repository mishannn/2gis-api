import AdLink from './AdLink';
import AdOptions from './AdOptions';
export default interface Ad {
    /**
     * Является ли рекламодатель обладателем социального пакета.
     */
    is_social?: boolean;
    /**
     * Текст предупреждения для короткого рекламного объявления.
     */
    text_warning?: string;
    /**
     * Текст предупреждения для рекламной статьи.
     */
    article_warning?: string;
    /**
     * Текст предупреждения.
     */
    warning?: string;
    /**
     * Текст короткого рекламного объявления.
     */
    text?: string;
    /**
     * Текст рекламной статьи.
     */
    article?: string;
    /**
     * Рекламная ссылка.
     */
    link?: AdLink;
    /**
     * Структура рекламных опций.
     */
    options?: AdOptions;
}
