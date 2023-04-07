/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font.ttf */ "./src/font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font2.ttf */ "./src/font2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n}\n\n\n*, *:before, *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    box-sizing: border-box;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--bg);\n    font-family: 'Montserrat', system-ui, sans-serif;\n}\n\n:root {\n    /* Dark text on bg or bg-alt only \n    User interface accent acceptable foreground on either bg */\n    --bg: #e6f0f4;\n    --bg-alt: #f9e3a7;\n    --shadow: #a38d76;\n    --decorative: #f78394;\n    --accent: #37818b;\n    --dark: #302a22;\n}\n\nh1, h2 {\n    text-align: center;\n}\n\nul {\n    appearance: none;\n    list-style-type: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 40px;\n    margin: 20px 50px;\n}\n\n.nav {\n    display: flex;\n    gap: 10px;\n}\n\nbutton {\n    appearance: none;\n    font-family: inherit;\n    box-sizing: initial;\n    max-width: fit-content;\n    font-size: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--accent);\n    padding: .5rem 2rem;\n    background-color: var(--bg-alt);\n}\n\nbutton:hover {\n    transform: translate(.5px, -1px);\n    box-shadow: 3px 5px 5px var(--shadow);\n    background-color: var(--bg-alt);\n}\n\nbutton:active {\n    transform: translate(-1px, 2px);\n    box-shadow: none;\n}\n\nbutton:focus-visible,\ninput:focus-visible,\ntextarea:focus-visible {\n    outline: max(3px, 0.15em) solid var(--accent);\n    outline-offset: max(3px, 0.15em);\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    max-width: 80%;\n    margin: auto;\n}\n\n.hero {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-self: center;\n    max-width: 400px;\n    padding: 20px;\n    background-color: white;\n    border: 2px solid var(--decorative);\n    border-radius: 10px;\n}\n\nimg {\n    max-width: 100%;\n}\n\n.form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: min-content;\n    gap: 10px;\n}\n\n.input-wrapper {\n    \n}\n\ninput,\ntextarea {\n    appearance: none;\n    font-size: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--accent);\n    padding: .5rem .5rem;\n    margin: max(8px, 0.5em) 0;\n}\n\n.quote {\n    max-width: 600px;\n    padding: max(1.5rem, 10px);\n    background-color: var(--bg-alt);\n    border: 2px solid var(--dark);\n    border-radius: 10px;\n}\n\n.quote-text {\n    font-size: 1.2rem;\n}\n\n.quote-attribution {\n    font-style: italic;\n    text-align: right;\n}\n\n.hours, \n.menu-section,\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    align-self: center;\n    max-width: 400px;\n    padding: 20px 40px;\n    background-color: white;\n    border: 2px solid var(--decorative);\n    border-radius: 10px;\n}\n\n.hours-list {\n    text-align: center;\n    font-size: 1.1rem;\n    line-height: 2rem;\n}\n\n.menu-item {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.item-header {\n    display: flex;\n    justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,iHAAsE;AAC1E;;;AAGA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,gDAAgD;AACpD;;AAEA;IACI;8DAC0D;IAC1D,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,+BAA+B;IAC/B,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;IAChC,qCAAqC;IACrC,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,gBAAgB;AACpB;;AAEA;;;IAGI,6CAA6C;IAC7C,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;;AAEA;;AAEA;;IAEI,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,+BAA+B;IAC/B,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,+BAA+B;IAC/B,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["@font-face {\n    font-family: 'Montserrat';\n    src: url('./font.ttf') format('ttf'), url('./font2.ttf') format('ttf');\n}\n\n\n*, *:before, *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    box-sizing: border-box;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--bg);\n    font-family: 'Montserrat', system-ui, sans-serif;\n}\n\n:root {\n    /* Dark text on bg or bg-alt only \n    User interface accent acceptable foreground on either bg */\n    --bg: #e6f0f4;\n    --bg-alt: #f9e3a7;\n    --shadow: #a38d76;\n    --decorative: #f78394;\n    --accent: #37818b;\n    --dark: #302a22;\n}\n\nh1, h2 {\n    text-align: center;\n}\n\nul {\n    appearance: none;\n    list-style-type: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 40px;\n    margin: 20px 50px;\n}\n\n.nav {\n    display: flex;\n    gap: 10px;\n}\n\nbutton {\n    appearance: none;\n    font-family: inherit;\n    box-sizing: initial;\n    max-width: fit-content;\n    font-size: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--accent);\n    padding: .5rem 2rem;\n    background-color: var(--bg-alt);\n}\n\nbutton:hover {\n    transform: translate(.5px, -1px);\n    box-shadow: 3px 5px 5px var(--shadow);\n    background-color: var(--bg-alt);\n}\n\nbutton:active {\n    transform: translate(-1px, 2px);\n    box-shadow: none;\n}\n\nbutton:focus-visible,\ninput:focus-visible,\ntextarea:focus-visible {\n    outline: max(3px, 0.15em) solid var(--accent);\n    outline-offset: max(3px, 0.15em);\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    max-width: 80%;\n    margin: auto;\n}\n\n.hero {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-self: center;\n    max-width: 400px;\n    padding: 20px;\n    background-color: white;\n    border: 2px solid var(--decorative);\n    border-radius: 10px;\n}\n\nimg {\n    max-width: 100%;\n}\n\n.form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: min-content;\n    gap: 10px;\n}\n\n.input-wrapper {\n    \n}\n\ninput,\ntextarea {\n    appearance: none;\n    font-size: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--accent);\n    padding: .5rem .5rem;\n    margin: max(8px, 0.5em) 0;\n}\n\n.quote {\n    max-width: 600px;\n    padding: max(1.5rem, 10px);\n    background-color: var(--bg-alt);\n    border: 2px solid var(--dark);\n    border-radius: 10px;\n}\n\n.quote-text {\n    font-size: 1.2rem;\n}\n\n.quote-attribution {\n    font-style: italic;\n    text-align: right;\n}\n\n.hours, \n.menu-section,\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    align-self: center;\n    max-width: 400px;\n    padding: 20px 40px;\n    background-color: white;\n    border: 2px solid var(--decorative);\n    border-radius: 10px;\n}\n\n.hours-list {\n    text-align: center;\n    font-size: 1.1rem;\n    line-height: 2rem;\n}\n\n.menu-item {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.item-header {\n    display: flex;\n    justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formField = (type, label) => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('input-wrapper');
    
    const fieldLabel = document.createElement('label');
    fieldLabel.setAttribute('for', label.toLowerCase());
    fieldLabel.textContent = label;
    fieldWrapper.appendChild(fieldLabel);

    if (type == 'textarea') {
        const field = document.createElement('textarea');
        field.setAttribute('cols', '21');
        field.setAttribute('rows', '10');
        field.setAttribute('name', label.toLowerCase());
        field.id = label.toLowerCase();
        fieldWrapper.appendChild(field);
    } else {
        const field = document.createElement('input');
        field.setAttribute('type', type);
        field.setAttribute('name', label.toLowerCase());
        field.id = label.toLowerCase();
        fieldWrapper.appendChild(field);
    }

    const form = document.getElementById('contact-form');
    form.appendChild(fieldWrapper);
}

