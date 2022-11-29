import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  opened: boolean = false;
  sidebar$ = new BehaviorSubject<boolean>(this.opened);

  constructor() {
  }

  getSidebar(): Observable<boolean> {
    this.sidebar$.next(this.opened);

    return this.sidebar$;
  }

  toggleSidebar(isSidebarOpen: boolean): Observable<boolean> {
    this.sidebar$.next(isSidebarOpen);

    debugger
    return this.sidebar$;
  }
}
