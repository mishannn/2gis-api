import PhotoCopyright from './PhotoCopyright';
import PhotoUrls from './PhotoUrls';
export default interface PhotoItem {
    /**
     * Хеш уникального идентификатора (используется для подстановки в URL, при открытии фотографии).
     */
    hash: string;
    urls: PhotoUrls;
    /**
     * Описание фотографии.
     */
    description?: string;
    /**
     * Уведомление об авторских правах.
     */
    copyright?: PhotoCopyright;
}
