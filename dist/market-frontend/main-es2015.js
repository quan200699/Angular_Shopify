(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Biểu đồ thu chi</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Biểu đồ thu chi</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Biểu đồ thu chi năm {{currentYear}}</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"chart\">\n        <canvas id=\"stackedBarChart\"\n                style=\"min-height: 700px; height: 700px; max-height: 700px; max-width: 100%;\"></canvas>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hold-transition login-page\">\n  <div class=\"login-box\">\n    <div class=\"login-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body login-card-body\">\n        <p class=\"login-box-msg\">Đăng nhập</p>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"icheck-primary\">\n                <input type=\"checkbox\" id=\"remember\">\n                <label for=\"remember\">\n                  Remember Me\n                </label>\n              </div>\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center mb-3\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i> Sign in using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i> Sign in using Google+\n          </a>\n        </div>\n        <!-- /.social-auth-links -->\n\n        <p class=\"mb-1\">\n          <a href=\"#\">Quên mật khẩu</a>\n        </p>\n        <p class=\"mb-0\">\n          <a [routerLink]=\"['/register']\" class=\"text-center\">Đăng ký tài khoản mới</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hold-transition register-page\">\n  <div class=\"register-box\">\n    <div class=\"register-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body register-card-body\">\n        <p class=\"login-box-msg\">Đăng ký tài khoản</p>\n        <form role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" id=\"register\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" name=\"fullName\" placeholder=\"Họ và tên\" formControlName=\"fullName\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-user\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Đăng ký</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i>\n            Sign up using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i>\n            Sign up using Google+\n          </a>\n        </div>\n\n        <a [routerLink]=\"['/login']\" class=\"text-center\">Tôi đã có tài khoản</a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hold-transition sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-navbar></app-navbar>\n    <app-sidebar></app-sidebar>\n    <div class=\"content-wrapper\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"footer__about\">\r\n          <div class=\"footer__about__logo\">\r\n            <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n          </div>\r\n          <ul>\r\n            <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\r\n            <li>Điện thoại: 84382546945</li>\r\n            <li>Email: help@gmail.com</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-6 offset-lg-1\">\r\n        <div class=\"footer__widget\">\r\n          <h6>Useful Links</h6>\r\n          <ul>\r\n            <li><a href=\"#\">About Us</a></li>\r\n            <li><a href=\"#\">About Our Shop</a></li>\r\n            <li><a href=\"#\">Secure Shopping</a></li>\r\n            <li><a href=\"#\">Delivery infomation</a></li>\r\n            <li><a href=\"#\">Privacy Policy</a></li>\r\n            <li><a href=\"#\">Our Sitemap</a></li>\r\n          </ul>\r\n          <ul>\r\n            <li><a href=\"#\">Who We Are</a></li>\r\n            <li><a href=\"#\">Our Services</a></li>\r\n            <li><a href=\"#\">Projects</a></li>\r\n            <li><a href=\"#\">Contact</a></li>\r\n            <li><a href=\"#\">Innovation</a></li>\r\n            <li><a href=\"#\">Testimonials</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"footer__widget\">\r\n          <h6>Join Our Newsletter Now</h6>\r\n          <p>Get E-mail updates about our latest shop and special offers.</p>\r\n          <div class=\"footer__widget__social\">\r\n            <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-pinterest\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"footer__copyright\">\r\n          <div class=\"footer__copyright__payment\"><img src=\"../../../assets/static/img/payment-item.png\" alt=\"\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"humberger__menu__overlay\"></div>\r\n<div class=\"humberger__menu__wrapper\">\r\n  <div class=\"humberger__menu__logo\">\r\n    <a href=\"#\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n  </div>\r\n  <div class=\"humberger__menu__cart\">\r\n    <ul>\r\n      <li><a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span>3</span></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"humberger__menu__widget\">\r\n    <div class=\"header__top__right__language\">\r\n      <img src=\"../../../assets/static/img/language.png\" alt=\"\">\r\n      <div>English</div>\r\n      <ul>\r\n        <li><a href=\"#\">Vietnamese</a></li>\r\n        <li><a href=\"#\">English</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"header__top__right__auth\">\r\n      <a href=\"#\"><i class=\"fa fa-user\"></i> Login</a>\r\n    </div>\r\n  </div>\r\n  <nav class=\"humberger__menu__nav mobile-menu\">\r\n    <ul>\r\n      <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\r\n      <li><a routerLink=\"/shop\">Cừa hàng</a></li>\r\n      <li><a routerLink=\"/contact\">Liên hệ</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div id=\"mobile-menu-wrap\"></div>\r\n  <div class=\"header__top__right__social\">\r\n    <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\r\n  </div>\r\n  <div class=\"humberger__menu__contact\">\r\n    <ul>\r\n      <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\r\n      <li>Miễn phí vận chuyển trong vòng 5km</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<header class=\"header\">\r\n  <div class=\"header__top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"header__top__left\">\r\n            <ul>\r\n              <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\r\n              <li>Miễn phí vận chuyển trong vòng 5km</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"header__top__right\">\r\n            <div class=\"header__top__right__social\">\r\n              <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\r\n            </div>\r\n            <div class=\"header__top__right__language\">\r\n              <div>Theo dõi đơn hàng</div>\r\n              <ul>\r\n                <li><a [routerLink]=\"['/order', { status:true }]\" style=\"font-size: 12px\">Đã mua</a></li>\r\n                <li><a [routerLink]=\"['/order', { status:false }]\" style=\"font-size: 12px\">Chờ xác nhận</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"dropdown header__top__right__auth\">\r\n              <a class=\"btn dropdown-toggle\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"\r\n                 aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                <i class=\"fa fa-bell\"></i><span\r\n                *ngIf=\"listNotificationUnRead.length==0\">{{this.listNotificationUnRead.length}}</span>\r\n                <span *ngIf=\"listNotificationUnRead.length>0\"\r\n                      style=\"color: red\">{{this.listNotificationUnRead.length}}</span>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser==null\">\r\n                <div class=\"dropdown-item disabled\">\r\n                  <h5>Thông báo</h5>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item disabled\">\r\n                  <p>Bạn chưa đăng nhập</p>\r\n                  <p></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser!=null\">\r\n                <div class=\"dropdown-item disabled\">\r\n                  <h5>Thông báo</h5>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item disabled\" *ngIf=\"listNotification.length==0\">\r\n                  <p>Chưa có thông báo</p>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item\"\r\n                     *ngFor=\"let notification of listNotification\">\r\n                  <div *ngIf=\"notification.status == true\" (click)=\"updateStatus(notification.id, currentUser.id)\">\r\n                    {{notification.message}}\r\n                    <p style=\"font-size: 12px\">\r\n                      {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\r\n                      {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\r\n                    </p>\r\n                  </div>\r\n                  <div *ngIf=\"notification.status == false\"\r\n                       (click)=\"updateStatus(notification.id, currentUser.id)\">\r\n                    {{notification.message}}\r\n                    <p style=\"font-size: 12px; color: #4b93f7\">\r\n                      {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\r\n                      {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\r\n                      <span class=\"fas fa-circle float-right\" style=\"color: #4b93f7\"></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"header__top__right__auth\" *ngIf=\"!currentUser\">\r\n              <a routerLink=\"../login\"><i class=\"fa fa-user\"></i> Đăng nhập</a>\r\n            </div>\r\n            <div class=\"header__top__right__auth\" *ngIf=\"currentUser\">\r\n              <a routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"header__logo\">\r\n          <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <nav class=\"header__menu\">\r\n          <ul>\r\n            <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\r\n            <li><a routerLink=\"/shop\">Cửa hàng</a></li>\r\n            <li><a routerLink=\"/contact\">Liên hệ</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"header__cart\">\r\n          <ul>\r\n            <li><a routerLink=\"/favorite\"><i class=\"fa fa-heart\"></i> <span>{{this.favoriteProduct.length}}</span></a>\r\n            </li>\r\n            <li><a routerLink=\"/cart\"><i class=\"fa fa-shopping-bag\"></i> <span>{{this.amount}}</span></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"humberger__open\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </div>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n      </li>\n      <li class=\"nav-item active mr-sm-3\">\n        <a class=\"nav-link\" routerLink=\"/admin\">\n          <i class=\"fa fa-home fa-lg\"></i>\n          Trang chủ<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <div class=\"my-2 my-lg-0\">\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"!currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"login\"><i class=\"fas fa-sign-in-alt fa-lg\"></i> Đăng nhập</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"register\"><i class=\"fas fa-user-plus fa-lg\"></i> Đăng ký</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <!-- Brand Logo -->\r\n  <a routerLink=\"\" class=\"brand-link\">\r\n    <span class=\"brand-text font-weight-light\">Shop</span>\r\n  </a>\r\n\r\n<!--   Sidebar-->\r\n  <div class=\"sidebar\">\r\n    <!-- Sidebar user (optional) -->\r\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\r\n      <div class=\"image\">\r\n        <i class=\"fa fa-user fa-2x\" style=\"color: white\"></i>\r\n      </div>\r\n      <div class=\"info\">\r\n        <a [routerLink]=\"'/admin'\" class=\"d-block\">{{currentUser.email}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Sidebar Menu -->\r\n    <nav class=\"mt-2\">\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Biểu đồ\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/product\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Sản phẩm\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/category\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Danh mục\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/warehouse\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Nhà kho\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/warehouse-bill\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Phiếu nhập kho\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/orders\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Đơn hàng\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- /.sidebar-menu -->\r\n  </div>\r\n<!--   /.sidebar-->\r\n</aside>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\" *ngIf=\"currentCategory != null\">\n          <h2>{{currentCategory.name}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{currentCategory.name}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"product spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-5\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar__item\">\n            <h4>Danh mục sản phẩm</h4>\n            <ul *ngFor=\"let category of listCategory\">\n              <li><a [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n            </ul>\n          </div>\n          <div class=\"sidebar__item\">\n            <h4>Price</h4>\n            <div class=\"price-range-wrap\">\n              <div class=\"price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content\"\n                   data-min=\"10\" data-max=\"540\">\n                <div class=\"ui-slider-range ui-corner-all ui-widget-header\"></div>\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\n              </div>\n              <div class=\"range-slider\">\n                <div class=\"price-input\">\n                  <input type=\"text\" id=\"minamount\">\n                  <input type=\"text\" id=\"maxamount\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"sidebar__item\">\n            <div class=\"latest-product__text\">\n              <h4>Sản phẩm mới</h4>\n              <div class=\"latest-product__slider owl-carousel\">\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-7\">\n        <div class=\"product__discount\">\n          <div class=\"section-title product__discount__title\">\n            <h2>Giảm giá</h2>\n          </div>\n          <div class=\"row\">\n            <div class=\"product__discount__slider owl-carousel\">\n              <div class=\"col-lg-4\" *ngFor=\"let product of listProductSaleOff\">\n                <div class=\"product__discount__item\">\n                  <div class=\"product__discount__item__pic set-bg\" *ngIf=\"product.image != null\"\n                       [style.background]=\"'url('+product.image[0].url+')'\">\n                    <div class=\"product__discount__percent\">-{{product.saleOff}}%</div>\n                    <ul class=\"product__item__pic__hover\">\n                      <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                      <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                      <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                        class=\"fa fa-shopping-cart\"></i></a></li>\n                      <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id,shoppingCart.id)\"><i\n                        class=\"fa fa-shopping-cart\"></i></a></li>\n                    </ul>\n                  </div>\n                  <div class=\"product__discount__item__text\">\n                    <span>{{product.category.name}}</span>\n                    <h5><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h5>\n                    <div class=\"product__item__price\">{{product.price * (1 - product.saleOff / 100)}}đ\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"filter__item\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-5\">\n              <div class=\"filter__sort\">\n                <span>Sắp xếp</span>\n                <select>\n                  <option value=\"0\">Default</option>\n                  <option value=\"0\">Default</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <div class=\"filter__found\">\n                <h6><span>{{listProduct.length}}</span> sản phẩm</h6>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-3\">\n              <div class=\"filter__option\">\n                <span class=\"icon_grid-2x2\"></span>\n                <span class=\"icon_ul\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\n            <div class=\"product__item\">\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\n                   [style.background]=\"'url('+ product.image[0].url+')'\">\n                <ul class=\"product__item__pic__hover\">\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                </ul>\n              </div>\n              <div class=\"product__item__text\">\n                <h6><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h6>\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product__pagination\">\n          <a href=\"#\">1</a>\n          <a href=\"#\">2</a>\n          <a href=\"#\">3</a>\n          <a href=\"#\"><i class=\"fas fa-long-arrow-alt-right\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Thanh toán</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Thanh toán</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"checkout spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <h6><span class=\"icon_tag_alt\"></span>Bạn có mã giảm giá? <a routerLink=\"/cart\">Ấn vào đây</a> và nhập mã của\r\n          bạn\r\n        </h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"checkout__form\">\r\n      <h4>Chi tiết hóa đơn</h4>\r\n      <form [formGroup]=\"customerInfoForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 col-md-6\">\r\n            <div class=\"checkout__input\">\r\n              <p>Họ và tên:<span>*</span></p>\r\n              <input type=\"text\" formControlName=\"name\"\r\n                     placeholder=\"Họ tên người nhận\">\r\n            </div>\r\n            <div class=\"checkout__input\">\r\n              <p>Địa chỉ<span>*</span></p>\r\n              <input type=\"text\" placeholder=\"Địa chỉ nhận hàng\" formControlName=\"address\"\r\n                     class=\"checkout__input__add\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"checkout__input\">\r\n                  <p>Số điện thoại<span>*</span></p>\r\n                  <input type=\"text\" placeholder=\"Số điện thoại người nhận\"\r\n                         formControlName=\"phoneNumber\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"checkout__input\">\r\n                  <p>Email<span>*</span></p>\r\n                  <input type=\"text\" placeholder=\"Địa chỉ email\" formControlName=\"email\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-6\">\r\n            <div class=\"checkout__order\">\r\n              <h4>Đơn hàng của bạn</h4>\r\n              <div class=\"checkout__order__products\">Sản phẩm <span>Giá</span></div>\r\n              <ul *ngFor=\"let item of items\">\r\n                <li>{{item.product.name}} x {{item.quantity}}\r\n                  <span>{{item.quantity * (item.product.price * (1 - item.product.saleOff / 100))}}đ</span></li>\r\n              </ul>\r\n              <div class=\"checkout__order__subtotal\">Tổng phụ thu <span>{{total}}đ</span></div>\r\n              <div class=\"checkout__order__total\">Tổng tiền <span>{{total}}đ</span></div>\r\n              <div class=\"checkout__input__checkbox\">\r\n                <label for=\"paypal\">\r\n                  Thanh toán khi nhận hàng\r\n                  <input type=\"checkbox\" id=\"paypal\" checked disabled>\r\n                  <span class=\"checkmark\"></span>\r\n                </label>\r\n              </div>\r\n              <button type=\"submit\" class=\"site-btn\" (click)=\"submitCheckoutForm(items,shoppingCart.id)\">Đặt hàng\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Liên hệ</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Liên hệ</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"contact spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_phone\"></span>\r\n          <h4>Điện thoại</h4>\r\n          <p>0382546945</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_pin_alt\"></span>\r\n          <h4>Địa chỉ</h4>\r\n          <p>10 Xã Đàn, Đống Đa, Hà Nội</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_clock_alt\"></span>\r\n          <h4>Thời gian mở cửa</h4>\r\n          <p>8 giờ tới 22 giờ</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_mail_alt\"></span>\r\n          <h4>Email</h4>\r\n          <p>help@gmail.com</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"map\">\r\n  <iframe\r\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd\"\r\n    height=\"500\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n  <div class=\"map-inside\">\r\n    <i class=\"icon_pin\"></i>\r\n    <div class=\"inside-widget\">\r\n      <h4>Hà Nội</h4>\r\n      <ul>\r\n        <li>Điện thoại: 0382546945</li>\r\n        <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"contact-form spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"contact__form__title\">\r\n          <h2>Để lại lời nhắn</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"messageForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <input type=\"text\" placeholder=\"Tện bạn\">\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <input type=\"text\" placeholder=\"Địa chỉ email\">\r\n        </div>\r\n        <div class=\"col-lg-12 text-center\">\r\n          <textarea placeholder=\"Tin nhắn\"></textarea>\r\n          <button type=\"submit\" class=\"site-btn\">Gửi tin nhắn</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Sản phẩm yêu thích</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Sản phẩm yêu thích</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of items; index as i\">\n              <td class=\"shoping__cart__item\">\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\">\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\n              </td>\n              <td class=\"shoping__cart__item__close\">\n                <span class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__btns\">\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\n          <a routerLink=\"/favorite\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\n            Cập nhật</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul *ngFor=\"let category of listCategory\">\r\n            <li><a [routerLink]=\"['category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"hero__item set-bg\" [style.background]=\"'url(../../../assets/static/img/hero/banner.jpg)'\">\r\n          <div class=\"hero__text\">\r\n            <span>THỰC PHẨM SẠCH</span>\r\n            <h2>Rau củ <br/>100% tự nhiên</h2>\r\n            <p>Miễn phí vẫn chuyển trong 5km</p>\r\n            <a routerLink=\"/shop\" class=\"primary-btn\">MUA NGAY</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"categories\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"categories__slider owl-carousel\">\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-1.jpg)'\">\r\n            <h5><a href=\"#\">Hoa quả sạch</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-2.jpg)'\">\r\n            <h5><a href=\"#\">Thực phẩm dinh dưỡng</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-3.jpg)'\">\r\n            <h5><a href=\"#\">Rau củ</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-4.jpg)'\">\r\n            <h5><a href=\"#\">Nước hoa quả</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-5.jpg)'\">\r\n            <h5><a href=\"#\">Thịt</a></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"featured spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"section-title\">\r\n          <h2>Sản phẩm nổi bật</h2>\r\n        </div>\r\n        <div class=\"featured__controls\">\r\n          <ul>\r\n            <li class=\"active\" data-filter=\"*\">Tất cả</li>\r\n            <li data-filter=\".fresh-meat\">Thịt</li>\r\n            <li data-filter=\".fresh-meat\">Đồ uống</li>\r\n            <li data-filter=\".vegetables\">Rau củ</li>\r\n            <li data-filter=\".fastfood\">Sản phẩm khác</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row featured__filter\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat\" *ngFor=\"let product of listProduct\">\r\n        <div class=\"featured__item\">\r\n          <div class=\"featured__item__pic set-bg\" *ngIf=\"product.image!=null\"\r\n               [ngStyle]=\"{'background-image':'url('+product.image[0].url+')'}\">\r\n            <ul class=\"featured__item__pic__hover\">\r\n              <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n              <li *ngIf=\"currentUser==null\">\r\n                <a [routerLink]=\"['/cart', { id:product.id }]\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n              </li>\r\n              <li *ngIf=\"currentUser!=null\">\r\n                <a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"featured__item__text\">\r\n            <h6><a [routerLink]=\"['product',product.id]\">{{product.name}}</a></h6>\r\n            <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"latest-product spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Sản phẩm mới nhất</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Sản phẩm mua nhiều</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Đánh giá sản phẩm</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\" *ngIf=\"currentProduct != null\">\r\n          <h2>{{currentProduct.name}}</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <a routerLink=\"/\">{{currentProduct.category.name}}</a>\r\n            <span>{{currentProduct.name}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"product-details spad\" *ngIf=\"currentProduct != null\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6\">\r\n        <div class=\"product__details__pic\">\r\n          <div class=\"product__details__pic__item\">\r\n            <img class=\"product__details__pic__item--large\" *ngIf=\"currentProduct.image!=null\"\r\n                 [src]=\"currentProduct.image[0].url\" alt=\"\">\r\n          </div>\r\n          <div class=\"product__details__pic__slider owl-carousel\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-2.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-1.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-3.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-2.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-5.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-3.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-4.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-4.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6\">\r\n        <div class=\"product__details__text\">\r\n          <h3>{{currentProduct.name}}</h3>\r\n          <div class=\"rating\">\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=1?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=2?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=3?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=4?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage==5?'rated':'unrated'}}\"></i></span>\r\n            <span>({{listReview.length}} reviews)</span>\r\n          </div>\r\n          <div class=\"product__details__price\">{{currentProduct.price * (1 - currentProduct.saleOff / 100)}} đồng</div>\r\n          <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\r\n          <div class=\"product__details__quantity\">\r\n            <div class=\"quantity\">\r\n              <div class=\"pro-qty\">\r\n                <input type=\"text\" value=\"1\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a *ngIf=\"currentUser==null\" [routerLink]=\"['/cart', { id:currentProduct.id }]\" class=\"primary-btn\">Thêm vào\r\n            giỏ hàng</a>\r\n          <a *ngIf=\"currentUser!=null\" (click)=\"addItemToShoppingCart(currentProduct.id, shoppingCart.id)\"\r\n             class=\"primary-btn\">Thêm vào giỏ hàng</a>\r\n          <a [routerLink]=\"['/favorite', { id:currentProduct.id }]\" class=\"heart-icon\"><span\r\n            class=\"icon_heart_alt\"></span></a>\r\n          <ul>\r\n            <li><b>Trạng thái</b> <span>{{currentProduct.status == true ? \"Còn hàng\" : \"Hết hàng\"}}</span></li>\r\n            <li><b>Vận chuyển</b><span>Giao hàng nhanh 2h trong nội thành (đặt trước 17:00)</span></li>\r\n            <li><b>Khối lượng</b> <span>{{currentProduct.mass}}g</span></li>\r\n            <li><b>Thành phần chính</b> <span>{{currentProduct.ingredient}}</span></li>\r\n            <li><b>Bảo quản</b> <span>{{currentProduct.preservation}}</span></li>\r\n            <li><b>Share on</b>\r\n              <div class=\"share\">\r\n                <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-pinterest\"></i></a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"product__details__tab\">\r\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tabs-1\" role=\"tab\"\r\n                 aria-selected=\"true\">Mô tả</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-2\" role=\"tab\"\r\n                 aria-selected=\"false\">Thông tin</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-3\" role=\"tab\"\r\n                 aria-selected=\"false\">Đánh giá <span>({{listReview.length}})</span></a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane active\" id=\"tabs-1\" role=\"tabpanel\">\r\n              <div class=\"product__details__tab__desc\">\r\n                <h6><b>Giới thiệu {{currentProduct.name}} ({{currentProduct.mass}}g)</b></h6>\r\n                <p [innerHTML]=\"currentProduct.description\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tabs-2\" role=\"tabpanel\">\r\n              <div class=\"product__details__tab__desc\">\r\n                <h6>Thông tin sản phẩm</h6>\r\n                <p><b>Khối lượng:</b> {{currentProduct.mass}}g</p>\r\n                <p><b>Thành phần:</b> {{currentProduct.ingredient}}</p>\r\n                <p><b>Bảo quản:</b> {{currentProduct.preservation}}</p>\r\n                <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tabs-3\" role=\"tabpanel\">\r\n              <h5>Đánh giá sản phẩm</h5>\r\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length!=0\">\r\n                <div class=\"post\" *ngFor=\"let review of listReview\">\r\n                  <div class=\"user-block\">\r\n                    <img class=\"img-circle img-bordered-sm\" src=\"assets/static/img/user.png\" alt=\"user\">\r\n                    <span class=\"username\" *ngIf=\"review.user != null\">\r\n                          {{review.user.email}}\r\n                        </span>\r\n                    <span class=\"description\">{{review.createDate.getDay()}}/ {{review.createDate.getMonth()}}\r\n                      / {{review.createDate.getFullYear()}}</span>\r\n                  </div>\r\n                  <div class=\"rating\">\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=1?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=2?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=3?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=4?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate==5?'rated':'unrated'}}\"></i></span>\r\n                  </div>\r\n                  <br>\r\n                  <!-- /.user-block -->\r\n                  <p [innerHTML]=\"review.comment\"></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length==0\">\r\n                <p>Chưa có đánh giá nào</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"related-product\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"section-title related__product__title\">\r\n          <h2>SẢN PHẨM LIÊN QUAN</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let product of relatedProducts\">\r\n        <div class=\"product__item\">\r\n          <div class=\"product__item__pic set-bg\" *ngIf=\"product.image != null\"\r\n               [style.background]=\"'url('+product.image[0].url+')'\">\r\n            <ul class=\"product__item__pic__hover\">\r\n              <li><a [routerLink]=\"['/favorite', { id:currentProduct.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n              <li><a [routerLink]=\"['/cart', { id:currentProduct.id }]\"><i class=\"fa fa-shopping-cart\"></i></a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"product__item__text\">\r\n            <h6><a [routerLink]=\"['../../product',product.id]\">{{product.name}}</a></h6>\r\n            <h5>{{product.price * (1 - product.saleOff / 100)}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\" [value]=\"query==null?'':query\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Cửa hàng</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Cửa hàng</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"product spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-5\">\r\n        <div class=\"sidebar\">\r\n          <div class=\"sidebar__item\">\r\n            <h4>Danh mục sản phẩm</h4>\r\n            <ul *ngFor=\"let category of listCategory\">\r\n              <li><a [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"sidebar__item\">\r\n            <h4>Price</h4>\r\n            <div class=\"price-range-wrap\">\r\n              <div class=\"price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content\"\r\n                   data-min=\"10\" data-max=\"540\">\r\n                <div class=\"ui-slider-range ui-corner-all ui-widget-header\"></div>\r\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\r\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\r\n              </div>\r\n              <div class=\"range-slider\">\r\n                <div class=\"price-input\">\r\n                  <input type=\"text\" id=\"minamount\">\r\n                  <input type=\"text\" id=\"maxamount\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"sidebar__item\">\r\n            <div class=\"latest-product__text\">\r\n              <h4>Sản phẩm mới</h4>\r\n              <div class=\"latest-product__slider owl-carousel\">\r\n                <div class=\"latest-prdouct__slider__item\">\r\n                  <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                     *ngFor=\"let product of listProductLatest\">\r\n                    <div class=\"latest-product__item__pic\">\r\n                      <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                           style=\"width: 110px; height: 110px\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"latest-product__item__text\">\r\n                      <h6>{{product.name}}</h6>\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n                <div class=\"latest-prdouct__slider__item\">\r\n                  <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                    <div class=\"latest-product__item__pic\">\r\n                      <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                           style=\"width: 110px; height: 110px\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"latest-product__item__text\">\r\n                      <h6>{{product.name}}</h6>\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9 col-md-7\">\r\n        <div class=\"product__discount\">\r\n          <div class=\"section-title product__discount__title\">\r\n            <h2>Giảm giá</h2>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"product__discount__slider owl-carousel\">\r\n              <div class=\"col-lg-4\" *ngFor=\"let product of listProductSaleOff\">\r\n                <div class=\"product__discount__item\">\r\n                  <div class=\"product__discount__item__pic set-bg\" *ngIf=\"product.image != null\"\r\n                       [style.background]=\"'url('+product.image[0].url+')'\" style=\"background-size: 270px 270px\">\r\n                    <div class=\"product__discount__percent\">-{{product.saleOff}}%</div>\r\n                    <ul class=\"product__item__pic__hover\">\r\n                      <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n                      <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n                      <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\r\n                        class=\"fa fa-shopping-cart\"></i></a></li>\r\n                      <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i\r\n                        class=\"fa fa-shopping-cart\"></i></a></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"product__discount__item__text\">\r\n                    <span>{{product.category.name}}</span>\r\n                    <h5><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h5>\r\n                    <div class=\"product__item__price\">{{product.price * (1 - product.saleOff / 100)}}đ\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"filter__item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-5\">\r\n              <div class=\"filter__sort\">\r\n                <span>Sắp xếp</span>\r\n                <select>\r\n                  <option value=\"0\">Default</option>\r\n                  <option value=\"0\">Default</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4\">\r\n              <div class=\"filter__found\">\r\n                <h6><span>{{listProduct.length}}</span> sản phẩm</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-3\">\r\n              <div class=\"filter__option\">\r\n                <span class=\"icon_grid-2x2\"></span>\r\n                <span class=\"icon_ul\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\r\n            <div class=\"product__item\">\r\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\r\n                   [style.background]=\"'url('+ product.image[0].url+')'\">\r\n                <ul class=\"product__item__pic__hover\">\r\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\r\n                    class=\"fa fa-shopping-cart\"></i></a></li>\r\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id,shoppingCart.id)\"><i\r\n                    class=\"fa fa-shopping-cart\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"product__item__text\">\r\n                <h6><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h6>\r\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product__pagination\">\r\n          <a href=\"#\">1</a>\r\n          <a href=\"#\">2</a>\r\n          <a href=\"#\">3</a>\r\n          <a href=\"#\"><i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Giỏ hàng</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Giỏ hàng</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"shoping-cart spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"shoping__cart__table\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th class=\"shoping__product\">Sản phẩm</th>\r\n              <th>Giá</th>\r\n              <th>Số lượng</th>\r\n              <th>Tổng tiền</th>\r\n              <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of items; index as i\">\r\n              <td class=\"shoping__cart__item\">\r\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\">\r\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\r\n              </td>\r\n              <td class=\"shoping__cart__price\">\r\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\r\n              </td>\r\n              <td class=\"shoping__cart__quantity\">\r\n                <div class=\"quantity\">\r\n                  <div class=\"pro-qty\">\r\n                    <span *ngIf=\"currentUser==null\" class=\"dec qtybtn\"\r\n                          (click)=\"decreaseProduct(item.product.id, i)\">-</span>\r\n                    <span *ngIf=\"currentUser!=null\" class=\"dec qtybtn\"\r\n                          (click)=\"decreaseItemToShoppingCart(item.product.id, shoppingCart.id)\">-</span>\r\n                    <input type=\"text\" value=\"{{item.quantity}}\">\r\n                    <span *ngIf=\"currentUser==null\" class=\"inc qtybtn\"\r\n                          (click)=\"addProductToCart(item.product.id, item)\">+</span>\r\n                    <span *ngIf=\"currentUser!=null\" class=\"inc qtybtn\"\r\n                          (click)=\"addItemToShoppingCart(item.product.id, shoppingCart.id)\">+</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td class=\"shoping__cart__total\">\r\n                {{item.quantity * item.product.price * (1 - item.product.saleOff / 100)}}đ\r\n              </td>\r\n              <td class=\"shoping__cart__item__close\">\r\n                <span *ngIf=\"currentUser==null\" class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\r\n                <span *ngIf=\"currentUser!=null\" class=\"icon_close\" (click)=\"removeItemFromCart(item.id)\"></span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"shoping__cart__btns\">\r\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\r\n          <a href=\"/cart\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\r\n            Cập nhật giở hàng</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"shoping__continue\">\r\n          <div class=\"shoping__discount\">\r\n            <h5>Mã giảm giá</h5>\r\n            <form [formGroup]=\"discountForm\">\r\n              <input type=\"text\" placeholder=\"Nhập mã giảm gái\">\r\n              <button type=\"submit\" class=\"site-btn\">Xác nhận</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"shoping__checkout\">\r\n          <h5>Tổng tiền</h5>\r\n          <ul>\r\n            <li>Phụ thu <span>{{total}} đồng</span></li>\r\n            <li>Tổng tiền <span>{{total}} đồng</span></li>\r\n          </ul>\r\n          <a routerLink=\"/checkout\" class=\"primary-btn\">Thanh toán</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>{{status ? \"Sản phẩm đã mua\" : \"Đơn hàng chờ xác nhận\"}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{status ? \"Đã mua\" : \"Chờ xác nhận\"}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th></th>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let product of listProduct; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                <img *ngIf=\"product.image != null\" [src]=\"product.image[0].url\" alt=\"\">\n              </td>\n              <td class=\"shoping__cart__item\">\n                <a [routerLink]=\"['../product',product.id]\" style=\"font-size: 16px\"><h5>{{product.name}}  </h5></a>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{product.price * (1 - product.saleOff / 100)}}đ\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-primary\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-review\" (click)=\"getProductId(currentUser.id,product.id)\">\n                      <i class=\"fas fa-edit\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"!status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Mã đơn hàng</th>\n              <th>Ngày đặt</th>\n              <th>Trạng thái</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let orders of listOrders; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                {{orders.id}}\n              </td>\n              <td>\n                {{orders.createDate}}\n              </td>\n              <td>\n                {{orders.status ? \"Đã xác nhận\" : \"Chưa xác nhận\"}}\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-delete\" (click)=\"getOrderId(orders.id)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"modal fade\" id=\"modal-review\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Đánh giá sản phẩm {{currentReview == null ? \"\" : \" (Đã đánh giá)\"}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"rating text-center\" *ngIf=\"currentReview== null\">\n          <span><i class=\"fas fa-star mr-2 {{star>=1?'rated':'unrated'}}\" id=\"one\" (click)=\"rate(1)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=2?'rated':'unrated'}}\" id=\"tưo\" (click)=\"rate(2)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=3?'rated':'unrated'}}\" id=\"three\" (click)=\"rate(3)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=4?'rated':'unrated'}}\" id=\"four\" (click)=\"rate(4)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star==5?'rated':'unrated'}}\" id=\"five\" (click)=\"rate(5)\"></i></span>\n          <span>({{star}} sao)</span>\n        </div>\n        <div class=\"rating text-center\" *ngIf=\"currentReview!= null\">\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=1?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=2?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=3?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=4?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate==5?'rated':'unrated'}}\"></i></span>\n          <span>({{currentReview.evaluate}} sao)</span>\n        </div>\n        <br>\n        <div class=\"form-group\">\n          <label for=\"comment\">Bình luận</label>\n          <textarea class=\"textarea\" name=\"comment\" id=\"comment\"\n                    style=\"width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createReview(star, productId)\">Xác nhận</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div class=\"modal fade\" id=\"modal-delete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Hủy đơn hàng</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Bạn có muốn hủy đơn hàng này không ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder(id)\">Xóa</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/warehouse-bill/warehouse-bill.service */ "./src/app/service/warehouse-bill/warehouse-bill.service.ts");




let AdminComponent = class AdminComponent {
    constructor(ordersService, warehouseBillService) {
        this.ordersService = ordersService;
        this.warehouseBillService = warehouseBillService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentYear = new Date().getFullYear();
            let monthTotalBought = [];
            let monthTotalGet = [];
            for (let i = 0; i < 12; i++) {
                let totalSpendByBought = yield this.sumTotalPriceHaveBought(i + 1, this.currentYear);
                let totalGetByMonth = yield this.sumTotalPriceHaveGot(i + 1, this.currentYear);
                if (totalSpendByBought == null) {
                    totalSpendByBought = 0;
                }
                if (totalGetByMonth == null) {
                    totalGetByMonth = 0;
                }
                monthTotalBought.push(totalSpendByBought);
                monthTotalGet.push(totalGetByMonth);
            }
            let areaChartData = {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
                    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
                datasets: [
                    {
                        label: 'Chi',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: monthTotalBought
                    },
                    {
                        label: 'Thu',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: monthTotalGet
                    },
                ]
            };
            // @ts-ignore
            let barChartData = jQuery.extend(true, {}, areaChartData);
            let stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d');
            // @ts-ignore
            let stackedBarChartData = jQuery.extend(true, {}, barChartData);
            let stackedBarChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true
                        }]
                }
            };
            let stackedBarChart = new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            });
        });
    }
    sumTotalPriceHaveBought(month, year) {
        return this.warehouseBillService.sumTotalPriceHaveBought(month, year).toPromise();
    }
    sumTotalPriceHaveGot(month, year) {
        return this.ordersService.sumTotalPriceGet(month, year).toPromise();
    }
};
AdminComponent.ctorParameters = () => [
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout-with-shared/layout-with-shared.component */ "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/homepage/homepage.component */ "./src/app/user/homepage/homepage.component.ts");
/* harmony import */ var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/admin-auth-guard */ "./src/app/helper/admin-auth-guard.ts");
/* harmony import */ var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/product-detail/product-detail.component */ "./src/app/user/product-detail/product-detail.component.ts");
/* harmony import */ var _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/shopping-cart/shopping-cart.component */ "./src/app/user/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/checkout/checkout.component */ "./src/app/user/checkout/checkout.component.ts");
/* harmony import */ var _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/category-detail/category-detail.component */ "./src/app/user/category-detail/category-detail.component.ts");
/* harmony import */ var _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/favorite/favorite.component */ "./src/app/user/favorite/favorite.component.ts");
/* harmony import */ var _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-order/user-order.component */ "./src/app/user/user-order/user-order.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");

















