"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFiniteNumber_1 = require("./isFiniteNumber");
function errorIfNotNumber(variable) {
    if (isFiniteNumber_1.isFiniteNumber(variable))
        return;
    else
        throw new Error('Input must be number');
}
exports.errorIfNotNumber = errorIfNotNumber;
