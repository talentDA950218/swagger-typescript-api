/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type Pet = NewPet & { id: number };

export interface NewPet {
  name: string;
  tag?: string;
}

export interface ErrorModel {
  code: number;
  message: string;
}

export type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
};

export type RequestQueryParamsType = Record<string | number, any>;

interface ApiConfig<SecurityDataType> {
  baseUrl?: string;
  baseApiParams?: RequestParams;
  securityWorker?: (securityData: SecurityDataType) => RequestParams;
}

interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D | null;
  error: E | null;
}

enum BodyType {
  Json,
}

class HttpClient<SecurityDataType> {
  public baseUrl: string = "http://petstore.swagger.io/api";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: RequestQueryParamsType, key: string) {
    return (
      encodeURIComponent(key) + "=" + encodeURIComponent(Array.isArray(query[key]) ? query[key].join(",") : query[key])
    );
  }

  protected addQueryParams(rawQuery?: RequestQueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys.length
      ? `?${keys
          .map((key) =>
            typeof query[key] === "object" && !Array.isArray(query[key])
              ? this.addQueryParams(query[key] as object).substring(1)
              : this.addQueryParam(query, key),
          )
          .join("&")}`
      : "";
  }

  private bodyFormatters: Record<BodyType, (input: any) => any> = {
    [BodyType.Json]: JSON.stringify,
  };

  private mergeRequestOptions(params: RequestParams, securityParams?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {}),
      },
    };
  }

  private safeParseResponse = <T = any, E = any>(response: Response): Promise<HttpResponse<T, E>> => {
    const r = response.clone() as HttpResponse<T, E>;
    r.data = null;
    r.error = null;

    return response
      .json()
      .then((data) => {
        if (r.ok) {
          r.data = data;
        } else {
          r.error = data;
        }
        return r;
      })
      .catch((e) => {
        r.error = e;
        return r;
      });
  };

  public request = <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    bodyType?: BodyType,
    secureByDefault?: boolean,
  ): Promise<HttpResponse<T>> => {
    const requestUrl = `${this.baseUrl}${path}`;
    const secureOptions =
      (secureByDefault || secure) && this.securityWorker ? this.securityWorker(this.securityData) : {};
    const requestOptions = {
      ...this.mergeRequestOptions(params, secureOptions),
      method,
      body: body ? this.bodyFormatters[bodyType || BodyType.Json](body) : null,
    };

    return fetch(requestUrl, requestOptions).then(async (response) => {
      const data = await this.safeParseResponse<T, E>(response);
      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Swagger Petstore
 * @version 1.0.0
 * @baseUrl http://petstore.swagger.io/api
 * A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
 */
export class Api<SecurityDataType = any> extends HttpClient<SecurityDataType> {
  pets = {
    /**
     * @name findPets
     * @request GET:/pets
     * @description Returns all pets from the system that the user has access to
     */
    findPets: (query?: { tags?: string[]; limit?: number }, params?: RequestParams) =>
      this.request<Pet[], ErrorModel>(`/pets${this.addQueryParams(query)}`, "GET", params),

    /**
     * @name addPet
     * @request POST:/pets
     * @description Creates a new pet in the store.  Duplicates are allowed
     */
    addPet: (pet: NewPet, params?: RequestParams) => this.request<Pet, ErrorModel>(`/pets`, "POST", params, pet),

    /**
     * @name findPetById
     * @request GET:/pets/{id}
     * @description Returns a user based on a single ID, if the user does not have access to the pet
     */
    findPetById: (id: number, params?: RequestParams) => this.request<Pet, ErrorModel>(`/pets/${id}`, "GET", params),

    /**
     * @name deletePet
     * @request DELETE:/pets/{id}
     * @description deletes a single pet based on the ID supplied
     */
    deletePet: (id: number, params?: RequestParams) => this.request<any, ErrorModel>(`/pets/${id}`, "DELETE", params),
  };
}
