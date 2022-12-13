import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '@tea/api-interfaces';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { SessionService } from './session.service';
import { TokenStorageService } from './token-storage.service';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  currentUserSubject = new BehaviorSubject<User>({
    id: 0,
    username: '',
    password: 'not provided',
    firstName: 'Sample',
    lastName: 'Sam'
  });
  isAdminSubject = new BehaviorSubject<boolean>(false);
  user?: User;
  token: any;
  isLoggedIn = new BehaviorSubject(false);
  isAuthenticated = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifyService: NotificationService,
    private sessionService: SessionService,
    private tokenService: TokenStorageService
  ) { }

  setUser(user: User) {
    const local = sessionStorage.getItem('username');

    if (local) {
      this.currentUserSubject = new BehaviorSubject<User>({
        id: user.id,
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.firstName
      });
      this.isAuthenticated.next(true);
      this.notifyService.showSuccess('User Authenticated', 'Authentication')
    }
  }
  isUserAuthenticated(user: User): BehaviorSubject<boolean> {
    if (user) {
      this.isAuthenticated.next(true);
    }

    return this.isAuthenticated;
  }

  isAdmin(user: User): Subject<boolean> {
    let isAdmin = false;
    if (user.username === 'admin') {
      isAdmin = true;
      this.isAdminSubject.next(true);

    } else {
      isAdmin = false;
      this.isAdminSubject.next(false);
    }

    return this.isAdminSubject;
  }

  login(username: string, password: string): BehaviorSubject<boolean> {
    const api = environment.apiUrl;

    this.http.get(api + 'users/:' + username).subscribe((next)=>{
      const user =  Object.values(next)[0];
      this.getUser(user).subscribe((next)=>{},(error)=>{console.log(error)});
      this.http.post<Response>(api + 'api/users/authenticate', { username, password })
        .pipe(map(
          res => {
            debugger
            console.log(username + ' authenticated: ' + res);
            this.isLoggedIn.next(true);
            this.isAuthenticated.next(true);
            this.user = user;
          })
        );
    });

    return this.isLoggedIn;
  }

  getUser(user: User): Observable<User> {
    this.currentUserSubject.next(user);

    return this.currentUserSubject;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject?.unsubscribe();
  }
  signIn() {
    this.router.navigate(['login']);
  }

  getAccessToken() {
    return 'access-token-string'
  }
}