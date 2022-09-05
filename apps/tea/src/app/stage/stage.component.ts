import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Products, Tea } from '@tea/api-interfaces';
import { CartService } from '../cart.service';

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
  constructor(cartService: CartService, cd: ChangeDetectorRef) {
    this.cartService = cartService;
    this.cd = cd;
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    this.cartService.addToCart(id);
    this.totalCartItems = this.cartService.getTotalCartItems();
    this.cd.detectChanges();
  }
}
