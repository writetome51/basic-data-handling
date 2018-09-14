"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("./checkTypeOf");
function isEmpty(arrayOrString) {
    checkTypeOf_1.checkTypeOf(arrayOrString, ['array', 'string']);
    return (arrayOrString.length === 0);
}
exports.isEmpty = isEmpty;
function notEmpty(arrayOrString) {
    return !(isEmpty(arrayOrString));
}
exports.notEmpty = notEmpty;
