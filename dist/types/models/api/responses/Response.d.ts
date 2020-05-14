import ResponseMeta from './ResponseMeta';
export interface Response<T> {
    meta: ResponseMeta;
    result: T;
}
