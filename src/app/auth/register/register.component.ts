import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

declare var $: any;
declare var Swal: any;

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
          element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    });
  }

  register() {
    this.isSubmitted = true;
    const user: User = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      fullName: this.registerForm.value.fullName
    };
    if (user.email !== "" && user.password !== "" && user.fullName !== "") {
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
}
