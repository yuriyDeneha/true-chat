(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module.ngfactory": [
		"./src/app/home/home.module.ngfactory.js",
		0
	],
	"./not-found/not-found.module.ngfactory": [
		"./src/app/not-found/not-found.module.ngfactory.js",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.browser.module.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/app.browser.module.ngfactory.js ***!
  \*************************************************/
/*! exports provided: AppBrowserModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModuleNgFactory", function() { return AppBrowserModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_browser_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inline_style_inline_style_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-style/inline-style.component */ "./src/app/inline-style/inline-style.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shared_layouts_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/wrapper/wrapper.component.ngfactory */ "./src/app/shared/layouts/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _inline_style_inline_style_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inline-style/inline-style.component.ngfactory */ "./src/app/inline-style/inline-style.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_storage_universal_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/storage/universal.storage */ "./src/app/shared/storage/universal.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/interceptors/token.interceptor */ "./src/app/shared/interceptors/token.interceptor.ts");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gorniv/ngx-universal */ "./node_modules/@gorniv/ngx-universal/fesm5/gorniv-ngx-universal.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/guards/un-auth.guard */ "./src/app/shared/guards/un-auth.guard.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "./node_modules/@nguniversal/express-engine/fesm5/tokens.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_translates_translates_browser_translates_browser_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/translates/translates-browser/translates-browser.module */ "./src/app/shared/translates/translates-browser/translates-browser.module.ts");
/* harmony import */ var _shared_translates_translates_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/translates/translates.service */ "./src/app/shared/translates/translates.service.ts");
/* harmony import */ var _shared_shared_meta_shared_meta_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/shared-meta/shared-meta.module */ "./src/app/shared/shared-meta/shared-meta.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _shared_layouts_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/layouts/wrapper/wrapper.component */ "./src/app/shared/layouts/wrapper/wrapper.component.ts");
/* harmony import */ var _shared_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/layouts/layouts.module */ "./src/app/shared/layouts/layouts.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inline_style_inline_style_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./inline-style/inline-style.module */ "./src/app/inline-style/inline-style.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




































var AppBrowserModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_browser_module__WEBPACK_IMPORTED_MODULE_1__["AppBrowserModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _inline_style_inline_style_component__WEBPACK_IMPORTED_MODULE_3__["InlineStyleComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵEmptyOutletComponentNgFactory"], _shared_layouts_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["WrapperComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"], _inline_style_inline_style_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["InlineStyleComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], [_shared_storage_universal_storage__WEBPACK_IMPORTED_MODULE_14__["UniversalStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p2_0) { return [p0_0, new _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"](p1_0), new _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"](p2_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaGuard"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaGuard"], [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["TransferHttpService"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["TransferHttpService"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["TransferState"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_23__["UnAuthGuard"], _shared_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_23__["UnAuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_e"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_b"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "my-app", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_25__["REQUEST"], _app_browser_module__WEBPACK_IMPORTED_MODULE_1__["getRequest"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"], _shared_translates_translates_browser_translates_browser_module__WEBPACK_IMPORTED_MODULE_27__["translateStaticLoader"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["MissingTranslationHandler"], _shared_translates_translates_service__WEBPACK_IMPORTED_MODULE_28__["CommonMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaLoader"], _shared_shared_meta_shared_meta_module__WEBPACK_IMPORTED_MODULE_29__["metaFactory"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaService"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaService"], [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaLoader"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["COOKIE_OPTIONS"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieOptionsProvider"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieOptionsProvider"], [_gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["COOKIE_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieService"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieService"], [_gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieOptionsProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _shared_storage_universal_storage__WEBPACK_IMPORTED_MODULE_14__["UniversalStorage"], _shared_storage_universal_storage__WEBPACK_IMPORTED_MODULE_14__["UniversalStorage"], [_gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _shared_translates_translates_service__WEBPACK_IMPORTED_MODULE_28__["TranslatesService"], _shared_translates_translates_service__WEBPACK_IMPORTED_MODULE_28__["TranslatesService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_25__["REQUEST"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateService"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaService"], _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_25__["REQUEST"], _shared_storage_universal_storage__WEBPACK_IMPORTED_MODULE_14__["UniversalStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_c"], "/ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_b"], { enabled: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0, p4_0, p5_0, p5_1, p5_2, p5_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_h"](p1_0, p1_1, p1_2), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p2_0), _app_module__WEBPACK_IMPORTED_MODULE_30__["initLanguage"](p3_0), _nguniversal_common__WEBPACK_IMPORTED_MODULE_31__["ɵnguniversal_modules_common_common_a"](p4_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_d"](p5_0, p5_1, p5_2, p5_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _shared_translates_translates_service__WEBPACK_IMPORTED_MODULE_28__["TranslatesService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_c"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_service_worker_service_worker_b"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], { initialNavigation: "enabled" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "", component: _shared_layouts_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_32__["WrapperComponent"], canActivateChild: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaGuard"]], children: [{ path: "", loadChildren: "./home/home.module#HomeModule" }] }, { path: "", component: _shared_layouts_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_32__["WrapperComponent"], canActivateChild: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaGuard"]], children: [{ path: "**", loadChildren: "./not-found/not-found.module#NotFoundModule" }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieModule"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["CookieModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_33__["LayoutsModule"], _shared_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_33__["LayoutsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaModule"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaModule"], [[3, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_20__["MetaModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_meta_shared_meta_module__WEBPACK_IMPORTED_MODULE_29__["SharedMetaModule"], _shared_shared_meta_shared_meta_module__WEBPACK_IMPORTED_MODULE_29__["SharedMetaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["TransferHttpModule"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_21__["TransferHttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_30__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_30__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_common__WEBPACK_IMPORTED_MODULE_31__["StateTransferInitializerModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_31__["StateTransferInitializerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_translates_translates_browser_translates_browser_module__WEBPACK_IMPORTED_MODULE_27__["TranslatesBrowserModule"], _shared_translates_translates_browser_translates_browser_module__WEBPACK_IMPORTED_MODULE_27__["TranslatesBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _inline_style_inline_style_module__WEBPACK_IMPORTED_MODULE_35__["InlineStyleModule"], _inline_style_inline_style_module__WEBPACK_IMPORTED_MODULE_35__["InlineStyleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_browser_module__WEBPACK_IMPORTED_MODULE_1__["AppBrowserModule"], _app_browser_module__WEBPACK_IMPORTED_MODULE_1__["AppBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, "ORIGIN_URL", _app_browser_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]); });




/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: getRequest, AppBrowserModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
// import { ServiceWorkerModule } from '@angular/service-worker';
// the Request object only lives on the server
function getRequest() {
    return { headers: { cookie: document.cookie } };
}
var ɵ0 = location.origin;
var AppBrowserModule = /** @class */ /*@__PURE__*/ (function () {
    function AppBrowserModule() {
    }
    return AppBrowserModule;
}());





/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




var styles_AppComponent = [];
var RenderType_AppComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__["MetaService"]], null, null)], null, null); }
var AppComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);




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
var AppComponent = /** @class */ /*@__PURE__*/ (function () {
    function AppComponent(meta) {
        this.meta = meta;
        this.meta.setTag('og:title', 'home ctor');
    }
    return AppComponent;
}());




/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initLanguage, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLanguage", function() { return initLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
function initLanguage(translateService) {
    return function () { return translateService.initLanguage(); };
}
var AppModule = /** @class */ /*@__PURE__*/ (function () {
    function AppModule() {
    }
    return AppModule;
}());




/***/ }),

