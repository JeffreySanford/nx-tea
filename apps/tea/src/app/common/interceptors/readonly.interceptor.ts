import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoggerService } from '../services/logger.service';
import { SessionService } from '../services/session.service';

@Injectable()
export class ReadOnlyInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService, private logger: LoggerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const readOnly = this.sessionService.status();

    if (!readOnly) { //|| okIfReadOnly(request)
      this.logger.log(request);
      return next.handle(request);

    } else {
      debugger
      const msg = 'Error: cannot ${req.method} ${req/url} when read-only'
      this.logger.error(msg);

      return throwError(new Error(msg))

    }
  }
}
