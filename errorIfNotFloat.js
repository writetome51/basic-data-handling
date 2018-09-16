"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInteger_isFloat_1 = require("./isInteger_isFloat");
function errorIfNotFloat(variable) {
    if (!isInteger_isFloat_1.isFloat(variable))
        throw new Error('Input must be float.');
}
exports.errorIfNotFloat = errorIfNotFloat;
