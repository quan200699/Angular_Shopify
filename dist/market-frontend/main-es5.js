function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Biểu đồ thu chi</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Biểu đồ thu chi</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Biểu đồ thu chi năm {{currentYear}}</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"chart\">\n        <canvas id=\"stackedBarChart\"\n                style=\"min-height: 700px; height: 700px; max-height: 700px; max-width: 100%;\"></canvas>\n      </div>\n    </div>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition login-page\">\n  <div class=\"login-box\">\n    <div class=\"login-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body login-card-body\">\n        <p class=\"login-box-msg\">Đăng nhập</p>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"icheck-primary\">\n                <input type=\"checkbox\" id=\"remember\">\n                <label for=\"remember\">\n                  Remember Me\n                </label>\n              </div>\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center mb-3\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i> Sign in using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i> Sign in using Google+\n          </a>\n        </div>\n        <!-- /.social-auth-links -->\n\n        <p class=\"mb-1\">\n          <a href=\"#\">Quên mật khẩu</a>\n        </p>\n        <p class=\"mb-0\">\n          <a [routerLink]=\"['/register']\" class=\"text-center\">Đăng ký tài khoản mới</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition register-page\">\n  <div class=\"register-box\">\n    <div class=\"register-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body register-card-body\">\n        <p class=\"login-box-msg\">Đăng ký tài khoản</p>\n        <form role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" id=\"register\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" name=\"fullName\" placeholder=\"Họ và tên\" formControlName=\"fullName\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-user\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Đăng ký</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i>\n            Sign up using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i>\n            Sign up using Google+\n          </a>\n        </div>\n\n        <a [routerLink]=\"['/login']\" class=\"text-center\">Tôi đã có tài khoản</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutWithSharedLayoutWithSharedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-navbar></app-navbar>\n    <app-sidebar></app-sidebar>\n    <div class=\"content-wrapper\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"footer__about\">\r\n          <div class=\"footer__about__logo\">\r\n            <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n          </div>\r\n          <ul>\r\n            <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\r\n            <li>Điện thoại: 84382546945</li>\r\n            <li>Email: help@gmail.com</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-6 offset-lg-1\">\r\n        <div class=\"footer__widget\">\r\n          <h6>Useful Links</h6>\r\n          <ul>\r\n            <li><a href=\"#\">About Us</a></li>\r\n            <li><a href=\"#\">About Our Shop</a></li>\r\n            <li><a href=\"#\">Secure Shopping</a></li>\r\n            <li><a href=\"#\">Delivery infomation</a></li>\r\n            <li><a href=\"#\">Privacy Policy</a></li>\r\n            <li><a href=\"#\">Our Sitemap</a></li>\r\n          </ul>\r\n          <ul>\r\n            <li><a href=\"#\">Who We Are</a></li>\r\n            <li><a href=\"#\">Our Services</a></li>\r\n            <li><a href=\"#\">Projects</a></li>\r\n            <li><a href=\"#\">Contact</a></li>\r\n            <li><a href=\"#\">Innovation</a></li>\r\n            <li><a href=\"#\">Testimonials</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"footer__widget\">\r\n          <h6>Join Our Newsletter Now</h6>\r\n          <p>Get E-mail updates about our latest shop and special offers.</p>\r\n          <div class=\"footer__widget__social\">\r\n            <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-pinterest\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"footer__copyright\">\r\n          <div class=\"footer__copyright__payment\"><img src=\"../../../assets/static/img/payment-item.png\" alt=\"\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"humberger__menu__overlay\"></div>\r\n<div class=\"humberger__menu__wrapper\">\r\n  <div class=\"humberger__menu__logo\">\r\n    <a href=\"#\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n  </div>\r\n  <div class=\"humberger__menu__cart\">\r\n    <ul>\r\n      <li><a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span>3</span></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"humberger__menu__widget\">\r\n    <div class=\"header__top__right__language\">\r\n      <img src=\"../../../assets/static/img/language.png\" alt=\"\">\r\n      <div>English</div>\r\n      <ul>\r\n        <li><a href=\"#\">Vietnamese</a></li>\r\n        <li><a href=\"#\">English</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"header__top__right__auth\">\r\n      <a href=\"#\"><i class=\"fa fa-user\"></i> Login</a>\r\n    </div>\r\n  </div>\r\n  <nav class=\"humberger__menu__nav mobile-menu\">\r\n    <ul>\r\n      <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\r\n      <li><a routerLink=\"/shop\">Cừa hàng</a></li>\r\n      <li><a routerLink=\"/contact\">Liên hệ</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div id=\"mobile-menu-wrap\"></div>\r\n  <div class=\"header__top__right__social\">\r\n    <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\r\n  </div>\r\n  <div class=\"humberger__menu__contact\">\r\n    <ul>\r\n      <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\r\n      <li>Miễn phí vận chuyển trong vòng 5km</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<header class=\"header\">\r\n  <div class=\"header__top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"header__top__left\">\r\n            <ul>\r\n              <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\r\n              <li>Miễn phí vận chuyển trong vòng 5km</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"header__top__right\">\r\n            <div class=\"header__top__right__social\">\r\n              <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\r\n            </div>\r\n            <div class=\"header__top__right__language\">\r\n              <div>Theo dõi đơn hàng</div>\r\n              <ul>\r\n                <li><a [routerLink]=\"['/order', { status:true }]\" style=\"font-size: 12px\">Đã mua</a></li>\r\n                <li><a [routerLink]=\"['/order', { status:false }]\" style=\"font-size: 12px\">Chờ xác nhận</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"dropdown header__top__right__auth\">\r\n              <a class=\"btn dropdown-toggle\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"\r\n                 aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                <i class=\"fa fa-bell\"></i><span\r\n                *ngIf=\"listNotificationUnRead.length==0\">{{this.listNotificationUnRead.length}}</span>\r\n                <span *ngIf=\"listNotificationUnRead.length>0\"\r\n                      style=\"color: red\">{{this.listNotificationUnRead.length}}</span>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser==null\">\r\n                <div class=\"dropdown-item disabled\">\r\n                  <h5>Thông báo</h5>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item disabled\">\r\n                  <p>Bạn chưa đăng nhập</p>\r\n                  <p></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser!=null\">\r\n                <div class=\"dropdown-item disabled\">\r\n                  <h5>Thông báo</h5>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item disabled\" *ngIf=\"listNotification.length==0\">\r\n                  <p>Chưa có thông báo</p>\r\n                  <p></p>\r\n                </div>\r\n                <div class=\"dropdown-item\"\r\n                     *ngFor=\"let notification of listNotification\">\r\n                  <div *ngIf=\"notification.status == true\" (click)=\"updateStatus(notification.id, currentUser.id)\">\r\n                    {{notification.message}}\r\n                    <p style=\"font-size: 12px\">\r\n                      {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\r\n                      {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\r\n                    </p>\r\n                  </div>\r\n                  <div *ngIf=\"notification.status == false\"\r\n                       (click)=\"updateStatus(notification.id, currentUser.id)\">\r\n                    {{notification.message}}\r\n                    <p style=\"font-size: 12px; color: #4b93f7\">\r\n                      {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\r\n                      {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\r\n                      <span class=\"fas fa-circle float-right\" style=\"color: #4b93f7\"></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"header__top__right__auth\" *ngIf=\"!currentUser\">\r\n              <a routerLink=\"../login\"><i class=\"fa fa-user\"></i> Đăng nhập</a>\r\n            </div>\r\n            <div class=\"header__top__right__auth\" *ngIf=\"currentUser\">\r\n              <a routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"header__logo\">\r\n          <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <nav class=\"header__menu\">\r\n          <ul>\r\n            <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\r\n            <li><a routerLink=\"/shop\">Cửa hàng</a></li>\r\n            <li><a routerLink=\"/contact\">Liên hệ</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"header__cart\">\r\n          <ul>\r\n            <li><a routerLink=\"/favorite\"><i class=\"fa fa-heart\"></i> <span>{{this.favoriteProduct.length}}</span></a>\r\n            </li>\r\n            <li><a routerLink=\"/cart\"><i class=\"fa fa-shopping-bag\"></i> <span>{{this.amount}}</span></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"humberger__open\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </div>\r\n  </div>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n      </li>\n      <li class=\"nav-item active mr-sm-3\">\n        <a class=\"nav-link\" routerLink=\"/admin\">\n          <i class=\"fa fa-home fa-lg\"></i>\n          Trang chủ<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <div class=\"my-2 my-lg-0\">\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"!currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"login\"><i class=\"fas fa-sign-in-alt fa-lg\"></i> Đăng nhập</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"register\"><i class=\"fas fa-user-plus fa-lg\"></i> Đăng ký</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <!-- Brand Logo -->\r\n  <a routerLink=\"\" class=\"brand-link\">\r\n    <span class=\"brand-text font-weight-light\">Shop</span>\r\n  </a>\r\n\r\n<!--   Sidebar-->\r\n  <div class=\"sidebar\">\r\n    <!-- Sidebar user (optional) -->\r\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\r\n      <div class=\"image\">\r\n        <i class=\"fa fa-user fa-2x\" style=\"color: white\"></i>\r\n      </div>\r\n      <div class=\"info\">\r\n        <a [routerLink]=\"'/admin'\" class=\"d-block\">{{currentUser.email}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Sidebar Menu -->\r\n    <nav class=\"mt-2\">\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Biểu đồ\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/product\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Sản phẩm\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/category\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Danh mục\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/warehouse\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Nhà kho\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/warehouse-bill\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Phiếu nhập kho\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"hasRoleAdmin\">\r\n          <a routerLink=\"/admin/orders\" class=\"nav-link\">\r\n            <i class=\"nav-icon fas fa-list\"></i>\r\n            <p>\r\n              Đơn hàng\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- /.sidebar-menu -->\r\n  </div>\r\n<!--   /.sidebar-->\r\n</aside>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserCategoryDetailCategoryDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\" *ngIf=\"currentCategory != null\">\n          <h2>{{currentCategory.name}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{currentCategory.name}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"product spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-5\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar__item\">\n            <h4>Danh mục sản phẩm</h4>\n            <ul *ngFor=\"let category of listCategory\">\n              <li><a [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n            </ul>\n          </div>\n          <div class=\"sidebar__item\">\n            <h4>Price</h4>\n            <div class=\"price-range-wrap\">\n              <div class=\"price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content\"\n                   data-min=\"10\" data-max=\"540\">\n                <div class=\"ui-slider-range ui-corner-all ui-widget-header\"></div>\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\n              </div>\n              <div class=\"range-slider\">\n                <div class=\"price-input\">\n                  <input type=\"text\" id=\"minamount\">\n                  <input type=\"text\" id=\"maxamount\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"sidebar__item\">\n            <div class=\"latest-product__text\">\n              <h4>Sản phẩm mới</h4>\n              <div class=\"latest-product__slider owl-carousel\">\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                  <a href=\"#\" class=\"latest-product__item\">\n                    <div class=\"latest-product__item__pic\">\n                      <img src=\"../../../assets/static/img/latest-product/lp-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>Crab Pool Security</h6>\n                      <span>$30.00</span>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-7\">\n        <div class=\"product__discount\">\n          <div class=\"section-title product__discount__title\">\n            <h2>Giảm giá</h2>\n          </div>\n          <div class=\"row\">\n            <div class=\"product__discount__slider owl-carousel\">\n              <div class=\"col-lg-4\" *ngFor=\"let product of listProductSaleOff\">\n                <div class=\"product__discount__item\">\n                  <div class=\"product__discount__item__pic set-bg\" *ngIf=\"product.image != null\"\n                       [style.background]=\"'url('+product.image[0].url+')'\">\n                    <div class=\"product__discount__percent\">-{{product.saleOff}}%</div>\n                    <ul class=\"product__item__pic__hover\">\n                      <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                      <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                      <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                        class=\"fa fa-shopping-cart\"></i></a></li>\n                      <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id,shoppingCart.id)\"><i\n                        class=\"fa fa-shopping-cart\"></i></a></li>\n                    </ul>\n                  </div>\n                  <div class=\"product__discount__item__text\">\n                    <span>{{product.category.name}}</span>\n                    <h5><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h5>\n                    <div class=\"product__item__price\">{{product.price * (1 - product.saleOff / 100)}}đ\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"filter__item\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-5\">\n              <div class=\"filter__sort\">\n                <span>Sắp xếp</span>\n                <select>\n                  <option value=\"0\">Default</option>\n                  <option value=\"0\">Default</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <div class=\"filter__found\">\n                <h6><span>{{listProduct.length}}</span> sản phẩm</h6>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-3\">\n              <div class=\"filter__option\">\n                <span class=\"icon_grid-2x2\"></span>\n                <span class=\"icon_ul\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\n            <div class=\"product__item\">\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\n                   [style.background]=\"'url('+ product.image[0].url+')'\">\n                <ul class=\"product__item__pic__hover\">\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                </ul>\n              </div>\n              <div class=\"product__item__text\">\n                <h6><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h6>\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product__pagination\">\n          <a href=\"#\">1</a>\n          <a href=\"#\">2</a>\n          <a href=\"#\">3</a>\n          <a href=\"#\"><i class=\"fas fa-long-arrow-alt-right\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Thanh toán</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Thanh toán</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"checkout spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <h6><span class=\"icon_tag_alt\"></span>Bạn có mã giảm giá? <a routerLink=\"/cart\">Ấn vào đây</a> và nhập mã của\r\n          bạn\r\n        </h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"checkout__form\">\r\n      <h4>Chi tiết hóa đơn</h4>\r\n      <form [formGroup]=\"customerInfoForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 col-md-6\">\r\n            <div class=\"checkout__input\">\r\n              <p>Họ và tên:<span>*</span></p>\r\n              <input type=\"text\" formControlName=\"name\"\r\n                     placeholder=\"Họ tên người nhận\">\r\n            </div>\r\n            <div class=\"checkout__input\">\r\n              <p>Địa chỉ<span>*</span></p>\r\n              <input type=\"text\" placeholder=\"Địa chỉ nhận hàng\" formControlName=\"address\"\r\n                     class=\"checkout__input__add\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"checkout__input\">\r\n                  <p>Số điện thoại<span>*</span></p>\r\n                  <input type=\"text\" placeholder=\"Số điện thoại người nhận\"\r\n                         formControlName=\"phoneNumber\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"checkout__input\">\r\n                  <p>Email<span>*</span></p>\r\n                  <input type=\"text\" placeholder=\"Địa chỉ email\" formControlName=\"email\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-6\">\r\n            <div class=\"checkout__order\">\r\n              <h4>Đơn hàng của bạn</h4>\r\n              <div class=\"checkout__order__products\">Sản phẩm <span>Giá</span></div>\r\n              <ul *ngFor=\"let item of items\">\r\n                <li>{{item.product.name}} x {{item.quantity}}\r\n                  <span>{{item.quantity * (item.product.price * (1 - item.product.saleOff / 100))}}đ</span></li>\r\n              </ul>\r\n              <div class=\"checkout__order__subtotal\">Tổng phụ thu <span>{{total}}đ</span></div>\r\n              <div class=\"checkout__order__total\">Tổng tiền <span>{{total}}đ</span></div>\r\n              <div class=\"checkout__input__checkbox\">\r\n                <label for=\"paypal\">\r\n                  Thanh toán khi nhận hàng\r\n                  <input type=\"checkbox\" id=\"paypal\" checked disabled>\r\n                  <span class=\"checkmark\"></span>\r\n                </label>\r\n              </div>\r\n              <button type=\"submit\" class=\"site-btn\" (click)=\"submitCheckoutForm(items,shoppingCart.id)\">Đặt hàng\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Liên hệ</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Liên hệ</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"contact spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_phone\"></span>\r\n          <h4>Điện thoại</h4>\r\n          <p>0382546945</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_pin_alt\"></span>\r\n          <h4>Địa chỉ</h4>\r\n          <p>10 Xã Đàn, Đống Đa, Hà Nội</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_clock_alt\"></span>\r\n          <h4>Thời gian mở cửa</h4>\r\n          <p>8 giờ tới 22 giờ</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\r\n        <div class=\"contact__widget\">\r\n          <span class=\"icon_mail_alt\"></span>\r\n          <h4>Email</h4>\r\n          <p>help@gmail.com</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"map\">\r\n  <iframe\r\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd\"\r\n    height=\"500\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n  <div class=\"map-inside\">\r\n    <i class=\"icon_pin\"></i>\r\n    <div class=\"inside-widget\">\r\n      <h4>Hà Nội</h4>\r\n      <ul>\r\n        <li>Điện thoại: 0382546945</li>\r\n        <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"contact-form spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"contact__form__title\">\r\n          <h2>Để lại lời nhắn</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"messageForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <input type=\"text\" placeholder=\"Tện bạn\">\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <input type=\"text\" placeholder=\"Địa chỉ email\">\r\n        </div>\r\n        <div class=\"col-lg-12 text-center\">\r\n          <textarea placeholder=\"Tin nhắn\"></textarea>\r\n          <button type=\"submit\" class=\"site-btn\">Gửi tin nhắn</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFavoriteFavoriteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Sản phẩm yêu thích</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Sản phẩm yêu thích</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of items; index as i\">\n              <td class=\"shoping__cart__item\">\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\">\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\n              </td>\n              <td class=\"shoping__cart__item__close\">\n                <span class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__btns\">\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\n          <a routerLink=\"/favorite\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\n            Cập nhật</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul *ngFor=\"let category of listCategory\">\r\n            <li><a [routerLink]=\"['category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"hero__item set-bg\" [style.background]=\"'url(../../../assets/static/img/hero/banner.jpg)'\">\r\n          <div class=\"hero__text\">\r\n            <span>THỰC PHẨM SẠCH</span>\r\n            <h2>Rau củ <br/>100% tự nhiên</h2>\r\n            <p>Miễn phí vẫn chuyển trong 5km</p>\r\n            <a routerLink=\"/shop\" class=\"primary-btn\">MUA NGAY</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"categories\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"categories__slider owl-carousel\">\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-1.jpg)'\">\r\n            <h5><a href=\"#\">Hoa quả sạch</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-2.jpg)'\">\r\n            <h5><a href=\"#\">Thực phẩm dinh dưỡng</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-3.jpg)'\">\r\n            <h5><a href=\"#\">Rau củ</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-4.jpg)'\">\r\n            <h5><a href=\"#\">Nước hoa quả</a></h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"categories__item set-bg\"\r\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-5.jpg)'\">\r\n            <h5><a href=\"#\">Thịt</a></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"featured spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"section-title\">\r\n          <h2>Sản phẩm nổi bật</h2>\r\n        </div>\r\n        <div class=\"featured__controls\">\r\n          <ul>\r\n            <li class=\"active\" data-filter=\"*\">Tất cả</li>\r\n            <li data-filter=\".fresh-meat\">Thịt</li>\r\n            <li data-filter=\".fresh-meat\">Đồ uống</li>\r\n            <li data-filter=\".vegetables\">Rau củ</li>\r\n            <li data-filter=\".fastfood\">Sản phẩm khác</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row featured__filter\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat\" *ngFor=\"let product of listProduct\">\r\n        <div class=\"featured__item\">\r\n          <div class=\"featured__item__pic set-bg\" *ngIf=\"product.image!=null\"\r\n               [ngStyle]=\"{'background-image':'url('+product.image[0].url+')'}\">\r\n            <ul class=\"featured__item__pic__hover\">\r\n              <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n              <li *ngIf=\"currentUser==null\">\r\n                <a [routerLink]=\"['/cart', { id:product.id }]\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n              </li>\r\n              <li *ngIf=\"currentUser!=null\">\r\n                <a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"featured__item__text\">\r\n            <h6><a [routerLink]=\"['product',product.id]\">{{product.name}}</a></h6>\r\n            <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"latest-product spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Sản phẩm mới nhất</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Sản phẩm mua nhiều</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"latest-product__text\">\r\n          <h4>Đánh giá sản phẩm</h4>\r\n          <div class=\"latest-product__slider owl-carousel\">\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                 *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"latest-prdouct__slider__item\">\r\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                <div class=\"latest-product__item__pic\">\r\n                  <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                       style=\"width: 110px; height: 110px\" alt=\"\">\r\n                </div>\r\n                <div class=\"latest-product__item__text\">\r\n                  <h6>{{product.name}}</h6>\r\n                  <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductDetailProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\" *ngIf=\"currentProduct != null\">\r\n          <h2>{{currentProduct.name}}</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <a routerLink=\"/\">{{currentProduct.category.name}}</a>\r\n            <span>{{currentProduct.name}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"product-details spad\" *ngIf=\"currentProduct != null\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6\">\r\n        <div class=\"product__details__pic\">\r\n          <div class=\"product__details__pic__item\">\r\n            <img class=\"product__details__pic__item--large\" *ngIf=\"currentProduct.image!=null\"\r\n                 [src]=\"currentProduct.image[0].url\" alt=\"\">\r\n          </div>\r\n          <div class=\"product__details__pic__slider owl-carousel\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-2.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-1.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-3.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-2.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-5.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-3.jpg\" alt=\"\">\r\n            <img data-imgbigurl=\"../../../assets/static/img/product/details/product-details-4.jpg\"\r\n                 src=\"../../../assets/static/img/product/details/thumb-4.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6\">\r\n        <div class=\"product__details__text\">\r\n          <h3>{{currentProduct.name}}</h3>\r\n          <div class=\"rating\">\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=1?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=2?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=3?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=4?'rated':'unrated'}}\"></i></span>\r\n            <span><i class=\"fas fa-star mr-2 {{starAverage==5?'rated':'unrated'}}\"></i></span>\r\n            <span>({{listReview.length}} reviews)</span>\r\n          </div>\r\n          <div class=\"product__details__price\">{{currentProduct.price * (1 - currentProduct.saleOff / 100)}} đồng</div>\r\n          <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\r\n          <div class=\"product__details__quantity\">\r\n            <div class=\"quantity\">\r\n              <div class=\"pro-qty\">\r\n                <input type=\"text\" value=\"1\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a *ngIf=\"currentUser==null\" [routerLink]=\"['/cart', { id:currentProduct.id }]\" class=\"primary-btn\">Thêm vào\r\n            giỏ hàng</a>\r\n          <a *ngIf=\"currentUser!=null\" (click)=\"addItemToShoppingCart(currentProduct.id, shoppingCart.id)\"\r\n             class=\"primary-btn\">Thêm vào giỏ hàng</a>\r\n          <a [routerLink]=\"['/favorite', { id:currentProduct.id }]\" class=\"heart-icon\"><span\r\n            class=\"icon_heart_alt\"></span></a>\r\n          <ul>\r\n            <li><b>Trạng thái</b> <span>{{currentProduct.status == true ? \"Còn hàng\" : \"Hết hàng\"}}</span></li>\r\n            <li><b>Vận chuyển</b><span>Giao hàng nhanh 2h trong nội thành (đặt trước 17:00)</span></li>\r\n            <li><b>Khối lượng</b> <span>{{currentProduct.mass}}g</span></li>\r\n            <li><b>Thành phần chính</b> <span>{{currentProduct.ingredient}}</span></li>\r\n            <li><b>Bảo quản</b> <span>{{currentProduct.preservation}}</span></li>\r\n            <li><b>Share on</b>\r\n              <div class=\"share\">\r\n                <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n                <a href=\"#\"><i class=\"fab fa-pinterest\"></i></a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"product__details__tab\">\r\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tabs-1\" role=\"tab\"\r\n                 aria-selected=\"true\">Mô tả</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-2\" role=\"tab\"\r\n                 aria-selected=\"false\">Thông tin</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-3\" role=\"tab\"\r\n                 aria-selected=\"false\">Đánh giá <span>({{listReview.length}})</span></a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane active\" id=\"tabs-1\" role=\"tabpanel\">\r\n              <div class=\"product__details__tab__desc\">\r\n                <h6><b>Giới thiệu {{currentProduct.name}} ({{currentProduct.mass}}g)</b></h6>\r\n                <p [innerHTML]=\"currentProduct.description\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tabs-2\" role=\"tabpanel\">\r\n              <div class=\"product__details__tab__desc\">\r\n                <h6>Thông tin sản phẩm</h6>\r\n                <p><b>Khối lượng:</b> {{currentProduct.mass}}g</p>\r\n                <p><b>Thành phần:</b> {{currentProduct.ingredient}}</p>\r\n                <p><b>Bảo quản:</b> {{currentProduct.preservation}}</p>\r\n                <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tabs-3\" role=\"tabpanel\">\r\n              <h5>Đánh giá sản phẩm</h5>\r\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length!=0\">\r\n                <div class=\"post\" *ngFor=\"let review of listReview\">\r\n                  <div class=\"user-block\">\r\n                    <img class=\"img-circle img-bordered-sm\" src=\"assets/static/img/user.png\" alt=\"user\">\r\n                    <span class=\"username\" *ngIf=\"review.user != null\">\r\n                          {{review.user.email}}\r\n                        </span>\r\n                    <span class=\"description\">{{review.createDate.getDay()}}/ {{review.createDate.getMonth()}}\r\n                      / {{review.createDate.getFullYear()}}</span>\r\n                  </div>\r\n                  <div class=\"rating\">\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=1?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=2?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=3?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=4?'rated':'unrated'}}\"></i></span>\r\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate==5?'rated':'unrated'}}\"></i></span>\r\n                  </div>\r\n                  <br>\r\n                  <!-- /.user-block -->\r\n                  <p [innerHTML]=\"review.comment\"></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length==0\">\r\n                <p>Chưa có đánh giá nào</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"related-product\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"section-title related__product__title\">\r\n          <h2>SẢN PHẨM LIÊN QUAN</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let product of relatedProducts\">\r\n        <div class=\"product__item\">\r\n          <div class=\"product__item__pic set-bg\" *ngIf=\"product.image != null\"\r\n               [style.background]=\"'url('+product.image[0].url+')'\">\r\n            <ul class=\"product__item__pic__hover\">\r\n              <li><a [routerLink]=\"['/favorite', { id:currentProduct.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n              <li><a [routerLink]=\"['/cart', { id:currentProduct.id }]\"><i class=\"fa fa-shopping-cart\"></i></a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"product__item__text\">\r\n            <h6><a [routerLink]=\"['../../product',product.id]\">{{product.name}}</a></h6>\r\n            <h5>{{product.price * (1 - product.saleOff / 100)}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserShopShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\" [value]=\"query==null?'':query\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Cửa hàng</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Cửa hàng</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"product spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-5\">\r\n        <div class=\"sidebar\">\r\n          <div class=\"sidebar__item\">\r\n            <h4>Danh mục sản phẩm</h4>\r\n            <ul *ngFor=\"let category of listCategory\">\r\n              <li><a [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"sidebar__item\">\r\n            <h4>Price</h4>\r\n            <div class=\"price-range-wrap\">\r\n              <div class=\"price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content\"\r\n                   data-min=\"10\" data-max=\"540\">\r\n                <div class=\"ui-slider-range ui-corner-all ui-widget-header\"></div>\r\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\r\n                <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default\"></span>\r\n              </div>\r\n              <div class=\"range-slider\">\r\n                <div class=\"price-input\">\r\n                  <input type=\"text\" id=\"minamount\">\r\n                  <input type=\"text\" id=\"maxamount\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"sidebar__item\">\r\n            <div class=\"latest-product__text\">\r\n              <h4>Sản phẩm mới</h4>\r\n              <div class=\"latest-product__slider owl-carousel\">\r\n                <div class=\"latest-prdouct__slider__item\">\r\n                  <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\r\n                     *ngFor=\"let product of listProductLatest\">\r\n                    <div class=\"latest-product__item__pic\">\r\n                      <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                           style=\"width: 110px; height: 110px\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"latest-product__item__text\">\r\n                      <h6>{{product.name}}</h6>\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n                <div class=\"latest-prdouct__slider__item\">\r\n                  <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\r\n                    <div class=\"latest-product__item__pic\">\r\n                      <img [src]=\"product.image[0].url\" *ngIf=\"product.image != null\"\r\n                           style=\"width: 110px; height: 110px\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"latest-product__item__text\">\r\n                      <h6>{{product.name}}</h6>\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9 col-md-7\">\r\n        <div class=\"product__discount\">\r\n          <div class=\"section-title product__discount__title\">\r\n            <h2>Giảm giá</h2>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"product__discount__slider owl-carousel\">\r\n              <div class=\"col-lg-4\" *ngFor=\"let product of listProductSaleOff\">\r\n                <div class=\"product__discount__item\">\r\n                  <div class=\"product__discount__item__pic set-bg\" *ngIf=\"product.image != null\"\r\n                       [style.background]=\"'url('+product.image[0].url+')'\" style=\"background-size: 270px 270px\">\r\n                    <div class=\"product__discount__percent\">-{{product.saleOff}}%</div>\r\n                    <ul class=\"product__item__pic__hover\">\r\n                      <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n                      <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n                      <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\r\n                        class=\"fa fa-shopping-cart\"></i></a></li>\r\n                      <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i\r\n                        class=\"fa fa-shopping-cart\"></i></a></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"product__discount__item__text\">\r\n                    <span>{{product.category.name}}</span>\r\n                    <h5><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h5>\r\n                    <div class=\"product__item__price\">{{product.price * (1 - product.saleOff / 100)}}đ\r\n                      <span>{{product.price * (1 - product.saleOff / 100)}}đ</span></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"filter__item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-5\">\r\n              <div class=\"filter__sort\">\r\n                <span>Sắp xếp</span>\r\n                <select>\r\n                  <option value=\"0\">Default</option>\r\n                  <option value=\"0\">Default</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4\">\r\n              <div class=\"filter__found\">\r\n                <h6><span>{{listProduct.length}}</span> sản phẩm</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-3\">\r\n              <div class=\"filter__option\">\r\n                <span class=\"icon_grid-2x2\"></span>\r\n                <span class=\"icon_ul\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\r\n            <div class=\"product__item\">\r\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\r\n                   [style.background]=\"'url('+ product.image[0].url+')'\">\r\n                <ul class=\"product__item__pic__hover\">\r\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\r\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\r\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\r\n                    class=\"fa fa-shopping-cart\"></i></a></li>\r\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id,shoppingCart.id)\"><i\r\n                    class=\"fa fa-shopping-cart\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"product__item__text\">\r\n                <h6><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h6>\r\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product__pagination\">\r\n          <a href=\"#\">1</a>\r\n          <a href=\"#\">2</a>\r\n          <a href=\"#\">3</a>\r\n          <a href=\"#\"><i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserShoppingCartShoppingCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<section class=\"hero hero-normal\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"hero__categories\">\r\n          <div class=\"hero__categories__all\">\r\n            <i class=\"fa fa-bars\"></i>\r\n            <span>Danh mục sản phẩm</span>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let category of listCategory\"><a\r\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"hero__search\">\r\n          <div class=\"hero__search__form\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n              <div class=\"hero__search__categories\">\r\n                Tất cả\r\n                <span class=\"arrow_carrot-down\"></span>\r\n              </div>\r\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\r\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\r\n            </form>\r\n          </div>\r\n          <div class=\"hero__search__phone\">\r\n            <div class=\"hero__search__phone__icon\">\r\n              <i class=\"fa fa-phone\"></i>\r\n            </div>\r\n            <div class=\"hero__search__phone__text\">\r\n              <h5>038115225</h5>\r\n              <span>Hỗ trợ 24/7</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <div class=\"breadcrumb__text\">\r\n          <h2>Giỏ hàng</h2>\r\n          <div class=\"breadcrumb__option\">\r\n            <a routerLink=\"/\">Trang chủ</a>\r\n            <span>Giỏ hàng</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"shoping-cart spad\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"shoping__cart__table\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th class=\"shoping__product\">Sản phẩm</th>\r\n              <th>Giá</th>\r\n              <th>Số lượng</th>\r\n              <th>Tổng tiền</th>\r\n              <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of items; index as i\">\r\n              <td class=\"shoping__cart__item\">\r\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\">\r\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\r\n              </td>\r\n              <td class=\"shoping__cart__price\">\r\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\r\n              </td>\r\n              <td class=\"shoping__cart__quantity\">\r\n                <div class=\"quantity\">\r\n                  <div class=\"pro-qty\">\r\n                    <span *ngIf=\"currentUser==null\" class=\"dec qtybtn\"\r\n                          (click)=\"decreaseProduct(item.product.id, i)\">-</span>\r\n                    <span *ngIf=\"currentUser!=null\" class=\"dec qtybtn\"\r\n                          (click)=\"decreaseItemToShoppingCart(item.product.id, shoppingCart.id)\">-</span>\r\n                    <input type=\"text\" value=\"{{item.quantity}}\">\r\n                    <span *ngIf=\"currentUser==null\" class=\"inc qtybtn\"\r\n                          (click)=\"addProductToCart(item.product.id, item)\">+</span>\r\n                    <span *ngIf=\"currentUser!=null\" class=\"inc qtybtn\"\r\n                          (click)=\"addItemToShoppingCart(item.product.id, shoppingCart.id)\">+</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td class=\"shoping__cart__total\">\r\n                {{item.quantity * item.product.price * (1 - item.product.saleOff / 100)}}đ\r\n              </td>\r\n              <td class=\"shoping__cart__item__close\">\r\n                <span *ngIf=\"currentUser==null\" class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\r\n                <span *ngIf=\"currentUser!=null\" class=\"icon_close\" (click)=\"removeItemFromCart(item.id)\"></span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"shoping__cart__btns\">\r\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\r\n          <a href=\"/cart\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\r\n            Cập nhật giở hàng</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"shoping__continue\">\r\n          <div class=\"shoping__discount\">\r\n            <h5>Mã giảm giá</h5>\r\n            <form [formGroup]=\"discountForm\">\r\n              <input type=\"text\" placeholder=\"Nhập mã giảm gái\">\r\n              <button type=\"submit\" class=\"site-btn\">Xác nhận</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"shoping__checkout\">\r\n          <h5>Tổng tiền</h5>\r\n          <ul>\r\n            <li>Phụ thu <span>{{total}} đồng</span></li>\r\n            <li>Tổng tiền <span>{{total}} đồng</span></li>\r\n          </ul>\r\n          <a routerLink=\"/checkout\" class=\"primary-btn\">Thanh toán</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserOrderUserOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>{{status ? \"Sản phẩm đã mua\" : \"Đơn hàng chờ xác nhận\"}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{status ? \"Đã mua\" : \"Chờ xác nhận\"}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th></th>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let product of listProduct; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                <img *ngIf=\"product.image != null\" [src]=\"product.image[0].url\" alt=\"\">\n              </td>\n              <td class=\"shoping__cart__item\">\n                <a [routerLink]=\"['../product',product.id]\" style=\"font-size: 16px\"><h5>{{product.name}}  </h5></a>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{product.price * (1 - product.saleOff / 100)}}đ\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-primary\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-review\" (click)=\"getProductId(currentUser.id,product.id)\">\n                      <i class=\"fas fa-edit\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"!status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Mã đơn hàng</th>\n              <th>Ngày đặt</th>\n              <th>Trạng thái</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let orders of listOrders; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                {{orders.id}}\n              </td>\n              <td>\n                {{orders.createDate}}\n              </td>\n              <td>\n                {{orders.status ? \"Đã xác nhận\" : \"Chưa xác nhận\"}}\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-delete\" (click)=\"getOrderId(orders.id)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"modal fade\" id=\"modal-review\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Đánh giá sản phẩm {{currentReview == null ? \"\" : \" (Đã đánh giá)\"}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"rating text-center\" *ngIf=\"currentReview== null\">\n          <span><i class=\"fas fa-star mr-2 {{star>=1?'rated':'unrated'}}\" id=\"one\" (click)=\"rate(1)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=2?'rated':'unrated'}}\" id=\"tưo\" (click)=\"rate(2)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=3?'rated':'unrated'}}\" id=\"three\" (click)=\"rate(3)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=4?'rated':'unrated'}}\" id=\"four\" (click)=\"rate(4)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star==5?'rated':'unrated'}}\" id=\"five\" (click)=\"rate(5)\"></i></span>\n          <span>({{star}} sao)</span>\n        </div>\n        <div class=\"rating text-center\" *ngIf=\"currentReview!= null\">\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=1?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=2?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=3?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=4?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate==5?'rated':'unrated'}}\"></i></span>\n          <span>({{currentReview.evaluate}} sao)</span>\n        </div>\n        <br>\n        <div class=\"form-group\">\n          <label for=\"comment\">Bình luận</label>\n          <textarea class=\"textarea\" name=\"comment\" id=\"comment\"\n                    style=\"width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createReview(star, productId)\">Xác nhận</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div class=\"modal fade\" id=\"modal-delete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Hủy đơn hàng</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Bạn có muốn hủy đơn hàng này không ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder(id)\">Xóa</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/admin/admin.component.scss":
  /*!********************************************!*\
    !*** ./src/app/admin/admin.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
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
    /*! ../service/order/orders.service */
    "./src/app/service/order/orders.service.ts");
    /* harmony import */


    var _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/warehouse-bill/warehouse-bill.service */
    "./src/app/service/warehouse-bill/warehouse-bill.service.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(ordersService, warehouseBillService) {
        _classCallCheck(this, AdminComponent);

        this.ordersService = ordersService;
        this.warehouseBillService = warehouseBillService;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var monthTotalBought, monthTotalGet, i, totalSpendByBought, totalGetByMonth, areaChartData, barChartData, stackedBarChartCanvas, stackedBarChartData, stackedBarChartOptions, stackedBarChart;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.currentYear = new Date().getFullYear();
                    monthTotalBought = [];
                    monthTotalGet = [];
                    i = 0;

                  case 4:
                    if (!(i < 12)) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 7;
                    return this.sumTotalPriceHaveBought(i + 1, this.currentYear);

                  case 7:
                    totalSpendByBought = _context.sent;
                    _context.next = 10;
                    return this.sumTotalPriceHaveGot(i + 1, this.currentYear);

                  case 10:
                    totalGetByMonth = _context.sent;

                    if (totalSpendByBought == null) {
                      totalSpendByBought = 0;
                    }

                    if (totalGetByMonth == null) {
                      totalGetByMonth = 0;
                    }

                    monthTotalBought.push(totalSpendByBought);
                    monthTotalGet.push(totalGetByMonth);

                  case 15:
                    i++;
                    _context.next = 4;
                    break;

                  case 18:
                    areaChartData = {
                      labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                      datasets: [{
                        label: 'Chi',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: monthTotalBought
                      }, {
                        label: 'Thu',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: monthTotalGet
                      }]
                    }; // @ts-ignore

                    barChartData = jQuery.extend(true, {}, areaChartData);
                    stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d'); // @ts-ignore

                    stackedBarChartData = jQuery.extend(true, {}, barChartData);
                    stackedBarChartOptions = {
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        xAxes: [{
                          stacked: true
                        }],
                        yAxes: [{
                          stacked: true
                        }]
                      }
                    };
                    stackedBarChart = new Chart(stackedBarChartCanvas, {
                      type: 'bar',
                      data: stackedBarChartData,
                      options: stackedBarChartOptions
                    });

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sumTotalPriceHaveBought",
        value: function sumTotalPriceHaveBought(month, year) {
          return this.warehouseBillService.sumTotalPriceHaveBought(month, year).toPromise();
        }
      }, {
        key: "sumTotalPriceHaveGot",
        value: function sumTotalPriceHaveGot(month, year) {
          return this.ordersService.sumTotalPriceGet(month, year).toPromise();
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }, {
        type: _service_warehouse_bill_warehouse_bill_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseBillService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout-with-shared/layout-with-shared.component */
    "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/homepage/homepage.component */
    "./src/app/user/homepage/homepage.component.ts");
    /* harmony import */


    var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./helper/admin-auth-guard */
    "./src/app/helper/admin-auth-guard.ts");
    /* harmony import */


    var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/shop/shop.component */
    "./src/app/user/shop/shop.component.ts");
    /* harmony import */


    var _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/contact/contact.component */
    "./src/app/user/contact/contact.component.ts");
    /* harmony import */


    var _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/product-detail/product-detail.component */
    "./src/app/user/product-detail/product-detail.component.ts");
    /* harmony import */


    var _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/shopping-cart/shopping-cart.component */
    "./src/app/user/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user/checkout/checkout.component */
    "./src/app/user/checkout/checkout.component.ts");
    /* harmony import */


    var _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user/category-detail/category-detail.component */
    "./src/app/user/category-detail/category-detail.component.ts");
    /* harmony import */


    var _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user/favorite/favorite.component */
    "./src/app/user/favorite/favorite.component.ts");
    /* harmony import */


    var _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user/user-order/user-order.component */
    "./src/app/user/user-order/user-order.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");

    var routes = [{
      path: 'admin',
      component: _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__["LayoutWithSharedComponent"],
      canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]],
      children: [{
        path: '',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"]
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | product-product-module */
          [__webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null,
          /*! ./product/product.module */
          "./src/app/product/product.module.ts")).then(function (module) {
            return module.ProductModule;
          });
        }
      }, {
        path: 'category',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | category-category-module */
          [__webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null,
          /*! ./category/category.module */
          "./src/app/category/category.module.ts")).then(function (module) {
            return module.CategoryModule;
          });
        }
      }, {
        path: 'warehouse',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | warehouse-warehouse-module */
          [__webpack_require__.e("common"), __webpack_require__.e("warehouse-warehouse-module")]).then(__webpack_require__.bind(null,
          /*! ./warehouse/warehouse.module */
          "./src/app/warehouse/warehouse.module.ts")).then(function (module) {
            return module.WarehouseModule;
          });
        }
      }, {
        path: 'warehouse-bill',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | warehouse-bill-warehouse-bill-module */
          [__webpack_require__.e("common"), __webpack_require__.e("warehouse-bill-warehouse-bill-module")]).then(__webpack_require__.bind(null,
          /*! ./warehouse-bill/warehouse-bill.module */
          "./src/app/warehouse-bill/warehouse-bill.module.ts")).then(function (module) {
            return module.WarehouseBillModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orders-orders-module */
          "orders-orders-module").then(__webpack_require__.bind(null,
          /*! ./orders/orders.module */
          "./src/app/orders/orders.module.ts")).then(function (module) {
            return module.OrdersModule;
          });
        }
      }]
    }, {
      path: '',
      component: _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
    }, {
      path: 'shop',
      component: _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"]
    }, {
      path: 'contact',
      component: _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
    }, {
      path: 'product/:id',
      component: _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"]
    }, {
      path: 'cart',
      component: _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"]
    }, {
      path: 'favorite',
      component: _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteComponent"]
    }, {
      path: 'checkout',
      component: _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"]
    }, {
      path: 'category/:id',
      component: _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDetailComponent"]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'order',
      component: _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_15__["UserOrderComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'market-frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/layout-with-shared/layout-with-shared.component */
    "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./helper/jwt-interceptor */
    "./src/app/helper/jwt-interceptor.ts");
    /* harmony import */


    var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./helper/error-interceptor */
    "./src/app/helper/error-interceptor.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user/homepage/homepage.component */
    "./src/app/user/homepage/homepage.component.ts");
    /* harmony import */


    var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user/shop/shop.component */
    "./src/app/user/shop/shop.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user/contact/contact.component */
    "./src/app/user/contact/contact.component.ts");
    /* harmony import */


    var _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./user/product-detail/product-detail.component */
    "./src/app/user/product-detail/product-detail.component.ts");
    /* harmony import */


    var _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/shopping-cart/shopping-cart.component */
    "./src/app/user/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./user/checkout/checkout.component */
    "./src/app/user/checkout/checkout.component.ts");
    /* harmony import */


    var _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./user/category-detail/category-detail.component */
    "./src/app/user/category-detail/category-detail.component.ts");
    /* harmony import */


    var _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./user/favorite/favorite.component */
    "./src/app/user/favorite/favorite.component.ts");
    /* harmony import */


    var _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./user/user-order/user-order.component */
    "./src/app/user/user-order/user-order.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_6__["LayoutWithSharedComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _user_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_18__["HomepageComponent"], _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__["ShopComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _user_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"], _user_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_23__["ProductDetailComponent"], _user_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_24__["ShoppingCartComponent"], _user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__["CheckoutComponent"], _user_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_26__["CategoryDetailComponent"], _user_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_27__["FavoriteComponent"], _user_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_28__["UserOrderComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(activatedRoute, router, authenticationService) {
        var _this = this;

        _classCallCheck(this, LoginComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator = _createForOfIteratorHelper(roleList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var role = _step.value;

              if (role.name === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this.authenticationService.currentUserValue) {
          if (this.hasRoleAdmin) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.submitted = true;
          this.loading = true;
          this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            localStorage.setItem('ACCESS_TOKEN', data.accessToken);
            var roleList = data.roles;

            var _iterator2 = _createForOfIteratorHelper(roleList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var role = _step2.value;

                if (role.name === 'ROLE_ADMIN') {
                  _this2.returnUrl = "/admin";
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this2.router.navigate([_this2.returnUrl])["finally"](function () {});

            $(function () {
              var Toast = Swal.mixin({
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
          }, function () {
            _this2.loading = false;
            $(function () {
              var Toast = Swal.mixin({
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
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.css":
  /*!******************************************************!*\
    !*** ./src/app/auth/register/register.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(userService, router) {
        _classCallCheck(this, RegisterComponent);

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

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(document).ready(function () {
            $('#register').validate({
              rules: {
                email: {
                  required: true,
                  email: true
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
                }
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
              errorPlacement: function errorPlacement(error, element) {
                error.addClass('invalid-feedback');
                element.closest('.input-group').append(error);
              },
              highlight: function highlight(element, errorClass, validClass) {
                $(element).addClass('is-invalid');
              },
              unhighlight: function unhighlight(element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
              }
            });
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this3 = this;

          this.isSubmitted = true;
          var user = {
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            fullName: this.registerForm.value.fullName
          };

          if (user.email !== "" && user.password !== "" && user.fullName !== "") {
            this.userService.register(user).subscribe(function () {
              _this3.registerForm.reset();

              _this3.router.navigate(['/login'])["finally"](function () {});

              $(function () {
                var Toast = Swal.mixin({
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
                  title: 'Đăng ký thất bại'
                });
              });
            });
          } else {
            $(function () {
              var Toast = Swal.mixin({
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
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/auth/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/helper/admin-auth-guard.ts":
  /*!********************************************!*\
    !*** ./src/app/helper/admin-auth-guard.ts ***!
    \********************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppHelperAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var AdminAuthGuard = /*#__PURE__*/function () {
      function AdminAuthGuard(router, authService) {
        var _this4 = this;

        _classCallCheck(this, AdminAuthGuard);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (next) {
          _this4.currentUser = next;
        });
      }

      _createClass(AdminAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var hasRoleAdmin = false;

          if (this.currentUser) {
            var roleList = this.currentUser.roles;

            var _iterator3 = _createForOfIteratorHelper(roleList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var role = _step3.value;

                if (role.name === 'ROLE_ADMIN') {
                  hasRoleAdmin = true;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (hasRoleAdmin) {
              return true;
            } else {
              this.authService.logout();
              this.router.navigate(['/', 'admin', 'dashboard'], {
                queryParams: {
                  login: true
                },
                queryParamsHandling: 'merge'
              });
              return false;
            }
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], {
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
            var roleList = this.currentUser.roles;
            var hasRoleAdmin = false;

            var _iterator4 = _createForOfIteratorHelper(roleList),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var role = _step4.value;

                if (role.name === 'ROLE_ADMIN') {
                  hasRoleAdmin = true;
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return hasRoleAdmin;
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], {
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

      return AdminAuthGuard;
    }();

    AdminAuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AdminAuthGuard);
    /***/
  },

  /***/
  "./src/app/helper/error-interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/helper/error-interceptor.ts ***!
    \*********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppHelperErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService, router) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this5 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {// do stuff with response if you want
            }
          }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (err.status === 401) {
                _this5.authenticationService.logout();

                _this5.router.navigate(['/login']);
              } else if (err.status === 403) {
                _this5.router.navigate(['/']);
              }
            }
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/helper/jwt-interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/helper/jwt-interceptor.ts ***!
    \*******************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelperJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
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


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.accessToken) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.accessToken)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/layout/layout-with-shared/layout-with-shared.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutWithSharedLayoutWithSharedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQtd2l0aC1zaGFyZWQvbGF5b3V0LXdpdGgtc2hhcmVkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout-with-shared/layout-with-shared.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LayoutWithSharedComponent */

  /***/
  function srcAppLayoutLayoutWithSharedLayoutWithSharedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutWithSharedComponent", function () {
      return LayoutWithSharedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutWithSharedComponent = /*#__PURE__*/function () {
      function LayoutWithSharedComponent() {
        _classCallCheck(this, LayoutWithSharedComponent);
      }

      _createClass(LayoutWithSharedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutWithSharedComponent;
    }();

    LayoutWithSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout-with-shared',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout-with-shared.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout-with-shared.component.css */
      "./src/app/layout/layout-with-shared/layout-with-shared.component.css"))["default"]]
    })], LayoutWithSharedComponent);
    /***/
  },

  /***/
  "./src/app/service/auth/authentication.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/service/auth/authentication.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServiceAuthAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          var _this6 = this;

          return this.http.post(API_URL + '/login', {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            localStorage.setItem('user', JSON.stringify(user));

            _this6.currentUserSubject.next(user);

            _this6.update.emit('login');

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('user');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/service/category/category.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/category/category.service.ts ***!
    \******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServiceCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getAllCategory",
        value: function getAllCategory() {
          return this.http.get(API_URL + '/categories');
        }
      }, {
        key: "createCategory",
        value: function createCategory(category) {
          return this.http.post(API_URL + '/categories', category);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          return this.http.get(API_URL + "/categories/".concat(id));
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(id, category) {
          return this.http.put(API_URL + "/categories/".concat(id), category);
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          return this.http["delete"](API_URL + "/categories/".concat(id));
        }
      }, {
        key: "getAllProductByCategory",
        value: function getAllProductByCategory(id) {
          return this.http.get(API_URL + "/categories/".concat(id, "/products"));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/service/customer-info/customer-info.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/service/customer-info/customer-info.service.ts ***!
    \****************************************************************/

  /*! exports provided: CustomerInfoService */

  /***/
  function srcAppServiceCustomerInfoCustomerInfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerInfoService", function () {
      return CustomerInfoService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var CustomerInfoService = /*#__PURE__*/function () {
      function CustomerInfoService(http) {
        _classCallCheck(this, CustomerInfoService);

        this.http = http;
      }

      _createClass(CustomerInfoService, [{
        key: "getAllCustomerInfo",
        value: function getAllCustomerInfo() {
          return this.http.get(API_URL + '/customer-infos');
        }
      }, {
        key: "createCustomerInfo",
        value: function createCustomerInfo(customerInfo) {
          return this.http.post(API_URL + '/customer-infos', customerInfo);
        }
      }, {
        key: "updateCustomerInfo",
        value: function updateCustomerInfo(id, customerInfo) {
          return this.http.put(API_URL + "/customer-infos/".concat(id), customerInfo);
        }
      }, {
        key: "deleteCustomerInfo",
        value: function deleteCustomerInfo(id) {
          return this.http["delete"](API_URL + "/customer-infos/".concat(id));
        }
      }, {
        key: "getCustomerInfo",
        value: function getCustomerInfo(id) {
          return this.http.get(API_URL + "/customer-infos/".concat(id));
        }
      }]);

      return CustomerInfoService;
    }();

    CustomerInfoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CustomerInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerInfoService);
    /***/
  },

  /***/
  "./src/app/service/item/item.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/item/item.service.ts ***!
    \**********************************************/

  /*! exports provided: ItemService */

  /***/
  function srcAppServiceItemItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../warehouse-bill-detail/warehouse-bill-detail.service */
    "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
    /* harmony import */


    var _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../order-detail/order-detail.service */
    "./src/app/service/order-detail/order-detail.service.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ItemService = /*#__PURE__*/function () {
      function ItemService(http, warehouseBillDetailService, orderDetailService) {
        _classCallCheck(this, ItemService);

        this.http = http;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.orderDetailService = orderDetailService;
      }

      _createClass(ItemService, [{
        key: "getAllItem",
        value: function getAllItem() {
          return this.http.get(API_URL + '/items');
        }
      }, {
        key: "createItem",
        value: function createItem(item) {
          return this.http.post(API_URL + '/items', item);
        }
      }, {
        key: "getItem",
        value: function getItem(id) {
          return this.http.get(API_URL + "/items/".concat(id));
        }
      }, {
        key: "updateItem",
        value: function updateItem(id, item) {
          return this.http.put(API_URL + "/items/".concat(id), item);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(id) {
          return this.http["delete"](API_URL + "/items/".concat(id));
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(items, productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var sumInput, sumOutput, item, index, i, item1;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.warehouseBillDetailService.sumAmount(productId).toPromise();

                  case 2:
                    sumInput = _context2.sent;
                    _context2.next = 5;
                    return this.orderDetailService.sumAmount(productId).toPromise();

                  case 5:
                    sumOutput = _context2.sent;

                    if (!(sumInput - sumOutput <= 0)) {
                      _context2.next = 10;
                      break;
                    }

                    $(function () {
                      var Toast = Swal.mixin({
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
                    _context2.next = 25;
                    break;

                  case 10:
                    if (!(items.length == 0)) {
                      _context2.next = 15;
                      break;
                    }

                    item = {
                      product: {
                        id: productId
                      },
                      quantity: 1,
                      shoppingCart: {
                        id: shoppingCartId
                      }
                    };
                    this.createItem(item).subscribe(function () {
                      $(function () {
                        var Toast = Swal.mixin({
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
                    _context2.next = 25;
                    break;

                  case 15:
                    index = -1;
                    i = 0;

                  case 17:
                    if (!(i < items.length)) {
                      _context2.next = 24;
                      break;
                    }

                    if (!(items[i].product.id == productId)) {
                      _context2.next = 21;
                      break;
                    }

                    index = i;
                    return _context2.abrupt("break", 24);

                  case 21:
                    i++;
                    _context2.next = 17;
                    break;

                  case 24:
                    if (index == -1) {
                      item1 = {
                        product: {
                          id: productId
                        },
                        quantity: 1,
                        shoppingCart: {
                          id: shoppingCartId
                        }
                      };
                      this.createItem(item1).subscribe(function () {
                        $(function () {
                          var Toast = Swal.mixin({
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
                    } else {
                      items[index].quantity += 1;
                      this.updateItem(items[index].id, items[index]).subscribe(function () {
                        $(function () {
                          var Toast = Swal.mixin({
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

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "decreaseItemToShoppingCart",
        value: function decreaseItemToShoppingCart(items, productId) {
          var index = -1;

          for (var i = 0; i < items.length; i++) {
            if (items[i].product.id == productId) {
              index = i;
              break;
            }
          }

          if (index != -1) {
            if (items[index].quantity == 1) {
              this.deleteItem(items[index].id).subscribe(function () {
                $(function () {
                  var Toast = Swal.mixin({
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
            } else {
              items[index].quantity -= 1;
              this.updateItem(items[index].id, items[index]).subscribe(function () {
                $(function () {
                  var Toast = Swal.mixin({
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
      }]);

      return ItemService;
    }();

    ItemService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillDetailService"]
      }, {
        type: _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailService"]
      }];
    };

    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ItemService);
    /***/
  },

  /***/
  "./src/app/service/notification/notification.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/service/notification/notification.service.ts ***!
    \**************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServiceNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(http) {
        _classCallCheck(this, NotificationService);

        this.http = http;
      }

      _createClass(NotificationService, [{
        key: "getAllNotification",
        value: function getAllNotification() {
          return this.http.get(API_URL + '/notifications');
        }
      }, {
        key: "createNotification",
        value: function createNotification(notification) {
          return this.http.post(API_URL + '/notifications', notification);
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(id, notification) {
          return this.http.put(API_URL + "/notifications/".concat(id), notification);
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.http["delete"](API_URL + "/notifications/".concat(id));
        }
      }, {
        key: "getNotification",
        value: function getNotification(id) {
          return this.http.get(API_URL + "/notifications/".concat(id));
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/service/order-detail/order-detail.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/service/order-detail/order-detail.service.ts ***!
    \**************************************************************/

  /*! exports provided: OrderDetailService */

  /***/
  function srcAppServiceOrderDetailOrderDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailService", function () {
      return OrderDetailService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var OrderDetailService = /*#__PURE__*/function () {
      function OrderDetailService(http) {
        _classCallCheck(this, OrderDetailService);

        this.http = http;
      }

      _createClass(OrderDetailService, [{
        key: "getAllOrderDetail",
        value: function getAllOrderDetail() {
          return this.http.get(API_URL + '/order-details');
        }
      }, {
        key: "createOrderDetail",
        value: function createOrderDetail(orderDetail) {
          return this.http.post(API_URL + '/order-details', orderDetail);
        }
      }, {
        key: "getOrderDetail",
        value: function getOrderDetail(id) {
          return this.http.get(API_URL + "/order-details/".concat(id));
        }
      }, {
        key: "updateOrderDetail",
        value: function updateOrderDetail(id, orderDetail) {
          return this.http.put(API_URL + "/order-details/".concat(id), orderDetail);
        }
      }, {
        key: "deleteOrderDetail",
        value: function deleteOrderDetail(id) {
          return this.http["delete"](API_URL + "/order-details/".concat(id));
        }
      }, {
        key: "sumAmount",
        value: function sumAmount(id) {
          return this.http.get(API_URL + "/order-details/".concat(id, "/sum"));
        }
      }]);

      return OrderDetailService;
    }();

    OrderDetailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrderDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderDetailService);
    /***/
  },

  /***/
  "./src/app/service/order/orders.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/order/orders.service.ts ***!
    \*************************************************/

  /*! exports provided: OrdersService */

  /***/
  function srcAppServiceOrderOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
      return OrdersService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var OrdersService = /*#__PURE__*/function () {
      function OrdersService(http) {
        _classCallCheck(this, OrdersService);

        this.http = http;
      }

      _createClass(OrdersService, [{
        key: "getAllOrder",
        value: function getAllOrder(status) {
          return this.http.get(API_URL + '/orders?status=' + status);
        }
      }, {
        key: "createOrders",
        value: function createOrders(orders) {
          return this.http.post(API_URL + '/orders', orders);
        }
      }, {
        key: "getOrders",
        value: function getOrders(id) {
          return this.http.get(API_URL + "/orders/".concat(id));
        }
      }, {
        key: "updateOrders",
        value: function updateOrders(id, orders) {
          return this.http.put(API_URL + "/orders/".concat(id), orders);
        }
      }, {
        key: "deleteOrders",
        value: function deleteOrders(id) {
          return this.http["delete"](API_URL + "/orders/".concat(id));
        }
      }, {
        key: "getAllOrderByUserAndStatus",
        value: function getAllOrderByUserAndStatus(id, status) {
          return this.http.get(API_URL + "/orders/users/".concat(id, "?status=") + status);
        }
      }, {
        key: "getAllOrderDetail",
        value: function getAllOrderDetail(id) {
          return this.http.get(API_URL + "/orders/".concat(id, "/order-details"));
        }
      }, {
        key: "getAllProductUserBought",
        value: function getAllProductUserBought(id) {
          return this.http.get(API_URL + "/orders/users/".concat(id, "/products"));
        }
      }, {
        key: "sumTotalPriceGet",
        value: function sumTotalPriceGet(month, year) {
          return this.http.get(API_URL + "/orders/total-price?month=" + month + '&year=' + year);
        }
      }]);

      return OrdersService;
    }();

    OrdersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrdersService);
    /***/
  },

  /***/
  "./src/app/service/product/product.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/product/product.service.ts ***!
    \****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServiceProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getAllProduct",
        value: function getAllProduct() {
          return this.http.get(API_URL + '/products');
        }
      }, {
        key: "createProduct",
        value: function createProduct(product) {
          return this.http.post(API_URL + '/products', product);
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.http.get(API_URL + "/products/".concat(id));
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(id, product) {
          return this.http.put(API_URL + "/products/".concat(id), product);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http["delete"](API_URL + "/products/".concat(id));
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(id) {
          return this.http.get(API_URL + "/products/".concat(id, "/images"));
        }
      }, {
        key: "getAllProductHasSaleOffGreaterThanZero",
        value: function getAllProductHasSaleOffGreaterThanZero() {
          return this.http.get(API_URL + "/products/sale-off");
        }
      }, {
        key: "getAllProductLatest",
        value: function getAllProductLatest() {
          return this.http.get(API_URL + "/products/latest");
        }
      }, {
        key: "getAllProductByName",
        value: function getAllProductByName(name) {
          return this.http.get(API_URL + '/products/search?name=' + name);
        }
      }, {
        key: "getAllReviewByProduct",
        value: function getAllReviewByProduct(id) {
          return this.http.get(API_URL + "/products/".concat(id, "/reviews"));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/service/review/review.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/review/review.service.ts ***!
    \**************************************************/

  /*! exports provided: ReviewService */

  /***/
  function srcAppServiceReviewReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ReviewService = /*#__PURE__*/function () {
      function ReviewService(http) {
        _classCallCheck(this, ReviewService);

        this.http = http;
      }

      _createClass(ReviewService, [{
        key: "getAllReview",
        value: function getAllReview() {
          return this.http.get(API_URL + '/reviews');
        }
      }, {
        key: "createReview",
        value: function createReview(review) {
          return this.http.post(API_URL + '/reviews', review);
        }
      }, {
        key: "updateReview",
        value: function updateReview(id, review) {
          return this.http.put(API_URL + "/reviews/".concat(id), review);
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(id) {
          return this.http["delete"](API_URL + "/reviews/".concat(id));
        }
      }, {
        key: "getReview",
        value: function getReview(id) {
          return this.http.get(API_URL + "/reviews/".concat(id));
        }
      }, {
        key: "getReviewByUserAndProduct",
        value: function getReviewByUserAndProduct(userId, productId) {
          return this.http.get(API_URL + "/reviews/users/".concat(userId, "/products/").concat(productId));
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReviewService);
    /***/
  },

  /***/
  "./src/app/service/shopping-cart/shopping-cart.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/service/shopping-cart/shopping-cart.service.ts ***!
    \****************************************************************/

  /*! exports provided: ShoppingCartService */

  /***/
  function srcAppServiceShoppingCartShoppingCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function () {
      return ShoppingCartService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ShoppingCartService = /*#__PURE__*/function () {
      function ShoppingCartService(http) {
        _classCallCheck(this, ShoppingCartService);

        this.http = http;
      }

      _createClass(ShoppingCartService, [{
        key: "getAllCart",
        value: function getAllCart() {
          return this.http.get(API_URL + '/carts');
        }
      }, {
        key: "createCart",
        value: function createCart(shoppingCart) {
          return this.http.post(API_URL + '/carts', shoppingCart);
        }
      }, {
        key: "getCart",
        value: function getCart(id) {
          return this.http.get(API_URL + "/carts/".concat(id));
        }
      }, {
        key: "getCartByUser",
        value: function getCartByUser(id) {
          return this.http.get(API_URL + "/carts/users/".concat(id));
        }
      }, {
        key: "updateCart",
        value: function updateCart(id, shoppingCart) {
          return this.http.put(API_URL + "/carts/".concat(id), shoppingCart);
        }
      }, {
        key: "deleteShoppingCart",
        value: function deleteShoppingCart(id) {
          return this.http["delete"](API_URL + "/carts/".concat(id));
        }
      }, {
        key: "getAllItemByShoppingCart",
        value: function getAllItemByShoppingCart(id) {
          return this.http.get(API_URL + "/carts/".concat(id, "/items"));
        }
      }]);

      return ShoppingCartService;
    }();

    ShoppingCartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShoppingCartService);
    /***/
  },

  /***/
  "./src/app/service/user/user.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/user/user.service.ts ***!
    \**********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          return this.http.post(API_URL + '/register', user);
        }
      }, {
        key: "findAllNotification",
        value: function findAllNotification(id) {
          return this.http.get(API_URL + "/users/".concat(id, "/notifications"));
        }
      }, {
        key: "findAllNotificationDateDesc",
        value: function findAllNotificationDateDesc(id) {
          return this.http.get(API_URL + "/users/".concat(id, "/notifications-desc"));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts ***!
    \********************************************************************************/

  /*! exports provided: WarehouseBillDetailService */

  /***/
  function srcAppServiceWarehouseBillDetailWarehouseBillDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehouseBillDetailService", function () {
      return WarehouseBillDetailService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var WarehouseBillDetailService = /*#__PURE__*/function () {
      function WarehouseBillDetailService(http) {
        _classCallCheck(this, WarehouseBillDetailService);

        this.http = http;
      }

      _createClass(WarehouseBillDetailService, [{
        key: "getAllWarehouseBillDetail",
        value: function getAllWarehouseBillDetail() {
          return this.http.get(API_URL + '/warehouse-bill-details');
        }
      }, {
        key: "createWarehouseBillDetail",
        value: function createWarehouseBillDetail(warehouseBillDetail) {
          return this.http.post(API_URL + '/warehouse-bill-details', warehouseBillDetail);
        }
      }, {
        key: "getWarehouseBillDetail",
        value: function getWarehouseBillDetail(id) {
          return this.http.get(API_URL + "/warehouse-bill-details/".concat(id));
        }
      }, {
        key: "updateWarehouseBillDetail",
        value: function updateWarehouseBillDetail(id, warehouseBillDetail) {
          return this.http.put(API_URL + "/warehouse-bill-details/".concat(id), warehouseBillDetail);
        }
      }, {
        key: "deleteWarehouseBillDetail",
        value: function deleteWarehouseBillDetail(id) {
          return this.http["delete"](API_URL + "/warehouse-bill-details/".concat(id));
        }
      }, {
        key: "sumAmount",
        value: function sumAmount(id) {
          return this.http.get(API_URL + "/warehouse-bill-details/".concat(id, "/sum"));
        }
      }]);

      return WarehouseBillDetailService;
    }();

    WarehouseBillDetailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WarehouseBillDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WarehouseBillDetailService);
    /***/
  },

  /***/
  "./src/app/service/warehouse-bill/warehouse-bill.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/service/warehouse-bill/warehouse-bill.service.ts ***!
    \******************************************************************/

  /*! exports provided: WarehouseBillService */

  /***/
  function srcAppServiceWarehouseBillWarehouseBillServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehouseBillService", function () {
      return WarehouseBillService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var WarehouseBillService = /*#__PURE__*/function () {
      function WarehouseBillService(http) {
        _classCallCheck(this, WarehouseBillService);

        this.http = http;
      }

      _createClass(WarehouseBillService, [{
        key: "getAllWarehouseBill",
        value: function getAllWarehouseBill() {
          return this.http.get(API_URL + '/warehousebills');
        }
      }, {
        key: "createWarehouseBill",
        value: function createWarehouseBill(warehouse) {
          return this.http.post(API_URL + '/warehousebills', warehouse);
        }
      }, {
        key: "getWarehouseBill",
        value: function getWarehouseBill(id) {
          return this.http.get(API_URL + "/warehousebills/".concat(id));
        }
      }, {
        key: "updateWarehouseBill",
        value: function updateWarehouseBill(id, warehouse) {
          return this.http.put(API_URL + "/warehousebills/".concat(id), warehouse);
        }
      }, {
        key: "deleteWarehouseBill",
        value: function deleteWarehouseBill(id) {
          return this.http["delete"](API_URL + "/warehousebills/".concat(id));
        }
      }, {
        key: "getAllWarehouseBillDetail",
        value: function getAllWarehouseBillDetail(id) {
          return this.http.get(API_URL + "/warehousebills/".concat(id) + "/warehouse-bill-details");
        }
      }, {
        key: "sumTotalPriceHaveBought",
        value: function sumTotalPriceHaveBought(month, year) {
          return this.http.get(API_URL + "/warehousebills/total-price?month=" + month + '&year=' + year);
        }
      }]);

      return WarehouseBillService;
    }();

    WarehouseBillService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WarehouseBillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WarehouseBillService);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown-menu {\n  max-height: 350px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9FOlxcQW5ndWxhclxcbWFya2V0LWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIiwiLmRyb3Bkb3duLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/notification/notification.service */
    "./src/app/service/notification/notification.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(categoryService, authenticationService, shoppingCartService, userService, notificationService, router) {
        var _this7 = this;

        _classCallCheck(this, HeaderComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          _this7.currentUser = value;

          _this7.getShoppingCartByUser(_this7.currentUser.id);

          _this7.getAllNotificationUnRead(_this7.currentUser.id);

          _this7.getAllNotification(_this7.currentUser.id);
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator5 = _createForOfIteratorHelper(roleList),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var role = _step5.value;

              if (role.name === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        this.loadFavorite();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(function () {
            $(".dropdown-menu").click(function (event) {
              event.stopPropagation();
            });
          });
          this.getAllCategories();
        }
      }, {
        key: "getAllNotification",
        value: function getAllNotification(id) {
          var _this8 = this;

          this.userService.findAllNotificationDateDesc(id).subscribe(function (listNotification) {
            _this8.listNotification = listNotification;

            _this8.listNotification.map(function (notification) {
              notification.createDate = new Date(notification.createDate);
            });
          });
        }
      }, {
        key: "getAllNotificationUnRead",
        value: function getAllNotificationUnRead(id) {
          var _this9 = this;

          this.userService.findAllNotification(id).subscribe(function (listNotificationUnRead) {
            _this9.listNotificationUnRead = listNotificationUnRead;
          });
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this10 = this;

          if (id == null) {
            this.loadCart();
          } else {
            this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
              _this10.shoppingCart = shoppingCart;

              _this10.getAllItemInShoppingCart(_this10.shoppingCart.id);
            });
          }
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          var _this11 = this;

          this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(function (items) {
            _this11.items = items;

            _this11.sumTotalItem();
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this12 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this12.listCategory = listCategory;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          this.items = [];
          var cart = JSON.parse(localStorage.getItem('cart'));

          if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
              var item = JSON.parse(cart[i]);
              this.items.push({
                product: item.product,
                quantity: item.quantity
              });
            }

            this.sumTotalItem();
          }
        }
      }, {
        key: "sumTotalItem",
        value: function sumTotalItem() {
          this.amount = 0;

          var _iterator6 = _createForOfIteratorHelper(this.items),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var item = _step6.value;
              this.amount += item.quantity;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return this.amount;
        }
      }, {
        key: "loadFavorite",
        value: function loadFavorite() {
          this.favoriteProduct = [];
          var heart = JSON.parse(localStorage.getItem('heart'));

          if (heart != null) {
            for (var i = 0; i < heart.length; i++) {
              var item = JSON.parse(heart[i]);
              this.favoriteProduct.push({
                product: item.product,
                quantity: item.quantity
              });
            }
          }
        }
      }, {
        key: "getNotification",
        value: function getNotification(id) {
          return this.notificationService.getNotification(id).toPromise();
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(notificationId, userId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            var notification;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getNotification(notificationId);

                  case 2:
                    notification = _context3.sent;
                    notification.status = true;
                    this.notificationService.updateNotification(notificationId, notification).subscribe(function () {
                      _this13.getAllNotificationUnRead(userId);

                      _this13.getAllNotification(userId);
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]
      }, {
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router, authenticationService) {
        var _this14 = this;

        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.hasRoleAdmin = false;
        this.hasRoleUser = false;
        this.authenticationService.currentUser.subscribe(function (value) {
          _this14.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator7 = _createForOfIteratorHelper(roleList),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var role = _step7.value;

              if (role.name === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              } else {
                this.hasRoleUser = true;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }

      _createClass(NavbarComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/shared/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
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
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var SidebarComponent = function SidebarComponent(router, authenticationService) {
      var _this15 = this;

      _classCallCheck(this, SidebarComponent);

      this.router = router;
      this.authenticationService = authenticationService;
      this.hasRoleAdmin = false;
      this.authenticationService.currentUser.subscribe(function (value) {
        return _this15.currentUser = value;
      });

      if (this.currentUser) {
        var roleList = this.currentUser.roles;

        var _iterator8 = _createForOfIteratorHelper(roleList),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var role = _step8.value;

            if (role.name === 'ROLE_ADMIN') {
              this.hasRoleAdmin = true;
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    };

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/shared/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/user/category-detail/category-detail.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/user/category-detail/category-detail.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserCategoryDetailCategoryDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/category-detail/category-detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/category-detail/category-detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoryDetailComponent */

  /***/
  function srcAppUserCategoryDetailCategoryDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function () {
      return CategoryDetailComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");

    var CategoryDetailComponent = /*#__PURE__*/function () {
      function CategoryDetailComponent(categoryService, productService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        var _this16 = this;

        _classCallCheck(this, CategoryDetailComponent);

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
        this.sub = this.activatedRoute.paramMap.subscribe(function (paramMap) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this17 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    id = +paramMap.get('id');
                    _context5.next = 3;
                    return this.getCategory(id);

                  case 3:
                    this.currentCategory = _context5.sent;
                    _context5.next = 6;
                    return this.getAllProductByCategory(this.currentCategory);

                  case 6:
                    this.listProduct = _context5.sent;
                    this.listProduct.map(function (product) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return this.getAllImageByProduct(product);

                              case 2:
                                product.image = _context4.sent;

                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        });
        this.authenticationService.currentUser.subscribe(function (value) {
          _this16.currentUser = value;

          _this16.getShoppingCartByUser(_this16.currentUser.id);
        });
      }

      _createClass(CategoryDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
            var rangeSlider = $(".price-range"),
                minamount = $("#minamount"),
                maxamount = $("#maxamount"),
                minPrice = rangeSlider.data('min'),
                maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
              range: true,
              min: minPrice,
              max: maxPrice,
              values: [minPrice, maxPrice],
              slide: function slide(event, ui) {
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
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this18 = this;

          this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
            _this18.shoppingCart = shoppingCart;
          });
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var items;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context6.sent;
                    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this19 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this19.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllProductByCategory",
        value: function getAllProductByCategory(category) {
          return this.categoryService.getAllProductByCategory(category.id).toPromise();
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          return this.categoryService.getCategory(id).toPromise();
        }
      }, {
        key: "getAllProductSaleOff",
        value: function getAllProductSaleOff() {
          var _this20 = this;

          this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(function (listProduct) {
            _this20.listProductSaleOff = listProduct;

            _this20.listProductSaleOff.map(function (product) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.getAllImageByProduct(product);

                      case 2:
                        product.image = _context7.sent;

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });

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
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  768: {
                    items: 3
                  }
                }
              });
            });
          });
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return CategoryDetailComponent;
    }();

    CategoryDetailComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-detail.component.scss */
      "./src/app/user/category-detail/category-detail.component.scss"))["default"]]
    })], CategoryDetailComponent);
    /***/
  },

  /***/
  "./src/app/user/checkout/checkout.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/user/checkout/checkout.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserCheckoutCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/checkout/checkout.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/checkout/checkout.component.ts ***!
    \*****************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppUserCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/customer-info/customer-info.service */
    "./src/app/service/customer-info/customer-info.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");
    /* harmony import */


    var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/order/orders.service */
    "./src/app/service/order/orders.service.ts");
    /* harmony import */


    var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/order-detail/order-detail.service */
    "./src/app/service/order-detail/order-detail.service.ts");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(categoryService, customerInfoService, authenticationService, shoppingCartService, itemService, ordersService, orderDetailService, router) {
        var _this21 = this;

        _classCallCheck(this, CheckoutComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          _this21.currentUser = value;

          _this21.getShoppingCartByUser(_this21.currentUser.id);
        });
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this22 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this22.listCategory = listCategory;
          });
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this23 = this;

          this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
            _this23.shoppingCart = shoppingCart;

            _this23.getAllItemInShoppingCart(_this23.shoppingCart.id);
          });
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          var _this24 = this;

          this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(function (items) {
            _this24.items = items;

            _this24.sumTotalPrice();
          });
        }
      }, {
        key: "deleteAllItemInShoppingCart",
        value: function deleteAllItemInShoppingCart(id) {
          var _this25 = this;

          this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(function (items) {
            _this25.items = items;

            _this25.items.map(function (item) {
              _this25.itemService.deleteItem(item.id).subscribe();
            });
          });
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          var orders = {
            user: {
              id: this.currentUser.id
            },
            status: false
          };
          return this.ordersService.createOrders(orders).toPromise();
        }
      }, {
        key: "createOrderDetail",
        value: function createOrderDetail(item, orders) {
          var orderDetail = {
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
      }, {
        key: "submitCheckoutForm",
        value: function submitCheckoutForm(items, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this26 = this;

            var customerInfo, orders, listOrderDetail;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.createCustomerInfo();

                  case 2:
                    customerInfo = _context8.sent;

                    if (customerInfo.address != "" && customerInfo.email != "" && customerInfo.name != "" && customerInfo.phoneNumber != "") {
                      this.isSubmitted = true;
                    }

                    if (!this.isSubmitted) {
                      _context8.next = 14;
                      break;
                    }

                    this.deleteAllItemInShoppingCart(shoppingCartId);
                    this.getAllItemInShoppingCart(shoppingCartId);
                    _context8.next = 9;
                    return this.createOrder();

                  case 9:
                    orders = _context8.sent;
                    listOrderDetail = items.map(function (item) {
                      _this26.createOrderDetail(item, orders);
                    });
                    Promise.all(listOrderDetail).then(function () {
                      $(function () {
                        var Toast = Swal.mixin({
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

                      _this26.customerInfoForm.reset();
                    })["catch"](function () {
                      $(function () {
                        var Toast = Swal.mixin({
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
                    _context8.next = 15;
                    break;

                  case 14:
                    $(function () {
                      var Toast = Swal.mixin({
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

                  case 15:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "createCustomerInfo",
        value: function createCustomerInfo() {
          var customerInfo = {
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
      }, {
        key: "loadCart",
        value: function loadCart() {
          this.total = 0;
          this.items = [];
          var cart = JSON.parse(localStorage.getItem('cart'));

          if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
              var item = JSON.parse(cart[i]);
              this.items.push({
                product: item.product,
                quantity: item.quantity
              });
              this.sumTotalPrice();
            }
          }
        }
      }, {
        key: "sumTotalPrice",
        value: function sumTotalPrice() {
          this.total = 0;

          var _iterator9 = _createForOfIteratorHelper(this.items),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var item = _step9.value;
              this.total += item.product.price * (1 - item.product.saleOff / 100) * item.quantity;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return this.total;
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__["CustomerInfoService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"]
      }, {
        type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"]
      }, {
        type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.scss */
      "./src/app/user/checkout/checkout.component.scss"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/user/contact/contact.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/user/contact/contact.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/contact/contact.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/contact/contact.component.ts ***!
    \***************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppUserContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
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


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(categoryService, router) {
        _classCallCheck(this, ContactComponent);

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

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.hero__categories__all').on('click', function () {
            $('.hero__categories ul').slideToggle(400);
          });
          this.getAllCategories();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this27 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this27.listCategory = listCategory;
          });
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/user/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/user/favorite/favorite.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/user/favorite/favorite.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFavoriteFavoriteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/favorite/favorite.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/favorite/favorite.component.ts ***!
    \*****************************************************/

  /*! exports provided: FavoriteComponent */

  /***/
  function srcAppUserFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
      return FavoriteComponent;
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


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FavoriteComponent = /*#__PURE__*/function () {
      function FavoriteComponent(categoryService, activatedRoute, productService, router) {
        _classCallCheck(this, FavoriteComponent);

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

      _createClass(FavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

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
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 0;
                }
              }

              $button.parent().find('input').val(newVal);
            });
          });
          this.getAllCategories();
          this.loadFavorite();
          this.activatedRoute.params.subscribe(function (params) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var id, product, item, heart;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      id = params['id'];

                      if (!id) {
                        _context9.next = 13;
                        break;
                      }

                      _context9.next = 4;
                      return this.getProduct(id);

                    case 4:
                      product = _context9.sent;
                      _context9.next = 7;
                      return this.getAllImageByProduct(product);

                    case 7:
                      product.image = _context9.sent;
                      item = {
                        product: product,
                        quantity: 1
                      };

                      if (localStorage.getItem('heart') == null) {
                        heart = [];
                        heart.push(JSON.stringify(item));
                        localStorage.setItem('heart', JSON.stringify(heart));
                      } else {
                        this.addProductToFavorite(id, item);
                      }

                      this.loadFavorite();
                      _context9.next = 14;
                      break;

                    case 13:
                      this.loadFavorite();

                    case 14:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var heart = JSON.parse(localStorage.getItem('heart'));
          var index = -1;

          for (var i = 0; i < heart.length; i++) {
            var item = JSON.parse(heart[i]);

            if (item.product.id == id) {
              heart.splice(i, 1);
              break;
            }
          }

          localStorage.setItem("heart", JSON.stringify(heart));
          this.loadFavorite();
        }
      }, {
        key: "addProductToFavorite",
        value: function addProductToFavorite(id, item) {
          var heart = JSON.parse(localStorage.getItem('heart'));
          var index = -1;

          for (var i = 0; i < heart.length; i++) {
            var _item = JSON.parse(heart[i]);

            if (_item.product.id == id) {
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
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.productService.getProduct(id).toPromise();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this29 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this29.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "loadFavorite",
        value: function loadFavorite() {
          this.items = [];
          var heart = JSON.parse(localStorage.getItem('heart'));

          for (var i = 0; i < heart.length; i++) {
            var item = JSON.parse(heart[i]);
            this.items.push({
              product: item.product,
              quantity: item.quantity
            });
          }
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return FavoriteComponent;
    }();

    FavoriteComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorite.component.scss */
      "./src/app/user/favorite/favorite.component.scss"))["default"]]
    })], FavoriteComponent);
    /***/
  },

  /***/
  "./src/app/user/homepage/homepage.component.css":
  /*!******************************************************!*\
    !*** ./src/app/user/homepage/homepage.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomepageHomepageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/homepage/homepage.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/homepage/homepage.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppUserHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
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


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent(productService, categoryService, authenticationService, shoppingCartService, itemService, router) {
        var _this30 = this;

        _classCallCheck(this, HomepageComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          _this30.currentUser = value;

          _this30.getShoppingCartByUser(_this30.currentUser.id);
        });
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
                  items: 1
                },
                480: {
                  items: 2
                },
                768: {
                  items: 3
                },
                992: {
                  items: 4
                }
              }
            });
          });
          this.getAllProductLatest();
          this.getAllProduct();
          this.getAllCategories();
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this31 = this;

          this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
            _this31.shoppingCart = shoppingCart;
          });
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var items;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context10.sent;
                    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getAllProduct",
        value: function getAllProduct() {
          var _this32 = this;

          this.productService.getAllProduct().subscribe(function (listProduct) {
            _this32.listProduct = listProduct;

            _this32.addImageToProduct(_this32.listProduct);
          });
        }
      }, {
        key: "addImageToProduct",
        value: function addImageToProduct(listProduct) {
          var _this33 = this;

          listProduct.map(function (product) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.getAllImageByProduct(product);

                    case 2:
                      product.image = _context11.sent;

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          });
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this34 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this34.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllProductLatest",
        value: function getAllProductLatest() {
          var _this35 = this;

          this.productService.getAllProductLatest().subscribe(function (listProduct) {
            if (listProduct.length > 3) {
              for (var i = 0; i < 3; i++) {
                _this35.listProductLatest.push(listProduct[i]);
              }
            } else {
              _this35.listProductLatest = listProduct;
            }

            _this35.addImageToProduct(_this35.listProductLatest);
          });
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ctorParameters = function () {
      return [{
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.css */
      "./src/app/user/homepage/homepage.component.css"))["default"]]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/user/product-detail/product-detail.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/user/product-detail/product-detail.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductDetailProductDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9FOlxcQW5ndWxhclxcbWFya2V0LWZyb250ZW5kL3NyY1xcYXBwXFx1c2VyXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGVkIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbiIsIi5yYXRlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/product-detail/product-detail.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/product-detail/product-detail.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppUserProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");
    /* harmony import */


    var _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/review/review.service */
    "./src/app/service/review/review.service.ts");

    var ProductDetailComponent = /*#__PURE__*/function () {
      function ProductDetailComponent(categoryService, productService, reviewService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        var _this36 = this;

        _classCallCheck(this, ProductDetailComponent);

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
        this.sub = this.activatedRoute.paramMap.subscribe(function (paramMap) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this36, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var id;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    id = +paramMap.get('id');
                    _context12.next = 3;
                    return this.getProduct(id);

                  case 3:
                    this.currentProduct = _context12.sent;
                    _context12.next = 6;
                    return this.getAllImageByProduct(this.currentProduct);

                  case 6:
                    this.currentProduct.image = _context12.sent;
                    this.getAllReview(id);
                    this.getAllProductRelated(this.currentProduct.category);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        });
        this.authenticationService.currentUser.subscribe(function (value) {
          _this36.currentUser = value;

          _this36.getShoppingCartByUser(_this36.currentUser.id);
        });
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 0;
                }
              }

              $button.parent().find('input').val(newVal);
            });
          });
          this.getAllCategories();
        }
      }, {
        key: "getAllReview",
        value: function getAllReview(productId) {
          var _this37 = this;

          this.productService.getAllReviewByProduct(productId).subscribe(function (listReview) {
            var sum = 0;
            _this37.listReview = listReview;

            _this37.listReview.map(function (review) {
              review.createDate = new Date(review.createDate);
              sum += review.evaluate;
            });

            _this37.starAverage = sum / _this37.listReview.length;
          });
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this38 = this;

          this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
            _this38.shoppingCart = shoppingCart;
          });
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var items;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context13.sent;
                    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this39 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this39.listCategory = listCategory;
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.productService.getProduct(id).toPromise();
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "getAllProductRelated",
        value: function getAllProductRelated(category) {
          var _this40 = this;

          this.categoryService.getAllProductByCategory(category.id).subscribe(function (listProduct) {
            if (listProduct.length > 4) {
              for (var i = 0; i < 4; i++) {
                _this40.relatedProducts.push(listProduct[i]);
              }
            } else {
              _this40.relatedProducts = listProduct;
            }

            _this40.relatedProducts.map(function (product) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this40, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this.getAllImageByProduct(product);

                      case 2:
                        product.image = _context14.sent;

                      case 3:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            });
          });
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__["ReviewService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-detail.component.scss */
      "./src/app/user/product-detail/product-detail.component.scss"))["default"]]
    })], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/user/shop/shop.component.css":
  /*!**********************************************!*\
    !*** ./src/app/user/shop/shop.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserShopShopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/shop/shop.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/shop/shop.component.ts ***!
    \*********************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppUserShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
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


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");

    var ShopComponent = /*#__PURE__*/function () {
      function ShopComponent(categoryService, activatedRoute, productService, authenticationService, shoppingCartService, itemService, router) {
        var _this41 = this;

        _classCallCheck(this, ShopComponent);

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
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
          _this41.query = params.name;

          if (_this41.query != null) {
            _this41.searchForm.value.name = _this41.query;

            _this41.search();
          } else {
            _this41.getAllProduct();
          }
        });
        this.authenticationService.currentUser.subscribe(function (value) {
          _this41.currentUser = value;

          _this41.getShoppingCartByUser(_this41.currentUser.id);
        });
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
            var rangeSlider = $(".price-range"),
                minamount = $("#minamount"),
                maxamount = $("#maxamount"),
                minPrice = rangeSlider.data('min'),
                maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
              range: true,
              min: minPrice,
              max: maxPrice,
              values: [minPrice, maxPrice],
              slide: function slide(event, ui) {
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
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this42 = this;

          this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
            _this42.shoppingCart = shoppingCart;
          });
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var items;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context15.sent;
                    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getAllProduct",
        value: function getAllProduct() {
          var _this43 = this;

          this.productService.getAllProduct().subscribe(function (listProduct) {
            _this43.listProduct = listProduct;

            _this43.addImageToProduct(_this43.listProduct);
          });
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this44 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this44.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllProductSaleOff",
        value: function getAllProductSaleOff() {
          var _this45 = this;

          this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(function (listProduct) {
            _this45.listProductSaleOff = listProduct;

            _this45.listProductSaleOff.map(function (product) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this45, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this.getAllImageByProduct(product);

                      case 2:
                        product.image = _context16.sent;
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
                                items: 1
                              },
                              480: {
                                items: 2
                              },
                              768: {
                                items: 3
                              }
                            }
                          });
                        });

                      case 4:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            });
          });
        }
      }, {
        key: "getAllProductLatest",
        value: function getAllProductLatest() {
          var _this46 = this;

          this.productService.getAllProductLatest().subscribe(function (listProduct) {
            if (listProduct.length > 3) {
              for (var i = 0; i < 3; i++) {
                _this46.listProductLatest.push(listProduct[i]);
              }
            } else {
              _this46.listProductLatest = listProduct;
            }

            _this46.addImageToProduct(_this46.listProductLatest);
          });
        }
      }, {
        key: "addImageToProduct",
        value: function addImageToProduct(listProduct) {
          var _this47 = this;

          listProduct.map(function (product) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this47, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.getAllImageByProduct(product);

                    case 2:
                      product.image = _context17.sent;

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this48 = this;

          var name = this.searchForm.value.name;

          if (name != null) {
            if (name == "") {
              this.router.navigate(['/shop']);
            } else {
              this.productService.getAllProductByName(name).subscribe(function (listProduct) {
                _this48.listProduct = listProduct;

                _this48.addImageToProduct(_this48.listProduct);

                _this48.router.navigate(['/shop'], {
                  queryParams: {
                    name: name
                  }
                });
              });
            }
          }
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shop.component.css */
      "./src/app/user/shop/shop.component.css"))["default"]]
    })], ShopComponent);
    /***/
  },

  /***/
  "./src/app/user/shopping-cart/shopping-cart.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/user/shopping-cart/shopping-cart.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserShoppingCartShoppingCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/shopping-cart/shopping-cart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/shopping-cart/shopping-cart.component.ts ***!
    \***************************************************************/

  /*! exports provided: ShoppingCartComponent */

  /***/
  function srcAppUserShoppingCartShoppingCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
      return ShoppingCartComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */
    "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/item/item.service */
    "./src/app/service/item/item.service.ts");
    /* harmony import */


    var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/order-detail/order-detail.service */
    "./src/app/service/order-detail/order-detail.service.ts");

    var ShoppingCartComponent = /*#__PURE__*/function () {
      function ShoppingCartComponent(categoryService, activatedRoute, productService, warehouseBillDetailService, orderDetailService, authenticationService, shoppingCartService, itemService, router) {
        var _this49 = this;

        _classCallCheck(this, ShoppingCartComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          _this49.currentUser = value;

          _this49.getShoppingCartByUser(_this49.currentUser.id);
        });

        if (this.currentUser == null) {
          this.activatedRoute.params.subscribe(function (params) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this49, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var id, product, item, sum, cart;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      id = params['id'];

                      if (!id) {
                        _context18.next = 16;
                        break;
                      }

                      _context18.next = 4;
                      return this.getProduct(id);

                    case 4:
                      product = _context18.sent;
                      _context18.next = 7;
                      return this.getAllImageByProduct(product);

                    case 7:
                      product.image = _context18.sent;
                      item = {
                        product: product,
                        quantity: 1
                      };
                      _context18.next = 11;
                      return this.sumAmountInput(product.id);

                    case 11:
                      sum = _context18.sent;

                      if (sum == null) {
                        $(function () {
                          var Toast = Swal.mixin({
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
                      } else {
                        if (localStorage.getItem('cart') == null) {
                          cart = [];
                          cart.push(JSON.stringify(item));
                          localStorage.setItem('cart', JSON.stringify(cart));
                        } else {
                          this.addProductToCart(id, item);
                        }
                      }

                      this.loadCart();
                      _context18.next = 17;
                      break;

                    case 16:
                      this.loadCart();

                    case 17:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          });
        }
      }

      _createClass(ShoppingCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 0;
                }
              }

              $button.parent().find('input').val(newVal);
            });
          });
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this50 = this;

          if (id == null) {
            this.loadCart();
          } else {
            this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
              _this50.shoppingCart = shoppingCart;

              _this50.shoppingCartService.getAllItemByShoppingCart(_this50.shoppingCart.id).subscribe(function (items) {
                _this50.items = items;
                items.map(function (item) {
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this50, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            _context19.next = 2;
                            return this.getAllImageByProduct(item.product);

                          case 2:
                            item.product.image = _context19.sent;

                          case 3:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, this);
                  }));
                });

                _this50.sumTotalPrice();
              });
            });
          }
        }
      }, {
        key: "addItemToShoppingCart",
        value: function addItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var items;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context20.sent;
                    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
                    this.getShoppingCartByUser(this.currentUser.id);

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "decreaseItemToShoppingCart",
        value: function decreaseItemToShoppingCart(productId, shoppingCartId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var items;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.getAllItemInShoppingCart(shoppingCartId);

                  case 2:
                    items = _context21.sent;
                    this.itemService.decreaseItemToShoppingCart(items, productId);
                    this.getShoppingCartByUser(this.currentUser.id);

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
        }
      }, {
        key: "sumAmountInput",
        value: function sumAmountInput(id) {
          return this.warehouseBillDetailService.sumAmount(id).toPromise();
        }
      }, {
        key: "sumAmountOutput",
        value: function sumAmountOutput(id) {
          return this.orderDetailService.sumAmount(id).toPromise();
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(id, item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var cart, index, i, _item2, sumInput, sumOutput, _item3;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    cart = JSON.parse(localStorage.getItem('cart'));
                    index = -1;
                    i = 0;

                  case 3:
                    if (!(i < cart.length)) {
                      _context22.next = 11;
                      break;
                    }

                    _item2 = JSON.parse(cart[i]);

                    if (!(_item2.product.id == id)) {
                      _context22.next = 8;
                      break;
                    }

                    index = i;
                    return _context22.abrupt("break", 11);

                  case 8:
                    i++;
                    _context22.next = 3;
                    break;

                  case 11:
                    _context22.next = 13;
                    return this.sumAmountInput(item.product.id);

                  case 13:
                    sumInput = _context22.sent;
                    _context22.next = 16;
                    return this.sumAmountOutput(item.product.id);

                  case 16:
                    sumOutput = _context22.sent;

                    if (sumOutput == null) {
                      sumOutput = 0;
                    }

                    if (sumInput == null) {
                      sumInput = 0;
                    }

                    if (sumInput - sumOutput <= 0) {
                      $(function () {
                        var Toast = Swal.mixin({
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
                    } else {
                      if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                      } else {
                        _item3 = JSON.parse(cart[index]);
                        _item3.quantity += 1;
                        cart[index] = JSON.stringify(_item3);
                        localStorage.setItem("cart", JSON.stringify(cart));
                      }

                      this.loadCart();
                    }

                  case 20:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "decreaseProduct",
        value: function decreaseProduct(id, index) {
          var cart = JSON.parse(localStorage.getItem('cart'));
          var item = JSON.parse(cart[index]);
          item.quantity -= 1;

          if (item.quantity == 0) {
            this.remove(id);
          } else {
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }

          this.loadCart();
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.productService.getProduct(id).toPromise();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this51 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this51.listCategory = listCategory;
          });
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          this.items = [];
          var cart = JSON.parse(localStorage.getItem('cart'));

          for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);
            this.items.push({
              product: item.product,
              quantity: item.quantity
            });
          }

          this.sumTotalPrice();
        }
      }, {
        key: "sumTotalPrice",
        value: function sumTotalPrice() {
          this.total = 0;

          var _iterator10 = _createForOfIteratorHelper(this.items),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var item = _step10.value;
              this.total += item.product.price * (1 - item.product.saleOff / 100) * item.quantity;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          return this.total;
        }
      }, {
        key: "remove",
        value: function remove(productId) {
          var cart = JSON.parse(localStorage.getItem('cart'));

          for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);

            if (item.product.id == productId) {
              cart.splice(i, 1);
              break;
            }
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          this.loadCart();
        }
      }, {
        key: "removeItemFromCart",
        value: function removeItemFromCart(itemId) {
          var _this52 = this;

          this.itemService.deleteItem(itemId).subscribe(function () {
            _this52.getShoppingCartByUser(_this52.currentUser.id);

            $(function () {
              var Toast = Swal.mixin({
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
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return ShoppingCartComponent;
    }();

    ShoppingCartComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseBillDetailService"]
      }, {
        type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"]
      }, {
        type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-cart.component.scss */
      "./src/app/user/shopping-cart/shopping-cart.component.scss"))["default"]]
    })], ShoppingCartComponent);
    /***/
  },

  /***/
  "./src/app/user/user-order/user-order.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/user-order/user-order.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserOrderUserOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW9yZGVyL0U6XFxBbmd1bGFyXFxtYXJrZXQtZnJvbnRlbmQvc3JjXFxhcHBcXHVzZXJcXHVzZXItb3JkZXJcXHVzZXItb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLW9yZGVyL3VzZXItb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuIiwiLnJhdGVkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/user-order/user-order.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/user-order/user-order.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserOrderComponent */

  /***/
  function srcAppUserUserOrderUserOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserOrderComponent", function () {
      return UserOrderComponent;
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


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/order/orders.service */
    "./src/app/service/order/orders.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/product/product.service */
    "./src/app/service/product/product.service.ts");
    /* harmony import */


    var _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/review/review.service */
    "./src/app/service/review/review.service.ts");

    var UserOrderComponent = /*#__PURE__*/function () {
      function UserOrderComponent(categoryService, router, ordersService, authenticationService, productService, reviewService, activatedRoute) {
        var _this53 = this;

        _classCallCheck(this, UserOrderComponent);

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
        this.authenticationService.currentUser.subscribe(function (value) {
          _this53.currentUser = value;
        });
        this.activatedRoute.params.subscribe(function (params) {
          _this53.status = /true/i.test(params['status']);

          _this53.getAllOrderByUserAndStatus(_this53.currentUser.id, _this53.status);

          if (_this53.status == true) {
            _this53.getAllProductUserBought(_this53.currentUser.id);
          }
        });
      }

      _createClass(UserOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          $(function () {
            $('.textarea').summernote();
            $('#modal-review').on('hidden.bs.modal', function () {
              $('.textarea').summernote('reset');
              self.star = 0;
            });
          });
        }
      }, {
        key: "rate",
        value: function rate(star) {
          if (this.star == star) {
            this.star = 0;
          } else {
            this.star = star;
          }
        }
      }, {
        key: "getAllProductUserBought",
        value: function getAllProductUserBought(id) {
          var _this54 = this;

          this.ordersService.getAllProductUserBought(id).subscribe(function (listProduct) {
            _this54.listProduct = listProduct;

            _this54.listProduct.map(function (product) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this54, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        _context23.next = 2;
                        return this.getAllImageByProduct(product);

                      case 2:
                        product.image = _context23.sent;

                      case 3:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));
            });
          });
        }
      }, {
        key: "getOrderId",
        value: function getOrderId(id) {
          this.id = id;
        }
      }, {
        key: "getProductId",
        value: function getProductId(userId, productId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    this.productId = productId;
                    _context24.next = 3;
                    return this.getReview(userId, productId);

                  case 3:
                    this.currentReview = _context24.sent;

                    if (this.currentReview != null) {
                      $('#comment').summernote('pasteHTML', this.currentReview.comment);
                      $('.textarea').summernote('disable');
                    } else {
                      $('#comment').summernote('reset');
                      $('.textarea').summernote('enable');
                    }

                  case 5:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "getReview",
        value: function getReview(userId, productId) {
          return this.reviewService.getReviewByUserAndProduct(userId, productId).toPromise();
        }
      }, {
        key: "createReview",
        value: function createReview(star, productId) {
          var _this55 = this;

          var review = {
            comment: $('.textarea').val(),
            user: {
              id: this.currentUser.id
            },
            evaluate: star,
            product: {
              id: productId
            }
          };
          this.reviewService.createReview(review).subscribe(function () {
            $(function () {
              $('#modal-review').modal('hide');
            });
            _this55.star = 0;
            $('.textarea').summernote('reset');
            $(function () {
              var Toast = Swal.mixin({
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
                title: 'Xảy ra lỗi khi đánh giá'
              });
            });
          });
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(id) {
          var _this56 = this;

          this.ordersService.deleteOrders(id).subscribe(function () {
            _this56.ordersService.getAllOrder(false).subscribe(function (listOrder) {
              _this56.listOrders = listOrder;
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
        }
      }, {
        key: "getAllOrderByUserAndStatus",
        value: function getAllOrderByUserAndStatus(id, status) {
          var _this57 = this;

          this.ordersService.getAllOrderByUserAndStatus(id, status).subscribe(function (listOrder) {
            _this57.listOrders = listOrder;
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this58 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this58.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllImageByProduct",
        value: function getAllImageByProduct(product) {
          return this.productService.getAllImageByProduct(product.id).toPromise();
        }
      }, {
        key: "search",
        value: function search() {
          var name = this.searchForm.value.name;
          this.router.navigate(['../shop'], {
            queryParams: {
              name: name
            }
          });
        }
      }]);

      return UserOrderComponent;
    }();

    UserOrderComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
      }, {
        type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__["ReviewService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UserOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-order.component.scss */
      "./src/app/user/user-order/user-order.component.scss"))["default"]]
    })], UserOrderComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Angular\market-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map