"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFiniteNumber_1 = require("./isFiniteNumber");
function errorIfNotNumber(variable) {
    if (isFiniteNumber_1.notFiniteNumber(variable))
        throw new Error('Input must be a finite number');
}
exports.errorIfNotNumber = errorIfNotNumber;
