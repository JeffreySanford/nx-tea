import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.logRequest(request);

        return next.handle(request).pipe(
            tap(response => this.logResponce(response),
            error => this.logError(error)
            )
        ); // Pass the request to handle() and return results.
    }

    logRequest(request: HttpRequest<any>) {
        console.log('logger request: ' + request.urlWithParams);
    }

    logResponce(response: HttpEvent<any>) {
        console.log('logger response: ' + response.type)
    }

    logError(error: HttpErrorResponse) {
        console.error('logger error: ' + error.message)
    }
}