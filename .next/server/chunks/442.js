"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ dbConection)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

(__webpack_require__(142).config)();
const conn = {
    isConnected: false
};
async function dbConection() {
    if (conn.isConnected) return;
    const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    });
    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
}
mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on("connected", ()=>{
    console.log("Mongo is enable");
});
mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on("error", (err)=>{
    console.log(err);
});


/***/ }),

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const newBook = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    nomenclatura: {
        type: String
    },
    book: {
        type: String
    },
    userCreator: {
        type: String
    },
    version: {
        type: String
    },
    testament: {
        type: String
    },
    order: {
        type: Number
    },
    like: {
        type: Number,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    },
    capitulos: [
        {
            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
            ref: "charte"
        }
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.book || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("book", newBook));


/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const newCharte = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    idBook: {
        type: String
    },
    charter: {
        type: String
    },
    order: {
        type: Number
    },
    version: {
        type: String
    },
    userCreator: {
        type: String
    },
    testament: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    },
    verses: [
        {
            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
            ref: "verse"
        }
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.charte || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("charte", newCharte));


/***/ }),

/***/ 482:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const newVerse = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String
    },
    originCharter: {
        type: String
    },
    numero: {
        type: Number
    },
    versiculo: {
        type: String
    },
    version: {
        type: String
    },
    userCreator: {
        type: String
    },
    testament: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.verse || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("verse", newVerse));


/***/ })

};
;