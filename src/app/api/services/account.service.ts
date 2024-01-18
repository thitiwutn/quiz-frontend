/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserResponseApiResponse } from '../models/user-response-api-response';
import { CreateUser } from '../models/create-user';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly getApiAccountUserPath = '/api/Account/User';
  static readonly postApiAccountUserPath = '/api/Account/User';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userName undefined
   * @return Success
   */
  getApiAccountUserResponse(userName?: string): __Observable<__StrictHttpResponse<UserResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (userName != null) __params = __params.set('userName', userName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Account/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserResponseApiResponse>;
      })
    );
  }
  /**
   * @param userName undefined
   * @return Success
   */
  getApiAccountUser(userName?: string): __Observable<UserResponseApiResponse> {
    return this.getApiAccountUserResponse(userName).pipe(
      __map(_r => _r.body as UserResponseApiResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiAccountUserResponse(body?: CreateUser): __Observable<__StrictHttpResponse<UserResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserResponseApiResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiAccountUser(body?: CreateUser): __Observable<UserResponseApiResponse> {
    return this.postApiAccountUserResponse(body).pipe(
      __map(_r => _r.body as UserResponseApiResponse)
    );
  }
}

module AccountService {
}

export { AccountService }
