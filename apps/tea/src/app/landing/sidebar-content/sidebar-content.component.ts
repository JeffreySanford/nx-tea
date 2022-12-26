import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tea, User } from '@tea/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../../common/services/authentication.service';
import { CartService } from '../../common/services/cart.service';
import { DashboardService } from '../../common/services/dashboard.service';
import { SessionService } from '../../common/services/session.service';
import { SidebarService } from '../../common/services/sidebar.service';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'tea-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit, AfterContentChecked {
  @Input() cart?: Array<Tea>;
  @Input() public isSidebarOpen = false;
  totalCartItems = 0;
  itemsInCart = 0;
  cartService: CartService;
  cd: ChangeDetectorRef;
  displayedColumns = ['name', 'price', 'sub-totals', 'actions'];
  cartItemsDisplay: boolean = false;
  dataSource = new MatTableDataSource<Tea>();
  sidebarService: SidebarService;
  dashboardService: DashboardService;
  opened = false;
  isAdmin = false;
  isAuthenticated = false;
  user?: User;
  getUser$?: BehaviorSubject<User>;

  constructor(
    cartService: CartService,
    cd: ChangeDetectorRef,
    sidebarService: SidebarService,
    dashboardService: DashboardService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private sessionService: SessionService
  ) {
    this.cartService = cartService;
    this.cd = cd;
    this.sidebarService = sidebarService;
    this.dashboardService = dashboardService;
  }

  ngAfterContentChecked(): void {
    this.userService.getUser().subscribe(user => {
      if(user.id > 0 && !this.user) {
        debugger
        this.authenticationService.isUserAuthenticated(user).subscribe(isAuth => this.isAuthenticated = isAuth);
        this.user = user;

        const userSession = this.sessionService.getUserSession();
        if (!userSession && user) {
          this.sessionService.setUserSession(user);
        }

        this.cd.detectChanges();  
      }
    });
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.dataSource.data = this.cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
    });
  }


  viewUser() {
    this.dashboardService.isNotSidebarAction(true);

    this.router.navigate(['/user']);
  }

  viewStage() {
    this.dashboardService.isNotSidebarAction(true);

    this.router.navigate(['/stage']);
  }

  viewSubscriptions() {
    this.dashboardService.isNotSidebarAction(true);

    this.router.navigate(['/subscriptions']);
  }

  viewMembership() {
    this.dashboardService.isNotSidebarAction(true);

    this.router.navigate(['/membership']);
  }

  viewGroups() {
    this.dashboardService.isNotSidebarAction(true);

    this.router.navigate(['/groups']);
  }

  viewHelp() {
    this.dashboardService.isNotSidebarAction(true);

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
    this.dashboardService.isDashboardOpen(false).subscribe();
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
