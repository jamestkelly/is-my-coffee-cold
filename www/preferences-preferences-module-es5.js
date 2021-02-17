(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preferences-preferences-module"], {
    /***/
    "082A":
    /*!***********************************************************!*\
      !*** ./src/app/preferences/preferences-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PreferencesPageRoutingModule */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreferencesPageRoutingModule", function () {
        return PreferencesPageRoutingModule;
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


      var _preferences_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./preferences.page */
      "qk+q");

      var routes = [{
        path: '',
        component: _preferences_page__WEBPACK_IMPORTED_MODULE_3__["PreferencesPage"]
      }, {
        path: 'make-preference',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | make-preference-make-preference-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./make-preference/make-preference.module */
          "7Hsg")).then(function (m) {
            return m.MakePreferencePageModule;
          });
        }
      }];

      var PreferencesPageRoutingModule = function PreferencesPageRoutingModule() {
        _classCallCheck(this, PreferencesPageRoutingModule);
      };

      PreferencesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreferencesPageRoutingModule);
      /***/
    },

    /***/
    "5kK8":
    /*!***************************************************!*\
      !*** ./src/app/preferences/preferences.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function kK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button {\n  --background: #2eb872;\n  --background-hover: #13492e;\n  --color: #feffe4;\n  --border-color: #feffe4;\n}\n\nion-content {\n  --padding-start: 5%;\n  --padding-end: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZWZlcmVuY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicHJlZmVyZW5jZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzJlYjg3MjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMxMzQ5MmU7XG4gICAgLS1jb2xvcjogI2ZlZmZlNDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZlZmZlNDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG4gICAgLS1wYWRkaW5nLWVuZDogNSU7XG59Il19 */";
      /***/
    },

    /***/
    "KqXm":
    /*!***************************************************!*\
      !*** ./src/app/preferences/preferences.module.ts ***!
      \***************************************************/

    /*! exports provided: PreferencesPageModule */

    /***/
    function KqXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreferencesPageModule", function () {
        return PreferencesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _preferences_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./preferences.page */
      "qk+q");
      /* harmony import */


      var _preferences_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./preferences-routing.module */
      "082A");

      var PreferencesPageModule = function PreferencesPageModule() {
        _classCallCheck(this, PreferencesPageModule);
      };

      PreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_6__["PreferencesPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        declarations: [_preferences_page__WEBPACK_IMPORTED_MODULE_5__["PreferencesPage"]]
      })], PreferencesPageModule);
      /***/
    },

    /***/
    "LJR/":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preferences/preferences.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function LJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent] = \"true\">\n  <ion-toolbar color = \"cream\">\n    <ion-title>\n      Preferences\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor = \"let item of preferenceList\">\n    <span *ngIf = \"!item.isEdit; else elseBlock\">\n      <ion-card-header>\n        <ion-card-title>{{ item.preferenceName }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row>\n          {{ item.coffeeType }}\n        </ion-row>\n        <ion-row>\n          {{ item.cityName }}, {{ item.countryName }}\n        </ion-row>\n\n        <ion-row>\n          <ion-button shape = \"round\" color = \"dark\" size = \"small\" (click) = \"editPreference(item)\">\n            <ion-icon size = \"small\" slot = \"icon-only\" name = \"create\"></ion-icon>\n          </ion-button>\n          <ion-button shape = \"round\" color = \"dark\" size = \"small\" (click) = \"removePreference(item.id)\">\n            <ion-icon size = \"small\" slot = \"icon-only\" name = \"trash\"></ion-icon>\n          </ion-button>\n        </ion-row>\n      </ion-card-content>\n    </span>\n    <ng-template #elseBlock>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-button fill = \"solid\" color = \"dark\" size = \"small\" (click) = \"item.isEdit = false\">\n                Cancel\n              </ion-button>\n              <ion-button fill = \"solid\" color = \"dark\" size = \"small\" (click) = \"updatePreference(item)\">\n                Update\n              </ion-button>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position = \"floating\"><strong>Preference Name</strong></ion-label>\n          <ion-input type = \"text\" [(ngModel)] = \"item.EditPreferenceName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position = \"floating\"><strong>Coffee Type</strong></ion-label>\n          <ion-select placeholder = \"Flat White\" type = \"text\" [(ngModel)] = \"item.EditCoffee\">\n            <ion-select-option value = \"Cappuccino\">Cappuccino</ion-select-option>\n            <ion-select-option value = \"Flat White\">Flat White</ion-select-option>\n            <ion-select-option value = \"Latte\">Latte</ion-select-option>\n            <ion-select-option value = \"Long Black\">Long Black</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position = \"floating\"><strong>City</strong></ion-label>\n          <ion-select placeholder = \"Brisbane\" type = \"text\" [(ngModel)] = \"item.EditCity\">\n            <ion-select-option value = \"Adelaide\">Adelaide</ion-select-option>\n            <ion-select-option value = \"Brisbane\">Brisbane</ion-select-option>\n            <ion-select-option value = \"Cairns\">Cairns</ion-select-option>\n            <ion-select-option value = \"Canberra\">Canberra</ion-select-option>\n            <ion-select-option value = \"Darwin\">Darwin</ion-select-option>\n            <ion-select-option value = \"Hobart\">Hobart</ion-select-option>\n            <ion-select-option value = \"Melbourne\">Melbourne</ion-select-option>\n            <ion-select-option value = \"Perth\">Perth</ion-select-option>\n            <ion-select-option value = \"Sydney\">Sydney</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position = \"floating\"><strong>Country</strong></ion-label>\n          <ion-select placeholder = \"Australia\" type = \"text\" [(ngModel)] = \"item.EditCountry\">\n            <ion-select-option value = \"Australia\">Australia</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ng-template>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/tabs/preferences/make-preference\" routerDirection=\"forward\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "qk+q":
    /*!*************************************************!*\
      !*** ./src/app/preferences/preferences.page.ts ***!
      \*************************************************/

    /*! exports provided: PreferencesPage */

    /***/
    function qkQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreferencesPage", function () {
        return PreferencesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_preferences_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./preferences.page.html */
      "LJR/");
      /* harmony import */


      var _preferences_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./preferences.page.scss */
      "5kK8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/coffee-preference.service */
      "Dq5a");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PreferencesPage = /*#__PURE__*/function () {
        function PreferencesPage(coffeeService, route, navCtrl, fb) {
          _classCallCheck(this, PreferencesPage);

          this.coffeeService = coffeeService;
          this.route = route;
          this.navCtrl = navCtrl;
          this.fb = fb; //export class PreferencesPage implements OnInit {

          this.preferenceList = [];
          this.preferenceData = {};
        }

        _createClass(PreferencesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.preferenceForm = this.fb.group({
              preferenceName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              coffeeType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              cityName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              countryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
            this.coffeeService.readPreferences().subscribe(function (data) {
              _this.preferenceList = data.map(function (output) {
                return {
                  id: output.payload.doc.id,
                  isEdit: false,
                  preferenceName: output.payload.doc.data()['preferenceName'],
                  coffeeType: output.payload.doc.data()['coffeeType'],
                  cityName: output.payload.doc.data()['cityName'],
                  countryName: output.payload.doc.data()['countryName']
                };
              });
              console.log(_this.preferenceList);
            });
          } // Implements createPreference() from coffeeService to create a user preference.

        }, {
          key: "createPreference",
          value: function createPreference() {
            var _this2 = this;

            console.log(this.preferenceForm.value);
            this.coffeeService.createPreference(this.preferenceForm.value).then(function (response) {
              _this2.preferenceForm.reset();

              console.log(response);
            })["catch"](function (error) {
              console.log(error);
            });
          } // Method to delete a preference object

        }, {
          key: "removePreference",
          value: function removePreference(id) {
            this.coffeeService.deletePreference(id);
          } // Method to edit a preference object

        }, {
          key: "editPreference",
          value: function editPreference(preference) {
            preference.isEdit = true;
            preference.EditPreferenceName = preference.preferenceName;
            preference.EditCoffee = preference.coffeeType;
            preference.EditCity = preference.cityName;
            preference.EditCountry = preference.countryName;
          } // Method to update a preference object

        }, {
          key: "updatePreference",
          value: function updatePreference(preferenceRow) {
            var preference = {};
            preference['preferenceName'] = preferenceRow.EditPreferenceName;
            preference['coffeeType'] = preferenceRow.EditCoffee;
            preference['cityName'] = preferenceRow.EditCity;
            preference['countryName'] = preferenceRow.EditCountry;
            this.coffeeService.updatePreferences(preferenceRow.id, preference);
            preferenceRow.isEdit = false;
          }
        }]);

        return PreferencesPage;
      }();

      PreferencesPage.ctorParameters = function () {
        return [{
          type: _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_6__["CoffeePreferenceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      PreferencesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-preferences',
        template: _raw_loader_preferences_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_preferences_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PreferencesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=preferences-preferences-module-es5.js.map