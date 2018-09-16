"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInteger_isFloat_1 = require("./isInteger_isFloat");
function errorIfNotInteger(variable) {
    if (isInteger_isFloat_1.notInteger(variable))
        throw new Error('Input must be integer');
}
exports.errorIfNotInteger = errorIfNotInteger;
