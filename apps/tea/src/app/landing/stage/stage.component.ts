import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Products, Tea } from '@tea/api-interfaces';
import { CartService } from '../../services/cart.service';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'tea-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent implements OnInit {
  @Input() inventory: Array<Tea> = [];
  cart: Array<Tea> = [];
  totalCartItems: number = 0;
  cartService: CartService;
  cd: ChangeDetectorRef;
  sidebarService: SidebarService;
  cartItems: Array<Tea> = [];
  constructor(cartService: CartService, cd: ChangeDetectorRef, sidebarService: SidebarService) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
  }

  ngOnInit(): void {
  }

  addToCart(id: number, addition: boolean): void {
    console.log('add to cart', id, addition)
    this.cartService.addToCart(id, addition);
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });
  }

  getQuantity(id: number): number {
    let quantity = 0;
    this.cart.forEach((tea: Tea) => {
      if (tea.id === id) {
        quantity = tea.orderQuantity;
      }
    });

    return quantity;
  }
}
