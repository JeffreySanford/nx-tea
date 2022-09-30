import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { CartService } from '../services/cart.service';
import { InventoryService } from '../services/inventory.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'tea-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  opened: BooleanInput = false;
  color: string = "green";
  showCartItems: boolean = false;
  inventory: Tea[] = [];
  currentTea: Tea = {
    name: '',
    price: 0,
    cost: 0,
    id: 0,
    orderQuantity: 0,
    image: 'assets/teas/default-tea-container-image.png'
  }

  totalCartItems: number = 0;
  cart?: Tea[];
  inventoryService: InventoryService;
  cartService: CartService;
  sidebarService: SidebarService;
  cartItems: Tea[] = [];


  constructor(sidebarService: SidebarService, cartService: CartService, inventoryService: InventoryService, private cd: ChangeDetectorRef,) {
    this.inventoryService = inventoryService;
    this.cartService = cartService;
    this.sidebarService = sidebarService;
  }


  ngAfterContentChecked() {


   
  }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((inventory: Array<Tea>) => this.inventory = inventory);
    this.cartService.getCart().subscribe((cart: Tea[]) => {
      this.cart = cart;
      this.totalCartItems = this.cartService.getTotalCartItems();
      this.cd.detectChanges();
    });
  }

  toggleSidebar(action: string, isOpen: boolean, isAction: boolean) {
    if (action === 'toggle' && !isAction) {
      this.sidebarService.toggleSidebar(isOpen).subscribe((isOpen: boolean) => this.opened = isOpen);
    }
  }
}
