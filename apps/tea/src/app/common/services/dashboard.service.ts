import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  subject$ = new BehaviorSubject<boolean>(false);
  setDisabled = false;

  constructor() { }

  sidebarStatus(): boolean {
    console.log('Allow toggle: '+ this.setDisabled);
  
    return this.setDisabled;
  }

  isNotSidebarAction(isAction: boolean): void {
    this.setDisabled = isAction;
  }

  isDashboardOpen(dashboard: boolean): BehaviorSubject<boolean> {

    if (!this.setDisabled) {
      this.subject$.next(dashboard);
    } else {
      debugger
    }

    return this.subject$;
  }
}
