import { Injectable } from '@angular/core';
import { User } from '@tea/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  status() {
    return false;
  }

  getUserSession(): string | null {
    return sessionStorage.getItem('username');
  }
  setUserSession(user: User) {
    sessionStorage.setItem('username', user.username)
  }

  isAuthenticatedUser(user: User): boolean {
    const session = sessionStorage.getItem('username');

    return (user.username === session) ? true : false;
  }

}

