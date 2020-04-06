module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("xstream")},function(e,t){e.exports=require("unist-util-visit")},function(e,t){e.exports=require("@cycle/isolate")},function(e,t,r){"use strict";r.r(t),r.d(t,"makeMarkdownCompiler",(function(){return d}));var n=r(0),o=r.n(n),u=r(1),i=r.n(u),c=r(2),f=r.n(c);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e){var t=function(e){if("object"!==a(e)||"function"!=typeof e.compiler||"object"!==a(e.components)||e.sinkKeys.some((function(e){return"string"!=typeof e}))||e.domKey&&"string"!=typeof e.domKey||e.vdomKey&&"string"!=typeof e.vdomKey)throw new TypeError("makeMarkdownCompiler: the options were insufficient.");return s({domKey:"DOM",vdomKey:"vdom"},e)}(e),r=t.compiler,n=t.components,u=t.domKey,c=t.vdomKey,p=t.sinkKeys,y=Object.keys(n),d=function(e){return e&&y.includes(e.sel)};return function(e){var t=e.markdown,a=b(e,["markdown"]),y=t.map((function(e){var t=r(e),y=[];i()(t,d,(function(e){e._customId=y.length;var t=f()(n[e.sel],"md-".concat(y.length))(s({},a,m({},c,o.a.of(e))));return y.push(t),"skip"}));var b=y.map((function(e){return e[u]||o.a.of(void 0)})),O=o.a.combine.apply(o.a,l(b)).map((function(e){return function(e,t){return function e(r){var n=s({},t(r));return void 0!==r._customId||r.children&&(n.children=r.children.map(e)),n}(e)}(t,(function(t){return void 0!==t._customId?e[t._customId]:t}))}));return p.reduce((function(e,t){return s({},e,m({},t,o.a.merge.apply(o.a,l(y.map((function(e){return e[t]||o.a.empty()}))))))}),m({},u,O))}));return p.reduce((function(e,t){return s({},e,m({},t,y.map((function(e){return e[t]})).flatten()))}),m({},u,y.map((function(e){return e[u]})).flatten()))}}t.default=d}]);