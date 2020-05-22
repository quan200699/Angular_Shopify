import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";

declare var $: any;
declare var Swal: any;

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
  });
  currentProduct: Product;
  id: number;
  sub: Subscription

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getProduct(id);
    })
  }

  ngOnInit() {
    $(document).ready(function () {
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
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => {
      this.currentProduct = product;
    })
  }

  updateProduct(id: number) {
    const product: Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      status: true,
      mass: this.productForm.value.mass,
      ingredient: this.productForm.value.ingredient,
      instructional: this.productForm.value.instructional,
      preservation: this.productForm.value.preservation,
      description: this.productForm.value.description
    };
    if (product.name !== "" && product.preservation !== "" && product.instructional !== "") {
      this.productService.createProduct(product).subscribe(() => {
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
        this.productForm.reset();
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