/***/ "./src/app/inline-style/inline-style.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/inline-style/inline-style.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_InlineStyleComponent, View_InlineStyleComponent_0, View_InlineStyleComponent_Host_0, InlineStyleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InlineStyleComponent", function() { return RenderType_InlineStyleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InlineStyleComponent_0", function() { return View_InlineStyleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InlineStyleComponent_Host_0", function() { return View_InlineStyleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineStyleComponentNgFactory", function() { return InlineStyleComponentNgFactory; });
/* harmony import */ var _inline_style_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-style.component.scss.ngstyle */ "./src/app/inline-style/inline-style.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inline_style_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-style.component */ "./src/app/inline-style/inline-style.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_InlineStyleComponent = [_inline_style_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InlineStyleComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_InlineStyleComponent, data: {} });

function View_InlineStyleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [], null, null); }
function View_InlineStyleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-inline-style", [], null, null, null, View_InlineStyleComponent_0, RenderType_InlineStyleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _inline_style_component__WEBPACK_IMPORTED_MODULE_2__["InlineStyleComponent"], [], null, null)], null, null); }
var InlineStyleComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-inline-style", _inline_style_component__WEBPACK_IMPORTED_MODULE_2__["InlineStyleComponent"], View_InlineStyleComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/inline-style/inline-style.component.scss.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/inline-style/inline-style.component.scss.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block; }\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n[hidden],\ntemplate {\n  display: none; }\na {\n  background: transparent; }\na:active,\na:hover {\n  outline: 0; }\nabbr[title] {\n  border-bottom: 1px dotted; }\nb,\nstrong {\n  font-weight: bold; }\ndfn {\n  font-style: italic; }\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\nmark {\n  background: #ff0;\n  color: #000; }\nsmall {\n  font-size: 80%; }\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\nimg {\n  border: 0; }\nsvg:not(:root) {\n  overflow: hidden; }\nfigure {\n  margin: 1em 40px; }\nhr {\n  box-sizing: content-box;\n  height: 0; }\npre {\n  overflow: auto; }\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\nbutton {\n  overflow: visible; }\nbutton,\nselect {\n  text-transform: none; }\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\ninput {\n  line-height: normal; }\ninput[type='checkbox'],\ninput[type='radio'] {\n  box-sizing: border-box;\n  padding: 0; }\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  height: auto; }\ninput[type='search'] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none; }\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\nlegend {\n  border: 0;\n  padding: 0; }\ntextarea {\n  overflow: auto; }\noptgroup {\n  font-weight: bold; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n@media print {\n  * {\n    text-shadow: none !important;\n    color: #000 !important;\n    background: transparent !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  select {\n    background: #fff !important; }\n  .navbar {\n    display: none; }\n  .table td,\n  .table th {\n    background-color: #fff !important; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n* {\n  box-sizing: border-box; }\n*:active, *:hover, *:focus {\n    outline: 0; }\nhtml {\n  height: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  color: #444;\n  font: 14px Roboto, 'Helvetica Neue', sans-serif;\n  font-weight: 400;\n  padding: 0;\n  margin: 0; }\n::-moz-selection {\n  background: #3f51b5;\n  color: #fff; }\n::selection {\n  background: #3f51b5;\n  color: #fff; }\n.btn {\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  color: #333;\n  border-radius: 20px;\n  border: none;\n  text-transform: uppercase; }\n.btn-light {\n    background: #fff;\n    box-shadow: 0px -1px 25px 2px #fff;\n    padding: 15px 60px;\n    transition: all 0.3s ease-in-out; }\n.btn-light:disabled {\n      -webkit-filter: grayscale(1);\n              filter: grayscale(1);\n      opacity: 0.7;\n      box-shadow: none; }\n.btn-light:disabled i {\n        -webkit-animation: none;\n                animation: none; }\n.o-0 {\n  order: 0; }\n.o-1 {\n  order: 1; }\n.o-2 {\n  order: 2; }\n.o-3 {\n  order: 3; }\n.o-4 {\n  order: 4; }\n.o-5 {\n  order: 5; }\n.o-6 {\n  order: 6; }\n.o-7 {\n  order: 7; }\n.o-8 {\n  order: 8; }\n.o-9 {\n  order: 9; }\n.o-10 {\n  order: 10; }\n.o-11 {\n  order: 11; }\n.o-12 {\n  order: 12; }\n.o-13 {\n  order: 13; }\n.o-14 {\n  order: 14; }\n.o-15 {\n  order: 15; }\n.o-16 {\n  order: 16; }\n.o-17 {\n  order: 17; }\n.o-18 {\n  order: 18; }\n.o-19 {\n  order: 19; }\n.o-20 {\n  order: 20; }\n.o-21 {\n  order: 21; }\n.o-22 {\n  order: 22; }\n.o-23 {\n  order: 23; }\n.o-0 {\n  order: 0; }\n.z-0 {\n  z-index: 0; }\n.o-1 {\n  order: 1; }\n.z-1 {\n  z-index: 1; }\n.o-2 {\n  order: 2; }\n.z-2 {\n  z-index: 2; }\n.o-3 {\n  order: 3; }\n.z-3 {\n  z-index: 3; }\n.o-4 {\n  order: 4; }\n.z-4 {\n  z-index: 4; }\n.o-5 {\n  order: 5; }\n.z-5 {\n  z-index: 5; }\n.o-6 {\n  order: 6; }\n.z-6 {\n  z-index: 6; }\n.o-7 {\n  order: 7; }\n.z-7 {\n  z-index: 7; }\n.o-8 {\n  order: 8; }\n.z-8 {\n  z-index: 8; }\n.o-9 {\n  order: 9; }\n.z-9 {\n  z-index: 9; }\n.o-10 {\n  order: 10; }\n.z-10 {\n  z-index: 10; }\n.o-11 {\n  order: 11; }\n.z-11 {\n  z-index: 11; }\n.o-12 {\n  order: 12; }\n.z-12 {\n  z-index: 12; }\n.o-13 {\n  order: 13; }\n.z-13 {\n  z-index: 13; }\n.o-14 {\n  order: 14; }\n.z-14 {\n  z-index: 14; }\n.o-15 {\n  order: 15; }\n.z-15 {\n  z-index: 15; }\n.o-16 {\n  order: 16; }\n.z-16 {\n  z-index: 16; }\n.o-17 {\n  order: 17; }\n.z-17 {\n  z-index: 17; }\n.o-18 {\n  order: 18; }\n.z-18 {\n  z-index: 18; }\n.o-19 {\n  order: 19; }\n.z-19 {\n  z-index: 19; }\n.o-20 {\n  order: 20; }\n.z-20 {\n  z-index: 20; }\n.o-21 {\n  order: 21; }\n.z-21 {\n  z-index: 21; }\n.o-22 {\n  order: 22; }\n.z-22 {\n  z-index: 22; }\n.o-23 {\n  order: 23; }\n.z-23 {\n  z-index: 23; }\n.d-b {\n  display: block; }\n.d-i-b {\n  display: inline-block; }\n.d-f {\n  display: flex; }\n.d-i-f {\n  display: inline-flex; }\n.f-a {\n  flex: auto; }\n.f-d {\n  flex-direction: row; }\n.f-d-r {\n  flex-direction: row-reverse; }\n.f-d-c {\n  flex-direction: column; }\n.f-d-c-r {\n  flex-direction: column-reverse; }\n.f-g {\n  flex-grow: 1; }\n.j-c-c {\n  justify-content: center; }\n.j-c-s-b {\n  justify-content: space-between; }\n.j-c-s-a {\n  justify-content: space-around; }\n.j-c-f-e {\n  justify-content: flex-end; }\n.j-c-f-s {\n  justify-content: flex-start; }\n.a-i-c {\n  align-items: center; }\n.a-i-e {\n  align-items: flex-end; }\n.a-i-s {\n  align-items: flex-start; }\n.a-i-stretch {\n  align-items: stretch; }\n.p-r {\n  position: relative; }\n.p-a {\n  position: absolute; }\n.p-f {\n  position: fixed; }\n.p-i {\n  position: inherit; }\n.p-0 {\n  padding: 0px; }\n.p-t-0 {\n  padding-top: 0px; }\n.p-r-0 {\n  padding-right: 0px; }\n.p-b-0 {\n  padding-bottom: 0px; }\n.p-l-0 {\n  padding-left: 0px; }\n.m-0 {\n  margin: 0px; }\n.m-t-0 {\n  margin-top: 0px; }\n.m-r-0 {\n  margin-right: 0px; }\n.m-b-0 {\n  margin-bottom: 0px; }\n.m-l-0 {\n  margin-left: 0px; }\n.m-0 {\n  margin: 0px; }\n.t-0 {\n  top: 0px; }\n.r-0 {\n  right: 0px; }\n.b-0 {\n  bottom: 0px; }\n.l-0 {\n  left: 0px; }\n.p-1 {\n  padding: 8px; }\n.p-t-1 {\n  padding-top: 8px; }\n.p-r-1 {\n  padding-right: 8px; }\n.p-b-1 {\n  padding-bottom: 8px; }\n.p-l-1 {\n  padding-left: 8px; }\n.m-1 {\n  margin: 8px; }\n.m-t-1 {\n  margin-top: 8px; }\n.m-r-1 {\n  margin-right: 8px; }\n.m-b-1 {\n  margin-bottom: 8px; }\n.m-l-1 {\n  margin-left: 8px; }\n.m-1 {\n  margin: 8px; }\n.t-1 {\n  top: 8px; }\n.r-1 {\n  right: 8px; }\n.b-1 {\n  bottom: 8px; }\n.l-1 {\n  left: 8px; }\n.p-2 {\n  padding: 16px; }\n.p-t-2 {\n  padding-top: 16px; }\n.p-r-2 {\n  padding-right: 16px; }\n.p-b-2 {\n  padding-bottom: 16px; }\n.p-l-2 {\n  padding-left: 16px; }\n.m-2 {\n  margin: 16px; }\n.m-t-2 {\n  margin-top: 16px; }\n.m-r-2 {\n  margin-right: 16px; }\n.m-b-2 {\n  margin-bottom: 16px; }\n.m-l-2 {\n  margin-left: 16px; }\n.m-2 {\n  margin: 16px; }\n.t-2 {\n  top: 16px; }\n.r-2 {\n  right: 16px; }\n.b-2 {\n  bottom: 16px; }\n.l-2 {\n  left: 16px; }\n.p-3 {\n  padding: 24px; }\n.p-t-3 {\n  padding-top: 24px; }\n.p-r-3 {\n  padding-right: 24px; }\n.p-b-3 {\n  padding-bottom: 24px; }\n.p-l-3 {\n  padding-left: 24px; }\n.m-3 {\n  margin: 24px; }\n.m-t-3 {\n  margin-top: 24px; }\n.m-r-3 {\n  margin-right: 24px; }\n.m-b-3 {\n  margin-bottom: 24px; }\n.m-l-3 {\n  margin-left: 24px; }\n.m-3 {\n  margin: 24px; }\n.t-3 {\n  top: 24px; }\n.r-3 {\n  right: 24px; }\n.b-3 {\n  bottom: 24px; }\n.l-3 {\n  left: 24px; }\n.p-4 {\n  padding: 32px; }\n.p-t-4 {\n  padding-top: 32px; }\n.p-r-4 {\n  padding-right: 32px; }\n.p-b-4 {\n  padding-bottom: 32px; }\n.p-l-4 {\n  padding-left: 32px; }\n.m-4 {\n  margin: 32px; }\n.m-t-4 {\n  margin-top: 32px; }\n.m-r-4 {\n  margin-right: 32px; }\n.m-b-4 {\n  margin-bottom: 32px; }\n.m-l-4 {\n  margin-left: 32px; }\n.m-4 {\n  margin: 32px; }\n.t-4 {\n  top: 32px; }\n.r-4 {\n  right: 32px; }\n.b-4 {\n  bottom: 32px; }\n.l-4 {\n  left: 32px; }\n.p-5 {\n  padding: 40px; }\n.p-t-5 {\n  padding-top: 40px; }\n.p-r-5 {\n  padding-right: 40px; }\n.p-b-5 {\n  padding-bottom: 40px; }\n.p-l-5 {\n  padding-left: 40px; }\n.m-5 {\n  margin: 40px; }\n.m-t-5 {\n  margin-top: 40px; }\n.m-r-5 {\n  margin-right: 40px; }\n.m-b-5 {\n  margin-bottom: 40px; }\n.m-l-5 {\n  margin-left: 40px; }\n.m-5 {\n  margin: 40px; }\n.t-5 {\n  top: 40px; }\n.r-5 {\n  right: 40px; }\n.b-5 {\n  bottom: 40px; }\n.l-5 {\n  left: 40px; }\n.p-6 {\n  padding: 48px; }\n.p-t-6 {\n  padding-top: 48px; }\n.p-r-6 {\n  padding-right: 48px; }\n.p-b-6 {\n  padding-bottom: 48px; }\n.p-l-6 {\n  padding-left: 48px; }\n.m-6 {\n  margin: 48px; }\n.m-t-6 {\n  margin-top: 48px; }\n.m-r-6 {\n  margin-right: 48px; }\n.m-b-6 {\n  margin-bottom: 48px; }\n.m-l-6 {\n  margin-left: 48px; }\n.m-6 {\n  margin: 48px; }\n.t-6 {\n  top: 48px; }\n.r-6 {\n  right: 48px; }\n.b-6 {\n  bottom: 48px; }\n.l-6 {\n  left: 48px; }\n.p-7 {\n  padding: 56px; }\n.p-t-7 {\n  padding-top: 56px; }\n.p-r-7 {\n  padding-right: 56px; }\n.p-b-7 {\n  padding-bottom: 56px; }\n.p-l-7 {\n  padding-left: 56px; }\n.m-7 {\n  margin: 56px; }\n.m-t-7 {\n  margin-top: 56px; }\n.m-r-7 {\n  margin-right: 56px; }\n.m-b-7 {\n  margin-bottom: 56px; }\n.m-l-7 {\n  margin-left: 56px; }\n.m-7 {\n  margin: 56px; }\n.t-7 {\n  top: 56px; }\n.r-7 {\n  right: 56px; }\n.b-7 {\n  bottom: 56px; }\n.l-7 {\n  left: 56px; }\n.p-8 {\n  padding: 64px; }\n.p-t-8 {\n  padding-top: 64px; }\n.p-r-8 {\n  padding-right: 64px; }\n.p-b-8 {\n  padding-bottom: 64px; }\n.p-l-8 {\n  padding-left: 64px; }\n.m-8 {\n  margin: 64px; }\n.m-t-8 {\n  margin-top: 64px; }\n.m-r-8 {\n  margin-right: 64px; }\n.m-b-8 {\n  margin-bottom: 64px; }\n.m-l-8 {\n  margin-left: 64px; }\n.m-8 {\n  margin: 64px; }\n.t-8 {\n  top: 64px; }\n.r-8 {\n  right: 64px; }\n.b-8 {\n  bottom: 64px; }\n.l-8 {\n  left: 64px; }\n.p-9 {\n  padding: 72px; }\n.p-t-9 {\n  padding-top: 72px; }\n.p-r-9 {\n  padding-right: 72px; }\n.p-b-9 {\n  padding-bottom: 72px; }\n.p-l-9 {\n  padding-left: 72px; }\n.m-9 {\n  margin: 72px; }\n.m-t-9 {\n  margin-top: 72px; }\n.m-r-9 {\n  margin-right: 72px; }\n.m-b-9 {\n  margin-bottom: 72px; }\n.m-l-9 {\n  margin-left: 72px; }\n.m-9 {\n  margin: 72px; }\n.t-9 {\n  top: 72px; }\n.r-9 {\n  right: 72px; }\n.b-9 {\n  bottom: 72px; }\n.l-9 {\n  left: 72px; }\n.p-10 {\n  padding: 80px; }\n.p-t-10 {\n  padding-top: 80px; }\n.p-r-10 {\n  padding-right: 80px; }\n.p-b-10 {\n  padding-bottom: 80px; }\n.p-l-10 {\n  padding-left: 80px; }\n.m-10 {\n  margin: 80px; }\n.m-t-10 {\n  margin-top: 80px; }\n.m-r-10 {\n  margin-right: 80px; }\n.m-b-10 {\n  margin-bottom: 80px; }\n.m-l-10 {\n  margin-left: 80px; }\n.m-10 {\n  margin: 80px; }\n.t-10 {\n  top: 80px; }\n.r-10 {\n  right: 80px; }\n.b-10 {\n  bottom: 80px; }\n.l-10 {\n  left: 80px; }\n.p-11 {\n  padding: 88px; }\n.p-t-11 {\n  padding-top: 88px; }\n.p-r-11 {\n  padding-right: 88px; }\n.p-b-11 {\n  padding-bottom: 88px; }\n.p-l-11 {\n  padding-left: 88px; }\n.m-11 {\n  margin: 88px; }\n.m-t-11 {\n  margin-top: 88px; }\n.m-r-11 {\n  margin-right: 88px; }\n.m-b-11 {\n  margin-bottom: 88px; }\n.m-l-11 {\n  margin-left: 88px; }\n.m-11 {\n  margin: 88px; }\n.t-11 {\n  top: 88px; }\n.r-11 {\n  right: 88px; }\n.b-11 {\n  bottom: 88px; }\n.l-11 {\n  left: 88px; }\ninput {\n  border: none;\n  border-bottom: 3px solid #424242; }\ninput.bg-trans {\n    background: transparent; }\n.form-control {\n  position: relative; }\n.form-control label {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.form-control input {\n    width: 100%;\n    height: 42px;\n    transition: all 0.15s ease-out; }\n.form-control input:focus, .form-control input:active {\n      border-color: #3f51b5; }\n.auth-form {\n  background: #e0e0e0; }\n.l-s-n {\n  list-style: none; }\n.nav-link a {\n  transition: all 0.15s ease-out;\n  color: rgba(63, 81, 181, 0.5); }\n.nav-link.active {\n  background: #e0e0e0; }\n.nav-link.active a {\n    color: #3f51b5; }\n.nav-link:hover:not(.active) a {\n  color: #3f51b5; }\n.sz-8 {\n  font-size: 8px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-8 {\n  font-size: 8px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-8 {\n  font-size: 8px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-9 {\n  font-size: 9px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-9 {\n  font-size: 9px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-9 {\n  font-size: 9px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-10 {\n  font-size: 10px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-10 {\n  font-size: 10px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-10 {\n  font-size: 10px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-11 {\n  font-size: 11px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-11 {\n  font-size: 11px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-11 {\n  font-size: 11px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-12 {\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-12 {\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-12 {\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-13 {\n  font-size: 13px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-13 {\n  font-size: 13px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-13 {\n  font-size: 13px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-14 {\n  font-size: 14px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-14 {\n  font-size: 14px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-14 {\n  font-size: 14px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-15 {\n  font-size: 15px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-15 {\n  font-size: 15px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-15 {\n  font-size: 15px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-16 {\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-16 {\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-16 {\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-17 {\n  font-size: 17px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-17 {\n  font-size: 17px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-17 {\n  font-size: 17px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-18 {\n  font-size: 18px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-18 {\n  font-size: 18px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-18 {\n  font-size: 18px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-19 {\n  font-size: 19px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-19 {\n  font-size: 19px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-19 {\n  font-size: 19px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-20 {\n  font-size: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-20 {\n  font-size: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-20 {\n  font-size: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-21 {\n  font-size: 21px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-21 {\n  font-size: 21px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-21 {\n  font-size: 21px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-22 {\n  font-size: 22px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-22 {\n  font-size: 22px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-22 {\n  font-size: 22px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-23 {\n  font-size: 23px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-23 {\n  font-size: 23px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-23 {\n  font-size: 23px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-24 {\n  font-size: 24px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-24 {\n  font-size: 24px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-24 {\n  font-size: 24px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-25 {\n  font-size: 25px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-25 {\n  font-size: 25px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-25 {\n  font-size: 25px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-26 {\n  font-size: 26px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-26 {\n  font-size: 26px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-26 {\n  font-size: 26px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-27 {\n  font-size: 27px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-27 {\n  font-size: 27px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-27 {\n  font-size: 27px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-28 {\n  font-size: 28px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-28 {\n  font-size: 28px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-28 {\n  font-size: 28px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-29 {\n  font-size: 29px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-29 {\n  font-size: 29px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-29 {\n  font-size: 29px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-30 {\n  font-size: 30px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-30 {\n  font-size: 30px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-30 {\n  font-size: 30px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.sz-31 {\n  font-size: 31px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n.sz-b-31 {\n  font-size: 31px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 700; }\n.sz-l-31 {\n  font-size: 31px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 100; }\n.w-100 {\n  width: 100%; }\n.h-100 {\n  height: 100%; }\n.t-a-c {\n  text-align: center; }\n.t-a-l {\n  text-align: left; }\n.t-a-r {\n  text-align: right; }\n.modal {\n  position: fixed;\n  z-index: 999;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  min-width: 400px;\n  min-height: 250px;\n  padding: 30px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n.modal-black-bg {\n    display: block;\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 998;\n    background-color: rgba(255, 255, 255, 0.4); }\n.modal-blue {\n    background-color: #2296f0;\n    color: #fff; }\n.icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-position: center;\n  background-size: contain; }\n.icon-waving {\n    background-image: url('waving.9d2096dcc2d1c485bea1.png');\n    -webkit-animation: waving 800ms 1s linear infinite;\n            animation: waving 800ms 1s linear infinite; }\n@-webkit-keyframes waving {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n@keyframes waving {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n@-webkit-keyframes extend-x {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n@keyframes extend-x {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n@-webkit-keyframes extend-y {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(1000%);\n            transform: translateY(1000%); } }\n@keyframes extend-y {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(1000%);\n            transform: translateY(1000%); } }\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes opacity {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\napp-footer {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  height: 49px;\n  line-height: 49px;\n  color: #7d7d7d;\n  border-top: 1px solid #d5d5d5;\n  font-size: 12px;\n  margin: 10px 15px 0 15px;\n  overflow: hidden; }\napp-footer footer {\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\napp-footer footer .footer__left {\n      flex: 1; }\napp-footer footer a {\n      padding: 15px 0 0 10px; }\napp-sidebar {\n  display: block;\n  width: 280px; }\napp-sidebar ul {\n    margin: 0;\n    padding: 0;\n    border-right: 2px solid #3f51b5; }\napp-sidebar ul li {\n      list-style-type: none; }\napp-sidebar ul li a {\n        position: relative;\n        cursor: pointer;\n        display: block;\n        background-color: transparent;\n        color: #212121;\n        height: 48px;\n        line-height: 48px;\n        text-decoration: none;\n        font-weight: 500;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        padding: 0 16px 0 48px;\n        transition: all 0.3s ease-in-out; }\napp-sidebar ul li a:hover {\n          background-color: #e0e0e0; }\napp-sidebar ul li a.active {\n          background-color: #e0e0e0; }\napp-sidebar ul li a .material-icons {\n          position: absolute;\n          top: 10px;\n          left: 15px; }\napp-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 56px;\n  background-color: #3f51b5;\n  color: #fafafa;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  padding: 0 10px;\n  z-index: 10; }\napp-toolbar .toolbar__logo {\n    flex: 1;\n    font-size: 14px;\n    font-weight: 500; }\napp-toolbar .toolbar__lang {\n    background: inherit;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 2px;\n    padding: 5px 10px; }\napp-toolbar .toolbar__github {\n    cursor: pointer;\n    position: relative;\n    display: inline-block;\n    min-width: 88px;\n    color: #fafafa;\n    line-height: 36px;\n    font-weight: 500;\n    text-align: center;\n    text-decoration: none;\n    outline: 0;\n    border: none;\n    border-radius: 2px;\n    white-space: nowrap;\n    vertical-align: baseline;\n    padding: 0 16px;\n    margin: 0;\n    transition: all 0.3s ease; }\napp-toolbar .toolbar__github:hover {\n      background-color: #394c9f; }\napp-toolbar .toolbar__github img {\n      height: 26px;\n      vertical-align: middle;\n      margin: 0 4px 3px 0; }\napp-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\napp-wrapper #wrapper-content {\n    flex-direction: row;\n    flex: 1 0 auto; }\napp-wrapper #wrapper-content main {\n      flex: auto;\n      padding: 0 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9tYWluLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvcmVzZXRzL19ub3JtYWxpemUuc2NzcyIsInNyYy9hcHAvaW5saW5lLXN0eWxlL2lubGluZS1zdHlsZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9yZXNldHMvX3ByaW50LnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvY29yZS9fYmFzZS5zY3NzIiwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL3l1cmEvUHJvamVjdHMvYW5ndWxhci11bml2ZXJzYWwtc3RhcnRlci9zcmMvc3R5bGVzL2NvcmUvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL3l1cmEvUHJvamVjdHMvYW5ndWxhci11bml2ZXJzYWwtc3RhcnRlci9zcmMvc3R5bGVzL2hlbHBlcnMvX2J1dHRvbi5zY3NzIiwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL3l1cmEvUHJvamVjdHMvYW5ndWxhci11bml2ZXJzYWwtc3RhcnRlci9zcmMvc3R5bGVzL2hlbHBlcnMvX2Rpc3BsYXkuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9oZWxwZXJzL19nYXBzLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvaGVscGVycy9faW5wdXQuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9oZWxwZXJzL19ib3JkZXIuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9oZWxwZXJzL19saXN0LnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvaGVscGVycy9fbmF2LnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvaGVscGVycy9fdHlwby5zY3NzIiwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL3l1cmEvUHJvamVjdHMvYW5ndWxhci11bml2ZXJzYWwtc3RhcnRlci9zcmMvc3R5bGVzL2hlbHBlcnMvX21vZGFsLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvY29yZS9fc2NoZW1hLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvaGVscGVycy9faWNvbnMuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9oZWxwZXJzL19hbmltYXRpb25zLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvbGF5b3V0cy9fZm9vdGVyLnNjc3MiLCIvVXNlcnMvdXNlci9Eb2N1bWVudHMveXVyYS9Qcm9qZWN0cy9hbmd1bGFyLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9zdHlsZXMvbGF5b3V0cy9fc2lkZWJhci5zY3NzIiwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL3l1cmEvUHJvamVjdHMvYW5ndWxhci11bml2ZXJzYWwtc3RhcnRlci9zcmMvc3R5bGVzL2xheW91dHMvX3Rvb2xiYXIuc2NzcyIsIi9Vc2Vycy91c2VyL0RvY3VtZW50cy95dXJhL1Byb2plY3RzL2FuZ3VsYXItdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL3N0eWxlcy9sYXlvdXRzL193cmFwcGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQVk7QUFDWixzRUFBWTtBQ0RaLDJEQUFBO0FBU0E7Ozs7Ozs7Ozs7OztFQVlFLGNBQWMsRUFBQTtBQVFoQjs7OztFQUlFLHFCQUFxQjtFQUNyQix3QkFBd0IsRUFBQTtBQVExQjtFQUNFLGFBQWE7RUFDYixTQUFTLEVBQUE7QUNoQlg7O0VEMEJFLGFBQWEsRUFBQTtBQVVmO0VBQ0UsdUJBQXVCLEVBQUE7QUFPekI7O0VBRUUsVUFBVSxFQUFBO0FBVVo7RUFDRSx5QkFBeUIsRUFBQTtBQU8zQjs7RUFFRSxpQkFBaUIsRUFBQTtBQU9uQjtFQUNFLGtCQUFrQixFQUFBO0FBUXBCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBT2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQU9iO0VBQ0UsY0FBYyxFQUFBO0FBT2hCOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBO0FBRzFCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxlQUFlLEVBQUE7QUFVakI7RUFDRSxTQUFTLEVBQUE7QUFPWDtFQUNFLGdCQUFnQixFQUFBO0FBVWxCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFPbEI7RUFFRSx1QkFBdUI7RUFDdkIsU0FBUyxFQUFBO0FBT1g7RUFDRSxjQUFjLEVBQUE7QUFPaEI7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYyxF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R1ksRUFBQTtBQUNaO0VBSkEsU0FHWSxFQUFBO0FBQ1o7RUFKQSxTQUdZLEVBQUE7QUFDWjtFQUpBLFNBR1ksRUFBQTtBQUNaO0VBSkEsU0FHWSxFQUFBO0FBQ1o7RUFKQSxTQUdZLEVBQUE7QUFDWjtFQUpBLFNBR1ksRUFBQTtBQUNaO0VBSkEsU0FHWSxFQUFBO0FBQ1o7RUFKQSxTQUdZLEVBQUE7QUFDWjtFQUpBLFNBR1ksRUFBQTtBQVVaO0VBYkEsUUFZWSxFQUFBO0FBSVo7RUFQQSxVQUdZLEVBQUE7QUFDWjtFQWJBLFFBWVksRUFBQTtBQUlaO0VBUEEsVUFHWSxFQUFBO0FBQ1o7RUFiQSxRQVlZLEVBQUE7QUFJWjtFQVBBLFVBR1ksRUFBQTtBQUNaO0VBYkEsUUFZWSxFQUFBO0FBSVo7RUFQQSxVQUdZLEVBQUE7QUFDWjtFQWJBLFFBWVksRUFBQTtBQUlaO0VBUEEsVUFHWSxFQUFBO0FBQ1o7RUFiQSxRQVlZLEVBQUE7QUFJWjtFQVBBLFVBR1ksRUFBQTtBQUNaO0VBYkEsUUFZWSxFQUFBO0FBSVo7RUFQQSxVQUdZLEVBQUE7QUFDWjtFQWJBLFFBWVksRUFBQTtBQUlaO0VBUEEsVUFHWSxFQUFBO0FBQ1o7RUFiQSxRQVlZLEVBQUE7QUFJWjtFQVBBLFVBR1ksRUFBQTtBQUNaO0VBYkEsUUFZWSxFQUFBO0FBSVo7RUFQQSxVQUdZLEVBQUE7QUFDWjtFQWJBLFNBWVksRUFBQTtBQUlaO0VBUEEsV0FHWSxFQUFBO0FBQ1o7RUFiQSxTQVlZLEVBQUE7QUFJWjtFQVBBLFdBR1ksRUFBQTtBQUNaO0VBYkEsU0FZWSxFQUFBO0FBSVo7RUFQQSxXQUdZLEVBQUE7QUFDWjtFQWJBLFNBWVksRUFBQTtBQUlaO0VBUEEsV0FHWSxFQUFBO0FBQ1o7RUFiQSxTQVlZLEVBQUE7QUFJWjtFQVBBLFdBR1ksRUFBQTtBQUNaO0VBYkEsU0FZWSxFQUFBO0FBSVo7RUFQQSxXQUdZLEVBQUE7QUFDWjtFQWJBLFNBWVksRUFBQTtBQUlaO0VBUEEsV0FHWSxFQUFBO0FBQ1o7RUFiQSxTQVlZLEVBQUE7QUFJWjtFQVBBLFdBR1ksRUFBQTtBQUNaO0VBYkEsU0FZWSxFQUFBO0FBSVo7RUFQQSxXQUdZLEVBQUE7QUFDWjtFQWJBLFNBWVksRUFBQTtBQUlaO0VBUEEsV0FHWSxFQUFBO0FBQ1o7RUFiQSxTQVlZLEVBQUE7QUFJWjtFQVBBLFdBR1ksRUFBQTtBQUNaO0VBYkEsU0FZWSxFQUFBO0FBSVo7RUFQQSxXQUdZLEVBQUE7QUFDWjtFQWJBLFNBWVksRUFBQTtBQUlaO0VBUEEsV0FHWSxFQUFBO0FBQ1o7RUFiQSxTQVlZLEVBQUE7QUFJWjtFQVBBLFdBR1ksRUFBQTtBQVdkO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLG9CQUFvQixFQUFBO0FBS3RCO0VBQ0UsVUFBVSxFQUFBO0FBS1o7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQixFQUFBO0FBRzdCO0VBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLFlBQVksRUFBQTtBQUtkO0VBQ0UsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLDZCQUE2QixFQUFBO0FBRy9CO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSwyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSx1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLG9CQUFvQixFQUFBO0FBSXRCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGlCQUFpQixFQUFBO0FDckRqQjtFQTdEQSxZQUFpQyxFQUFBO0FBbUVqQztFQTdESSxnQkFBcUMsRUFBQTtBQWlFekM7RUE5REksa0JBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG1CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxpQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsV0FBZ0MsRUFBQTtBQWtFaEM7RUE1REksZUFBb0MsRUFBQTtBQWdFeEM7RUE3REksaUJBQXNDLEVBQUE7QUFpRTFDO0VBOURJLGtCQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxnQkFBcUMsRUFBQTtBQW1FekM7RUFsRkEsV0FBZ0MsRUFBQTtBQXVGaEM7RUEvREUsUUFBNkIsRUFBQTtBQW1FL0I7RUFoRUUsVUFBK0IsRUFBQTtBQW9FakM7RUFqRUUsV0FBZ0MsRUFBQTtBQXFFbEM7RUFsRUUsU0FBOEIsRUFBQTtBQU1oQztFQTdEQSxZQUFpQyxFQUFBO0FBbUVqQztFQTdESSxnQkFBcUMsRUFBQTtBQWlFekM7RUE5REksa0JBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG1CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxpQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsV0FBZ0MsRUFBQTtBQWtFaEM7RUE1REksZUFBb0MsRUFBQTtBQWdFeEM7RUE3REksaUJBQXNDLEVBQUE7QUFpRTFDO0VBOURJLGtCQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxnQkFBcUMsRUFBQTtBQW1FekM7RUFsRkEsV0FBZ0MsRUFBQTtBQXVGaEM7RUEvREUsUUFBNkIsRUFBQTtBQW1FL0I7RUFoRUUsVUFBK0IsRUFBQTtBQW9FakM7RUFqRUUsV0FBZ0MsRUFBQTtBQXFFbEM7RUFsRUUsU0FBOEIsRUFBQTtBQU1oQztFQTdEQSxhQUFpQyxFQUFBO0FBbUVqQztFQTdESSxpQkFBcUMsRUFBQTtBQWlFekM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG9CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxrQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsWUFBZ0MsRUFBQTtBQWtFaEM7RUE1REksZ0JBQW9DLEVBQUE7QUFnRXhDO0VBN0RJLGtCQUFzQyxFQUFBO0FBaUUxQztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksaUJBQXFDLEVBQUE7QUFtRXpDO0VBbEZBLFlBQWdDLEVBQUE7QUF1RmhDO0VBL0RFLFNBQTZCLEVBQUE7QUFtRS9CO0VBaEVFLFdBQStCLEVBQUE7QUFvRWpDO0VBakVFLFlBQWdDLEVBQUE7QUFxRWxDO0VBbEVFLFVBQThCLEVBQUE7QUFNaEM7RUE3REEsYUFBaUMsRUFBQTtBQW1FakM7RUE3REksaUJBQXFDLEVBQUE7QUFpRXpDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxvQkFBd0MsRUFBQTtBQW1FNUM7RUFoRUksa0JBQXNDLEVBQUE7QUFvRTFDO0VBN0RBLFlBQWdDLEVBQUE7QUFrRWhDO0VBNURJLGdCQUFvQyxFQUFBO0FBZ0V4QztFQTdESSxrQkFBc0MsRUFBQTtBQWlFMUM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLGlCQUFxQyxFQUFBO0FBbUV6QztFQWxGQSxZQUFnQyxFQUFBO0FBdUZoQztFQS9ERSxTQUE2QixFQUFBO0FBbUUvQjtFQWhFRSxXQUErQixFQUFBO0FBb0VqQztFQWpFRSxZQUFnQyxFQUFBO0FBcUVsQztFQWxFRSxVQUE4QixFQUFBO0FBTWhDO0VBN0RBLGFBQWlDLEVBQUE7QUFtRWpDO0VBN0RJLGlCQUFxQyxFQUFBO0FBaUV6QztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksb0JBQXdDLEVBQUE7QUFtRTVDO0VBaEVJLGtCQUFzQyxFQUFBO0FBb0UxQztFQTdEQSxZQUFnQyxFQUFBO0FBa0VoQztFQTVESSxnQkFBb0MsRUFBQTtBQWdFeEM7RUE3REksa0JBQXNDLEVBQUE7QUFpRTFDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxpQkFBcUMsRUFBQTtBQW1FekM7RUFsRkEsWUFBZ0MsRUFBQTtBQXVGaEM7RUEvREUsU0FBNkIsRUFBQTtBQW1FL0I7RUFoRUUsV0FBK0IsRUFBQTtBQW9FakM7RUFqRUUsWUFBZ0MsRUFBQTtBQXFFbEM7RUFsRUUsVUFBOEIsRUFBQTtBQU1oQztFQTdEQSxhQUFpQyxFQUFBO0FBbUVqQztFQTdESSxpQkFBcUMsRUFBQTtBQWlFekM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG9CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxrQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsWUFBZ0MsRUFBQTtBQWtFaEM7RUE1REksZ0JBQW9DLEVBQUE7QUFnRXhDO0VBN0RJLGtCQUFzQyxFQUFBO0FBaUUxQztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksaUJBQXFDLEVBQUE7QUFtRXpDO0VBbEZBLFlBQWdDLEVBQUE7QUF1RmhDO0VBL0RFLFNBQTZCLEVBQUE7QUFtRS9CO0VBaEVFLFdBQStCLEVBQUE7QUFvRWpDO0VBakVFLFlBQWdDLEVBQUE7QUFxRWxDO0VBbEVFLFVBQThCLEVBQUE7QUFNaEM7RUE3REEsYUFBaUMsRUFBQTtBQW1FakM7RUE3REksaUJBQXFDLEVBQUE7QUFpRXpDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxvQkFBd0MsRUFBQTtBQW1FNUM7RUFoRUksa0JBQXNDLEVBQUE7QUFvRTFDO0VBN0RBLFlBQWdDLEVBQUE7QUFrRWhDO0VBNURJLGdCQUFvQyxFQUFBO0FBZ0V4QztFQTdESSxrQkFBc0MsRUFBQTtBQWlFMUM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLGlCQUFxQyxFQUFBO0FBbUV6QztFQWxGQSxZQUFnQyxFQUFBO0FBdUZoQztFQS9ERSxTQUE2QixFQUFBO0FBbUUvQjtFQWhFRSxXQUErQixFQUFBO0FBb0VqQztFQWpFRSxZQUFnQyxFQUFBO0FBcUVsQztFQWxFRSxVQUE4QixFQUFBO0FBTWhDO0VBN0RBLGFBQWlDLEVBQUE7QUFtRWpDO0VBN0RJLGlCQUFxQyxFQUFBO0FBaUV6QztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksb0JBQXdDLEVBQUE7QUFtRTVDO0VBaEVJLGtCQUFzQyxFQUFBO0FBb0UxQztFQTdEQSxZQUFnQyxFQUFBO0FBa0VoQztFQTVESSxnQkFBb0MsRUFBQTtBQWdFeEM7RUE3REksa0JBQXNDLEVBQUE7QUFpRTFDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxpQkFBcUMsRUFBQTtBQW1FekM7RUFsRkEsWUFBZ0MsRUFBQTtBQXVGaEM7RUEvREUsU0FBNkIsRUFBQTtBQW1FL0I7RUFoRUUsV0FBK0IsRUFBQTtBQW9FakM7RUFqRUUsWUFBZ0MsRUFBQTtBQXFFbEM7RUFsRUUsVUFBOEIsRUFBQTtBQU1oQztFQTdEQSxhQUFpQyxFQUFBO0FBbUVqQztFQTdESSxpQkFBcUMsRUFBQTtBQWlFekM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG9CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxrQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsWUFBZ0MsRUFBQTtBQWtFaEM7RUE1REksZ0JBQW9DLEVBQUE7QUFnRXhDO0VBN0RJLGtCQUFzQyxFQUFBO0FBaUUxQztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksaUJBQXFDLEVBQUE7QUFtRXpDO0VBbEZBLFlBQWdDLEVBQUE7QUF1RmhDO0VBL0RFLFNBQTZCLEVBQUE7QUFtRS9CO0VBaEVFLFdBQStCLEVBQUE7QUFvRWpDO0VBakVFLFlBQWdDLEVBQUE7QUFxRWxDO0VBbEVFLFVBQThCLEVBQUE7QUFNaEM7RUE3REEsYUFBaUMsRUFBQTtBQW1FakM7RUE3REksaUJBQXFDLEVBQUE7QUFpRXpDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxvQkFBd0MsRUFBQTtBQW1FNUM7RUFoRUksa0JBQXNDLEVBQUE7QUFvRTFDO0VBN0RBLFlBQWdDLEVBQUE7QUFrRWhDO0VBNURJLGdCQUFvQyxFQUFBO0FBZ0V4QztFQTdESSxrQkFBc0MsRUFBQTtBQWlFMUM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLGlCQUFxQyxFQUFBO0FBbUV6QztFQWxGQSxZQUFnQyxFQUFBO0FBdUZoQztFQS9ERSxTQUE2QixFQUFBO0FBbUUvQjtFQWhFRSxXQUErQixFQUFBO0FBb0VqQztFQWpFRSxZQUFnQyxFQUFBO0FBcUVsQztFQWxFRSxVQUE4QixFQUFBO0FBTWhDO0VBN0RBLGFBQWlDLEVBQUE7QUFtRWpDO0VBN0RJLGlCQUFxQyxFQUFBO0FBaUV6QztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksb0JBQXdDLEVBQUE7QUFtRTVDO0VBaEVJLGtCQUFzQyxFQUFBO0FBb0UxQztFQTdEQSxZQUFnQyxFQUFBO0FBa0VoQztFQTVESSxnQkFBb0MsRUFBQTtBQWdFeEM7RUE3REksa0JBQXNDLEVBQUE7QUFpRTFDO0VBOURJLG1CQUF1QyxFQUFBO0FBa0UzQztFQS9ESSxpQkFBcUMsRUFBQTtBQW1FekM7RUFsRkEsWUFBZ0MsRUFBQTtBQXVGaEM7RUEvREUsU0FBNkIsRUFBQTtBQW1FL0I7RUFoRUUsV0FBK0IsRUFBQTtBQW9FakM7RUFqRUUsWUFBZ0MsRUFBQTtBQXFFbEM7RUFsRUUsVUFBOEIsRUFBQTtBQU1oQztFQTdEQSxhQUFpQyxFQUFBO0FBbUVqQztFQTdESSxpQkFBcUMsRUFBQTtBQWlFekM7RUE5REksbUJBQXVDLEVBQUE7QUFrRTNDO0VBL0RJLG9CQUF3QyxFQUFBO0FBbUU1QztFQWhFSSxrQkFBc0MsRUFBQTtBQW9FMUM7RUE3REEsWUFBZ0MsRUFBQTtBQWtFaEM7RUE1REksZ0JBQW9DLEVBQUE7QUFnRXhDO0VBN0RJLGtCQUFzQyxFQUFBO0FBaUUxQztFQTlESSxtQkFBdUMsRUFBQTtBQWtFM0M7RUEvREksaUJBQXFDLEVBQUE7QUFtRXpDO0VBbEZBLFlBQWdDLEVBQUE7QUF1RmhDO0VBL0RFLFNBQTZCLEVBQUE7QUFtRS9CO0VBaEVFLFdBQStCLEVBQUE7QUFvRWpDO0VBakVFLFlBQWdDLEVBQUE7QUFxRWxDO0VBbEVFLFVBQThCLEVBQUE7QUMxRGxDO0VBQ0UsWUFBWTtFQ2NWLGdDQWpCa0IsRUFBQTtBREV0QjtJQUlJLHVCQUF1QixFQUFBO0FBSTNCO0VBQ0Usa0JBQWtCLEVBQUE7QUFEcEI7SUFHSSx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBQTtBQUhyQjtJQU1JLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJKRmdDLEVBQUE7QUlOcEM7TUFVTSxxQkpwQmlCLEVBQUE7QUk0QnZCO0VBQ0UsbUJKVlksRUFBQTtBTW5CZDtFQUNFLGdCQUFnQixFQUFBO0FDRGxCO0VBRUksOEJQY2dDO0VPYmhDLDZCUEZxQyxFQUFBO0FPRHpDO0VBU0ksbUJQVVUsRUFBQTtBT25CZDtJQU9NLGNQUGlCLEVBQUE7QU9BdkI7RUFhTSxjUGJpQixFQUFBO0FRU3JCO0VBTkEsY0FPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsY0FXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsY0FldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsY0FPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsY0FXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsY0FldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBVDVCO0VBTkEsZUFPdUI7RUFOdkIsaURBSndEO0VBS3hELG1CQUhnQyxFQUFBO0FBV2hDO0VBVkEsZUFXdUI7RUFWdkIsaURBSndEO0VBS3hELGdCQVM0QixFQUFBO0FBRzVCO0VBZEEsZUFldUI7RUFkdkIsaURBSndEO0VBS3hELGdCQWE0QixFQUFBO0FBSTlCO0VBQ0UsV0FBVyxFQUFB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QW5CLHlCZlJxQjtFZVNyQixjQUFjO0VBQ2QsaUhBQ2tDO0VBQ2xDLGVBQWU7RUFDZixXQUFXLEVBQUE7QUFiYjtJQWVJLE9BQU87SUFDUCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUFqQnBCO0lBb0JJLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0FBdkJyQjtJQTBCSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixTQUFTO0lBQ1QseUJBQXlCLEVBQUE7QUExQzdCO01BNENNLHlCQUF5QixFQUFBO0FBNUMvQjtNQStDTSxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLG1CQUFtQixFQUFBO0FDakR6QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0FBSGQ7SUFLSSxtQkFBbUI7SUFDbkIsY0FBYyxFQUFBO0FBTmxCO01BUU0sVUFBVTtNQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lubGluZS1zdHlsZS9pbmxpbmUtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcbi8vIFJlc2V0c1xuQGltcG9ydCAncmVzZXRzL25vcm1hbGl6ZSc7XG5AaW1wb3J0ICdyZXNldHMvcHJpbnQnO1xuLy8gQ29yZVxuQGltcG9ydCAnY29yZS92YXJpYWJsZXMnO1xuQGltcG9ydCAnY29yZS9iYXNlJztcbi8vIEhlbHBlcnNcbkBpbXBvcnQgJ2hlbHBlcnMvaW5kZXgnO1xuLy8gTGF5b3V0c1xuQGltcG9ydCAnbGF5b3V0cy9mb290ZXInO1xuQGltcG9ydCAnbGF5b3V0cy9zaWRlYmFyJztcbkBpbXBvcnQgJ2xheW91dHMvdG9vbGJhcic7XG5AaW1wb3J0ICdsYXlvdXRzL3dyYXBwZXInO1xuXG5cbi8vIENvbG91ciBzY2hlbWFcbkBpbXBvcnQgJ2NvcmUvc2NoZW1hJztcbiIsIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxuLy9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXG4vLyAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4vL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIDFcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAyXG59XG5cbi8vXG4vLyBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuLy8gUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbi8vXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbi8vIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxuLy9cblxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIExpbmtzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4vL1xuXG5hIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi8vXG4vLyBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIHVzZXJzLWFsbCBicm93c2Vycy5cbi8vXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOSwgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXG4vL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cbi8vXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxuLy9cblxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vL1xuLy8gQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxuLy8gY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXG4vL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbi8vXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gdXNlcnMtYWxsIGJyb3dzZXJzLlxuLy9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLy9cbi8vIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIHVzZXJzLWFsbCBicm93c2Vycy5cbi8vXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cbi8vXG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLy9cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXG4vL1xuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIEdyb3VwaW5nIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaSA1LlxuLy9cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cbi8vXG5cbmhyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIENvbnRhaW4gb3ZlcmZsb3cgaW4gdXNlcnMtYWxsIGJyb3dzZXJzLlxuLy9cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4vLyBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiB1c2Vycy1hbGwgYnJvd3NlcnMuXG4vL1xuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi8vIEZvcm1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbi8vIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cbi8vXG5cbi8vXG4vLyAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbi8vIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxuLy9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBtYXJnaW46IDA7IC8vIDNcbn1cblxuLy9cbi8vIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLlxuLy9cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4vLyBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuLy8gQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4KywgYW5kIE9wZXJhXG4vLyBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXG4vL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLy9cbi8vIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4vLyAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbi8vIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbi8vIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4vLyAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4vL1xuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8vIDFcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxuICBjdXJzb3I6IHBvaW50ZXI7IC8vIDNcbn1cblxuLy9cbi8vIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4vL1xuXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8vXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG4vL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbi8vIHRoZSBVQSBzdHlsZXNoZWV0LlxuLy9cblxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vL1xuLy8gSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxuLy8gRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbi8vXG4vLyAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxuLy8gMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbi8vXG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10sXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbi8vXG5cbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vXG4vLyAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxuLy8gMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4vLyAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cbi8vXG5cbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8vIDFcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLy8gMlxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuLy9cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLy9cbi8vIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbi8vXG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG4vL1xuLy8gMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LlxuLy8gMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxuLy9cblxubGVnZW5kIHtcbiAgYm9yZGVyOiAwOyAvLyAxXG4gIHBhZGRpbmc6IDA7IC8vIDJcbn1cblxuLy9cbi8vIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkuXG4vL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vL1xuLy8gRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxuLy8gTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXG4vL1xuXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vLyBUYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4vL1xuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcbi8qISBub3JtYWxpemUuY3NzIHYzLjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7IH1cblxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuYSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7IH1cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkOyB9XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxuXG5tYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmMDtcbiAgY29sb3I6ICMwMDA7IH1cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTsgfVxuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtOyB9XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTsgfVxuXG5pbWcge1xuICBib3JkZXI6IDA7IH1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7IH1cblxuaHIge1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwOyB9XG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTsgfVxuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwOyB9XG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwOyB9XG5cbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87IH1cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cblxuaW5wdXRbdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTsgfVxuXG5sZWdlbmQge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgKiB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG4gIGEsXG4gIGE6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiAgYVtocmVmXTphZnRlciB7XG4gICAgY29udGVudDogXCIgKFwiIGF0dHIoaHJlZikgXCIpXCI7IH1cbiAgYWJiclt0aXRsZV06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjsgfVxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOmFmdGVyLFxuICBhW2hyZWZePScjJ106YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnOyB9XG4gIHByZSxcbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH1cbiAgdGhlYWQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDsgfVxuICB0cixcbiAgaW1nIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuICBwLFxuICBoMixcbiAgaDMge1xuICAgIG9ycGhhbnM6IDM7XG4gICAgd2lkb3dzOiAzOyB9XG4gIGgyLFxuICBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7IH1cbiAgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7IH1cbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAudGFibGUgdGQsXG4gIC50YWJsZSB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG4gIC5idG4gPiAuY2FyZXQsXG4gIC5kcm9wdXAgPiAuYnRuID4gLmNhcmV0IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IH1cbiAgLmxhYmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyB9XG4gIC50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50OyB9XG4gIC50YWJsZS1ib3JkZXJlZCB0aCxcbiAgLnRhYmxlLWJvcmRlcmVkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7IH0gfVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAqOmFjdGl2ZSwgKjpob3ZlciwgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDsgfVxuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyB9XG5cbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udDogMTRweCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5idG4ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmJ0bi1saWdodCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCAyNXB4IDJweCAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHggNjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgIC5idG4tbGlnaHQ6ZGlzYWJsZWQge1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBib3gtc2hhZG93OiBub25lOyB9XG4gICAgICAuYnRuLWxpZ2h0OmRpc2FibGVkIGkge1xuICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cblxuLm8tMCB7XG4gIG9yZGVyOiAwOyB9XG5cbi5vLTEge1xuICBvcmRlcjogMTsgfVxuXG4uby0yIHtcbiAgb3JkZXI6IDI7IH1cblxuLm8tMyB7XG4gIG9yZGVyOiAzOyB9XG5cbi5vLTQge1xuICBvcmRlcjogNDsgfVxuXG4uby01IHtcbiAgb3JkZXI6IDU7IH1cblxuLm8tNiB7XG4gIG9yZGVyOiA2OyB9XG5cbi5vLTcge1xuICBvcmRlcjogNzsgfVxuXG4uby04IHtcbiAgb3JkZXI6IDg7IH1cblxuLm8tOSB7XG4gIG9yZGVyOiA5OyB9XG5cbi5vLTEwIHtcbiAgb3JkZXI6IDEwOyB9XG5cbi5vLTExIHtcbiAgb3JkZXI6IDExOyB9XG5cbi5vLTEyIHtcbiAgb3JkZXI6IDEyOyB9XG5cbi5vLTEzIHtcbiAgb3JkZXI6IDEzOyB9XG5cbi5vLTE0IHtcbiAgb3JkZXI6IDE0OyB9XG5cbi5vLTE1IHtcbiAgb3JkZXI6IDE1OyB9XG5cbi5vLTE2IHtcbiAgb3JkZXI6IDE2OyB9XG5cbi5vLTE3IHtcbiAgb3JkZXI6IDE3OyB9XG5cbi5vLTE4IHtcbiAgb3JkZXI6IDE4OyB9XG5cbi5vLTE5IHtcbiAgb3JkZXI6IDE5OyB9XG5cbi5vLTIwIHtcbiAgb3JkZXI6IDIwOyB9XG5cbi5vLTIxIHtcbiAgb3JkZXI6IDIxOyB9XG5cbi5vLTIyIHtcbiAgb3JkZXI6IDIyOyB9XG5cbi5vLTIzIHtcbiAgb3JkZXI6IDIzOyB9XG5cbi5vLTAge1xuICBvcmRlcjogMDsgfVxuXG4uei0wIHtcbiAgei1pbmRleDogMDsgfVxuXG4uby0xIHtcbiAgb3JkZXI6IDE7IH1cblxuLnotMSB7XG4gIHotaW5kZXg6IDE7IH1cblxuLm8tMiB7XG4gIG9yZGVyOiAyOyB9XG5cbi56LTIge1xuICB6LWluZGV4OiAyOyB9XG5cbi5vLTMge1xuICBvcmRlcjogMzsgfVxuXG4uei0zIHtcbiAgei1pbmRleDogMzsgfVxuXG4uby00IHtcbiAgb3JkZXI6IDQ7IH1cblxuLnotNCB7XG4gIHotaW5kZXg6IDQ7IH1cblxuLm8tNSB7XG4gIG9yZGVyOiA1OyB9XG5cbi56LTUge1xuICB6LWluZGV4OiA1OyB9XG5cbi5vLTYge1xuICBvcmRlcjogNjsgfVxuXG4uei02IHtcbiAgei1pbmRleDogNjsgfVxuXG4uby03IHtcbiAgb3JkZXI6IDc7IH1cblxuLnotNyB7XG4gIHotaW5kZXg6IDc7IH1cblxuLm8tOCB7XG4gIG9yZGVyOiA4OyB9XG5cbi56LTgge1xuICB6LWluZGV4OiA4OyB9XG5cbi5vLTkge1xuICBvcmRlcjogOTsgfVxuXG4uei05IHtcbiAgei1pbmRleDogOTsgfVxuXG4uby0xMCB7XG4gIG9yZGVyOiAxMDsgfVxuXG4uei0xMCB7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5vLTExIHtcbiAgb3JkZXI6IDExOyB9XG5cbi56LTExIHtcbiAgei1pbmRleDogMTE7IH1cblxuLm8tMTIge1xuICBvcmRlcjogMTI7IH1cblxuLnotMTIge1xuICB6LWluZGV4OiAxMjsgfVxuXG4uby0xMyB7XG4gIG9yZGVyOiAxMzsgfVxuXG4uei0xMyB7XG4gIHotaW5kZXg6IDEzOyB9XG5cbi5vLTE0IHtcbiAgb3JkZXI6IDE0OyB9XG5cbi56LTE0IHtcbiAgei1pbmRleDogMTQ7IH1cblxuLm8tMTUge1xuICBvcmRlcjogMTU7IH1cblxuLnotMTUge1xuICB6LWluZGV4OiAxNTsgfVxuXG4uby0xNiB7XG4gIG9yZGVyOiAxNjsgfVxuXG4uei0xNiB7XG4gIHotaW5kZXg6IDE2OyB9XG5cbi5vLTE3IHtcbiAgb3JkZXI6IDE3OyB9XG5cbi56LTE3IHtcbiAgei1pbmRleDogMTc7IH1cblxuLm8tMTgge1xuICBvcmRlcjogMTg7IH1cblxuLnotMTgge1xuICB6LWluZGV4OiAxODsgfVxuXG4uby0xOSB7XG4gIG9yZGVyOiAxOTsgfVxuXG4uei0xOSB7XG4gIHotaW5kZXg6IDE5OyB9XG5cbi5vLTIwIHtcbiAgb3JkZXI6IDIwOyB9XG5cbi56LTIwIHtcbiAgei1pbmRleDogMjA7IH1cblxuLm8tMjEge1xuICBvcmRlcjogMjE7IH1cblxuLnotMjEge1xuICB6LWluZGV4OiAyMTsgfVxuXG4uby0yMiB7XG4gIG9yZGVyOiAyMjsgfVxuXG4uei0yMiB7XG4gIHotaW5kZXg6IDIyOyB9XG5cbi5vLTIzIHtcbiAgb3JkZXI6IDIzOyB9XG5cbi56LTIzIHtcbiAgei1pbmRleDogMjM7IH1cblxuLmQtYiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5kLWktYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uZC1mIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uZC1pLWYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxuXG4uZi1hIHtcbiAgZmxleDogYXV0bzsgfVxuXG4uZi1kIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uZi1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cblxuLmYtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZi1kLWMtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTsgfVxuXG4uZi1nIHtcbiAgZmxleC1ncm93OiAxOyB9XG5cbi5qLWMtYyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5qLWMtcy1iIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5qLWMtcy1hIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cblxuLmotYy1mLWUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG5cbi5qLWMtZi1zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG5cbi5hLWktYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmEtaS1lIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG5cbi5hLWktcyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG5cbi5hLWktc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG5cbi5wLXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnAtYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4ucC1mIHtcbiAgcG9zaXRpb246IGZpeGVkOyB9XG5cbi5wLWkge1xuICBwb3NpdGlvbjogaW5oZXJpdDsgfVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5wLXQtMCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7IH1cblxuLnAtci0wIHtcbiAgcGFkZGluZy1yaWdodDogMHB4OyB9XG5cbi5wLWItMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cblxuLnAtbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7IH1cblxuLm0tMCB7XG4gIG1hcmdpbjogMHB4OyB9XG5cbi5tLXQtMCB7XG4gIG1hcmdpbi10b3A6IDBweDsgfVxuXG4ubS1yLTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDsgfVxuXG4ubS1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cblxuLm0tbC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDsgfVxuXG4ubS0wIHtcbiAgbWFyZ2luOiAwcHg7IH1cblxuLnQtMCB7XG4gIHRvcDogMHB4OyB9XG5cbi5yLTAge1xuICByaWdodDogMHB4OyB9XG5cbi5iLTAge1xuICBib3R0b206IDBweDsgfVxuXG4ubC0wIHtcbiAgbGVmdDogMHB4OyB9XG5cbi5wLTEge1xuICBwYWRkaW5nOiA4cHg7IH1cblxuLnAtdC0xIHtcbiAgcGFkZGluZy10b3A6IDhweDsgfVxuXG4ucC1yLTEge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnAtYi0xIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDsgfVxuXG4ucC1sLTEge1xuICBwYWRkaW5nLWxlZnQ6IDhweDsgfVxuXG4ubS0xIHtcbiAgbWFyZ2luOiA4cHg7IH1cblxuLm0tdC0xIHtcbiAgbWFyZ2luLXRvcDogOHB4OyB9XG5cbi5tLXItMSB7XG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XG5cbi5tLWItMSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG4ubS1sLTEge1xuICBtYXJnaW4tbGVmdDogOHB4OyB9XG5cbi5tLTEge1xuICBtYXJnaW46IDhweDsgfVxuXG4udC0xIHtcbiAgdG9wOiA4cHg7IH1cblxuLnItMSB7XG4gIHJpZ2h0OiA4cHg7IH1cblxuLmItMSB7XG4gIGJvdHRvbTogOHB4OyB9XG5cbi5sLTEge1xuICBsZWZ0OiA4cHg7IH1cblxuLnAtMiB7XG4gIHBhZGRpbmc6IDE2cHg7IH1cblxuLnAtdC0yIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7IH1cblxuLnAtci0yIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDsgfVxuXG4ucC1iLTIge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDsgfVxuXG4ucC1sLTIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7IH1cblxuLm0tMiB7XG4gIG1hcmdpbjogMTZweDsgfVxuXG4ubS10LTIge1xuICBtYXJnaW4tdG9wOiAxNnB4OyB9XG5cbi5tLXItMiB7XG4gIG1hcmdpbi1yaWdodDogMTZweDsgfVxuXG4ubS1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG5cbi5tLWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4OyB9XG5cbi5tLTIge1xuICBtYXJnaW46IDE2cHg7IH1cblxuLnQtMiB7XG4gIHRvcDogMTZweDsgfVxuXG4uci0yIHtcbiAgcmlnaHQ6IDE2cHg7IH1cblxuLmItMiB7XG4gIGJvdHRvbTogMTZweDsgfVxuXG4ubC0yIHtcbiAgbGVmdDogMTZweDsgfVxuXG4ucC0zIHtcbiAgcGFkZGluZzogMjRweDsgfVxuXG4ucC10LTMge1xuICBwYWRkaW5nLXRvcDogMjRweDsgfVxuXG4ucC1yLTMge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyB9XG5cbi5wLWItMyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4OyB9XG5cbi5wLWwtMyB7XG4gIHBhZGRpbmctbGVmdDogMjRweDsgfVxuXG4ubS0zIHtcbiAgbWFyZ2luOiAyNHB4OyB9XG5cbi5tLXQtMyB7XG4gIG1hcmdpbi10b3A6IDI0cHg7IH1cblxuLm0tci0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4OyB9XG5cbi5tLWItMyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7IH1cblxuLm0tbC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7IH1cblxuLm0tMyB7XG4gIG1hcmdpbjogMjRweDsgfVxuXG4udC0zIHtcbiAgdG9wOiAyNHB4OyB9XG5cbi5yLTMge1xuICByaWdodDogMjRweDsgfVxuXG4uYi0zIHtcbiAgYm90dG9tOiAyNHB4OyB9XG5cbi5sLTMge1xuICBsZWZ0OiAyNHB4OyB9XG5cbi5wLTQge1xuICBwYWRkaW5nOiAzMnB4OyB9XG5cbi5wLXQtNCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4OyB9XG5cbi5wLXItNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7IH1cblxuLnAtYi00IHtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7IH1cblxuLnAtbC00IHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4OyB9XG5cbi5tLTQge1xuICBtYXJnaW46IDMycHg7IH1cblxuLm0tdC00IHtcbiAgbWFyZ2luLXRvcDogMzJweDsgfVxuXG4ubS1yLTQge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7IH1cblxuLm0tYi00IHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuXG4ubS1sLTQge1xuICBtYXJnaW4tbGVmdDogMzJweDsgfVxuXG4ubS00IHtcbiAgbWFyZ2luOiAzMnB4OyB9XG5cbi50LTQge1xuICB0b3A6IDMycHg7IH1cblxuLnItNCB7XG4gIHJpZ2h0OiAzMnB4OyB9XG5cbi5iLTQge1xuICBib3R0b206IDMycHg7IH1cblxuLmwtNCB7XG4gIGxlZnQ6IDMycHg7IH1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDQwcHg7IH1cblxuLnAtdC01IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7IH1cblxuLnAtci01IHtcbiAgcGFkZGluZy1yaWdodDogNDBweDsgfVxuXG4ucC1iLTUge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDsgfVxuXG4ucC1sLTUge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7IH1cblxuLm0tNSB7XG4gIG1hcmdpbjogNDBweDsgfVxuXG4ubS10LTUge1xuICBtYXJnaW4tdG9wOiA0MHB4OyB9XG5cbi5tLXItNSB7XG4gIG1hcmdpbi1yaWdodDogNDBweDsgfVxuXG4ubS1iLTUge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5tLWwtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XG5cbi5tLTUge1xuICBtYXJnaW46IDQwcHg7IH1cblxuLnQtNSB7XG4gIHRvcDogNDBweDsgfVxuXG4uci01IHtcbiAgcmlnaHQ6IDQwcHg7IH1cblxuLmItNSB7XG4gIGJvdHRvbTogNDBweDsgfVxuXG4ubC01IHtcbiAgbGVmdDogNDBweDsgfVxuXG4ucC02IHtcbiAgcGFkZGluZzogNDhweDsgfVxuXG4ucC10LTYge1xuICBwYWRkaW5nLXRvcDogNDhweDsgfVxuXG4ucC1yLTYge1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4OyB9XG5cbi5wLWItNiB7XG4gIHBhZGRpbmctYm90dG9tOiA0OHB4OyB9XG5cbi5wLWwtNiB7XG4gIHBhZGRpbmctbGVmdDogNDhweDsgfVxuXG4ubS02IHtcbiAgbWFyZ2luOiA0OHB4OyB9XG5cbi5tLXQtNiB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7IH1cblxuLm0tci02IHtcbiAgbWFyZ2luLXJpZ2h0OiA0OHB4OyB9XG5cbi5tLWItNiB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7IH1cblxuLm0tbC02IHtcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7IH1cblxuLm0tNiB7XG4gIG1hcmdpbjogNDhweDsgfVxuXG4udC02IHtcbiAgdG9wOiA0OHB4OyB9XG5cbi5yLTYge1xuICByaWdodDogNDhweDsgfVxuXG4uYi02IHtcbiAgYm90dG9tOiA0OHB4OyB9XG5cbi5sLTYge1xuICBsZWZ0OiA0OHB4OyB9XG5cbi5wLTcge1xuICBwYWRkaW5nOiA1NnB4OyB9XG5cbi5wLXQtNyB7XG4gIHBhZGRpbmctdG9wOiA1NnB4OyB9XG5cbi5wLXItNyB7XG4gIHBhZGRpbmctcmlnaHQ6IDU2cHg7IH1cblxuLnAtYi03IHtcbiAgcGFkZGluZy1ib3R0b206IDU2cHg7IH1cblxuLnAtbC03IHtcbiAgcGFkZGluZy1sZWZ0OiA1NnB4OyB9XG5cbi5tLTcge1xuICBtYXJnaW46IDU2cHg7IH1cblxuLm0tdC03IHtcbiAgbWFyZ2luLXRvcDogNTZweDsgfVxuXG4ubS1yLTcge1xuICBtYXJnaW4tcmlnaHQ6IDU2cHg7IH1cblxuLm0tYi03IHtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDsgfVxuXG4ubS1sLTcge1xuICBtYXJnaW4tbGVmdDogNTZweDsgfVxuXG4ubS03IHtcbiAgbWFyZ2luOiA1NnB4OyB9XG5cbi50LTcge1xuICB0b3A6IDU2cHg7IH1cblxuLnItNyB7XG4gIHJpZ2h0OiA1NnB4OyB9XG5cbi5iLTcge1xuICBib3R0b206IDU2cHg7IH1cblxuLmwtNyB7XG4gIGxlZnQ6IDU2cHg7IH1cblxuLnAtOCB7XG4gIHBhZGRpbmc6IDY0cHg7IH1cblxuLnAtdC04IHtcbiAgcGFkZGluZy10b3A6IDY0cHg7IH1cblxuLnAtci04IHtcbiAgcGFkZGluZy1yaWdodDogNjRweDsgfVxuXG4ucC1iLTgge1xuICBwYWRkaW5nLWJvdHRvbTogNjRweDsgfVxuXG4ucC1sLTgge1xuICBwYWRkaW5nLWxlZnQ6IDY0cHg7IH1cblxuLm0tOCB7XG4gIG1hcmdpbjogNjRweDsgfVxuXG4ubS10LTgge1xuICBtYXJnaW4tdG9wOiA2NHB4OyB9XG5cbi5tLXItOCB7XG4gIG1hcmdpbi1yaWdodDogNjRweDsgfVxuXG4ubS1iLTgge1xuICBtYXJnaW4tYm90dG9tOiA2NHB4OyB9XG5cbi5tLWwtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2NHB4OyB9XG5cbi5tLTgge1xuICBtYXJnaW46IDY0cHg7IH1cblxuLnQtOCB7XG4gIHRvcDogNjRweDsgfVxuXG4uci04IHtcbiAgcmlnaHQ6IDY0cHg7IH1cblxuLmItOCB7XG4gIGJvdHRvbTogNjRweDsgfVxuXG4ubC04IHtcbiAgbGVmdDogNjRweDsgfVxuXG4ucC05IHtcbiAgcGFkZGluZzogNzJweDsgfVxuXG4ucC10LTkge1xuICBwYWRkaW5nLXRvcDogNzJweDsgfVxuXG4ucC1yLTkge1xuICBwYWRkaW5nLXJpZ2h0OiA3MnB4OyB9XG5cbi5wLWItOSB7XG4gIHBhZGRpbmctYm90dG9tOiA3MnB4OyB9XG5cbi5wLWwtOSB7XG4gIHBhZGRpbmctbGVmdDogNzJweDsgfVxuXG4ubS05IHtcbiAgbWFyZ2luOiA3MnB4OyB9XG5cbi5tLXQtOSB7XG4gIG1hcmdpbi10b3A6IDcycHg7IH1cblxuLm0tci05IHtcbiAgbWFyZ2luLXJpZ2h0OiA3MnB4OyB9XG5cbi5tLWItOSB7XG4gIG1hcmdpbi1ib3R0b206IDcycHg7IH1cblxuLm0tbC05IHtcbiAgbWFyZ2luLWxlZnQ6IDcycHg7IH1cblxuLm0tOSB7XG4gIG1hcmdpbjogNzJweDsgfVxuXG4udC05IHtcbiAgdG9wOiA3MnB4OyB9XG5cbi5yLTkge1xuICByaWdodDogNzJweDsgfVxuXG4uYi05IHtcbiAgYm90dG9tOiA3MnB4OyB9XG5cbi5sLTkge1xuICBsZWZ0OiA3MnB4OyB9XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogODBweDsgfVxuXG4ucC10LTEwIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7IH1cblxuLnAtci0xMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7IH1cblxuLnAtYi0xMCB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XG5cbi5wLWwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7IH1cblxuLm0tMTAge1xuICBtYXJnaW46IDgwcHg7IH1cblxuLm0tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7IH1cblxuLm0tci0xMCB7XG4gIG1hcmdpbi1yaWdodDogODBweDsgfVxuXG4ubS1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDsgfVxuXG4ubS1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7IH1cblxuLm0tMTAge1xuICBtYXJnaW46IDgwcHg7IH1cblxuLnQtMTAge1xuICB0b3A6IDgwcHg7IH1cblxuLnItMTAge1xuICByaWdodDogODBweDsgfVxuXG4uYi0xMCB7XG4gIGJvdHRvbTogODBweDsgfVxuXG4ubC0xMCB7XG4gIGxlZnQ6IDgwcHg7IH1cblxuLnAtMTEge1xuICBwYWRkaW5nOiA4OHB4OyB9XG5cbi5wLXQtMTEge1xuICBwYWRkaW5nLXRvcDogODhweDsgfVxuXG4ucC1yLTExIHtcbiAgcGFkZGluZy1yaWdodDogODhweDsgfVxuXG4ucC1iLTExIHtcbiAgcGFkZGluZy1ib3R0b206IDg4cHg7IH1cblxuLnAtbC0xMSB7XG4gIHBhZGRpbmctbGVmdDogODhweDsgfVxuXG4ubS0xMSB7XG4gIG1hcmdpbjogODhweDsgfVxuXG4ubS10LTExIHtcbiAgbWFyZ2luLXRvcDogODhweDsgfVxuXG4ubS1yLTExIHtcbiAgbWFyZ2luLXJpZ2h0OiA4OHB4OyB9XG5cbi5tLWItMTEge1xuICBtYXJnaW4tYm90dG9tOiA4OHB4OyB9XG5cbi5tLWwtMTEge1xuICBtYXJnaW4tbGVmdDogODhweDsgfVxuXG4ubS0xMSB7XG4gIG1hcmdpbjogODhweDsgfVxuXG4udC0xMSB7XG4gIHRvcDogODhweDsgfVxuXG4uci0xMSB7XG4gIHJpZ2h0OiA4OHB4OyB9XG5cbi5iLTExIHtcbiAgYm90dG9tOiA4OHB4OyB9XG5cbi5sLTExIHtcbiAgbGVmdDogODhweDsgfVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0MjQyNDI7IH1cbiAgaW5wdXQuYmctdHJhbnMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmZvcm0tY29udHJvbCBsYWJlbCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDsgfVxuICAgIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Zm9jdXMsIC5mb3JtLWNvbnRyb2wgaW5wdXQ6YWN0aXZlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzNmNTFiNTsgfVxuXG4uYXV0aC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDsgfVxuXG4ubC1zLW4ge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5uYXYtbGluayBhIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xuICBjb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC41KTsgfVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDsgfVxuICAubmF2LWxpbmsuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5uYXYtbGluazpob3Zlcjpub3QoLmFjdGl2ZSkgYSB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5zei04IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi04IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC04IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otOSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItOSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtOSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMTAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0xMSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTExIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMTEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTEzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMTMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0xMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0xNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTE1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMTYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTE3IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMTcge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMTgge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTE4IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTE5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMTkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMjEge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTIxIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTIyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMjIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTIzIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMjMge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMjQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTI0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTI1IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMjUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTI2IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMjYge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMjcge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTI3IHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTI4IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMjgge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi5zei0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5zei1iLTI5IHtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnN6LWwtMjkge1xuICBmb250LXNpemU6IDI5cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uc3otMzAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uc3otYi0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zei1sLTMwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnN6LTMxIHtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnN6LWItMzEge1xuICBmb250LXNpemU6IDMxcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc3otbC0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwOyB9XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5oLTEwMCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4udC1hLWMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnQtYS1sIHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udC1hLXIge1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cbiAgLm1vZGFsLWJsYWNrLWJnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG4gIC5tb2RhbC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI5NmYwO1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxuICAuaWNvbi13YXZpbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pY29ucy93YXZpbmcucG5nXCIpO1xuICAgIGFuaW1hdGlvbjogd2F2aW5nIDgwMG1zIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIHdhdmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgZXh0ZW5kLXgge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGV4dGVuZC15IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDAlKTsgfSB9XG5cbkBrZXlmcmFtZXMgb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG5hcHAtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMCAwIGF1dG87XG4gIGhlaWdodDogNDlweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMTVweCAwIDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgYXBwLWZvb3RlciBmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgYXBwLWZvb3RlciBmb290ZXIgLmZvb3Rlcl9fbGVmdCB7XG4gICAgICBmbGV4OiAxOyB9XG4gICAgYXBwLWZvb3RlciBmb290ZXIgYSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMCAxMHB4OyB9XG5cbmFwcC1zaWRlYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyODBweDsgfVxuICBhcHAtc2lkZWJhciB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzNmNTFiNTsgfVxuICAgIGFwcC1zaWRlYmFyIHVsIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuICAgICAgYXBwLXNpZGViYXIgdWwgbGkgYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCA0OHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgICBhcHAtc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XG4gICAgICAgIGFwcC1zaWRlYmFyIHVsIGxpIGEuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XG4gICAgICAgIGFwcC1zaWRlYmFyIHVsIGxpIGEgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIGxlZnQ6IDE1cHg7IH1cblxuYXBwLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHotaW5kZXg6IDEwOyB9XG4gIGFwcC10b29sYmFyIC50b29sYmFyX19sb2dvIHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIGFwcC10b29sYmFyIC50b29sYmFyX19sYW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7IH1cbiAgYXBwLXRvb2xiYXIgLnRvb2xiYXJfX2dpdGh1YiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiA4OHB4O1xuICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XG4gICAgYXBwLXRvb2xiYXIgLnRvb2xiYXJfX2dpdGh1Yjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0YzlmOyB9XG4gICAgYXBwLXRvb2xiYXIgLnRvb2xiYXJfX2dpdGh1YiBpbWcge1xuICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIG1hcmdpbjogMCA0cHggM3B4IDA7IH1cblxuYXBwLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7IH1cbiAgYXBwLXdyYXBwZXIgI3dyYXBwZXItY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxIDAgYXV0bzsgfVxuICAgIGFwcC13cmFwcGVyICN3cmFwcGVyLWNvbnRlbnQgbWFpbiB7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCAxNXB4OyB9XG4iLCJAbWVkaWEgcHJpbnQge1xuICAqIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBhW2hyZWZdOmFmdGVyIHtcbiAgICBjb250ZW50OiAnICgnIGF0dHIoaHJlZikgJyknO1xuICB9XG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcbiAgICBjb250ZW50OiAnICgnIGF0dHIodGl0bGUpICcpJztcbiAgfVxuICAvLyBEb24ndCBzaG93IGxpbmtzIGZvciBpbWFnZXMsIG9yIGphdmFzY3JpcHQvaW50ZXJuYWwgbGlua3NcbiAgYVtocmVmXj0namF2YXNjcmlwdDonXTphZnRlcixcbiAgYVtocmVmXj0nIyddOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICBwcmUsXG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIHRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7IC8vIGg1YnAuY29tL3RcbiAgfVxuICB0cixcbiAgaW1nIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICBwLFxuICBoMixcbiAgaDMge1xuICAgIG9ycGhhbnM6IDM7XG4gICAgd2lkb3dzOiAzO1xuICB9XG4gIGgyLFxuICBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gIH1cbiAgLy8gQ2hyb21lIChPU1gpIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTI0NVxuICAvLyBPbmNlIGZpeGVkLCB3ZSBjYW4ganVzdCBzdHJhaWdodCB1cCByZW1vdmUgdGhpcy5cbiAgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLy8gQm9vdHN0cmFwIGNvbXBvbmVudHNcbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudGFibGUge1xuICAgIHRkLFxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmJ0bixcbiAgLmRyb3B1cCA+IC5idG4ge1xuICAgID4gLmNhcmV0IHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICB9XG4gIC50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O1xuICB9XG4gIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6YWN0aXZlLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvci1iZztcbiAgY29sb3I6ICRib2R5LWNvbG9yLXRleHQ7XG4gIGZvbnQ6IDE0cHggUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XG4gIGNvbG9yOiAkYm9keS1jb2xvci1iZztcbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Y1MWI1O1xuJGNvbG9yLXByaW1hcnktNTA6IHJnYmEoNjMsIDgxLCAxODEsIDAuNSk7XG5cbi8vIEJvZHlcbiRib2R5LWNvbG9yLWJnOiAjZmZmO1xuJGJvZHktY29sb3ItdGV4dDogIzQ0NDtcblxuLy8gVG9vbGJhclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4O1xuXG4vLyBTaWRlYmFyXG4kc2lkZWJhci13aWR0aDogNjRweDtcblxuLy8gRm9vdGVyXG4kZm9vdGVyLWhlaWdodDogNDlweDtcblxuJHRyYW5zaXRpb24tYWxsOiAgYWxsIDAuMTVzIGVhc2Utb3V0O1xuXG4kYm9yZGVyLWNvbG9yOiAjNDI0MjQyO1xuJGdyZXk6ICNlMGUwZTA7XG4iLCIuYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAmOmRpc2FibGVkIHtcbiAgfVxuICAmLWxpZ2h0e1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggMjVweCAycHggI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgJjpkaXNhYmxlZHtcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGl7XG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xzOiAyNDtcbi8vIEBNSVhJTlxuQG1peGluIG9yZGVyKCRvcmRlcikge1xuICBvcmRlcjogJG9yZGVyO1xufVxuXG5AZm9yICRpIGZyb20gMCB0byAkY29scyB7XG4gIC5vLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBvcmRlcigkaSk7XG4gIH1cbn1cbkBtaXhpbiB6LWluZGV4KCR6KSB7XG4gIHotaW5kZXg6ICR6O1xufVxuXG5AZm9yICRpIGZyb20gMCB0byAkY29scyB7XG4gIC5vLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBvcmRlcigkaSk7XG4gIH1cbiAgLnotI3skaX0ge1xuICAgIEBpbmNsdWRlIHotaW5kZXgoJGkpO1xuICB9XG59XG5cbi8vIERJU1BMQVlTXG5cbi5kLWIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmQtaS1iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZC1mIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmQtaS1mIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi8vIEZMRVhcblxuLmYtYSB7XG4gIGZsZXg6IGF1dG87XG59XG5cbi8vIEZMRVggRElSRUNUSU9OU1xuXG4uZi1kIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmYtZC1yIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uZi1kLWMge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZi1kLWMtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLmYtZyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLy8gSlVTVElGWS1DT05URU5UU1xuXG4uai1jLWMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmotYy1zLWIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5qLWMtcy1hIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5qLWMtZi1lIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmotYy1mLXMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5hLWktYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hLWktZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmEtaS1zIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hLWktc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4vLyBQT1NJVElPTlxuLnAtciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wLWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucC1mIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnAtaSB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuIiwiJGdyaWQ6IDg7XG4kcG9pbnRzOiAxMjtcblxuLy8gUEFERElOR1xuQG1peGluIHBhZGRpbmctZ2FwKCRncmlkLCAkbXVsdGlwbGllcikge1xuICBwYWRkaW5nOiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG59XG5cbkBtaXhpbiBwYWRkaW5nLXNpZGUtZ2FwKCRncmlkLCAkbXVsdGlwbGllciwgJHNpZGVzLi4uKSB7XG4gIEBlYWNoICRzaWRlIGluICgkc2lkZXMpIHtcbiAgICBAaWYgJHNpZGUgPT0gdG9wIHtcbiAgICAgIHBhZGRpbmctdG9wOiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG4gICAgfVxuICAgIEBpZiAkc2lkZSA9PSByaWdodCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG4gICAgfVxuICAgIEBpZiAkc2lkZSA9PSBib3R0b20ge1xuICAgICAgcGFkZGluZy1ib3R0b206ICRtdWx0aXBsaWVyICogJGdyaWQgKyBweDtcbiAgICB9XG4gICAgQGlmICRzaWRlID09IGxlZnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG4gICAgfVxuICB9XG59XG5cbi8vIE1BUkdJTlxuQG1peGluIG1hcmdpbi1nYXAoJGdyaWQsICRtdWx0aXBsaWVyKSB7XG4gIG1hcmdpbjogJG11bHRpcGxpZXIgKiAkZ3JpZCArIHB4O1xufVxuXG5AbWl4aW4gbWFyZ2luLXNpZGUtZ2FwKCRncmlkLCAkbXVsdGlwbGllciwgJHNpZGVzLi4uKSB7XG4gIEBlYWNoICRzaWRlIGluICgkc2lkZXMpIHtcbiAgICBAaWYgJHNpZGUgPT0gdG9wIHtcbiAgICAgIG1hcmdpbi10b3A6ICRtdWx0aXBsaWVyICogJGdyaWQgKyBweDtcbiAgICB9XG4gICAgQGlmICRzaWRlID09IHJpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogJG11bHRpcGxpZXIgKiAkZ3JpZCArIHB4O1xuICAgIH1cbiAgICBAaWYgJHNpZGUgPT0gYm90dG9tIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRtdWx0aXBsaWVyICogJGdyaWQgKyBweDtcbiAgICB9XG4gICAgQGlmICRzaWRlID09IGxlZnQge1xuICAgICAgbWFyZ2luLWxlZnQ6ICRtdWx0aXBsaWVyICogJGdyaWQgKyBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQUJTT0xVVEUgJiBGSVhFRFxuXG5AbWl4aW4gZ2FwKCRncmlkLCAkbXVsdGlwbGllciwgJHNpZGUpIHtcbiAgQGlmICRzaWRlID09IHRvcCB7XG4gICAgdG9wOiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG4gIH1cbiAgQGlmICRzaWRlID09IHJpZ2h0IHtcbiAgICByaWdodDogJG11bHRpcGxpZXIgKiAkZ3JpZCArIHB4O1xuICB9XG4gIEBpZiAkc2lkZSA9PSBib3R0b20ge1xuICAgIGJvdHRvbTogJG11bHRpcGxpZXIgKiAkZ3JpZCArIHB4O1xuICB9XG4gIEBpZiAkc2lkZSA9PSBsZWZ0IHtcbiAgICBsZWZ0OiAkbXVsdGlwbGllciAqICRncmlkICsgcHg7XG4gIH1cbn1cblxuQGZvciAkaSBmcm9tIDAgdG8gJHBvaW50cyB7XG4gIC8vIC0tLS0tLS0tLS0gUEFERElORyAtLS0tLS0tLS0tLS1cbiAgLnAtI3skaX0ge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctZ2FwKCRncmlkLCAkaSk7XG4gIH1cblxuICAvLyAgQGVhY2ggJHNpZGUgaW4gdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XG4gIC8vICBAaWYgJHNpZGUgPT0gdG9wXG4gIC5wLXQtI3skaX0ge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctc2lkZS1nYXAoJGdyaWQsICRpLCB0b3ApO1xuICB9XG4gIC8vQGlmICRzaWRlID09IHJpZ2h0XG4gIC5wLXItI3skaX0ge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctc2lkZS1nYXAoJGdyaWQsICRpLCByaWdodCk7XG4gIH1cbiAgLy9AaWYgJHNpZGUgPT0gYm90dG9tXG4gIC5wLWItI3skaX0ge1xuICAgIEBpbmNsdWRlIHBhZGRpbmctc2lkZS1nYXAoJGdyaWQsICRpLCBib3R0b20pO1xuICB9XG4gIC8vQGlmICRzaWRlID09IGxlZnRcbiAgLnAtbC0jeyRpfSB7XG4gICAgQGluY2x1ZGUgcGFkZGluZy1zaWRlLWdhcCgkZ3JpZCwgJGksIGxlZnQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0gTUFSR0lOIC0tLS0tLS0tLS0tLVxuICAubS0jeyRpfSB7XG4gICAgQGluY2x1ZGUgbWFyZ2luLWdhcCgkZ3JpZCwgJGkpO1xuICB9XG4gIC8vICBAZWFjaCAkc2lkZSBpbiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRcbiAgLy8gIEBpZiAkc2lkZSA9PSB0b3BcbiAgLm0tdC0jeyRpfSB7XG4gICAgQGluY2x1ZGUgbWFyZ2luLXNpZGUtZ2FwKCRncmlkLCAkaSwgdG9wKTtcbiAgfVxuICAvL0BpZiAkc2lkZSA9PSByaWdodFxuICAubS1yLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tc2lkZS1nYXAoJGdyaWQsICRpLCByaWdodCk7XG4gIH1cbiAgLy9AaWYgJHNpZGUgPT0gYm90dG9tXG4gIC5tLWItI3skaX0ge1xuICAgIEBpbmNsdWRlIG1hcmdpbi1zaWRlLWdhcCgkZ3JpZCwgJGksIGJvdHRvbSk7XG4gIH1cbiAgLy9AaWYgJHNpZGUgPT0gbGVmdFxuICAubS1sLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tc2lkZS1nYXAoJGdyaWQsICRpLCBsZWZ0KTtcbiAgfVxuXG4gIC5tLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBtYXJnaW4tZ2FwKCRncmlkLCAkaSk7XG4gIH1cbiAgLy8gIEBlYWNoICRzaWRlIGluIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdFxuICAvLyAgQGlmICRzaWRlID09IHRvcFxuICAudC0jeyRpfSB7XG4gICAgQGluY2x1ZGUgZ2FwKCRncmlkLCAkaSwgdG9wKTtcbiAgfVxuICAvL0BpZiAkc2lkZSA9PSByaWdodFxuICAuci0jeyRpfSB7XG4gICAgQGluY2x1ZGUgZ2FwKCRncmlkLCAkaSwgcmlnaHQpO1xuICB9XG4gIC8vQGlmICRzaWRlID09IGJvdHRvbVxuICAuYi0jeyRpfSB7XG4gICAgQGluY2x1ZGUgZ2FwKCRncmlkLCAkaSwgYm90dG9tKTtcbiAgfVxuICAvL0BpZiAkc2lkZSA9PSBsZWZ0XG4gIC5sLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBnYXAoJGdyaWQsICRpLCBsZWZ0KTtcbiAgfVxufVxuIiwiQGltcG9ydCBcImJvcmRlclwiO1xuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSk7XG4gICYuYmctdHJhbnMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxhYmVsIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWFsbDtcbiAgICAmOmZvY3VzLCAmOmFjdGl2ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgJiB+IGxhYmVsIHtcbiAgICAgICAgLy8gSWYgbGFiZWwgYmVoYXZpb3IgbmVlZGVkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hdXRoLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAkZ3JleTtcbn1cbiIsIiRib3JkZXItY29sb3I6ICM0MjQyNDI7XG4kZGVmYXVsdC1ib3JkZXItd2lkdGg6IDNweDtcbiRkZWZhdWx0LWJvcmRlci10eXBlOiBzb2xpZDtcbiRkZWZhdWx0LWJvcmRlci1lZGdlOiBib3RoO1xuXG5cbkBtaXhpbiBib3JkZXIoJGVkZ2U6ICRkZWZhdWx0LWJvcmRlci1lZGdlLCAkYm9yZGVyLXdpZHRoOiAkZGVmYXVsdC1ib3JkZXItd2lkdGgsICRib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IsICRib3JkZXItdHlwZTogJGRlZmF1bHQtYm9yZGVyLXR5cGUpIHtcbiAgQGlmICRlZGdlID09IGJvdGgge1xuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXR5cGUgJGJvcmRlci1jb2xvcjtcbiAgfVxuICBAaWYgJGVkZ2UgPT0gdG9wIHtcbiAgICBib3JkZXItdG9wOiAkYm9yZGVyLXdpZHRoICRib3JkZXItdHlwZSAkYm9yZGVyLWNvbG9yO1xuICB9XG4gIEBpZiAkZWRnZSA9PSByaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyLXdpZHRoICRib3JkZXItdHlwZSAkYm9yZGVyLWNvbG9yO1xuICB9XG4gIEBpZiAkZWRnZSA9PSBib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b206ICRib3JkZXItd2lkdGggJGJvcmRlci10eXBlICRib3JkZXItY29sb3I7XG4gIH1cbiAgQGlmICRlZGdlID09IGxlZnQge1xuICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyLXdpZHRoICRib3JkZXItdHlwZSAkYm9yZGVyLWNvbG9yO1xuICB9XG59XG4iLCIubC1zLW4ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuIiwiLm5hdi1saW5rIHtcbiAgYSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYWxsO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS01MDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxuICAgIGJhY2tncm91bmQ6ICRncmV5O1xuICB9XG4gICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgfVxufVxuIiwiJGRlZmF1bHQtZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQ6IG5vcm1hbCwgJGZhbWlseTogJGRlZmF1bHQtZm9udC1mYW1pbHkpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xufVxuXG5AZm9yICRpIGZyb20gOCB0byAzMiB7XG4gIC5zei0jeyRpfSB7XG4gICAgQGluY2x1ZGUgZm9udCgkaSArIHB4KTtcbiAgfVxuXG4gIC5zei1iLSN7JGl9IHtcbiAgICBAaW5jbHVkZSBmb250KCRpICsgcHgsIDcwMCk7XG4gIH1cblxuICAuc3otbC0jeyRpfSB7XG4gICAgQGluY2x1ZGUgZm9udCgkaSArIHB4LCAxMDApO1xuICB9XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmgtMTAwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udC1hLWMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udC1hLWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnQtYS1yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vY29yZS9zY2hlbWFcIjtcblxuLm1vZGFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICYtYmxhY2stYmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgfVxuICAmLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuIiwiJGJnOiAjZjJmMmYyO1xuJGFjdGl2ZTogIzIyOTZmMDtcbiRncmFkaWVudDogI2YyZjJmMjtcblxuLy9cbi8vJGJnOiAjZjJmMmYyO1xuLy8kYWN0aXZlOiAjYzAxNDYyO1xuLy8kZ3JhZGllbnQ6ICMwMjAzMDQ7XG4vL1xuLy9cbi8vJGJnOiAjMDIwMzA0O1xuLy8kYWN0aXZlOiAjYmYxOGI1O1xuLy8kZ3JhZGllbnQ6ICMzOTliZTA7XG4iLCIuaWNvbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgJi13YXZpbmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaWNvbnMvd2F2aW5nLnBuZycpO1xuICAgIGFuaW1hdGlvbjogd2F2aW5nIDgwMG1zIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxufVxuIiwiXG5Aa2V5ZnJhbWVzIHdhdmluZyB7XG4gIDAlICAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSAgIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBleHRlbmQteCB7XG4gIDAlICAge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZXh0ZW5kLXkge1xuICAwJSAgIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBvcGFjaXR5IHtcbiAgMCUgICB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iLCJhcHAtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMCAwIGF1dG87XG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbiAgY29sb3I6ICM3ZDdkN2Q7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMTBweCAxNXB4IDAgMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuZm9vdGVyX19sZWZ0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIGEge1xuICAgICAgcGFkZGluZzogMTVweCAwIDAgMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsImFwcC1zaWRlYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyODBweDtcbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIGEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzIxMjEyMTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgNDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIH1cbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImFwcC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICAudG9vbGJhcl9fbG9nbyB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAudG9vbGJhcl9fbGFuZyB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG4gIC50b29sYmFyX19naXRodWIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogODhweDtcbiAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTRjOWY7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luOiAwIDRweCAzcHggMDtcbiAgICB9XG4gIH1cbn1cbiIsImFwcC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAjd3JhcHBlci1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIG1haW4ge1xuICAgICAgZmxleDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0= */"];




