import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Message } from '@tea/api-interfaces';
import { NotificationService } from './common/services/notification.service';
import { AuthenticationService } from './common/services/authentication.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'Broken Leaf';
  hello$ = this.http.get<Message>(environment.apiUrl + 'api/hello');
  loading = true;

  constructor(private http: HttpClient, private notifyService: NotificationService, private cd: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {

  }

  ngOnInit() {
    this.hello$.subscribe(
      (next: Message) => {
        this.loading = false;
        this.cd.detectChanges();
        this.notifyService.showSuccess(next.message, 'API Message');
      }, (error) => {
        debugger
        this.notifyService.showError(error.message, 'API Message');
        console.log('Error fired.')
      });
  }
}