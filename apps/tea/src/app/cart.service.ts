import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCartItems: number = 0;
  cart: Array<Tea> = [];
  inventory: Tea[] = [];
  subject$ = new BehaviorSubject<Tea[]>(this.cart);

  constructor(inventoryService: InventoryService) {
    inventoryService.getInventory().subscribe((inventory: Array<Tea>) => this.inventory = inventory);
  }

  // TODO Convert this to a behavior subject
  getTotalCartItems(): number {
    let total: number = 0;
    this.cart.forEach((item) => {
      total = total + item.orderQuantity;
    });

    return total;
  }

  getCart(): BehaviorSubject<Tea[]> {
    this.subject$.next(this.cart);
    
    return this.subject$;
  }

  addToCart(id: number): Array<Tea> {
    let found = false;
    this.cart.forEach((product: Tea) => {
      if (id === product.id) {
        if (product.orderQuantity) {
          product.orderQuantity++;
          found = true;
        }
      }
    });

    if (!found) {
      this.inventory.forEach((product) => {
        if (id === product.id) {
          product.orderQuantity = 1;
          this.cart.push(product);
        }
      });
    }

    this.totalCartItems = this.cart.length;
    return this.cart;
  }
}