const routes = [
    {
        path: 'admin',
        component: _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__["LayoutWithSharedComponent"],
        canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]],
        children: [
            {
                path: '',
                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"]
            },
            {
                path: 'product',
                loadChildren: () => Promise.all(/*! import() | product-product-module */[__webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/product/product.module.ts")).then(module => module.ProductModule)
            },
            {
                path: 'category',
                loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/category/category.module.ts")).then(module => module.CategoryModule)
            },
            {
                path: 'warehouse',
                loadChildren: () => Promise.all(/*! import() | warehouse-warehouse-module */[__webpack_require__.e("common"), __webpack_require__.e("warehouse-warehouse-module")]).then(__webpack_require__.bind(null, /*! ./warehouse/warehouse.module */ "./src/app/warehouse/warehouse.module.ts")).then(module => module.WarehouseModule)
            },
            {
                path: 'warehouse-bill',
                loadChildren: () => Promise.all(/*! import() | warehouse-bill-warehouse-bill-module */[__webpack_require__.e("common"), __webpack_require__.e("warehouse-bill-warehouse-bill-module")]).then(__webpack_require__.bind(null, /*! ./warehouse-bill/warehouse-bill.module */ "./src/app/warehouse-bill/warehouse-bill.module.ts")).then(module => module.WarehouseBillModule)
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/orders/orders.module.ts")).then(module => module.OrdersModule)
            }
        ]
    },
    {
        path: '',
        component: _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
    },
    {
        path: 'shop',
        component: _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"]
    },
    {
        path: 'contact',
        component: _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
    },
    {
        path: 'product/:id',
        component: _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"]
    },
    {
        path: 'cart',
        component: _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"]
    },
    {
        path: 'favorite',
        component: _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteComponent"]
    },
    {
        path: 'checkout',
        component: _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"]
    },
    {
        path: 'category/:id',
        component: _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDetailComponent"]
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'order',
        component: _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_15__["UserOrderComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'market-frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout-with-shared/layout-with-shared.component */ "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper/jwt-interceptor */ "./src/app/helper/jwt-interceptor.ts");
/* harmony import */ var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/error-interceptor */ "./src/app/helper/error-interceptor.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
/* harmony import */ var _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/homepage/homepage.component */ "./src/app/user/homepage/homepage.component.ts");
/* harmony import */ var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/product-detail/product-detail.component */ "./src/app/user/product-detail/product-detail.component.ts");
/* harmony import */ var _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/shopping-cart/shopping-cart.component */ "./src/app/user/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/checkout/checkout.component */ "./src/app/user/checkout/checkout.component.ts");
/* harmony import */ var _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/category-detail/category-detail.component */ "./src/app/user/category-detail/category-detail.component.ts");
/* harmony import */ var _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/favorite/favorite.component */ "./src/app/user/favorite/favorite.component.ts");
/* harmony import */ var _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/user-order/user-order.component */ "./src/app/user/user-order/user-order.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_6__["LayoutWithSharedComponent"],
            _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_18__["HomepageComponent"],
            _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__["ShopComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
            _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_23__["ProductDetailComponent"],
            _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__["ShoppingCartComponent"],
            _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__["CheckoutComponent"],
            _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_26__["CategoryDetailComponent"],
            _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_27__["FavoriteComponent"],
            _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_28__["UserOrderComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");






let LoginComponent = class LoginComponent {
    constructor(activatedRoute, router, authenticationService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.loading = false;
        this.submitted = false;
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
        if (this.authenticationService.currentUserValue) {
            if (this.hasRoleAdmin) {
                this.router.navigate(['/admin']);
            }
            else {
                this.router.navigate(['/']);
            }
        }
    }
    ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    }
    login() {
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            localStorage.setItem('ACCESS_TOKEN', data.accessToken);
            const roleList = data.roles;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    this.returnUrl = "/admin";
                }
            }
            this.router.navigate([this.returnUrl]).finally(() => {
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
                    title: 'Đăng nhập thành công'
                });
            });
        }, () => {
            this.loading = false;
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Đăng nhập thất bại'
                });
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.isSubmitted = false;
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#register').validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                        minlength: 6
                    },
                    fullName: {
                        required: true
                    },
                    terms: {
                        required: true
                    },
                },
                messages: {
                    email: {
                        required: "Nhập địa chỉ email",
                        email: "Không đúng định dạng"
                    },
                    password: {
                        required: "Nhập mật khẩu",
                        minlength: "Mật khẩu phải có ít nhất 6 ký tự"
                    },
                    fullName: "Nhập họ và tên bạn"
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.input-group').append(error);
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
    register() {
        this.isSubmitted = true;
        const user = {
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            fullName: this.registerForm.value.fullName
        };
        if (user.email !== "" && user.password !== "" && user.fullName !== "") {
            this.userService.register(user).subscribe(() => {
                this.registerForm.reset();
                this.router.navigate(['/login']).finally(() => {
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
                        title: 'Đăng ký thành công'
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
                        title: 'Đăng ký thất bại'
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
                    title: 'Đăng ký thất bại'
                });
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/helper/admin-auth-guard.ts":
/*!********************************************!*\
  !*** ./src/app/helper/admin-auth-guard.ts ***!
  \********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let AdminAuthGuard = class AdminAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(next => {
            this.currentUser = next;
        });
    }
    canActivate(next, state) {
        let hasRoleAdmin = false;
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    hasRoleAdmin = true;
                    break;
                }
            }
            if (hasRoleAdmin) {
                return true;
            }
            else {
                this.authService.logout();
                this.router.navigate(['/', 'admin', 'dashboard'], { queryParams: { login: true }, queryParamsHandling: 'merge' });
                return false;
            }
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canActivateChild(next, state) {
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            let hasRoleAdmin = false;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    hasRoleAdmin = true;
                    break;
                }
            }
            return hasRoleAdmin;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canLoad(route, segments) {
        return true;
    }
};
AdminAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AdminAuthGuard);



/***/ }),

/***/ "./src/app/helper/error-interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/helper/error-interceptor.ts ***!
  \*********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                }
                else if (err.status === 403) {
                    this.router.navigate(['/']);
                }
            }
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helper/jwt-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/helper/jwt-interceptor.ts ***!
  \*******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/layout/layout-with-shared/layout-with-shared.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQtd2l0aC1zaGFyZWQvbGF5b3V0LXdpdGgtc2hhcmVkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/layout-with-shared/layout-with-shared.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.ts ***!
  \***************************************************************************/
/*! exports provided: LayoutWithSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWithSharedComponent", function() { return LayoutWithSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutWithSharedComponent = class LayoutWithSharedComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutWithSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout-with-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout-with-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout-with-shared.component.css */ "./src/app/layout/layout-with-shared/layout-with-shared.component.css")).default]
    })
], LayoutWithSharedComponent);



