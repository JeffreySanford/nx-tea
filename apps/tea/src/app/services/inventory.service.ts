import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Tea[] = [];

  constructor(private http: HttpClient
  ) {
  }

  getInventory(): Tea[] {
    const sub = this.http.get<Array<Tea>>('127.0.0.1:3333/api/inventory/tea');

    sub.subscribe(
      (inventory: Tea[]) => {
        debugger
        console.log('inventory '+ inventory);
      this.inventory = inventory;

      return this.inventory;
    })

    return this.inventory;
    // return this.http.get<Array<Tea>>('http://brokenleaf.us:4200/api/product/tea');
  }
}