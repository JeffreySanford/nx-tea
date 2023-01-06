import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../common/services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../common/services/user.service';
import { User } from '@tea/api-interfaces';
import { SessionService } from '../common/services/session.service';
import { NotificationService } from '../common/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  formData!: FormGroup;
  baseColor = '3d6000';
  user?: User;
  isAuthenticated = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private sessionService: SessionService,
    private notifyService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.formData = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  viewRegister(): void {
    this.router.navigate(['register']);
    this.cd.detectChanges();
  }

  onClickSubmit(user: { username: string, password: string }): void {
    this.authenticationService.login(user.username, user.password);
    this.authenticationService.authenticate().subscribe(
        (nextUser) => {
          console.log(nextUser);

          if(nextUser) {
            console.log("Login Success: " + this.username);
            this.userService.setUser(user).subscribe(
              (next) => {
                const user = Object.values(next)[0];
   
                this.authenticationService.isAuthenticated.subscribe((isAuth: boolean) => {
                  if (isAuth) {
                    this.isAuthenticated = isAuth;
                    this.user = user;
                    console.log("Authentication Success: " + this.username);
                    this.router.navigate(['store']);
                    this.sessionService.setUserSession(user);  
                  }
                  else {
                    console.log("Is Login Failed: " + user.username);
                    this.notifyService.showError('Authentication', 'User failed to authenticate');
  
                  }
                })
              },
              (error) => { console.log(error) }); 
          }
        },
        (error) => {
          console.log("Is Login Failed: " + user.username + '' + error.message);

          this.router.navigate(['login'])
        });
  }
}