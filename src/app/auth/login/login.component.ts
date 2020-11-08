import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserToken} from "../../model/user-token";
import {User} from "../../model/user";

declare var $: any;
declare var Swal: any;
declare var FB: any;
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  returnUrl: string;
  loading = false;
  submitted = false;
  currentUser: UserToken;
  hasRoleAdmin = false;
  auth2: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private element: ElementRef) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
    if (this.authenticationService.currentUserValue) {
      if (this.hasRoleAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1006360806546717',
        cookie: true,
        xfbml: true,
        version: 'v8.0',
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  ngAfterViewInit() {
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '764592214658-g3r69f9t34ig60o6psnungn8ugk55p94.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(profile.getEmail(), "123456", profile.getId())
          .pipe(first())
          .subscribe(
            data => {
              localStorage.setItem('ACCESS_TOKEN', data.accessToken);
              const roleList = data.roles;
              for (const role of roleList) {
                if (role.authority === 'ROLE_ADMIN') {
                  this.returnUrl = "/admin";
                }
              }
              this.router.navigate([this.returnUrl]).finally(() => {
              });
              $(function () {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });

                Toast.fire({
                  type: 'success',
                  title: 'Đăng nhập thành công'
                });
              });
            },
            () => {
              this.loading = false;
              $(function () {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });

                Toast.fire({
                  type: 'error',
                  title: 'Đăng nhập thất bại'
                });
              });
            });
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  loginFacebook() {
    FB.login((response) => {
      this.doLoginFacebook(response.authResponse.userID);
    }, {scope: 'email'});
  }

  doLoginFacebook(userId) {
    FB.api(
      `/${userId}?fields=id,name,email`,
      (response) => {
        if (response && !response.error) {
          this.submitted = true;
          this.loading = true;
          this.authenticationService.login(response.email, "123456", response.id)
            .pipe(first())
            .subscribe(
              data => {
                localStorage.setItem('ACCESS_TOKEN', data.accessToken);
                const roleList = data.roles;
                for (const role of roleList) {
                  if (role.authority === 'ROLE_ADMIN') {
                    this.returnUrl = "/admin";
                  }
                }
                this.router.navigate([this.returnUrl]).finally(() => {
                });
                $(function () {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                  });

                  Toast.fire({
                    type: 'success',
                    title: 'Đăng nhập thành công'
                  });
                });
              },
              () => {
                this.loading = false;
                $(function () {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                  });

                  Toast.fire({
                    type: 'error',
                    title: 'Đăng nhập thất bại'
                  });
                });
              });
        }
      }
    );
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          const roleList = data.roles;
          for (const role of roleList) {
            if (role.authority === 'ROLE_ADMIN') {
              this.returnUrl = "/admin";
            }
          }
          this.router.navigate([this.returnUrl]).finally(() => {
          });
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'success',
              title: 'Đăng nhập thành công'
            });
          });
        },
        () => {
          this.loading = false;
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'error',
              title: 'Đăng nhập thất bại'
            });
          });
        });
  }
}
