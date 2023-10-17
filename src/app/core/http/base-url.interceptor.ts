import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";

const URL_BE = ['login', 'registers', 'vps', 'users', 'proxies'];

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_API_URL') private baseUrl: string,
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = request;
      newReq = newReq.clone({
        params:  new HttpParams().set('ctx.access_token', this.authService.accessToken)
      });
    const apiReq = URL_BE.some(url => newReq.url.includes(url)) ? newReq.clone({ url: `${this.baseUrl}/${newReq.url}` }) : newReq;
    return next.handle(apiReq);
  }
}
