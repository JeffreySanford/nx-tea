import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  subject$ = new BehaviorSubject<boolean>(false);

  constructor() { }


 isDashboardOpen(dashboard: boolean): BehaviorSubject<boolean> {
    this.subject$.next(dashboard);

    return this.subject$;
  }

}
