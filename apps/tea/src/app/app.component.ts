import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { BooleanInput } from '@angular/cdk/coercion';
import { CartService } from './cart.service';
import { InventoryService } from './inventory.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentChecked {
  opened: BooleanInput = false;
  color: string = "green";
  showCartItems: boolean = false;
  inventory: Tea[] = [];
  currentTea: Tea = {
    name: '',
    price: 0,
    cost: 0,
    id: 0,
    orderQuantity:0,
    image: 'assets/teas/default-tea-container-image.png'
  }

  totalCartItems: number = 0;
  cart?: Tea[];
  inventoryService: InventoryService;
  cartService: CartService;
  sidebarService: SidebarService;


  constructor(sidebarService: SidebarService, cartService: CartService, inventoryService: InventoryService, private cd: ChangeDetectorRef, ) {
    this.inventoryService = inventoryService;
    this.cartService = cartService;
    this.sidebarService = sidebarService;
  }


  ngAfterContentChecked() {
    this.totalCartItems = this.cartService.getTotalCartItems();
    // this.cart = this.cartService.getCart();
    
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((inventory: Array<Tea>)=> this.inventory = inventory);
    this.cartService.getCart().subscribe((cart: Tea[])=>this.cart = cart);
  }

  toggleSidebar(isOpen: boolean) {
    this.sidebarService.toggleSidebar(isOpen).subscribe((isOpen: boolean)=>this.opened = isOpen);
    // this.sidebarService.getSidebar().subscribe((isOpen: boolean)=>{
    //   debugger
    //   this.opened = isOpen
    // })
  }
}