const contact = () => {
    const info = document.createElement('div');
    info.classList.add('contact-info');
    info.textContent = 'We deliver on weekend mornings by specific arrangement throughout Seattle\'s Central District, Capitol Hill, and First Hill. Contact us to set up your order!';
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    const form = document.createElement('form');
    form.id = 'contact-form';
    formContainer.appendChild(form);
    
    container.appendChild(info);
    container.appendChild(formContainer);

    const name = formField('text', 'Name');
    const email = formField('email', 'Email');
    const message = formField('textarea', 'Message');
    
    const submit = document.createElement('button');
    submit.textContent = 'Send';
    form.appendChild(submit);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ "./src/logo.jpg");


const home = () => {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const name = document.createElement('h1');
    name.textContent = 'Bert\'s Beignets by Bike';
    hero.appendChild(name);

    const logoContainer = document.createElement('div');
    const logoImage = document.createElement('img');
    logoImage.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
    logoContainer.appendChild(logoImage);
    hero.appendChild(logoContainer);

    container.appendChild(hero);

    const quote = document.createElement('div');
    quote.classList.add('quote');
    
    const quoteText = document.createElement('div');
    quoteText.classList.add('quote-text');
    quoteText.textContent = 'These beignets are incredible! And having them delivered to me by a carbon-neutral service? Even better. The coffee is hot, the jam is gooey, and the vibes are great!';
    quote.appendChild(quoteText);

    const quoteAttribution = document.createElement('div');
    quoteAttribution.classList.add('quote-attribution');
    quoteAttribution.textContent = 'Seph Tacular';
    quote.appendChild(quoteAttribution);

    container.appendChild(quote);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    hours.appendChild(hoursTitle);

    const hoursData = document.createElement('ul');
    hoursData.classList.add('hours-list');
    const hoursOne = document.createElement('li');
    const hoursTwo = document.createElement('li');
    hoursOne.textContent = 'Saturday 9am - 12pm';
    hoursTwo.textContent = 'Sunday 9am - 2pm';
    hoursData.appendChild(hoursOne);
    hoursData.appendChild(hoursTwo);
    hours.appendChild(hoursData);

    const hoursText = document.createElement('div');
    hoursText.textContent = 'Please contact us to arrange your order and delivery.';
    hours.appendChild(hoursText);

    container.appendChild(hours);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuSection = (title) => {
    const div = document.createElement('div');
    div.classList.add('menu-section');
    const divTitle = document.createElement('h2');
    divTitle.textContent = title;
    div.appendChild(divTitle);
    const items = document.createElement('ul');
    items.id = title.toLowerCase();
    div.appendChild(items);
    container.appendChild(div);
}

const menuItem = (group, name, price, description) => {
    const item = document.createElement('li');
    item.classList.add('menu-item');

    const itemHeader = document.createElement('div');
    itemHeader.classList.add('item-header');

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = name;
    
    const itemPrice = document.createElement('h3');
    itemPrice.textContent = price;

    const itemDecription = document.createElement('div');
    itemDecription.textContent = description;

    item.appendChild(itemHeader);
    itemHeader.appendChild(itemTitle);
    itemHeader.appendChild(itemPrice);
    item.appendChild(itemDecription);

    const parentDiv = document.getElementById(group);
    parentDiv.appendChild(item);
}

const menu = () => {
    const beignets = menuSection('Beignets');
    const plain = menuItem('beignets', 'Plain', '$2/ea', 'Unsugared beignets ready to add jam or leave savory.')
    const powdered = menuItem('beignets', 'Powdered', '$3/ea', 'Dusted with powdered sugar for classic style.')
    const cinnamon = menuItem('beignets', 'Cinnamon', '$2/ea', 'Rolled in cinnamon sugar to spice up your life.')

    const sides = menuSection('Sides');
    const berry = menuItem('sides', 'Berry Jam', '$3', 'A container of homemade seasonal berry jam.')
    const marmalade = menuItem('sides', 'Marmalade', '$3', 'Imported spiced orange marmalade.')

    const beverages = menuSection('Beverages');
    const coffee = menuItem('beverages', 'Drip Coffee', '$15', 'A warm carafe of coffee, light roast or nothing.')
    const juice = menuItem('beverages', 'Orange Juice', '$8', '16oz of hand squeezed orange juice.')
    const mimosa = menuItem('beverages', 'Mimosa', '$12', 'A flute of champagne with 4 drops of fresh orange juice.')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/font.ttf":
/*!**********************!*\
  !*** ./src/font.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c28a96c369871653b853.ttf";

/***/ }),

