import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../../api/src/environments/environment';
import { User } from '@tea/api-interfaces';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<User>;
    public currentUser?: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(user));
            this.currentUser = this.currentUserSubject.asObservable();
        }
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(isUserAuthenticated => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(username));
                
                return isUserAuthenticated;
            }));
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
    
    getPublicContent(): Observable<any> {
        const API_URL = 'http://brokenleaf.us:3333/api/test/';
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    }

    getUserBoard(): Observable<any> {
        const API_URL = 'http://brokenleaf.us:3333/api/user-board/';
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    }

    getModeratorBoard(): Observable<any> {
        const API_URL = 'http://brokenleaf.us:3333/api/moderator-board/';
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }

    getAdminBoard(): Observable<any> {
        const API_URL = 'http://brokenleaf.us:3333/api/admin-board/';
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
}