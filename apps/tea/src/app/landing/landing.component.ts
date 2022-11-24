import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../common/services/cart.service';
import { InventoryService } from '../common/services/inventory.service';
import { SidebarService } from '../common/services/sidebar.service';

@Component({
  selector: 'tea-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  opened: BooleanInput = false;
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
  inventoryService: InventoryService;


  constructor(
    sidebarService: SidebarService,
    cartService: CartService,
    private cd: ChangeDetectorRef,
    inventoryService: InventoryService
  ) {
    this.cartService = cartService;
    this.sidebarService = sidebarService;
    this.inventoryService = inventoryService;
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });

    this.inventoryService.getInventory().subscribe(
      (inventory: Tea[]) => {
        this.inventory = inventory;
      });
  }

  toggleSidebar(action: string, isOpen: boolean, isAction: boolean) {
    if (action === 'toggle' && !isAction) {
      this.sidebarService.toggleSidebar(isOpen).subscribe((isOpen: boolean) => this.opened = isOpen);
    }
  }
}