/***/ }),

/***/ "./src/app/inline-style/inline-style.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inline-style/inline-style.component.ts ***!
  \********************************************************/
/*! exports provided: InlineStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineStyleComponent", function() { return InlineStyleComponent; });
var InlineStyleComponent = /** @class */ /*@__PURE__*/ (function () {
    function InlineStyleComponent() {
    }
    return InlineStyleComponent;
}());




/***/ }),

/***/ "./src/app/inline-style/inline-style.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/inline-style/inline-style.module.ts ***!
  \*****************************************************/
/*! exports provided: InlineStyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineStyleModule", function() { return InlineStyleModule; });
var InlineStyleModule = /** @class */ /*@__PURE__*/ (function () {
    function InlineStyleModule() {
    }
    return InlineStyleModule;
}());




/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
var AuthGuard = /** @class */ /*@__PURE__*/ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        var _this = this;
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/auth', 'login'])
                .then(function () {
                _this.auth.interruptedUrl = state.url;
                // TODO: If Notification (toast) service is present we can show warning message
            });
        }
        return this.auth.isAuthenticated();
    };
    return AuthGuard;
}());




/***/ }),

/***/ "./src/app/shared/guards/un-auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/guards/un-auth.guard.ts ***!
  \************************************************/
/*! exports provided: UnAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthGuard", function() { return UnAuthGuard; });
var UnAuthGuard = /** @class */ /*@__PURE__*/ (function () {
    function UnAuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    UnAuthGuard.prototype.canLoad = function (route, segments) {
        return this.condition(!this.auth.isAuthenticated());
    };
    UnAuthGuard.prototype.condition = function (isAuthenticated) {
        var _this = this;
        if (!isAuthenticated) {
            this.router.navigate([!!this.auth.interruptedUrl ? this.auth.interruptedUrl : ''])
                .then(function () {
                _this.auth.interruptedUrl = '';
            });
        }
        return isAuthenticated;
    };
    return UnAuthGuard;
}());




