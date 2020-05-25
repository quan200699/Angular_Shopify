import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/user-token";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/auth/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser: UserToken;
  hasRoleAdmin = false;
  hasRoleUser = false;
  user: User;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        } else {
          this.hasRoleUser = true;
        }
      }
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
