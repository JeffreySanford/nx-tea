import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tea } from '@tea/api-interfaces';
import { AuthenticationService } from '../../common/services/authentication.service';
import { CartService } from '../../common/services/cart.service';
import { DashboardService } from '../../common/services/dashboard.service';
import { InventoryService } from '../../common/services/inventory.service';
import { SidebarService } from '../../common/services/sidebar.service';

@Component({
  selector: 'tea-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent implements OnInit {
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
  inventoryService: any;
  inventory: Tea[]= [];
  authenticationService: AuthenticationService;

  constructor(
    cartService: CartService,
    cd: ChangeDetectorRef,
    sidebarService: SidebarService,
    dashboard: DashboardService,
    inventoryService: InventoryService,
    authenticationService: AuthenticationService
  ) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
    this.dashboardService = dashboard;
    this.inventoryService = inventoryService;
    this.authenticationService = authenticationService
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });

    this.inventoryService.getInventory().subscribe(
      (inventory: Tea[]) => {
        this.inventory = inventory;
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
