import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Broken Leaf';
  isUserLoggedIn = false;

  constructor(private authService: AuthService, private router: ActivatedRoute) { }

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if (storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}