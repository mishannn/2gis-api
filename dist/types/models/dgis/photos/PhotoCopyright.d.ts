import PhotoCopyrightType from './PhotoCopyrightType';
import PhotoCopyrightProjectCode from './PhotoCopyrightProjectCode';
export default interface PhotoCopyright {
    /**
     * Тип уведомления.
     *
     * Возможные значения:
     *
     *  * text — текст;
     *  * image — изображение.
     */
    type: PhotoCopyrightType;
    /**
     * В зависимости от значения поля type:
     *
     *  * text — текстовая строка;
     *  * image — адрес изображения.
     */
    value: string;
    /**
     * Ссылка на сайт проекта, предоставившего фотографию.
     */
    url: string;
    /**
     * Код проекта.
     *
     * Возможные значения:
     *
     *  * 2gis — 2gis.ru;
     *  * flamp — flamp.ru;
     *  * foursquare — foursquare.com;
     *  * booking — booking.com.
     */
    code: PhotoCopyrightProjectCode;
}
