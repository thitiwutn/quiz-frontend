/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GroupModelICollectionApiResponse } from '../models/group-model-icollection-api-response';
@Injectable({
  providedIn: 'root',
})
class GroupService extends __BaseService {
  static readonly getApiGroupPath = '/api/Group';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiGroupResponse(): __Observable<__StrictHttpResponse<GroupModelICollectionApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Group`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupModelICollectionApiResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiGroup(): __Observable<GroupModelICollectionApiResponse> {
    return this.getApiGroupResponse().pipe(
      __map(_r => _r.body as GroupModelICollectionApiResponse)
    );
  }
}

module GroupService {
}

export { GroupService }
