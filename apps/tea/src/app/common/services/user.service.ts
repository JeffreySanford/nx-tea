import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@tea/api-interfaces';
import { SessionService } from './session.service';
import { AuthenticationService } from './authentication.service';
import { environment } from 'apps/tea/src/environments/environment';

const API_URL = environment.apiUrl;;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticated = false;
  user: BehaviorSubject<User>;
  users: Observable<Object>;

  constructor(private http: HttpClient, private sessionService: SessionService, private authenticationService: AuthenticationService) {
    this.user = new BehaviorSubject<User>({
      firstName: 'login',
      lastName: 'login',
      username: 'login',
      password: 'login',
      id: 0
    });


    this.users = this.http.get(API_URL + 'users');
  }

  setUser(user: { username: string, password: string }): Observable<Object> {

    this.http.get(API_URL + 'users/:' + user.username).subscribe((next) => {
      this.user = new BehaviorSubject<User>(Object.values(next)[0]);
    })

    return this.http.get(API_URL + 'users/:' + user.username).pipe();
  }

  getUser(): BehaviorSubject<User> {

    return this.user;
  }

  getUsers(): Observable<Object> {

    return this.users;
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}