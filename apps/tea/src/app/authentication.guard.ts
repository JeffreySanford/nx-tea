import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './common/services/authentication.service';
import { UserService } from './common/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('CanActivate called');
    
    const getUser$ = this.userService.getUser();

    getUser$?.subscribe((next) => {
      const user = next;


      if (!this.isAuthenticated) {
        this.authenticationService.isUserAuthenticated(user).subscribe((authenticated) => {
          if (authenticated) {

            this.isAuthenticated = authenticated;
            console.log('CanActivate Guard Success')
          } else {
            debugger
            console.log('CanActivate Guard Fail')
            this.router.navigate(['/login']);
          }
        }, (error) => { console.log(error) });
      }
    });
    if(!this.isAuthenticated) {
      debugger
    }
      return this.isAuthenticated;
  
  }
}