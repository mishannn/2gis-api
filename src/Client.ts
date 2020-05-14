import axios, { AxiosInstance, AxiosResponse } from 'axios';
import generateRequestId from './utils/generateRequestId';
import { SEARCH_FIRM_URL, SEARCH_QUERY_MARKERS_URL, SEARCH_CLUSTERED_MARKERS_URL } from './models/api/urls';
// import { ItemField, ItemLocale, ItemType, ItemSearchType } from './models/item';
import ErrorResponse from './models/api/responses/ErrorResponse';
import {
  RequestParams,
  ItemsRequestParams,
  MarkersRequestParams,
  MarkersClusteredRequestParams,
} from './models/api/requests/requestParams';
import ItemsResponseResult from './models/api/responses/items/ItemsResponseResult';
// import RegionSearchResult from './models/api/responses/regions/RegionSearchResult';
import { Response } from './models/api/responses/Response';
import MarkersResponseResult from './models/api/responses/markers/MarkersResponseResult';
import MarkersClusteredResponseResult from './models/api/responses/markers/MarkersClusteredResponseResult';

export interface ClientOptions {
  apiKey: string;
  ridKey: string;
  appVersion: string;
}

export class Client {
  // для поддержки типов в NodeJS
  // static default = DGApi;
  // static Client = Client;

  private apiKey!: string;
  private ridKey!: string;
  private appVersion!: string;

  private axios!: AxiosInstance;

  constructor(options: ClientOptions) {
    this.apiKey = options.apiKey;
    this.ridKey = options.ridKey;
    this.appVersion = options.appVersion;

    this.axios = axios.create();
  }

  // async getRegionList(params?: RegionListRequestParams): Promise<RegionSearchResult> {
  //   return this.sendGetRequest(REGIONS_URL, params);
  // }

  async getItems(params: ItemsRequestParams): Promise<ItemsResponseResult> {
    return this.sendGetRequest(SEARCH_FIRM_URL, params);
  }

  async getMarkers(params: MarkersRequestParams): Promise<MarkersResponseResult> {
    return this.sendGetRequest(SEARCH_QUERY_MARKERS_URL, params);
  }

  async getMarkersClustered(params: MarkersClusteredRequestParams): Promise<MarkersClusteredResponseResult> {
    return this.sendGetRequest(SEARCH_CLUSTERED_MARKERS_URL, params);
  }

  async sendGetRequest<S, R>(url: string, params: S): Promise<R> {
    const convertedParams = Object.keys(params).reduce((acc, param) => {
      acc[param] = (params as any)[param].toString();
      return acc;
    }, {} as any);

    const finalParams: S & RequestParams = {
      ...convertedParams,
      key: this.apiKey,
      shv: this.appVersion,
    };

    finalParams.r = generateRequestId(url, finalParams, this.ridKey);

    const response: AxiosResponse<Response<R> | ErrorResponse> = await this.axios.get(url, { params: finalParams });

    if ('result' in response.data) {
      return response.data.result;
    }

    if ('error' in response.data.meta) {
      throw new Error(response.data.meta.error.message);
    }

    throw new Error('Произошла ошибка при выполнении запроса');
  }
}

export * from './models/api/requests/requestParams';
