export default interface Reviews {
  /**
   * Рейтинг объекта.
   */
  general_rating?: number;

  /**
   * Общее количество отзывов.
   */
  general_review_count?: number;

  /**
   * Разрешено ли отображать отзывы к этому объекту, а также создавать новые отзывы.
   */
  is_reviewable?: boolean;

  /**
   * Разрешено ли оставлять отзывы к данному объекту на сервисе Flamp.
   */
  is_reviewable_on_flamp?: boolean;

  /**
   * Список провайдеров.
   */
  items?: {
    /**
     * Название провайдера.
     */
    tag: 'flamp' | 'foursquare' | '2gis_reviews';
    /**
     * Разрешено ли отображать отзывы к этому объекту, а также создавать новые отзывы.
     */
    is_reviewable: boolean;
  }[];
}
