import { Component, OnInit } from '@angular/core';
import { User } from '@tea/api-interfaces';
import { AuthenticationService } from '../../common/services/authentication.service';
import { SessionService } from '../../common/services/session.service';
import { TokenStorageService } from '../../common/services/token-storage.service';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'tea-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user?: User;
  token = '';
  isAuthenticated = false;

  constructor(
    private authenticationService: AuthenticationService,
    private sessionService: SessionService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
