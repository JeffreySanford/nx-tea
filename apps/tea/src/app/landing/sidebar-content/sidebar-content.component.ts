import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tea, User } from '@tea/api-interfaces';
import { AuthenticationService } from '../../common/services/authentication.service';
import { CartService } from '../../common/services/cart.service';
import { DashboardService } from '../../common/services/dashboard.service';
import { SidebarService } from '../../common/services/sidebar.service';

@Component({
  selector: 'tea-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit, AfterContentChecked {
  @Input() cart?: Array<Tea>;
  totalCartItems = 0;
  currentUser: User = {
    username: 'Login',
    id: 0,
    password: '',
    firstName: 'Login',
    lastName: ''
  };
  itemsInCart = 0;
  cartService: CartService;
  cd: ChangeDetectorRef;
  displayedColumns = ['name', 'price', 'sub-totals', 'actions'];
  cartItemsDisplay: boolean = false;
  dataSource = new MatTableDataSource<Tea>();
  sidebarService: SidebarService;
  dashboard: DashboardService;
  opened = true;
  isAction = false;
  isAdmin = false;
  isAuthenticated = false;

  constructor(
    cartService: CartService,
    cd: ChangeDetectorRef,
    sidebarService: SidebarService,
    dashboard: DashboardService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
    this.dashboard = dashboard;
  }

  ngAfterContentChecked(): void {

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();

      this.authenticationService.getUser().subscribe((user: User) => {
        if (user.id !== 0) {

          this.currentUser = user;
          this.isAuthenticated = true;
          console.log('Sidebar detects user login: ' + user.username);

          this.authenticationService.isAdmin().subscribe((isAdmin) => {
            this.isAdmin = isAdmin;
          });
        }
      });
    });
  }

  viewUser() {
    this.router.navigate(['/user']);
  }

  viewStage() {
    this.router.navigate(['/stage']);
  }

  viewSubscriptions() {
    this.router.navigate(['/subscriptions']);
  }

  viewMembership() {
    this.isAction = true;
    this.router.navigate(['/membership']);
  }

  viewGroups() {
    this.isAction = true;
    this.router.navigate(['/groups']);
  }

  viewHelp() {
    this.router.navigate(['/help']);
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

  addToCart(id: number, addition: boolean): void {
    console.log('add to cart', id, addition)
    this.cartService.addToCart(id, addition);
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;

      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });
  }
}
