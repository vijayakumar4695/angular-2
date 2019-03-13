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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family:sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   \n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n          <br>\n          <h2>MECHNICAL ENGINEERING</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <br>\n          <p>The application of mechanical engineering can be seen in the archives of various ancient and medieval societies. In ancient Greece, the works of Archimedes (287–212 BC) influenced mechanics in the Western tradition and Heron of Alexandria (c. 10–70 AD) created the first steam engine (Aeolipile).[3] In China, Zhang Heng (78–139 AD) improved a water clock and invented a seismometer, and Ma Jun (200–265 AD) invented a chariot with differential gears. The medieval Chinese horologist and engineer Su Song (1020–1101 AD) incorporated an escapement mechanism into his astronomical clock tower two centuries before escapement devices were found in medieval European clocks. He also invented the world's first known endless power-transmitting chain drive.[4]</p><br><br>\n          <p>During the Islamic Golden Age (7th to 15th century), Muslim inventors made remarkable contributions in the field of mechanical technology. Al-Jazari, who was one of them, wrote his famous Book of Knowledge of Ingenious Mechanical Devices in 1206 and presented many mechanical designs. Al-Jazari is also the first known person to create devices such as the crankshaft and camshaft, which now form the basics of many mechanisms.[5]</p><br><br>\n          <p>During the 17th century, important breakthroughs in the foundations of mechanical engineering occurred in England. Sir Isaac Newton formulated Newton's Laws of Motion and developed Calculus, the mathematical basis of physics. Newton was reluctant to publish his works for years, but he was finally persuaded to do so by his colleagues, such as Sir Edmond Halley, much to the benefit of all mankind. Gottfried Wilhelm Leibniz is also credited with creating Calculus during this time period.</p><br><br>\n      </div>\n    </div>\n\n    </div>\n\n    "

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'second';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'home' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        children: [
                            { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"] },
                            { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"] },
                            { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"] },
                        ] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0;\r\n    padding: 0;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\np{\r\n    text-align: justify;\r\n    line-height:2.5; \r\n\r\n}\r\nimg{\r\n    width:100%;\r\n    height: 250px;\r\n}\r\nh2{\r\n    color:tomato;\r\n}\r\n.card{\r\n    width: 230px; \r\n     \r\n}\r\n.card-img-top{\r\n    width:230px;\r\n}\r\n#img2{\r\n    height: 400px;;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6Mi41OyBcclxuXHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBjb2xvcjp0b21hdG87XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMjMwcHg7IFxyXG4gICAgIFxyXG59XHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICB3aWR0aDoyMzBweDtcclxufVxyXG4jaW1nMntcclxuICAgIGhlaWdodDogNDAwcHg7O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n      <br>\n      <br>\n      <h2>The First Steps of a Learning Robot Limb</h2>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n        <br>\n        <p>It’s an astonishing evolutionary feat that has long inspired biologists and roboticists. Now a team of USC researchers at the USC Viterbi School of Engineering believe they have become the first to create an AI-controlled robotic limb driven by animal-like tendons that can be tripped up and then recover within the time of the next footfall, a task for which the robot was never explicitly programmed to do.</p>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-12 mb-5\">\n        <br>\n        <img id=\"img2\" src=\"assets/img/mech2.webp\">\n        </div>\n    </div>\n  </div>\n  <div id=\"cf1\" class=\"container-fluid bg-secondary  mb-3 text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-12 mb-5\">\n          <br>\n        <div class=\"card\">\n          \n            <img class=\"card-img-top\" src=\"assets/img/mech3.jpg\" alt=\"Card image\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Engine</h4>\n              <p class=\"card-text\">The Image Represents the inner side of the car engine block.it should be made up of CI.</p>\n\n            </div>    \n    </div>\n        </div>\n\n    <div class=\"col-lg-4 col-md-4 col-sm-12 mb-5\">\n        <br>\n      <div class=\"card\">\n        \n          <img class=\"card-img-top\" src=\"assets/img/mech4.jpg\" alt=\"Card image\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Piston</h4>\n            <p class=\"card-text\">This Image Represents the piston and crank shaft arrangement insid the engine.</p>\n            \n          </div>    \n  </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-5\">\n      <br>\n    <div class=\"card\">\n      \n        <img class=\"card-img-top\" src=\"assets/img/mech5.jpg\" alt=\"Card image\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Helical Gear</h4>\n          <p class=\"card-text\">The Image Represents the inner side of the helical hear arrangements.It should be made up of CI.</p>\n          \n        </div>    \n</div>\n  </div>\n  </div>\n  </div>\n  </div>\n  <div id=\"contact\" class=\"container-fluid bg-grey text-dark mt-5\">\n      <h2 class=\"text-center\">CONTACT</h2>\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <br>\n          <p>Contact us and we'll get back to you within 24 hours.</p>\n          <p><span class=\"glyphicon glyphicon-map-marker\"></span>Anna University chennai</p>\n          <p><span class=\"glyphicon glyphicon-phone\"></span> 044-2235 8491</p>\n          <p><span class=\"glyphicon glyphicon-envelope\"></span> deanceg@annauniv.edu</p>\n        </div>\n        <div class=\"col-sm-7 slideanim\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 form-group\">\n              <br>\n              <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n            </div>\n            <div class=\"col-sm-6 form-group\">\n              <br>\n              <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n            </div>\n          </div>\n          <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\n          <div class=\"row\">\n            <div class=\"col-sm-12 form-group\">\n              <button class=\"btn btn-dark pull-right\" type=\"submit\">Send</button>\n            </div>\n          </div>\n        </div>\n      </div>\n     </div>\n  \n\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family:sans-serif;\r\n}\r\n\r\na:hover{\r\n    background: #e91e63;\r\n   \r\n}\r\n\r\np{\r\n    text-align:justify;\r\n}\r\n\r\n#link{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNlOTFlNjM7XHJcbiAgIFxyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbn1cclxuI2xpbmt7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n        \n       \n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/home'>HOME</a>  \n          </li>\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/home/about'>ABOUT US</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/home/contact'>CONTACT US</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/home/service'>SERVICE</a>\n        </li>\n      </ul>\n      </div>\n</nav>\n\n\n      <router-outlet></router-outlet>\n     \n    <div class=\"container-fluid bg-dark\">\n        <div class=\"container\">\n            <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4 col-sm-12 text-white\">\n            <br>\n            <h4>ABOUT MECHANICAL</h4>\n            <br>\n            <p>List of well teached lecturers</p>\n            <p>List of the record of sports</p>\n            \n            <p>List of university rank holders</p>\n            \n            <p>List of Social acivity in students</p>\n          </div>\n  \n          <div class=\"col-lg-4 col-md-4 col-sm-12 text-white\">\n            <br>\n            <h4>CONTACT</h4>\n            <br>\n            <div class=\"row\">\n            <div class=\"col-lg-1\">\n              <i class=\"fas fa-home\"></i>\n            </div>\n                      \n                      <div class=\"col-lg-6\">\n                        <div class=\"zz\">\n                          <p>ANNA UNIVERSITY,chennai</p>\n  \n                       </div>\n                   </div>\n                 </div>\n  \n  \n                 <div class=\"row\">\n            <div class=\"col-lg-1\">\n                    <i class=\"far fa-envelope\"></i>\n            </div>\n                      \n                      <div class=\"col-lg-6\">\n                        <div class=\"zz\">\n                          <p>deanceg@annauniv.edu</p>\n  \n                       </div>\n                   </div>\n                 </div>\n                         <div class=\"row\">\n                  <div class=\"col-lg-1\">\n                       <i class=\"fas fa-phone-square\"></i>\n                 </div>\n                      \n                      <div class=\"col-lg-6\">\n                        <div class=\"zz\">\n                          <p> 044-2235 8491</p>\n  \n                       </div>\n                   </div>\n                 </div>\n  \n                   <div class=\"row\">\n            <div class=\"col-lg-1\">\n                    <i class=\"fas fa-fax\"></i>\n            </div>\n                     \n                      <div class=\"col-lg-6\">\n                        <div class=\"zz\">\n                          <p> 044-2230 1357 </p>\n  \n                       </div>\n                   </div>\n                 </div>\n  \n  \n           </div>\n  \n           <div class=\"col-lg-4 col-md-4 col-sm-12 text-white\">\n             <br>\n             <h4>ABOVE PAGE LINKS</h4>\n             <br>\n             \n              <a  id=\"link\"class=\"alert-link text-white \" routerLink='/home'>Home</a>\n             \n             <a  id=\"link\" class=\"alert-link text-white ml-2\" routerLink='/home/about'>Aboutus</a>\n             \n             \n             <a  id=\"link\" class=\"alert-link text-white ml-2\" routerLink='/home/contact'>Contactus</a>\n           \n             <a  id=\"link\" class=\"alert-link text-white ml-2\"  routerLink='/home/service'>service</a>\n           \n             <br>\n             <br>\n             <br>\n              <div class=\"spinner-border text-muted\"></div>\n            <div class=\"spinner-border text-primary\"></div>\n            <div class=\"spinner-border text-success\"></div>\n            <div class=\"spinner-border text-info\"></div>\n            <div class=\"spinner-border text-warning\"></div>\n            <div class=\"spinner-border text-danger\"></div>\n          <div class=\"spinner-border text-secondary\"></div>\n              <div class=\"spinner-border text-dark\"></div>\n             \n          </div>\n           </div>\n         </div>\n      </div>\n      \n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nimg{\r\n    width: 100%;\r\n    height:300px;\r\n    margin-top:20px;\r\n}\r\np{\r\n    line-height: 1.75;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxucHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 c0-sm-12 mb-3\">\n        <br>\n        <br>\n        <h3>Online learning startup Skill-Lync promises India’s mechanical engineers a job, or their money back</h3>\n        <img src=\"assets/img/mech6.jpg\">\n        \n      </div>\n    </div>\n    <div class=\"row bg-warning\">\n      <div class=\"col-lg-4 col-md-4 col-sm-12\">\n        <p>You might hear stories that TechCrunch favors venture-backed companies, or will only write about startups that have raised from certain VCs. Well, I can tell you that is totally untrue. In fact, it couldn’t be further from the truth. Speaking for myself, I really enjoy talking to successful bootstrapped companies. Raising money can be a validation, but it certainly isn’t a measure of success in itself… with more money comes increased responsibilities.</p><br>\n        <p>That’s an unusual preamble, but it sets the scene for Skill-Lync, an India-based online education company that is currently part of the Y Combinator program in the U.S. The business is bootstrapped and developing a fascinating service that helps India’s thousands of engineering graduates to turn their book smarts into employable skills and jobs.</p><br>\n        <p>Skill-Lync started out as a YouTube channel to share engineering tips, but today it is an online training course for mechanical engineering candidates. It operates three different types of courses, ranging from one-off modules to full-time curriculums.</p>\n      </div>\n      <div class=\"col-lg-8 col-md-8 col-sm-12\">\n        <img src=\"assets/img/mech7.jpg\"><br>\n        <img src=\"assets/img/mech8.jpg\">\n        <img src=\"assets/img/mech9.jpg\">\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\second\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map