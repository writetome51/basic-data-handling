"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if data has a .0 at the end (i.e, 1.0), this returns true.
function isInteger(data) {
    return Number.isInteger(data); // no errors.
}
exports.isInteger = isInteger;
// if data has a .0 at the end (i.e, 1.0), this returns false.
function notInteger(data) {
    return (!isInteger(data));
}
exports.notInteger = notInteger;
// if data has a .0 at the end (i.e, 1.0), this returns false.
function isFloat(data) {
    return (typeof data === 'number' && notInteger(data));
}
exports.isFloat = isFloat;
