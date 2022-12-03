import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '@tea/api-interfaces';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

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
    isLoggedIn = false;
    user?: User;

    constructor(private http: HttpClient, private router: Router, private notifyService: NotificationService) {}

    setUser() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUserSubject = new BehaviorSubject<User>({
                id: 0,
                username: user,
                password: 'not provided',
                firstName: 'Administrator',
                lastName: 'Sam'
            });
            this.notifyService.showSuccess('User Authenticated', 'Authentication')
        }
    }
    isAuthenticated() {
        (this.isLoggedIn) ? this.setUser():this.notifyService.showError('User not logged in.', 'Authentication');

        return this.isLoggedIn;
    }

    isAdmin(): Subject<boolean> {
        let isAdmin = false;

        this.getUser().subscribe((user: User) => {
            this.user = user;

            if (user.username === 'admin') {
                isAdmin = true;
                this.isAdminSubject.next(true);
                return true;
            } else {
                isAdmin = false;
                this.isAdminSubject.next(false);
                return false;
            }
        }, (error)=>{
            console.log('Error: '+ error)
        });

        return this.isAdminSubject;
    }

    login(username: string, password: string) {
        const api = environment.apiUrl;

        if (this.currentUserSubject) {
            this.currentUserSubject.next({
                id: 1,
                username,
                password,
                firstName: 'Sample',
                lastName: 'Sam'
            });
        }

        debugger
        return this.http.post<Response>(api + '/api/users/authenticate', { username, password })
            .pipe(map(
                res => {
                    console.log(username + ' authenticated: ' + res);
                    this.isLoggedIn = true;
                })
            );
    }

    getUser(): Observable<User> {
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