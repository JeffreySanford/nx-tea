import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Products, Tea } from '@tea/api-interfaces';
import { CartService } from '../cart.service';
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
  constructor(cartService: CartService, cd: ChangeDetectorRef, sidebarService: SidebarService) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    this.cartService.addToCart(id);
    // this.sidebarService.toggleSidebar(true);
    //  When add to cart is trigger, the sidebar should be set to open.  The sidebar is currently controlled in the sidebar component and need to be a hot observable in the sidebar service (create)
    this.totalCartItems = this.cartService.getTotalCartItems();
    this.cd.detectChanges();
  }
}
