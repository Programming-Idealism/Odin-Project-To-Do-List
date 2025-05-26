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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nsvg {\r\n    width: 25px;\r\n}\r\n\r\n.create-button>svg {\r\n    width: 30px;\r\n}\r\n\r\n#label {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.folder-symbol {\r\n    margin-right: 5px;\r\n    width: 40px;\r\n    height: 35px;\r\n}\r\n\r\n#sidebar {\r\n    width: 300px;\r\n    min-height: 100svh;\r\n    font-family: roboto;\r\n    background-color: #0d1117;\r\n    color: white;\r\n}\r\n\r\n#todo-container {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    height: 100vh;\r\n    align-items: start;\r\n    max-width: 100vw;\r\n    min-width: 25vw;\r\n    border: 4px solid blue;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: start;\r\n    font-weight: bold;\r\n    width: 350px;\r\n    flex: 1;\r\n    border: 1px solid purple;\r\n    position: relative;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n    /* width: 100%; */\r\n}\r\n\r\n.task-delete {\r\n    position: absolute;\r\n    right: 0%;\r\n}\r\n\r\n.modal {\r\n    border: none;\r\n    border-radius: 10%;\r\n    width: 440px;\r\n}\r\n\r\n.modal-content>* {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.modal-content>#submit-button {\r\n    background-color: red;\r\n    color: white;\r\n    padding: 5px 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.modal[open] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal:not([open]) {\r\n    display: none;\r\n}\r\n\r\n.modal-content {\r\n    width: 500px;\r\n}\r\n\r\n\r\n.todo-item {\r\n    display: flex;\r\n    flex-basis: 200px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.sidebar-project-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 25px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.create-button {\r\n    width: 85px;\r\n    height: 35px;\r\n    cursor: pointer;\r\n    margin-top: 2px;\r\n    border-radius: 5px;\r\n    transition: all 500ms ease;\r\n    background-color: hsl(180, 100%, 50%);\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        background-color: hsl(193, 100%, 42%);\r\n\r\n    }\r\n}\r\n\r\n.headline {\r\n    font-family: cursive;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.task-info {\r\n    display: flex;\r\n}\r\n\r\n.task-button {\r\n    display: flex;\r\n}\r\n\r\n.project-item {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.project-list {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.delete-button {\r\n    width: 45px;\r\n    border-radius: 30%;\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n    background-color: orange;\r\n    transition: all 300ms ease;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        background-color: red;\r\n        transform: scale(1.1);\r\n    }\r\n}\r\n\r\n.header-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    border: 5px solid blue;\r\n    width: 100%;\r\n}\r\n\r\n.todo-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(200px, 1fr));\r\n}\r\n\r\n/* .form-modal {\r\n    background-color: purple;\r\n} */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_DOMHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMHandler.js */ \"./src/modules/DOMHandler.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst modal = (0,_modules_DOMHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderModal)();\r\nconst projectFormModal = (0,_modules_DOMHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm)();\r\n\r\ndocument.body.addEventListener('click', (e) => {\r\n    if (e.target.matches('.task-button')) {\r\n        projectFormModal.showModal();\r\n    }\r\n});\r\n\r\ndocument.querySelector('.create-button')\r\n    .addEventListener('click', () => modal.showModal());\r\n\r\nmodal.querySelector('#submit-button')\r\n    .addEventListener('click', e => {\r\n        const titleInput = modal.querySelector('#title');\r\n        const title = titleInput.value.trim();\r\n        if (!title) return;\r\n\r\n        const project = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(title);\r\n\r\n        const list = document.querySelector('.project-list');\r\n        const folderSymbol = document.createElement('div');\r\n        // folderSymbol.classList.add('folder-symbol');\r\n\r\n        folderSymbol.innerHTML = `<svg class=\"folder-symbol\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>book</title><path d=\"M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z\" fill=\"salmon\"/></svg>`;\r\n\r\n        const item = document.createElement('div');\r\n        const deleteButton = document.createElement('button');\r\n        item.dataset.projectId = project.id;\r\n        deleteButton.classList.add('delete-button');\r\n        deleteButton.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>delete-circle</title><path d=\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z\" /></svg>`;\r\n\r\n        deleteButton.addEventListener('click', e => {\r\n            e.stopPropagation();\r\n            (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(project.id);\r\n            item.remove();\r\n            if (window.currentProjectId === project.id) {\r\n                window.currentProjectId = null;\r\n                document.getElementById('todo-container').innerHTML = '';\r\n            }\r\n        });\r\n\r\n        const sidebarHome = document.querySelector('.sidebar-home');\r\n        sidebarHome.after(list);\r\n        item.className = 'project-item';\r\n        const label = document.createElement('span');\r\n        label.setAttribute('id', 'label');\r\n        label.textContent = title;\r\n        item.append(folderSymbol, label, deleteButton);\r\n        list.appendChild(item);\r\n\r\n        item.addEventListener('click', (e) => {\r\n            if (\r\n                !e.target.closest('.folder-symbol') &&\r\n                !e.target.closest('#label')\r\n            ) return;\r\n            const container = document.getElementById('todo-container');\r\n            container.innerHTML = '';\r\n            document.querySelectorAll('.project-item-active').forEach(element => element.remove('active'));\r\n            item.classList.add('active');\r\n            window.currentProjectId = project.id;\r\n            renderProjectView(project.id);\r\n        });\r\n\r\n        titleInput.value = '';\r\n        modal.close();\r\n    });\r\n\r\n\r\nfunction renderProjectView(projectId) {\r\n\r\n    const p = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProject)().find(pr => pr.id === projectId);\r\n    if (!p) return;\r\n\r\n    const headerWrapper = document.createElement('div');\r\n    headerWrapper.classList.add('header-wrapper');\r\n    const header = document.createElement('h1');\r\n    header.classList.add('header');\r\n    header.textContent = 'Project' + ' ' + p.title;\r\n    document.getElementById('todo-container').append(headerWrapper);\r\n    headerWrapper.appendChild(header);\r\n    const container = document.getElementById('todo-container');\r\n    const tasksWrapper = document.createElement('div');\r\n    tasksWrapper.classList.add('todo-wrapper');\r\n    container.appendChild(tasksWrapper);\r\n    // const todoItem = document.querySelector('todo-item');\r\n    // tasksWrapper.appendChild(todoItem);\r\n\r\n    // p.todo.forEach(todoData => {\r\n    //     const el = createTodoElement(todoData);\r\n    //     document.getElementById('todo-container').appendChild(el);\r\n    // });\r\n\r\n    // --- build each card and append it ---\r\n    p.todo.forEach(todoData => {\r\n        const card = (0,_modules_DOMHandler_js__WEBPACK_IMPORTED_MODULE_1__.createTodoElement)(todoData);  // <-- factory gives you a <div class=\"todo-item\">\r\n        tasksWrapper.appendChild(card);\r\n    });\r\n\r\n    (0,_modules_DOMHandler_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)();\r\n\r\n    const infoParagraph = document.querySelector('.current-task');\r\n    const count = p.todo.length;\r\n    infoParagraph.textContent = count === 0 ? \"Current Task Nonexistent\" : `${count} tasks`;\r\n}\r\n\r\nwindow.currentProjectId = null;\r\nwindow.renderProjectView = renderProjectView;\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMHandler.js":
/*!***********************************!*\
  !*** ./src/modules/DOMHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoElement: () => (/* binding */ createTodoElement),\n/* harmony export */   renderModal: () => (/* binding */ renderModal),\n/* harmony export */   renderProjectForm: () => (/* binding */ renderProjectForm),\n/* harmony export */   renderTask: () => (/* binding */ renderTask)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\n\r\n\r\n\r\nlet projectFormModal = null;\r\n\r\n\r\nfunction renderProjectForm() {\r\n    if (projectFormModal) return projectFormModal;\r\n    const formModal = document.createElement('dialog');\r\n    formModal.classList.add('form-modal');\r\n    const createButton = document.querySelector('.create-button');\r\n    createButton.addEventListener('click', () => {\r\n        const modal = document.querySelector('.modal');\r\n        // modal.style.display = 'block';\r\n        modal.showModal();\r\n    });\r\n    const form = document.createElement('form');\r\n\r\n    const titleInput = document.createElement('input');\r\n    titleInput.type = 'text';\r\n    titleInput.placeholder = 'title';\r\n    titleInput.name = 'title';\r\n    titleInput.maxLength = 12;\r\n    titleInput.required = true;\r\n\r\n    const descriptionInput = document.createElement('input');\r\n    descriptionInput.type = 'text';\r\n    descriptionInput.maxLength = 25;\r\n    descriptionInput.placeholder = 'description';\r\n    descriptionInput.name = 'description';\r\n\r\n    const dateInput = document.createElement('input');\r\n    dateInput.type = 'date';\r\n    dateInput.name = 'dueDate';\r\n    dateInput.required = true;\r\n\r\n    const prioritySelect = document.createElement('select');\r\n    prioritySelect.name = 'priority';\r\n    prioritySelect.required = true;\r\n    const priorities = ['High', 'Medium', 'Low'];\r\n\r\n    const placeholder = document.createElement('option');\r\n    placeholder.value = '';\r\n    placeholder.textContent = 'Select a Priority';\r\n    placeholder.disabled = true;\r\n    placeholder.selected = true;\r\n    prioritySelect.appendChild(placeholder);\r\n\r\n\r\n    priorities.forEach(priority => {\r\n        const option = document.createElement('option');\r\n        option.value = priority.toLowerCase();\r\n        option.textContent = priority;\r\n        prioritySelect.appendChild(option);\r\n    });\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.type = 'submit';\r\n    submitButton.textContent = 'Add Todo';\r\n\r\n    form.append(titleInput, descriptionInput, dateInput, prioritySelect, submitButton);\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        const todoData = {\r\n            title: titleInput.value,\r\n            description: descriptionInput.value,\r\n            dueDate: dateInput.value,\r\n            priority: prioritySelect.value,\r\n        };\r\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addTodo)(window.currentProjectId, todoData);\r\n        formModal.close();\r\n        form.reset();\r\n        prioritySelect.selectedIndex = 0;\r\n        const container = document.getElementById('todo-container');\r\n        container.innerHTML = '';\r\n        window.renderProjectView(window.currentProjectId);\r\n    });\r\n\r\n    document.body.appendChild(formModal);\r\n\r\n    formModal.appendChild(form);\r\n    projectFormModal = formModal;\r\n    return formModal;\r\n}\r\n\r\nfunction createTodoElement(data) {\r\n    // const todoItemWrapper = document.createElement('div');\r\n    // todoItemWrapper.classList.add('todo-wrapper');\r\n    // document.getElementById('todo-container').appendChild(todoItemWrapper);\r\n    const todoItem = document.createElement('div');\r\n    // todoItemWrapper.appendChild(todoItem);\r\n    todoItem.classList.add('todo-item');\r\n    todoItem.innerHTML = `\r\n    <h3>Title: ${data.title}</h3>\r\n    <p>Description: ${data.description}</p>\r\n    <p>Date: ${data.dueDate}</p>\r\n    <p>Priority: ${data.priority}</p>\r\n    `;\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.classList.add('task-delete');\r\n    deleteButton.innerHTML =\r\n        `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>delete-circle</title><path d=\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z\" /></svg>`;\r\n    todoItem.insertAdjacentElement('beforeend', deleteButton);\r\n    deleteButton.addEventListener('click', () => {\r\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(window.currentProjectId, data.id);\r\n        todoItem.remove();\r\n        document.getElementById('todo-container').innerHTML = '';\r\n        window.renderProjectView(window.currentProjectId);\r\n    });\r\n\r\n    // todoItemWrapper.appendChild(todoItem);\r\n    todoItem.appendChild(deleteButton);\r\n\r\n    // return todoItemWrapper;\r\n    return todoItem;\r\n}\r\n\r\nfunction renderModal() {\r\n    const modal = document.createElement('dialog');\r\n    modal.classList.add('modal');\r\n    modal.innerHTML = `\r\n    <div class=\"modal-content\">\r\n    <input type=\"text\" placeholder=\"Title?\" maxlength=\"14\" id=\"title\">\r\n    <button id=\"submit-button\">Create Project</button>\r\n    </div>\r\n    `;\r\n    // modal.style.display = 'none';\r\n    modal.close();\r\n    document.body.appendChild(modal);\r\n    return modal;\r\n}\r\n\r\nfunction renderTask(titleInput) {\r\n    let isOpened = false;\r\n    const addTask = document.createElement('div');\r\n    addTask.innerHTML = `\r\n    <h2 class=\"task-title\"></h2>\r\n    <div class=\"task-info\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\"><title>folder-open</title><path d=\"M1 4H2V3H9V4H10V5H20V6H21V18H20V19H2V18H1V4M3 9H19V7H9V6H8V5H3V9M3 17H19V11H3V17Z\" /></svg>\r\n    <p class=\"current-task\">Current task nonexistent</p>\r\n    </div>\r\n    <button class=\"task-button\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>plus-box</title><path d=\"M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z\" /></svg>\r\n    <p>Add Task</p>\r\n    </button>\r\n    `;\r\n    const todoContainer = document.getElementById('todo-container');\r\n    todoContainer.appendChild(addTask);\r\n    const taskButton = document.querySelector('.task-button');\r\n    const text = document.createElement('h3');\r\n    text.textContent = 'No Task';\r\n    taskButton.addEventListener('click', () => {\r\n        renderProjectForm().showModal();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/DOMHandler.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   getProject: () => (/* binding */ getProject),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo)\n/* harmony export */ });\n\r\n\r\nfunction load() {\r\n  return JSON.parse(localStorage.getItem('projects') || '[]');\r\n}\r\n\r\nfunction save(projects) {\r\n  localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\nfunction getProject() {\r\n  return load();\r\n}\r\n\r\nfunction addProject(title) {\r\n  const projects = load();\r\n  const id = Date.now().toString();\r\n  const newProject = { id, title, todo: [] };\r\n  projects.push(newProject);\r\n  save(projects);\r\n  return newProject;\r\n}\r\n\r\nfunction addTodo(projectId, todoData) {\r\n  const projects = load();\r\n  const p = projects.find(pr => pr.id === projectId);\r\n  if (!p) return;\r\n  p.todo = p.todo || [];\r\n  p.todo.push({ id: Date.now().toString(), ...todoData });\r\n  save(projects);\r\n}\r\n\r\nfunction removeTodo(projectId, todoId) {\r\n  const projects = load();\r\n  const p = projects.find(pr => pr.id === projectId);\r\n  if (!p) return;\r\n  p.todo = p.todo.filter(task => task.id !== todoId);\r\n  save(projects);\r\n}\r\n\r\nfunction removeProject(projectId) {\r\n  const projects = load();                        \r\n  const filtered = projects.filter(p => p.id !== projectId);\r\n  save(filtered);                        \r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;