/***/ }),

/***/ "./src/app/service/auth/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/auth/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(API_URL + '/login', { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.update.emit('login');
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/category/category.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/category/category.service.ts ***!
  \******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getAllCategory() {
        return this.http.get(API_URL + '/categories');
    }
    createCategory(category) {
        return this.http.post(API_URL + '/categories', category);
    }
    getCategory(id) {
        return this.http.get(API_URL + `/categories/${id}`);
    }
    updateCategory(id, category) {
        return this.http.put(API_URL + `/categories/${id}`, category);
    }
    deleteCategory(id) {
        return this.http.delete(API_URL + `/categories/${id}`);
    }
    getAllProductByCategory(id) {
        return this.http.get(API_URL + `/categories/${id}/products`);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/service/customer-info/customer-info.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/customer-info/customer-info.service.ts ***!
  \****************************************************************/
/*! exports provided: CustomerInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoService", function() { return CustomerInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let CustomerInfoService = class CustomerInfoService {
    constructor(http) {
        this.http = http;
    }
    getAllCustomerInfo() {
        return this.http.get(API_URL + '/customer-infos');
    }
    createCustomerInfo(customerInfo) {
        return this.http.post(API_URL + '/customer-infos', customerInfo);
    }
    updateCustomerInfo(id, customerInfo) {
        return this.http.put(API_URL + `/customer-infos/${id}`, customerInfo);
    }
    deleteCustomerInfo(id) {
        return this.http.delete(API_URL + `/customer-infos/${id}`);
    }
    getCustomerInfo(id) {
        return this.http.get(API_URL + `/customer-infos/${id}`);
    }
};
CustomerInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CustomerInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerInfoService);



/***/ }),

