import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isUserLoggedIn = false;

  constructor(private router: Router) { }

  checkLogin(url: string): boolean {
    console.log("Url: " + url)
    this.isUserLoggedIn = true;

    const canActivate = (this.isUserLoggedIn === true) ? true : false;
    const status = canActivate ? 'User Auth sucess for: ' + url : 'User needs to log in...';
    console.log(status);

    return canActivate;
  }

  login(userName: string, password: string): Observable<boolean> {
    console.log('Attempting login for '+ userName);
    this.isUserLoggedIn = userName === 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("User Authentication is successful: " + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  signIn() {
    debugger
    console.log('User sign in triggered');
  }

  getAccessToken() {
    return 'ACCESS-TOKEN';
  }
}