import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    preservation: new FormControl(''),
    ingredient: new FormControl(''),
    instructional: new FormControl(''),
    mass: new FormControl(''),
    description: new FormControl(''),
  });
  selectedImages: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $(function () {
        $('.textarea').summernote();
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

  createProduct() {
    const product: Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      status: true,
      mass: this.productForm.value.mass,
      ingredient: this.productForm.value.ingredient,
      instructional: this.productForm.value.instructional,
      preservation: this.productForm.value.preservation,
      description: $('.textarea').val()
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
