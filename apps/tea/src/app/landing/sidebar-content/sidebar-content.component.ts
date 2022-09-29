import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../../services/cart.service';
import { DashboardService } from '../../services/dashboard.service';
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
  sidebarService: SidebarService;
  dashboard: DashboardService;

  constructor(
    cartService: CartService, 
    cd: ChangeDetectorRef, 
    sidebarService: SidebarService,
    dashboard: DashboardService
    ) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
    this.dashboard = dashboard;
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      cart.length > 0 ? this.toggleCartItems(true) : this.toggleCartItems(false)
      this.cd.detectChanges();
    });
  }

  toggleCartItems(isCartOpened: boolean) {
    this.cartItemsDisplay = isCartOpened ? true : false;
    this.sidebarService.toggleSidebar(this.cartItemsDisplay).subscribe();
    this.cd.detectChanges();
  }

  getTotal(): number {
    let currentTotal = 0;
    this.cart?.forEach((tea: Tea) => {
      currentTotal = currentTotal + (tea.price * tea.orderQuantity);
    });

    return currentTotal;
  }

  showCartItems(showCart: boolean): void {
    this.cartItemsDisplay = showCart;
  }

  checkout(): void {
    this.dashboard.isDashboardOpen(false).subscribe();
  }
}
