import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Tea[] = [];
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getInventory(): Observable<Array<Tea>> {
    return this.http.get<Array<Tea>>('http://0.0.0.0:3333/api/tea');
  }

}
