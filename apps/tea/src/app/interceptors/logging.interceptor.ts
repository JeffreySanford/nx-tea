import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.logRequest(request); //Do something to modify the request

        return next.handle(request).pipe(
            tap(response => this.logResponce(response),
            error => this.logError(error)
            )
        ); // Pass the request to handle() and return results.
    }

    logRequest(request: HttpRequest<any>) {
        console.log('logger request: ' + request);
    }

    logResponce(response: HttpEvent<any>) {
        console.log('logger response: ' + response)
    }

    logError(error: HttpErrorResponse) {
        debugger
        console.log('logger error: ' + error.message)
    }
}