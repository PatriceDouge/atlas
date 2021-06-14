/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/adapters */ \"next-auth/adapters\");\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst options = {\n  site: process.env.NEXTAUTH_URL,\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: {\n      port: 465,\n      host: 'smtp.gmail.com',\n      secure: true,\n      auth: {\n        user: process.env.EMAIL_USERNAME,\n        pass: process.env.EMAIL_PASSWORD\n      },\n      tls: {\n        rejectUnauthorized: false\n      }\n    },\n    from: process.env.EMAIL_FROM\n  })],\n  adapter: next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default().Prisma.Adapter({\n    prisma\n  }),\n  session: {\n    jwt: true,\n    maxAge: 30 * 24 * 60 * 60 // 30 days\n\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdGxhcy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MjhjMiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJvcHRpb25zIiwic2l0ZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJzZXJ2ZXIiLCJwb3J0IiwiaG9zdCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwiRU1BSUxfVVNFUk5BTUUiLCJwYXNzIiwiRU1BSUxfUEFTU1dPUkQiLCJ0bHMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsImFkYXB0ZXIiLCJBZGFwdGVycyIsInNlc3Npb24iLCJqd3QiLCJtYXhBZ2UiLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQURKO0FBRWRDLFdBQVMsRUFBRSxDQUNUQyxnRUFBQSxDQUFnQjtBQUNkQyxVQUFNLEVBQUU7QUFDTkMsVUFBSSxFQUFFLEdBREE7QUFFTkMsVUFBSSxFQUFFLGdCQUZBO0FBR05DLFlBQU0sRUFBRSxJQUhGO0FBSU5DLFVBQUksRUFBRTtBQUNKQyxZQUFJLEVBQUVWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxjQURkO0FBRUpDLFlBQUksRUFBRVosT0FBTyxDQUFDQyxHQUFSLENBQVlZO0FBRmQsT0FKQTtBQVFOQyxTQUFHLEVBQUU7QUFDSEMsMEJBQWtCLEVBQUU7QUFEakI7QUFSQyxLQURNO0FBYWRDLFFBQUksRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0I7QUFiSixHQUFoQixDQURTLENBRkc7QUFtQmRDLFNBQU8sRUFBRUMsd0VBQUEsQ0FBd0I7QUFDL0J2QjtBQUQrQixHQUF4QixDQW5CSztBQXNCZHdCLFNBQU8sRUFBRTtBQUNQQyxPQUFHLEVBQUUsSUFERTtBQUVQQyxVQUFNLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLEVBRmhCLENBRW1COztBQUZuQjtBQXRCSyxDQUFoQjtBQTRCQSwrREFBZSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0MsZ0RBQVEsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVcxQixPQUFYLENBQXJDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5pbXBvcnQgQWRhcHRlcnMgZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBzaXRlOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5FbWFpbCh7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcG9ydDogNDY1LFxuICAgICAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSTkFNRSxcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgICAgdGxzOiB7XG4gICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pXG4gIF0sXG4gIGFkYXB0ZXI6IEFkYXB0ZXJzLlByaXNtYS5BZGFwdGVyKHtcbiAgICBwcmlzbWEsXG4gIH0pLFxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAgLy8gMzAgZGF5c1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/adapters":
/*!*************************************!*\
  !*** external "next-auth/adapters" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/adapters");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();