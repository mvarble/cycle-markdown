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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMarkdownCompiler", function() { return makeMarkdownCompiler; });
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var xstream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstream__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unist_util_visit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cycle_isolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _cycle_isolate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cycle_isolate__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * makeMarkdownCompiler
 *
 * This module exports a component responsible for converting markdown streams
 * to embedded Cycle.js apps.
 */
// module dependencies


 // our export

/* harmony default export */ __webpack_exports__["default"] = (makeMarkdownCompiler);


function makeMarkdownCompiler(opts) {
  // parse the options
  var _parseOpts = parseOpts(opts),
      compiler = _parseOpts.compiler,
      components = _parseOpts.components,
      domKey = _parseOpts.domKey,
      vdomKey = _parseOpts.vdomKey,
      sinkKeys = _parseOpts.sinkKeys;

  var customTags = Object.keys(components);

  var customTag = function customTag(node) {
    return node && customTags.includes(node.sel);
  }; // create the component


  function MarkdownCompiler(_ref) {
    var markdown = _ref.markdown,
        otherSources = _objectWithoutProperties(_ref, ["markdown"]);

    // parse the markdown into a master sink
    var sink$ = markdown.map(function (md) {
      // compiler the markdown
      var tree = compiler(md); // these will be used for storing the sinks in a list

      var sinks = []; // this will perform the component generation on all of the custom tags,
      // along with keying their dom sources for mapping the DOM streams in.

      unist_util_visit__WEBPACK_IMPORTED_MODULE_1___default()(tree, customTag, function (node) {
        // key the node for later replacement
        node._customId = sinks.length; // run the component and add its sink to the array

        var component = _cycle_isolate__WEBPACK_IMPORTED_MODULE_2___default()(components[node.sel], "md-".concat(sinks.length));
        var sink = component(_objectSpread({}, otherSources, _defineProperty({}, vdomKey, xstream__WEBPACK_IMPORTED_MODULE_0___default.a.of(node))));
        sinks.push(sink); // return the signal to no longer traverse descendants

        return 'skip';
      }); // build the DOM stream

      var domSinks = sinks.map(function (sink) {
        return sink[domKey] || xstream__WEBPACK_IMPORTED_MODULE_0___default.a.of(undefined);
      });
      var dom$ = xstream__WEBPACK_IMPORTED_MODULE_0___default.a.combine.apply(xstream__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(domSinks)).map(function (doms) {
        return customMap(tree, function (node) {
          return typeof node._customId !== 'undefined' ? doms[node._customId] : node;
        });
      }); // build the sink

      return sinkKeys.reduce(function (obj, key) {
        return _objectSpread({}, obj, _defineProperty({}, key, xstream__WEBPACK_IMPORTED_MODULE_0___default.a.merge.apply(xstream__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(sinks.map(function (sink) {
          return sink[key] || xstream__WEBPACK_IMPORTED_MODULE_0___default.a.empty();
        })))));
      }, _defineProperty({}, domKey, dom$));
    }); // extract the sink from within the stream

    return sinkKeys.reduce(function (obj, key) {
      return _objectSpread({}, obj, _defineProperty({}, key, sink$.map(function (sink) {
        return sink[key];
      }).flatten()));
    }, _defineProperty({}, domKey, sink$.map(function (sink) {
      return sink[domKey];
    }).flatten()));
  } // return the component


  return MarkdownCompiler;
}

function customMap(tree, iteratee) {
  function preorder(node) {
    var newNode = _objectSpread({}, iteratee(node));

    if (typeof node._customId !== 'undefined') return newNode;

    if (node.children) {
      newNode.children = node.children.map(preorder);
    }

    return newNode;
  }

  return preorder(tree);
}

function parseOpts(opts) {
  if (_typeof(opts) !== 'object' || typeof opts.compiler !== 'function' || _typeof(opts.components) !== 'object' || opts.sinkKeys.some(function (key) {
    return typeof key !== 'string';
  }) || opts.domKey && typeof opts.domKey !== 'string' || opts.vdomKey && typeof opts.vdomKey !== 'string') throw new TypeError('makeMarkdownCompiler: the options were insufficient.');
  return _objectSpread({
    domKey: 'DOM',
    vdomKey: 'vdom'
  }, opts);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("xstream");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("unist-util-visit");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@cycle/isolate");

/***/ })
/******/ ]);