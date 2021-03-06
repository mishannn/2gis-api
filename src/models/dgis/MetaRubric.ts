export default interface MetaRubric {
  /**
   * Идентификатор метарубрики.
   */
  id: string;
  /**
   * Тип объекта.
   */
  type: 'metarubric';
  /**
   * Ссылка на SVG-изображение.
   */
  icon_url?: string;
  /**
   * Название.
   */
  name: string;
  /**
   * Короткая подпись к иконке для отображения в UI.
   */
  caption: string;
  /**
   * Заголовок для отображения в UI.
   */
  title?: string;
  /**
   * Поисковая строка, которая подставляется в строку поиска и которая передается в запрос для формирования выдачи.
   */
  search_query: string;
  /**
   * Уникальное имя метарубрики, которое может использоваться как часть имени файла изображения.
   */
  tag: string;
  /**
   * CTA для раскрытия метарубрики.
   */
  action?: {
    /**
     * Тип действия.
     */
    type?: string;
    /**
     * Идентификатор метарубрики, филиалы которой требуется найти.
     */
    value?: string;
  };
}
