import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../../common/services/authentication.service';
import { NotificationService } from '../../common/services/notification.service';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'tea-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRoles = ['member', 'moderator'];
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private notificationService: NotificationService
    
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.notificationService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      debugger
      this.userService.createUser(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.notificationService.showSuccess('Registration successful', 'Registration');
                  this.router.navigate(['/login']);
              },
              error => {
                  this.notificationService.showError(error, 'Registration');
                  this.loading = false;
              });
  }
}
