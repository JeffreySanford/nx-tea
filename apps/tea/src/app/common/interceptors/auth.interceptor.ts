
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, EMPTY, finalize, Observable, throwError } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { BusyService } from "../services/busy.service";

@Injectable({ providedIn: 'root' })

export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {

        const headers = { 'Authorization': 'Bearer ${accessToken}' };

        request = request.clone({
            setHeaders: headers,
            withCredentials: true
        });
        debugger

        return next.handle(request).pipe(this.handleErrors);
    }

    private handleErrors(source: Observable<HttpEvent<HttpEvent<any>>>): Observable<HttpEvent<any>> {

        return source.pipe(
            catchError((error: HttpErrorResponse) => {
                debugger
                console.error('Auth interceptor error: ' + error.message);
                return error.status === 401 ? this.handle401(error) : throwError(error);
            })
        )
    }

    private handle401(error: HttpErrorResponse) {
        const authResHeader = error.headers.get('WWW-Authenticate');

        if (authResHeader) {
            debugger
            console.error('Auth interceptor error: ' + error.message);
            if (/is expired/.test(authResHeader)) {
                debugger
                this.router.navigate(['login']);  // Token expired, leave app amd sign-in again
            }
        }

        /**
         * The error is handled.  Call should get non-response.  Empty completes without emitting
         */

        debugger
        return EMPTY;
    }
}