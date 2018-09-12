"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_not_array_1 = require("../arrays/no_modify/return_boolean/is_not_array");
function checkTypeOf(variable, expectedType) {
    var errorMessagePrefix = 'Input must be ';
    // @ts-ignore
    expectedType = expectedType.toLowerCase();
    if ((is_not_array_1.isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
        (is_not_array_1.notArray(variable) && typeof variable !== expectedType)) {
        throw new Error(errorMessagePrefix + expectedType);
    }
}
exports.checkTypeOf = checkTypeOf;
