import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Category} from "../../model/category";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  currentCategory: Category;
  id: number;
  sub: Subscription

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
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
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentCategory = await this.getCategory(this.id);
    })
  }

  getCategory(id: number) {
    return this.categoryService.getCategory(id).toPromise();
  }

  updateCategory(id: number) {
    const category: Category = {
      name: this.categoryForm.value.name === "" ? this.currentCategory.name : this.categoryForm.value.name,
    };
    this.categoryService.updateCategory(id, category).subscribe(() => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Cập nhật thành công'
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
          title: 'Cập nhật thất bại'
        });
      });
    });
  }
}
