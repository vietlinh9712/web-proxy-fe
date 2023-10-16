import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_API_URL') private baseUrl: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse) {
        if(event.body?.error_info?.error_code) {
          throw event.body;
        }
      }
      return event;
    }));
  }
}
