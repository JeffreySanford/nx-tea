import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { environment } from 'apps/tea/src/environments/environment';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Tea[] = [];
  subject$ = new Subject<Tea[]>();

  constructor(private http: HttpClient) {}

  getInventory(): Subject<Tea[]> {
    const api = environment.apiUrl;

    this.http.get<any>(api + 'inventory').subscribe(
      (data) => {
      this.subject$.next(data);
    });

    return this.subject$;
  }
}