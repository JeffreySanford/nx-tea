import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'tea-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit, AfterContentChecked {
  @Input() cart?: Array<Tea>;
  showCartItems: boolean = false;
  totalCartItems = 0;
  currentUser = {
    name: '',
    id: 0
  }
  itemsInCart = 0;
  cartService: CartService;
  cd: ChangeDetectorRef;

  constructor(cartService: CartService, cd: ChangeDetectorRef) {
    this.cartService = cartService;
    this.cd = cd;
   }

  ngAfterContentChecked() {
    this.totalCartItems = this.cartService.getTotalCartItems();
    this.cart = this.cartService.getCart();
    this.cd.detectChanges();
  }
  ngOnInit(): void {
    this.totalCartItems = this.cartService.getTotalCartItems();
    this.cd.detectChanges();
  }

  toggleCartItems() {
    debugger
    this.showCartItems = !this.showCartItems;
    this.cd.detectChanges();
  }
}
