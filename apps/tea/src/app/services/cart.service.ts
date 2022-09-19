import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Tea> = [];
  inventory: Tea[] = [];
  subject$ = new BehaviorSubject<Tea[]>(this.cart);

  constructor(inventoryService: InventoryService) {
    inventoryService.getInventory().subscribe((inventory: Array<Tea>) => this.inventory = inventory);
  }

  getCart(): BehaviorSubject<Tea[]> {
    this.subject$.next(this.cart);

    return this.subject$;
  }

  addToCart(id: number, addition: boolean): void {
    let found = false;
    this.cart.forEach((product: Tea) => {
      if (id === product.id) {
        found = true;
        if (product.orderQuantity >= 1) {
          console.log('add? ', addition)
          addition ? product.orderQuantity++ : product.orderQuantity--;

        } else {
          if (addition) {
            product.orderQuantity++
          }
        }
      }
    });

    if (!found && addition) {
      this.inventory.forEach((product) => {

        if (id === product.id) {
          product.orderQuantity = 1;
          this.cart.push(product);
        }
      });
    }
    this.subject$.next(this.cart);
  }

  getTotalCartItems(): number {
    let total: number = 0;
    this.cart.forEach((item) => {
      total = total + item.orderQuantity;
    });

    return total;
  }
}
