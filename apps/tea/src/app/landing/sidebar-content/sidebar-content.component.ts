import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../../services/cart.service';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'tea-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit {
  @Input() cart?: Array<Tea>;
  totalCartItems = 0;
  currentUser = {
    name: 'Billy Jones',
    id: 0
  }
  itemsInCart = 0;
  cartService: CartService;
  cd: ChangeDetectorRef;
  displayedColumns = ['name', 'price', 'sub-totals', 'actions'];
  cartItemsDisplay: boolean = false;
  dataSource = new MatTableDataSource<Tea>();

  constructor(cartService: CartService, cd: ChangeDetectorRef) {
    this.cartService = cartService;
    this.cd = cd;
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();

      this.cd.detectChanges();
    });

  }

  toggleCartItems(isCartOpened: boolean) {
    this.cartItemsDisplay = !this.cartItemsDisplay;
    this.cd.detectChanges();
  }

  getTotal(): number {
    let currentTotal = 0;
    this.cart?.forEach((tea: Tea) => {
      currentTotal = currentTotal + tea.price;
    });

    return currentTotal;
  }

  showCartItems(showCart: boolean): void {
    this.cartItemsDisplay = showCart;
  }
}
