import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../../service/auth/authentication.service";

declare var $: any;
declare var Swal: any;

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

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
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
