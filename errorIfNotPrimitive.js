"use strict";
// Although primitive types do technically include 'undefined', since when do you
// intentionally pass undefined to a function?  We'll use common sense here and not
// allow undefined to be included among allowed primitives.
Object.defineProperty(exports, "__esModule", { value: true });
function errorIfNotPrimitive(variable) {
    var primitives = ['number', 'string', 'boolean'];
    // @ts-ignore
    if (!(primitives.includes(typeof variable))) {
        throw new Error('Input must be a primitive type.');
    }
}
exports.errorIfNotPrimitive = errorIfNotPrimitive;
