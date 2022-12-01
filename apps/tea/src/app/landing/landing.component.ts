import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tea, User } from '@tea/api-interfaces';
import { CartService } from '../common/services/cart.service';
import { InventoryService } from '../common/services/inventory.service';
import { SidebarService } from '../common/services/sidebar.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DashboardService } from '../common/services/dashboard.service';
import { AuthenticationService } from '../common/services/authentication.service';

@Component({
  selector: 'tea-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  opened: BooleanInput = true;
  color = "green";
  showCartItems = false;
  inventory: Tea[] = [];
  currentTea: Tea = {
    name: '',
    price: 0,
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
  isAction = false;
  isUserLoggedIn = false;
  user?: User;
  isAdmin = false;
  isSidebarOpen = true;
  isAuthenticated = true;

  constructor(
    sidebarService: SidebarService,
    cartService: CartService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private dashboardService: DashboardService,
    private authenticationService: AuthenticationService
  ) {
    this.cartService = cartService;
    this.sidebarService = sidebarService;
  }

  ngOnInit(): void {
    this.dashboardService.isDashboardOpen(this.dashboard).subscribe((next) => {
      this.dashboard = next ? true : false;
      this.checkout = next ? false : true;

      this.cartService.getCart().subscribe((cart: Tea[]) => {
        this.cart = cart;
        this.totalCartItems = this.cartService.getTotalCartItems();
  
        this.authenticationService.getUser().subscribe((user: User) => {
          if (user.id !== 0) {
            debugger
            this.isAuthenticated = true;
            console.log('Sidebar detects user login: ' + user.username)
  
            this.authenticationService.isAdmin().subscribe((isAdmin) => {
              this.isAdmin = isAdmin;
            });
          }
        });
      });
    });
  }

  viewUser() {
    this.isAction = true;
    this.router.navigate(['/user']);
  }

  viewStage() {
    this.isAction = true;
    this.router.navigate(['/stage']);
  }

  viewSubscriptions() {
    this.isAction = true;
    this.router.navigate(['/subscriptions']);

  }

  viewHelp() {
    this.isAction = true;
    this.router.navigate(['/help']);
  }

  // Adminsitation

  viewMembership() {
    this.isAction = true;
    this.router.navigate(['/membership']);
  }

  viewGroups() {
    this.isAction = true;
    this.router.navigate(['/membership']);
  }

  toggleSidebar() {

    if (!this.isAction) {

      this.sidebarService.toggleSidebar(!this.isSidebarOpen).subscribe((isOpen: boolean) => {
        console.log('landing toggle sidebar trigger')
        this.opened = isOpen;
        this.isSidebarOpen = isOpen;

      });
    } else {
      debugger
      console.log('landing toggle sidebar trap');
      this.isAction = false;
    }
  }
}
