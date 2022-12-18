import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../common/services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../common/services/user.service';
import { User } from '@tea/api-interfaces';
import { SessionService } from '../common/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  formData!: FormGroup;
  baseColor = 'green';
  user?: User;
  isAuthenticated = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {

    this.formData = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onClickSubmit(user: { username: string, password: string }): void {
    this.authenticationService.login(user.username, user.password)
      .subscribe(
        (nextUser) => {
          console.log(nextUser);
          console.log("Is Login Success: " + this.username);
          this.userService.setUser(user).subscribe(
            (next) => {
              const user = Object.values(next)[0];
              this.authenticationService.isAuthenticated.subscribe((isAuth: boolean) => {
                this.isAuthenticated = isAuth;
                this.user = user;
                this.router.navigate(['stage']);
                this.sessionService.setUserSession(user);
              })
            },
            (error) => { console.log(error) }
          );
        },
        (error) => {
          console.log("Is Login Failed: " + user.username + '' + error.message);

          this.router.navigate(['login'])
        });
  }
}