/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ErrorInterceptor = /** @class */ /*@__PURE__*/ (function () {
    function ErrorInterceptor(auth) {
        this.auth = auth;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            if (error) {
                switch (error.status) {
                    case 401: {
                        _this.Error401Handler();
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            var notification = error.error.message || error.statusText;
            // TODO: If Notification (toast) service is present we can show current error notification
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(notification);
        }));
    };
    ErrorInterceptor.prototype.Error401Handler = function () {
        // Auto logout if 401 response returned from api
        this.auth.logOut();
    };
    return ErrorInterceptor;
}());




/***/ }),

/***/ "./src/app/shared/interceptors/token.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var TokenInterceptor = /** @class */ /*@__PURE__*/ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
        this.authPrefix =
            /** condition is:
             * If we have some specific auth prefix we use it,
             * Else we use default JWT (json web token) prefix - 'Bearer' */
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"]['AUTH_KEY']
                ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"]['AUTH_KEY']
                : 'Bearer';
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        // Add auth-token to http-header if available
        var tokenExists = this.auth && this.auth.token && this.auth.token.length;
        if (tokenExists) {
            request = request.clone({
                setHeaders: {
                    'Authorization': this.authPrefix + " " + this.auth.token
                }
            });
        }
        return next.handle(request);
    };
    return TokenInterceptor;
}());




