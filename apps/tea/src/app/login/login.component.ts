import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../common/services/authentication.service';
import { Router } from '@angular/router';
import { SidebarService } from '../common/services/sidebar.service';

export interface User {
  username: string;
  password: string;
} 
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

  constructor(private authenticationService: AuthenticationService, private router: Router, private fb:FormBuilder) { }

  ngOnInit() {
    // this.formData = this.fb.group({
    //   username: ["", Validators.email, Validators.required],
    //   password: ["", Validators.email],
    // });

    this.formData = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onClickSubmit(user: User): void {
    this.authenticationService.login(user.username, user.password)
      .subscribe(
        (nextUser) => {
          this.username = user.username;
          this.password = user.password;
          console.log("Is Login Success: " + this.username);
          

          this.router.navigate(['stage'])
        },
        (error)=>{
          console.log("Is Login Failed: " + user.username + '' + error.message);

          this.router.navigate(['login'])
        });
  }
}