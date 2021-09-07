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

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".wrapper {\\r\\n  padding: 40px;\\r\\n  font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\r\\n}\\r\\ntable {\\r\\n  border: 1px solid #000;\\r\\n  border-collapse: collapse;\\r\\n}\\r\\ntd,\\r\\nth {\\r\\n  border: 1px solid #000;\\r\\n  padding: 5px;\\r\\n}\\r\\ntr:nth-child(2n) {\\r\\n  background-color: #fff;\\r\\n}\\r\\ninput::-webkit-outer-spin-button,\\r\\ninput::-webkit-inner-spin-button {\\r\\n  -webkit-appearance: none;\\r\\n  margin: 0;\\r\\n}\\r\\n.response {\\r\\n  width: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.1);\\r\\n  margin: 20px 0px 0px 0px;\\r\\n  padding: 20px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n.button {\\r\\n  display: inline-block;\\r\\n  border: 1px solid #000;\\r\\n  padding: 0px 5px;\\r\\n  border-radius: 3px;\\r\\n  cursor: pointer;\\r\\n  background-color: rgb(243, 243, 243);\\r\\n  font-size: 15px;\\r\\n  transition: 0.3s;\\r\\n  user-select: none;\\r\\n}\\r\\n.button:hover {\\r\\n  background-color: rgb(219, 219, 219);\\r\\n}\\r\\n.content__id {\\r\\n  width: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n.content__title {\\r\\n  margin: 0px 0px 20px 0px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n.content__title span {\\r\\n  font-weight: 400;\\r\\n}\\r\\n.content__body span {\\r\\n  font-weight: 700;\\r\\n}\\r\\n.content__email {\\r\\n  margin: 0px 0px 15px 0px;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n.content__img {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n}\\r\\n.content__img img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n.content__phone {\\r\\n  margin: 0px 0px 10px 0px;\\r\\n}\\r\\n.content__website {\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n.content__website span {\\r\\n  font-weight: 400;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n.content__company {\\r\\n  font-size: 20px;\\r\\n}\\r\\n.content__company span {\\r\\n  font-weight: 700;\\r\\n}\\r\\n.content__top {\\r\\n  max-height: 30px;\\r\\n}\\r\\n.content__status {\\r\\n  text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./LocalStorage.js":
/*!*************************!*\
  !*** ./LocalStorage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LocalStorage {\r\n  setLocalData(content, select, input) {\r\n    localStorage.setItem(\"content\", JSON.stringify(content));\r\n    localStorage.setItem(\"select\", select);\r\n    localStorage.setItem(\"input\", input);\r\n  }\r\n\r\n  getLocalData() {\r\n    const localState = {};\r\n    try {\r\n      localState.content = JSON.parse(localStorage.getItem(\"content\"));\r\n      localState.select = localStorage.getItem(\"select\");\r\n      localState.input = localStorage.getItem(\"input\");\r\n    } catch (err) {\r\n      console.log(err);\r\n      alert(\"We all will die!\");\r\n    }\r\n    return localState;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorage);\n\n//# sourceURL=webpack:///./LocalStorage.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ \"./LocalStorage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\n\r\nclass GetData {\r\n  constructor() {\r\n    this.layOut = document.querySelector(\".response\");\r\n    this.input = document.querySelector(\"input\");\r\n    this.getBtn = document.querySelector(\".button\");\r\n    this.select = document.querySelector(\".selector\");\r\n    this.error = `<td class=\"content__title\">Something went wrong, please try again later...</td>`;\r\n    this.eventClick();\r\n    this.local = new _LocalStorage__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    this.localState = this.local.getLocalData();\r\n    this.updateLocalData();\r\n  }\r\n\r\n  eventClick() {\r\n    this.getBtn.addEventListener(\"click\", () => {\r\n      if (this.select.value == this.localState.select && this.input.value == this.localState.input) return;\r\n      this.getData();\r\n    });\r\n  }\r\n\r\n  async getData() {\r\n    let content = await this.fetching(this.input.value, this.select.value);\r\n    if (content == this.error) return;\r\n\r\n    if (!Array.isArray(content)) {\r\n      content = [content];\r\n    }\r\n    console.log(content);\r\n\r\n    this.fillTable(content, this.select.value);\r\n    this.local.setLocalData(content, this.select.value, this.input.value);\r\n    this.localState = this.local.getLocalData();\r\n  }\r\n\r\n  updateLocalData() {\r\n    this.fillTable(this.localState.content, this.localState.select);\r\n    this.select.value = this.localState.select;\r\n    this.input.value = this.localState.input;\r\n  }\r\n\r\n  async fetching(input, select) {\r\n    let response = await fetch(`https://jsonplaceholder.typicode.com/${select}/${input}`);\r\n    let content;\r\n\r\n    if (response.status != 200) {\r\n      return this.layOut.innerHTML = this.error;\r\n    }\r\n    this.cleanTable();\r\n\r\n    if (this.select.value == \"photos\" && this.input.value == \"\") {\r\n      content = await response.json();\r\n      content = content.splice(Math.ceil(Math.random() * 5000), 10);\r\n    } else {\r\n      content = await response.json();\r\n    }\r\n\r\n    return content;\r\n  }\r\n\r\n  cleanTable() {\r\n    this.layOut.innerHTML = \"\";\r\n  }\r\n\r\n  fillTable(content, select) {\r\n    switch (select) {\r\n      case \"posts\": return this.postsTableCell(content);\r\n      case \"comments\": return this.commentsTableCell(content);\r\n      case \"albums\": return this.albumsTableCell(content);\r\n      case \"photos\": return this.photosTableCell(content);\r\n      case \"todos\": return this.todosTableCell(content);\r\n      case \"users\": return this.usersTableCell(content);\r\n      default: return;\r\n    }\r\n  }\r\n\r\n  postsTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__title\">Title</th>\r\n      <th class=\"content__body\">Text</th>\r\n    </tr>`;\r\n\r\n    content.map(({ id, title, body }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__title\">${title}</td>\r\n      <td class=\"content__body\">${body}</td>\r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n\r\n  commentsTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__title\">Title</th>\r\n      <th class=\"content__email\">Email</th>\r\n      <th class=\"content__body\">Text</th>\r\n    </tr>`;\r\n\r\n    content.map(({ id, name, email, body }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__title\">${name}</td>\r\n      <td class=\"content__email\">${email}</td>\r\n      <td class=\"content__body\">${body}</td>\r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n\r\n  albumsTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__title\">Title</th>\r\n    </tr>`;\r\n\r\n    content.map(({ id, title }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__title\">${title}</td>\r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n\r\n  photosTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__img\">Images</th>\r\n      <th class=\"content__title\">Text</th>\r\n    </tr>`;\r\n\r\n    content.map(({ id, url, title }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__img\"><img src=\"${url}\"></img></td>\r\n      <td class=\"content__title\">${title}</td>\r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n\r\n  todosTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__title\">Title</th>\r\n      <th class=\"content__title\">Status</th>\r\n    </tr>`;\r\n\r\n    content.map(({ id, title, completed }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__title\">${title}</td>\r\n      <td class=\"content__status\">${completed == true ? \"Completed\" : \"In the process\"}</td>\r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n\r\n  usersTableCell(content) {\r\n    let table = `<tr>\r\n      <th class=\"content__id\">№</th>\r\n      <th class=\"content__title\">Full name</th>\r\n      <th class=\"content__title\">Nick</th>\r\n      <th class=\"content__email\">Email</th>\r\n      <th class=\"content__phone\">Phone</th>\r\n      <th class=\"content__body\">Full address</th>\r\n      <th class=\"content__website\">Website</th>\r\n      <th class=\"content__company\">Company</th>          \r\n    </tr>`;\r\n\r\n    content.map(({ id, name, username, email, phone, address: { city, street }, website, company }) => {\r\n      table += `<tr>\r\n      <td class=\"content__id\">${id}</td>\r\n      <td class=\"content__title\">${name}</td>\r\n      <td class=\"content__title\">${username}</td>\r\n      <td class=\"content__email\">${email}</td>\r\n      <td class=\"content__phone\">${phone}</td>\r\n      <td class=\"content__body\"><span>City:</span> ${city}<br><span>Address:</span> ${street}</td>\r\n      <td class=\"content__website\"><span>${website}</span></td>\r\n      <td class=\"content__company\">${company.name}</td>          \r\n    </tr>`;\r\n    });\r\n\r\n    this.layOut.innerHTML = table;\r\n  }\r\n}\r\n\r\nconst getData = new GetData();\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;