/***/ }),

/***/ "./src/app/shared/layouts/layouts.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/layouts/layouts.module.ts ***!
  \**************************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
var LayoutsModule = /** @class */ /*@__PURE__*/ (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());




/***/ }),

/***/ "./src/app/shared/layouts/wrapper/wrapper.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/wrapper/wrapper.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_WrapperComponent, View_WrapperComponent_0, View_WrapperComponent_Host_0, WrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WrapperComponent", function() { return RenderType_WrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WrapperComponent_0", function() { return View_WrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WrapperComponent_Host_0", function() { return View_WrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponentNgFactory", function() { return WrapperComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper.component */ "./src/app/shared/layouts/wrapper/wrapper.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_WrapperComponent = [];
var RenderType_WrapperComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_WrapperComponent, data: {} });

function View_WrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_WrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-wrapper", [], null, null, null, View_WrapperComponent_0, RenderType_WrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"], [], null, null)], null, null); }
var WrapperComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-wrapper", _wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"], View_WrapperComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/shared/layouts/wrapper/wrapper.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/wrapper/wrapper.component.ts ***!
  \*************************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
var WrapperComponent = /** @class */ /*@__PURE__*/ (function () {
    function WrapperComponent() {
    }
    return WrapperComponent;
}());




