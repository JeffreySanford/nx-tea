import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  opened: boolean = false;
  sidebar$: BehaviorSubject<boolean>;
  

  constructor() {
    console.log('sidebar subject init')
    this.sidebar$ = new BehaviorSubject<boolean>(this.opened);
  }

  getSidebar(): Observable<boolean> {
    this.sidebar$.next(this.opened);

    return this.sidebar$;
  }

  toggleSidebar(isSidebarOpen: boolean): Observable<boolean> {
    this.sidebar$.next(isSidebarOpen);

    console.log('sidebar service toggles ' + isSidebarOpen)
    return this.sidebar$;
  }
}
