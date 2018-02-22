import { Injectable } from '@angular/core';
import {
CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot,
CanActivateChild,
Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  /**
   * @description - Route guard to activate routes
   */

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
