import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;
declare var Swal: any;
let categoryId: number = null;

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    preservation: new FormControl(''),
    ingredient: new FormControl(''),
    instructional: new FormControl(''),
    mass: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl()
  });
  currentProduct: Product;
  id: number;
  sub: Subscription
  categoryList: Category[] = [];
  categoryId: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
    this.getAllCategory();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.select2').select2();
      $('#category').on('select2:select', function (e, source) {
        categoryId = $(e.currentTarget).val();
      });
      $(function () {
        $('.textarea').summernote()
      })
      $('#product-form').validate({
        rules: {
          name: {
            required: true
          },
          price: {
            required: true
          },
          preservation: {
            required: true
          },
          ingredient: {
            required: true
          },
          instructional: {
            required: true
          },
          mass: {
            required: true
          },
          description: {
            required: true
          },
        },
        messages: {
          name: {
            required: 'Hãy nhập tên sản phẩm'
          },
          price: {
            required: 'Hãy nhập giá cho sản phẩm'
          },
          preservation: {
            required: 'Hãy nhập hướng dẫn bảo quản'
          },
          ingredient: {
            required: 'Hãy nhập thông tin thành phần'
          },
          instructional: {
            required: 'Hãy nhập hướng dẫn sử dụng'
          },
          mass: {
            required: 'Hãy nhập khối lượng sản phẩm'
          },
          description: {
            required: 'Hãy nhập mô tả chi tiết cho sản phẩm'
          },
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
      this.currentProduct = await this.getProduct(this.id);
      this.categoryId = this.currentProduct.category.id;
    })
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  updateProduct(id: number) {
    const product: Product = {
      name: this.productForm.value.name === "" ? this.currentProduct.name : this.productForm.value.name,
      price: this.productForm.value.price === "" ? this.currentProduct.price : this.productForm.value.price,
      status: true,
      mass: this.productForm.value.mass === "" ? this.currentProduct.mass : this.productForm.value.mass,
      ingredient: this.productForm.value.ingredient === "" ? this.currentProduct.ingredient : this.productForm.value.ingredient,
      instructional: this.productForm.value.instructional === "" ? this.currentProduct.instructional : this.productForm.value.instructional,
      preservation: this.productForm.value.preservation === "" ? this.currentProduct.preservation : this.productForm.value.preservation,
      description: $('.textarea').val(),
      category: {
        id: categoryId
      }
    };
    this.productService.updateProduct(id, product).subscribe(() => {
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

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categoryList => {
      this.categoryList = categoryList;
    })
  }
}
