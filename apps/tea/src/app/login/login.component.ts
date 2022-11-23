import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
export interface User {
  userName: string;
  password: string;
} 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(user: User): void {
    this.authService.login(user.userName, user.password)
      .subscribe(
        (nextUser) => {
          this.userName = user.userName;
          this.password = user.password;
          console.log("Is Login Success: " + this.userName);

          this.router.navigate(['landing'])
        },
        (error)=>{
          console.log("Is Login Failed: " + user.userName + '' + error);

          this.router.navigate(['login'])
        });
  }
}