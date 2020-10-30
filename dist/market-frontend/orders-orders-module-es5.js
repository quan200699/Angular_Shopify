function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersInfoOrderInfoOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin chi tiết hóa đơn</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Chi tiết hóa đơn</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n\n  <!-- Default box -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Chi tiết đơn hàng</h3>\n      <div class=\"card-tools\">\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-warehouse-bill-detail\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let orderDetail of listOrderDetail; index as i\">\n          <td>{{i + 1}}</td>\n          <td *ngIf=\"orderDetail.product!=null\">{{orderDetail.product.name}}</td>\n          <td>{{orderDetail.amount}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.card-body -->\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersListOrderListOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Danh sách đơn hàng đang chờ</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Danh sách đơn hàng đang chờ</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\"></h3>\n      <div class=\"card-tools\">\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-warehouse\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Mã đơn hàng</th>\n          <th>Ngày tạo</th>\n          <th>Tên người đặt hàng</th>\n          <th>Trạng thái</th>\n          <th style=\"width: 160px\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let orders of listOrder; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            <a [routerLink]=\"['info',orders.id]\">{{orders.id}}</a>\n          </td>\n          <td>{{orders.createDate}}</td>\n          <td *ngIf=\"orders.user!=null\">{{orders.user.email}}</td>\n          <td>{{orders.status ? \"Đã xác nhận\" : \"Đang chờ xác nhận\"}}</td>\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-success\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-confirm\" (click)=\"getOrderId(orders.id)\">\n                  <i class=\"fas fa-check\"></i>\n                </button>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getOrderId(orders.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"modal-confirm\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xác nhận đơn hàng</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có muốn xác nhận đơn hàng này không ?</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmOrder(id)\">Đồng ý</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Hủy đơn hàng</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có muốn hủy đơn hàng này không ?</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder(id)\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./src/app/orders/info-order/info-order.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/orders/info-order/info-order.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersInfoOrderInfoOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9pbmZvLW9yZGVyL2luZm8tb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/orders/info-order/info-order.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/orders/info-order/info-order.component.ts ***!
    \***********************************************************/

  /*! exports provided: InfoOrderComponent */

  /***/
  function srcAppOrdersInfoOrderInfoOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoOrderComponent", function () {
      return InfoOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/order/orders.service */
    "./src/app/service/order/orders.service.ts");

    var InfoOrderComponent = /*#__PURE__*/function () {
      function InfoOrderComponent(activatedRoute, ordersService) {
        var _this = this;

        _classCallCheck(this, InfoOrderComponent);

        this.activatedRoute = activatedRoute;
        this.ordersService = ordersService;
        this.listOrderDetail = [];
        this.sub = this.activatedRoute.paramMap.subscribe(function (paramMap) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.id = +paramMap.get('id');
                    _context.next = 3;
                    return this.getCurrentOrder(this.id);

                  case 3:
                    this.currentOrder = _context.sent;
                    this.getAllOrderDetailByOrder(this.currentOrder);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      _createClass(InfoOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCurrentOrder",
        value: function getCurrentOrder(id) {
          return this.ordersService.getOrders(id).toPromise();
        }
      }, {
        key: "getAllOrderDetailByOrder",
        value: function getAllOrderDetailByOrder(orders) {
          var _this2 = this;

          this.ordersService.getAllOrderDetail(orders.id).subscribe(function (listOrderDetail) {
            _this2.listOrderDetail = listOrderDetail;
          });
        }
      }]);

      return InfoOrderComponent;
    }();

    InfoOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]
      }];
    };

    InfoOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/info-order/info-order.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info-order.component.scss */
      "./src/app/orders/info-order/info-order.component.scss"))["default"]]
    })], InfoOrderComponent);
    /***/
  },

  /***/
  "./src/app/orders/list-order/list-order.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/orders/list-order/list-order.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersListOrderListOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9saXN0LW9yZGVyL2xpc3Qtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/orders/list-order/list-order.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/orders/list-order/list-order.component.ts ***!
    \***********************************************************/

  /*! exports provided: ListOrderComponent */

  /***/
  function srcAppOrdersListOrderListOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function () {
      return ListOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/order/orders.service */
    "./src/app/service/order/orders.service.ts");
    /* harmony import */


    var _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/notification/notification.service */
    "./src/app/service/notification/notification.service.ts");

    var ListOrderComponent = /*#__PURE__*/function () {
      function ListOrderComponent(ordersService, notificationService) {
        _classCallCheck(this, ListOrderComponent);

        this.ordersService = ordersService;
        this.notificationService = notificationService;
        this.listOrder = [];
      }

      _createClass(ListOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllOrders();
        }
      }, {
        key: "getOrderId",
        value: function getOrderId(id) {
          this.id = id;
        }
      }, {
        key: "getOrder",
        value: function getOrder(id) {
          return this.ordersService.getOrders(id).toPromise();
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var orders, notification;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getOrder(id);

                  case 2:
                    orders = _context2.sent;
                    notification = {
                      message: "Đơn hàng " + orders.id + " của bạn đã bị hủy",
                      user: {
                        id: orders.user.id
                      }
                    };
                    this.ordersService.deleteOrders(id).subscribe(function () {
                      _this3.createNotification(notification);

                      _this3.ordersService.getAllOrder(false).subscribe(function (listOrder) {
                        _this3.listOrder = listOrder;
                      });

                      $(function () {
                        $('#modal-delete').modal('hide');
                      });
                      $(function () {
                        var Toast = Swal.mixin({
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
                    }, function () {
                      $(function () {
                        var Toast = Swal.mixin({
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

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "confirmOrder",
        value: function confirmOrder(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var orders, notification;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getOrder(id);

                  case 2:
                    orders = _context3.sent;
                    notification = {
                      message: "Đơn hàng " + orders.id + " của bạn đã được xác nhận",
                      user: {
                        id: orders.user.id
                      }
                    };
                    orders.status = true;
                    this.ordersService.updateOrders(id, orders).subscribe(function () {
                      _this4.createNotification(notification);

                      _this4.ordersService.getAllOrder(false).subscribe(function (listOrder) {
                        _this4.listOrder = listOrder;
                      });

                      $(function () {
                        $('#modal-confirm').modal('hide');
                      });
                      $(function () {
                        var Toast = Swal.mixin({
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
                    }, function () {
                      $(function () {
                        var Toast = Swal.mixin({
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

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createNotification",
        value: function createNotification(notification) {
          this.notificationService.createNotification(notification).subscribe();
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          var _this5 = this;

          this.ordersService.getAllOrder(false).subscribe(function (listOrder) {
            _this5.listOrder = listOrder;
            $(function () {
              $('#table-orders').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false
              });
            });
          });
        }
      }]);

      return ListOrderComponent;
    }();

    ListOrderComponent.ctorParameters = function () {
      return [{
        type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }, {
        type: _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    ListOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list-order/list-order.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-order.component.scss */
      "./src/app/orders/list-order/list-order.component.scss"))["default"]]
    })], ListOrderComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-order/list-order.component */
    "./src/app/orders/list-order/list-order.component.ts");
    /* harmony import */


    var _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./info-order/info-order.component */
    "./src/app/orders/info-order/info-order.component.ts");

    var routes = [{
      path: '',
      component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__["ListOrderComponent"]
    }, {
      path: 'info/:id',
      component: _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_4__["InfoOrderComponent"]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersRoutingModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-order/list-order.component */
    "./src/app/orders/list-order/list-order.component.ts");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _info_order_info_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-order/info-order.component */
    "./src/app/orders/info-order/info-order.component.ts");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_info_order_info_order_component__WEBPACK_IMPORTED_MODULE_5__["InfoOrderComponent"], _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__["ListOrderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"]]
    })], OrdersModule);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map