/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AuthService = /** @class */ /*@__PURE__*/ (function () {
    function AuthService(_appStorage, 
    // private _http: HttpClient,
    _router) {
        var _this = this;
        this._appStorage = _appStorage;
        this._router = _router;
        this._initialData = [
            'token', 'interruptedUrl',
        ];
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](!1);
        this._initialData.forEach(function (value) {
            _this[value] = _this._getStoredItems(value);
        });
    }
    Object.defineProperty(AuthService.prototype, "interruptedUrl", {
        get: function () {
            return this._interruptedUrl;
        },
        set: function (url) {
            this._interruptedUrl = url;
            if (!url) {
                this._appStorage.removeItem('interruptedUrl');
            }
            else {
                this._saveValueInCookieStorage('interruptedUrl', url);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this._authToken ? this._authToken : '';
        },
        set: function (token) {
            this._authToken = token;
            this.changeAuthState = !!token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "changeAuthState", {
        set: function (newState) {
            this._authState.next(newState);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isAuthenticated = function () {
        // This method is required to implement authentication.
        return !!this.token;
    };
    AuthService.prototype.logIn = function (formValue) {
        var _this = this;
        // this._http.post('', formValue).subscribe((response: string) => {
        this._saveValueInCookieStorage('token', formValue.email + formValue.password);
        // });
        // If the entrance url was interrupted.
        this._router.navigate([this.interruptedUrl && this.interruptedUrl.length ? this.interruptedUrl : '/home'])
            .then(function () {
            _this.interruptedUrl = '';
            // TODO: If Notification (toast) service is present can show successfully Logged in message
        });
    };
    AuthService.prototype.logOut = function () {
        this.token = '';
        this._appStorage.clear();
        this._router.navigate(['/auth', 'login']).then(function () {
            // TODO: If Notification (toast) service is present can show successfully Logged out message
        });
    };
    AuthService.prototype._getStoredItems = function (key) {
        return this._appStorage.getItem(key);
    };
    AuthService.prototype._saveValueInCookieStorage = function (key, value) {
        // For saving auth token in Cookie storage.
        this._appStorage.setItem(key, value);
        if (key === 'token') {
            this.token = value;
        }
    };
    return AuthService;
}());




/***/ }),

/***/ "./src/app/shared/shared-meta/shared-meta.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/shared-meta/shared-meta.module.ts ***!
  \**********************************************************/
/*! exports provided: metaFactory, SharedMetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaFactory", function() { return metaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMetaModule", function() { return SharedMetaModule; });
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");

function metaFactory(translate) {
    return new _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["MetaStaticLoader"]({
        callback: function (key) { return translate.get(key); },
        pageTitlePositioning: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["PageTitlePositioning"].PrependPageTitle,
        pageTitleSeparator: ' | ',
        applicationName: 'App Universal',
        defaults: {
            title: 'Default page title',
            description: 'Default description',
            'og:site_name': 'App site Universal',
            'og:type': 'website',
            'og:locale': 'ru_RU',
            'og:locale:alternate': [
                { code: 'en', name: 'English', culture: 'en-US' },
                { code: 'ru', name: 'Русский', culture: 'ru-RU' },
            ]
                .map(function (lang) { return lang.culture; })
                .toString(),
        },
    });
}
var SharedMetaModule = /** @class */ /*@__PURE__*/ (function () {
    function SharedMetaModule() {
    }
    return SharedMetaModule;
}());




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
var exports = [];
var SharedModule = /** @class */ /*@__PURE__*/ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return { ngModule: SharedModule };
    };
    return SharedModule;
}());




