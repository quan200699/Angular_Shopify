(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-bill-warehouse-bill-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm mới chi tiết phiếu nhập</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm mới chi tiết phiếu nhập</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"warehouseBillDetailForm\" (ngSubmit)=\"createWarehouseBillDetail()\" id=\"warehouse-bill-deatil-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin chi tiết phiếu nhập</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"product\">Sản phẩm</label>\n          <select class=\"form-control select2 select2-primary\" id=\"product\" name=\"product\"\n                    data-dropdown-css-class=\"select2-primary\"\n                  style=\"width: 100%;\">\n            <option [ngValue]=\"null\">Chọn sản phẩm</option>\n            <option *ngFor=\"let product of listProduct\" [value]=\"product.id\">{{product.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Số lượng</label>\n          <input type=\"number\" id=\"inputName\" class=\"form-control\" formControlName=\"amount\" name=\"amount\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm mới phiếu nhập</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm kho hàng</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"warehouseBillForm\" (ngSubmit)=\"createWarehouseBill()\" id=\"warehouse-bill-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin phiếu nhập</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"warehouse\">Nhà kho</label>\n          <select class=\"form-control\" id=\"warehouse\" name=\"warehouse\" formControlName=\"warehouse\">\n            <option [ngValue]=\"null\">Nhà kho</option>\n            <option *ngFor=\"let warehouse of listWarehouse\" [value]=\"warehouse.id\">{{warehouse.name}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật chi tiết phiếu nhập kho</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật chi tiết phiếu nhập kho</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"warehouseBillDetailForm\" (ngSubmit)=\"updateWarehouseBillDetail(detailId)\"\n        *ngIf=\"currentWarehouseBillDetail != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin chi tiết phiếu nhập kho</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"product\">Sản phẩm</label>\n          <select class=\"form-control select2 select2-primary\" id=\"product\" name=\"product\"\n                  data-dropdown-css-class=\"select2-primary\" *ngIf=\"currentWarehouseBillDetail.product!=null\"\n                  style=\"width: 100%;\">\n            <option [ngValue]=\"null\">Chọn sản phẩm</option>\n            <option *ngFor=\"let product of listProduct\" [value]=\"product.id\"\n                    [selected]=\"currentWarehouseBillDetail.product.id == product.id\">{{product.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Số lượng</label>\n          <input type=\"number\" id=\"inputName\" class=\"form-control\" [value]=\"currentWarehouseBillDetail.amount\"\n                 formControlName=\"amount\" name=\"amount\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật phiếu nhập kho</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật phiếu nhập kho</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"warehouseBillForm\" (ngSubmit)=\"updateWarehouseBill(id)\" *ngIf=\"currentWarehouseBill != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin phiếu nhập kho</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"warehouse\">Nhà kho</label>\n          <select class=\"form-control\" id=\"warehouse\" name=\"warehouse\" formControlName=\"warehouse\"\n                  *ngIf=\"currentWarehouseBill.warehouse!=null\">\n            <option [ngValue]=\"null\">Nhà kho</option>\n            <option *ngFor=\"let warehouse of listWarehouse\" [value]=\"warehouse.id\"\n                    [selected]=\"warehouse.id == currentWarehouseBill.warehouse.id\">{{warehouse.name}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin chi tiết hóa đơn nhập</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Chi tiết hóa đơn nhập</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\" *ngIf=\"currentWarehouseBill != null\">\n\n  <!-- Default box -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Chi tiết phiếu nhập</h3>\n\n      <div class=\"card-tools\">\n        <a routerLink=\"create\" class=\"btn btn-primary float-lg-right\">\n          Tạo mới\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-warehouse-bill-detail\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th style=\"width: 160px\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let warehouseBillDetail of listWarehouseBillDetail; index as i\">\n          <td>{{i + 1}}</td>\n          <td *ngIf=\"warehouseBillDetail.product!=null\">{{warehouseBillDetail.product.name}}</td>\n          <td>{{warehouseBillDetail.amount}}</td>\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a [routerLink]=\"['edit',warehouseBillDetail.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getWarehouseBillDetailId(warehouseBillDetail.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.card-body -->\n  </div>\n  <!-- /.card -->\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xóa chi tiết phiếu nhập</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có chắc muốn xóa chi tiết phiếu nhập này</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteWarehouseBillDetail()\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách phiếu nhập kho</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách phiếu nhập kho</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"create\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-primary float-lg-right\">\r\n          Tạo mới\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-warehouse-bill\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Mã phiếu nhập</th>\r\n          <th>Ngày tạo</th>\r\n          <th>Kho</th>\r\n          <th style=\"width: 160px\" *ngIf=\"hasRoleAdmin\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let warehouseBill of listWarehouseBill; index as i\">\r\n          <td>{{i + 1}}</td>\r\n          <td>\r\n            <a [routerLink]=\"['info',warehouseBill.id]\">{{warehouseBill.id}}</a>\r\n          </td>\r\n          <td>{{warehouseBill.createDate}}</td>\r\n          <td *ngIf=\"warehouseBill.warehouse!=null\">{{warehouseBill.warehouse.name}}</td>\r\n          <td *ngIf=\"hasRoleAdmin\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['edit',warehouseBill.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getWarehouseBillId(warehouseBill.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa nhà kho</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa phiếu nhập kho này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteWarehouseBill()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2NyZWF0ZS13YXJlaG91c2UtYmlsbC1kZXRhaWwvY3JlYXRlLXdhcmVob3VzZS1iaWxsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreateWarehouseBillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWarehouseBillDetailComponent", function() { return CreateWarehouseBillDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");






let productId = null;
let CreateWarehouseBillDetailComponent = class CreateWarehouseBillDetailComponent {
    constructor(warehouseBillDetailService, activatedRoute, productService) {
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.warehouseBillDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
        this.listProduct = [];
        this.id = -1;
    }
    ngOnInit() {
        this.getAllProduct();
        $(document).ready(function () {
            $('.select2').select2();
            $('#product').on('select2:select', function (e, source) {
                productId = $(e.currentTarget).val();
            });
            $('#warehouse-bill-deatil-form').validate({
                rules: {
                    product: {
                        required: true
                    },
                    amount: {
                        required: true
                    }
                },
                messages: {
                    product: {
                        required: 'Hãy chọn sản phẩm',
                        amount: 'nhập số lượng'
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
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
        });
    }
    createWarehouseBillDetail() {
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
            const warehouseBillDetail = {
                product: {
                    id: productId
                },
                amount: this.warehouseBillDetailForm.value.amount,
                wareHouseBill: {
                    id: this.id
                }
            };
            if (warehouseBillDetail.amount !== 0) {
                return this.warehouseBillDetailService.createWarehouseBillDetail(warehouseBillDetail).subscribe(() => {
                    this.warehouseBillDetailForm.reset();
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
};
CreateWarehouseBillDetailComponent.ctorParameters = () => [
    { type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
CreateWarehouseBillDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-warehouse-bill-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-warehouse-bill-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-warehouse-bill-detail.component.scss */ "./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.scss")).default]
    })
], CreateWarehouseBillDetailComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2NyZWF0ZS13YXJlaG91c2UtYmlsbC9jcmVhdGUtd2FyZWhvdXNlLWJpbGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateWarehouseBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWarehouseBillComponent", function() { return CreateWarehouseBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/warehouse-bill/warehouse-bill.service */ "./src/app/service/warehouse-bill/warehouse-bill.service.ts");
/* harmony import */ var _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/warehouse/warehouse.service */ "./src/app/service/warehouse/warehouse.service.ts");





let CreateWarehouseBillComponent = class CreateWarehouseBillComponent {
    constructor(warehouseBillService, warehouseService) {
        this.warehouseBillService = warehouseBillService;
        this.warehouseService = warehouseService;
        this.warehouseBillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            warehouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.listWarehouse = [];
    }
    ngOnInit() {
        this.getAllWarehouse();
        $(document).ready(function () {
            $('#warehouse-bill-form').validate({
                rules: {
                    warehouse: {
                        required: true
                    },
                },
                messages: {
                    warehouse: {
                        required: 'Hãy chọn kho nhập'
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
    getAllWarehouse() {
        this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
            this.listWarehouse = listWarehouse;
        });
    }
    createWarehouseBill() {
        const warehouseBill = {
            warehouse: {
                id: this.warehouseBillForm.value.warehouse
            }
        };
        if (warehouseBill.warehouse !== null) {
            return this.warehouseBillService.createWarehouseBill(warehouseBill).subscribe(() => {
                this.warehouseBillForm.reset();
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
    }
};
CreateWarehouseBillComponent.ctorParameters = () => [
    { type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillService"] },
    { type: _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"] }
];
CreateWarehouseBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-warehouse-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-warehouse-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-warehouse-bill.component.scss */ "./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.scss")).default]
    })
], CreateWarehouseBillComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2VkaXQtd2FyZWhvdXNlLWJpbGwtZGV0YWlsL2VkaXQtd2FyZWhvdXNlLWJpbGwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditWarehouseBillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehouseBillDetailComponent", function() { return EditWarehouseBillDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");






let EditWarehouseBillDetailComponent = class EditWarehouseBillDetailComponent {
    constructor(activatedRoute, warehouseBillDetailService, productService) {
        this.activatedRoute = activatedRoute;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.productService = productService;
        this.warehouseBillDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
        this.listProduct = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#warehouse-bill-detail-form').validate({
                rules: {
                    amount: {
                        required: true
                    },
                },
                messages: {
                    amount: {
                        required: 'Hãy nhập số lượng'
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
            this.detailId = +paramMap.get('detailId');
            this.currentWarehouseBillDetail = yield this.getWarehouseBillDetail(this.detailId);
        }));
        this.getAllProduct();
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
        });
    }
    getWarehouseBillDetail(id) {
        return this.warehouseBillDetailService.getWarehouseBillDetail(id).toPromise();
    }
    updateWarehouseBillDetail(id) {
        const warehouseBillDetail = {
            wareHouseBill: {
                id: this.id
            },
            product: {
                id: this.warehouseBillDetailForm.value.product === "" ? this.currentWarehouseBillDetail.product : this.warehouseBillDetailForm.value.product,
            },
            amount: this.warehouseBillDetailForm.value.amount
        };
        this.warehouseBillDetailService.updateWarehouseBillDetail(id, warehouseBillDetail).subscribe(() => {
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
EditWarehouseBillDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseBillDetailService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
EditWarehouseBillDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-warehouse-bill-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-warehouse-bill-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-warehouse-bill-detail.component.scss */ "./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.scss")).default]
    })
], EditWarehouseBillDetailComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2VkaXQtd2FyZWhvdXNlLWJpbGwvZWRpdC13YXJlaG91c2UtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditWarehouseBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehouseBillComponent", function() { return EditWarehouseBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/warehouse-bill/warehouse-bill.service */ "./src/app/service/warehouse-bill/warehouse-bill.service.ts");
/* harmony import */ var _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/warehouse/warehouse.service */ "./src/app/service/warehouse/warehouse.service.ts");






let EditWarehouseBillComponent = class EditWarehouseBillComponent {
    constructor(activatedRoute, warehouseBillService, warehouseService) {
        this.activatedRoute = activatedRoute;
        this.warehouseBillService = warehouseBillService;
        this.warehouseService = warehouseService;
        this.warehouseBillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            warehouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.listWarehouse = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#warehouse-bill-form').validate({
                rules: {
                    warehouse: {
                        required: true
                    },
                },
                messages: {
                    warehouse: {
                        required: 'Hãy chọn nhà kho'
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
            this.currentWarehouseBill = yield this.getWarehouseBill(this.id);
        }));
        this.getAllWarehouse();
    }
    getAllWarehouse() {
        this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
            this.listWarehouse = listWarehouse;
        });
    }
    getWarehouseBill(id) {
        return this.warehouseBillService.getWarehouseBill(id).toPromise();
    }
    updateWarehouseBill(id) {
        const warehouseBill = {
            createDate: this.currentWarehouseBill.createDate,
            warehouse: {
                id: this.warehouseBillForm.value.warehouse === "" ? this.currentWarehouseBill.warehouse : this.warehouseBillForm.value.warehouse,
            }
        };
        this.warehouseBillService.updateWarehouseBill(id, warehouseBill).subscribe(() => {
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
EditWarehouseBillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillService"] },
    { type: _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseService"] }
];
EditWarehouseBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-warehouse-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-warehouse-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-warehouse-bill.component.scss */ "./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.scss")).default]
    })
], EditWarehouseBillComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2luZm8td2FyZWhvdXNlLWJpbGwvaW5mby13YXJlaG91c2UtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InfoWarehouseBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWarehouseBillComponent", function() { return InfoWarehouseBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/warehouse-bill/warehouse-bill.service */ "./src/app/service/warehouse-bill/warehouse-bill.service.ts");
/* harmony import */ var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");





