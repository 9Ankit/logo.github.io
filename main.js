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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container pageheight\">\n    <router-outlet></router-outlet>   \n</div>\n\n<app-footer></app-footer>\n\n"

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
        this.title = 'myapp1';
        this.city = "Bengaluru";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentname_componentname_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentname/componentname.component */ "./src/app/componentname/componentname.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");
/* harmony import */ var _array1_array1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array1/array1.component */ "./src/app/array1/array1.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _array2_array2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array2/array2.component */ "./src/app/array2/array2.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/computer/computer.component.ts");
/* harmony import */ var _externaljson_externaljson_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./externaljson/externaljson.component */ "./src/app/externaljson/externaljson.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //to use the ngModel we have to add this line.
 // to use routing (or page navigation)
 //for search filter
// For data communication use API (to read the data from other source)














// generate page url
// http://localhost:4200/dashboard
// http://localhost:4200         redirect to dashboard (if path is empty)
// http://localhost:4200/aaaaa      redirect to dashboard (if path has illegal entry)
var allpage = [
    { path: "demo", component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_18__["DemoComponent"] },
    { path: "dashboard", component: _array1_array1_component__WEBPACK_IMPORTED_MODULE_11__["Array1Component"] },
    { path: "itemlist", component: _item_item_component__WEBPACK_IMPORTED_MODULE_15__["ItemComponent"] },
    { path: "computer", component: _computer_computer_component__WEBPACK_IMPORTED_MODULE_16__["ComputerComponent"] },
    { path: "userlist", component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"] },
    { path: "photolist", component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_10__["PhotoComponent"] },
    { path: "carlist", component: _externaljson_externaljson_component__WEBPACK_IMPORTED_MODULE_17__["ExternaljsonComponent"] },
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "componentname", component: _componentname_componentname_component__WEBPACK_IMPORTED_MODULE_8__["ComponentnameComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _componentname_componentname_component__WEBPACK_IMPORTED_MODULE_8__["ComponentnameComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _photo_photo_component__WEBPACK_IMPORTED_MODULE_10__["PhotoComponent"],
                _array1_array1_component__WEBPACK_IMPORTED_MODULE_11__["Array1Component"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _array2_array2_component__WEBPACK_IMPORTED_MODULE_14__["Array2Component"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_15__["ItemComponent"],
                _computer_computer_component__WEBPACK_IMPORTED_MODULE_16__["ComputerComponent"],
                _externaljson_externaljson_component__WEBPACK_IMPORTED_MODULE_17__["ExternaljsonComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_18__["DemoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(allpage),
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/array1/array1.component.css":
/*!*********************************************!*\
  !*** ./src/app/array1/array1.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/array1/array1.component.html":
/*!**********************************************!*\
  !*** ./src/app/array1/array1.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <table class=\"table table-borderd\">\n    <caption><h2>Array 1 Example {{total}} </h2></caption>\n      <tr>\n        <th>Item Name</th>\n        <td> <input type=\"text\" #name class=\"form-control\"> </td>\n        <td> <button (click)=\"saveitem(name.value)\" class=\"btn btn-primary\">Save</button> </td>\n      </tr>\n    </table>\n\n    <h3 align=\"center\">Item List</h3>\n      <table class=\"table table-borderd\">\n        <tr *ngFor=\"let x of allitem; let i=index\">\n          <td> {{x}} </td>\n          <td> <button (click)=\"deleteitem(i)\" class=\"btn btn-danger\"> Delete </button> </td>\n        </tr>\n      </table>\n</div> \n<!-- col-4 end -->\n  <div class=\"col-md-8\">\n    <app-array2></app-array2>\n  </div>\n  \n</div>  \n<!-- row end -->\n\n<div class=\"row\">\n <div class=\"col-md-6\">\n  <p class=\"text-center\"> {{msg}} </p> \n  <label> Example for ngModal </label>\n   <input type=\"text\" class=\"form-control\" [(ngModel)] = \"proname\">\n   <div class=\"text-center\">\n     <button class=\"btn btn-success\" (click)=\"saveproduct()\">Save Pro</button>\n   </div>\n </div>\n <div class=\"col-md-6\">\n   <p *ngFor = \"let pro of product\"> {{pro}} </p>\n   \n </div>\n</div>"

/***/ }),

/***/ "./src/app/array1/array1.component.ts":
/*!********************************************!*\
  !*** ./src/app/array1/array1.component.ts ***!
  \********************************************/
/*! exports provided: Array1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array1Component", function() { return Array1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Array1Component = /** @class */ (function () {
    function Array1Component() {
        // total:number=0;
        this.allitem = ["Apple", "Mango"];
        this.total = this.allitem.length;
        this.product = [];
    }
    Array1Component.prototype.ngOnInit = function () {
    };
    Array1Component.prototype.saveitem = function (itemname) {
        this.allitem.push(itemname);
        this.total = this.allitem.length;
    };
    Array1Component.prototype.deleteitem = function (index) {
        this.allitem.splice(index, 1); //to remove item from array
        this.total = this.allitem.length;
    };
    Array1Component.prototype.saveproduct = function () {
        // alert(this.proname);
        this.product.push(this.proname);
        this.proname = "";
        this.msg = "product Added Succesafully .!";
    };
    Array1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-array1',
            template: __webpack_require__(/*! ./array1.component.html */ "./src/app/array1/array1.component.html"),
            styles: [__webpack_require__(/*! ./array1.component.css */ "./src/app/array1/array1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Array1Component);
    return Array1Component;
}());



/***/ }),

/***/ "./src/app/array2/array2.component.css":
/*!*********************************************!*\
  !*** ./src/app/array2/array2.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/array2/array2.component.html":
/*!**********************************************!*\
  !*** ./src/app/array2/array2.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\"> \n  <caption class=\"text-center\"> <h3>Array 2 Example</h3> </caption>\n  <tr>\n    <th>Full Name</th>\n    <th>Mobile No</th>\n    <th>City</th>\n    <th>Action</th>\n  </tr>\n\n  <tr>\n    <td> <input type=\"text\" #name class=\"form-comtrol input-sm\"></td>\n    <td> <input type=\"text\" #mobile class=\"form-comtrol input-sm\"></td>\n    <td> <input type=\"text\" #city class=\"form-comtrol input-sm\"></td>\n    <td> <button class=\"btn btn-primary btn-sm\" (click)=\"save(name.value, mobile.value, city.value)\">Save</button></td>\n  </tr>\n\n  <tr *ngFor=\"let row of user; let i=index\"> \n     <td>{{row.name}}</td>\n     <td>{{row.mobile}}</td>\n     <td>{{row.city}}</td>\n     <td> <button (click)=\"deluser(i)\">Delete</button> </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/array2/array2.component.ts":
/*!********************************************!*\
  !*** ./src/app/array2/array2.component.ts ***!
  \********************************************/
/*! exports provided: Array2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array2Component", function() { return Array2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Array2Component = /** @class */ (function () {
    function Array2Component() {
        this.user = [
            { "name": "AAA", "mobile": "7878", "city": "Bangalore" },
            { "name": "BBB", "mobile": "778878", "city": "Mumbai" },
            { "name": "CCC", "mobile": "657878", "city": "Delhi" },
            { "name": "DDD", "mobile": "217878", "city": "Kolkata" }
        ];
    }
    Array2Component.prototype.ngOnInit = function () {
    };
    Array2Component.prototype.save = function (name, mobile, city) {
        var newuser = { "name": name, "mobile": mobile, "city": city };
        this.user = this.user.concat(newuser); // to combine array inside array
    };
    Array2Component.prototype.deluser = function (index) {
        this.user.splice(index, 1); //to remove item from array
    };
    Array2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-array2',
            template: __webpack_require__(/*! ./array2.component.html */ "./src/app/array2/array2.component.html"),
            styles: [__webpack_require__(/*! ./array2.component.css */ "./src/app/array2/array2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Array2Component);
    return Array2Component;
}()); //class ends here



/***/ }),

/***/ "./src/app/componentname/componentname.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentname/componentname.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentname/componentname.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentname/componentname.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n\n        <div class=\"col-md-5 col-lg-6\">\n          <div class=\"panel panel-primary\" >\n            <div class=\"panel-heading text-center\">\n              Ankit Gupta\n            </div>\n            <div class=\"panel-body\">\n              <table class=\"table table-bordered\"  *ngFor = \"let row of allcar; let i=index;\">\n                <caption> {{ row.name }} </caption>\n                <tr  *ngFor = \"let rowdata of row.policies; let i2=index\">\n                    <td (click)=\"getdata(i, i2,rowdata.type)\">{{rowdata.type}}</td>\n                    <td>{{rowdata.number}}</td>\n                    <td> {{ rowdata.logo }} </td>\n                    <td> {{ rowdata.icon }} </td>\n                </tr>\n              </table>\n            </div>\n          </div>   \n        </div>\n        <div class=\"col-md-6\">\n          <h2> Motor </h2>\n          <h4> Summary of Cover </h4>\n          <div class=\"panel panel-primary\">\n              <div class=\"panel-heading text-center\">\n                Ankit Gupta\n              </div>\n              <div class=\"panel-body\">\n                <table class=\"table table-bordered\">\n                  <tr>\n                    <th> Type </th>\n                    <th> \tName </th>\n                    <th> Value </th>\n                    <th> Basic Excess </th>\n                    <th>\tPremium </th>\n                  </tr>\n                  <tr>\n                    <td> {{ showdata.type }} </td>\n                    <td> {{ showdata.name }} </td>\n                    <td> {{ showdata.value }} </td>\n                    <td> {{ showdata.basicExcess }} </td>\n                    <td> {{ showdata.premium }} </td>\n                  </tr>\n                  <tr>\n                      <td>Total Vehicle SASRIA</td>\n                      <td> </td>\n                      <td> </td>\n                      <td> </td>\n                      <!-- <td> {{ showdata.brokeragePercentage }} </td> -->\n                  </tr>\n                  <tr>\n                      <td>Broker Fee </td>\n                      <td> </td>\n                      <td> </td>\n                      <td> </td>\n                      <td> {{ showdata.brokeragePercentage }} </td>\n                  </tr>\n                  <tr>\n                      <td> Total Monthly Payment </td>\n                      <td> </td>\n                      <td> </td>\n                      <td> </td>\n                      <td> {{ showdata.brokeragePercentage }} </td>\n                  </tr>\n                </table>\n                <table class=\"table table-bordered\">\n                    <tr>\n                      <th> Section </th>\n                      <th> \tInsured Item </th>\n                      <th> Value </th>\n                      <th> Basic Excess </th>\n                      <th>\tPremium </th>\n                    </tr>\n                    <tr *ngFor = \"let d of Motor\">\n                      <td> {{ d.name }} </td>\n                      <td> {{ d.id }} </td>\n                      <td> {{ d.icon }} </td>\n                      <td> {{ d.icon2 }} </td>\n                      <td> {{ d.icon3 }} </td>\n                      <td> {{ d.icon4 }} </td>\n                      <td> {{ d.premium }} </td>\n                    </tr>\n                  </table>\n              </div>\n            </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/componentname/componentname.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentname/componentname.component.ts ***!
  \**********************************************************/
/*! exports provided: ComponentnameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentnameComponent", function() { return ComponentnameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// <script src="https://kit.fontawesome.com/a076d05399.js"></script>
// import 
var ComponentnameComponent = /** @class */ (function () {
    function ComponentnameComponent(obj) {
        this.obj = obj;
    }
    // Life : boolean = false;
    // Motorr : boolean = false;
    ComponentnameComponent.prototype.ngOnInit = function () {
        this.getCar();
    };
    ComponentnameComponent.prototype.getCar = function () {
        var _this = this;
        var url = "http://34.73.45.188:4500/api/getPolicy?type=policynumber";
        //  net required to run this code
        this.obj.get(url).subscribe(function (response) {
            _this.allcar = response;
        });
    };
    ComponentnameComponent.prototype.getdata = function (index, index2, type) {
        this.showdata = this.allcar.data[index].policies[index2].coverage;
        console.log(this.showdata);
        console.log(index);
        console.log(index2);
        console.log(type);
    };
    ComponentnameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-componentname',
            template: __webpack_require__(/*! ./componentname.component.html */ "./src/app/componentname/componentname.component.html"),
            styles: [__webpack_require__(/*! ./componentname.component.css */ "./src/app/componentname/componentname.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ComponentnameComponent);
    return ComponentnameComponent;
}());



/***/ }),

/***/ "./src/app/computer/computer.component.css":
/*!*************************************************!*\
  !*** ./src/app/computer/computer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/computer/computer.component.html":
/*!**************************************************!*\
  !*** ./src/app/computer/computer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div col-md-12>\n      <h1 class=\"text-center\"> Description Of Computers </h1>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n\n    <div class=\"form-group\">\n      <label> Name </label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"Cname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label> Description </label>\n      <textarea cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)] = \"Description\"></textarea>\n    </div>\n\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary\"  (click)=\"save()\"> {{btntitle}} </button>\n    </div>\n  </div>\n<!-- col 4 end here -->\n\n  <div class=\"col-md-8\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <th>Name</th>\n        <th>Description</th>\n      </tr>\n      <tr *ngFor = \"let row of list\">   <!--Let any name and array name-->\n        <td>{{row.name}}</td>\n        <td>{{row.Description}}</td>\n      </tr>\n    </table>\n  </div>\n  <!-- col 8 end here -->\n</div>"

/***/ }),

/***/ "./src/app/computer/computer.component.ts":
/*!************************************************!*\
  !*** ./src/app/computer/computer.component.ts ***!
  \************************************************/
/*! exports provided: ComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerComponent", function() { return ComputerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputerComponent = /** @class */ (function () {
    function ComputerComponent() {
        this.btntitle = "Update List";
        this.list = [
            { "name": "DELL", "Description": "8GB RAM" },
            { "name": "LG", "Description": "8GB RAM" },
            { "name": "Samsung", "Description": "8GB RAM" }
        ];
    }
    ComputerComponent.prototype.ngOnInit = function () {
    };
    ComputerComponent.prototype.save = function () {
        var newitem = { "name": this.Cname, "Description": this.Description };
        this.list = this.list.concat(newitem); // to add  in existing array
        this.Cname = "";
        this.Description = "";
    };
    ComputerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-computer',
            template: __webpack_require__(/*! ./computer.component.html */ "./src/app/computer/computer.component.html"),
            styles: [__webpack_require__(/*! ./computer.component.css */ "./src/app/computer/computer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComputerComponent);
    return ComputerComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.css":
/*!*****************************************!*\
  !*** ./src/app/demo/demo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  demo works!\n</p>\n"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/externaljson/externaljson.component.css":
/*!*********************************************************!*\
  !*** ./src/app/externaljson/externaljson.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/externaljson/externaljson.component.html":
/*!**********************************************************!*\
  !*** ./src/app/externaljson/externaljson.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <h1 class=\"text-center\"> Total Number of Cars {{ total }} </h1>  \n  </div> \n    <!-- this total will only run in firefox bcoz we have to add an extension called 'cors everywhere' which runs only in firefox \n    url called in ts file-->\n  \n  <div class=\"col-md-4\">\n    <label> Search.. </label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"keyword\">\n  </div>\n</div> \n<br><br>\n\n<div class=\"row\" *ngFor = \"let car of allcar | filter:keyword\">\n  <div class=\"col-md-4 form-group\">\n    <div class=\"panel panel-primary\">\n      \n        <div class=\"panel-heading text-center\">\n            Model : {{car.model}}\n            \n        </div>\n        <div class=\"panel-body\"> \n            <img src=\"http://cybotrix.com/ios/img/{{car.image}}\" style=\" height: 120px; width: 100%;\">\n        </div>\n\n      \n    </div> \n  </div> <!--4 end-->\n  \n  <div class=\"col-md-3\">\n      <p>Fuel Type : {{car.name}}</p>\n      <p>Version : {{car.id}} </p>\n      <p>Price : {{car.price}} </p>  \n      <p>Mileage : {{car.mileage}} </p>  \n      <p> Category : {{car.category.vechicleType}} </p> \n      <p> Service Done: {{car.status.isServiceDone}} </p>\n      <p> Boot Size: {{car.bootSize}} </p>\n </div>\n\n  <div class=\"col-md-5\">\n      <table class=\"table table-bordered\">\n          <caption><strong>Car Service History ---  <u><b class=\"text-warning\">{{car.serviceHistory.length}} Times</b></u> </strong></caption>\n          <tr class=\"bg-success\">\n            <th class=\"text-center\">Service Cost</th>\n            <th class=\"text-center\">Service Date</th>\n          </tr>\n          <tr *ngFor = \"let service of car.serviceHistory\"> \n             <td class=\"text-center\"> {{service.serviceCost}} </td>\n             <td class=\"text-center\"> {{service.serviceDate}} </td>\n          </tr>\n        </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/externaljson/externaljson.component.ts":
/*!********************************************************!*\
  !*** ./src/app/externaljson/externaljson.component.ts ***!
  \********************************************************/
/*! exports provided: ExternaljsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternaljsonComponent", function() { return ExternaljsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/commom/http';

var ExternaljsonComponent = /** @class */ (function () {
    function ExternaljsonComponent(obj) {
        this.obj = obj;
        this.allcar = [];
    }
    ExternaljsonComponent.prototype.ngOnInit = function () {
        this.getCar(); // to call the function on page load
    };
    ExternaljsonComponent.prototype.getCar = function () {
        var _this = this;
        var url = "http://34.73.45.188:4500/api/getPolicy?type=policynumber";
        //  net required to run this code
        this.obj.get(url).subscribe(function (response) {
            _this.allcar = response;
            _this.total = _this.allcar.length;
        });
    };
    ExternaljsonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-externaljson',
            template: __webpack_require__(/*! ./externaljson.component.html */ "./src/app/externaljson/externaljson.component.html"),
            styles: [__webpack_require__(/*! ./externaljson.component.css */ "./src/app/externaljson/externaljson.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExternaljsonComponent);
    return ExternaljsonComponent;
}());

//  this url will only run in firefox bcoz we have to add an extension called 'cors everywhere' which runs only in firefox. 
//  total called in html part


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <h3>Angular is best client side Processing.</h3>\n      <p> it process most of the user input into user computer itself so, application will be always fast. </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Fixed navbar -->\n <nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n    </div>\n    \n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"dashboard\">Home</a></li>\n        <li><a routerLink=\"itemlist\">About</a></li>\n        <li><a routerLink=\"computer\">Computer</a></li>\n        <li><a routerLink=\"userlist\">Userlist</a></li>\n        <li><a routerLink=\"photolist\">Photos</a></li>\n        <li><a routerLink=\"carlist\">Cars</a></li>\n      </ul>\n      \n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div col-md-12 text-center text-danger>\n    <h2 class=\"text-center\"> ngModel Example 1 </h2>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\"> \n\n    <div class=\"form-group\">\n      <label> Item Name </label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"pname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label> Item Price </label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"price\">\n    </div>\n\n    <div class=\"form-group\">\n      <label> Item Quantity </label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"qty\">\n    </div>\n\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary\" (click)=\"save()\"> {{btntitle}} </button>\n    </div>\n  </div>  \n  <!--3 end -->\n\n  <div class=\"col-md-9\"> \n    <table class=\"table table-bordered\"> \n       <tr>\n         <th>Item Name</th>\n         <th>Item Price</th>\n         <th>Item Quantity</th>\n       </tr>\n       <tr *ngFor = \"let row of item\">   <!--Let any name and array name-->\n         <td>{{row.Name}}</td>\n         <td>{{row.Cost}}</td>\n         <td>{{row.qty}}</td>\n       </tr>\n    </table>\n  </div>  \n  <!--9 end -->\n</div>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.btntitle = "Save Item";
        this.item = [
            { "Name": "Apple", "Cost": 200, "qty": 5 },
            { "Name": "Grapes", "Cost": 200, "qty": 5 },
            { "Name": "Banana", "Cost": 200, "qty": 15 },
            { "Name": "Orange", "Cost": 200, "qty": 20 }
        ];
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.save = function () {
        var newitem = { "Name": this.pname, "Cost": this.price, "qty": this.qty };
        this.item = this.item.concat(newitem); // to add  in existing array
        this.pname = "";
        this.price = "";
        this.qty = "";
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/photo/photo.component.css":
/*!*******************************************!*\
  !*** ./src/app/photo/photo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photo/photo.component.html":
/*!********************************************!*\
  !*** ./src/app/photo/photo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1 align=\"center\" >Total Number of Photos are : {{ total }}</h1>  \n    <button (click)=\"getphoto()\" class=\"btn btn-primary btn-lg\"> Read from JSON file </button>  \n  </div>\n</div>\n<br>\n\n<!-- \n<div class=\"row\">\n  <div class=\"col-md-3\" *ngFor = \"let row of allphoto\">\n   <div class=\"panel panel-primary\">\n     <div class=\"panel-heading\"> {{ row.title }} </div>\n     <div class=\"panel-body\">\n     <img src=\"../../assets/{{ row.url }}\" class=\"img-responsive img-rounded\">\n     </div>\n   </div>\n  </div>\n</div> -->    \n \n<!-- to read this part uncomment the line \" // this.getphoto();\"    in ts part -->\n\n\n          <!-- or     -->\n\n<div class=\"row\">\n  <div class=\"col-md-3\" *ngFor = \"let row of allphoto\">\n    <h4 class=\"bg-success text-center\"> {{ row.title }} </h4>\n    <p><img src=\"../../assets/{{ row.url }}\" class=\"img-responsive img-rounded\"></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/photo/photo.component.ts":
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(obj) {
        this.obj = obj;
        this.allphoto = [{ "url": "H.jpg", "title": "Default Photo" }];
    }
    PhotoComponent.prototype.ngOnInit = function () {
        // this.getphoto();            // to exceute the function on page load
    };
    PhotoComponent.prototype.getphoto = function () {
        var _this = this;
        this.obj.get("./assets/photo.json").subscribe(function (response) {
            _this.allphoto = response;
            _this.total = _this.allphoto.length;
        });
    };
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-md-4\">\n      <button (click)=\"getuser()\" class=\"btn btn-primary\"> Read from JSON file </button>  \n    </div>\n  <div class=\"col-md-8\">\n    <h3>Reading Data Using Get Method</h3>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\" *ngFor = \"let row of alluser\">\n    <p> Full Name : {{row.name}} </p>\n    <p> Mobile No : {{row.mobile}} </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(obj) {
        this.obj = obj;
        this.alluser = [{ "name": "zzzzzzz", "mobile": "7879852565" }];
    } // object is created
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.getuser = function () {
        var _this = this;
        this.obj.get("./assets/user.json").subscribe(function (response) {
            _this.alluser = response; // convert from json to array
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
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

module.exports = __webpack_require__(/*! C:\Users\ansh1\Desktop\Git\myapp1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map