/***/ "./src/font2.ttf":
/*!***********************!*\
  !*** ./src/font2.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "829bb80908cf341ed710.ttf";

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cfcbd71be6893ec5b7c.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





window.onload = () => {
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    nav.classList.add('nav');
    
    const navHome = document.createElement('button');
    navHome.addEventListener('click', () => {
            clearContainer();
            (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    );
    navHome.textContent = 'Home';
    const navMenu = document.createElement('button');
    navMenu.addEventListener('click', () => {
            clearContainer();
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    );
    navMenu.textContent = 'Menu';
    const navContact = document.createElement('button');
    navContact.addEventListener('click', () => {
            clearContainer();
            (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }
    );
    navContact.textContent = 'Contact';

    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);
    content.appendChild(nav);

    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);

    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

const clearContainer = () => {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const navMenu = document.getElementById('menu');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNBO0FBQ007O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlEQUFJO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLyogRGFyayB0ZXh0IG9uIGJnIG9yIGJnLWFsdCBvbmx5IFxcbiAgICBVc2VyIGludGVyZmFjZSBhY2NlbnQgYWNjZXB0YWJsZSBmb3JlZ3JvdW5kIG9uIGVpdGhlciBiZyAqL1xcbiAgICAtLWJnOiAjZTZmMGY0O1xcbiAgICAtLWJnLWFsdDogI2Y5ZTNhNztcXG4gICAgLS1zaGFkb3c6ICNhMzhkNzY7XFxuICAgIC0tZGVjb3JhdGl2ZTogI2Y3ODM5NDtcXG4gICAgLS1hY2NlbnQ6ICMzNzgxOGI7XFxuICAgIC0tZGFyazogIzMwMmEyMjtcXG59XFxuXFxuaDEsIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm94LXNpemluZzogaW5pdGlhbDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSguNXB4LCAtMXB4KTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCA1cHggdmFyKC0tc2hhZG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlLFxcbmlucHV0OmZvY3VzLXZpc2libGUsXFxudGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG1heCgzcHgsIDAuMTVlbSkgc29saWQgdmFyKC0tYWNjZW50KTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IG1heCgzcHgsIDAuMTVlbSk7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZXJvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGVjb3JhdGl2ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciB7XFxuICAgIFxcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW07XFxuICAgIG1hcmdpbjogbWF4KDhweCwgMC41ZW0pIDA7XFxufVxcblxcbi5xdW90ZSB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IG1heCgxLjVyZW0sIDEwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnF1b3RlLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnF1b3RlLWF0dHJpYnV0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmhvdXJzLCBcXG4ubWVudS1zZWN0aW9uLFxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGVjb3JhdGl2ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ob3Vycy1saXN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLml0ZW0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlIQUFzRTtBQUMxRTs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0k7OERBQzBEO0lBQzFELGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSw2Q0FBNkM7SUFDN0MsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250LnR0ZicpIGZvcm1hdCgndHRmJyksIHVybCgnLi9mb250Mi50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAvKiBEYXJrIHRleHQgb24gYmcgb3IgYmctYWx0IG9ubHkgXFxuICAgIFVzZXIgaW50ZXJmYWNlIGFjY2VudCBhY2NlcHRhYmxlIGZvcmVncm91bmQgb24gZWl0aGVyIGJnICovXFxuICAgIC0tYmc6ICNlNmYwZjQ7XFxuICAgIC0tYmctYWx0OiAjZjllM2E3O1xcbiAgICAtLXNoYWRvdzogI2EzOGQ3NjtcXG4gICAgLS1kZWNvcmF0aXZlOiAjZjc4Mzk0O1xcbiAgICAtLWFjY2VudDogIzM3ODE4YjtcXG4gICAgLS1kYXJrOiAjMzAyYTIyO1xcbn1cXG5cXG5oMSwgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxufVxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC41cHgsIC0xcHgpO1xcbiAgICBib3gtc2hhZG93OiAzcHggNXB4IDVweCB2YXIoLS1zaGFkb3cpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG50ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbWF4KDNweCwgMC4xNWVtKSBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogbWF4KDNweCwgMC4xNWVtKTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWNvcmF0aXZlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbnB1dC13cmFwcGVyIHtcXG4gICAgXFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbTtcXG4gICAgbWFyZ2luOiBtYXgoOHB4LCAwLjVlbSkgMDtcXG59XFxuXFxuLnF1b3RlIHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZzogbWF4KDEuNXJlbSwgMTBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucXVvdGUtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucXVvdGUtYXR0cmlidXRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uaG91cnMsIFxcbi5tZW51LXNlY3Rpb24sXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWNvcmF0aXZlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhvdXJzLWxpc3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaXRlbS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZm9ybUZpZWxkID0gKHR5cGUsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgZmllbGRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmllbGRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXBwZXInKTtcbiAgICBcbiAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbGFiZWwudG9Mb3dlckNhc2UoKSk7XG4gICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGZpZWxkV3JhcHBlci5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcblxuICAgIGlmICh0eXBlID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMjEnKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBmaWVsZC5pZCA9IGxhYmVsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZpZWxkV3JhcHBlci5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgbGFiZWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGZpZWxkLmlkID0gbGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZmllbGRXcmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRXcmFwcGVyKTtcbn1cblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gJ1dlIGRlbGl2ZXIgb24gd2Vla2VuZCBtb3JuaW5ncyBieSBzcGVjaWZpYyBhcnJhbmdlbWVudCB0aHJvdWdob3V0IFNlYXR0bGVcXCdzIENlbnRyYWwgRGlzdHJpY3QsIENhcGl0b2wgSGlsbCwgYW5kIEZpcnN0IEhpbGwuIENvbnRhY3QgdXMgdG8gc2V0IHVwIHlvdXIgb3JkZXIhJztcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICdjb250YWN0LWZvcm0nO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRmllbGQoJ3RleHQnLCAnTmFtZScpO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybUZpZWxkKCdlbWFpbCcsICdFbWFpbCcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRmllbGQoJ3RleHRhcmVhJywgJ01lc3NhZ2UnKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU2VuZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5qcGcnO1xuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQmVydFxcJ3MgQmVpZ25ldHMgYnkgQmlrZSc7XG4gICAgaGVyby5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvSW1hZ2Uuc3JjID0gbG9nbztcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcbiAgICBcbiAgICBjb25zdCBxdW90ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBxdW90ZVRleHQuY2xhc3NMaXN0LmFkZCgncXVvdGUtdGV4dCcpO1xuICAgIHF1b3RlVGV4dC50ZXh0Q29udGVudCA9ICdUaGVzZSBiZWlnbmV0cyBhcmUgaW5jcmVkaWJsZSEgQW5kIGhhdmluZyB0aGVtIGRlbGl2ZXJlZCB0byBtZSBieSBhIGNhcmJvbi1uZXV0cmFsIHNlcnZpY2U/IEV2ZW4gYmV0dGVyLiBUaGUgY29mZmVlIGlzIGhvdCwgdGhlIGphbSBpcyBnb29leSwgYW5kIHRoZSB2aWJlcyBhcmUgZ3JlYXQhJztcbiAgICBxdW90ZS5hcHBlbmRDaGlsZChxdW90ZVRleHQpO1xuXG4gICAgY29uc3QgcXVvdGVBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlQXR0cmlidXRpb24uY2xhc3NMaXN0LmFkZCgncXVvdGUtYXR0cmlidXRpb24nKTtcbiAgICBxdW90ZUF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gJ1NlcGggVGFjdWxhcic7XG4gICAgcXVvdGUuYXBwZW5kQ2hpbGQocXVvdGVBdHRyaWJ1dGlvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVvdGUpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuXG4gICAgY29uc3QgaG91cnNEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBob3Vyc0RhdGEuY2xhc3NMaXN0LmFkZCgnaG91cnMtbGlzdCcpO1xuICAgIGNvbnN0IGhvdXJzT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob3Vyc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG91cnNPbmUudGV4dENvbnRlbnQgPSAnU2F0dXJkYXkgOWFtIC0gMTJwbSc7XG4gICAgaG91cnNUd28udGV4dENvbnRlbnQgPSAnU3VuZGF5IDlhbSAtIDJwbSc7XG4gICAgaG91cnNEYXRhLmFwcGVuZENoaWxkKGhvdXJzT25lKTtcbiAgICBob3Vyc0RhdGEuYXBwZW5kQ2hpbGQoaG91cnNUd28pO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzRGF0YSk7XG5cbiAgICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc1RleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIGNvbnRhY3QgdXMgdG8gYXJyYW5nZSB5b3VyIG9yZGVyIGFuZCBkZWxpdmVyeS4nO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJjb25zdCBtZW51U2VjdGlvbiA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpdGVtcy5pZCA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuY29uc3QgbWVudUl0ZW0gPSAoZ3JvdXAsIG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUhlYWRlci5jbGFzc0xpc3QuYWRkKCdpdGVtLWhlYWRlcicpO1xuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIFxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBjb25zdCBpdGVtRGVjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZWNyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgIGl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRGVjcmlwdGlvbik7XG5cbiAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncm91cCk7XG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJlaWduZXRzID0gbWVudVNlY3Rpb24oJ0JlaWduZXRzJyk7XG4gICAgY29uc3QgcGxhaW4gPSBtZW51SXRlbSgnYmVpZ25ldHMnLCAnUGxhaW4nLCAnJDIvZWEnLCAnVW5zdWdhcmVkIGJlaWduZXRzIHJlYWR5IHRvIGFkZCBqYW0gb3IgbGVhdmUgc2F2b3J5LicpXG4gICAgY29uc3QgcG93ZGVyZWQgPSBtZW51SXRlbSgnYmVpZ25ldHMnLCAnUG93ZGVyZWQnLCAnJDMvZWEnLCAnRHVzdGVkIHdpdGggcG93ZGVyZWQgc3VnYXIgZm9yIGNsYXNzaWMgc3R5bGUuJylcbiAgICBjb25zdCBjaW5uYW1vbiA9IG1lbnVJdGVtKCdiZWlnbmV0cycsICdDaW5uYW1vbicsICckMi9lYScsICdSb2xsZWQgaW4gY2lubmFtb24gc3VnYXIgdG8gc3BpY2UgdXAgeW91ciBsaWZlLicpXG5cbiAgICBjb25zdCBzaWRlcyA9IG1lbnVTZWN0aW9uKCdTaWRlcycpO1xuICAgIGNvbnN0IGJlcnJ5ID0gbWVudUl0ZW0oJ3NpZGVzJywgJ0JlcnJ5IEphbScsICckMycsICdBIGNvbnRhaW5lciBvZiBob21lbWFkZSBzZWFzb25hbCBiZXJyeSBqYW0uJylcbiAgICBjb25zdCBtYXJtYWxhZGUgPSBtZW51SXRlbSgnc2lkZXMnLCAnTWFybWFsYWRlJywgJyQzJywgJ0ltcG9ydGVkIHNwaWNlZCBvcmFuZ2UgbWFybWFsYWRlLicpXG5cbiAgICBjb25zdCBiZXZlcmFnZXMgPSBtZW51U2VjdGlvbignQmV2ZXJhZ2VzJyk7XG4gICAgY29uc3QgY29mZmVlID0gbWVudUl0ZW0oJ2JldmVyYWdlcycsICdEcmlwIENvZmZlZScsICckMTUnLCAnQSB3YXJtIGNhcmFmZSBvZiBjb2ZmZWUsIGxpZ2h0IHJvYXN0IG9yIG5vdGhpbmcuJylcbiAgICBjb25zdCBqdWljZSA9IG1lbnVJdGVtKCdiZXZlcmFnZXMnLCAnT3JhbmdlIEp1aWNlJywgJyQ4JywgJzE2b3ogb2YgaGFuZCBzcXVlZXplZCBvcmFuZ2UganVpY2UuJylcbiAgICBjb25zdCBtaW1vc2EgPSBtZW51SXRlbSgnYmV2ZXJhZ2VzJywgJ01pbW9zYScsICckMTInLCAnQSBmbHV0ZSBvZiBjaGFtcGFnbmUgd2l0aCA0IGRyb3BzIG9mIGZyZXNoIG9yYW5nZSBqdWljZS4nKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICBuYXZIb21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJDb250YWluZXIoKTtcbiAgICAgICAgICAgIG1lbnUoKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgbmF2TWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmF2Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWN0KCk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIG5hdkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZDb250YWN0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBob21lKCk7XG59O1xuXG5jb25zdCBjbGVhckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9