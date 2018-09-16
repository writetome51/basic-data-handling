"use strict";
// Triggers error if type of variable is not expectedType.
Object.defineProperty(exports, "__esModule", { value: true });
// Remember: typeof null does not return 'null'.  It returns 'object'.
function checkTypeOf(variable, expectedType) {
    // @ts-ignore
    expectedType = expectedType.toLowerCase();
    if (typeof variable !== expectedType)
        throw new Error('Input must be ' + expectedType);
}
exports.checkTypeOf = checkTypeOf;
