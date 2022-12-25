import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Tea, User } from '@tea/api-interfaces';
import { CartService } from '../common/services/cart.service';
import { SidebarService } from '../common/services/sidebar.service';
import { Router } from '@angular/router';
import { DashboardService } from '../common/services/dashboard.service';
import { AuthenticationService } from '../common/services/authentication.service';
import { TokenStorageService } from '../common/services/token-storage.service';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'tea-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit, AfterContentChecked {
  @Input('isAction') isAction!: boolean
  opened = true;
  color = "green";
  showCartItems = false;
  inventory: Tea[] = [];
  currentTea: Tea = {
    name: '',
    price: 0,
    description: '',
    cost: 0,
    id: 0,
    orderQuantity: 0,
    image: 'assets/teas/default-tea-container-image.png'
  }

  totalCartItems = 0;
  cart?: Tea[];
  cartService: CartService;
  sidebarService: SidebarService;
  cartItems: Tea[] = [];
  dashboard = false;
  checkout = false;
  isUserLoggedIn = false;
  user?: User;
  isAdmin = false;
  isSidebarOpen = false;
  isAuthenticated = false;

  constructor(
    sidebarService: SidebarService,
    cartService: CartService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private dashboardService: DashboardService,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {
    this.cartService = cartService;
    this.sidebarService = sidebarService;
  }

  ngAfterContentChecked() {
    this.userService.getUser().subscribe((user) => {
      if (user.id > 0 && !this.user) {
        this.authenticationService.getUser(user).subscribe((user: User) => {
          console.log('Landing detects user login: ' + user.username);
          this.user = user;
          this.authenticationService.setUser(user);
          this.authenticationService.isUserAuthenticated(user).subscribe((auth) => this.isAuthenticated = auth);
          this.authenticationService.isAdmin(user).subscribe((isAdmin) => this.isAdmin = isAdmin);

          this.cd.detectChanges();
        });
      }
      else {
        console.log('No user')
      }
    });
  }

  ngOnInit(): void {
    this.isAction = false;

    this.dashboardService.isDashboardOpen(this.dashboard).subscribe((next) => {
      this.dashboard = next ? true : false;
      this.checkout = next ? false : true;
    });

    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
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

  viewHelp() {
    this.dashboardService.isNotSidebarAction(true);
    this.router.navigate(['/help']);
  }

  // Administration
  viewMembership() {
    this.dashboardService.isNotSidebarAction(true);
    this.router.navigate(['/membership']);
  }

  viewGroups() {
    this.dashboardService.isNotSidebarAction(true);
    this.router.navigate(['/groups']);
  }

  toggleSidebar() {
    const isSidebarDisabled = this.dashboardService.sidebarStatus();

    if (!isSidebarDisabled) {
      this.sidebarService.toggleSidebar(!this.isSidebarOpen).subscribe((isOpen: boolean) => {
        console.log('landing toggle sidebar trigger')
        this.opened = isOpen;
        this.isSidebarOpen = isOpen;
      });
    } else {
      this.dashboardService.isNotSidebarAction(false);
    }
  }
}