/***/ }),

/***/ "./src/app/shared/storage/universal.storage.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/storage/universal.storage.ts ***!
  \*****************************************************/
/*! exports provided: UniversalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalStorage", function() { return UniversalStorage; });
var UniversalStorage = /** @class */ /*@__PURE__*/ (function () {
    function UniversalStorage(cookieService) {
        this.cookieService = cookieService;
    }
    UniversalStorage.prototype.clear = function () {
        this.cookieService.removeAll();
    };
    UniversalStorage.prototype.getAll = function () {
        return this.cookieService.getAll();
    };
    UniversalStorage.prototype.getItem = function (key) {
        return this.cookieService.get(key);
    };
    UniversalStorage.prototype.key = function (index) {
        return this.cookieService.getAll().propertyIsEnumerable[index];
    };
    UniversalStorage.prototype.removeItem = function (key) {
        this.cookieService.remove(key);
    };
    UniversalStorage.prototype.setItem = function (key, data) {
        this.cookieService.put(key, data);
    };
    return UniversalStorage;
}());




/***/ }),

/***/ "./src/app/shared/translates/translates-browser/translates-browser-loader.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/translates/translates-browser/translates-browser-loader.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: TranslatesBrowserLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatesBrowserLoaderService", function() { return TranslatesBrowserLoaderService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TranslatesBrowserLoaderService = /** @class */ /*@__PURE__*/ (function () {
    function TranslatesBrowserLoaderService(prefix, suffix, transferState, http) {
        if (prefix === void 0) {
            prefix = 'i18n';
        }
        if (suffix === void 0) {
            suffix = '.json';
        }
        this.prefix = prefix;
        this.suffix = suffix;
        this.transferState = transferState;
        this.http = http;
    }
    TranslatesBrowserLoaderService.prototype.getTranslation = function (lang) {
        var key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["makeStateKey"])("transfer-translate-" + lang);
        var data = this.transferState.get(key, null);
        if (data) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next(data);
                observer.complete();
            });
        }
        else {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](this.http, this.prefix, this.suffix).getTranslation(lang);
        }
    };
    return TranslatesBrowserLoaderService;
}());