/***/ "./src/app/service/item/item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/item/item.service.ts ***!
  \**********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
/* harmony import */ var _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");






const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ItemService = class ItemService {
    constructor(http, warehouseBillDetailService, orderDetailService) {
        this.http = http;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.orderDetailService = orderDetailService;
    }
    getAllItem() {
        return this.http.get(API_URL + '/items');
    }
    createItem(item) {
        return this.http.post(API_URL + '/items', item);
    }
    getItem(id) {
        return this.http.get(API_URL + `/items/${id}`);
    }
    updateItem(id, item) {
        return this.http.put(API_URL + `/items/${id}`, item);
    }
    deleteItem(id) {
        return this.http.delete(API_URL + `/items/${id}`);
    }
    addItemToShoppingCart(items, productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let sumInput = yield this.warehouseBillDetailService.sumAmount(productId).toPromise();
            let sumOutput = yield this.orderDetailService.sumAmount(productId).toPromise();
            if (sumInput - sumOutput <= 0) {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Sản phẩm này hiện đã hết!\nHãy chon mua sản phẩm khác'
                    });
                });
            }
            else {
                if (items.length == 0) {
                    let item = {
                        product: {
                            id: productId
                        },
                        quantity: 1,
                        shoppingCart: {
                            id: shoppingCartId
                        }
                    };
                    this.createItem(item).subscribe(() => {
                        $(function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'success',
                                title: 'Đã thêm vào giỏ hàng'
                            });
                        });
                    });
                }
                else {
                    let index = -1;
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].product.id == productId) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        let item1 = {
                            product: {
                                id: productId
                            },
                            quantity: 1,
                            shoppingCart: {
                                id: shoppingCartId
                            }
                        };
                        this.createItem(item1).subscribe(() => {
                            $(function () {
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                Toast.fire({
                                    type: 'success',
                                    title: 'Đã thêm vào giỏ hàng'
                                });
                            });
                        });
                    }
                    else {
                        items[index].quantity += 1;
                        this.updateItem(items[index].id, items[index]).subscribe(() => {
                            $(function () {
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                Toast.fire({
                                    type: 'success',
                                    title: 'Đã thêm vào giỏ hàng'
                                });
                            });
                        });
                    }
                }
            }
        });
    }
    decreaseItemToShoppingCart(items, productId) {
        let index = -1;
        for (let i = 0; i < items.length; i++) {
            if (items[i].product.id == productId) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            if (items[index].quantity == 1) {
                this.deleteItem(items[index].id).subscribe(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
                        });
                    });
                });
            }
            else {
                items[index].quantity -= 1;
                this.updateItem(items[index].id, items[index]).subscribe(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đã giảm số lượng 1 sản phẩm trong giỏ hàng'
                        });
                    });
                });
            }
        }
    }
};
ItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillDetailService"] },
    { type: _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);



