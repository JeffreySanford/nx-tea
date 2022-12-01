import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './common/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('CanActivate called');
    let isLoggedIn = this.authenticationService.isAuthenticated();
    if (isLoggedIn) {
      console.log('CanActivate Guard Success')
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('CanActivate Guard Fail')
      return false;
    }
  }

}