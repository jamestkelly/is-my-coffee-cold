(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"], {
    /***/
    "CzF6":
    /*!***********************************************!*\
      !*** ./src/app/calculator/calculator.page.ts ***!
      \***********************************************/

    /*! exports provided: CalculatorPage */

    /***/
    function CzF6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorPage", function () {
        return CalculatorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calculator.page.html */
      "Tczd");
      /* harmony import */


      var _calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calculator.page.scss */
      "uvr9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/coffee-preference.service */
      "Dq5a");

      var CalculatorPage = /*#__PURE__*/function () {
        function CalculatorPage(coffeeService) {
          _classCallCheck(this, CalculatorPage);

          this.coffeeService = coffeeService;
          this.preferenceList = [];
          this.coffeeType = "";
          this.cityName = "";
          this.countryName = "";
          this.preferenceArray = [];
          this.isManual = false;
        }

        _createClass(CalculatorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

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
          }
        }, {
          key: "userSelectMethod",
          value: function userSelectMethod($event) {
            this.isManual = !this.isManual;
          }
        }, {
          key: "calculatorSwitch",
          value: function calculatorSwitch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var preferenceArray, i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      preferenceArray = [];

                      if (this.isManual) {
                        preferenceArray = [this.coffeeType, this.cityName, this.countryName];
                        console.log(this.preferenceArray);
                      } else {
                        console.log(this.preferenceChosen);
                        /* Relatively clunky solution but it works, i.e. if a user has multiple preferences with
                         * the same name, then this will only return the last preference object it finds
                         * Possible ways to mitigate:
                         *        [1]: Write a function on pages where the user creates preference objects to check if the
                         *              preference name already exists, if yes, they must select a different name.
                         *        [2]: Pull this unique id of the preference object and use that to identify the object to pass forward
                         *        [3]: Get index position in list from *ngFor loop and store it and use in function
                        */

                        for (i = 0; i < this.preferenceList.length; i++) {
                          if (this.preferenceChosen === this.preferenceList[i].preferenceName) {
                            preferenceArray = [this.preferenceList[i].coffeeType, this.preferenceList[i].cityName, this.preferenceList[i].countryName];
                            console.log(preferenceArray);
                          }
                        }
                      }

                      this.calculateCoffee(preferenceArray);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "calculateCoffee",
          value: function calculateCoffee(preferenceArray) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var countryCode, cityID, coffeeTemp, celsius, seconds, timeRemaining;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      countryCode = "AU"; // Temporary for Australia only use

                      cityID = this.getAusCityId(preferenceArray[1]);
                      console.log(countryCode);
                      console.log(cityID);
                      coffeeTemp = this.coffeeService.getCoffeeTemp(preferenceArray[0]);
                      console.log(coffeeTemp);
                      _context2.next = 8;
                      return this.getWeather(cityID);

                    case 8:
                      celsius = _context2.sent;
                      console.log(celsius);
                      _context2.next = 12;
                      return this.coffeeService.modifiedEuler(celsius, coffeeTemp);

                    case 12:
                      seconds = _context2.sent;
                      console.log(seconds);
                      timeRemaining = this.coffeeService.convertTime(seconds);
                      console.log(timeRemaining);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getAusCityId",
          value: function getAusCityId(cityName) {
            var citiesDictionary = [["Adelaide", 2078025], ["Brisbane", 2174003], ["Cairns", 7839567], ["Canberra", 2172517], ["Darwin", 2073124], ["Hobart", 7839672], ["Melbourne", 2158177], ["Perth", 2063523], ["Sydney", 2147714]];

            for (var j = 0; j < citiesDictionary.length; j++) {
              if (cityName === citiesDictionary[j][0]) {
                return citiesDictionary[j][1];
              }
            }
          }
        }, {
          key: "getWeather",
          value: function getWeather(cityID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var key, response, json, celsius;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      key = '92b30ef73aba0e9531f56ed3e67666a8';
                      _context3.next = 3;
                      return fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=metric' + '&appid=' + key);

                    case 3:
                      response = _context3.sent;
                      _context3.next = 6;
                      return response.json();

                    case 6:
                      json = _context3.sent;
                      celsius = json.main.temp;
                      return _context3.abrupt("return", celsius);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return CalculatorPage;
      }();

      CalculatorPage.ctorParameters = function () {
        return [{
          type: _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_4__["CoffeePreferenceService"]
        }];
      };

      CalculatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculator',
        template: _raw_loader_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CalculatorPage);
      /***/
    },

    /***/
    "Tczd":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tczd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color = \"light\">\n    <ion-title>\n      Calculator\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset = 2.25 size = 12>\n        <ion-item no-lines color = \"none\" lines = \"none\">\n          <img height = \"150px\" width = \"150px\" src = \"../../assets/icon/calculate-coffee-transparent.png\">\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size = 12>\n        <ion-item>\n          <ion-label>Manual Entry</ion-label>\n          <ion-toggle (ionChange) = \"userSelectMethod($event)\" [checked] = \"isManual\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <span *ngIf = \"isManual; else elseBlock\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position = \"floating\">Country</ion-label>\n            <ion-select placeholder = \"Australia\" type = \"text\" [(ngModel)] = \"countryName\">\n              <ion-select-option value = \"Australia\">Australia</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position = \"floating\">City</ion-label>\n            <ion-select placeholder = \"Sydney\" type = \"text\" [(ngModel)] = \"cityName\">\n              <ion-select-option value = \"Adelaide\">Adelaide</ion-select-option>\n              <ion-select-option value = \"Brisbane\">Brisbane</ion-select-option>\n              <ion-select-option value = \"Cairns\">Cairns</ion-select-option>\n              <ion-select-option value = \"Canberra\">Canberra</ion-select-option>\n              <ion-select-option value = \"Darwin\">Darwin</ion-select-option>\n              <ion-select-option value = \"Hobart\">Hobart</ion-select-option>\n              <ion-select-option value = \"Melbourne\">Melbourne</ion-select-option>\n              <ion-select-option value = \"Perth\">Perth</ion-select-option>\n              <ion-select-option value = \"Sydney\">Sydney</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position = \"floating\">Coffee Type</ion-label>\n            <ion-select placeholder = \"Flat White\" type = \"text\" [(ngModel)] = \"coffeeType\">\n              <ion-select-option value = \"Cappuccino\">Cappuccino</ion-select-option>\n              <ion-select-option value = \"Flat White\">Flat White</ion-select-option>\n              <ion-select-option value = \"Latte\">Latte</ion-select-option>\n              <ion-select-option value = \"Long Black\">Long Black</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill = \"solid\" expand = \"block\" color = \"dark\" (click) = \"calculatorSwitch()\">\n            Calculate\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </span>\n\n    <ng-template #elseBlock>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position = \"floating\">Preference</ion-label>\n            <ion-select placeholder = \"Preference Name\" type = \"text\" [(ngModel)] = \"preferenceChosen\"\n              [selectedText] = \"preferenceChosen\">\n              <ion-select-option *ngFor = \"let preference of preferenceList; let i = index\"\n                [value] = \"preference.preferenceName\">\n                  {{ preference.preferenceName }}\n              </ion-select-option>\n              <ion-select-option value = \"None\">None</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill = \"solid\" expand = \"block\" color = \"dark\" (click) = \"calculatorSwitch()\">\n            Calculate\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n  <ion-row>\n    <ion-button fill = \"solid\" expand = \"block\" color = \"dark\" routerLink=\"/tabs/calculator/display-results\" routerDirection=\"forward\">\n      Test\n    </ion-button>\n  </ion-row>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "sIv/":
    /*!*************************************************!*\
      !*** ./src/app/calculator/calculator.module.ts ***!
      \*************************************************/

    /*! exports provided: CalculatorPageModule */

    /***/
    function sIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function () {
        return CalculatorPageModule;
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


      var _calculator_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calculator.page */
      "CzF6");
      /* harmony import */


      var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calculator-routing.module */
      "uahL");

      var CalculatorPageModule = function CalculatorPageModule() {
        _classCallCheck(this, CalculatorPageModule);
      };

      CalculatorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _calculator_routing_module__WEBPACK_IMPORTED_MODULE_6__["CalculatorPageRoutingModule"]],
        declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_5__["CalculatorPage"]]
      })], CalculatorPageModule);
      /***/
    },

    /***/
    "uahL":
    /*!*********************************************************!*\
      !*** ./src/app/calculator/calculator-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CalculatorPageRoutingModule */

    /***/
    function uahL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function () {
        return CalculatorPageRoutingModule;
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


      var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calculator.page */
      "CzF6");

      var routes = [{
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
      }, {
        path: 'display-results',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | display-results-display-results-module */
          "display-results-display-results-module").then(__webpack_require__.bind(null,
          /*! ./display-results/display-results.module */
          "NPxJ")).then(function (m) {
            return m.DisplayResultsPageModule;
          });
        }
      }];

      var CalculatorPageRoutingModule = function CalculatorPageRoutingModule() {
        _classCallCheck(this, CalculatorPageRoutingModule);
      };

      CalculatorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalculatorPageRoutingModule);
      /***/
    },

    /***/
    "uvr9":
    /*!*************************************************!*\
      !*** ./src/app/calculator/calculator.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function uvr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --ion-background-color: #ffffff;\n}\n\n.input-group {\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  --background-color: transparent;\n}\n\n.display-row {\n  --ion-background-color: #fa4659;\n  align-items: center;\n  justify-content: center;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.icon-position {\n  position: absolute;\n  left: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoiY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbiAgICAtLXBhZGRpbmctZW5kOiA1JTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNwbGF5LXJvdyB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhNDY1OTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3JzIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5pY29uLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCU7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=calculator-calculator-module-es5.js.map