/***/ }),

/***/ "./src/app/service/notification/notification.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/notification/notification.service.ts ***!
  \**************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
    }
    getAllNotification() {
        return this.http.get(API_URL + '/notifications');
    }
    createNotification(notification) {
        return this.http.post(API_URL + '/notifications', notification);
    }
    updateNotification(id, notification) {
        return this.http.put(API_URL + `/notifications/${id}`, notification);
    }
    deleteNotification(id) {
        return this.http.delete(API_URL + `/notifications/${id}`);
    }
    getNotification(id) {
        return this.http.get(API_URL + `/notifications/${id}`);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/service/order-detail/order-detail.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/order-detail/order-detail.service.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let OrderDetailService = class OrderDetailService {
    constructor(http) {
        this.http = http;
    }
    getAllOrderDetail() {
        return this.http.get(API_URL + '/order-details');
    }
    createOrderDetail(orderDetail) {
        return this.http.post(API_URL + '/order-details', orderDetail);
    }
    getOrderDetail(id) {
        return this.http.get(API_URL + `/order-details/${id}`);
    }
    updateOrderDetail(id, orderDetail) {
        return this.http.put(API_URL + `/order-details/${id}`, orderDetail);
    }
    deleteOrderDetail(id) {
        return this.http.delete(API_URL + `/order-details/${id}`);
    }
    sumAmount(id) {
        return this.http.get(API_URL + `/order-details/${id}/sum`);
    }
};
OrderDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrderDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderDetailService);



