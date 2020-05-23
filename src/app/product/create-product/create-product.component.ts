import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {ImageService} from "../../service/image/image.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Image} from "../../model/image";

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
  imgSrc = '../../../assets/img/Placeholder.jpg';

  constructor(private productService: ProductService,
              private imageService: ImageService,
              private storage: AngularFireStorage) {
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
          image: {
            required: true
          }
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
          image: {
            required: 'Chọn ảnh cho sản phẩm'
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

  async createImage() {
    const product = await this.createProduct();
    if (product != null) {
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
      if (this.selectedImages.length !== 0) {
        for (let selectedImage of this.selectedImages) {
          const filePath = `${selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
          const fileRef = this.storage.ref(filePath);
          this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(url => {
                const image: Image = {
                  url: url,
                  product: {
                    id: product.id
                  }
                };
                this.imageService.createImage(image).subscribe(() => {
                }, () => {
                });
              });
            })
          ).subscribe();
        }
      }
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
          title: 'Tạo mới thất bại'
        });
      });
    }
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
      return this.productService.createProduct(product).toPromise();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages = event.target.files;
    } else {
      this.imgSrc = '../../../assets/img/Placeholder.jpg';
      this.selectedImages = [];
    }
  }
}
