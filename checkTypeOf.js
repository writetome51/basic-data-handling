"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("./isArray_notArray");
function checkTypeOf(variable, expectedType) {
    var errorMessagePrefix = 'Input must be ';
    // @ts-ignore
    expectedType = expectedType.toLowerCase();
    if ((isArray_notArray_1.isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
        (isArray_notArray_1.notArray(variable) && typeof variable !== expectedType)) {
        throw new Error(errorMessagePrefix + expectedType);
    }
}
exports.checkTypeOf = checkTypeOf;
