import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {ImageService} from "../../service/image/image.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Image} from "../../model/image";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;
declare var Swal: any;
let isValidated = true;
let categoryId: number = null;

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
    category: new FormControl()
  });
  selectedImages: any[] = [];
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private imageService: ImageService,
              private storage: AngularFireStorage,
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
          isValidated = false;
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
      if (this.selectedImages.length !== 0) {
        this.productForm.reset();
        $('.textarea').summernote('reset');
        for (let selectedImage of this.selectedImages) {
          const filePath = `${product.name}/${selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
          const fileRef = this.storage.ref(filePath);
          this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(url => {
                const image: Image = {
                  url: url,
                  product_id: product.id
                };
                this.imageService.createImage(image).subscribe(() => {
                }, () => {
                });
              });
            })
          ).subscribe();
        }
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
      description: $('.textarea').val(),
      category_id: categoryId
    };
    if (isValidated) {
      return this.productService.createProduct(product).toPromise();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages = event.target.files;
    } else {
      this.selectedImages = [];
    }
  }

  removeImageFromPreview(index: number) {
    let images = [];
    for (let i = 0; i < index; i++) {
      images[i] = this.selectedImages[i];
    }
    for (let i = index; i < this.selectedImages.length - 1; i++) {
      images[i] = this.selectedImages[i + 1];
    }
    this.selectedImages = images;
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categoryList => {
      this.categoryList = categoryList;
    })

  }
}
