import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Tea[] = [];

  constructor(private http: HttpClient
  ) {
  }

  getInventory() {
    return this.http.get<Array<Tea>>('http://localhost/api/product/tea');
    // return this.http.get<Array<Tea>>('http://brokenleaf.us:4200/api/product/tea');
  }
}