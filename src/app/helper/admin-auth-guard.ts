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
import {Injectable} from '@angular/core';
import {UserToken} from '../model/user-token';
import {AuthenticationService} from "../service/auth/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  currentUser: UserToken;
  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(
      next => {
        this.currentUser = next;
      }
    );
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let hasRoleAdmin = false;
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          hasRoleAdmin = true;
          break;
        }
      }
      if (hasRoleAdmin) {
        return true;
      } else {
        this.authService.logout();
        this.router.navigate(['/', 'admin', 'dashboard'], { queryParams: {login: true}, queryParamsHandling: 'merge' } );
        return false;
      }
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/', 'admin', 'login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      let hasRoleAdmin = false;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          hasRoleAdmin = true;
          break;
        }
      }
      return hasRoleAdmin;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/', 'admin', 'login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
  canLoad(route: Route, segments: UrlSegment[]) {
    return true;
  }
}
