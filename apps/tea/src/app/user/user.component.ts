import { Component, OnInit } from '@angular/core';
import { User } from '@tea/api-interfaces';
import { AuthenticationService } from '../common/services/authentication.service';

@Component({
  selector: 'tea-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user?: User;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.getUser().subscribe(
      (user: User) => { this.user = user },
      (error) => { console.log(error.message) }
    );
  }
}
