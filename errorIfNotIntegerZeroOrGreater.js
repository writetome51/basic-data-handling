"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("./errorIfNotInteger");
function errorIfNotIntegerZeroOrGreater(num) {
    errorIfNotInteger_1.errorIfNotInteger(num);
    if (num < 0)
        throw new Error('The parameter must be an integer not less than 0');
}
exports.errorIfNotIntegerZeroOrGreater = errorIfNotIntegerZeroOrGreater;
