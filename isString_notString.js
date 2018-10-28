"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(variable) {
    return (typeof variable === 'string');
}
exports.isString = isString;
function notString(variable) {
    return !(isString(variable));
}
exports.notString = notString;
