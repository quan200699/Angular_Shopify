import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#category-form').validate({
        rules: {
          name: {
            required: true
          }
        },
        messages: {
          name: {
            required: 'Hãy nhập tên sản phẩm'
          }
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

  createCategory() {
    const category: Category = {
      name: this.categoryForm.value.name,
    };
    if (category.name !== "") {
      return this.categoryService.createCategory(category).subscribe(() => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Tạo mới thành công'
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
            title: 'Tạo mới thất bại'
          });
        });
      });
    }
  }

}
