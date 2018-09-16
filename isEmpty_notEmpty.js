"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("./isArray_notArray");
function isEmpty(arrayOrString) {
    if (typeof arrayOrString !== 'string' && isArray_notArray_1.notArray(arrayOrString)) {
        throw new Error('Input must be array or string.');
    }
    return (arrayOrString.length === 0);
}
exports.isEmpty = isEmpty;
function notEmpty(arrayOrString) {
    return !(isEmpty(arrayOrString));
}
exports.notEmpty = notEmpty;
