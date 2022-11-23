import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Message } from '@tea/api-interfaces';
import { NotificationService } from './common/services/notification.service';
import { AuthService } from './common/services/auth.service';


@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'Broken Leaf';
  isUserLoggedIn = false;
  hello$ = this.http.get<Message>('/api/hello');
  loading = true;

  constructor(private http: HttpClient, private notifyService: NotificationService, private cd: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {

  }

  ngOnInit() {
    this.hello$.subscribe(
      (next: Message) => {
        this.loading = false;
        this.cd.detectChanges();
        this.notifyService.showSuccess(next.message, 'API Message')


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
      }, (error) => {
        debugger
        this.notifyService.showError(error.message, 'API Message')
        console.log('Error fired.')
      });
  }
}