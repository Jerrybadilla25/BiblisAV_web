"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/body/boxBusqueda.jsx":
/*!****************************************!*\
  !*** ./component/body/boxBusqueda.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar BoxBusqueda = function(param) {\n    var found = param.found, getCharter = param.getCharter, setEstadoFound = param.setEstadoFound, estado1 = param.estado1;\n    _s();\n    var ref //render pantalla\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), estado = ref[0], setEstado = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), palabra = ref1[0], setPalabra = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), idCharter = ref2[0], setIdCharter = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), obj = ref3[0], setObj = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), obj2 = ref4[0], setObj2 = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), msj = ref5[0], setMsj = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"use efecto otra vez\");\n        var dataIn = function() {\n            if (found.palabra) {\n                setPalabra(found.palabra);\n                setEstado(\"palabra\");\n            }\n            if (found.idCharter) {\n                setIdCharter(found.idCharter);\n                setEstado(\"charter\");\n            }\n            if (found.obj) {\n                setObj(found.obj);\n                setEstado(\"obj\");\n            }\n            if (found.obj2) {\n                setObj2(found.obj2);\n                setEstado(\"obj2\");\n            }\n            if (found.msj) {\n                setMsj(found.msj);\n                setEstado(\"msj\");\n            }\n        };\n        dataIn();\n    }, [\n        estado1\n    ]);\n    if (estado === \"palabra\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: palabra.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: x.originCharter\n                            }, void 0, false, {\n                                fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: x.numero\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 37\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: x.versiculo\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 37\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this);\n    }\n    if (estado === \"charter\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"hola charter\"\n        }, void 0, false, {\n            fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, _this);\n    }\n    if (estado === \"obj\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"hola obj\"\n        }, void 0, false, {\n            fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, _this);\n    }\n    if (estado === \"obj2\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"hola obj2\"\n        }, void 0, false, {\n            fileName: \"F:\\\\PROYECTOS\\\\NEXTJS\\\\biblia_av_web\\\\component\\\\body\\\\boxBusqueda.jsx\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, _this);\n    }\n};\n_s(BoxBusqueda, \"jk0lej04N/brVE5yr+JBfUQEjek=\");\n_c = BoxBusqueda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxBusqueda);\nvar _c;\n$RefreshReg$(_c, \"BoxBusqueda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFJO2tEQUFFTixDQUFDLENBQUNPLFNBQVM7Ozs7OzZDQUFROzs7Ozs7cUNBQzFCOzs7Ozs7NkJBQ0Y7aUJBQ1QsQ0FBQzs7Ozs7cUJBRUo7Ozs7O2lCQUNKLENBQ1Q7S0FDSjtJQUVELElBQUd6QixNQUFNLEtBQUcsU0FBUyxFQUFDO1FBQ2xCLHFCQUNJLDhEQUFDZSxLQUFHO3NCQUFDLGNBRUw7Ozs7O2lCQUFNLENBQ1Q7S0FDSjtJQUVELElBQUdmLE1BQU0sS0FBRyxLQUFLLEVBQUM7UUFDZCxxQkFDSSw4REFBQ2UsS0FBRztzQkFBQyxVQUVMOzs7OztpQkFBTSxDQUNUO0tBQ0o7SUFFRCxJQUFHZixNQUFNLEtBQUcsTUFBTSxFQUFDO1FBQ2YscUJBQ0ksOERBQUNlLEtBQUc7c0JBQUMsV0FFTDs7Ozs7aUJBQU0sQ0FDVDtLQUNKO0NBSUo7R0FwRktwQixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFzRmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2JvZHkvYm94QnVzcXVlZGEuanN4PzQyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQm94QnVzcXVlZGEgPSAoe2ZvdW5kLCBnZXRDaGFydGVyLCBzZXRFc3RhZG9Gb3VuZCwgZXN0YWRvMX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZXN0YWRvLCBzZXRFc3RhZG9dPXVzZVN0YXRlKG51bGwpIC8vcmVuZGVyIHBhbnRhbGxhXHJcbiAgICBjb25zdCBbcGFsYWJyYSwgc2V0UGFsYWJyYV09dXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpZENoYXJ0ZXIsIHNldElkQ2hhcnRlcl09dXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtvYmosIHNldE9ial09dXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtvYmoyLCBzZXRPYmoyXT11c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW21zaiwgc2V0TXNqXT11c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2UgZWZlY3RvIG90cmEgdmV6XCIpXHJcbiAgICAgICAgY29uc3QgZGF0YUluID0gKCk9PntcclxuICAgICAgICAgICAgaWYoZm91bmQucGFsYWJyYSl7XHJcbiAgICAgICAgICAgICAgICBzZXRQYWxhYnJhKGZvdW5kLnBhbGFicmEpXHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG8oXCJwYWxhYnJhXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZm91bmQuaWRDaGFydGVyKXtcclxuICAgICAgICAgICAgICAgIHNldElkQ2hhcnRlcihmb3VuZC5pZENoYXJ0ZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG8oXCJjaGFydGVyXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZm91bmQub2JqKXtcclxuICAgICAgICAgICAgICAgIHNldE9iaihmb3VuZC5vYmopXHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG8oXCJvYmpcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmb3VuZC5vYmoyKXtcclxuICAgICAgICAgICAgICAgIHNldE9iajIoZm91bmQub2JqMilcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkbyhcIm9iajJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmb3VuZC5tc2ope1xyXG4gICAgICAgICAgICAgICAgc2V0TXNqKGZvdW5kLm1zailcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkbyhcIm1zalwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhSW4oKVxyXG4gICAgfSwgW2VzdGFkbzFdKTtcclxuXHJcblxyXG4gICAgaWYoZXN0YWRvPT09XCJwYWxhYnJhXCIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbGFicmEubWFwKHg9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt4Lm9yaWdpbkNoYXJ0ZXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eC5udW1lcm99PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt4LnZlcnNpY3Vsb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZihlc3RhZG89PT1cImNoYXJ0ZXJcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGhvbGEgY2hhcnRlclxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZXN0YWRvPT09XCJvYmpcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGhvbGEgb2JqXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZihlc3RhZG89PT1cIm9iajJcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGhvbGEgb2JqMlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hCdXNxdWVkYTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3hCdXNxdWVkYSIsImZvdW5kIiwiZ2V0Q2hhcnRlciIsInNldEVzdGFkb0ZvdW5kIiwiZXN0YWRvMSIsImVzdGFkbyIsInNldEVzdGFkbyIsInBhbGFicmEiLCJzZXRQYWxhYnJhIiwiaWRDaGFydGVyIiwic2V0SWRDaGFydGVyIiwib2JqIiwic2V0T2JqIiwib2JqMiIsInNldE9iajIiLCJtc2oiLCJzZXRNc2oiLCJjb25zb2xlIiwibG9nIiwiZGF0YUluIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwieCIsImg2Iiwib3JpZ2luQ2hhcnRlciIsInAiLCJzdHJvbmciLCJudW1lcm8iLCJzcGFuIiwidmVyc2ljdWxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/body/boxBusqueda.jsx\n"));

/***/ })

});