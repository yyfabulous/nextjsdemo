"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"development\" !== 'production';\nconsole.log(process);\nconst server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsR0FBRyxHQUFULENBQWEsaUJBQXdCLENBQVk7QUFDakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO0FBQ1osS0FBSyxDQUFDQyxNQUFNLEdBQUdKLEdBQUcsR0FBRyxDQUF1Qix5QkFBRyxDQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbmZpZy9pbmRleC50cz82ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5jb25zb2xlLmxvZyhwcm9jZXNzKTtcbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBkZXYgPyAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyA6ICdodHRwczovL3lvdXJfZGVwbG95bWVudC5zZXJ2ZXIuY29tJztcbiJdLCJuYW1lcyI6WyJkZXYiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.ts\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config/index.ts\");\n\n\n\nfunction Post(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const query = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Post \",\n            props.posts.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"query \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yy/code/nextjsdemo/pages/posts/[id].tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yy/code/nextjsdemo/pages/posts/[id].tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\nasync function getServerSideProps() {\n    // 调用外部 API 获取博文列表\n    const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__.server}/api/hello/abc`);\n    const posts = await res.json();\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNGO1NBRTVCRSxJQUFJLENBQUNDLEtBQVUsRUFBRSxDQUFDO0lBQ3pCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSixzREFBUztJQUN4QixLQUFLLENBQUNLLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFLO0lBRTFCLE1BQU0sNkVBQ0hDLENBQUc7O1lBQUMsQ0FDRTtZQUFDSCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsSUFBSTt3RkFDckJGLENBQUc7O29CQUFDLENBQU07b0JBQUNELEtBQUssQ0FBQ0ksRUFBRTs7Ozs7Ozs7Ozs7OztBQUcxQixDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLEdBQUcsQ0FBQztJQUMxQyxFQUFrQjtJQUNsQixLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssSUFBSVgsMkNBQU0sQ0FBQyxjQUFjO0lBQ2hELEtBQUssQ0FBQ00sS0FBSyxHQUFHLEtBQUssQ0FBQ0ksR0FBRyxDQUFDRSxJQUFJO0lBRTVCLE1BQU0sQ0FBQyxDQUFDO1FBQ05WLEtBQUssRUFBRSxDQUFDO1lBQ05JLEtBQUs7UUFDUCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5mdW5jdGlvbiBQb3N0KHByb3BzOiBhbnkpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFBvc3Qge3Byb3BzLnBvc3RzLm5hbWV9XG4gICAgICA8ZGl2PnF1ZXJ5IHtxdWVyeS5pZH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgLy8g6LCD55So5aSW6YOoIEFQSSDojrflj5bljZrmlofliJfooahcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvaGVsbG8vYWJjYCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0c1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzZXJ2ZXIiLCJQb3N0IiwicHJvcHMiLCJyb3V0ZXIiLCJxdWVyeSIsImRpdiIsInBvc3RzIiwibmFtZSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();