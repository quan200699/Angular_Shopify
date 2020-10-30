(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/create-category/create-category.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/create-category/create-category.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm mới danh mục</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm danh mục</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"categoryForm\" (ngSubmit)=\"createCategory()\" id=\"category-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin danh mục</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Tên danh mục</label>\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"name\" name=\"name\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật danh mục</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật danh mục</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"categoryForm\" (ngSubmit)=\"updateCategory(id)\" *ngIf=\"currentCategory != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin danh mục</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Tên danh mục</label>\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n                 [value]=\"currentCategory.name\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/info-category/info-category.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/info-category/info-category.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin danh mục</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Thông tin danh mục</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\" *ngIf=\"currentCategory != null\">\n\n  <!-- Default box -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Danh mục {{currentCategory.name}}</h3>\n\n      <div class=\"card-tools\">\n        <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\">\n          <i class=\"fas fa-minus\"></i></button>\n        <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n          <i class=\"fas fa-times\"></i></button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-product\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên sản phẩm</th>\n          <th>Giá bán</th>\n          <th>Khối lượng</th>\n<!--          <th style=\"width: 160px\" *ngIf=\"hasRoleAdmin\"></th>-->\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let product of listProduct; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            <a [routerLink]=\"['info',product.id]\">{{product.name}}</a>\n          </td>\n          <td>{{product.price}} đồng</td>\n          <td>{{product.mass}} gram</td>\n<!--          <td *ngIf=\"hasRoleAdmin\">-->\n<!--            <div class=\"row\">-->\n<!--              <div class=\"col-6\">-->\n<!--                <a [routerLink]=\"['edit',product.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">-->\n<!--                  <i class=\"fas fa-edit\"></i>-->\n<!--                </a>-->\n<!--              </div>-->\n<!--              <div class=\"col-6\">-->\n<!--                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"-->\n<!--                        data-target=\"#modal-delete\" (click)=\"getProductId(product.id)\">-->\n<!--                  <i class=\"fas fa-trash\"></i>-->\n<!--                </button>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </td>-->\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.card-body -->\n  </div>\n  <!-- /.card -->\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-category/list-category.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-category/list-category.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Danh sách danh mục</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Danh sách danh mục</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\"></h3>\n      <div class=\"card-tools\">\n        <a routerLink=\"create\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-primary float-lg-right\">\n          Tạo mới\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-category\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên danh mục</th>\n          <th style=\"width: 160px\" *ngIf=\"hasRoleAdmin\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let category of listCategory; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            <a [routerLink]=\"['info',category.id]\">{{category.name}}</a>\n          </td>\n          <td *ngIf=\"hasRoleAdmin\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a [routerLink]=\"['edit',category.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getCategoryId(category.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xóa danh mục</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có chắc muốn xóa danh mục này</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/category/category-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _list_category_list_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-category/list-category.component */ "./src/app/category/list-category/list-category.component.ts");
/* harmony import */ var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/admin-auth-guard */ "./src/app/helper/admin-auth-guard.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/category/create-category/create-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _info_category_info_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-category/info-category.component */ "./src/app/category/info-category/info-category.component.ts");









const routes = [
    {
        path: '',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _list_category_list_category_component__WEBPACK_IMPORTED_MODULE_4__["ListCategoryComponent"]
    },
    {
        path: 'create',
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
        component: _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_6__["CreateCategoryComponent"]
    },
    {
        path: 'edit/:id',
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
        component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__["EditCategoryComponent"]
    },
    {
        path: 'info/:id',
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
        component: _info_category_info_category_component__WEBPACK_IMPORTED_MODULE_8__["InfoCategoryComponent"]
    },
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryRoutingModule);



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/category/category-routing.module.ts");
/* harmony import */ var _list_category_list_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-category/list-category.component */ "./src/app/category/list-category/list-category.component.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/category/create-category/create-category.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _info_category_info_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-category/info-category.component */ "./src/app/category/info-category/info-category.component.ts");









let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_category_list_category_component__WEBPACK_IMPORTED_MODULE_4__["ListCategoryComponent"],
            _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__["CreateCategoryComponent"],
            _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__["EditCategoryComponent"],
            _info_category_info_category_component__WEBPACK_IMPORTED_MODULE_8__["InfoCategoryComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/category/create-category/create-category.component.css":
/*!************************************************************************!*\
  !*** ./src/app/category/create-category/create-category.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NyZWF0ZS1jYXRlZ29yeS9jcmVhdGUtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/category/create-category/create-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/category/create-category/create-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");




let CreateCategoryComponent = class CreateCategoryComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
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
                        required: 'Hãy nhập tên danh mục'
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
        const category = {
            name: this.categoryForm.value.name,
        };
        if (category.name !== "") {
            return this.categoryService.createCategory(category).subscribe(() => {
                this.categoryForm.reset();
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
};
CreateCategoryComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
CreateCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/create-category/create-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-category.component.css */ "./src/app/category/create-category/create-category.component.css")).default]
    })
], CreateCategoryComponent);



/***/ }),

/***/ "./src/app/category/edit-category/edit-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/category/edit-category/edit-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");





let EditCategoryComponent = class EditCategoryComponent {
    constructor(activatedRoute, categoryService) {
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
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
                        required: 'Hãy nhập tên danh mục'
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
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentCategory = yield this.getCategory(this.id);
        }));
    }
    getCategory(id) {
        return this.categoryService.getCategory(id).toPromise();
    }
    updateCategory(id) {
        const category = {
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
};
EditCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-category.component.css */ "./src/app/category/edit-category/edit-category.component.css")).default]
    })
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/category/info-category/info-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/info-category/info-category.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2luZm8tY2F0ZWdvcnkvaW5mby1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/category/info-category/info-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/info-category/info-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: InfoCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCategoryComponent", function() { return InfoCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");




let InfoCategoryComponent = class InfoCategoryComponent {
    constructor(activatedRoute, categoryService) {
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentCategory = yield this.getCategory(this.id);
            this.getAllProductByCategory(this.currentCategory);
        }));
    }
    ngOnInit() {
    }
    getCategory(id) {
        return this.categoryService.getCategory(id).toPromise();
    }
    getAllProductByCategory(category) {
        this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
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
InfoCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
InfoCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/info-category/info-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-category.component.css */ "./src/app/category/info-category/info-category.component.css")).default]
    })
], InfoCategoryComponent);



/***/ }),

/***/ "./src/app/category/list-category/list-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/list-category/list-category.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2xpc3QtY2F0ZWdvcnkvbGlzdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/category/list-category/list-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/list-category/list-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryComponent", function() { return ListCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");




let ListCategoryComponent = class ListCategoryComponent {
    constructor(categoryService, authenticationService) {
        this.categoryService = categoryService;
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
        this.getAllCategory();
    }
    getCategoryId(id) {
        this.id = id;
    }
    deleteCategory() {
        this.categoryService.deleteCategory(this.id).subscribe(() => {
            this.categoryService.getAllCategory().subscribe(listCategory => {
                this.listCategory = listCategory;
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
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
            $(function () {
                $('#table-category').DataTable({
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
ListCategoryComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ListCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-category/list-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-category.component.css */ "./src/app/category/list-category/list-category.component.css")).default]
    })
], ListCategoryComponent);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map