/***/ }),

/***/ "./src/app/service/order/orders.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/order/orders.service.ts ***!
  \*************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
    }
    getAllOrder(status) {
        return this.http.get(API_URL + '/orders?status=' + status);
    }
    createOrders(orders) {
        return this.http.post(API_URL + '/orders', orders);
    }
    getOrders(id) {
        return this.http.get(API_URL + `/orders/${id}`);
    }
    updateOrders(id, orders) {
        return this.http.put(API_URL + `/orders/${id}`, orders);
    }
    deleteOrders(id) {
        return this.http.delete(API_URL + `/orders/${id}`);
    }
    getAllOrderByUserAndStatus(id, status) {
        return this.http.get(API_URL + `/orders/users/${id}?status=` + status);
    }
    getAllOrderDetail(id) {
        return this.http.get(API_URL + `/orders/${id}/order-details`);
    }
    getAllProductUserBought(id) {
        return this.http.get(API_URL + `/orders/users/${id}/products`);
    }
    sumTotalPriceGet(month, year) {
        return this.http.get(API_URL + `/orders/total-price?month=` + month + '&year=' + year);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/service/product/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/product/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAllProduct() {
        return this.http.get(API_URL + '/products');
    }
    createProduct(product) {
        return this.http.post(API_URL + '/products', product);
    }
    getProduct(id) {
        return this.http.get(API_URL + `/products/${id}`);
    }
    updateProduct(id, product) {
        return this.http.put(API_URL + `/products/${id}`, product);
    }
    deleteProduct(id) {
        return this.http.delete(API_URL + `/products/${id}`);
    }
    getAllImageByProduct(id) {
        return this.http.get(API_URL + `/products/${id}/images`);
    }
    getAllProductHasSaleOffGreaterThanZero() {
        return this.http.get(API_URL + `/products/sale-off`);
    }
    getAllProductLatest() {
        return this.http.get(API_URL + `/products/latest`);
    }
    getAllProductByName(name) {
        return this.http.get(API_URL + '/products/search?name=' + name);
    }
    getAllReviewByProduct(id) {
        return this.http.get(API_URL + `/products/${id}/reviews`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/service/review/review.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/review/review.service.ts ***!
  \**************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ReviewService = class ReviewService {
    constructor(http) {
        this.http = http;
    }
    getAllReview() {
        return this.http.get(API_URL + '/reviews');
    }
    createReview(review) {
        return this.http.post(API_URL + '/reviews', review);
    }
    updateReview(id, review) {
        return this.http.put(API_URL + `/reviews/${id}`, review);
    }
    deleteReview(id) {
        return this.http.delete(API_URL + `/reviews/${id}`);
    }
    getReview(id) {
        return this.http.get(API_URL + `/reviews/${id}`);
    }
    getReviewByUserAndProduct(userId, productId) {
        return this.http.get(API_URL + `/reviews/users/${userId}/products/${productId}`);
    }
};
ReviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReviewService);



/***/ }),

/***/ "./src/app/service/shopping-cart/shopping-cart.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/shopping-cart/shopping-cart.service.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ShoppingCartService = class ShoppingCartService {
    constructor(http) {
        this.http = http;
    }
    getAllCart() {
        return this.http.get(API_URL + '/carts');
    }
    createCart(shoppingCart) {
        return this.http.post(API_URL + '/carts', shoppingCart);
    }
    getCart(id) {
        return this.http.get(API_URL + `/carts/${id}`);
    }
    getCartByUser(id) {
        return this.http.get(API_URL + `/carts/users/${id}`);
    }
    updateCart(id, shoppingCart) {
        return this.http.put(API_URL + `/carts/${id}`, shoppingCart);
    }
    deleteShoppingCart(id) {
        return this.http.delete(API_URL + `/carts/${id}`);
    }
    getAllItemByShoppingCart(id) {
        return this.http.get(API_URL + `/carts/${id}/items`);
    }
};
ShoppingCartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingCartService);



/***/ }),

/***/ "./src/app/service/user/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/user/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    register(user) {
        return this.http.post(API_URL + '/register', user);
    }
    findAllNotification(id) {
        return this.http.get(API_URL + `/users/${id}/notifications`);
    }
    findAllNotificationDateDesc(id) {
        return this.http.get(API_URL + `/users/${id}/notifications-desc`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts ***!
  \********************************************************************************/
/*! exports provided: WarehouseBillDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseBillDetailService", function() { return WarehouseBillDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let WarehouseBillDetailService = class WarehouseBillDetailService {
    constructor(http) {
        this.http = http;
    }
    getAllWarehouseBillDetail() {
        return this.http.get(API_URL + '/warehouse-bill-details');
    }
    createWarehouseBillDetail(warehouseBillDetail) {
        return this.http.post(API_URL + '/warehouse-bill-details', warehouseBillDetail);
    }
    getWarehouseBillDetail(id) {
        return this.http.get(API_URL + `/warehouse-bill-details/${id}`);
    }
    updateWarehouseBillDetail(id, warehouseBillDetail) {
        return this.http.put(API_URL + `/warehouse-bill-details/${id}`, warehouseBillDetail);
    }
    deleteWarehouseBillDetail(id) {
        return this.http.delete(API_URL + `/warehouse-bill-details/${id}`);
    }
    sumAmount(id) {
        return this.http.get(API_URL + `/warehouse-bill-details/${id}/sum`);
    }
};
WarehouseBillDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WarehouseBillDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WarehouseBillDetailService);



/***/ }),

/***/ "./src/app/service/warehouse-bill/warehouse-bill.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/warehouse-bill/warehouse-bill.service.ts ***!
  \******************************************************************/
/*! exports provided: WarehouseBillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseBillService", function() { return WarehouseBillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let WarehouseBillService = class WarehouseBillService {
    constructor(http) {
        this.http = http;
    }
    getAllWarehouseBill() {
        return this.http.get(API_URL + '/warehousebills');
    }
    createWarehouseBill(warehouse) {
        return this.http.post(API_URL + '/warehousebills', warehouse);
    }
    getWarehouseBill(id) {
        return this.http.get(API_URL + `/warehousebills/${id}`);
    }
    updateWarehouseBill(id, warehouse) {
        return this.http.put(API_URL + `/warehousebills/${id}`, warehouse);
    }
    deleteWarehouseBill(id) {
        return this.http.delete(API_URL + `/warehousebills/${id}`);
    }
    getAllWarehouseBillDetail(id) {
        return this.http.get(API_URL + `/warehousebills/${id}` + `/warehouse-bill-details`);
    }
    sumTotalPriceHaveBought(month, year) {
        return this.http.get(API_URL + `/warehousebills/total-price?month=` + month + '&year=' + year);
    }
};
WarehouseBillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WarehouseBillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WarehouseBillService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu {\n  max-height: 350px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9FOlxcQW5ndWxhclxcbWFya2V0LWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIiwiLmRyb3Bkb3duLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/notification/notification.service */ "./src/app/service/notification/notification.service.ts");








let HeaderComponent = class HeaderComponent {
    constructor(categoryService, authenticationService, shoppingCartService, userService, notificationService, router) {
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.listCategory = [];
        this.hasRoleAdmin = false;
        this.items = [];
        this.favoriteProduct = [];
        this.amount = 0;
        this.listNotification = [];
        this.listNotificationUnRead = [];
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
            this.getAllNotificationUnRead(this.currentUser.id);
            this.getAllNotification(this.currentUser.id);
        });
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    this.hasRoleAdmin = true;
                }
            }
        }
        this.loadFavorite();
    }
    ngOnInit() {
        $(function () {
            $(".dropdown-menu").click(function (event) {
                event.stopPropagation();
            });
        });
        this.getAllCategories();
    }
    getAllNotification(id) {
        this.userService.findAllNotificationDateDesc(id).subscribe(listNotification => {
            this.listNotification = listNotification;
            this.listNotification.map(notification => {
                notification.createDate = new Date(notification.createDate);
            });
        });
    }
    getAllNotificationUnRead(id) {
        this.userService.findAllNotification(id).subscribe(listNotificationUnRead => {
            this.listNotificationUnRead = listNotificationUnRead;
        });
    }
    getShoppingCartByUser(id) {
        if (id == null) {
            this.loadCart();
        }
        else {
            this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
                this.shoppingCart = shoppingCart;
                this.getAllItemInShoppingCart(this.shoppingCart.id);
            });
        }
    }
    getAllItemInShoppingCart(id) {
        this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
            this.items = items;
            this.sumTotalItem();
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    loadCart() {
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
            }
            this.sumTotalItem();
        }
    }
    sumTotalItem() {
        this.amount = 0;
        for (let item of this.items) {
            this.amount += item.quantity;
        }
        return this.amount;
    }
    loadFavorite() {
        this.favoriteProduct = [];
        let heart = JSON.parse(localStorage.getItem('heart'));
        if (heart != null) {
            for (var i = 0; i < heart.length; i++) {
                let item = JSON.parse(heart[i]);
                this.favoriteProduct.push({
                    product: item.product,
                    quantity: item.quantity
                });
            }
        }
    }
    getNotification(id) {
        return this.notificationService.getNotification(id).toPromise();
    }
    updateStatus(notificationId, userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let notification = yield this.getNotification(notificationId);
            notification.status = true;
            this.notificationService.updateNotification(notificationId, notification).subscribe(() => {
                this.getAllNotificationUnRead(userId);
                this.getAllNotification(userId);
            });
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"] },
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.hasRoleAdmin = false;
        this.hasRoleUser = false;
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
        });
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.name === 'ROLE_ADMIN') {
                    this.hasRoleAdmin = true;
                }
                else {
                    this.hasRoleUser = true;
                }
            }
        }
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let SidebarComponent = class SidebarComponent {
    constructor(router, authenticationService) {
        this.router = router;
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
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/user/category-detail/category-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/category-detail/category-detail.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/category-detail/category-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/category-detail/category-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(categoryService, productService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.listProduct = [];
        this.listProductSaleOff = [];
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = +paramMap.get('id');
            this.currentCategory = yield this.getCategory(id);
            this.listProduct = yield this.getAllProductByCategory(this.currentCategory);
            this.listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
        }));
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".latest-product__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var rangeSlider = $(".price-range"), minamount = $("#minamount"), maxamount = $("#maxamount"), minPrice = rangeSlider.data('min'), maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
                range: true,
                min: minPrice,
                max: maxPrice,
                values: [minPrice, maxPrice],
                slide: function (event, ui) {
                    minamount.val('$' + ui.values[0]);
                    maxamount.val('$' + ui.values[1]);
                }
            });
            minamount.val('$' + rangeSlider.slider("values", 0));
            maxamount.val('$' + rangeSlider.slider("values", 1));
        });
        this.getAllCategories();
        this.getAllProductSaleOff();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductByCategory(category) {
        return this.categoryService.getAllProductByCategory(category.id).toPromise();
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getCategory(id) {
        return this.categoryService.getCategory(id).toPromise();
    }
    getAllProductSaleOff() {
        this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
            this.listProductSaleOff = listProduct;
            this.listProductSaleOff.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
            $(document).ready(function () {
                $(".product__discount__slider").owlCarousel({
                    // loop: true,
                    margin: 0,
                    items: 3,
                    dots: true,
                    smartSpeed: 1200,
                    autoHeight: false,
                    // autoplay: true,
                    responsive: {
                        320: {
                            items: 1,
                        },
                        480: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        }
                    }
                });
            });
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/user/category-detail/category-detail.component.scss")).default]
    })
], CategoryDetailComponent);



