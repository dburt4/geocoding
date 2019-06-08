(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Something-coding</span>\n  </mat-toolbar-row>\n</mat-toolbar> -->\n<h3 id=\"main-title\">Love Geocaching!</h3>\n\n<app-map></app-map>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info-sheet/info-sheet.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info-sheet/info-sheet.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n    <h3 mat-subheader>{{ marker.name }} </h3>\r\n    <!-- <mat-list-item>\r\n        <p mat-line>Description: {{ marker.description }}</p>\r\n    </mat-list-item> -->\r\n    <p>Description:</p>\r\n    <p> {{ marker.description }} </p>\r\n    <mat-list-item><p mat-line>Hint: {{ marker.hint }} </p></mat-list-item>\r\n    <mat-list-item><p mat-line>Size: {{ marker.size }} </p></mat-list-item>\r\n    <mat-list-item><p mat-line>Placed: {{ marker.placed }} </p></mat-list-item>\r\n    <mat-list-item><p mat-line>Last activity: {{ marker.activity }} </p></mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    <p>Difficulty: </p>\r\n    <mat-progress-bar class=\"my-progress-bar\" color=\"primary\" mode=\"determinate\" \r\n        [value]=\"marker.difficulty\">\r\n    </mat-progress-bar>\r\n    <mat-divider></mat-divider>\r\n    \r\n</mat-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map \n  [latitude]=\"startingLat\" \n  [longitude]=\"startingLong\" \n  [mapTypeId]=\"mapType\" \n  [zoom]=\"zoom\"\n  (mapClick)=\"addMarker($event.coords.lat, $event.coords.lng)\"\n  streetViewControl=\"false\"\n>\n  <!-- <agm-marker [latitude]=\"lat\" [longitude]=\"longitude\"></agm-marker> -->\n  <agm-marker *ngFor=\"let marker of markers\" \n    [latitude]=\"marker.lat\"\n    [longitude]=\"marker.lng\"\n    [markerDraggable]=\"false\"\n    (markerClick)=\"setSelectedMarker($event)\"\n\n  >\n    <!-- <agm-info-window>Hello world</agm-info-window> -->\n  </agm-marker>\n  <agm-marker id=\"current-position\"\n    [latitude]=\"currentPosition.lat\"\n    [longitude]=\"currentPosition.lng\"\n    iconUrl=\"assets/icons/location_dot_blue20x20.png\"\n  ></agm-marker>\n</agm-map>\n<!-- <p *ngIf=\"selectedMarker\">Currently selected marker: Lat: {{ selectedMarker.lat }}, Long: {{ selectedMarker.lng }} </p>\n<p>All markers: {{ markers | json }}</p>\n<p>Current position: {{ currentPosition | json }}</p> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-title {\r\n    z-index: 10;\r\n    background: transparent;\r\n    position: fixed;\r\n    left: 23px;\r\n    color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi10aXRsZSB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMjNweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'geocoding';
    }
    ngOnInit() {
        console.log('Hello world!');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _components_info_sheet_info_sheet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/info-sheet/info-sheet.component */ "./src/app/components/info-sheet/info-sheet.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
            _components_info_sheet_info_sheet_component__WEBPACK_IMPORTED_MODULE_16__["InfoSheetComponent"]
        ],
        entryComponents: [
            _components_info_sheet_info_sheet_component__WEBPACK_IMPORTED_MODULE_16__["InfoSheetComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyC7MEw5z2h5vLTcdrXUjqm5V1_vk3vN1gY'
            }),
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/info-sheet/info-sheet.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/info-sheet/info-sheet.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1zaGVldC9pbmZvLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/info-sheet/info-sheet.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/info-sheet/info-sheet.component.ts ***!
  \***************************************************************/
/*! exports provided: InfoSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSheetComponent", function() { return InfoSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var src_app_models_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/marker */ "./src/app/models/marker.ts");




let InfoSheetComponent = class InfoSheetComponent {
    constructor(marker) {
        this.marker = marker;
    }
    ngOnInit() {
    }
};
InfoSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-sheet',
        template: __webpack_require__(/*! raw-loader!./info-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info-sheet/info-sheet.component.html"),
        styles: [__webpack_require__(/*! ./info-sheet.component.css */ "./src/app/components/info-sheet/info-sheet.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_models_marker__WEBPACK_IMPORTED_MODULE_3__["Marker"]])
], InfoSheetComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n\theight: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG5cdGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _models_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/marker */ "./src/app/models/marker.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _components_info_sheet_info_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/info-sheet/info-sheet.component */ "./src/app/components/info-sheet/info-sheet.component.ts");






let MapComponent = class MapComponent {
    constructor(geolocationService, _bottomSheet) {
        this.geolocationService = geolocationService;
        this._bottomSheet = _bottomSheet;
        this.startingLat = 40.259309;
        this.startingLong = -111.671877;
        this.mapType = 'roadmap';
        this.markers = [];
        this.zoom = 15;
        this.currentPosition = new _models_marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](0, 0, 0.75, "You are here!");
    }
    ngOnInit() {
        this.markers = [
            new _models_marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](40.327730, -111.646325, 0.75),
        ];
        this.geolocationService.getPosition().subscribe((pos) => {
            console.log("Getting new position!", pos);
            this.currentPosition = new _models_marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](+(pos.coords.latitude), +(pos.coords.longitude), 1);
        });
    }
    addMarker(lat, lng) {
        console.log("Adding marker!", lat, lng);
        this.markers.push(new _models_marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](lat, lng, 0.75, "Cool"));
    }
    // What was this for again? 
    setSelectedMarker(event) {
        console.log("Setting selected marker", event);
        let found = false;
        for (let i = 0; i < this.markers.length; i++) {
            if (event.latitude == this.markers[i].lat && event.longitude == this.markers[i].lng) {
                this.selectedMarker = this.markers[i];
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("UNABLE TO update currently selected marker", event);
            return;
        }
        this.openInfoSheet();
    }
    openInfoSheet() {
        this._bottomSheet.open(_components_info_sheet_info_sheet_component__WEBPACK_IMPORTED_MODULE_5__["InfoSheetComponent"], { data: this.selectedMarker });
    }
};
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]])
], MapComponent);



/***/ }),

/***/ "./src/app/models/marker.ts":
/*!**********************************!*\
  !*** ./src/app/models/marker.ts ***!
  \**********************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
class Marker {
    constructor(lat, lng, alpha, label = '', name = 'What an awesome geocache', description = 'To find this geocache, you have to go around the bend, up the river, through the candy cane forest, through the sea of swirly gumdrops, and all that. ', hint = 'If you get stuck, poke your sword on the big tree knot', size = 'Small', placed = new Date(), activity = 'Found on 6/1/2019', difficulty = 70) {
        this.lat = lat;
        this.lng = lng;
        this.alpha = alpha;
        this.label = label;
        this.name = name;
        this.description = description;
        this.hint = hint;
        this.size = size;
        this.placed = placed;
        this.activity = activity;
        this.difficulty = difficulty;
    }
}


/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GeolocationService = class GeolocationService {
    constructor() { }
    getPosition() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
            navigator.geolocation.watchPosition((pos) => {
                observer.next(pos);
            }),
                () => {
                    console.log('Position is not available');
                },
                {
                    enableHighAccuracy: true
                };
        });
    }
};
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GeolocationService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dburt/projects/coding/geocoding/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map