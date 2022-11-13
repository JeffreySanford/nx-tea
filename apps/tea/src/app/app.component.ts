import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'Broken Leaf';
  isUserLoggedIn = false;

  constructor(private authService: AuthService, private router: ActivatedRoute) { }

  ngAfterContentChecked(): void {
      
  }

  ngOnInit() {

    // this.authService.login('admin', 'admin');
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);
    
    if (storeData != null && storeData == "true") {
      console.log('User has logged in');
      this.isUserLoggedIn = true;
    } else {
      console.log('User login failed');
      this.isUserLoggedIn = false;
    }
  }
}