/***/ }),

/***/ "./src/app/user/checkout/checkout.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/checkout/checkout.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/checkout/checkout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/checkout/checkout.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/customer-info/customer-info.service */ "./src/app/service/customer-info/customer-info.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");











let CheckoutComponent = class CheckoutComponent {
    constructor(categoryService, customerInfoService, authenticationService, shoppingCartService, itemService, ordersService, orderDetailService, router) {
        this.categoryService = categoryService;
        this.customerInfoService = customerInfoService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.ordersService = ordersService;
        this.orderDetailService = orderDetailService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.customerInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.items = [];
        this.total = 0;
        this.isSubmitted = false;
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
        });
        this.getAllCategories();
        if (this.currentUser == null) {
            this.loadCart();
        }
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
            this.getAllItemInShoppingCart(this.shoppingCart.id);
        });
    }
    getAllItemInShoppingCart(id) {
        this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
            this.items = items;
            this.sumTotalPrice();
        });
    }
    deleteAllItemInShoppingCart(id) {
        this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
            this.items = items;
            this.items.map(item => {
                this.itemService.deleteItem(item.id).subscribe();
            });
        });
    }
    createOrder() {
        const orders = {
            user: {
                id: this.currentUser.id
            },
            status: false
        };
        return this.ordersService.createOrders(orders).toPromise();
    }
    createOrderDetail(item, orders) {
        const orderDetail = {
            orders: {
                id: orders.id
            },
            amount: item.quantity,
            product: {
                id: item.product.id
            }
        };
        return this.orderDetailService.createOrderDetail(orderDetail).toPromise();
    }
    submitCheckoutForm(items, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const customerInfo = yield this.createCustomerInfo();
            if (customerInfo.address != "" && customerInfo.email != "" && customerInfo.name != "" && customerInfo.phoneNumber != "") {
                this.isSubmitted = true;
            }
            if (this.isSubmitted) {
                this.deleteAllItemInShoppingCart(shoppingCartId);
                this.getAllItemInShoppingCart(shoppingCartId);
                const orders = yield this.createOrder();
                let listOrderDetail = items.map(item => {
                    this.createOrderDetail(item, orders);
                });
                Promise.all(listOrderDetail).then(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đơn hàng đã tạo, vui lòng chờ xác nhận'
                        });
                    });
                    this.customerInfoForm.reset();
                }).catch(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'error',
                            title: 'Xảy ra lỗi khi tạo đơn hàng'
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
                        title: 'Điền đủ thông tin để nhận hàng'
                    });
                });
            }
        });
    }
    createCustomerInfo() {
        const customerInfo = {
            name: this.customerInfoForm.value.name,
            address: this.customerInfoForm.value.address,
            phoneNumber: this.customerInfoForm.value.phoneNumber,
            email: this.customerInfoForm.value.email,
            user: {
                id: this.currentUser.id
            }
        };
        return this.customerInfoService.createCustomerInfo(customerInfo).toPromise();
    }
    loadCart() {
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
                this.sumTotalPrice();
            }
        }
    }
    sumTotalPrice() {
        this.total = 0;
        for (let item of this.items) {
            this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
        }
        return this.total;
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__["CustomerInfoService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"] },
    { type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/user/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/user/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/contact/contact.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ContactComponent = class ContactComponent {
    constructor(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
        $('.hero__categories__all').on('click', function () {
            $('.hero__categories ul').slideToggle(400);
        });
        this.getAllCategories();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/user/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/user/favorite/favorite.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/favorite/favorite.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/favorite/favorite.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/favorite/favorite.component.ts ***!
  \*****************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let FavoriteComponent = class FavoriteComponent {
    constructor(categoryService, activatedRoute, productService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        this.items = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var proQty = $('.pro-qty');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
        this.getAllCategories();
        this.loadFavorite();
        this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var id = params['id'];
            if (id) {
                const product = yield this.getProduct(id);
                product.image = yield this.getAllImageByProduct(product);
                var item = {
                    product: product,
                    quantity: 1
                };
                if (localStorage.getItem('heart') == null) {
                    let heart = [];
                    heart.push(JSON.stringify(item));
                    localStorage.setItem('heart', JSON.stringify(heart));
                }
                else {
                    this.addProductToFavorite(id, item);
                }
                this.loadFavorite();
            }
            else {
                this.loadFavorite();
            }
        }));
    }
    remove(id) {
        let heart = JSON.parse(localStorage.getItem('heart'));
        let index = -1;
        for (var i = 0; i < heart.length; i++) {
            let item = JSON.parse(heart[i]);
            if (item.product.id == id) {
                heart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("heart", JSON.stringify(heart));
        this.loadFavorite();
    }
    addProductToFavorite(id, item) {
        let heart = JSON.parse(localStorage.getItem('heart'));
        let index = -1;
        for (var i = 0; i < heart.length; i++) {
            let item = JSON.parse(heart[i]);
            if (item.product.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            heart.push(JSON.stringify(item));
            localStorage.setItem('heart', JSON.stringify(heart));
            this.loadFavorite();
        }
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    loadFavorite() {
        this.items = [];
        let heart = JSON.parse(localStorage.getItem('heart'));
        for (var i = 0; i < heart.length; i++) {
            let item = JSON.parse(heart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
        }
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite.component.scss */ "./src/app/user/favorite/favorite.component.scss")).default]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/user/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/homepage/homepage.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let HomepageComponent = class HomepageComponent {
    constructor(productService, categoryService, authenticationService, shoppingCartService, itemService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listProduct = [];
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.listProductLatest = [];
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".latest-product__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            $(".categories__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 4,
                dots: false,
                nav: true,
                navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        });
        this.getAllProductLatest();
        this.getAllProduct();
        this.getAllCategories();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
            this.addImageToProduct(this.listProduct);
        });
    }
    addImageToProduct(listProduct) {
        listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            product.image = yield this.getAllImageByProduct(product);
        }));
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductLatest() {
        this.productService.getAllProductLatest().subscribe(listProduct => {
            if (listProduct.length > 3) {
                for (let i = 0; i < 3; i++) {
                    this.listProductLatest.push(listProduct[i]);
                }
            }
            else {
                this.listProductLatest = listProduct;
            }
            this.addImageToProduct(this.listProductLatest);
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/user/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/user/product-detail/product-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/product-detail/product-detail.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9FOlxcQW5ndWxhclxcbWFya2V0LWZyb250ZW5kL3NyY1xcYXBwXFx1c2VyXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGVkIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbiIsIi5yYXRlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/product-detail/product-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/product-detail/product-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/review/review.service */ "./src/app/service/review/review.service.ts");










let ProductDetailComponent = class ProductDetailComponent {
    constructor(categoryService, productService, reviewService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.relatedProducts = [];
        this.listReview = [];
        this.starAverage = 0;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = +paramMap.get('id');
            this.currentProduct = yield this.getProduct(id);
            this.currentProduct.image = yield this.getAllImageByProduct(this.currentProduct);
            this.getAllReview(id);
            this.getAllProductRelated(this.currentProduct.category);
        }));
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".product__details__pic__slider").owlCarousel({
                loop: true,
                margin: 20,
                items: 4,
                dots: true,
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.product__details__pic__slider img').on('click', function () {
                var imgurl = $(this).data('imgbigurl');
                var bigImg = $('.product__details__pic__item--large').attr('src');
                if (imgurl != bigImg) {
                    $('.product__details__pic__item--large').attr({
                        src: imgurl
                    });
                }
            });
            var proQty = $('.pro-qty');
            proQty.prepend('<span class="dec qtybtn">-</span>');
            proQty.append('<span class="inc qtybtn">+</span>');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
        this.getAllCategories();
    }
    getAllReview(productId) {
        this.productService.getAllReviewByProduct(productId).subscribe(listReview => {
            let sum = 0;
            this.listReview = listReview;
            this.listReview.map(review => {
                review.createDate = new Date(review.createDate);
                sum += review.evaluate;
            });
            this.starAverage = sum / this.listReview.length;
        });
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllProductRelated(category) {
        this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
            if (listProduct.length > 4) {
                for (let i = 0; i < 4; i++) {
                    this.relatedProducts.push(listProduct[i]);
                }
            }
            else {
                this.relatedProducts = listProduct;
            }
            this.relatedProducts.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/user/product-detail/product-detail.component.scss")).default]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/user/shop/shop.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/shop/shop.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/shop/shop.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/shop/shop.component.ts ***!
  \*********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let ShopComponent = class ShopComponent {
    constructor(categoryService, activatedRoute, productService, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.listProduct = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.listProductSaleOff = [];
        this.listProductLatest = [];
        this.query = "";
        this.sub = this.activatedRoute.queryParams.subscribe(params => {
            this.query = params.name;
            if (this.query != null) {
                this.searchForm.value.name = this.query;
                this.search();
            }
            else {
                this.getAllProduct();
            }
        });
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".latest-product__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var rangeSlider = $(".price-range"), minamount = $("#minamount"), maxamount = $("#maxamount"), minPrice = rangeSlider.data('min'), maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
                range: true,
                min: minPrice,
                max: maxPrice,
                values: [minPrice, maxPrice],
                slide: function (event, ui) {
                    minamount.val('$' + ui.values[0]);
                    maxamount.val('$' + ui.values[1]);
                }
            });
            minamount.val('$' + rangeSlider.slider("values", 0));
            maxamount.val('$' + rangeSlider.slider("values", 1));
        });
        this.getAllCategories();
        this.getAllProductSaleOff();
        this.getAllProductLatest();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
            this.addImageToProduct(this.listProduct);
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductSaleOff() {
        this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
            this.listProductSaleOff = listProduct;
            this.listProductSaleOff.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
                $(document).ready(function () {
                    $(".product__discount__slider").owlCarousel({
                        loop: true,
                        margin: 0,
                        items: 3,
                        dots: true,
                        smartSpeed: 1500,
                        autoHeight: false,
                        autoplay: true,
                        responsive: {
                            320: {
                                items: 1,
                            },
                            480: {
                                items: 2,
                            },
                            768: {
                                items: 3,
                            }
                        }
                    });
                });
            }));
        });
    }
    getAllProductLatest() {
        this.productService.getAllProductLatest().subscribe(listProduct => {
            if (listProduct.length > 3) {
                for (let i = 0; i < 3; i++) {
                    this.listProductLatest.push(listProduct[i]);
                }
            }
            else {
                this.listProductLatest = listProduct;
            }
            this.addImageToProduct(this.listProductLatest);
        });
    }
    addImageToProduct(listProduct) {
        listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            product.image = yield this.getAllImageByProduct(product);
        }));
    }
    search() {
        const name = this.searchForm.value.name;
        if (name != null) {
            if (name == "") {
                this.router.navigate(['/shop']);
            }
            else {
                this.productService.getAllProductByName(name).subscribe(listProduct => {
                    this.listProduct = listProduct;
                    this.addImageToProduct(this.listProduct);
                    this.router.navigate(['/shop'], { queryParams: { name: name } });
                });
            }
        }
    }
};
ShopComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/user/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/user/shopping-cart/shopping-cart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/shopping-cart/shopping-cart.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/shopping-cart/shopping-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/shopping-cart/shopping-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");











