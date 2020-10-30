function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/helper/auth-guard.ts":
  /*!**************************************!*\
    !*** ./src/app/helper/auth-guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppHelperAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        var _this = this;

        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (user) {
          _this.currentUser = user;
        });
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.currentUser) {
            return true;
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          if (this.currentUser) {
            return true;
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'coach', 'login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/service/warehouse/warehouse.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/service/warehouse/warehouse.service.ts ***!
    \********************************************************/

  /*! exports provided: WarehouseService */

  /***/
  function srcAppServiceWarehouseWarehouseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehouseService", function () {
      return WarehouseService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);

    var WarehouseService = /*#__PURE__*/function () {
      function WarehouseService(http) {
        _classCallCheck(this, WarehouseService);

        this.http = http;
      }

      _createClass(WarehouseService, [{
        key: "getAllWarehouse",
        value: function getAllWarehouse() {
          return this.http.get(API_URL + '/warehouses');
        }
      }, {
        key: "createWarehouse",
        value: function createWarehouse(warehouse) {
          return this.http.post(API_URL + '/warehouses', warehouse);
        }
      }, {
        key: "getWarehouse",
        value: function getWarehouse(id) {
          return this.http.get(API_URL + "/warehouses/".concat(id));
        }
      }, {
        key: "updateWarehouse",
        value: function updateWarehouse(id, warehouse) {
          return this.http.put(API_URL + "/warehouses/".concat(id), warehouse);
        }
      }, {
        key: "deleteWarehouse",
        value: function deleteWarehouse(id) {
          return this.http["delete"](API_URL + "/warehouses/".concat(id));
        }
      }]);

      return WarehouseService;
    }();

    WarehouseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    WarehouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WarehouseService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map