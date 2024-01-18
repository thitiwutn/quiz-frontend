/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { QuizResponseApiResponse } from '../models/quiz-response-api-response';
import { SaveQuizResponseApiResponse } from '../models/save-quiz-response-api-response';
import { SaveQuizRequest } from '../models/save-quiz-request';
import { QuizResultResponseApiResponse } from '../models/quiz-result-response-api-response';
@Injectable({
  providedIn: 'root',
})
class QuizService extends __BaseService {
  static readonly getApiQuizPath = '/api/Quiz';
  static readonly postApiQuizSavePath = '/api/Quiz/Save';
  static readonly postApiQuizSubmitPath = '/api/Quiz/Submit';
  static readonly getApiQuizResultPath = '/api/Quiz/Result';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userId undefined
   * @return Success
   */
  getApiQuizResponse(userId?: number): __Observable<__StrictHttpResponse<QuizResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (userId != null) __params = __params.set('userId', userId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Quiz`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuizResponseApiResponse>;
      })
    );
  }
  /**
   * @param userId undefined
   * @return Success
   */
  getApiQuiz(userId?: number): __Observable<QuizResponseApiResponse> {
    return this.getApiQuizResponse(userId).pipe(
      __map(_r => _r.body as QuizResponseApiResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiQuizSaveResponse(body?: SaveQuizRequest): __Observable<__StrictHttpResponse<SaveQuizResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Quiz/Save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveQuizResponseApiResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiQuizSave(body?: SaveQuizRequest): __Observable<SaveQuizResponseApiResponse> {
    return this.postApiQuizSaveResponse(body).pipe(
      __map(_r => _r.body as SaveQuizResponseApiResponse)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiQuizSubmitResponse(body?: SaveQuizRequest): __Observable<__StrictHttpResponse<SaveQuizResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Quiz/Submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveQuizResponseApiResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiQuizSubmit(body?: SaveQuizRequest): __Observable<SaveQuizResponseApiResponse> {
    return this.postApiQuizSubmitResponse(body).pipe(
      __map(_r => _r.body as SaveQuizResponseApiResponse)
    );
  }

  /**
   * @param quizId undefined
   * @return Success
   */
  getApiQuizResultResponse(quizId?: number): __Observable<__StrictHttpResponse<QuizResultResponseApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (quizId != null) __params = __params.set('quizId', quizId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Quiz/Result`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuizResultResponseApiResponse>;
      })
    );
  }
  /**
   * @param quizId undefined
   * @return Success
   */
  getApiQuizResult(quizId?: number): __Observable<QuizResultResponseApiResponse> {
    return this.getApiQuizResultResponse(quizId).pipe(
      __map(_r => _r.body as QuizResultResponseApiResponse)
    );
  }
}

module QuizService {
}

export { QuizService }
