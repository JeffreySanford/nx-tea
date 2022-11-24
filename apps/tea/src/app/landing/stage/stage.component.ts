import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../../common/services/cart.service';
import { DashboardService } from '../../common/services/dashboard.service';
import { SidebarService } from '../../common/services/sidebar.service';

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
  dashboard = true;
  checkout = false;
  dashboardService: DashboardService;
  displayedColumns = ['name', 'price', 'quantity', 'sub-totals', 'actions'];
  dataSource = new MatTableDataSource<Tea>();

  constructor(
    cartService: CartService,
    cd: ChangeDetectorRef,
    sidebarService: SidebarService,
    dashboard: DashboardService
  ) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
    this.dashboardService = dashboard;
  }

  ngOnInit(): void {
    this.dashboardService.isDashboardOpen(this.dashboard).subscribe((next) => {
      this.dashboard = next ? true : false;
      this.checkout = next ? false : true;
      this.cd.detectChanges();
    });

    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });
  }

  addToCart(id: number, addition: boolean): void {
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

  getTotal(): number {
    let currentTotal = 0;
    this.cart?.forEach((tea: Tea) => {
      currentTotal = currentTotal + (tea.price * tea.orderQuantity);
    });

    return currentTotal;
  }
}
