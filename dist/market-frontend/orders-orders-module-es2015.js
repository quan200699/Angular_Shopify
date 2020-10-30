(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin chi tiết hóa đơn</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Chi tiết hóa đơn</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n\n  <!-- Default box -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Chi tiết đơn hàng</h3>\n      <div class=\"card-tools\">\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-warehouse-bill-detail\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let orderDetail of listOrderDetail; index as i\">\n          <td>{{i + 1}}</td>\n          <td *ngIf=\"orderDetail.product!=null\">{{orderDetail.product.name}}</td>\n          <td>{{orderDetail.amount}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.card-body -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Danh sách đơn hàng đang chờ</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Danh sách đơn hàng đang chờ</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\"></h3>\n      <div class=\"card-tools\">\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-warehouse\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Mã đơn hàng</th>\n          <th>Ngày tạo</th>\n          <th>Tên người đặt hàng</th>\n          <th>Trạng thái</th>\n          <th style=\"width: 160px\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let orders of listOrder; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            <a [routerLink]=\"['info',orders.id]\">{{orders.id}}</a>\n          </td>\n          <td>{{orders.createDate}}</td>\n          <td *ngIf=\"orders.user!=null\">{{orders.user.email}}</td>\n          <td>{{orders.status ? \"Đã xác nhận\" : \"Đang chờ xác nhận\"}}</td>\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-success\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-confirm\" (click)=\"getOrderId(orders.id)\">\n                  <i class=\"fas fa-check\"></i>\n                </button>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getOrderId(orders.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"modal-confirm\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xác nhận đơn hàng</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có muốn xác nhận đơn hàng này không ?</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmOrder(id)\">Đồng ý</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Hủy đơn hàng</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có muốn hủy đơn hàng này không ?</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder(id)\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/orders/info-order/info-order.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/orders/info-order/info-order.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9pbmZvLW9yZGVyL2luZm8tb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/info-order/info-order.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/info-order/info-order.component.ts ***!
  \***********************************************************/
/*! exports provided: InfoOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoOrderComponent", function() { return InfoOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");




let InfoOrderComponent = class InfoOrderComponent {
    constructor(activatedRoute, ordersService) {
        this.activatedRoute = activatedRoute;
        this.ordersService = ordersService;
        this.listOrderDetail = [];
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentOrder = yield this.getCurrentOrder(this.id);
            this.getAllOrderDetailByOrder(this.currentOrder);
        }));
    }
    ngOnInit() {
    }
    getCurrentOrder(id) {
        return this.ordersService.getOrders(id).toPromise();
    }
    getAllOrderDetailByOrder(orders) {
        this.ordersService.getAllOrderDetail(orders.id).subscribe(listOrderDetail => {
            this.listOrderDetail = listOrderDetail;
        });
    }
};
InfoOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
];
InfoOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-order.component.scss */ "./src/app/orders/info-order/info-order.component.scss")).default]
    })
], InfoOrderComponent);



/***/ }),

/***/ "./src/app/orders/list-order/list-order.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/orders/list-order/list-order.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9saXN0LW9yZGVyL2xpc3Qtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/list-order/list-order.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/list-order/list-order.component.ts ***!
  \***********************************************************/
/*! exports provided: ListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification/notification.service */ "./src/app/service/notification/notification.service.ts");




let ListOrderComponent = class ListOrderComponent {
    constructor(ordersService, notificationService) {
        this.ordersService = ordersService;
        this.notificationService = notificationService;
        this.listOrder = [];
    }
    ngOnInit() {
        this.getAllOrders();
    }
    getOrderId(id) {
        this.id = id;
    }
    getOrder(id) {
        return this.ordersService.getOrders(id).toPromise();
    }
    deleteOrder(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let orders = yield this.getOrder(id);
            const notification = {
                message: "Đơn hàng " + orders.id + " của bạn đã bị hủy",
                user: {
                    id: orders.user.id
                }
            };
            this.ordersService.deleteOrders(id).subscribe(() => {
                this.createNotification(notification);
                this.ordersService.getAllOrder(false).subscribe(listOrder => {
                    this.listOrder = listOrder;
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
                        title: 'Hủy đơn hàng thành công'
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
                        title: 'Hủy đơn hàng thất bại'
                    });
                });
            });
        });
    }
    confirmOrder(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let orders = yield this.getOrder(id);
            const notification = {
                message: "Đơn hàng " + orders.id + " của bạn đã được xác nhận",
                user: {
                    id: orders.user.id
                }
            };
            orders.status = true;
            this.ordersService.updateOrders(id, orders).subscribe(() => {
                this.createNotification(notification);
                this.ordersService.getAllOrder(false).subscribe(listOrder => {
                    this.listOrder = listOrder;
                });
                $(function () {
                    $('#modal-confirm').modal('hide');
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
                        title: 'Đơn hàng đã được xác nhận'
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
                        title: 'Xác nhận đơn hàng thất bại'
                    });
                });
            });
        });
    }
    createNotification(notification) {
        this.notificationService.createNotification(notification).subscribe();
    }
    getAllOrders() {
        this.ordersService.getAllOrder(false).subscribe(listOrder => {
            this.listOrder = listOrder;
            $(function () {
                $('#table-orders').DataTable({
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
ListOrderComponent.ctorParameters = () => [
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
ListOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-order.component.scss */ "./src/app/orders/list-order/list-order.component.scss")).default]
    })
], ListOrderComponent);



/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/orders/list-order/list-order.component.ts");
/* harmony import */ var _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-order/info-order.component */ "./src/app/orders/info-order/info-order.component.ts");





const routes = [
    {
        path: '',
        component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__["ListOrderComponent"]
    },
    {
        path: 'info/:id',
        component: _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_4__["InfoOrderComponent"]
    }
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrdersRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/orders/list-order/list-order.component.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-order/info-order.component */ "./src/app/orders/info-order/info-order.component.ts");






let OrdersModule = class OrdersModule {
};
OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_5__["InfoOrderComponent"],
            _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__["ListOrderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"]
        ]
    })
], OrdersModule);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map