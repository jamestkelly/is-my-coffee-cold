(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["display-results-display-results-module"],{

/***/ "EB+g":
/*!******************************************************************************!*\
  !*** ./src/app/calculator/display-results/display-results-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DisplayResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResultsPageRoutingModule", function() { return DisplayResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _display_results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-results.page */ "TUsd");




const routes = [
    {
        path: '',
        component: _display_results_page__WEBPACK_IMPORTED_MODULE_3__["DisplayResultsPage"]
    }
];
let DisplayResultsPageRoutingModule = class DisplayResultsPageRoutingModule {
};
DisplayResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisplayResultsPageRoutingModule);



/***/ }),

/***/ "FSme":
/*!**********************************************************************!*\
  !*** ./src/app/calculator/display-results/display-results.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5LXJlc3VsdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "NPxJ":
/*!**********************************************************************!*\
  !*** ./src/app/calculator/display-results/display-results.module.ts ***!
  \**********************************************************************/
/*! exports provided: DisplayResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResultsPageModule", function() { return DisplayResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _display_results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-results-routing.module */ "EB+g");
/* harmony import */ var _display_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-results.page */ "TUsd");







let DisplayResultsPageModule = class DisplayResultsPageModule {
};
DisplayResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _display_results_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisplayResultsPageRoutingModule"]
        ],
        declarations: [_display_results_page__WEBPACK_IMPORTED_MODULE_6__["DisplayResultsPage"]]
    })
], DisplayResultsPageModule);



/***/ }),

/***/ "TUsd":
/*!********************************************************************!*\
  !*** ./src/app/calculator/display-results/display-results.page.ts ***!
  \********************************************************************/
/*! exports provided: DisplayResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResultsPage", function() { return DisplayResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_display_results_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./display-results.page.html */ "yalM");
/* harmony import */ var _display_results_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-results.page.scss */ "FSme");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DisplayResultsPage = class DisplayResultsPage {
    constructor() { }
    ngOnInit() {
    }
};
DisplayResultsPage.ctorParameters = () => [];
DisplayResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-display-results',
        template: _raw_loader_display_results_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_display_results_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DisplayResultsPage);



/***/ }),

/***/ "yalM":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/display-results/display-results.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color = \"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>displayResults</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=display-results-display-results-module-es2015.js.map