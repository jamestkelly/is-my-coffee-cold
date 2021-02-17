(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"], {
    /***/
    "GNdb":
    /*!*******************************************************!*\
      !*** ./src/app/reset-password/reset-password.page.ts ***!
      \*******************************************************/

    /*! exports provided: ResetPasswordPage */

    /***/
    function GNdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function () {
        return ResetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password.page.html */
      "joop");
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      "jLJT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(auth, alert, location, router) {
          _classCallCheck(this, ResetPasswordPage);

          this.auth = auth;
          this.alert = alert;
          this.location = location;
          this.router = router;
          this.userEmail = "";
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var userEmail, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      userEmail = this.userEmail;

                      if (!(userEmail === "" || userEmail === " ")) {
                        _context.next = 4;
                        break;
                      }

                      this.showAlert("Error!", "Please enter a valid email address.");
                      return _context.abrupt("return", console.error("Please enter a valid email address."));

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return this.auth.sendPasswordResetEmail(userEmail);

                    case 7:
                      result = _context.sent;
                      this.showAlert("Success!", "Please check your email for a link to reset your password.");
                      console.log(result);
                      _context.next = 15;
                      break;

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](4);
                      console.dir(_context.t0);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 12]]);
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

        return ResetPasswordPage;
      }();

      ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordPage);
      /***/
    },

    /***/
    "Rr42":
    /*!*********************************************************!*\
      !*** ./src/app/reset-password/reset-password.module.ts ***!
      \*********************************************************/

    /*! exports provided: ResetPasswordPageModule */

    /***/
    function Rr42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function () {
        return ResetPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      "X1sl");
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-password.page */
      "GNdb");

      var ResetPasswordPageModule = function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      };

      ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
      })], ResetPasswordPageModule);
      /***/
    },

    /***/
    "X1sl":
    /*!*****************************************************************!*\
      !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ResetPasswordPageRoutingModule */

    /***/
    function X1sl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function () {
        return ResetPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password.page */
      "GNdb");

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
      }];

      var ResetPasswordPageRoutingModule = function ResetPasswordPageRoutingModule() {
        _classCallCheck(this, ResetPasswordPageRoutingModule);
      };

      ResetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPasswordPageRoutingModule);
      /***/
    },

    /***/
    "jLJT":
    /*!*********************************************************!*\
      !*** ./src/app/reset-password/reset-password.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function jLJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --padding-top: 10%;\n  --ion-background-color: #fa4659;\n}\n\nion-input {\n  --background-color: transparent;\n  --border-color: transparent;\n}\n\nion-nav-bar {\n  --padding-top: 1%;\n}\n\n.header-colour {\n  --background: #fa4659;\n}\n\n.input-group {\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  --background-color: transparent;\n}\n\n.display-row {\n  --ion-background-color: #fa4659;\n  align-items: center;\n  justify-content: center;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.icon-position {\n  position: absolute;\n  left: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbiAgICAtLXBhZGRpbmctZW5kOiA1JTtcbiAgICAtLXBhZGRpbmctdG9wOiAxMCU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhNDY1OTtcbn1cblxuaW9uLWlucHV0IHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLW5hdi1iYXIge1xuICAgIC0tcGFkZGluZy10b3A6IDElO1xufVxuXG4uaGVhZGVyLWNvbG91ciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmE0NjU5O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNwbGF5LXJvdyB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhNDY1OTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3JzIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5pY29uLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCU7XG59Il19 */";
      /***/
    },

    /***/
    "joop":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function joop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class = \"header-colour\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color = \"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class = \"display-row\">\n    <ion-text class = \"display-row\" color = \"light\">\n      <h3>Forgot Password?</h3>\n    </ion-text>\n    <ion-item class = \"display-row\" no-lines color = \"none\" lines = \"none\">\n      <img height = \"150px\" width = \"150px\" src = \"../../assets/icon/password-reset-transparent.png\">\n    </ion-item>\n    <ion-text class = \"display-row\" color = \"light\">\n      <p>That's okay! It happens to the best of us, just enter your email and you'll be sent a link to reset your password.</p>\n    </ion-text>\n  </ion-row>\n\n  <div class = \"input-group\">\n    <ion-item color = \"light\">\n      <ion-input type = \"email\" placeholder = \"Email\" [(ngModel)] = \"userEmail\">\n      </ion-input>\n    </ion-item>\n  </div>\n\n  <ion-button fill = \"solid\" expand = \"block\" color = \"light\" (click) = \"resetPassword()\">\n    Send Reset Link\n  </ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=reset-password-reset-password-module-es5.js.map