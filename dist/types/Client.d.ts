import { ItemsRequestParams, MarkersRequestParams, MarkersClusteredRequestParams } from './models/api/requests/requestParams';
import ItemsResponseResult from './models/api/responses/items/ItemsResponseResult';
import MarkersResponseResult from './models/api/responses/markers/MarkersResponseResult';
import MarkersClusteredResponseResult from './models/api/responses/markers/MarkersClusteredResponseResult';
export interface ClientOptions {
    apiKey: string;
    ridKey: string;
    appVersion: string;
}
export declare class Client {
    private apiKey;
    private ridKey;
    private appVersion;
    private axios;
    constructor(options: ClientOptions);
    getItems(params: ItemsRequestParams): Promise<ItemsResponseResult>;
    getMarkers(params: MarkersRequestParams): Promise<MarkersResponseResult>;
    getMarkersClustered(params: MarkersClusteredRequestParams): Promise<MarkersClusteredResponseResult>;
    sendGetRequest<S, R>(url: string, params: S): Promise<R>;
}
export * from './models/api/requests/requestParams';
