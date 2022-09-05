import { Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { map, Observable } from 'rxjs';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCartItems: number = 0;
  cart: Array<Tea> = [];
  inventory: Tea[] = [];

  constructor(inventoryService: InventoryService) {
    inventoryService.getInventory().subscribe((inventory: Array<Tea>) => this.inventory = inventory);
  }

  getTotalCartItems(): number {
    let total: number = 0;
    this.cart.forEach((item) => {
      total = total + item.orderQuantity;
    });

    return total;
  }

  getCart(): Array<Tea> {
    return this.cart;
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
