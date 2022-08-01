"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ books)
/* harmony export */ });
/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);
/* harmony import */ var _model_modelbook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var _model_modelcharter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(305);
/* harmony import */ var _model_modelverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482);




(0,_config_db__WEBPACK_IMPORTED_MODULE_0__/* .dbConection */ .f)();
async function books(req, res) {
    let arrayBook = await _model_modelbook__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        version: req.body.version
    }, {
        _id: 1,
        book: 1,
        order: 1,
        capitulos: 1
    });
    let char = await _model_modelcharter__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
        version: req.body.version
    }).populate("verses");
    //let newObject = Object.assign(char, arrayBook)
    console.log();
    res.status(200).json({
        arrayBook,
        char
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [442], () => (__webpack_exec__(335)));
module.exports = __webpack_exports__;

})();