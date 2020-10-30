(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/helper/auth-guard.ts":
/*!**************************************!*\
  !*** ./src/app/helper/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    canActivate(next, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canActivateChild(next, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'coach', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/service/warehouse/warehouse.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/warehouse/warehouse.service.ts ***!
  \********************************************************/
/*! exports provided: WarehouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return WarehouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let WarehouseService = class WarehouseService {
    constructor(http) {
        this.http = http;
    }
    getAllWarehouse() {
        return this.http.get(API_URL + '/warehouses');
    }
    createWarehouse(warehouse) {
        return this.http.post(API_URL + '/warehouses', warehouse);
    }
    getWarehouse(id) {
        return this.http.get(API_URL + `/warehouses/${id}`);
    }
    updateWarehouse(id, warehouse) {
        return this.http.put(API_URL + `/warehouses/${id}`, warehouse);
    }
    deleteWarehouse(id) {
        return this.http.delete(API_URL + `/warehouses/${id}`);
    }
};
WarehouseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WarehouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WarehouseService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map