"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(arrayOrString) {
    return (arrayOrString.length === 0);
}
exports.isEmpty = isEmpty;
function notEmpty(arrayOrString) {
    return !(isEmpty(arrayOrString));
}
exports.notEmpty = notEmpty;
