(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"neutral-grey\">\n  <div id=\"resume\" class=\"col-sm-12 resume-holder\">\n\n    <div id=\"left_column\" class=\"col-sm-4\">\n      <div class=\"innerDiv col-sm-12 name_title\">\n        <span id=\"name_holder\">Philip J. <br/>\n          Spelman, <br/>\n          M.A.</span>\n      </div>\n      <div class=\"innerDiv offset-sm-3\">\n        <div id=\"tagline\">\n          <h2 class=\"left\">\n            SOFTWARE DEVELOPER, RESEARCHER, CLINICIAN\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"hr-left col-sm-11\"></div>\n      <div class=\"innerDiv offset-sm-3\">\n        <div class=\"contact-info\">\n          +1-206-920-3951<br/>\n          <a href=\"mailto:phil_spelman@hotmail.com\">phil_spelman@hotmail.com</a><br/>\n          <a href=\"http://www.linkedin.com/in/philspelman\" target=\"_blank\">linkedin.com/in/philspelman</a><br/>\n          <a href=\"https://github.com/pspelman\" target=\"_blank\">github.com/pspelman</a><br/>\n          <a href=\"https://www.researchgate.net/profile/Philip_Spelman\" target=\"_blank\">researchgate.net/profile/Philip_Spelman</a><br/>\n        </div>\n      </div>\n      <div class=\"hr-left col-sm-11\"></div>\n\n      <div class=\"innerDiv toolbox\">\n        <h1 class=\"toolbox-heading-h1\">Technical Toolbox</h1>\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Front-end</h2>\n          <ul>\n            <li>Angular, EJS</li>\n            <li>JavaScript</li>\n            <li>React</li>\n            <li>HTML, CSS, SCSS</li>\n            <li>jQuery, AJAX</li>\n          </ul>\n        </div>\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Back-end</h2>\n          <ul>\n            <li>JavaScript (NodeJS)</li>\n            <li>Java (Spring, JavaFX)</li>\n            <li>Python (Flask, Django)</li>\n            <li>PHP</li>\n          </ul>\n        </div>\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Database</h2>\n          <ul>\n            <li>MongoDB, Postgres</li>\n            <li>Microsoft SQL Server</li>\n            <li>MySQL, SQLite</li>\n            <li>Access, Excel</li>\n            <li>MySQL Workbench</li>\n            <li>DataGrip</li>\n          </ul>\n        </div>\n\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">IDEs / Tools</h2>\n          <ul>\n            <li>IntelliJ</li>\n            <li>WebStorm</li>\n            <li>PyCharm</li>\n            <li>Spring Tool Suite</li>\n            <li>Postman</li>\n            <li>Android Studio</li>\n          </ul>\n        </div>\n\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Misc Tech</h2>\n          <ul>\n            <li>MATLAB</li>\n            <li>Cogent toolbox</li>\n            <li>Arduino</li>\n            <li>Physiolab</li>\n          </ul>\n        </div>\n\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Experimentation</h2>\n          <ul>\n            <li>Experimental</li>\n            <li>Quasi-experimental</li>\n            <li>Independent measures</li>\n            <li>Repeated measures</li>\n            <li>ESM / EMA</li>\n          </ul>\n        </div>\n\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Statistics</h2>\n          <ul>\n            <li>Regression</li>\n            <li>ANOVA, ANCOVA</li>\n            <li>Structural Eq Modeling</li>\n            <li>EFA / CFA</li>\n            <li>Stata, SPSS, R, Mplus</li>\n          </ul>\n        </div>\n\n\n        <div class=\"toolbox-div\">\n          <h2 class=\"toolbox-heading\">Design Tools</h2>\n          <ul>\n            <li>Photoshop</li>\n            <li>Illustrator</li>\n            <li>Dreamweaver</li>\n            <li>Premiere Pro</li>\n          </ul>\n        </div>\n\n        <!--<p>Full-Stack Web Development</p>-->\n        <!--<p>Database design</p>-->\n        <!--<p>Statistical Analysis</p>-->\n        <!--<p>Academic Research</p>-->\n        <!--<p>Experimental design</p>-->\n        <!--<p>Psychological assessment</p>-->\n        <!--<p>Clinical intervention</p>-->\n        <!--<p>Treatment planning</p>-->\n        <!--<p>Risk assessment</p>-->\n      </div>\n    </div>\n\n    <div id=\"right_column\" class=\"col-sm-8 \">\n\n      <div class=\"major-section offset-sm-1\" >\n        <div class=\"col-sm-10\">\n          <h1 class=\"section-heading\">\n            Programming Experience\n          </h1>\n        </div>\n\n        <div class=\"hr-right col-sm-12\"></div>\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-heading\">Certificate of Achievement, Full Stack Web Development | Coding Dojo</h5>\n          <span class=\"small\">A rigorous full-stack, software development training program including over 1200 hours of coding. Covered front-end fundamentals, RESTful best practices, and development in three full stacks: Python, MEAN, and Java. Learned to program and deploy RESTFUL projects in three weeks.\n          </span>\n        </div>\n\n\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-heading\">\n            Certificate in Database Management\n          </h5>\n          <span>This was a 9-month night program covering fundamentals of theory, design, and implementation of relational databases.\n          </span>\n        </div>\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-project-heading\">Accessible Online Purchase Tasks for Researchers</h5>\n          <span class=\"project-description\"><b><em>Description:</em></b> The goal of this project is a researcher-friendly tool that will facilitate gathering participant purchase task data for behavioral economic research.\n          </span><br/>\n          <span class=\"small tech\"><b>Tech:</b> Python (Django), Angular, MySQL, R</span>\n        </div>\n\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-project-heading\">(Emotion) Attention Network Task (ANT)</h5>\n          <span class=\"project-description\"><b><em>Description:</em></b> A version of the Attention Network Task administered via MATLAB. Researchers may define their own lists of words and administer the task with a button box or user's keyboard.\n          </span><br/>\n          <span class=\"small tech\"><b>Tech:</b> MATLAB, FTDI UM245R USB-to-Parallel Interface, homemade button box</span>\n        </div>\n\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-project-heading\">Crate Pushing Game</h5>\n          <span class=\"project-description\"><b><em>Description:</em></b> Final project for a graduate-level course in rich web application development. The crate pusher game features a small bulldozer controlled by the user. It implements randomly generated puzzles and saves them to the DB if the user wins.\n          </span><br/>\n          <span class=\"small tech\"><b>Tech:</b> JavaScript, PHP, MySQL, AJAX, HTML, CSS</span>\n        </div>\n\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-project-heading\">Reaction Time Benchmarking</h5>\n          <span class=\"project-description\"><b><em>Description:</em></b>Feature testing of the mEMA app for research using ecological momentary assessment. Currently exploring ways to benchmark the accuracy of the reaction time feature. Designed several approaches for testing its accuracy, including using MATLAB to communicate with light sensors, Arduino-powered robotic styluses attached to servo motors, and simulated finger. (see examples)</span><br/>\n          <li><a href=\"https://youtu.be/QcF9M9o2cFw\" target=\"_blank\">Arduino button presser</a> (https://youtu.be/QcF9M9o2cFw)</li>\n          <li><a href=\"https://youtu.be/d3ZfF-KDVTE\" target=\"_blank\">Switch test</a> (https://youtu.be/d3ZfF-KDVTE)</li>\n          <li><a href=\"https://youtu.be/VIvsph1iD54\" target=\"_blank\">Finger press simulation</a> (https://youtu.be/VIvsph1iD54)</li>\n          <span class=\"small tech\"><b>Tech:</b> Arduino, MATLAB, FTDI UM245R Interface, SG90 micro servo motors</span>\n        </div>\n\n      </div>\n\n      <div class=\"major-section offset-sm-1\" >\n        <div class=\"col-sm-10\">\n          <h1 class=\"section-heading\">\n            Education\n          </h1>\n        </div>\n\n        <div class=\"hr-right col-sm-12\"></div>\n\n        <div class=\"sub-section col-sm-12\">\n          <h5 class=\"font-weight-bold sub-section-heading\">\n            M.A. Clinical Psychology | 3.85 GPA\n          </h5>\n          <h6>Doctoral Program in Clinical Psychology | University of South Dakota</h6>\n        </div>\n\n        <div class=\"sub-section col-sm-11\">\n          <h5 class=\"font-weight-bold sub-section-heading\">\n            B.S. Psychology | 3.66 GPA\n          </h5>\n          <h6>Seattle University</h6>\n        </div>\n\n      </div>\n\n\n\n      <div class=\"major-section offset-sm-1\" >\n        <div class=\"col-sm-10\">\n          <h1 class=\"section-heading\">\n            Other Skills & Experience\n          </h1>\n        </div>\n\n        <div class=\"hr-right col-sm-12\"></div>\n\n        <div class=\"sub-section-other col-sm-12\">\n          <li class=\"col-sm-12\">Eagle Scout</li>\n          <li class=\"col-sm-12\">Kung Fu (8-Step Praying Mantis) > Black belt</li>\n          <li class=\"col-sm-12\">Subjects Taught: Psychology, Kung Fu, French, English</li>\n          <li class=\"col-sm-12\">Fluent in French</li>\n          <li class=\"col-sm-12\">Nonprofit board member</li>\n          <li class=\"col-sm-12\">Behavioral economics</li>\n          <li class=\"col-sm-12\">Peer review, Research management tools</li>\n          <li class=\"col-sm-12\">Internal Review Board proposals</li>\n          <li class=\"col-sm-12\">Crisis Intervention</li>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<tr *ngFor=\"let item of frontEnd\">-->\n<!--<td>{{item}}</td>-->\n<!--</tr>-->\n<!--<br/>-->\n<!--<td class=\"flex-row\">SHITS</td>-->\n<!--<tr *ngFor=\"let item of backEnd\">-->\n<!--{{item}}-->\n<!--</tr>-->\n\n\n\n\n\n<!--<div class=\"offset-sm-3\"></div>-->\n<!--&lt;!&ndash;todo: replace hr div with ng element &ndash;&gt;-->\n<!--<div class=\"hr-left col-sm-11\"></div>-->\n\n<!--<div class=\"resume-element\">-->\n<!--<h1>-->\n<!--Education-->\n<!--</h1>-->\n<!--<div class=\"education-item offset-sm-1\">-->\n<!--<h2 class=\"offset-sm-2\">SEATTLE UNIVERSITY</h2>-->\n<!--<span>Bachelor of Science in Psychology</span>-->\n<!--</div>-->\n\n<!--<div class=\"education-item offset-sm-1\">-->\n<!--<h2 class=\"offset-sm-5\">UNIVERSITY OF SOUTH DAKOTA</h2>-->\n<!--<span>Master of Arts in <br/>Clinical Psychology</span>-->\n<!--</div>-->\n<!--</div>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dropbox\Dropbox\Coding\philspelman\resume\ang-resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map