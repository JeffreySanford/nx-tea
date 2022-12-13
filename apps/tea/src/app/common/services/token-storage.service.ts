import { Injectable } from '@angular/core';
import { User } from '@tea/api-interfaces';
import * as session from 'express-session';



// Move to environment
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User) {

    const token = this.getUser(user);

    if(token) {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  
    } else {
      debugger
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

  }

  public getUser(user: User) {

    const sessionUser = sessionStorage.getItem(USER_KEY);
    if (sessionUser){
      return JSON.parse(sessionUser)
    }else{
      return null
    }
  }
}