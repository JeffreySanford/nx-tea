
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize } from "rxjs";
import { BusyService } from "../services/busy.service";

@Injectable({ providedIn: 'root' })

export class BusyHttpInterceptor implements HttpInterceptor {
    constructor(private busyService : BusyService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const msg = request.method === 'GET' ? 'Loading...': 'Saving...';
        this.busyService.increment(msg);

        return next.handle(request).pipe (
            finalize(()=> {
                this.busyService.decrement();
            })
        );
    }
}