/***/ }),

/***/ "./src/app/shared/translates/translates-browser/translates-browser.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/translates/translates-browser/translates-browser.module.ts ***!
  \***********************************************************************************/
/*! exports provided: translateStaticLoader, TranslatesBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateStaticLoader", function() { return translateStaticLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatesBrowserModule", function() { return TranslatesBrowserModule; });
/* harmony import */ var _translates_browser_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translates-browser-loader.service */ "./src/app/shared/translates/translates-browser/translates-browser-loader.service.ts");

function translateStaticLoader(http, transferState) {
    return new _translates_browser_loader_service__WEBPACK_IMPORTED_MODULE_0__["TranslatesBrowserLoaderService"]('/assets/i18n/', '.json', transferState, http);
}
var TranslatesBrowserModule = /** @class */ /*@__PURE__*/ (function () {
    function TranslatesBrowserModule() {
    }
    return TranslatesBrowserModule;
}());




/***/ }),

/***/ "./src/app/shared/translates/translates.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/translates/translates.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslatesService, CommonMissingTranslationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatesService", function() { return TranslatesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMissingTranslationHandler", function() { return CommonMissingTranslationHandler; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var LANG_LIST = [
    { code: 'ru', name: 'Русский', culture: 'ru-RU' },
    { code: 'en', name: 'English', culture: 'en-US' },
];
var LANG_DEFAULT = LANG_LIST[0];
var STORAGE_LANG_NAME = 'langCode';
var TranslatesService = /** @class */ /*@__PURE__*/ (function () {
    function TranslatesService(_platformId, _document, _request, _translate, _meta, _req, _appStorage) {
        this._platformId = _platformId;
        this._document = _document;
        this._request = _request;
        this._translate = _translate;
        this._meta = _meta;
        this._req = _req;
        this._appStorage = _appStorage;
    }
    TranslatesService.prototype.initLanguage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._translate.addLangs(LANG_LIST.map(function (lang) { return lang.code; }));
            var language = _this._getLanguage();
            if (language) {
                _this._translate.setDefaultLang(language.code);
            }
            else {
                _this._translate.setDefaultLang(LANG_DEFAULT.code);
            }
            _this._setLanguage(language);
            resolve();
        });
    };
    TranslatesService.prototype._getLanguage = function () {
        var language = this._getFindLang(this._appStorage.getItem(STORAGE_LANG_NAME));
        if (language) {
            return language;
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId)) {
            language = this._getFindLang(this._translate.getBrowserLang());
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this._platformId)) {
            try {
                var reqLangList_1 = this._request.headers['accept-language']
                    .split(';')[0]
                    .split(',');
                language = LANG_LIST.find(function (lang) {
                    return reqLangList_1.indexOf(lang.code) !== -1 || reqLangList_1.indexOf(lang.culture) !== -1;
                });
            }
            catch (err) {
                language = LANG_DEFAULT;
            }
        }
        language = language || LANG_DEFAULT;
        this._appStorage.setItem(STORAGE_LANG_NAME, language.code);
        return language;
    };
    TranslatesService.prototype._getFindLang = function (code) {
        return code ? LANG_LIST.find(function (lang) { return lang.code === code; }) : null;
    };
    TranslatesService.prototype._setLanguage = function (lang) {
        var _this = this;
        this._translate.use(lang.code).subscribe(function () {
            _this._meta.setTag('og:locale', lang.culture);
            _this._document.documentElement.lang = lang.code;
        });
    };
    TranslatesService.prototype.changeLang = function (code) {
        var lang = this._getFindLang(code);
        if (!lang || lang.code === this._translate.currentLang) {
            return;
        }
        this._appStorage.setItem(STORAGE_LANG_NAME, lang.code);
        this._setLanguage(lang);
    };
    TranslatesService.prototype.getLangList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(LANG_LIST);
    };
    TranslatesService.prototype.getCurrentLang = function () {
        return this._translate.currentLang;
    };
    return TranslatesService;
}());

var CommonMissingTranslationHandler = /** @class */ /*@__PURE__*/ (function () {
    function CommonMissingTranslationHandler() {
    }
    CommonMissingTranslationHandler.prototype.handle = function (params) {
        if (params.key.match(/\w+\.\w+/) &&
            params.translateService.translations['ru'] &&
            !params.translateService.translations['ru'][params.key]) {
            console.warn("\u041D\u0435\u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u0434\u043B\u044F \"" + params.key + "\"");
        }
        return params.key;
    };
    return CommonMissingTranslationHandler;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    isServer: false,
    // for prerender
    host: 'http://localhost:4000',
};



/***/ }),

/***/ "./src/main.browser.ts":
/*!*****************************!*\
  !*** ./src/main.browser.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.browser.module.ngfactory */ "./src/app/app.browser.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// not sure needed
document.addEventListener('DOMContentLoaded', function () {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_browser_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppBrowserModuleNgFactory"]).catch(function (err) { return console.log(err); });
});



/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/main.browser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/yura/Projects/angular-universal-starter/src/main.browser.ts */"./src/main.browser.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.a43a4e94afe23dbdd5d4.js.map