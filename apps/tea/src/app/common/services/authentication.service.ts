import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '@tea/api-interfaces';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<any>;
    public currentUser?: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(user));
            this.currentUser = this.currentUserSubject.asObservable();
        }
    }

    isLoggedIn = false;

    isAuthenticated() {
        debugger
        return this.isLoggedIn;
    }

    login(username: string, password: string) {
        const api = environment.apiUrl;
        
        this.currentUserSubject.next(username);

        return this.http.post<Response>(api + '/users/authenticate', { username, password })
            .pipe(map(
                res => {
                    console.log(username + ' authenticated: ' + res);
                    this.isLoggedIn = true;
                })
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.closed;
    }
    signIn() {
        this.router.navigate(['login']);
    }

    getAccessToken() {
        return 'access-token-string'
    }
}