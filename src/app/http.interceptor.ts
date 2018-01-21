// https://juristr.com/blog/2017/08/intercept-http-requests-in-angular/
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {
    requestResponseCounter = 0;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requestResponseCounter++;
      console.log('Request logged', this.requestResponseCounter, request);
    return next.handle(request)
    .do((ev: HttpEvent<any>) => {
      if (ev instanceof HttpResponse) {
        console.log('Response logged', this.requestResponseCounter, ev);
      }
    })
    .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', this.requestResponseCounter, response);
        }

        return Observable.throw(response);
      });
  }
}
