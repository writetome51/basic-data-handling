"use strict";
// Returns true if variable is object, and does not consider null an object.
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(variable) {
    return !(variable === null || typeof variable !== 'object');
}
exports.isObject = isObject;
// Will return true if variable is null.
function notObject(variable) {
    return !(isObject(variable));
}
exports.notObject = notObject;
