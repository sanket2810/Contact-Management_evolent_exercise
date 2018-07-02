import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {ConstantService} from './constant-service';
import {Logger} from './default-log.service';
import {TokenService} from './token.service';


@Injectable()
export class SharedHttpClientService {

  constructor(private router: Router, private http: Http, private _logger: Logger,
              private _tokenService: TokenService) {
  }

  private attachAuthorization(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this._tokenService.get()) {
      headers.append('X-AUTH-TOKEN', this._tokenService.get());
    }

    const options = new RequestOptions({
      headers: headers,
      withCredentials: true
    });

    return options;
  }

  public post(url: string, requestData: any) {

    const options = this.attachAuthorization();
    return this.http.post(url, JSON.stringify(requestData), options);
  }

  public get(url: string) {

    const options = this.attachAuthorization();
    return this.http.get(url, options);
  }

  public put(url: string, requestData: any) {

    const options = this.attachAuthorization();
    return this.http.put(url, JSON.stringify(requestData), options);
  }

  public delete(url: string) {

    const options = this.attachAuthorization();
    return this.http.delete(url, options);
  }

  public extractData(res: Response) {
    if (res.status === 204) {
    } else {
      let body: any;
      if (res.text()) {
        body = res.json();
      }
      return body || {};
    }
  };

  public handleError(error: any) {

    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
