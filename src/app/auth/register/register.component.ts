import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

declare var $: any;
declare var Swal: any;
declare var FB: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    terms: new FormControl('')
  });
  isSubmitted = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#register').validate({
        rules: {
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 6
          },
          fullName: {
            required: true
          },
          terms: {
            required: true
          },
        },
        messages: {
          email: {
            required: "Nhập địa chỉ email",
            email: "Không đúng định dạng"
          },
          password: {
            required: "Nhập mật khẩu",
            minlength: "Mật khẩu phải có ít nhất 6 ký tự"
          },
          fullName: "Nhập họ và tên bạn"
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
          error.addClass('invalid-feedback');
          element.closest('.input-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    });
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

  facebookRegister() {
    FB.login((response) => {
      this.createAccount(response.authResponse.userID);
    }, {scope: 'email'});
  }

  createAccount(userId) {
    FB.api(
      `/${userId}?fields=id,name,email`,
      (response) => {
        if (response && !response.error) {
          const user: User = {
            facebook_id: response.id,
            fullName: response.name,
            email: response.email,
            password: "123456"
          }
          this.createNewUser(user)
        }
      }
    );
  }

  register() {
    this.isSubmitted = true;
    const user: User = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      fullName: this.registerForm.value.fullName
    };
    if (user.email !== "" && user.password !== "" && user.fullName !== "") {
      this.createNewUser(user);
    } else {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Đăng ký thất bại'
        });
      });
    }
  }

  createNewUser(user: User) {
    this.userService.register(user).subscribe(() => {
      this.registerForm.reset();
      this.router.navigate(['/login']).finally(() => {
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
          title: 'Đăng ký thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Đăng ký thất bại'
        });
      });
    });
  }
}
