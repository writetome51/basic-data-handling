"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("./isArray_notArray");
// Triggers error is type of variable is not expectedType.
// @param expectedType can be one of the specified strings or an array of the
// specified strings if you're allowing variable to be more than one type.
// Remember: typeof null does not return 'null'.  It returns 'object'.
function checkTypeOf(variable, expectedType) {
    var errorMessagePrefix = 'Input must be ';
    if (typeof expectedType === 'string')
        checkTypeSinglePossibility();
    else if (isArray_notArray_1.isArray(expectedType))
        checkTypeMultiplePossibilities();
    function checkTypeSinglePossibility() {
        // @ts-ignore
        expectedType = expectedType.toLowerCase();
        if ((isArray_notArray_1.isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
            (isArray_notArray_1.notArray(variable) && typeof variable !== expectedType)) {
            throw new Error(errorMessagePrefix + expectedType);
        }
    }
    function checkTypeMultiplePossibilities() {
        for (var i = 0; i < expectedType.length; ++i) {
            // @ts-ignore
            expectedType[i] = expectedType[i].toLowerCase();
        }
        // @ts-ignore
        if ((isArray_notArray_1.isArray(variable) &&
            // @ts-ignore
            !(expectedType.includes('object')) && !(expectedType.includes('array'))) ||
            // @ts-ignore
            (isArray_notArray_1.notArray(variable) && !(expectedType.includes(typeof variable)))) {
            // @ts-ignore
            expectedType = expectedType.join(' or ');
            throw new Error(errorMessagePrefix + expectedType);
        }
    }
}
exports.checkTypeOf = checkTypeOf;
