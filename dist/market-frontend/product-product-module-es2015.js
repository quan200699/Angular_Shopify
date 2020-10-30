(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/create-product/create-product.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/create-product/create-product.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Thêm mới sản phẩm</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Thêm sản phẩm</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<!-- Main content -->\r\n<section class=\"content\">\r\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"createImage()\" id=\"product-form\">\r\n    <div class=\"card card-secondary\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Thông tin sản phẩm</h3>\r\n\r\n        <div class=\"card-tools\">\r\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\r\n                  title=\"Collapse\">\r\n            <i class=\"fas fa-minus\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputName\">Tên sản phẩm</label>\r\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"name\" name=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"price\">Giá sản phẩm</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">$</span>\r\n            </div>\r\n            <input id=\"price\" type=\"text\" class=\"form-control\" formControlName=\"price\" name=\"price\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">.00</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"mass\">Khối lượng sản phẩm</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"text\" id=\"mass\" class=\"form-control\" formControlName=\"mass\" name=\"mass\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">.00 gram</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"category\">Danh mục sản phẩm</label>\r\n          <select class=\"form-control select2 select2-primary\" id=\"category\" name=\"category\"\r\n                  formControlName=\"category\" data-dropdown-css-class=\"select2-primary\"\r\n                  style=\"width: 100%;\">\r\n            <option [ngValue]=\"null\">Sản phẩm khác</option>\r\n            <option *ngFor=\"let category of categoryList\" [value]=\"category.id\">{{category.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"image\">Chọn ảnh sản phẩm</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"custom-file\">\r\n              <input type=\"file\" class=\"custom-file-input\" multiple=\"multiple\" id=\"image\" name=\"image\"\r\n                     (change)=\"showPreview($event)\">\r\n              <label class=\"custom-file-label\" for=\"image\">Choose file</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngFor=\"let image of selectedImages; index as i\">\r\n          <span class=\"col-11\">{{image.name.split('.').slice(0, -1)}}</span>\r\n          <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"color: white\"\r\n                  (click)=\"removeImageFromPreview(i)\">\r\n            <i class=\"fas fa-trash\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- /.card-body -->\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Mô tả sản phẩm</h3>\r\n        <div class=\"card-tools\">\r\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\r\n                  title=\"Collapse\">\r\n            <i class=\"fas fa-minus\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"preservation\">Bảo quản</label>\r\n          <input type=\"text\" id=\"preservation\" class=\"form-control\" formControlName=\"preservation\"\r\n                 name=\"preservation\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ingredient\">Thành phần</label>\r\n          <textarea id=\"ingredient\" class=\"form-control\" formControlName=\"ingredient\" name=\"ingredient\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"instructional\">Hướng dẫn sử dụng</label>\r\n          <textarea id=\"instructional\" class=\"form-control\" formControlName=\"instructional\"\r\n                    name=\"instructional\"></textarea>\r\n        </div>\r\n        <div class=\"form-group pad\">\r\n          <label for=\"description\">Mô tả chi tiết</label>\r\n          <textarea class=\"textarea\" name=\"description\" id=\"description\"\r\n                      style=\"width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.card-body -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\r\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n<!-- /.content -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/edit-product/edit-product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/edit-product/edit-product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Cập nhật sản phẩm</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Cập nhật sản phẩm</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<!-- Main content -->\r\n<section class=\"content\">\r\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"updateProduct(id)\" *ngIf=\"currentProduct != null\">\r\n    <div class=\"card card-secondary\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Thông tin sản phẩm</h3>\r\n        <div class=\"card-tools\">\r\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\r\n                  title=\"Collapse\">\r\n            <i class=\"fas fa-minus\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputName\">Tên sản phẩm</label>\r\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"name\" name=\"name\"\r\n                 [value]=\"currentProduct.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"price\">Giá sản phẩm</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">$</span>\r\n            </div>\r\n            <input id=\"price\" type=\"text\" class=\"form-control\" [value]=\"currentProduct.price\"\r\n                   formControlName=\"price\" name=\"price\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">.00</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"mass\">Khối lượng sản phẩm</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"text\" id=\"mass\" class=\"form-control\" formControlName=\"mass\" name=\"mass\"\r\n                   [value]=\"currentProduct.mass\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">.00 gram</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"category\">Danh mục sản phẩm</label>\r\n          <select class=\"form-control select2 select2-primary\" id=\"category\" name=\"category\"\r\n                  formControlName=\"category\" data-dropdown-css-class=\"select2-primary\"\r\n                  style=\"width: 100%;\">\r\n            <option [ngValue]=\"null\">Sản phẩm khác</option>\r\n            <option *ngFor=\"let category of categoryList\" [value]=\"category.id\"\r\n                    [selected]=\"category.id === categoryId\">{{category.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- /.card-body -->\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"card-title\">Mô tả sản phẩm</h3>\r\n        <div class=\"card-tools\">\r\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\r\n                  title=\"Collapse\">\r\n            <i class=\"fas fa-minus\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"preservation\">Bảo quản</label>\r\n          <input type=\"text\" id=\"preservation\" class=\"form-control\" formControlName=\"preservation\"\r\n                 [value]=\"currentProduct.preservation\" name=\"preservation\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ingredient\">Thành phần</label>\r\n          <textarea id=\"ingredient\" class=\"form-control\" [value]=\"currentProduct.ingredient\"\r\n                    formControlName=\"ingredient\" name=\"ingredient\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"instructional\">Hướng dẫn sử dụng</label>\r\n          <textarea id=\"instructional\" class=\"form-control\" formControlName=\"instructional\"\r\n                    name=\"instructional\" [value]=\"currentProduct.instructional\"></textarea>\r\n        </div>\r\n        <div class=\"form-group pad\">\r\n          <label for=\"description\">Mô tả chi tiết</label>\r\n          <textarea class=\"textarea\" formControlName=\"description\" id=\"description\"\r\n                      [value]=\"currentProduct.description\"\r\n                      style=\"width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.card-body -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\r\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n<!-- /.content -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/info-product/info-product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/info-product/info-product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin sản phẩm</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thông tin sản phẩm</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n\n  <!-- Default box -->\n  <div class=\"card\" *ngIf=\"currentProduct!=null\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">{{currentProduct.name}} ({{currentProduct.mass}}g)</h3>\n\n      <div class=\"card-tools\">\n        <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\">\n          <i class=\"fas fa-minus\"></i></button>\n        <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n          <i class=\"fas fa-times\"></i></button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12 col-md-12 col-lg-8 order-2 order-md-1\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <h4><b>Giới thiệu {{currentProduct.name}} ({{currentProduct.mass}}g)</b></h4>\n              <div class=\"post\">\n                <div [innerHTML]=\"currentProduct.description\"></div>\n                <p><b>Hướng dẫn sử dụng</b></p>\n                <p>{{currentProduct.instructional}}</p>\n                <p><b>Hướng dẫn bảo quản</b></p>\n                <p>{{currentProduct.preservation}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-12 col-lg-4 order-1 order-md-2\">\n          <h3 class=\"text-primary\"><i class=\"fas fa-image\"></i> Hình ảnh sản phẩm</h3>\n          <div class=\"col-12\">\n            <img [src]=\"imgUrl\" class=\"product-image\" alt=\"Product Image\">\n          </div>\n          <div class=\"col-12 product-image-thumbs\">\n            <div class=\"product-image-thumb\" *ngFor=\"let image of listImage; index as i\">\n              <img [src]=\"image.url\" alt=\"Product Image\" (click)=\"changeImage(i)\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.card-body -->\n  </div>\n  <!-- /.card -->\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách sản phẩm</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách sản phẩm</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"create\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-primary float-lg-right\">\r\n          Tạo mới\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-product\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Tên sản phẩm</th>\r\n          <th>Giá bán</th>\r\n          <th>Khối lượng</th>\r\n          <th style=\"width: 160px\" *ngIf=\"hasRoleAdmin\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let product of listProduct; index as i\">\r\n          <td>{{i + 1}}</td>\r\n          <td>\r\n            <a [routerLink]=\"['info',product.id]\">{{product.name}}</a>\r\n          </td>\r\n          <td>{{product.price}} đồng</td>\r\n          <td>{{product.mass}} gram</td>\r\n          <td *ngIf=\"hasRoleAdmin\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['edit',product.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getProductId(product.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa sản phẩm</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa sản phẩm này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteProduct()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/product/create-product/create-product.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/create-product/create-product.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvY3JlYXRlLXByb2R1Y3QvY3JlYXRlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product/create-product/create-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/create-product/create-product.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_image_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/image/image.service */ "./src/app/service/image/image.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");








let isValidated = true;
let categoryId = null;
let CreateProductComponent = class CreateProductComponent {
    constructor(productService, imageService, storage, categoryService) {
        this.productService = productService;
        this.imageService = imageService;
        this.storage = storage;
        this.categoryService = categoryService;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            preservation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ingredient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            instructional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.selectedImages = [];
        this.categoryList = [];
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
            });
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
    createImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const product = yield this.createProduct();
            if (product != null) {
                if (this.selectedImages.length !== 0) {
                    this.productForm.reset();
                    $('.textarea').summernote('reset');
                    for (let selectedImage of this.selectedImages) {
                        const filePath = `${product.name}/${selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
                        const fileRef = this.storage.ref(filePath);
                        this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                            fileRef.getDownloadURL().subscribe(url => {
                                const image = {
                                    url: url,
                                    product_id: product.id
                                };
                                this.imageService.createImage(image).subscribe(() => {
                                }, () => {
                                });
                            });
                        })).subscribe();
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
            }
            else {
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
        });
    }
    createProduct() {
        const product = {
            name: this.productForm.value.name,
            price: this.productForm.value.price,
            status: true,
            mass: this.productForm.value.mass,
            ingredient: this.productForm.value.ingredient,
            instructional: this.productForm.value.instructional,
            preservation: this.productForm.value.preservation,
            description: $('.textarea').val(),
            category: {
                id: categoryId
            }
        };
        if (isValidated) {
            return this.productService.createProduct(product).toPromise();
        }
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImages = event.target.files;
        }
        else {
            this.selectedImages = [];
        }
    }
    removeImageFromPreview(index) {
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
        });
    }
};
CreateProductComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _service_image_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] }
];
CreateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/create-product/create-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-product.component.css */ "./src/app/product/create-product/create-product.component.css")).default]
    })
], CreateProductComponent);



/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");






let categoryId = null;
let EditProductComponent = class EditProductComponent {
    constructor(productService, activatedRoute, categoryService) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            preservation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ingredient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            instructional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.categoryList = [];
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
            });
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
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentProduct = yield this.getProduct(this.id);
            this.categoryId = this.currentProduct.category.id;
        }));
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    updateProduct(id) {
        const product = {
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
        });
    }
};
EditProductComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
];
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/edit-product/edit-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-product.component.css */ "./src/app/product/edit-product/edit-product.component.css")).default]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/product/info-product/info-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/info-product/info-product.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvaW5mby1wcm9kdWN0L2luZm8tcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/product/info-product/info-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/info-product/info-product.component.ts ***!
  \****************************************************************/
/*! exports provided: InfoProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProductComponent", function() { return InfoProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InfoProductComponent = class InfoProductComponent {
    constructor(productService, activatedRoute) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.imgUrl = "";
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentProduct = yield this.getProduct(this.id);
            this.getAllImageByProduct(this.currentProduct);
        }));
    }
    ngOnInit() {
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllImageByProduct(product) {
        this.productService.getAllImageByProduct(product.id).subscribe(listImage => {
            this.listImage = listImage;
            this.imgUrl = listImage[0].url;
        });
    }
    changeImage(index) {
        this.imgUrl = this.listImage[index].url;
    }
};
InfoProductComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InfoProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/info-product/info-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-product.component.css */ "./src/app/product/info-product/info-product.component.css")).default]
    })
], InfoProductComponent);



/***/ }),

/***/ "./src/app/product/list-product/list-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/list-product/list-product.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/product/list-product/list-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/list-product/list-product.component.ts ***!
  \****************************************************************/
/*! exports provided: ListProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductComponent", function() { return ListProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let ListProductComponent = class ListProductComponent {
    constructor(productService, authenticationService) {
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.hasRoleAdmin = false;
        this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    this.hasRoleAdmin = true;
                }
            }
        }
    }
    ngOnInit() {
        this.getAllProduct();
    }
    getProductId(id) {
        this.id = id;
    }
    deleteProduct() {
        this.productService.deleteProduct(this.id).subscribe(() => {
            this.productService.getAllProduct().subscribe(listProduct => {
                this.listProduct = listProduct;
            });
            $(function () {
                $('#modal-delete').modal('hide');
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
                    title: 'Xóa thành công'
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
                    title: 'Xóa thất bại'
                });
            });
        });
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
            $(function () {
                $('#table-product').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                });
            });
        });
    }
};
ListProductComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-product.component.css */ "./src/app/product/list-product/list-product.component.css")).default]
    })
], ListProductComponent);



/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/product/list-product/list-product.component.ts");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/product/create-product/create-product.component.ts");
/* harmony import */ var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/admin-auth-guard */ "./src/app/helper/admin-auth-guard.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _info_product_info_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-product/info-product.component */ "./src/app/product/info-product/info-product.component.ts");









const routes = [
    {
        path: '',
        component: _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__["ListProductComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'create',
        component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__["CreateProductComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'edit/:id',
        component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'info/:id',
        component: _info_product_info_product_component__WEBPACK_IMPORTED_MODULE_8__["InfoProductComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/product/list-product/list-product.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/product/create-product/create-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _info_product_info_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-product/info-product.component */ "./src/app/product/info-product/info-product.component.ts");









let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__["ListProductComponent"],
            _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__["CreateProductComponent"],
            _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"],
            _info_product_info_product_component__WEBPACK_IMPORTED_MODULE_8__["InfoProductComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/service/image/image.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/image/image.service.ts ***!
  \************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ImageService = class ImageService {
    constructor(http) {
        this.http = http;
    }
    getAllImage() {
        return this.http.get(API_URL + '/images');
    }
    createImage(image) {
        return this.http.post(API_URL + '/images', image);
    }
    updateImage(id, image) {
        return this.http.put(API_URL + `/images/${id}`, image);
    }
    deleteImage(id) {
        return this.http.delete(API_URL + `/images/${id}`);
    }
    getImage(id) {
        return this.http.get(API_URL + `/images/${id}`);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map