module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processor", function() { return processor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compiler", function() { return compiler; });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_rehype__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rehype_raw__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rehype_katex__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hast_util_to_snabbdom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var hast_util_to_snabbdom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hast_util_to_snabbdom__WEBPACK_IMPORTED_MODULE_6__);







var processor = unified__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_1___default.a, {
  allowDangerousHTML: true
}).use(remark_math__WEBPACK_IMPORTED_MODULE_2___default.a).use(remark_rehype__WEBPACK_IMPORTED_MODULE_3___default.a, {
  allowDangerousHTML: true
}).use(rehype_raw__WEBPACK_IMPORTED_MODULE_4___default.a).use(rehype_katex__WEBPACK_IMPORTED_MODULE_5___default.a).use(function () {
  return hast_util_to_snabbdom__WEBPACK_IMPORTED_MODULE_6___default.a;
});

function compiler(md) {
  return processor.runSync(processor.parse(md));
}



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("unified");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("remark-parse");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("remark-math");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("remark-rehype");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("rehype-raw");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("rehype-katex");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("hast-util-to-snabbdom");

/***/ })
/******/ ]);