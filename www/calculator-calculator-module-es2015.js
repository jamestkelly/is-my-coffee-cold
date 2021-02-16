(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"],{

/***/ "CzF6":
/*!***********************************************!*\
  !*** ./src/app/calculator/calculator.page.ts ***!
  \***********************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculator.page.html */ "Tczd");
/* harmony import */ var _calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.page.scss */ "uvr9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/coffee-preference.service */ "Dq5a");





let CalculatorPage = class CalculatorPage {
    //data: any;
    constructor(coffeeService) {
        this.coffeeService = coffeeService;
        this.isManual = false;
    }
    userSelectMethod($event) {
        this.isManual = !this.isManual;
    }
};
CalculatorPage.ctorParameters = () => [
    { type: _services_coffee_preference_service__WEBPACK_IMPORTED_MODULE_4__["CoffeePreferenceService"] }
];
CalculatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculator',
        template: _raw_loader_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculatorPage);



/***/ }),

/***/ "Tczd":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color = \"cream\">\n    <ion-title>\n      Calculator\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-item color = \"cream\">\n      <ion-label>Manual Entry</ion-label>\n      <ion-toggle (ionChange) = \"userSelectMethod($event)\" [checked] = \"isManual\" color = \"primarygreen\"></ion-toggle>\n    </ion-item>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "sIv/":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.module.ts ***!
  \*************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator.page */ "CzF6");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculator-routing.module */ "uahL");








let CalculatorPageModule = class CalculatorPageModule {
};
CalculatorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _calculator_routing_module__WEBPACK_IMPORTED_MODULE_7__["CalculatorPageRoutingModule"]
        ],
        declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_5__["CalculatorPage"]]
    })
], CalculatorPageModule);



/***/ }),

/***/ "uahL":
/*!*********************************************************!*\
  !*** ./src/app/calculator/calculator-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function() { return CalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "CzF6");




const routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"],
    }
];
let CalculatorPageRoutingModule = class CalculatorPageRoutingModule {
};
CalculatorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalculatorPageRoutingModule);



/***/ }),

/***/ "uvr9":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --padding-top: 10%;\n  --ion-background-color: #feffe4;\n}\n\n.input-group {\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  --background-color: transparent;\n}\n\n.display-row {\n  --ion-background-color: #fa4659;\n  align-items: center;\n  justify-content: center;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.icon-position {\n  position: absolute;\n  left: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSiIsImZpbGUiOiJjYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xuICAgIC0tcGFkZGluZy1lbmQ6IDUlO1xuICAgIC0tcGFkZGluZy10b3A6IDEwJTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZmU0O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNwbGF5LXJvdyB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhNDY1OTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3JzIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5pY29uLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCU7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=calculator-calculator-module-es2015.js.map