let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(categoryService, activatedRoute, productService, warehouseBillDetailService, orderDetailService, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.orderDetailService = orderDetailService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.discountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.items = [];
        this.total = 0;
        this.getAllCategories();
        this.loadCart();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
        if (this.currentUser == null) {
            this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var id = params['id'];
                if (id) {
                    const product = yield this.getProduct(id);
                    product.image = yield this.getAllImageByProduct(product);
                    var item = {
                        product: product,
                        quantity: 1
                    };
                    const sum = yield this.sumAmountInput(product.id);
                    if (sum == null) {
                        $(function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'error',
                                title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
                            });
                        });
                    }
                    else {
                        if (localStorage.getItem('cart') == null) {
                            let cart = [];
                            cart.push(JSON.stringify(item));
                            localStorage.setItem('cart', JSON.stringify(cart));
                        }
                        else {
                            this.addProductToCart(id, item);
                        }
                    }
                    this.loadCart();
                }
                else {
                    this.loadCart();
                }
            }));
        }
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var proQty = $('.pro-qty');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
    }
    getShoppingCartByUser(id) {
        if (id == null) {
            this.loadCart();
        }
        else {
            this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
                this.shoppingCart = shoppingCart;
                this.shoppingCartService.getAllItemByShoppingCart(this.shoppingCart.id).subscribe(items => {
                    this.items = items;
                    items.map((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        item.product.image = yield this.getAllImageByProduct(item.product);
                    }));
                    this.sumTotalPrice();
                });
            });
        }
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    decreaseItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.decreaseItemToShoppingCart(items, productId);
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    sumAmountInput(id) {
        return this.warehouseBillDetailService.sumAmount(id).toPromise();
    }
    sumAmountOutput(id) {
        return this.orderDetailService.sumAmount(id).toPromise();
    }
    addProductToCart(id, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    index = i;
                    break;
                }
            }
            let sumInput = yield this.sumAmountInput(item.product.id);
            let sumOutput = yield this.sumAmountOutput(item.product.id);
            if (sumOutput == null) {
                sumOutput = 0;
            }
            if (sumInput == null) {
                sumInput = 0;
            }
            if (sumInput - sumOutput <= 0) {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
                    });
                });
            }
            else {
                if (index == -1) {
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let item = JSON.parse(cart[index]);
                    item.quantity += 1;
                    cart[index] = JSON.stringify(item);
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
                this.loadCart();
            }
        });
    }
    decreaseProduct(id, index) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let item = JSON.parse(cart[index]);
        item.quantity -= 1;
        if (item.quantity == 0) {
            this.remove(id);
        }
        else {
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        this.loadCart();
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    loadCart() {
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
        }
        this.sumTotalPrice();
    }
    sumTotalPrice() {
        this.total = 0;
        for (let item of this.items) {
            this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
        }
        return this.total;
    }
    remove(productId) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            if (item.product.id == productId) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }
    removeItemFromCart(itemId) {
        this.itemService.deleteItem(itemId).subscribe(() => {
            this.getShoppingCartByUser(this.currentUser.id);
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
                });
            });
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseBillDetailService"] },
    { type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/user/shopping-cart/shopping-cart.component.scss")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/user/user-order/user-order.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/user-order/user-order.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW9yZGVyL0U6XFxBbmd1bGFyXFxtYXJrZXQtZnJvbnRlbmQvc3JjXFxhcHBcXHVzZXJcXHVzZXItb3JkZXJcXHVzZXItb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLW9yZGVyL3VzZXItb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuIiwiLnJhdGVkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/user-order/user-order.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-order/user-order.component.ts ***!
  \*********************************************************/
/*! exports provided: UserOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderComponent", function() { return UserOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/review/review.service */ "./src/app/service/review/review.service.ts");









let UserOrderComponent = class UserOrderComponent {
    constructor(categoryService, router, ordersService, authenticationService, productService, reviewService, activatedRoute) {
        this.categoryService = categoryService;
        this.router = router;
        this.ordersService = ordersService;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.listProduct = [];
        this.listOrders = [];
        this.star = 0;
        this.getAllCategories();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
        });
        this.activatedRoute.params.subscribe(params => {
            this.status = (/true/i).test(params['status']);
            this.getAllOrderByUserAndStatus(this.currentUser.id, this.status);
            if (this.status == true) {
                this.getAllProductUserBought(this.currentUser.id);
            }
        });
    }
    ngOnInit() {
        let self = this;
        $(function () {
            $('.textarea').summernote();
            $('#modal-review').on('hidden.bs.modal', function () {
                $('.textarea').summernote('reset');
                self.star = 0;
            });
        });
    }
    rate(star) {
        if (this.star == star) {
            this.star = 0;
        }
        else {
            this.star = star;
        }
    }
    getAllProductUserBought(id) {
        this.ordersService.getAllProductUserBought(id).subscribe(listProduct => {
            this.listProduct = listProduct;
            this.listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
        });
    }
    getOrderId(id) {
        this.id = id;
    }
    getProductId(userId, productId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.productId = productId;
            this.currentReview = yield this.getReview(userId, productId);
            if (this.currentReview != null) {
                $('#comment').summernote('pasteHTML', this.currentReview.comment);
                $('.textarea').summernote('disable');
            }
            else {
                $('#comment').summernote('reset');
                $('.textarea').summernote('enable');
            }
        });
    }
    getReview(userId, productId) {
        return this.reviewService.getReviewByUserAndProduct(userId, productId).toPromise();
    }
    createReview(star, productId) {
        const review = {
            comment: $('.textarea').val(),
            user: {
                id: this.currentUser.id
            },
            evaluate: star,
            product: {
                id: productId
            }
        };
        this.reviewService.createReview(review).subscribe(() => {
            $(function () {
                $('#modal-review').modal('hide');
            });
            this.star = 0;
            $('.textarea').summernote('reset');
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Đánh giá thành công'
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
                    title: 'Xảy ra lỗi khi đánh giá'
                });
            });
        });
    }
    deleteOrder(id) {
        this.ordersService.deleteOrders(id).subscribe(() => {
            this.ordersService.getAllOrder(false).subscribe(listOrder => {
                this.listOrders = listOrder;
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
    }
    getAllOrderByUserAndStatus(id, status) {
        this.ordersService.getAllOrderByUserAndStatus(id, status).subscribe(listOrder => {
            this.listOrders = listOrder;
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
UserOrderComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-order.component.scss */ "./src/app/user/user-order/user-order.component.scss")).default]
    })
], UserOrderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://127.0.0.1:8000/api',
    firebaseConfig: {
        apiKey: "AIzaSyAdCzcXxyumztLIJ0AjznvUkR5C-HJO_Nw",
        authDomain: "market-8900a.firebaseapp.com",
        databaseURL: "https://market-8900a.firebaseio.com",
        projectId: "market-8900a",
        storageBucket: "market-8900a.appspot.com",
        messagingSenderId: "957866880097",
        appId: "1:957866880097:web:96684d95acdbb43f74ce20",
        measurementId: "G-Q8KG5E6B0H"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\market-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map