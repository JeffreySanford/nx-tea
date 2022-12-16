import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@tea/api-interfaces';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'tea-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  user?: User;
  dataSource = new MatTableDataSource<User>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
