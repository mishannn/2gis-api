export default interface Stat {
    /**
     * Код match_type результата.
     */
    match_type?: number | {
        [key: string]: any;
    };
    /**
     * Код source_type результата.
     */
    source_type?: number | {
        [key: string]: any;
    };
    /**
     * Признак рекламодателя
     */
    is_advertised?: boolean;
    /**
     * Контекстная рубрика.
     */
    rubr?: string;
    /**
     * Подмножество bss сообщения.
     */
    bss?: {
        [key: string]: any;
    };
    /**
     * Время генерации рекламных весов в формате TIMESTAMP
     */
    adst?: number;
    /**
     * Алгоритм, по которому была подобрана реклама.
     */
    adsalg?: number;
}
