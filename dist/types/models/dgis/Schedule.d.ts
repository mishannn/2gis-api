export interface ScheduleDay {
    working_hours: WorkingHours[];
}
export interface WorkingHours {
    /**
     * Значение в формате hh:mm
     */
    from: string;
    /**
     * Значение в формате hh:mm
     */
    to: string;
}
export default interface Schedule {
    /**
     * Понедельник.
     */
    Mon?: ScheduleDay;
    /**
     * Вторник.
     */
    Tue?: ScheduleDay;
    /**
     * Среда.
     */
    Wed?: ScheduleDay;
    /**
     * Четверг.
     */
    Thu?: ScheduleDay;
    /**
     * Пятница.
     */
    Fri?: ScheduleDay;
    /**
     * Суббота.
     */
    Sat?: ScheduleDay;
    /**
     * Воскресенье.
     */
    Sun?: ScheduleDay;
    /**
     * Признак того, что организация работает круглосуточно 7 дней в неделю. Если поле отсутствует, то организация не считается работающей круглосуточно.
     */
    is_24x7?: boolean;
    /**
     * Комментарий.
     */
    comment?: string;
    /**
     * Локализованное описание возможных изменений во времени работы. Применяется для праздников, временных ограничений и т.д.
     */
    description?: string;
    /**
     * Дата начала изменений в расписании работы. Формат: "YYYY-MM-DD"
     */
    date_from?: string;
    /**
     * Дата конца изменений в расписании работы. Формат: "YYYY-MM-DD"
     */
    date_to?: string;
}
