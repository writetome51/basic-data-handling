"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("./isArray_notArray");
function errorIfNotArray(variable) {
    if (isArray_notArray_1.notArray(variable))
        throw new Error('Input must be array.');
}
exports.errorIfNotArray = errorIfNotArray;
