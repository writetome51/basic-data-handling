"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("./checkTypeOf");
function errorIfNotNumber(variable) {
    checkTypeOf_1.checkTypeOf(variable, 'number');
}
exports.errorIfNotNumber = errorIfNotNumber;
