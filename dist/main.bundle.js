/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/app */ \"./src/scripts/views/app.js\");\n\r\nconst app = new _views_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  header: document.querySelector('header'),\r\n  main: document.querySelector('main'),\r\n  footer: document.querySelector('footer'),\r\n});\r\n\r\nwindow.addEventListener('hashchange', () => {\r\n  app.renderPage();\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  app.renderPage();\r\n});\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/homepage */ \"./src/scripts/views/pages/homepage.js\");\n\r\n\r\nconst routes = {\r\n    '/': _views_pages_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/routes/routes.js?");

/***/ }),

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UrlParser = {\r\n  parseActiveUrlWithCombiner() {\r\n    const url = window.location.hash.slice(1).toLowerCase();\r\n    const splitedUrl = this.urlSplitter(url);\r\n    return this.urlCombiner(splitedUrl);\r\n  },\r\n\r\n  parseActiveUrlWithoutCombiner() {\r\n    const url = window.location.hash.slice(1).toLowerCase();\r\n    return this.urlSplitter(url);\r\n  },\r\n\r\n  urlSplitter(url) {\r\n    const urlsSplits = url.split('/');\r\n    return {\r\n      resource: urlsSplits[1] || null,\r\n      id: urlsSplits[2] || null,\r\n      verb: urlsSplits[3] || null,\r\n    };\r\n  },\r\n\r\n  urlsSplitterAllVerb(url){\r\n    return url.split('/');\r\n  },\r\n\r\n  urlCombiner(splitedUrl) {\r\n    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')\r\n    + (splitedUrl.id ? '/:id' : '')\r\n    + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/routes/url-parser.js?");

/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/url-parser */ \"./src/scripts/routes/url-parser.js\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/routes */ \"./src/scripts/routes/routes.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ \"./src/scripts/views/components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ \"./src/scripts/views/components/header.js\");\n\r\n\r\n\r\n\r\nclass App {\r\n  constructor({ header, main, footer }){\r\n    this.header = header;\r\n    this.main = main;\r\n    this.footer = footer;\r\n    this.initialAppShell();\r\n  }\r\n\r\n  initialAppShell() {\r\n    this.header.innerHTML = _components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\r\n    this.footer.innerHTML = _components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n    _components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"].afterRender();\r\n    _components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].afterRender();\r\n  }\r\n\r\n  async renderPage() {\r\n    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parseActiveUrlWithCombiner();\r\n    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][url];\r\n    this.main.innerHTML = await page.init();\r\n    await page.afterRender();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/views/app.js?");

/***/ }),

/***/ "./src/scripts/views/components/footer.js":
/*!************************************************!*\
  !*** ./src/scripts/views/components/footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = {\r\n\tinit(){\r\n\t\treturn ``;\r\n\t},\r\n\tafterRender(){\r\n\t\treturn ``;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/views/components/footer.js?");

/***/ }),

/***/ "./src/scripts/views/components/header.js":
/*!************************************************!*\
  !*** ./src/scripts/views/components/header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = {\r\n\tinit(){\r\n\t\treturn ``;\r\n\t},\r\n\tafterRender(){\r\n\t\treturn ``;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/views/components/header.js?");

/***/ }),

/***/ "./src/scripts/views/pages/homepage.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/pages/homepage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homepage = {\r\n\tinit(){\r\n\t\treturn \"\";\r\n\t},\r\n\tafterRender(){\r\n\t\treturn \"\";\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n//# sourceURL=webpack://my-portfolio/./src/scripts/views/pages/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;