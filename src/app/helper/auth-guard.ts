import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {UserToken} from '../model/user-token';
import {AuthenticationService} from "../service/auth/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  currentUser: UserToken;

  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/', 'login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/', 'coach', 'login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return true;
  }
}