let InfoWarehouseBillComponent = class InfoWarehouseBillComponent {
    constructor(activatedRoute, warehouseBillService, warehouseBillDetailService) {
        this.activatedRoute = activatedRoute;
        this.warehouseBillService = warehouseBillService;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentWarehouseBill = yield this.getWarehouseBill(this.id);
            this.getAllProductByCategory(this.currentWarehouseBill);
        }));
    }
    ngOnInit() {
    }
    getWarehouseBill(id) {
        return this.warehouseBillService.getWarehouseBill(id).toPromise();
    }
    getWarehouseBillDetailId(id) {
        this.detailId = id;
    }
    deleteWarehouseBillDetail() {
        this.warehouseBillDetailService.deleteWarehouseBillDetail(this.detailId).subscribe(() => {
            this.warehouseBillService.getAllWarehouseBillDetail(this.id).subscribe(listWarehouseBillDetail => {
                this.listWarehouseBillDetail = listWarehouseBillDetail;
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
    getAllProductByCategory(warehouseBill) {
        this.warehouseBillService.getAllWarehouseBillDetail(warehouseBill.id).subscribe(listWarehouseBillDetail => {
            this.listWarehouseBillDetail = listWarehouseBillDetail;
            $(function () {
                $('#table-warehouse-bill-detail').DataTable({
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
InfoWarehouseBillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillService"] },
    { type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillDetailService"] }
];
InfoWarehouseBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-warehouse-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-warehouse-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-warehouse-bill.component.scss */ "./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.scss")).default]
    })
], InfoWarehouseBillComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS1iaWxsL2xpc3Qtd2FyZWhvdXNlLWJpbGwvbGlzdC13YXJlaG91c2UtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListWarehouseBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWarehouseBillComponent", function() { return ListWarehouseBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/warehouse-bill/warehouse-bill.service */ "./src/app/service/warehouse-bill/warehouse-bill.service.ts");




let ListWarehouseBillComponent = class ListWarehouseBillComponent {
    constructor(warehouseBillService, authenticationService) {
        this.warehouseBillService = warehouseBillService;
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
        this.getAllWarehouseBill();
    }
    getWarehouseBillId(id) {
        this.id = id;
    }
    deleteWarehouseBill() {
        this.warehouseBillService.deleteWarehouseBill(this.id).subscribe(() => {
            this.warehouseBillService.getAllWarehouseBill().subscribe(listWarehouseBill => {
                this.listWarehouseBill = listWarehouseBill;
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
    getAllWarehouseBill() {
        this.warehouseBillService.getAllWarehouseBill().subscribe(listWarehouseBill => {
            this.listWarehouseBill = listWarehouseBill;
            $(function () {
                $('#table-warehouse-bill').DataTable({
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
ListWarehouseBillComponent.ctorParameters = () => [
    { type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ListWarehouseBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-warehouse-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-warehouse-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-warehouse-bill.component.scss */ "./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.scss")).default]
    })
], ListWarehouseBillComponent);



/***/ }),

/***/ "./src/app/warehouse-bill/warehouse-bill-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/warehouse-bill/warehouse-bill-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WarehouseBillRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseBillRoutingModule", function() { return WarehouseBillRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_warehouse_bill_list_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-warehouse-bill/list-warehouse-bill.component */ "./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.ts");
/* harmony import */ var _create_warehouse_bill_create_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-warehouse-bill/create-warehouse-bill.component */ "./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.ts");
/* harmony import */ var _edit_warehouse_bill_edit_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-warehouse-bill/edit-warehouse-bill.component */ "./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.ts");
/* harmony import */ var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/admin-auth-guard */ "./src/app/helper/admin-auth-guard.ts");
/* harmony import */ var _info_warehouse_bill_info_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-warehouse-bill/info-warehouse-bill.component */ "./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.ts");
/* harmony import */ var _create_warehouse_bill_detail_create_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-warehouse-bill-detail/create-warehouse-bill-detail.component */ "./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.ts");
/* harmony import */ var _edit_warehouse_bill_detail_edit_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-warehouse-bill-detail/edit-warehouse-bill-detail.component */ "./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.ts");










const routes = [
    {
        path: '',
        component: _list_warehouse_bill_list_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_3__["ListWarehouseBillComponent"]
    },
    {
        path: 'create',
        component: _create_warehouse_bill_create_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_4__["CreateWarehouseBillComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'edit/:id',
        component: _edit_warehouse_bill_edit_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_5__["EditWarehouseBillComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'info/:id',
        component: _info_warehouse_bill_info_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_7__["InfoWarehouseBillComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'info/:id/create',
        component: _create_warehouse_bill_detail_create_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_8__["CreateWarehouseBillDetailComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'info/:id/edit/:detailId',
        component: _edit_warehouse_bill_detail_edit_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__["EditWarehouseBillDetailComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
];
let WarehouseBillRoutingModule = class WarehouseBillRoutingModule {
};
WarehouseBillRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WarehouseBillRoutingModule);



/***/ }),

/***/ "./src/app/warehouse-bill/warehouse-bill.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/warehouse-bill/warehouse-bill.module.ts ***!
  \*********************************************************/
/*! exports provided: WarehouseBillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseBillModule", function() { return WarehouseBillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _warehouse_bill_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-bill-routing.module */ "./src/app/warehouse-bill/warehouse-bill-routing.module.ts");
/* harmony import */ var _list_warehouse_bill_list_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-warehouse-bill/list-warehouse-bill.component */ "./src/app/warehouse-bill/list-warehouse-bill/list-warehouse-bill.component.ts");
/* harmony import */ var _create_warehouse_bill_create_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-warehouse-bill/create-warehouse-bill.component */ "./src/app/warehouse-bill/create-warehouse-bill/create-warehouse-bill.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_warehouse_bill_edit_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-warehouse-bill/edit-warehouse-bill.component */ "./src/app/warehouse-bill/edit-warehouse-bill/edit-warehouse-bill.component.ts");
/* harmony import */ var _info_warehouse_bill_info_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-warehouse-bill/info-warehouse-bill.component */ "./src/app/warehouse-bill/info-warehouse-bill/info-warehouse-bill.component.ts");
/* harmony import */ var _create_warehouse_bill_detail_create_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-warehouse-bill-detail/create-warehouse-bill-detail.component */ "./src/app/warehouse-bill/create-warehouse-bill-detail/create-warehouse-bill-detail.component.ts");
/* harmony import */ var _edit_warehouse_bill_detail_edit_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-warehouse-bill-detail/edit-warehouse-bill-detail.component */ "./src/app/warehouse-bill/edit-warehouse-bill-detail/edit-warehouse-bill-detail.component.ts");











let WarehouseBillModule = class WarehouseBillModule {
};
WarehouseBillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_warehouse_bill_list_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_4__["ListWarehouseBillComponent"],
            _create_warehouse_bill_create_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_5__["CreateWarehouseBillComponent"],
            _edit_warehouse_bill_edit_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_7__["EditWarehouseBillComponent"],
            _info_warehouse_bill_info_warehouse_bill_component__WEBPACK_IMPORTED_MODULE_8__["InfoWarehouseBillComponent"],
            _create_warehouse_bill_detail_create_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__["CreateWarehouseBillDetailComponent"],
            _edit_warehouse_bill_detail_edit_warehouse_bill_detail_component__WEBPACK_IMPORTED_MODULE_10__["EditWarehouseBillDetailComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _warehouse_bill_routing_module__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], WarehouseBillModule);



/***/ })

}]);
//# sourceMappingURL=warehouse-bill-warehouse-bill-module-es2015.js.map