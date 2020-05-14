import Content from './Content';
export default interface Album extends Content {
    /**
     * Тип контента.
     */
    type: string;
    /**
     * Код альбома.
     */
    subtype: 'common' | 'view' | 'facilities';
    /**
     * Количество фотографий в альбоме.
     */
    count: number;
    /**
     * URL для регистрации бизнес-коннекшна просмотра профиля.
     */
    reg_bc_url?: string;
}
