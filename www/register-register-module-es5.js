(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Registration</ion-title>\n    <ion-button slot = \"start\">\n      <ion-back-button defaultHref = \"login\"></ion-back-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position = \"floating\">Username</ion-label>\n      <ion-input type = \"text\" [(ngModel)] = \"userEmail\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position = \"floating\">Password</ion-label>\n      <ion-input type = \"password\" [(ngModel)] = \"password\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position = \"floating\">Confirm Password</ion-label>\n      <ion-input type = \"password\" [(ngModel)] = \"cPassword\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button fill = \"solid\" expand = \"block\" color = \"dark\" (click) = \"signUp()\">Sign Up</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/register/register-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(auth, alert, router) {
          _classCallCheck(this, RegisterPage);

          this.auth = auth;
          this.alert = alert;
          this.router = router;
          this.userEmail = "";
          this.password = "";
          this.cPassword = "";
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signUp",
          value: function signUp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var userEmail, password, cPassword, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      userEmail = this.userEmail, password = this.password, cPassword = this.cPassword; // Verify passwords match

                      if (!(password !== cPassword)) {
                        _context.next = 4;
                        break;
                      }

                      this.showAlert("Error!", "Passwords do not match");
                      return _context.abrupt("return", console.error("Passwords do not match."));

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return this.auth.createUserWithEmailAndPassword(userEmail, password);

                    case 7:
                      result = _context.sent;
                      console.log(result);
                      this.showAlert("Success!", "Please login to continue.");
                      this.router.navigate(['./tabs']);
                      _context.next = 17;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](4);
                      console.dir(_context.t0);
                      this.showAlert("Error!", _context.t0.message);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 13]]);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Okay"]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map